/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,I=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),V=new WeakMap;let tt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&V.set(e,t))}return t}toString(){return this.cssText}};const ot=n=>new tt(typeof n=="string"?n:n+"",void 0,B),Pt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new tt(e,n,B)},ht=(n,t)=>{if(I)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},W=I?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ot(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:at,defineProperty:lt,getOwnPropertyDescriptor:ct,getOwnPropertyNames:dt,getOwnPropertySymbols:pt,getPrototypeOf:ut}=Object,f=globalThis,q=f.trustedTypes,$t=q?q.emptyScript:"",M=f.reactiveElementPolyfillSupport,b=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?$t:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},et=(n,t)=>!at(n,t),K={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&lt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=ct(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const l=i==null?void 0:i.call(this);o.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=ut(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,s=[...dt(e),...pt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(W(i))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:j;this._$Em=i,this[i]=l.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??et)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,M==null||M({ReactiveElement:y}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,N=w.trustedTypes,Z=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,st="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+_,_t=`<${it}>`,g=document,P=()=>g.createComment(""),C=n=>n===null||typeof n!="object"&&typeof n!="function",D=Array.isArray,ft=n=>D(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",k=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,J=/>/g,A=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,Q=/"/g,nt=/^(?:script|style|textarea|title)$/i,At=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Ct=At(1),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Y=new WeakMap,m=g.createTreeWalker(g,129);function rt(n,t){if(!D(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const mt=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",r=S;for(let l=0;l<e;l++){const h=n[l];let c,p,a=-1,u=0;for(;u<h.length&&(r.lastIndex=u,p=r.exec(h),p!==null);)u=r.lastIndex,r===S?p[1]==="!--"?r=F:p[1]!==void 0?r=J:p[2]!==void 0?(nt.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=A):p[3]!==void 0&&(r=A):r===A?p[0]===">"?(r=i??S,a=-1):p[1]===void 0?a=-2:(a=r.lastIndex-p[2].length,c=p[1],r=p[3]===void 0?A:p[3]==='"'?Q:G):r===Q||r===G?r=A:r===F||r===J?r=S:(r=A,i=void 0);const $=r===A&&n[l+1].startsWith("/>")?" ":"";o+=r===S?h+_t:a>=0?(s.push(c),h.slice(0,a)+st+h.slice(a)+_+$):h+_+(a===-2?l:$)}return[rt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const l=t.length-1,h=this.parts,[c,p]=mt(t,e);if(this.el=U.createElement(c,s),m.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=m.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(st)){const u=p[r++],$=i.getAttribute(a).split(_),O=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:O[2],strings:$,ctor:O[1]==="."?yt:O[1]==="?"?vt:O[1]==="@"?Et:R}),i.removeAttribute(a)}else a.startsWith(_)&&(h.push({type:6,index:o}),i.removeAttribute(a));if(nt.test(i.tagName)){const a=i.textContent.split(_),u=a.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let $=0;$<u;$++)i.append(a[$],P()),m.nextNode(),h.push({type:2,index:++o});i.append(a[u],P())}}}else if(i.nodeType===8)if(i.data===it)h.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)h.push({type:7,index:o}),a+=_.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){var r,l;if(t===v)return t;let i=s!==void 0?(r=e.o)==null?void 0:r[s]:e.l;const o=C(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,e,s)),s!==void 0?(e.o??(e.o=[]))[s]=i:e.l=i),i!==void 0&&(t=E(n,i._$AS(n,t.values),i,s)),t}class gt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??g).importNode(e,!0);m.currentNode=i;let o=m.nextNode(),r=0,l=0,h=s[0];for(;h!==void 0;){if(r===h.index){let c;h.type===2?c=new x(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new St(o,this,t)),this._$AV.push(c),h=s[++l]}r!==(h==null?void 0:h.index)&&(o=m.nextNode(),r++)}return m.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class x{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(rt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const r=new gt(i,this),l=r.u(this.options);r.p(e),this.T(l),this._$AH=r}}_$AC(t){let e=Y.get(t.strings);return e===void 0&&Y.set(t.strings,e=new U(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new x(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=E(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==v,r&&(this._$AH=t);else{const l=t;let h,c;for(t=o[0],h=0;h<o.length-1;h++)c=E(this,l[s+h],e,h),c===v&&(c=this._$AH[h]),r||(r=!C(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+o[h+1]),this._$AH[h]=c}r&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class vt extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Et extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===v)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class St{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const z=w.litHtmlPolyfillSupport;z==null||z(U,x),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.2.0");const bt=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new x(t.insertBefore(P(),o),o,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H extends y{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return v}}var X;H._$litElement$=!0,H.finalized=!0,(X=globalThis.litElementHydrateSupport)==null||X.call(globalThis,{LitElement:H});const L=globalThis.litElementPolyfillSupport;L==null||L({LitElement:H});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");export{d as D,bt as Q,v as R,et as f,H as h,Pt as i,Ct as k,j as u};
