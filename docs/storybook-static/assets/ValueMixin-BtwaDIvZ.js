import{n as l}from"./index-HW6KrQZO.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function c(e,n=0){return(r[e[n+0]]+r[e[n+1]]+r[e[n+2]]+r[e[n+3]]+"-"+r[e[n+4]]+r[e[n+5]]+"-"+r[e[n+6]]+r[e[n+7]]+"-"+r[e[n+8]]+r[e[n+9]]+"-"+r[e[n+10]]+r[e[n+11]]+r[e[n+12]]+r[e[n+13]]+r[e[n+14]]+r[e[n+15]]).toLowerCase()}let d;const p=new Uint8Array(16);function m(){if(!d){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");d=crypto.getRandomValues.bind(crypto)}return d(p)}const v=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),o={randomUUID:v};function I(e,n,a){var t;if(o.randomUUID&&!n&&!e)return o.randomUUID();e=e||{};const i=e.random??((t=e.rng)==null?void 0:t.call(e))??m();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,c(i)}var y=Object.defineProperty,g=(e,n,a,i)=>{for(var t=void 0,u=e.length-1,s;u>=0;u--)(s=e[u])&&(t=s(n,a,t)||t);return t&&y(n,a,t),t};const f=e=>{class n extends e{constructor(){super(...arguments),this.dataAriaLabel=null}}return g([l({type:String,reflect:!0,attribute:"data-aria-label"})],n.prototype,"dataAriaLabel"),n};var x=Object.defineProperty,b=(e,n,a,i)=>{for(var t=void 0,u=e.length-1,s;u>=0;u--)(s=e[u])&&(t=s(n,a,t)||t);return t&&x(n,a,t),t};const C=e=>{class n extends e{constructor(){super(...arguments),this.name=""}}return b([l({reflect:!0,type:String})],n.prototype,"name"),n};var h=Object.defineProperty,_=(e,n,a,i)=>{for(var t=void 0,u=e.length-1,s;u>=0;u--)(s=e[u])&&(t=s(n,a,t)||t);return t&&h(n,a,t),t};const D=e=>{class n extends e{constructor(){super(...arguments),this.value=""}}return _([l({reflect:!0,type:String})],n.prototype,"value"),n};export{f as D,C as N,D as V,I as v};
