// one-shot: STYX (Robinhood Chain, gold/stone) -> STYX on Elysium (Hyperliquid mint on dark teal). run once.
'use strict';
const fs = require('fs'), path = require('path'), R = path.join(__dirname, '..');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.name === 'node_modules' ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const files = walk(R).filter((f) => /\.(html|js|cjs|md|json)$/.test(f) && !f.endsWith('port-elysium.js'));
const COL = [['#080706','#04100d'],['#0a0807','#06110f'],['#100c09','#0a1a17'],['#181109','#0f2420'],['#e9ddc6','#e9f6f2'],['#a58f6a','#7d9d95'],['#6a5942','#4e6e66'],
 ['#c9a25e','#50e3c2'],['#e9cf95','#97fce4'],['#d8b873','#7ff0d6'],['#7d5e2e','#1f7a66'],['#62a187','#3ee0a0'],['#b3502f','#f0526b'],['#d8503a','#f0526b'],
 ['#0d0a06','#071512'],['#0c0906','#061310'],['#141008','#0c1d19'],['#241c12','#14302a'],['#1a0e08','#0b1f1a'],['#0f1410','#0a1a17'],['#0b0a10','#06110f'],['#c9bda6','#b9d4cc'],['#d8b9ab','#f3b5bf'],
 ['rgba(201,162,94','rgba(80,227,194'],['rgba(98,161,135','rgba(62,224,160'],['rgba(216,80,58','rgba(240,82,107'],['rgba(179,80,47','rgba(240,82,107'],['rgba(8,7,6','rgba(4,16,13'],['rgba(5,4,3','rgba(2,8,7'],['rgba(255,244,214','rgba(214,255,245'],['rgba(233,221,198','rgba(233,246,242']];
const COL2 = COL.concat(COL.filter(([a]) => a[0] === '#').map(([a, b]) => ['%23' + a.slice(1), '%23' + b.slice(1)]));
const TXT = [['wallet_addEthereumChain\', params: [{ chainId: CHAIN_HEX, chainName: \'Robinhood Chain\', nativeCurrency: { name: \'Ether\', symbol: \'ETH\', decimals: 18 }, rpcUrls: [\'https://rpc.mainnet.chain.robinhood.com\'], blockExplorerUrls: [\'https://explorer.mainnet.chain.robinhood.com\']',
  'wallet_addEthereumChain\', params: [{ chainId: CHAIN_HEX, chainName: \'Elysium\', nativeCurrency: { name: \'HYPE\', symbol: \'HYPE\', decimals: 18 }, rpcUrls: [\'https://testnet-rpc.elysium.kinetiq.xyz\'], blockExplorerUrls: [\'https://test-explorer.elysium.kinetiq.xyz\']'],
 ["const CHAIN_HEX = '0x1237';", "const CHAIN_HEX = '0x185d9';   // Elysium (Hyperliquid L2) 99801"],
 ['https://explorer.mainnet.chain.robinhood.com', 'https://test-explorer.elysium.kinetiq.xyz'], ['https://rpc.mainnet.chain.robinhood.com', 'https://testnet-rpc.elysium.kinetiq.xyz'],
 ["network: 'robinhood', chainId: 4663", "network: 'elysium', chainId: 99801"], ["p.chainId === 'robinhood'", "p.chainId === (process.env.DEX_CHAIN || 'hyperevm')"],
 ['(chainId 4663)', '(chainId 99801, Kinetiq\'s Hyperliquid L2)'], ['RH_RPCS', 'ELYSIUM_RPCS'],
 ['Robinhood Chain', 'Elysium'], ['on Robinhood', 'on Elysium'], ['Robinhood', 'Elysium'],
 ['styxrh.xyz', 'styxelysium.com'], ['StyxRH', 'StyxElysium'], ['StyxOnRH', 'StyxElysium'], ['USDG', 'USDC'], ['usdg', 'usdc']];
for (const f of files) { let s = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n'), o = s;
  for (const [a, b] of COL2) s = s.split(a).join(b);
  for (const [a, b] of TXT) s = s.split(a).join(b);
  if (s !== o) fs.writeFileSync(f, s); }
let s = fs.readFileSync(path.join(R, 'server/index.js'), 'utf8');
s = s.replace(/const USDC = \{ addr: \(process\.env\.USDC_ADDR \|\| '0x[0-9a-fA-F]{40}'\)\.toLowerCase\(\), dec: 6 \};[^\n]*/, "const USDC = { addr: (process.env.USDC_ADDR || '').toLowerCase(), dec: +(process.env.USDC_DEC || 6) };   // USDC ERC-20 on Elysium — set USDC_ADDR");
s = s.replace('const PORT = process.env.PORT || 8282;', 'const PORT = process.env.PORT || 8282;');
fs.writeFileSync(path.join(R, 'server/index.js'), s); console.log('ported', files.length);
