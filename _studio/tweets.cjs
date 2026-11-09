'use strict';
const fs = require('fs'), path = require('path'), len = (s) => [...s].length;
const S = 'https://styxelysium.com';
const BIO = 'sUSD: a private dollar on Elysium, Hyperliquid\'s L2. Strike it with USDC, shield it, send it unseen. Every crossing burns $STYX.';
const T = [
['Pinned · launch', 'styx-keyart.png', `Private money, carried unseen.\n\nSTYX is live on Elysium: sUSD, a fractional-algorithmic dollar you strike with USDC, shield, and send with the amount and both parties hidden.\n\n${S}\n\n$STYX`],
['How it works', 'styx-howitworks.png', `How the crossing works:\n\nI. Strike sUSD with USDC\nII. Shield it into the private pool\nIII. Send it across. Amount and both parties vanish from the ledger\n\nUnshield or redeem any time.\n\n${S}`],
['The Pyre', 'styx-pyre-15s.mp4', `Every crossing pays the ferryman.\n\n30 bps on shield, send, unshield. 50 bps on redeem. Tolls gather in USDC and each epoch buy $STYX at market and burn it.\n\nUsage is the buyback.\n\n${S}`],
['Mechanism', 'styx-mechanism.png', `The full stack in one picture:\n\nmint → shield → pay unseen → redeem\n\nThe ledger sees a nullifier and a new commitment. No amount. No sender. No recipient.\n\n$STYX on Elysium`],
['vs UST & ZEC', 'styx-vs-luna-zcash.png', `UST was a dollar with no privacy and no backing.\nZcash is privacy with no dollar.\n\nsUSD is the third thing: a private dollar with a hard USDC floor.\n\nNow on Elysium.\n\n$STYX`],
['Can\'t fail like UST', 'styx-cant-fail-like-ust.png', `Stress test: the share token goes to $0.\n\nUST → $0.00.\nsUSD → still ≥ $0.55 in hard USDC, and the collateral ratio ratchets up under stress, not down.\n\nNo reflexive backing. No unbounded printing.\n\n$STYX`],
['Bonds', 'styx-bonds-10s.mp4', `Bonds are open on Elysium.\n\nDeposit USDC, take $STYX 20% below market, vesting over 5 days. Your USDC goes straight to the reserve and mints nothing.\n\nEvery bond deepens the floor.\n\n${S}`],
['Dark Pool', 'styx-darkpool-10s.mp4', `The Dark Pool.\n\nShielded 1x long or short on tokenized stocks and majors: $NVDA $TSLA $HOOD $COIN $MSTR $SPY $BTC $ETH.\n\nYour position stays hidden. Your P&L stays yours. Settled in sUSD.\n\n$STYX`],
['Notes & Seal', 'styx-rite3-10s.mp4', `Rite III on Elysium:\n\nThe Note: a pay-link anyone can claim, no address needed.\nThe Seal: a view key that discloses one statement to one reader, once.\n\nPrivate by default. Provable when you choose.\n\n$STYX`],
['Tech recap', 'styx-tech-recap.png', `What's live on styxelysium.com:\n\n✓ sUSD mint & redeem\n✓ shielded pool\n✓ Notes + Seal\n✓ The Pyre burn\n✓ Bonds + The Forge\n✓ The Vigil staking\n✓ Charon's Cut referrals\n✓ Dark Pool\n\n$STYX`],
['Day one', 'styx-day-one.png', `Day one on Elysium: complete.\n\nEverything on this sheet is live. Not a roadmap. A receipt.\n\nConnect, deposit USDC, strike sUSD, cross unseen.\n\n${S}\n\n$STYX`],
['Why Elysium', 'styx-pillars.png', `Why Elysium?\n\nHyperliquid's L2 brings HYPE gas, HyperEVM settlement and the deepest onchain trader base in crypto. What it didn't have was a private dollar.\n\nNow it does.\n\n$STYX`],
];
let bad = 0, md = `# STYX on Elysium X kit\n\n## Handle\n\`\`\`\n@StyxElysium\n\`\`\`\n\n## Display name\n\`\`\`\nSTYX | $STYX\n\`\`\`\n\n## Bio (${len(BIO)}/160)\n\`\`\`\n${BIO}\n\`\`\`\n\n## Website\n\`\`\`\n${S}\n\`\`\`\n\n## Profile images\n- Avatar: \`styx-pfp.png\`\n- Header: \`styx-banner.png\`\n\n## Tweets (all ≤245)\n`;
T.forEach(([n, m, t], i) => { const k = len(t); if (k > 245) { bad++; console.log('TOO LONG', i + 1, k); } md += `\n### ${i + 1}. ${n} · ${k} chars · media: \`${m}\`\n\`\`\`\n${t}\n\`\`\`\n`; });
if (len(BIO) > 160) { bad++; console.log('BIO', len(BIO)); }
fs.writeFileSync(path.join(__dirname, '..', 'brand', 'X-KIT.md'), md); console.log(bad ? 'FIX' : 'all fit', T.map(([, , t]) => len(t)).join(','), 'bio', len(BIO));
