/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(n,e,u)=>(u.configurable=!0,u.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(n,e,u),u),t=[];for(let n=0;n<256;++n)t.push((n+256).toString(16).slice(1));function y(n,e=0){return(t[n[e+0]]+t[n[e+1]]+t[n[e+2]]+t[n[e+3]]+"-"+t[n[e+4]]+t[n[e+5]]+"-"+t[n[e+6]]+t[n[e+7]]+"-"+t[n[e+8]]+t[n[e+9]]+"-"+t[n[e+10]]+t[n[e+11]]+t[n[e+12]]+t[n[e+13]]+t[n[e+14]]+t[n[e+15]]).toLowerCase()}let c;const i=new Uint8Array(16);function m(){if(!c){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");c=crypto.getRandomValues.bind(crypto)}return c(i)}const g=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),r={randomUUID:g};function p(n,e,u){var o;if(r.randomUUID&&!e&&!n)return r.randomUUID();n=n||{};const d=n.random??((o=n.rng)==null?void 0:o.call(n))??m();if(d.length<16)throw new Error("Random bytes length must be >= 16");return d[6]=d[6]&15|64,d[8]=d[8]&63|128,y(d)}export{l as e,p as v};
