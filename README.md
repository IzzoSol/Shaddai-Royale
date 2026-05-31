# NEON BLACKJACK CASINO

A fully-featured neon-styled blackjack game with Solana x402 payments, AI agents, tournaments, and card counting training.

## Features

### Game Modes
- **Arcade Mode**: Single player vs dealer with full gameplay
- **Agent CPU Mode**: Watch AI agents compete at the table
- **Tournament Mode**: Compete against agents in buy-in tournaments
- **Card Counting Trainer**: Practice Hi-Lo counting system

### Gameplay Features
- Split, Double Down, Surrender
- Side Bets: Perfect Pairs, 21+3, Lucky Lucky
- XP & Level Progression (5 levels)
- Achievement System (12 achievements)
- Win/Loss/Blackjack Statistics

### AI Agents
- NEO (Aggressive)
- CIPHER (Conservative)
- VIPER (Lucky)
- GHOST (Random)
- TURTLE (Math-based)
- PHOENIX (Aggressive High Roller)
- SHADOW (Stealth Strategy)
- Custom agents can be added

### Wallet Integration
- Phantom Wallet connection
- SOL to Chips conversion
- x402 payment ready

## Installation

```bash
cd solana-blackjack
npm install
npm start
```

## Running

```bash
npm start
```

Server runs on `http://localhost:3001`

Open `index.html` in a browser to play.

## Agent System

Agents use different strategies:
- **Aggressive**: Hit on anything under 18
- **Conservative**: Stand on 13+
- **Lucky**: Random decisions
- **Math**: Optimal basic strategy
- **Stealth**: Conditional doubling

## Tech Stack
- Frontend: Vanilla JS, HTML5, CSS3
- Backend: Node.js, Express, Socket.IO
- Wallet: Solana Web3.js, Phantom