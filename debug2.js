const fs = require('fs');
const html = fs.readFileSync('C:/Users/Brittany/solana-blackjack/index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/);
if (match) {
  const lines = match[1].split('\n');
  let depth = 0;
  for (let i = 330; i < 360; i++) {
    for (let c of lines[i]) {
      if (c === '{') depth++;
      if (c === '}') depth--;
    }
    console.log('Line', i + 1, 'depth:', depth, '|', lines[i].substring(0, 60));
  }
}