// STYX caption / title overlay — black stone, antique gold, verdigris. Cinzel + EB Garamond.
'use strict';
module.exports = String.raw`(() => {
  const s = document.createElement('style');
  s.textContent = "#dmT{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transition:opacity .45s;pointer-events:none}#dmT.on{opacity:1}#dmT.solid{background:#04100d}#dmT .t{font-family:'Cinzel',serif;font-weight:700;font-size:82px;line-height:1.05;letter-spacing:.02em;color:#e9f6f2;text-align:center;max-width:1100px}#dmT .t em{font-style:normal;color:#50e3c2}#dmT .t i{font-style:normal;color:#3ee0a0}#dmT .s{font-family:'EB Garamond',Georgia,serif;font-style:italic;font-size:24px;color:#8f8470;margin-top:22px;letter-spacing:.04em}#dmC{position:fixed;left:40px;bottom:40px;z-index:99998;max-width:640px;background:#0a1a17;color:#e9f6f2;border:1px solid #3a2f1c;border-left:4px solid #50e3c2;padding:16px 24px;opacity:0;transform:translateY(24px);transition:opacity .3s,transform .3s;box-shadow:0 24px 50px -20px rgba(0,0,0,.8)}#dmC.on{opacity:1;transform:none}#dmC .k{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.3em;color:#50e3c2;text-transform:uppercase}#dmC .v{font-family:'EB Garamond',Georgia,serif;font-size:27px;line-height:1.25;margin-top:6px}#dmC .v b{font-weight:400;color:#3ee0a0}";
  document.head.appendChild(s);
  const T = document.createElement('div'); T.id = 'dmT'; T.innerHTML = '<div class="t"></div><div class="s"></div>'; document.body.appendChild(T);
  const C = document.createElement('div'); C.id = 'dmC'; C.innerHTML = '<div class="k"></div><div class="v"></div>'; document.body.appendChild(C);
  window.__title = (t, sub, mode) => { T.querySelector('.t').innerHTML = t; T.querySelector('.s').textContent = sub || ''; T.className = 'on ' + (mode || ''); };
  window.__titleHide = () => T.classList.remove('on');
  window.__cap = (k, v) => { C.querySelector('.k').textContent = k || ''; C.querySelector('.v').innerHTML = v || ''; C.classList.add('on'); };
  window.__capHide = () => C.classList.remove('on');
  window.__scrollTo = (y, dur) => new Promise((res) => { const y0 = window.scrollY; const t0 = performance.now(); dur = dur || 1000; (function fr(t) { const k = Math.min(1, (t - t0) / dur), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; window.scrollTo(0, y0 + (y - y0) * e); if (k < 1) requestAnimationFrame(fr); else res(); })(t0); });
  window.__scrollToSel = (sel, dur, frac) => { const el = document.querySelector(sel); if (!el) return Promise.resolve(); return window.__scrollTo(window.scrollY + el.getBoundingClientRect().top - window.innerHeight * (frac == null ? .1 : frac), dur); };
  return true;
})()`;
