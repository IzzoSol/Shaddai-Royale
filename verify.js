const fs = require('fs');
const html = fs.readFileSync('C:/Users/Brittany/solana-blackjack/index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/);
if (match) {
  try {
    new Function(match[1]);
    console.log('JS syntax OK');
  } catch(e) {
    console.log('Error:', e.message);
  }
}