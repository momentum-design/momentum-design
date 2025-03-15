import{i as Ot,k as L,D as Me}from"./lit-element-CHllvULs.js";import{t as Lt}from"./if-defined-C4tJgJ33.js";import{u as At,n as w,C as Ue}from"./index-HW6KrQZO.js";import"./index-1b1rld9u.js";import{a as de}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as Dt,h as Ct}from"./utils-D1SE5bce.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-SgL7LhI3.js";import"./DisabledMixin-DBt9didn.js";import"./index-BIROzany.js";import"./button.constants-BXf5IXRf.js";import"./button.utils-ajxTJbst.js";import"./index-Bg7xEogC.js";import"./iframe-C6d5k5eI.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const Z=Math.min,C=Math.max,ye=Math.round,pe=Math.floor,_=e=>({x:e,y:e}),St={left:"right",right:"left",bottom:"top",top:"bottom"},Pt={start:"end",end:"start"};function De(e,t,r){return C(e,Z(t,r))}function ne(e,t){return typeof e=="function"?e(t):e}function K(e){return e.split("-")[0]}function se(e){return e.split("-")[1]}function ft(e){return e==="x"?"y":"x"}function Pe(e){return e==="y"?"height":"width"}function q(e){return["top","bottom"].includes(K(e))?"y":"x"}function Fe(e){return ft(q(e))}function Ft(e,t,r){r===void 0&&(r=!1);const o=se(e),i=Fe(e),n=Pe(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=we(s)),[s,we(s)]}function Rt(e){const t=we(e);return[Ce(e),t,Ce(t)]}function Ce(e){return e.replace(/start|end/g,t=>Pt[t])}function kt(e,t,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return r?t?i:o:t?o:i;case"left":case"right":return t?n:s;default:return[]}}function It(e,t,r,o){const i=se(e);let n=kt(K(e),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),t&&(n=n.concat(n.map(Ce)))),n}function we(e){return e.replace(/left|right|bottom|top/g,t=>St[t])}function Bt(e){return{top:0,right:0,bottom:0,left:0,...e}}function ht(e){return typeof e!="number"?Bt(e):{top:e,right:e,bottom:e,left:e}}function xe(e){const{x:t,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:t,right:t+o,bottom:r+i,x:t,y:r}}function He(e,t,r){let{reference:o,floating:i}=e;const n=q(t),s=Fe(t),c=Pe(s),l=K(t),a=n==="y",p=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:p,y:o.y-i.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(se(t)){case"start":f[s]-=m*(r&&a?-1:1);break;case"end":f[s]+=m*(r&&a?-1:1);break}return f}const Nt=async(e,t,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,c=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:u}=He(a,o,l),m=o,f={},h=0;for(let g=0;g<c.length;g++){const{name:b,fn:v}=c[g],{x:E,y:T,data:A,reset:O}=await v({x:p,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:e,floating:t}});p=E??p,u=T??u,f={...f,[b]:{...f[b],...A}},O&&h<=50&&(h++,typeof O=="object"&&(O.placement&&(m=O.placement),O.rects&&(a=O.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):O.rects),{x:p,y:u}=He(a,m,l)),g=-1)}return{x:p,y:u,placement:m,strategy:i,middlewareData:f}};async function Re(e,t){var r;t===void 0&&(t={});const{x:o,y:i,platform:n,rects:s,elements:c,strategy:l}=e,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=ne(t,e),h=ht(f),b=c[m?u==="floating"?"reference":"floating":u],v=xe(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(b)))==null||r?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:a,rootBoundary:p,strategy:l})),E=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,T=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),A=await(n.isElement==null?void 0:n.isElement(T))?await(n.getScale==null?void 0:n.getScale(T))||{x:1,y:1}:{x:1,y:1},O=xe(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:E,offsetParent:T,strategy:l}):E);return{top:(v.top-O.top+h.top)/A.y,bottom:(O.bottom-v.bottom+h.bottom)/A.y,left:(v.left-O.left+h.left)/A.x,right:(O.right-v.right+h.right)/A.x}}const $t=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:o,placement:i,rects:n,platform:s,elements:c,middlewareData:l}=t,{element:a,padding:p=0}=ne(e,t)||{};if(a==null)return{};const u=ht(p),m={x:r,y:o},f=Fe(i),h=Pe(f),g=await s.getDimensions(a),b=f==="y",v=b?"top":"left",E=b?"bottom":"right",T=b?"clientHeight":"clientWidth",A=n.reference[h]+n.reference[f]-m[f]-n.floating[h],O=m[f]-n.reference[f],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let F=P?P[T]:0;(!F||!await(s.isElement==null?void 0:s.isElement(P)))&&(F=c.floating[T]||n.floating[h]);const z=A/2-O/2,B=F/2-g[h]/2-1,R=Z(u[v],B),W=Z(u[E],B),N=R,Y=F-g[h]-W,D=F/2-g[h]/2+z,te=De(N,D,Y),V=!l.arrow&&se(i)!=null&&D!==te&&n.reference[h]/2-(D<N?R:W)-g[h]/2<0,$=V?D<N?D-N:D-Y:0;return{[f]:m[f]+$,data:{[f]:te,centerOffset:D-te-$,...V&&{alignmentOffset:$}},reset:V}}}),_t=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:c,platform:l,elements:a}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...b}=ne(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const v=K(i),E=q(c),T=K(c)===c,A=await(l.isRTL==null?void 0:l.isRTL(a.floating)),O=m||(T||!g?[we(c)]:Rt(c)),P=h!=="none";!m&&P&&O.push(...It(c,g,h,A));const F=[c,...O],z=await Re(t,b),B=[];let R=((o=n.flip)==null?void 0:o.overflows)||[];if(p&&B.push(z[v]),u){const D=Ft(i,s,A);B.push(z[D[0]],z[D[1]])}if(R=[...R,{placement:i,overflows:B}],!B.every(D=>D<=0)){var W,N;const D=(((W=n.flip)==null?void 0:W.index)||0)+1,te=F[D];if(te)return{data:{index:D,overflows:R},reset:{placement:te}};let V=(N=R.filter($=>$.overflows[0]<=0).sort(($,X)=>$.overflows[1]-X.overflows[1])[0])==null?void 0:N.placement;if(!V)switch(f){case"bestFit":{var Y;const $=(Y=R.filter(X=>{if(P){const j=q(X.placement);return j===E||j==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(j=>j>0).reduce((j,Tt)=>j+Tt,0)]).sort((X,j)=>X[1]-j[1])[0])==null?void 0:Y[0];$&&(V=$);break}case"initialPlacement":V=c;break}if(i!==V)return{reset:{placement:V}}}return{}}}};async function Mt(e,t){const{placement:r,platform:o,elements:i}=e,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=K(r),c=se(r),l=q(r)==="y",a=["left","top"].includes(s)?-1:1,p=n&&l?-1:1,u=ne(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof h=="number"&&(f=c==="end"?h*-1:h),l?{x:f*p,y:m*a}:{x:m*a,y:f*p}}const Ut=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,o;const{x:i,y:n,placement:s,middlewareData:c}=t,l=await Mt(t,e);return s===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:n+l.y,data:{...l,placement:s}}}}},Ht=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:o,placement:i}=t,{mainAxis:n=!0,crossAxis:s=!1,limiter:c={fn:b=>{let{x:v,y:E}=b;return{x:v,y:E}}},...l}=ne(e,t),a={x:r,y:o},p=await Re(t,l),u=q(K(i)),m=ft(u);let f=a[m],h=a[u];if(n){const b=m==="y"?"top":"left",v=m==="y"?"bottom":"right",E=f+p[b],T=f-p[v];f=De(E,f,T)}if(s){const b=u==="y"?"top":"left",v=u==="y"?"bottom":"right",E=h+p[b],T=h-p[v];h=De(E,h,T)}const g=c.fn({...t,[m]:f,[u]:h});return{...g,data:{x:g.x-r,y:g.y-o,enabled:{[m]:n,[u]:s}}}}}},zt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var r,o;const{placement:i,rects:n,platform:s,elements:c}=t,{apply:l=()=>{},...a}=ne(e,t),p=await Re(t,a),u=K(i),m=se(i),f=q(i)==="y",{width:h,height:g}=n.floating;let b,v;u==="top"||u==="bottom"?(b=u,v=m===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(v=u,b=m==="end"?"top":"bottom");const E=g-p.top-p.bottom,T=h-p.left-p.right,A=Z(g-p[b],E),O=Z(h-p[v],T),P=!t.middlewareData.shift;let F=A,z=O;if((r=t.middlewareData.shift)!=null&&r.enabled.x&&(z=T),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(F=E),P&&!m){const R=C(p.left,0),W=C(p.right,0),N=C(p.top,0),Y=C(p.bottom,0);f?z=h-2*(R!==0||W!==0?R+W:C(p.left,p.right)):F=g-2*(N!==0||Y!==0?N+Y:C(p.top,p.bottom))}await l({...t,availableWidth:z,availableHeight:F});const B=await s.getDimensions(c.floating);return h!==B.width||g!==B.height?{reset:{rects:!0}}:{}}}};function Te(){return typeof window<"u"}function ce(e){return mt(e)?(e.nodeName||"").toLowerCase():"#document"}function S(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function U(e){var t;return(t=(mt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mt(e){return Te()?e instanceof Node||e instanceof S(e).Node:!1}function k(e){return Te()?e instanceof Element||e instanceof S(e).Element:!1}function M(e){return Te()?e instanceof HTMLElement||e instanceof S(e).HTMLElement:!1}function ze(e){return!Te()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof S(e).ShadowRoot}function ae(e){const{overflow:t,overflowX:r,overflowY:o,display:i}=I(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(i)}function Vt(e){return["table","td","th"].includes(ce(e))}function Oe(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ke(e){const t=Ie(),r=k(e)?I(e):e;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Wt(e){let t=G(e);for(;M(t)&&!ie(t);){if(ke(t))return t;if(Oe(t))return null;t=G(t)}return null}function Ie(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ie(e){return["html","body","#document"].includes(ce(e))}function I(e){return S(e).getComputedStyle(e)}function Le(e){return k(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function G(e){if(ce(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ze(e)&&e.host||U(e);return ze(t)?t.host:t}function gt(e){const t=G(e);return ie(t)?e.ownerDocument?e.ownerDocument.body:e.body:M(t)&&ae(t)?t:gt(t)}function le(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=gt(e),n=i===((o=e.ownerDocument)==null?void 0:o.body),s=S(i);if(n){const c=Se(s);return t.concat(s,s.visualViewport||[],ae(i)?i:[],c&&r?le(c):[])}return t.concat(i,le(i,[],r))}function Se(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function vt(e){const t=I(e);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=M(e),n=i?e.offsetWidth:r,s=i?e.offsetHeight:o,c=ye(r)!==n||ye(o)!==s;return c&&(r=n,o=s),{width:r,height:o,$:c}}function Be(e){return k(e)?e:e.contextElement}function re(e){const t=Be(e);if(!M(t))return _(1);const r=t.getBoundingClientRect(),{width:o,height:i,$:n}=vt(t);let s=(n?ye(r.width):r.width)/o,c=(n?ye(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Yt=_(0);function bt(e){const t=S(e);return!Ie()||!t.visualViewport?Yt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xt(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==S(e)?!1:t}function J(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),n=Be(e);let s=_(1);t&&(o?k(o)&&(s=re(o)):s=re(e));const c=Xt(n,r,o)?bt(n):_(0);let l=(i.left+c.x)/s.x,a=(i.top+c.y)/s.y,p=i.width/s.x,u=i.height/s.y;if(n){const m=S(n),f=o&&k(o)?S(o):o;let h=m,g=Se(h);for(;g&&o&&f!==h;){const b=re(g),v=g.getBoundingClientRect(),E=I(g),T=v.left+(g.clientLeft+parseFloat(E.paddingLeft))*b.x,A=v.top+(g.clientTop+parseFloat(E.paddingTop))*b.y;l*=b.x,a*=b.y,p*=b.x,u*=b.y,l+=T,a+=A,h=S(g),g=Se(h)}}return xe({width:p,height:u,x:l,y:a})}function Ne(e,t){const r=Le(e).scrollLeft;return t?t.left+r:J(U(e)).left+r}function Et(e,t,r){r===void 0&&(r=!1);const o=e.getBoundingClientRect(),i=o.left+t.scrollLeft-(r?0:Ne(e,o)),n=o.top+t.scrollTop;return{x:i,y:n}}function jt(e){let{elements:t,rect:r,offsetParent:o,strategy:i}=e;const n=i==="fixed",s=U(o),c=t?Oe(t.floating):!1;if(o===s||c&&n)return r;let l={scrollLeft:0,scrollTop:0},a=_(1);const p=_(0),u=M(o);if((u||!u&&!n)&&((ce(o)!=="body"||ae(s))&&(l=Le(o)),M(o))){const f=J(o);a=re(o),p.x=f.x+o.clientLeft,p.y=f.y+o.clientTop}const m=s&&!u&&!n?Et(s,l,!0):_(0);return{width:r.width*a.x,height:r.height*a.y,x:r.x*a.x-l.scrollLeft*a.x+p.x+m.x,y:r.y*a.y-l.scrollTop*a.y+p.y+m.y}}function Zt(e){return Array.from(e.getClientRects())}function Kt(e){const t=U(e),r=Le(e),o=e.ownerDocument.body,i=C(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),n=C(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+Ne(e);const c=-r.scrollTop;return I(o).direction==="rtl"&&(s+=C(t.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:c}}function Gt(e,t){const r=S(e),o=U(e),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){n=i.width,s=i.height;const a=Ie();(!a||a&&t==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:n,height:s,x:c,y:l}}function qt(e,t){const r=J(e,!0,t==="fixed"),o=r.top+e.clientTop,i=r.left+e.clientLeft,n=M(e)?re(e):_(1),s=e.clientWidth*n.x,c=e.clientHeight*n.y,l=i*n.x,a=o*n.y;return{width:s,height:c,x:l,y:a}}function Ve(e,t,r){let o;if(t==="viewport")o=Gt(e,r);else if(t==="document")o=Kt(U(e));else if(k(t))o=qt(t,r);else{const i=bt(e);o={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return xe(o)}function yt(e,t){const r=G(e);return r===t||!k(r)||ie(r)?!1:I(r).position==="fixed"||yt(r,t)}function Jt(e,t){const r=t.get(e);if(r)return r;let o=le(e,[],!1).filter(c=>k(c)&&ce(c)!=="body"),i=null;const n=I(e).position==="fixed";let s=n?G(e):e;for(;k(s)&&!ie(s);){const c=I(s),l=ke(s);!l&&c.position==="fixed"&&(i=null),(n?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ae(s)&&!l&&yt(e,s))?o=o.filter(p=>p!==s):i=c,s=G(s)}return t.set(e,o),o}function Qt(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e;const s=[...r==="clippingAncestors"?Oe(t)?[]:Jt(t,this._c):[].concat(r),o],c=s[0],l=s.reduce((a,p)=>{const u=Ve(t,p,i);return a.top=C(u.top,a.top),a.right=Z(u.right,a.right),a.bottom=Z(u.bottom,a.bottom),a.left=C(u.left,a.left),a},Ve(t,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function eo(e){const{width:t,height:r}=vt(e);return{width:t,height:r}}function to(e,t,r){const o=M(t),i=U(t),n=r==="fixed",s=J(e,!0,n,t);let c={scrollLeft:0,scrollTop:0};const l=_(0);if(o||!o&&!n)if((ce(t)!=="body"||ae(i))&&(c=Le(t)),o){const m=J(t,!0,n,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else i&&(l.x=Ne(i));const a=i&&!o&&!n?Et(i,c):_(0),p=s.left+c.scrollLeft-l.x-a.x,u=s.top+c.scrollTop-l.y-a.y;return{x:p,y:u,width:s.width,height:s.height}}function Ae(e){return I(e).position==="static"}function We(e,t){if(!M(e)||I(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return U(e)===r&&(r=r.ownerDocument.body),r}function wt(e,t){const r=S(e);if(Oe(e))return r;if(!M(e)){let i=G(e);for(;i&&!ie(i);){if(k(i)&&!Ae(i))return i;i=G(i)}return r}let o=We(e,t);for(;o&&Vt(o)&&Ae(o);)o=We(o,t);return o&&ie(o)&&Ae(o)&&!ke(o)?r:o||Wt(e)||r}const oo=async function(e){const t=this.getOffsetParent||wt,r=this.getDimensions,o=await r(e.floating);return{reference:to(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ro(e){return I(e).direction==="rtl"}const io={convertOffsetParentRelativeRectToViewportRelativeRect:jt,getDocumentElement:U,getClippingRect:Qt,getOffsetParent:wt,getElementRects:oo,getClientRects:Zt,getDimensions:eo,getScale:re,isElement:k,isRTL:ro};function no(e,t){let r=null,o;const i=U(e);function n(){var c;clearTimeout(o),(c=r)==null||c.disconnect(),r=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),n();const{left:a,top:p,width:u,height:m}=e.getBoundingClientRect();if(c||t(),!u||!m)return;const f=pe(p),h=pe(i.clientWidth-(a+u)),g=pe(i.clientHeight-(p+m)),b=pe(a),E={rootMargin:-f+"px "+-h+"px "+-g+"px "+-b+"px",threshold:C(0,Z(1,l))||1};let T=!0;function A(O){const P=O[0].intersectionRatio;if(P!==l){if(!T)return s();P?s(!1,P):o=setTimeout(()=>{s(!1,1e-7)},1e3)}T=!1}try{r=new IntersectionObserver(A,{...E,root:i.ownerDocument})}catch{r=new IntersectionObserver(A,E)}r.observe(e)}return s(!0),n}function so(e,t,r,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Be(e),p=i||n?[...a?le(a):[],...le(t)]:[];p.forEach(v=>{i&&v.addEventListener("scroll",r,{passive:!0}),n&&v.addEventListener("resize",r)});const u=a&&c?no(a,r):null;let m=-1,f=null;s&&(f=new ResizeObserver(v=>{let[E]=v;E&&E.target===a&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var T;(T=f)==null||T.observe(t)})),r()}),a&&!l&&f.observe(a),f.observe(t));let h,g=l?J(e):null;l&&b();function b(){const v=J(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&r(),g=v,h=requestAnimationFrame(b)}return r(),()=>{var v;p.forEach(E=>{i&&E.removeEventListener("scroll",r),n&&E.removeEventListener("resize",r)}),u==null||u(),(v=f)==null||v.disconnect(),f=null,l&&cancelAnimationFrame(h)}}const co=Ut,lo=Ht,ao=_t,po=zt,uo=$t,fo=(e,t,r)=>{const o=new Map,i={platform:io,...r},n={...i.platform,_c:o};return Nt(e,t,{...i,platform:n})},ho=Ot`
  :host {
    --mdc-popover-arrow-border-radius: 0.1875rem;
    --mdc-popover-arrow-border: 0.0625rem solid var(--mds-color-theme-outline-secondary-normal);

    --mdc-popover-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-popover-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-popover-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
    --mdc-popover-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
    --mdc-popover-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-popover-elevation-3: var(--mds-elevation-3);

    display: none;
    position: absolute;
    box-sizing: content-box;
    background-color: var(--mdc-popover-primary-background-color);
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-popover-border-color);
    filter: var(--mdc-popover-elevation-3);
  }

  :host([visible]) {
    display: block;
  }

  :host([color='contrast']) {
    background-color: var(--mdc-popover-inverted-background-color);
    border-color: var(--mdc-popover-inverted-border-color);
    color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host([color='contrast']) {

    .popover-arrow {
      background-color: var(--mdc-popover-inverted-background-color);
      border-color: var(--mdc-popover-inverted-border-color);
    }

    .popover-close {
      color: var(--mdc-popover-inverted-text-color);
    }
  }

  :host::part(popover-content) {
    position: relative;
    padding: 0.75rem;
    overflow-y: auto;
    min-width: max-content;
    z-index: 9998;
  }

  .popover-hover-bridge {
    position: absolute;
    transform: translateX(-50%);
    background: transparent;
    pointer-events: auto;
  }

  .popover-arrow {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: var(--mdc-popover-primary-background-color);
    transform: rotate(45deg);
    pointer-events: none;
    border: var(--mdc-popover-arrow-border);
  }

  .popover-close {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    cursor: pointer;
    z-index: 9999;
  }

  .popover-arrow[data-side='top'] {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: var(--mdc-popover-arrow-border-radius);
    border-top-left-radius: 100%;
  }

  .popover-arrow[data-side='bottom'] {
    border-bottom: none;
    border-right: none;
    border-top-left-radius: var(--mdc-popover-arrow-border-radius);
    border-bottom-right-radius: 100%;
  }

  .popover-arrow[data-side='right'] {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: var(--mdc-popover-arrow-border-radius);
    border-top-right-radius: 100%;
  }

  .popover-arrow[data-side='left'] {
    border-bottom: none;
    border-left: none;
    border-top-right-radius: var(--mdc-popover-arrow-border-radius);
    border-bottom-left-radius: 100%;
  }
`,mo=[ho],go=At.constructTagName("popover"),H={LEFT_START:"left-start",LEFT:"left",LEFT_END:"left-end",RIGHT_START:"right-start",RIGHT:"right",RIGHT_END:"right-end",TOP_START:"top-start",TOP:"top",TOP_END:"top-end",BOTTOM_START:"bottom-start",BOTTOM:"bottom",BOTTOM_END:"bottom-end"},xt={CLICK:"click",MOUSEENTER:"mouseenter",FOCUSIN:"focusin",MANUAL:"manual"},$e={TONAL:"tonal",CONTRAST:"contrast"},d={PLACEMENT:H.BOTTOM,TRIGGER:xt.CLICK,COLOR:$e.TONAL,OFFSET:4,VISIBLE:!1,ARROW:!1,CLOSE_BUTTON:!1,FOCUS_TRAP:!1,INTERACTIVE:!1,PREVENT_SCROLL:!1,HIDE_ON_ESCAPE:!1,HIDE_ON_BLUR:!1,HIDE_ON_CLICK_OUTSIDE:!1,FOCUS_BACK:!1,BACKDROP:!1,FLIP:!0,SIZE:!1,DELAY:"0,0",ROLE:"dialog",Z_INDEX:1e3,DISABLE_ARIA_EXPANDED:!1};var vo=Object.defineProperty,Ye=(e,t,r,o)=>{for(var i=void 0,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=s(t,r,i)||i);return i&&vo(t,r,i),i};const bo=e=>{class t extends e{constructor(...o){super(...o),this.enabledFocusTrap=d.FOCUS_TRAP,this.enabledPreventScroll=d.PREVENT_SCROLL,this.focusTrapIndex=-1,this.focusableElements=[],this.shouldWrapFocus=()=>!0,this.addEventListener("keydown",this.handleKeydown)}deactivateFocusTrap(){this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.focusTrapIndex=-1,document.body.style.overflow=""}hasNoClientRects(o){return o.getClientRects().length===0}hasZeroDimensions(o){const{width:i,height:n}=o.getBoundingClientRect(),{offsetWidth:s,offsetHeight:c}=o;return s+c+n+i===0}isNotVisible(o){return this.hasZeroDimensions(o)||this.hasNoClientRects(o)}hasHiddenStyle(o){const{display:i,opacity:n,visibility:s}=o.style;return i==="none"||n==="0"||s==="hidden"||s==="collapse"}hasComputedHidden(o){const i=getComputedStyle(o);return i.visibility==="hidden"||i.height==="0"||i.display==="none"}isHidden(o){return o.hasAttribute("hidden")||o.getAttribute("aria-hidden")==="true"||this.hasHiddenStyle(o)||this.isNotVisible(o)||this.hasComputedHidden(o)}isNotTabbable(o){return o.getAttribute("tabindex")==="-1"}isInteractiveElement(o){return!!(new Set(["BUTTON","DETAILS","EMBED","IFRAME","SELECT","TEXTAREA"]).has(o.tagName)||o instanceof HTMLAnchorElement&&o.hasAttribute("href")||o instanceof HTMLInputElement&&o.type!=="hidden"||(o instanceof HTMLAudioElement||o instanceof HTMLVideoElement)&&o.hasAttribute("controls")||(o instanceof HTMLImageElement||o instanceof HTMLObjectElement)&&o.hasAttribute("usemap")||o.hasAttribute("tabindex")&&o.tabIndex>-1)}isFocusable(o){return this.isHidden(o)||this.isNotTabbable(o)?!1:this.isInteractiveElement(o)}findFocusable(o,i=new Set){return o instanceof HTMLElement&&this.isFocusable(o)&&i.add(o),Array.from(o.children).forEach(s=>{const c=s;this.isFocusable(c)&&i.add(c),c.shadowRoot?this.findFocusable(c.shadowRoot,i):c.tagName==="SLOT"?c.assignedElements({flatten:!0}).forEach(a=>{a instanceof HTMLElement&&this.findFocusable(a,i)}):this.findFocusable(c,i)}),[...i]}setFocusableElements(){this.shadowRoot&&(this.focusableElements=this.findFocusable(this.shadowRoot,new Set))}setInitialFocus(o=0){this.focusableElements.length!==0&&(this.enabledPreventScroll&&(document.body.style.overflow="hidden"),this.focusableElements[o]&&(this.focusTrapIndex=o,this.focusableElements[o].focus()))}calculateNextIndex(o,i){const{length:n}=this.focusableElements,s=this.shouldWrapFocus();if(o===-1)return i>0?0:n-1;let c=o+i;return s?(c<0&&(c=n-1),c>=n&&(c=0)):(c<0&&(c=0),c>=n&&(c=n-1)),c}getDeepActiveElement(){var i;let o=document.activeElement||document.body;for(;o instanceof HTMLElement&&((i=o.shadowRoot)!=null&&i.activeElement);)o=o.shadowRoot.activeElement;return o||document.body}findElement(o){return this.focusableElements.findIndex(i=>this.isEqualFocusNode(o,i))}isEqualFocusNode(o,i){return o.nodeType>=0?i.isEqualNode(o)&&i===o:!1}trapFocus(o){if(this.focusableElements.length===0)return;const i=this.getDeepActiveElement(),n=this.findElement(i);o?this.focusTrapIndex=this.calculateNextIndex(n,-1):this.focusTrapIndex=this.calculateNextIndex(n,1);const s=this.focusableElements[this.focusTrapIndex];s&&s.focus()}handleKeydown(o){!this.enabledFocusTrap||!this.focusableElements.length||o.key==="Tab"&&(o.preventDefault(),this.trapFocus(o.shiftKey))}}return Ye([w({type:Boolean})],t.prototype,"enabledFocusTrap"),Ye([w({type:Boolean})],t.prototype,"enabledPreventScroll"),t};class Eo{constructor(){this.stack=[]}push(t){this.stack.push(t)}pop(){return this.stack.pop()}peek(){return this.stack[this.stack.length-1]}remove(t){this.stack=this.stack.filter(r=>r!==t)}clear(){this.stack=[]}}const oe=new Eo;class ue{static dispatchPopoverEvent(t,r){r.dispatchEvent(new CustomEvent(t,{detail:{show:r.visible},composed:!0,bubbles:!0}))}static onShowPopover(t){this.dispatchPopoverEvent("popover-on-show",t)}static onHidePopover(t){this.dispatchPopoverEvent("popover-on-hide",t)}static onCreatedPopover(t){this.dispatchPopoverEvent("popover-on-created",t)}static onDestroyedPopover(t){this.dispatchPopoverEvent("popover-on-destroyed",t)}}class yo{constructor(t){this.arrowPixelChange=!1,this.popover=t}setupDelay(){try{const[t,r]=this.popover.delay.split(",").map(o=>{const i=parseInt(o,10);if(Number.isNaN(i)||i<0)throw new Error(`Invalid delay value: ${o}`);return i});return[t,r]}catch{return this.popover.delay="0,0",[0,0]}}setupHoverBridge(t){const r=this.popover.renderRoot.querySelector(".popover-hover-bridge");Object.assign(r.style,{top:"",left:"",right:"",bottom:""});const o=`calc(${this.popover.showArrow?"0.75rem + ":""}${this.popover.offset}px)`,i=this.popover.offsetHeight||0,n=this.popover.offsetWidth||0;if(r)switch(t.split("-")[0]){case"top":r.style.height=o,r.style.bottom=`calc(-1 * (${o}))`,r.style.left="50%",r.style.width=`${n}px`;break;case"left":r.style.height=`${i}px`,r.style.width=o,r.style.right=`calc(-1.5 * (${o}))`;break;case"right":r.style.height=`${i}px`,r.style.width=o,r.style.left=`calc(-0.5 * (${o}))`;break;case"bottom":default:r.style.height=o,r.style.top=`calc(-1 * (${o}))`,r.style.left="50%",r.style.width=`${n}px`;break}}setupAppendTo(){if(this.popover.appendTo){const t=document.getElementById(this.popover.appendTo);t&&t.appendChild(this.popover)}}setupAccessibility(){var t,r,o;this.popover.toggleAttribute("aria-modal",this.popover.interactive),this.popover.interactive&&(this.popover.ariaLabel||(this.popover.ariaLabel=((t=this.popover.triggerElement)==null?void 0:t.ariaLabel)||((r=this.popover.triggerElement)==null?void 0:r.textContent)||""),this.popover.ariaLabelledby||(this.popover.ariaLabelledby=((o=this.popover.triggerElement)==null?void 0:o.id)||""))}updateArrowStyle(t,r){var p;if(!this.popover.arrowElement)return;const o=r.split("-")[0],i={top:"bottom",right:"left",bottom:"top",left:"right"}[o],{x:n,y:s}=t,c=this.popover.arrowElement.getBoundingClientRect(),l=(p=this.popover.arrowElement.offsetParent)==null?void 0:p.getBoundingClientRect();if(!this.arrowPixelChange){const u=l!=null&&l[i]?12-Math.abs(c[i]-l[i]):0;Math.round(u)===1?this.arrowPixelChange=!0:this.arrowPixelChange=!1}const a=this.arrowPixelChange?.5:0;this.popover.arrowElement.setAttribute("data-side",o),Object.assign(this.popover.arrowElement.style,{left:n!=null?`${n}px`:"",top:s!=null?`${s}px`:"",[i]:`${-this.popover.arrowElement.offsetHeight/2-a}px`})}updatePopoverStyle(t,r){Object.assign(this.popover.style,{left:`${t}px`,top:`${r}px`})}createBackdrop(){var t;if(!this.popover.backdropElement){const r=document.createElement("div");r.classList.add("popover-backdrop"),(t=this.popover.parentElement)==null||t.appendChild(r);const o=document.createElement("style");o.textContent=`
        .popover-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: ${this.popover.zIndex-1};
        }
      `,r.appendChild(o),this.popover.backdropElement=r}}}var wo=Object.defineProperty,x=(e,t,r,o)=>{for(var i=void 0,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=s(t,r,i)||i);return i&&wo(t,r,i),i};const _e=class _e extends bo(Ue){constructor(){super(),this.id="",this.triggerID="",this.trigger=d.TRIGGER,this.placement=d.PLACEMENT,this.color=d.COLOR,this.visible=d.VISIBLE,this.offset=d.OFFSET,this.focusTrap=d.FOCUS_TRAP,this.preventScroll=d.PREVENT_SCROLL,this.showArrow=d.ARROW,this.closeButton=d.CLOSE_BUTTON,this.interactive=d.INTERACTIVE,this.delay=d.DELAY,this.hideOnEscape=d.HIDE_ON_ESCAPE,this.hideOnBlur=d.HIDE_ON_BLUR,this.hideOnOutsideClick=d.HIDE_ON_CLICK_OUTSIDE,this.focusBackToTrigger=d.FOCUS_BACK,this.backdrop=d.BACKDROP,this.flip=d.FLIP,this.size=d.SIZE,this.zIndex=d.Z_INDEX,this.appendTo="",this.closeButtonAriaLabel=null,this.role=d.ROLE,this.ariaLabelledby=null,this.ariaDescribedby=null,this.disableAriaExpanded=d.DISABLE_ARIA_EXPANDED,this.arrowElement=null,this.triggerElement=null,this.hoverTimer=null,this.isTriggerClicked=!1,this.openDelay=0,this.closeDelay=0,this.backdropElement=null,this.onOutsidePopoverClick=t=>{if(oe.peek()!==this)return;let r=!1;const o=t.composedPath();r=this.contains(t.target)||o.includes(this.triggerElement);const i=this.backdropElement?o.includes(this.backdropElement):!1;(!r||i)&&this.hidePopover()},this.onEscapeKeydown=t=>{!this.visible||t.code!=="Escape"||(t.preventDefault(),this.hidePopover())},this.onPopoverFocusOut=t=>{this.contains(t.relatedTarget)||this.hidePopover()},this.startCloseDelay=()=>{if(!this.interactive)this.hidePopover();else{if(this.isTriggerClicked)return;this.hoverTimer=window.setTimeout(()=>{this.visible=!1},this.closeDelay)}},this.cancelCloseDelay=()=>{this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null)},this.showPopover=()=>{this.cancelCloseDelay(),setTimeout(()=>{this.visible=!0},this.openDelay)},this.hidePopover=()=>{oe.peek()===this&&setTimeout(()=>{this.visible=!1,this.isTriggerClicked=!1},this.closeDelay)},this.togglePopoverVisible=()=>{this.isTriggerClicked?this.hidePopover():(this.showPopover(),this.isTriggerClicked=!0)},this.utils=new yo(this)}async firstUpdated(t){super.firstUpdated(t),this.utils.setupAppendTo(),[this.openDelay,this.closeDelay]=this.utils.setupDelay(),this.setupTriggerListener(),this.utils.setupAccessibility(),this.style.zIndex=`${this.zIndex}`,ue.onCreatedPopover(this),this.visible&&(this.positionPopover(),await this.handleCreatePopoverFirstUpdate())}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners(),ue.onDestroyedPopover(this),oe.remove(this)}setupTriggerListener(){if(this.triggerID&&(this.triggerElement=this.getRootNode().querySelector(`#${this.triggerID}`),!!this.triggerElement)){if(this.trigger==="mouseenter"&&(this.interactive?this.trigger="mouseenter click":this.trigger="mouseenter focusin"),this.trigger.includes("click")&&this.triggerElement.addEventListener("click",this.togglePopoverVisible),this.trigger.includes("mouseenter")){const t=this.renderRoot.querySelector(".popover-hover-bridge");this.triggerElement.addEventListener("mouseenter",this.showPopover),this.triggerElement.addEventListener("mouseleave",this.startCloseDelay),this.addEventListener("mouseenter",this.cancelCloseDelay),this.addEventListener("mouseleave",this.startCloseDelay),t==null||t.addEventListener("mouseenter",this.cancelCloseDelay)}this.trigger.includes("focusin")&&(this.triggerElement.addEventListener("focusin",this.showPopover),this.interactive||this.triggerElement.addEventListener("focusout",this.hidePopover)),this.addEventListener("focus-trap-exit",this.hidePopover)}}removeEventListeners(){if(!this.triggerElement)return;const t=this.renderRoot.querySelector(".popover-hover-bridge");this.triggerElement.removeEventListener("click",this.togglePopoverVisible),this.triggerElement.removeEventListener("mouseenter",this.showPopover),this.triggerElement.removeEventListener("mouseleave",this.hidePopover),this.removeEventListener("mouseenter",this.cancelCloseDelay),this.removeEventListener("mouseleave",this.startCloseDelay),this.triggerElement.removeEventListener("focusin",this.showPopover),this.triggerElement.removeEventListener("focusout",this.hidePopover),t==null||t.removeEventListener("mouseenter",this.cancelCloseDelay),this.removeEventListener("focus-trap-exit",this.hidePopover)}async updated(t){if(super.updated(t),t.has("visible")){const r=t.get("visible");await this.isOpenUpdated(r,this.visible)}if(t.has("placement")&&this.setAttribute("placement",Object.values(H).includes(this.placement)?this.placement:d.PLACEMENT),t.has("delay")&&([this.openDelay,this.closeDelay]=this.utils.setupDelay()),t.has("trigger")){const o=this.trigger.split(" ").filter(i=>Object.values(xt).includes(i));this.setAttribute("trigger",o.length>0?this.trigger:d.TRIGGER),this.removeEventListeners(),this.setupTriggerListener()}t.has("color")&&this.setAttribute("color",Object.values($e).includes(this.color)?this.color:d.COLOR),t.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),t.has("append-to")&&this.utils.setupAppendTo(),(t.has("interactive")||t.has("aria-label")||t.has("aria-labelledby"))&&this.utils.setupAccessibility()}async isOpenUpdated(t,r){var o,i,n;t===r||!this.triggerElement||(r?(oe.peek()!==this&&oe.push(this),this.enabledFocusTrap=this.focusTrap,this.enabledPreventScroll=this.preventScroll,this.backdrop&&(this.utils.createBackdrop(),this.triggerElement.style.zIndex=`${this.zIndex}`),this.positionPopover(),await this.handleCreatePopoverFirstUpdate(),this.hideOnBlur&&(this.addEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(this.triggerElement.style.pointerEvents="none")),this.hideOnOutsideClick&&document.addEventListener("click",this.onOutsidePopoverClick),this.hideOnEscape&&document.addEventListener("keydown",this.onEscapeKeydown),this.disableAriaExpanded||this.triggerElement.setAttribute("aria-expanded","true"),this.interactive&&this.triggerElement.setAttribute("aria-haspopup",this.triggerElement.getAttribute("aria-haspopup")||"dialog"),ue.onShowPopover(this)):(oe.pop(),this.backdropElement&&((o=this.backdropElement)==null||o.remove(),this.backdropElement=null),this.hideOnBlur&&(this.removeEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(this.triggerElement.style.pointerEvents="")),this.hideOnOutsideClick&&document.removeEventListener("click",this.onOutsidePopoverClick),this.hideOnEscape&&document.removeEventListener("keydown",this.onEscapeKeydown),(i=this.deactivateFocusTrap)==null||i.call(this),this.disableAriaExpanded||this.triggerElement.removeAttribute("aria-expanded"),this.interactive&&this.triggerElement.removeAttribute("aria-haspopup"),this.focusBackToTrigger&&((n=this.triggerElement)==null||n.focus()),ue.onHidePopover(this)))}async handleCreatePopoverFirstUpdate(){var t,r;this.visible&&this.interactive&&((t=this.setFocusableElements)==null||t.call(this),await this.updateComplete,(r=this.setInitialFocus)==null||r.call(this))}positionPopover(){if(!this.triggerElement)return;const t=[lo()];let r=this.offset;if(this.flip&&t.push(ao()),this.size){const o=this.renderRoot.querySelector('[part="popover-content"]');t.push(po({apply({availableHeight:i}){o&&Object.assign(o.style,{maxHeight:`${i}px`})},padding:50}))}if(this.showArrow&&(this.arrowElement=this.renderRoot.querySelector(".popover-arrow"),this.arrowElement)){const o=this.arrowElement.offsetHeight;r=Math.sqrt(2*o**2)/2+this.offset,t.push(uo({element:this.arrowElement,padding:12}))}t.push(co(r)),so(this.triggerElement,this,async()=>{if(!this.triggerElement)return;const{x:o,y:i,middlewareData:n,placement:s}=await fo(this.triggerElement,this,{placement:this.placement,middleware:t});this.utils.updatePopoverStyle(o,i),n.arrow&&this.arrowElement&&this.utils.updateArrowStyle(n.arrow,s),this.trigger.includes("mouseenter")&&this.utils.setupHoverBridge(s)})}render(){return L`
      <div class="popover-hover-bridge"></div>
      ${this.closeButton?L` <mdc-button
            class="popover-close"
            prefix-icon="cancel-bold"
            variant="tertiary"
            size="20"
            aria-label=${Lt(this.closeButtonAriaLabel)}
            @click="${this.hidePopover}"
          ></mdc-button>`:Me}
      ${this.showArrow?L`<div class="popover-arrow"></div>`:Me}
      <div part="popover-content">
        <slot></slot>
      </div>
    `}};_e.styles=[...Ue.styles,...mo];let y=_e;x([w({type:String})],y.prototype,"id");x([w({type:String})],y.prototype,"triggerID");x([w({type:String,reflect:!0})],y.prototype,"trigger");x([w({type:String,reflect:!0})],y.prototype,"placement");x([w({type:String,reflect:!0})],y.prototype,"color");x([w({type:Boolean,reflect:!0})],y.prototype,"visible");x([w({type:Number,reflect:!0})],y.prototype,"offset");x([w({type:Boolean,reflect:!0,attribute:"focus-trap"})],y.prototype,"focusTrap");x([w({type:Boolean,reflect:!0,attribute:"prevent-scroll"})],y.prototype,"preventScroll");x([w({type:Boolean,attribute:"show-arrow"})],y.prototype,"showArrow");x([w({type:Boolean,reflect:!0,attribute:"close-button"})],y.prototype,"closeButton");x([w({type:Boolean,reflect:!0})],y.prototype,"interactive");x([w({type:String,reflect:!0})],y.prototype,"delay");x([w({type:Boolean,reflect:!0,attribute:"hide-on-escape"})],y.prototype,"hideOnEscape");x([w({type:Boolean,reflect:!0,attribute:"hide-on-blur"})],y.prototype,"hideOnBlur");x([w({type:Boolean,reflect:!0,attribute:"hide-on-outside-click"})],y.prototype,"hideOnOutsideClick");x([w({type:Boolean,reflect:!0,attribute:"focus-back-to-trigger"})],y.prototype,"focusBackToTrigger");x([w({type:Boolean,reflect:!0})],y.prototype,"backdrop");x([w({type:Boolean,reflect:!0})],y.prototype,"flip");x([w({type:Boolean,reflect:!0})],y.prototype,"size");x([w({type:Number,reflect:!0,attribute:"z-index"})],y.prototype,"zIndex");x([w({type:String,reflect:!0,attribute:"append-to"})],y.prototype,"appendTo");x([w({type:String,attribute:"close-button-aria-label"})],y.prototype,"closeButtonAriaLabel");x([w({type:String,reflect:!0})],y.prototype,"role");x([w({type:String,reflect:!0,attribute:"aria-labelledby"})],y.prototype,"ariaLabelledby");x([w({type:String,reflect:!0,attribute:"aria-describedby"})],y.prototype,"ariaDescribedby");x([w({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],y.prototype,"disableAriaExpanded");y.register(go);const Q=(e,t)=>L`
  <mdc-popover
    id="${e.id}"
    triggerID="${e.triggerID}"
    trigger="${e.trigger}"
    placement="${e.placement}"
    delay="${e.delay}"
    z-index="${e["z-index"]}"
    ?visible="${e.visible}"
    .offset="${e.offset??0}"
    ?interactive=${e.interactive}
    ?focus-trap=${e["focus-trap"]}
    ?show-arrow=${e["show-arrow"]}
    color=${e.color}
    ?flip=${e.flip}
    ?size=${e.size}
    ?backdrop=${e.backdrop}
    ?close-button=${e["close-button"]}
    ?prevent-scroll=${e["prevent-scroll"]}
    ?hide-on-blur=${e["hide-on-blur"]}
    ?hide-on-escape=${e["hide-on-escape"]}
    ?hide-on-outside-click=${e["hide-on-outside-click"]}
    ?focus-back-to-trigger=${e["focus-back-to-trigger"]}
    append-to=${e["append-to"]}
    close-button-aria-label="${e["close-button-aria-label"]}"
    aria-label="${e["aria-label"]}"
    aria-labelledby="${e["aria-labelledby"]}"
    aria-describedby="${e["aria-describedby"]}"
    role="${e.role}"
    ?disable-aria-expanded="${e["disable-aria-expanded"]}"
    @popover-on-show="${de("onshow")}"
    @popover-on-hide="${de("onhide")}"
    @popover-on-created="${de("oncreated")}"
    @popover-on-destroyed="${de("ondestroyed")}"
  >
    ${t}
  </mdc-popover>
`,ee=(e,t)=>L`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${e}">${t}</mdc-button>
  </div>
`,xo=e=>L`
  ${ee("popover-trigger","Click me!")}
  ${Q(e,L`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,To=e=>L`
  ${ee("popover-trigger-interactive","Click me!")}
  ${Q(e,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,Oo=e=>L`
  ${ee("popover-trigger-interactive-hover","Hover me!")}
  ${Q(e,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,Lo=e=>L`
  ${ee("popover-trigger-hide-on-blur","Click me!")}
  ${Q(e,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,Ao=e=>L`
  ${ee("popover-trigger-multiple","Click/ Hover me!")}
  ${Q(e,L`<mdc-text>Interactive content on click</mdc-text>`)}
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-multiple"
    trigger="mouseenter"
    placement="bottom"
    z-index="20"
    show-arrow
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`,Do=e=>L`
  ${ee("popover-trigger-nested","Click me!")}
  ${Q(e,L`<mdc-text>Popover Level 1</mdc-text> <mdc-button id="popover-trigger-2">Click me!</mdc-button>`)}
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-2"
    trigger="click"
    placement="bottom"
    interactive
    z-index="20"
    focus-back-to-trigger
    focus-trap
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Popover Level 2</mdc-text>
    <mdc-button id="popover-trigger-3">Hover me!</mdc-button>
  </mdc-popover>

  <mdc-popover
    id="popover3"
    triggerID="popover-trigger-3"
    trigger="mouseenter"
    placement="bottom"
    z-index="30"
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`,Co=e=>L`
  ${ee("popover-trigger-backdrop","Click me!")}
  ${Q(e,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
  <mdc-button>Button 2</mdc-button>
`,Zo={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:xo,parameters:{badges:["stable"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(H)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values($e)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},...Dt(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...Ct(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},fe={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"show-arrow":!0,role:d.ROLE,color:d.COLOR}},he={render:To,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:d.FLIP,size:!0,role:d.ROLE,color:d.COLOR}},me={render:Oo,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:d.ROLE,color:d.COLOR}},ge={render:Ao,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"close-button":!0,role:d.ROLE,color:d.COLOR}},ve={render:Do,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":10,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:d.ROLE,color:d.COLOR}},be={render:Lo,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:H.RIGHT,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:d.ROLE,color:d.COLOR}},Ee={render:Co,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,role:d.ROLE,color:d.COLOR}};var Xe,je,Ze;fe.parameters={...fe.parameters,docs:{...(Xe=fe.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'show-arrow': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(Ze=(je=fe.parameters)==null?void 0:je.docs)==null?void 0:Ze.source}}};var Ke,Ge,qe;he.parameters={...he.parameters,docs:{...(Ke=he.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: renderInteractive,
  args: {
    id: 'popover-interactive',
    triggerID: 'popover-trigger-interactive',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    flip: DEFAULTS.FLIP,
    size: true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(qe=(Ge=he.parameters)==null?void 0:Ge.docs)==null?void 0:qe.source}}};var Je,Qe,et;me.parameters={...me.parameters,docs:{...(Je=me.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: renderInteractiveHover,
  args: {
    id: 'popover-interactive-hover',
    triggerID: 'popover-trigger-interactive-hover',
    trigger: 'mouseenter',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(et=(Qe=me.parameters)==null?void 0:Qe.docs)==null?void 0:et.source}}};var tt,ot,rt;ge.parameters={...ge.parameters,docs:{...(tt=ge.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: renderMultiple,
  args: {
    id: 'popover-multiple',
    triggerID: 'popover-trigger-multiple',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'close-button': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(rt=(ot=ge.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var it,nt,st;ve.parameters={...ve.parameters,docs:{...(it=ve.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: renderNested,
  args: {
    id: 'popover-nested',
    triggerID: 'popover-trigger-nested',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': 10,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(st=(nt=ve.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var ct,lt,at;be.parameters={...be.parameters,docs:{...(ct=be.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: renderHideOnBlur,
  args: {
    id: 'popover-hide-on-blur',
    triggerID: 'popover-trigger-hide-on-blur',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.RIGHT,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    'hide-on-blur': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(at=(lt=be.parameters)==null?void 0:lt.docs)==null?void 0:at.source}}};var dt,pt,ut;Ee.parameters={...Ee.parameters,docs:{...(dt=Ee.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: renderBackdrop,
  args: {
    id: 'popover-backdrop',
    triggerID: 'popover-trigger-backdrop',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    backdrop: true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(ut=(pt=Ee.parameters)==null?void 0:pt.docs)==null?void 0:ut.source}}};const Ko=["Default","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop"];export{fe as Default,Ko as __namedExportsOrder,Zo as default,be as hideOnBlur,he as interactiveContent,me as interactiveHover,ge as interactiveMultiple,ve as nestedPopover,Ee as popoverWithBackdrop};
