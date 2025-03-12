import{i as Oe,k as L,D as Mt}from"./lit-element-CHllvULs.js";import{t as Le}from"./if-defined-C4tJgJ33.js";import{u as Ae,n as w,C as Ut}from"./index-HW6KrQZO.js";import"./index-BzhWeMB0.js";import{a as dt}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as De,h as Ce}from"./utils-D1SE5bce.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-BPMM56DO.js";import"./DisabledMixin-DBt9didn.js";import"./index-BGjwsboe.js";import"./button.constants-BtWRRBoE.js";import"./button.utils-CM5PFBkb.js";import"./index-DMeMarQJ.js";import"./iframe-CR1wgCnq.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const Z=Math.min,C=Math.max,yt=Math.round,pt=Math.floor,_=t=>({x:t,y:t}),Se={left:"right",right:"left",bottom:"top",top:"bottom"},Fe={start:"end",end:"start"};function Dt(t,e,r){return C(t,Z(e,r))}function nt(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function st(t){return t.split("-")[1]}function fe(t){return t==="x"?"y":"x"}function Ft(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(K(t))?"y":"x"}function Pt(t){return fe(q(t))}function Pe(t,e,r){r===void 0&&(r=!1);const o=st(t),i=Pt(t),n=Ft(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=wt(s)),[s,wt(s)]}function ke(t){const e=wt(t);return[Ct(t),e,Ct(e)]}function Ct(t){return t.replace(/start|end/g,e=>Fe[e])}function Re(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function Ie(t,e,r,o){const i=st(t);let n=Re(K(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Ct)))),n}function wt(t){return t.replace(/left|right|bottom|top/g,e=>Se[e])}function Be(t){return{top:0,right:0,bottom:0,left:0,...t}}function he(t){return typeof t!="number"?Be(t):{top:t,right:t,bottom:t,left:t}}function xt(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function Ht(t,e,r){let{reference:o,floating:i}=t;const n=q(e),s=Pt(e),c=Ft(s),l=K(e),a=n==="y",p=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:p,y:o.y-i.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(st(e)){case"start":f[s]-=m*(r&&a?-1:1);break;case"end":f[s]+=m*(r&&a?-1:1);break}return f}const Ne=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,c=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:u}=Ht(a,o,l),m=o,f={},h=0;for(let g=0;g<c.length;g++){const{name:b,fn:v}=c[g],{x:E,y:x,data:A,reset:O}=await v({x:p,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});p=E??p,u=x??u,f={...f,[b]:{...f[b],...A}},O&&h<=50&&(h++,typeof O=="object"&&(O.placement&&(m=O.placement),O.rects&&(a=O.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:p,y:u}=Ht(a,m,l)),g=-1)}return{x:p,y:u,placement:m,strategy:i,middlewareData:f}};async function kt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=nt(e,t),h=he(f),b=c[m?u==="floating"?"reference":"floating":u],v=xt(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(b)))==null||r?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:a,rootBoundary:p,strategy:l})),E=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),A=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},O=xt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:E,offsetParent:x,strategy:l}):E);return{top:(v.top-O.top+h.top)/A.y,bottom:(O.bottom-v.bottom+h.bottom)/A.y,left:(v.left-O.left+h.left)/A.x,right:(O.right-v.right+h.right)/A.x}}const $e=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:c,middlewareData:l}=e,{element:a,padding:p=0}=nt(t,e)||{};if(a==null)return{};const u=he(p),m={x:r,y:o},f=Pt(i),h=Ft(f),g=await s.getDimensions(a),b=f==="y",v=b?"top":"left",E=b?"bottom":"right",x=b?"clientHeight":"clientWidth",A=n.reference[h]+n.reference[f]-m[f]-n.floating[h],O=m[f]-n.reference[f],F=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let P=F?F[x]:0;(!P||!await(s.isElement==null?void 0:s.isElement(F)))&&(P=c.floating[x]||n.floating[h]);const z=A/2-O/2,B=P/2-g[h]/2-1,k=Z(u[v],B),W=Z(u[E],B),N=k,Y=P-g[h]-W,D=P/2-g[h]/2+z,et=Dt(N,D,Y),V=!l.arrow&&st(i)!=null&&D!==et&&n.reference[h]/2-(D<N?k:W)-g[h]/2<0,$=V?D<N?D-N:D-Y:0;return{[f]:m[f]+$,data:{[f]:et,centerOffset:D-et-$,...V&&{alignmentOffset:$}},reset:V}}}),_e=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...b}=nt(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const v=K(i),E=q(c),x=K(c)===c,A=await(l.isRTL==null?void 0:l.isRTL(a.floating)),O=m||(x||!g?[wt(c)]:ke(c)),F=h!=="none";!m&&F&&O.push(...Ie(c,g,h,A));const P=[c,...O],z=await kt(e,b),B=[];let k=((o=n.flip)==null?void 0:o.overflows)||[];if(p&&B.push(z[v]),u){const D=Pe(i,s,A);B.push(z[D[0]],z[D[1]])}if(k=[...k,{placement:i,overflows:B}],!B.every(D=>D<=0)){var W,N;const D=(((W=n.flip)==null?void 0:W.index)||0)+1,et=P[D];if(et)return{data:{index:D,overflows:k},reset:{placement:et}};let V=(N=k.filter($=>$.overflows[0]<=0).sort(($,X)=>$.overflows[1]-X.overflows[1])[0])==null?void 0:N.placement;if(!V)switch(f){case"bestFit":{var Y;const $=(Y=k.filter(X=>{if(F){const j=q(X.placement);return j===E||j==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(j=>j>0).reduce((j,Te)=>j+Te,0)]).sort((X,j)=>X[1]-j[1])[0])==null?void 0:Y[0];$&&(V=$);break}case"initialPlacement":V=c;break}if(i!==V)return{reset:{placement:V}}}return{}}}};async function Me(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=K(r),c=st(r),l=q(r)==="y",a=["left","top"].includes(s)?-1:1,p=n&&l?-1:1,u=nt(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof h=="number"&&(f=c==="end"?h*-1:h),l?{x:f*p,y:m*a}:{x:m*a,y:f*p}}const Ue=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:c}=e,l=await Me(e,t);return s===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:n+l.y,data:{...l,placement:s}}}}},He=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:c={fn:b=>{let{x:v,y:E}=b;return{x:v,y:E}}},...l}=nt(t,e),a={x:r,y:o},p=await kt(e,l),u=q(K(i)),m=fe(u);let f=a[m],h=a[u];if(n){const b=m==="y"?"top":"left",v=m==="y"?"bottom":"right",E=f+p[b],x=f-p[v];f=Dt(E,f,x)}if(s){const b=u==="y"?"top":"left",v=u==="y"?"bottom":"right",E=h+p[b],x=h-p[v];h=Dt(E,h,x)}const g=c.fn({...e,[m]:f,[u]:h});return{...g,data:{x:g.x-r,y:g.y-o,enabled:{[m]:n,[u]:s}}}}}},ze=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:c}=e,{apply:l=()=>{},...a}=nt(t,e),p=await kt(e,a),u=K(i),m=st(i),f=q(i)==="y",{width:h,height:g}=n.floating;let b,v;u==="top"||u==="bottom"?(b=u,v=m===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(v=u,b=m==="end"?"top":"bottom");const E=g-p.top-p.bottom,x=h-p.left-p.right,A=Z(g-p[b],E),O=Z(h-p[v],x),F=!e.middlewareData.shift;let P=A,z=O;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(z=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(P=E),F&&!m){const k=C(p.left,0),W=C(p.right,0),N=C(p.top,0),Y=C(p.bottom,0);f?z=h-2*(k!==0||W!==0?k+W:C(p.left,p.right)):P=g-2*(N!==0||Y!==0?N+Y:C(p.top,p.bottom))}await l({...e,availableWidth:z,availableHeight:P});const B=await s.getDimensions(c.floating);return h!==B.width||g!==B.height?{reset:{rects:!0}}:{}}}};function Tt(){return typeof window<"u"}function ct(t){return me(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function U(t){var e;return(e=(me(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function me(t){return Tt()?t instanceof Node||t instanceof S(t).Node:!1}function R(t){return Tt()?t instanceof Element||t instanceof S(t).Element:!1}function M(t){return Tt()?t instanceof HTMLElement||t instanceof S(t).HTMLElement:!1}function zt(t){return!Tt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function at(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=I(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function Ve(t){return["table","td","th"].includes(ct(t))}function Ot(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Rt(t){const e=It(),r=R(t)?I(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function We(t){let e=G(t);for(;M(e)&&!it(e);){if(Rt(e))return e;if(Ot(e))return null;e=G(e)}return null}function It(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(ct(t))}function I(t){return S(t).getComputedStyle(t)}function Lt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function G(t){if(ct(t)==="html")return t;const e=t.assignedSlot||t.parentNode||zt(t)&&t.host||U(t);return zt(e)?e.host:e}function ge(t){const e=G(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&at(e)?e:ge(e)}function lt(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=ge(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=S(i);if(n){const c=St(s);return e.concat(s,s.visualViewport||[],at(i)?i:[],c&&r?lt(c):[])}return e.concat(i,lt(i,[],r))}function St(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ve(t){const e=I(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,c=yt(r)!==n||yt(o)!==s;return c&&(r=n,o=s),{width:r,height:o,$:c}}function Bt(t){return R(t)?t:t.contextElement}function rt(t){const e=Bt(t);if(!M(e))return _(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=ve(e);let s=(n?yt(r.width):r.width)/o,c=(n?yt(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Ye=_(0);function be(t){const e=S(t);return!It()||!e.visualViewport?Ye:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xe(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==S(t)?!1:e}function J(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=Bt(t);let s=_(1);e&&(o?R(o)&&(s=rt(o)):s=rt(t));const c=Xe(n,r,o)?be(n):_(0);let l=(i.left+c.x)/s.x,a=(i.top+c.y)/s.y,p=i.width/s.x,u=i.height/s.y;if(n){const m=S(n),f=o&&R(o)?S(o):o;let h=m,g=St(h);for(;g&&o&&f!==h;){const b=rt(g),v=g.getBoundingClientRect(),E=I(g),x=v.left+(g.clientLeft+parseFloat(E.paddingLeft))*b.x,A=v.top+(g.clientTop+parseFloat(E.paddingTop))*b.y;l*=b.x,a*=b.y,p*=b.x,u*=b.y,l+=x,a+=A,h=S(g),g=St(h)}}return xt({width:p,height:u,x:l,y:a})}function Nt(t,e){const r=Lt(t).scrollLeft;return e?e.left+r:J(U(t)).left+r}function Ee(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:Nt(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function je(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=U(o),c=e?Ot(e.floating):!1;if(o===s||c&&n)return r;let l={scrollLeft:0,scrollTop:0},a=_(1);const p=_(0),u=M(o);if((u||!u&&!n)&&((ct(o)!=="body"||at(s))&&(l=Lt(o)),M(o))){const f=J(o);a=rt(o),p.x=f.x+o.clientLeft,p.y=f.y+o.clientTop}const m=s&&!u&&!n?Ee(s,l,!0):_(0);return{width:r.width*a.x,height:r.height*a.y,x:r.x*a.x-l.scrollLeft*a.x+p.x+m.x,y:r.y*a.y-l.scrollTop*a.y+p.y+m.y}}function Ze(t){return Array.from(t.getClientRects())}function Ke(t){const e=U(t),r=Lt(t),o=t.ownerDocument.body,i=C(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=C(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+Nt(t);const c=-r.scrollTop;return I(o).direction==="rtl"&&(s+=C(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:c}}function Ge(t,e){const r=S(t),o=U(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){n=i.width,s=i.height;const a=It();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:n,height:s,x:c,y:l}}function qe(t,e){const r=J(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=M(t)?rt(t):_(1),s=t.clientWidth*n.x,c=t.clientHeight*n.y,l=i*n.x,a=o*n.y;return{width:s,height:c,x:l,y:a}}function Vt(t,e,r){let o;if(e==="viewport")o=Ge(t,r);else if(e==="document")o=Ke(U(t));else if(R(e))o=qe(e,r);else{const i=be(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return xt(o)}function ye(t,e){const r=G(t);return r===e||!R(r)||it(r)?!1:I(r).position==="fixed"||ye(r,e)}function Je(t,e){const r=e.get(t);if(r)return r;let o=lt(t,[],!1).filter(c=>R(c)&&ct(c)!=="body"),i=null;const n=I(t).position==="fixed";let s=n?G(t):t;for(;R(s)&&!it(s);){const c=I(s),l=Rt(s);!l&&c.position==="fixed"&&(i=null),(n?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||at(s)&&!l&&ye(t,s))?o=o.filter(p=>p!==s):i=c,s=G(s)}return e.set(t,o),o}function Qe(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?Ot(e)?[]:Je(e,this._c):[].concat(r),o],c=s[0],l=s.reduce((a,p)=>{const u=Vt(e,p,i);return a.top=C(u.top,a.top),a.right=Z(u.right,a.right),a.bottom=Z(u.bottom,a.bottom),a.left=C(u.left,a.left),a},Vt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function to(t){const{width:e,height:r}=ve(t);return{width:e,height:r}}function eo(t,e,r){const o=M(e),i=U(e),n=r==="fixed",s=J(t,!0,n,e);let c={scrollLeft:0,scrollTop:0};const l=_(0);if(o||!o&&!n)if((ct(e)!=="body"||at(i))&&(c=Lt(e)),o){const m=J(e,!0,n,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else i&&(l.x=Nt(i));const a=i&&!o&&!n?Ee(i,c):_(0),p=s.left+c.scrollLeft-l.x-a.x,u=s.top+c.scrollTop-l.y-a.y;return{x:p,y:u,width:s.width,height:s.height}}function At(t){return I(t).position==="static"}function Wt(t,e){if(!M(t)||I(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return U(t)===r&&(r=r.ownerDocument.body),r}function we(t,e){const r=S(t);if(Ot(t))return r;if(!M(t)){let i=G(t);for(;i&&!it(i);){if(R(i)&&!At(i))return i;i=G(i)}return r}let o=Wt(t,e);for(;o&&Ve(o)&&At(o);)o=Wt(o,e);return o&&it(o)&&At(o)&&!Rt(o)?r:o||We(t)||r}const oo=async function(t){const e=this.getOffsetParent||we,r=this.getDimensions,o=await r(t.floating);return{reference:eo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ro(t){return I(t).direction==="rtl"}const io={convertOffsetParentRelativeRectToViewportRelativeRect:je,getDocumentElement:U,getClippingRect:Qe,getOffsetParent:we,getElementRects:oo,getClientRects:Ze,getDimensions:to,getScale:rt,isElement:R,isRTL:ro};function no(t,e){let r=null,o;const i=U(t);function n(){var c;clearTimeout(o),(c=r)==null||c.disconnect(),r=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),n();const{left:a,top:p,width:u,height:m}=t.getBoundingClientRect();if(c||e(),!u||!m)return;const f=pt(p),h=pt(i.clientWidth-(a+u)),g=pt(i.clientHeight-(p+m)),b=pt(a),E={rootMargin:-f+"px "+-h+"px "+-g+"px "+-b+"px",threshold:C(0,Z(1,l))||1};let x=!0;function A(O){const F=O[0].intersectionRatio;if(F!==l){if(!x)return s();F?s(!1,F):o=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{r=new IntersectionObserver(A,{...E,root:i.ownerDocument})}catch{r=new IntersectionObserver(A,E)}r.observe(t)}return s(!0),n}function so(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Bt(t),p=i||n?[...a?lt(a):[],...lt(e)]:[];p.forEach(v=>{i&&v.addEventListener("scroll",r,{passive:!0}),n&&v.addEventListener("resize",r)});const u=a&&c?no(a,r):null;let m=-1,f=null;s&&(f=new ResizeObserver(v=>{let[E]=v;E&&E.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),r()}),a&&!l&&f.observe(a),f.observe(e));let h,g=l?J(t):null;l&&b();function b(){const v=J(t);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&r(),g=v,h=requestAnimationFrame(b)}return r(),()=>{var v;p.forEach(E=>{i&&E.removeEventListener("scroll",r),n&&E.removeEventListener("resize",r)}),u==null||u(),(v=f)==null||v.disconnect(),f=null,l&&cancelAnimationFrame(h)}}const co=Ue,lo=He,ao=_e,po=ze,uo=$e,fo=(t,e,r)=>{const o=new Map,i={platform:io,...r},n={...i.platform,_c:o};return Ne(t,e,{...i,platform:n})},ho=Oe`
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
`,mo=[ho],go=Ae.constructTagName("popover"),H={LEFT_START:"left-start",LEFT:"left",LEFT_END:"left-end",RIGHT_START:"right-start",RIGHT:"right",RIGHT_END:"right-end",TOP_START:"top-start",TOP:"top",TOP_END:"top-end",BOTTOM_START:"bottom-start",BOTTOM:"bottom",BOTTOM_END:"bottom-end"},xe={CLICK:"click",MOUSEENTER:"mouseenter",FOCUSIN:"focusin",MANUAL:"manual"},$t={TONAL:"tonal",CONTRAST:"contrast"},d={PLACEMENT:H.BOTTOM,TRIGGER:xe.CLICK,COLOR:$t.TONAL,OFFSET:4,VISIBLE:!1,ARROW:!1,CLOSE_BUTTON:!1,FOCUS_TRAP:!1,INTERACTIVE:!1,PREVENT_SCROLL:!1,HIDE_ON_ESCAPE:!1,HIDE_ON_BLUR:!1,HIDE_ON_CLICK_OUTSIDE:!1,FOCUS_BACK:!1,BACKDROP:!1,FLIP:!0,SIZE:!1,DELAY:"0,0",ROLE:"dialog",Z_INDEX:1e3};var vo=Object.defineProperty,Yt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&vo(e,r,i),i};const bo=t=>{class e extends t{constructor(...o){super(...o),this.enabledFocusTrap=d.FOCUS_TRAP,this.enabledPreventScroll=d.PREVENT_SCROLL,this.focusTrapIndex=-1,this.focusableElements=[],this.shouldWrapFocus=()=>!0,this.addEventListener("keydown",this.handleKeydown)}deactivateFocusTrap(){this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.focusTrapIndex=-1,document.body.style.overflow=""}hasNoClientRects(o){return o.getClientRects().length===0}hasZeroDimensions(o){const{width:i,height:n}=o.getBoundingClientRect(),{offsetWidth:s,offsetHeight:c}=o;return s+c+n+i===0}isNotVisible(o){return this.hasZeroDimensions(o)||this.hasNoClientRects(o)}hasHiddenStyle(o){const{display:i,opacity:n,visibility:s}=o.style;return i==="none"||n==="0"||s==="hidden"||s==="collapse"}hasComputedHidden(o){const i=getComputedStyle(o);return i.visibility==="hidden"||i.height==="0"||i.display==="none"}isHidden(o){return o.hasAttribute("hidden")||o.getAttribute("aria-hidden")==="true"||this.hasHiddenStyle(o)||this.isNotVisible(o)||this.hasComputedHidden(o)}isNotTabbable(o){return o.getAttribute("tabindex")==="-1"}isInteractiveElement(o){return!!(new Set(["BUTTON","DETAILS","EMBED","IFRAME","SELECT","TEXTAREA"]).has(o.tagName)||o instanceof HTMLAnchorElement&&o.hasAttribute("href")||o instanceof HTMLInputElement&&o.type!=="hidden"||(o instanceof HTMLAudioElement||o instanceof HTMLVideoElement)&&o.hasAttribute("controls")||(o instanceof HTMLImageElement||o instanceof HTMLObjectElement)&&o.hasAttribute("usemap")||o.hasAttribute("tabindex")&&o.tabIndex>-1)}isFocusable(o){return this.isHidden(o)||this.isNotTabbable(o)?!1:this.isInteractiveElement(o)}findFocusable(o,i=new Set){return o instanceof HTMLElement&&this.isFocusable(o)&&i.add(o),Array.from(o.children).forEach(s=>{const c=s;this.isFocusable(c)&&i.add(c),c.shadowRoot?this.findFocusable(c.shadowRoot,i):c.tagName==="SLOT"?c.assignedElements({flatten:!0}).forEach(a=>{a instanceof HTMLElement&&this.findFocusable(a,i)}):this.findFocusable(c,i)}),[...i]}setFocusableElements(){this.shadowRoot&&(this.focusableElements=this.findFocusable(this.shadowRoot,new Set))}setInitialFocus(o=0){this.focusableElements.length!==0&&(this.enabledPreventScroll&&(document.body.style.overflow="hidden"),this.focusableElements[o]&&(this.focusTrapIndex=o,this.focusableElements[o].focus()))}calculateNextIndex(o,i){const{length:n}=this.focusableElements,s=this.shouldWrapFocus();if(o===-1)return i>0?0:n-1;let c=o+i;return s?(c<0&&(c=n-1),c>=n&&(c=0)):(c<0&&(c=0),c>=n&&(c=n-1)),c}getDeepActiveElement(){var i;let o=document.activeElement||document.body;for(;o instanceof HTMLElement&&((i=o.shadowRoot)!=null&&i.activeElement);)o=o.shadowRoot.activeElement;return o||document.body}findElement(o){return this.focusableElements.findIndex(i=>this.isEqualFocusNode(o,i))}isEqualFocusNode(o,i){return o.nodeType>=0?i.isEqualNode(o)&&i===o:!1}trapFocus(o){if(this.focusableElements.length===0)return;const i=this.getDeepActiveElement(),n=this.findElement(i);o?this.focusTrapIndex=this.calculateNextIndex(n,-1):this.focusTrapIndex=this.calculateNextIndex(n,1);const s=this.focusableElements[this.focusTrapIndex];s&&s.focus()}handleKeydown(o){!this.enabledFocusTrap||!this.focusableElements.length||o.key==="Tab"&&(o.preventDefault(),this.trapFocus(o.shiftKey))}}return Yt([w({type:Boolean})],e.prototype,"enabledFocusTrap"),Yt([w({type:Boolean})],e.prototype,"enabledPreventScroll"),e};class Eo{constructor(){this.stack=[]}push(e){this.stack.push(e)}pop(){return this.stack.pop()}peek(){return this.stack[this.stack.length-1]}remove(e){this.stack=this.stack.filter(r=>r!==e)}clear(){this.stack=[]}}const ot=new Eo;class ut{static dispatchPopoverEvent(e,r){r.dispatchEvent(new CustomEvent(e,{detail:{show:r.visible},composed:!0,bubbles:!0}))}static onShowPopover(e){this.dispatchPopoverEvent("popover-on-show",e)}static onHidePopover(e){this.dispatchPopoverEvent("popover-on-hide",e)}static onCreatedPopover(e){this.dispatchPopoverEvent("popover-on-created",e)}static onDestroyedPopover(e){this.dispatchPopoverEvent("popover-on-destroyed",e)}}class yo{constructor(e){this.arrowPixelChange=!1,this.popover=e}setupDelay(){try{const[e,r]=this.popover.delay.split(",").map(o=>{const i=parseInt(o,10);if(Number.isNaN(i)||i<0)throw new Error(`Invalid delay value: ${o}`);return i});return[e,r]}catch{return this.popover.delay="0,0",[0,0]}}setupHoverBridge(e){const r=this.popover.renderRoot.querySelector(".popover-hover-bridge");Object.assign(r.style,{top:"",left:"",right:"",bottom:""});const o=`calc(${this.popover.showArrow?"0.75rem + ":""}${this.popover.offset}px)`,i=this.popover.offsetHeight||0,n=this.popover.offsetWidth||0;if(r)switch(e.split("-")[0]){case"top":r.style.height=o,r.style.bottom=`calc(-1 * (${o}))`,r.style.left="50%",r.style.width=`${n}px`;break;case"left":r.style.height=`${i}px`,r.style.width=o,r.style.right=`calc(-1.5 * (${o}))`;break;case"right":r.style.height=`${i}px`,r.style.width=o,r.style.left=`calc(-0.5 * (${o}))`;break;case"bottom":default:r.style.height=o,r.style.top=`calc(-1 * (${o}))`,r.style.left="50%",r.style.width=`${n}px`;break}}setupAppendTo(){if(this.popover.appendTo){const e=document.getElementById(this.popover.appendTo);e&&e.appendChild(this.popover)}}setupAccessibility(){var e,r,o;this.popover.toggleAttribute("aria-modal",this.popover.interactive),this.popover.interactive&&(this.popover.ariaLabel||(this.popover.ariaLabel=((e=this.popover.triggerElement)==null?void 0:e.ariaLabel)||((r=this.popover.triggerElement)==null?void 0:r.textContent)||""),this.popover.ariaLabelledby||(this.popover.ariaLabelledby=((o=this.popover.triggerElement)==null?void 0:o.id)||""))}updateArrowStyle(e,r){var p;if(!this.popover.arrowElement)return;const o=r.split("-")[0],i={top:"bottom",right:"left",bottom:"top",left:"right"}[o],{x:n,y:s}=e,c=this.popover.arrowElement.getBoundingClientRect(),l=(p=this.popover.arrowElement.offsetParent)==null?void 0:p.getBoundingClientRect();if(!this.arrowPixelChange){const u=l!=null&&l[i]?12-Math.abs(c[i]-l[i]):0;Math.round(u)===1?this.arrowPixelChange=!0:this.arrowPixelChange=!1}const a=this.arrowPixelChange?.5:0;this.popover.arrowElement.setAttribute("data-side",o),Object.assign(this.popover.arrowElement.style,{left:n!=null?`${n}px`:"",top:s!=null?`${s}px`:"",[i]:`${-this.popover.arrowElement.offsetHeight/2-a}px`})}updatePopoverStyle(e,r){Object.assign(this.popover.style,{left:`${e}px`,top:`${r}px`})}createBackdrop(){var e;if(!this.popover.backdropElement){const r=document.createElement("div");r.classList.add("popover-backdrop"),(e=this.popover.parentElement)==null||e.appendChild(r);const o=document.createElement("style");o.textContent=`
        .popover-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: ${this.popover.zIndex-1};
        }
      `,r.appendChild(o),this.popover.backdropElement=r}}}var wo=Object.defineProperty,T=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&wo(e,r,i),i};const _t=class _t extends bo(Ut){constructor(){super(),this.id="",this.triggerID="",this.trigger=d.TRIGGER,this.placement=d.PLACEMENT,this.color=d.COLOR,this.visible=d.VISIBLE,this.offset=d.OFFSET,this.focusTrap=d.FOCUS_TRAP,this.preventScroll=d.PREVENT_SCROLL,this.showArrow=d.ARROW,this.closeButton=d.CLOSE_BUTTON,this.interactive=d.INTERACTIVE,this.delay=d.DELAY,this.hideOnEscape=d.HIDE_ON_ESCAPE,this.hideOnBlur=d.HIDE_ON_BLUR,this.hideOnOutsideClick=d.HIDE_ON_CLICK_OUTSIDE,this.focusBackToTrigger=d.FOCUS_BACK,this.backdrop=d.BACKDROP,this.flip=d.FLIP,this.size=d.SIZE,this.zIndex=d.Z_INDEX,this.appendTo="",this.closeButtonAriaLabel=null,this.role=d.ROLE,this.ariaLabelledby=null,this.ariaDescribedby=null,this.arrowElement=null,this.triggerElement=null,this.hoverTimer=null,this.isTriggerClicked=!1,this.openDelay=0,this.closeDelay=0,this.backdropElement=null,this.onOutsidePopoverClick=e=>{if(ot.peek()!==this)return;let r=!1;const o=e.composedPath();r=this.contains(e.target)||o.includes(this.triggerElement);const i=this.backdropElement?o.includes(this.backdropElement):!1;(!r||i)&&this.hidePopover()},this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),this.hidePopover())},this.onPopoverFocusOut=e=>{this.contains(e.relatedTarget)||this.hidePopover()},this.startCloseDelay=()=>{if(!this.interactive)this.hidePopover();else{if(this.isTriggerClicked)return;this.hoverTimer=window.setTimeout(()=>{this.visible=!1},this.closeDelay)}},this.cancelCloseDelay=()=>{this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null)},this.showPopover=()=>{this.cancelCloseDelay(),setTimeout(()=>{this.visible=!0},this.openDelay)},this.hidePopover=()=>{ot.peek()===this&&setTimeout(()=>{this.visible=!1,this.isTriggerClicked=!1},this.closeDelay)},this.togglePopoverVisible=()=>{this.isTriggerClicked?this.hidePopover():(this.showPopover(),this.isTriggerClicked=!0)},this.utils=new yo(this)}async firstUpdated(e){super.firstUpdated(e),this.utils.setupAppendTo(),[this.openDelay,this.closeDelay]=this.utils.setupDelay(),this.setupTriggerListener(),this.utils.setupAccessibility(),this.style.zIndex=`${this.zIndex}`,ut.onCreatedPopover(this),this.visible&&(this.positionPopover(),await this.handleCreatePopoverFirstUpdate())}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners(),ut.onDestroyedPopover(this),ot.remove(this)}setupTriggerListener(){if(this.triggerID&&(this.triggerElement=document.getElementById(this.triggerID),!!this.triggerElement)){if(this.trigger==="mouseenter"&&(this.interactive?this.trigger="mouseenter click":this.trigger="mouseenter focusin"),this.trigger.includes("click")&&this.triggerElement.addEventListener("click",this.togglePopoverVisible),this.trigger.includes("mouseenter")){const e=this.renderRoot.querySelector(".popover-hover-bridge");this.triggerElement.addEventListener("mouseenter",this.showPopover),this.triggerElement.addEventListener("mouseleave",this.startCloseDelay),this.addEventListener("mouseenter",this.cancelCloseDelay),this.addEventListener("mouseleave",this.startCloseDelay),e==null||e.addEventListener("mouseenter",this.cancelCloseDelay)}this.trigger.includes("focusin")&&(this.triggerElement.addEventListener("focusin",this.showPopover),this.interactive||this.triggerElement.addEventListener("focusout",this.hidePopover)),this.addEventListener("focus-trap-exit",this.hidePopover)}}removeEventListeners(){if(!this.triggerElement)return;const e=this.renderRoot.querySelector(".popover-hover-bridge");this.triggerElement.removeEventListener("click",this.togglePopoverVisible),this.triggerElement.removeEventListener("mouseenter",this.showPopover),this.triggerElement.removeEventListener("mouseleave",this.hidePopover),this.removeEventListener("mouseenter",this.cancelCloseDelay),this.removeEventListener("mouseleave",this.startCloseDelay),this.triggerElement.removeEventListener("focusin",this.showPopover),this.triggerElement.removeEventListener("focusout",this.hidePopover),e==null||e.removeEventListener("mouseenter",this.cancelCloseDelay),this.removeEventListener("focus-trap-exit",this.hidePopover)}async updated(e){if(super.updated(e),e.has("visible")){const r=e.get("visible");await this.isOpenUpdated(r,this.visible)}if(e.has("placement")&&this.setAttribute("placement",Object.values(H).includes(this.placement)?this.placement:d.PLACEMENT),e.has("delay")&&([this.openDelay,this.closeDelay]=this.utils.setupDelay()),e.has("trigger")){const o=this.trigger.split(" ").filter(i=>Object.values(xe).includes(i));this.setAttribute("trigger",o.length>0?this.trigger:d.TRIGGER),this.removeEventListeners(),this.setupTriggerListener()}e.has("color")&&this.setAttribute("color",Object.values($t).includes(this.color)?this.color:d.COLOR),e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("append-to")&&this.utils.setupAppendTo(),(e.has("interactive")||e.has("aria-label")||e.has("aria-labelledby"))&&this.utils.setupAccessibility()}async isOpenUpdated(e,r){var o,i,n;e===r||!this.triggerElement||(r?(ot.peek()!==this&&ot.push(this),this.enabledFocusTrap=this.focusTrap,this.enabledPreventScroll=this.preventScroll,this.backdrop&&(this.utils.createBackdrop(),this.triggerElement.style.zIndex=`${this.zIndex}`),this.positionPopover(),await this.handleCreatePopoverFirstUpdate(),this.hideOnBlur&&(this.addEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(this.triggerElement.style.pointerEvents="none")),this.hideOnOutsideClick&&document.addEventListener("click",this.onOutsidePopoverClick),this.hideOnEscape&&document.addEventListener("keydown",this.onEscapeKeydown),this.triggerElement.setAttribute("aria-expanded","true"),this.interactive&&this.triggerElement.setAttribute("aria-haspopup",this.triggerElement.getAttribute("aria-haspopup")||"dialog"),ut.onShowPopover(this)):(ot.pop(),this.backdropElement&&((o=this.backdropElement)==null||o.remove(),this.backdropElement=null),this.hideOnBlur&&(this.removeEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(this.triggerElement.style.pointerEvents="")),this.hideOnOutsideClick&&document.removeEventListener("click",this.onOutsidePopoverClick),this.hideOnEscape&&document.removeEventListener("keydown",this.onEscapeKeydown),(i=this.deactivateFocusTrap)==null||i.call(this),this.triggerElement.removeAttribute("aria-expanded"),this.interactive&&this.triggerElement.removeAttribute("aria-haspopup"),this.focusBackToTrigger&&((n=this.triggerElement)==null||n.focus()),ut.onHidePopover(this)))}async handleCreatePopoverFirstUpdate(){var e,r;this.visible&&this.interactive&&((e=this.setFocusableElements)==null||e.call(this),await this.updateComplete,(r=this.setInitialFocus)==null||r.call(this))}positionPopover(){if(!this.triggerElement)return;const e=[lo()];let r=this.offset;if(this.flip&&e.push(ao()),this.size){const o=this.renderRoot.querySelector('[part="popover-content"]');e.push(po({apply({availableHeight:i}){o&&Object.assign(o.style,{maxHeight:`${i}px`})},padding:50}))}if(this.showArrow&&(this.arrowElement=this.renderRoot.querySelector(".popover-arrow"),this.arrowElement)){const o=this.arrowElement.offsetHeight;r=Math.sqrt(2*o**2)/2+this.offset,e.push(uo({element:this.arrowElement,padding:12}))}e.push(co(r)),so(this.triggerElement,this,async()=>{if(!this.triggerElement)return;const{x:o,y:i,middlewareData:n,placement:s}=await fo(this.triggerElement,this,{placement:this.placement,middleware:e});this.utils.updatePopoverStyle(o,i),n.arrow&&this.arrowElement&&this.utils.updateArrowStyle(n.arrow,s),this.trigger.includes("mouseenter")&&this.utils.setupHoverBridge(s)})}render(){return L`
      <div class="popover-hover-bridge"></div>
      ${this.closeButton?L` <mdc-button
            class="popover-close"
            prefix-icon="cancel-bold"
            variant="tertiary"
            size="20"
            aria-label=${Le(this.closeButtonAriaLabel)}
            @click="${this.hidePopover}"
          ></mdc-button>`:Mt}
      ${this.showArrow?L`<div class="popover-arrow"></div>`:Mt}
      <div part="popover-content">
        <slot></slot>
      </div>
    `}};_t.styles=[...Ut.styles,...mo];let y=_t;T([w({type:String})],y.prototype,"id");T([w({type:String})],y.prototype,"triggerID");T([w({type:String,reflect:!0})],y.prototype,"trigger");T([w({type:String,reflect:!0})],y.prototype,"placement");T([w({type:String,reflect:!0})],y.prototype,"color");T([w({type:Boolean,reflect:!0})],y.prototype,"visible");T([w({type:Number,reflect:!0})],y.prototype,"offset");T([w({type:Boolean,reflect:!0,attribute:"focus-trap"})],y.prototype,"focusTrap");T([w({type:Boolean,reflect:!0,attribute:"prevent-scroll"})],y.prototype,"preventScroll");T([w({type:Boolean,attribute:"show-arrow"})],y.prototype,"showArrow");T([w({type:Boolean,reflect:!0,attribute:"close-button"})],y.prototype,"closeButton");T([w({type:Boolean,reflect:!0})],y.prototype,"interactive");T([w({type:String,reflect:!0})],y.prototype,"delay");T([w({type:Boolean,reflect:!0,attribute:"hide-on-escape"})],y.prototype,"hideOnEscape");T([w({type:Boolean,reflect:!0,attribute:"hide-on-blur"})],y.prototype,"hideOnBlur");T([w({type:Boolean,reflect:!0,attribute:"hide-on-outside-click"})],y.prototype,"hideOnOutsideClick");T([w({type:Boolean,reflect:!0,attribute:"focus-back-to-trigger"})],y.prototype,"focusBackToTrigger");T([w({type:Boolean,reflect:!0})],y.prototype,"backdrop");T([w({type:Boolean,reflect:!0})],y.prototype,"flip");T([w({type:Boolean,reflect:!0})],y.prototype,"size");T([w({type:Number,reflect:!0,attribute:"z-index"})],y.prototype,"zIndex");T([w({type:String,reflect:!0,attribute:"append-to"})],y.prototype,"appendTo");T([w({type:String,attribute:"close-button-aria-label"})],y.prototype,"closeButtonAriaLabel");T([w({type:String,reflect:!0})],y.prototype,"role");T([w({type:String,reflect:!0,attribute:"aria-labelledby"})],y.prototype,"ariaLabelledby");T([w({type:String,reflect:!0,attribute:"aria-describedby"})],y.prototype,"ariaDescribedby");y.register(go);const Q=(t,e)=>L`
  <mdc-popover
    id="${t.id}"
    triggerID="${t.triggerID}"
    trigger="${t.trigger}"
    placement="${t.placement}"
    delay="${t.delay}"
    z-index="${t["z-index"]}"
    ?visible="${t.visible}"
    .offset="${t.offset??0}"
    ?interactive=${t.interactive}
    ?focus-trap=${t["focus-trap"]}
    ?show-arrow=${t["show-arrow"]}
    color=${t.color}
    ?flip=${t.flip}
    ?size=${t.size}
    ?backdrop=${t.backdrop}
    ?close-button=${t["close-button"]}
    ?prevent-scroll=${t["prevent-scroll"]}
    ?hide-on-blur=${t["hide-on-blur"]}
    ?hide-on-escape=${t["hide-on-escape"]}
    ?hide-on-outside-click=${t["hide-on-outside-click"]}
    ?focus-back-to-trigger=${t["focus-back-to-trigger"]}
    append-to=${t["append-to"]}
    close-button-aria-label="${t["close-button-aria-label"]}"
    aria-label="${t["aria-label"]}"
    aria-labelledby="${t["aria-labelledby"]}"
    aria-describedby="${t["aria-describedby"]}"
    role="${t.role}"
    @popover-on-show="${dt("onshow")}"
    @popover-on-hide="${dt("onhide")}"
    @popover-on-created="${dt("oncreated")}"
    @popover-on-destroyed="${dt("ondestroyed")}"
  >
    ${e}
  </mdc-popover>
`,tt=(t,e)=>L`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${t}">${e}</mdc-button>
  </div>
`,xo=t=>L`
  ${tt("popover-trigger","Click me!")}
  ${Q(t,L`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,To=t=>L`
  ${tt("popover-trigger-interactive","Click me!")}
  ${Q(t,L`
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
`,Oo=t=>L`
  ${tt("popover-trigger-interactive-hover","Hover me!")}
  ${Q(t,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,Lo=t=>L`
  ${tt("popover-trigger-hide-on-blur","Click me!")}
  ${Q(t,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,Ao=t=>L`
  ${tt("popover-trigger-multiple","Click/ Hover me!")}
  ${Q(t,L`<mdc-text>Interactive content on click</mdc-text>`)}
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
`,Do=t=>L`
  ${tt("popover-trigger-nested","Click me!")}
  ${Q(t,L`<mdc-text>Popover Level 1</mdc-text> <mdc-button id="popover-trigger-2">Click me!</mdc-button>`)}
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
`,Co=t=>L`
  ${tt("popover-trigger-backdrop","Click me!")}
  ${Q(t,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
  <mdc-button>Button 2</mdc-button>
`,Zo={title:"Work In Progress/popover",tags:["autodocs"],component:"mdc-popover",render:xo,parameters:{badges:["wip"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(H)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values($t)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},...De(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...Ce(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},ft={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"show-arrow":!0,role:d.ROLE,color:d.COLOR}},ht={render:To,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:d.FLIP,size:!0,role:d.ROLE,color:d.COLOR}},mt={render:Oo,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:d.ROLE,color:d.COLOR}},gt={render:Ao,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"close-button":!0,role:d.ROLE,color:d.COLOR}},vt={render:Do,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":10,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:d.ROLE,color:d.COLOR}},bt={render:Lo,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:H.RIGHT,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:d.ROLE,color:d.COLOR}},Et={render:Co,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,role:d.ROLE,color:d.COLOR}};var Xt,jt,Zt;ft.parameters={...ft.parameters,docs:{...(Xt=ft.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(Zt=(jt=ft.parameters)==null?void 0:jt.docs)==null?void 0:Zt.source}}};var Kt,Gt,qt;ht.parameters={...ht.parameters,docs:{...(Kt=ht.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(qt=(Gt=ht.parameters)==null?void 0:Gt.docs)==null?void 0:qt.source}}};var Jt,Qt,te;mt.parameters={...mt.parameters,docs:{...(Jt=mt.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(te=(Qt=mt.parameters)==null?void 0:Qt.docs)==null?void 0:te.source}}};var ee,oe,re;gt.parameters={...gt.parameters,docs:{...(ee=gt.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(oe=gt.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,ne,se;vt.parameters={...vt.parameters,docs:{...(ie=vt.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(ne=vt.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ce,le,ae;bt.parameters={...bt.parameters,docs:{...(ce=bt.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ae=(le=bt.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var de,pe,ue;Et.parameters={...Et.parameters,docs:{...(de=Et.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=Et.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const Ko=["Default","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop"];export{ft as Default,Ko as __namedExportsOrder,Zo as default,bt as hideOnBlur,ht as interactiveContent,mt as interactiveHover,gt as interactiveMultiple,vt as nestedPopover,Et as popoverWithBackdrop};
