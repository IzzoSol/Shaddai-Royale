// Companion portraits (the ladies) for the phone + table, via FLUX (Pollinations).
const fs = require('fs'); const path = require('path');
const OUT = path.join(__dirname, '..', 'assets', 'companions'); fs.mkdirSync(OUT, { recursive: true });
const STYLE = 'glamorous beautiful woman, classy sexy high-roller casino, elegant evening gown, luxury jewelry, ' +
  'vibrant neon casino illustration, bold cinematic anime cover art, dramatic rim lighting, highly detailed symmetric face, ' +
  'teal gold and magenta neon, no text, no words, no watermark';
const LADIES = [
  { id:'jade',    prompt:`a stunning supermodel in a sleek designer emerald-green gown, poised and commanding, ${STYLE}` },
  { id:'nova',    prompt:`a striking art-world supermodel, effortless cool, minimalist black gown, edgy chic, ${STYLE}` },
  { id:'soleil',  prompt:`a sun-kissed Miami model with a quick smile, hot-pink and gold gown, tropical glam, ${STYLE}` },
  { id:'reign',   prompt:`a sharp New York supermodel in an elegant all-black gown, gallery-owner elegance, quietly powerful, ${STYLE}` },
  { id:'cassidy', prompt:`a beautiful down-to-earth Texas woman, warm genuine smile, classy simple gold dress and a Rolex, the ride-or-die, ${STYLE}` },
  { id:'fattony', prompt:`Fat Tony, a large intimidating Italian-American loan shark man in a charcoal pinstripe three-piece suit, gold rings and chains, smoking a cigar, menacing confident grin, dim neon backroom, ${STYLE}` },
];
const W = 896, H = 1152; // bigger portraits
let SEED = 101;
async function gen(prompt, tries=0){ const seed=(SEED+=7);
  const url=`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${W}&height=${H}&nologo=true&model=flux&seed=${seed}`;
  const res=await fetch(url); if(res.status===200){const b=Buffer.from(await res.arrayBuffer()); if(b.length>3000) return b;}
  if(tries<4){await new Promise(r=>setTimeout(r,4000)); return gen(prompt,tries+1);} throw new Error('HTTP '+res.status); }
(async()=>{ for(const l of LADIES){ process.stdout.write(`  ${l.id} ... `);
  try{ const b=await gen(l.prompt); fs.writeFileSync(path.join(OUT,`${l.id}.png`),b); console.log(`OK ${(b.length/1024).toFixed(0)}KB`);}catch(e){console.log('FAIL '+e.message);} }
  console.log('Done ->',OUT); })();
