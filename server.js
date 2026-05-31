const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

let games = {};
let players = {};

const SUITS = ['♠','♥','♦','♣'];
const RANKS = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function newDeck() {
  let d = [];
  for (let s of SUITS) for (let r of RANKS) d.push({ r, s, v: r === 'A' ? 11 : (['J','Q','K'].includes(r) ? 10 : +r) });
  for (let i = d.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [d[i], d[j]] = [d[j], d[i]]; }
  return d;
}

function hv(hand) { let v = 0, a = 0; hand.forEach(c => { v += c.v; if (c.r === 'A') a++; }); while (v > 21 && a > 0) { v -= 10; a--; } return v; }
function bj(hand) { return hand.length === 2 && hv(hand) === 21; }

app.post('/api/create-game', (req, res) => {
  const { playerName, buyIn } = req.body;
  const gameId = Math.random().toString(36).substr(2, 8).toUpperCase();
  games[gameId] = {
    id: gameId,
    deck: newDeck(),
    dealer: [],
    players: [],
    phase: 'betting',
    pot: 0,
    createdAt: Date.now()
  };
  players[gameId] = {};
  res.json({ gameId, message: 'Game created' });
});

app.post('/api/join-game', (req, res) => {
  const { gameId, playerName, buyIn } = req.body;
  if (!games[gameId]) return res.status(404).json({ error: 'Game not found' });
  const player = { id: Date.now().toString(), name: playerName, chips: buyIn, bet: 0, hands: [], ready: false };
  games[gameId].players.push(player);
  io.to(gameId).emit('player-joined', player);
  res.json({ player, game: games[gameId] });
});

app.post('/api/place-bet', (req, res) => {
  const { gameId, playerId, bet } = req.body;
  const game = games[gameId];
  const player = game.players.find(p => p.id === playerId);
  if (!player || player.chips < bet) return res.status(400).json({ error: 'Insufficient chips' });
  player.chips -= bet;
  player.bet = bet;
  io.to(gameId).emit('bet-placed', { playerId, bet, chips: player.chips });
  res.json({ success: true, chips: player.chips });
});

app.post('/api/start-hand', (req, res) => {
  const { gameId } = req.body;
  const game = games[gameId];
  game.deck = newDeck();
  game.dealer = [];
  game.players.forEach(p => { p.hands = [{ cards: [], done: false, bet: p.bet }]; p.bet = 0; });
  
  game.dealer.push(game.deck.pop());
  game.players.forEach(p => p.hands[0].cards.push(game.deck.pop()));
  game.dealer.push(game.deck.pop());
  game.players.forEach(p => p.hands[0].cards.push(game.deck.pop()));
  
  io.to(gameId).emit('hand-started', { dealer: game.dealer, players: game.players });
  res.json({ success: true });
});

app.post('/api/hit', (req, res) => {
  const { gameId, playerId, handIndex } = req.body;
  const game = games[gameId];
  const player = game.players.find(p => p.id === playerId);
  if (!player) return res.status(404).json({ error: 'Player not found' });
  
  const hand = player.hands[handIndex];
  hand.cards.push(game.deck.pop());
  io.to(gameId).emit('card-dealt', { playerId, handIndex, card: hand.cards[hand.cards.length - 1] });
  res.json({ hand });
});

app.post('/api/stand', (req, res) => {
  const { gameId, playerId, handIndex } = req.body;
  const game = games[gameId];
  const player = game.players.find(p => p.id === playerId);
  if (player) { player.hands[handIndex].done = true; }
  io.to(gameId).emit('player-stood', { playerId, handIndex });
  res.json({ success: true });
});

app.post('/api/double', (req, res) => {
  const { gameId, playerId, handIndex } = req.body;
  const game = games[gameId];
  const player = game.players.find(p => p.id === playerId);
  if (!player || player.chips < player.hands[handIndex].bet) return res.status(400).json({ error: 'Insufficient chips' });
  
  player.chips -= player.hands[handIndex].bet;
  player.hands[handIndex].bet *= 2;
  player.hands[handIndex].cards.push(game.deck.pop());
  player.hands[handIndex].done = true;
  io.to(gameId).emit('player-doubled', { playerId, handIndex, bet: player.hands[handIndex].bet });
  res.json({ success: true, hand: player.hands[handIndex], chips: player.chips });
});

app.post('/api/dealer-play', (req, res) => {
  const { gameId } = req.body;
  const game = games[gameId];
  
  while (hv(game.dealer) < 17) { game.dealer.push(game.deck.pop()); }
  
  const dv = hv(game.dealer);
  game.players.forEach(p => {
    p.hands.forEach(hand => {
      const pv = hv(hand.cards);
      if (pv > 21) hand.result = 'bust';
      else if (dv > 21) { hand.result = 'win'; p.chips += hand.bet * 2; }
      else if (pv > dv) { hand.result = 'win'; p.chips += hand.bet * 2; }
      else if (pv === dv) { hand.result = 'push'; p.chips += hand.bet; }
      else hand.result = 'lose';
    });
  });
  
  io.to(gameId).emit('hand-ended', { dealer: game.dealer, players: game.players });
  res.json({ dealer: game.dealer, players: game.players });
});

app.get('/api/game/:gameId', (req, res) => {
  const game = games[req.params.gameId];
  if (!game) return res.status(404).json({ error: 'Game not found' });
  res.json(game);
});

io.on('connection', (socket) => {
  socket.on('join-room', (gameId) => { socket.join(gameId); });
  socket.on('leave-room', (gameId) => { socket.leave(gameId); });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => console.log(`Blackjack server running on port ${PORT}`));