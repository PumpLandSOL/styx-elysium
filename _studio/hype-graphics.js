// STYX hype graphics ×4 → brand/styx-hype-*.png (2400×1350). node _studio/hype-graphics.js
'use strict';
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const TMP = 'C:/Users/efrai/AppData/Local/Temp/claude/styxg'; fs.mkdirSync(TMP, { recursive: true });
const OUT = path.join(__dirname, '..', 'brand');
const HEAD = `<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=EB+Garamond:ital@0;1&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet"><style>
:root{--ink:#e9f6f2;--dim:#7d9d95;--mut:#4e6e66;--gold:#50e3c2;--gold2:#97fce4;--verd:#3ee0a0;--red:#f0526b;--line:rgba(80,227,194,.18);--line2:rgba(80,227,194,.34)}
*{margin:0;padding:0;box-sizing:border-box}html,body{font-family:'EB Garamond',serif;color:var(--ink);background:#04100d;overflow:hidden}
.ci{font-family:'Cinzel',serif}.mo{font-family:'JetBrains Mono',monospace}
.stage{position:relative;width:2400px;height:1350px;overflow:hidden;background:radial-gradient(120% 80% at 50% -8%,rgba(80,227,194,.08),transparent 55%),radial-gradient(70% 60% at 50% 120%,rgba(62,224,160,.07),transparent 60%),#04100d}
.grain{position:absolute;inset:0;opacity:.05;background-image:radial-gradient(rgba(233,246,242,.5) .5px,transparent .6px);background-size:3px 3px}
.wrap{position:absolute;inset:0;padding:110px 160px;display:flex;flex-direction:column;align-items:center;text-align:center}
.eye{font-size:30px;letter-spacing:.34em;color:var(--gold);text-transform:uppercase}
.big{font-weight:800;font-size:150px;line-height:1.02;margin-top:34px;letter-spacing:.01em}
.big em{font-style:normal;color:var(--gold)}.big i{font-style:normal;color:var(--verd)}
.sub{font-size:44px;font-style:italic;color:var(--dim);margin-top:40px;max-width:1500px;line-height:1.35}
.red{display:inline-block;background:#071512;box-shadow:inset 0 0 0 2px rgba(80,227,194,.35);border-radius:4px;vertical-align:middle}
.foot{position:absolute;left:0;right:0;bottom:56px;text-align:center;font-family:'JetBrains Mono';font-size:28px;color:var(--mut);letter-spacing:.1em}.foot b{color:var(--gold)}
.coin{width:300px;height:300px;border-radius:50%;border:5px solid var(--gold);display:flex;align-items:center;justify-content:center;font-family:'Cinzel';font-size:150px;color:var(--gold);box-shadow:0 0 90px rgba(80,227,194,.25),inset 0 0 0 14px #04100d,inset 0 0 0 16px rgba(80,227,194,.5)}
.row{display:flex;gap:60px;align-items:center;justify-content:center;margin-top:70px}
.pill{font-family:'Cinzel';font-weight:700;font-size:54px;padding:30px 60px;border:2px solid var(--line2);border-radius:6px;background:rgba(16,12,9,.8);color:var(--ink)}
.pill.v{color:var(--verd);border-color:rgba(62,224,160,.5)}.pill.g{color:var(--gold2);border-color:var(--gold);box-shadow:0 0 60px rgba(80,227,194,.25)}
.op{font-family:'Cinzel';font-size:70px;color:var(--gold)}
.led{margin-top:60px;width:1500px;border:1px solid var(--line2);background:rgba(16,12,9,.85);font-family:'JetBrains Mono';font-size:34px;text-align:left}
.led div{display:flex;gap:40px;padding:22px 40px;border-top:1px solid var(--line)}.led div:first-child{border-top:0}
.led span:first-child{color:var(--mut);width:180px}.led span:nth-child(2){color:var(--dim);flex:1}.led span:last-child{color:var(--verd)}
.led .k{color:var(--red)!important}
</style></head><body><div class="stage"><div class="grain"></div><div class="wrap">`;
const FOOT = (t) => `</div><div class="foot"><b>styxelysium.com</b> · ${t}</div></div></body></html>`;
const G = {
  'styx-hype-redacted': HEAD + `<div class="eye ci">The first private dollar on Elysium</div><div class="big ci"><span class="red" style="width:560px;height:130px"></span> by <em>default.</em></div><div class="sub">Shield sUSD and your balance, your amount and your counterparty vanish from the ledger. Everyone else sees a black bar.</div>
    <div class="led"><div><span>#4127</span><span>shield · commitment 7Kq9…w2Ff</span><span class="red" style="width:180px;height:38px"></span></div><div><span>#4128</span><span>private · nullifier Hx3d…9pLm · proof ✓</span><span class="red" style="width:180px;height:38px"></span></div><div><span>#4129</span><span>private · nullifier Qa71…c0Rt · proof ✓</span><span class="red" style="width:180px;height:38px"></span></div></div>` + FOOT('sUSD · $STYX · private money, carried unseen'),
  'styx-hype-backed': HEAD + `<div class="eye ci">Backed and algorithmic</div><div class="big ci">The <i>dollar</i> that<br>burns a <em>coin</em> to exist.</div>
    <div class="row"><div class="pill v">USDC collateral</div><div class="op">+</div><div class="pill">$STYX burned</div><div class="op">=</div><div class="pill g">sUSD · $1.00</div></div>
    <div class="sub">Every sUSD is struck from hard USDC plus a burned $STYX share. Demand for the dollar is demand for the coin.</div>` + FOOT('sUSD · $STYX · Elysium'),
  'styx-hype-ferryman': HEAD + `<div class="eye ci">ΣΤΥΞ · the river you cross</div><div class="coin" style="margin-top:30px">Ω</div><div class="big ci" style="font-size:120px">The ferryman<br>takes <em>one coin.</em></div><div class="sub">Every crossing burns $STYX. Every redemption mints it back. The supply breathes with the dollar.</div>` + FOOT('$STYX · the coin for the crossing'),
  'styx-hype-launch': HEAD + `<div class="eye ci">Elysium · USDC · EVM</div><div class="big ci"><em>STYX</em> is live.</div><div class="sub" style="font-size:52px;margin-top:30px">sUSD: a private, fractional-algorithmic stablecoin.<br>Strike it. Shield it. Send it unseen.</div>
    <div class="row" style="margin-top:80px"><div class="pill">I · Strike</div><div class="pill v">II · Shield</div><div class="pill g">III · Send unseen</div></div>` + FOOT('sUSD · $STYX · private money, carried unseen'),
};
for (const [n, html] of Object.entries(G)) {
  const f = path.join(TMP, n + '.html'); fs.writeFileSync(f, html);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=2400,1350', '--virtual-time-budget=8000', '--screenshot=' + path.join(TMP, n + '.png'), 'file:///' + f.replace(/\\/g, '/')], { stdio: 'ignore' });
  fs.copyFileSync(path.join(TMP, n + '.png'), path.join(OUT, n + '.png')); console.log('✓', n);
}
