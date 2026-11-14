import{c as n,s as c}from"./index-Bs6EjiUB.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),s="property-photos";function i(e,r){try{const o=new URL(e),a=`/object/public/${r}/`,t=o.pathname.indexOf(a);return t===-1?null:decodeURIComponent(o.pathname.slice(t+a.length))}catch{return null}}async function p(e,r){const o=r.map(t=>i(t,e)).filter(t=>!!t);if(o.length===0)return;const{error:a}=await c.storage.from(e).remove(o);if(a)throw a}async function u(e){await p(s,e)}export{m as P,u as r};
