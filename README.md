# Neon Blackjack — Solana Web3 Blackjack Game

[![Solana](https://img.shields.io/badge/Solana-Web3.js-9945FF?logo=solana&logoColor=white)](https://solana.com)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-010101?logo=socket.io&logoColor=white)](https://socket.io)
[![GitHub Stars](https://img.shields.io/github/stars/IzzoIzzoIzzo/Solana-BlackJack?style=social)](https://github.com/IzzoIzzoIzzo/Solana-BlackJack/stargazers)

> A neon-styled, feature-complete blackjack game with Phantom wallet connection, AI agent opponents, tournament mode, card counting training, and a real-time Node.js/Socket.IO backend — built for the Solana ecosystem.

---

## What It Is

Neon Blackjack is a browser-based blackjack game designed for the Solana ecosystem. It runs on a local Node.js server and serves a single, self-contained frontend. Players connect their Phantom wallet to receive bonus chips, then choose from four game modes: solo arcade play, watching AI agents battle the dealer, a multi-agent tournament, or a card counting trainer.

The backend handles all game state (deck management, hand resolution, splits, doubles, side bets, tournaments) via a REST API with real-time Socket.IO events. The frontend is a polished, dark neon casino UI — no framework required.

---

## Features

### Game Modes
- **Arcade** — Solo play vs. the dealer with full casino rules
- **Agent CPU** — Watch 7 AI agents compete simultaneously; observe their strategies live
- **Tournament** — Enter a 5-round chip tournament against AI opponents; a prize pool accumulates from buy-ins
- **Card Counting Trainer** — Hi-Lo system practice with a running count coach

### Gameplay
- Hit, Stand, Double Down, Split, Surrender
- Soft-17 dealer rule (dealer hits soft 17)
- 6-deck shoe reshuffled each hand
- Side bets: Perfect Pairs, 21+3, Lucky Lucky
- XP and level progression (5 levels)
- 12 achievements
- Per-session win / loss / blackjack statistics

### AI Agents (7 built-in strategies)
| Agent | Style | Behavior |
|-------|-------|----------|
| NEO | Aggressive | Hits until 18, doubles freely |
| CIPHER | Conservative | Stands on 13+, cautious doubles |
| VIPER | Lucky | Semi-random, chases doubles |
| GHOST | Random | Pure randomness |
| TURTLE | Math | Follows basic strategy |
| PHOENIX | High Roller | Hits until 17, doubles on 9+ |
| SHADOW | Stealth | Conditional doubling on 10 |

### Wallet
- Phantom Wallet connection via `window.solana`
- Connecting grants +2,000 bonus chips
- Wallet address displayed in the header (first 4 / last 4 chars)
- x402 payment architecture in place for future on-chain wagers

### Audio
- Procedural Web Audio API sound effects — deal clicks, win fanfares, loss tones (no external assets required)

---

## Play / Run It

### Prerequisites
- [Node.js](https://nodejs.org) v18+
- [Phantom Wallet](https://phantom.app) browser extension (optional — for wallet bonus)

### Install & Start

```bash
git clone https://github.com/IzzoIzzoIzzo/Solana-BlackJack.git
cd Solana-BlackJack
npm install
npm start
```

The server starts on **http://localhost:3001**

Open `index.html` directly in your browser (or navigate to `http://localhost:3001` if you configure static file serving).

> The frontend fetches game state from `localhost:3001`. Make sure the server is running before opening the page.

### Quick Play (no server needed)

The Arcade tab runs entirely client-side. You can open `index.html` directly in a browser without starting the server for single-player arcade mode. Agent CPU, Tournament, and multi-player features require the backend.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla JS, HTML5, CSS3 (no framework) |
| Fonts | Orbitron + Rajdhani via Google Fonts |
| Backend | Node.js + Express |
| Realtime | Socket.IO 4 |
| Wallet | Solana Web3.js v1 + Phantom |
| HTTP | Axios |
| Audio | Web Audio API (procedural, zero assets) |

### Backend API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/create-game` | Create a new game session |
| POST | `/api/join-game` | Join as a human player |
| POST | `/api/join-agent` | Add an AI agent to the table |
| POST | `/api/place-bet` | Place a bet |
| POST | `/api/start-hand` | Deal opening cards |
| POST | `/api/hit` | Player hits |
| POST | `/api/stand` | Player stands |
| POST | `/api/double` | Double down |
| POST | `/api/split` | Split a pair |
| POST | `/api/surrender` | Surrender for half-bet back |
| POST | `/api/agent-play` | Run all AI agents' turns |
| POST | `/api/dealer-play` | Resolve dealer hand + payouts |
| POST | `/api/tournament/start` | Start a tournament with AI fill |
| GET | `/api/game/:id` | Get full game state |
| GET | `/api/agents` | List all agent strategies |

---

## Screenshots

> _Drop your screenshots in a `/screenshots` folder and link them here._

```
screenshots/
  arcade.png
  tournament.png
  agent-cpu.png
  card-counter.png
```

---

## Roadmap

- [ ] On-chain wagers via x402 + Solana Pay
- [ ] Devnet SOL → chips conversion (real transactions)
- [ ] Leaderboard persisted to a database
- [ ] Multiplayer lobby (human vs. human via Socket.IO rooms)
- [ ] SPL token side-bet integration
- [ ] Mobile-responsive layout polish
- [ ] Persistent player profiles (wallet-linked)

---

## Project Structure

```
solana-blackjack/
├── index.html        # Full frontend — UI, game logic, Phantom wallet
├── server.js         # Node/Express backend — game state, AI agents, Socket.IO
├── package.json
└── debug2.js         # Dev utility
```

---

## Built by IzzoSol

Made by **[IzzoSol](https://x.com/IzzoSol)** · Follow on X for updates

Also on X: **[SHADDAI AI](https://x.com/shaddaiAI)**

Part of the ⚡ **[SHADDAI ecosystem](https://github.com/IzzoIzzoIzzo/Shaddai)** — an AI Agent Marketplace built on Solana.
