import{i as Le,k as L,D as Dt}from"./lit-element-CHllvULs.js";import{t as at}from"./if-defined-C4tJgJ33.js";import{u as Ae,n as x,C as Ht}from"./index-HW6KrQZO.js";import{C as Rt,a as De,b as Ce}from"./index-DqRk6bLb.js";import{D as Se}from"./DataAriaLabelMixin-vs_lw9aw.js";import"./index-BT1ISfLJ.js";import{a as pt}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as Fe,h as Pe}from"./utils-D1SE5bce.js";import"./index-CEbgplXA.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-CXHzGrZ-.js";import"./DisabledMixin-DBt9didn.js";import"./FormInternalsMixin-D4P2zbkO.js";import"./button.constants-D0rdLcnn.js";import"./button.utils-CC-feA6A.js";import"./index-W-2h3si0.js";import"./iframe-CIJ1rX14.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const Z=Math.min,C=Math.max,wt=Math.round,ut=Math.floor,_=t=>({x:t,y:t}),Re={left:"right",right:"left",bottom:"top",top:"bottom"},ke={start:"end",end:"start"};function St(t,e,r){return C(t,Z(e,r))}function nt(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function st(t){return t.split("-")[1]}function he(t){return t==="x"?"y":"x"}function kt(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(K(t))?"y":"x"}function It(t){return he(G(t))}function Ie(t,e,r){r===void 0&&(r=!1);const o=st(t),i=It(t),n=kt(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=xt(s)),[s,xt(s)]}function Be(t){const e=xt(t);return[Ft(t),e,Ft(e)]}function Ft(t){return t.replace(/start|end/g,e=>ke[e])}function $e(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function Ne(t,e,r,o){const i=st(t);let n=$e(K(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Ft)))),n}function xt(t){return t.replace(/left|right|bottom|top/g,e=>Re[e])}function _e(t){return{top:0,right:0,bottom:0,left:0,...t}}function me(t){return typeof t!="number"?_e(t):{top:t,right:t,bottom:t,left:t}}function Tt(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function zt(t,e,r){let{reference:o,floating:i}=t;const n=G(e),s=It(e),c=kt(s),a=K(e),l=n==="y",p=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let f;switch(a){case"top":f={x:p,y:o.y-i.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(st(e)){case"start":f[s]-=m*(r&&l?-1:1);break;case"end":f[s]+=m*(r&&l?-1:1);break}return f}const Me=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,c=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:u}=zt(l,o,a),m=o,f={},h=0;for(let g=0;g<c.length;g++){const{name:b,fn:v}=c[g],{x:E,y:w,data:A,reset:O}=await v({x:p,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:l,platform:s,elements:{reference:t,floating:e}});p=E??p,u=w??u,f={...f,[b]:{...f[b],...A}},O&&h<=50&&(h++,typeof O=="object"&&(O.placement&&(m=O.placement),O.rects&&(l=O.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:p,y:u}=zt(l,m,a)),g=-1)}return{x:p,y:u,placement:m,strategy:i,middlewareData:f}};async function Bt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=nt(e,t),h=me(f),b=c[m?u==="floating"?"reference":"floating":u],v=Tt(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(b)))==null||r?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:l,rootBoundary:p,strategy:a})),E=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,w=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),A=await(n.isElement==null?void 0:n.isElement(w))?await(n.getScale==null?void 0:n.getScale(w))||{x:1,y:1}:{x:1,y:1},O=Tt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:E,offsetParent:w,strategy:a}):E);return{top:(v.top-O.top+h.top)/A.y,bottom:(O.bottom-v.bottom+h.bottom)/A.y,left:(v.left-O.left+h.left)/A.x,right:(O.right-v.right+h.right)/A.x}}const Ue=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:p=0}=nt(t,e)||{};if(l==null)return{};const u=me(p),m={x:r,y:o},f=It(i),h=kt(f),g=await s.getDimensions(l),b=f==="y",v=b?"top":"left",E=b?"bottom":"right",w=b?"clientHeight":"clientWidth",A=n.reference[h]+n.reference[f]-m[f]-n.floating[h],O=m[f]-n.reference[f],F=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let P=F?F[w]:0;(!P||!await(s.isElement==null?void 0:s.isElement(F)))&&(P=c.floating[w]||n.floating[h]);const z=A/2-O/2,B=P/2-g[h]/2-1,R=Z(u[v],B),W=Z(u[E],B),$=R,Y=P-g[h]-W,D=P/2-g[h]/2+z,et=St($,D,Y),V=!a.arrow&&st(i)!=null&&D!==et&&n.reference[h]/2-(D<$?R:W)-g[h]/2<0,N=V?D<$?D-$:D-Y:0;return{[f]:m[f]+N,data:{[f]:et,centerOffset:D-et-N,...V&&{alignmentOffset:N}},reset:V}}}),He=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...b}=nt(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const v=K(i),E=G(c),w=K(c)===c,A=await(a.isRTL==null?void 0:a.isRTL(l.floating)),O=m||(w||!g?[xt(c)]:Be(c)),F=h!=="none";!m&&F&&O.push(...Ne(c,g,h,A));const P=[c,...O],z=await Bt(e,b),B=[];let R=((o=n.flip)==null?void 0:o.overflows)||[];if(p&&B.push(z[v]),u){const D=Ie(i,s,A);B.push(z[D[0]],z[D[1]])}if(R=[...R,{placement:i,overflows:B}],!B.every(D=>D<=0)){var W,$;const D=(((W=n.flip)==null?void 0:W.index)||0)+1,et=P[D];if(et)return{data:{index:D,overflows:R},reset:{placement:et}};let V=($=R.filter(N=>N.overflows[0]<=0).sort((N,X)=>N.overflows[1]-X.overflows[1])[0])==null?void 0:$.placement;if(!V)switch(f){case"bestFit":{var Y;const N=(Y=R.filter(X=>{if(F){const j=G(X.placement);return j===E||j==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(j=>j>0).reduce((j,Oe)=>j+Oe,0)]).sort((X,j)=>X[1]-j[1])[0])==null?void 0:Y[0];N&&(V=N);break}case"initialPlacement":V=c;break}if(i!==V)return{reset:{placement:V}}}return{}}}};async function ze(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=K(r),c=st(r),a=G(r)==="y",l=["left","top"].includes(s)?-1:1,p=n&&a?-1:1,u=nt(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof h=="number"&&(f=c==="end"?h*-1:h),a?{x:f*p,y:m*l}:{x:m*l,y:f*p}}const Ve=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:c}=e,a=await ze(e,t);return s===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:n+a.y,data:{...a,placement:s}}}}},We=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:c={fn:b=>{let{x:v,y:E}=b;return{x:v,y:E}}},...a}=nt(t,e),l={x:r,y:o},p=await Bt(e,a),u=G(K(i)),m=he(u);let f=l[m],h=l[u];if(n){const b=m==="y"?"top":"left",v=m==="y"?"bottom":"right",E=f+p[b],w=f-p[v];f=St(E,f,w)}if(s){const b=u==="y"?"top":"left",v=u==="y"?"bottom":"right",E=h+p[b],w=h-p[v];h=St(E,h,w)}const g=c.fn({...e,[m]:f,[u]:h});return{...g,data:{x:g.x-r,y:g.y-o,enabled:{[m]:n,[u]:s}}}}}},Ye=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:c}=e,{apply:a=()=>{},...l}=nt(t,e),p=await Bt(e,l),u=K(i),m=st(i),f=G(i)==="y",{width:h,height:g}=n.floating;let b,v;u==="top"||u==="bottom"?(b=u,v=m===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(v=u,b=m==="end"?"top":"bottom");const E=g-p.top-p.bottom,w=h-p.left-p.right,A=Z(g-p[b],E),O=Z(h-p[v],w),F=!e.middlewareData.shift;let P=A,z=O;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(z=w),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(P=E),F&&!m){const R=C(p.left,0),W=C(p.right,0),$=C(p.top,0),Y=C(p.bottom,0);f?z=h-2*(R!==0||W!==0?R+W:C(p.left,p.right)):P=g-2*($!==0||Y!==0?$+Y:C(p.top,p.bottom))}await a({...e,availableWidth:z,availableHeight:P});const B=await s.getDimensions(c.floating);return h!==B.width||g!==B.height?{reset:{rects:!0}}:{}}}};function Ot(){return typeof window<"u"}function ct(t){return ge(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function U(t){var e;return(e=(ge(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ge(t){return Ot()?t instanceof Node||t instanceof S(t).Node:!1}function k(t){return Ot()?t instanceof Element||t instanceof S(t).Element:!1}function M(t){return Ot()?t instanceof HTMLElement||t instanceof S(t).HTMLElement:!1}function Vt(t){return!Ot()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function dt(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=I(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function Xe(t){return["table","td","th"].includes(ct(t))}function Lt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function $t(t){const e=Nt(),r=k(t)?I(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function je(t){let e=q(t);for(;M(e)&&!it(e);){if($t(e))return e;if(Lt(e))return null;e=q(e)}return null}function Nt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(ct(t))}function I(t){return S(t).getComputedStyle(t)}function At(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function q(t){if(ct(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vt(t)&&t.host||U(t);return Vt(e)?e.host:e}function ve(t){const e=q(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&dt(e)?e:ve(e)}function lt(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=ve(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=S(i);if(n){const c=Pt(s);return e.concat(s,s.visualViewport||[],dt(i)?i:[],c&&r?lt(c):[])}return e.concat(i,lt(i,[],r))}function Pt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function be(t){const e=I(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,c=wt(r)!==n||wt(o)!==s;return c&&(r=n,o=s),{width:r,height:o,$:c}}function _t(t){return k(t)?t:t.contextElement}function rt(t){const e=_t(t);if(!M(e))return _(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=be(e);let s=(n?wt(r.width):r.width)/o,c=(n?wt(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Ze=_(0);function Ee(t){const e=S(t);return!Nt()||!e.visualViewport?Ze:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ke(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==S(t)?!1:e}function J(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=_t(t);let s=_(1);e&&(o?k(o)&&(s=rt(o)):s=rt(t));const c=Ke(n,r,o)?Ee(n):_(0);let a=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,p=i.width/s.x,u=i.height/s.y;if(n){const m=S(n),f=o&&k(o)?S(o):o;let h=m,g=Pt(h);for(;g&&o&&f!==h;){const b=rt(g),v=g.getBoundingClientRect(),E=I(g),w=v.left+(g.clientLeft+parseFloat(E.paddingLeft))*b.x,A=v.top+(g.clientTop+parseFloat(E.paddingTop))*b.y;a*=b.x,l*=b.y,p*=b.x,u*=b.y,a+=w,l+=A,h=S(g),g=Pt(h)}}return Tt({width:p,height:u,x:a,y:l})}function Mt(t,e){const r=At(t).scrollLeft;return e?e.left+r:J(U(t)).left+r}function ye(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:Mt(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function qe(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=U(o),c=e?Lt(e.floating):!1;if(o===s||c&&n)return r;let a={scrollLeft:0,scrollTop:0},l=_(1);const p=_(0),u=M(o);if((u||!u&&!n)&&((ct(o)!=="body"||dt(s))&&(a=At(o)),M(o))){const f=J(o);l=rt(o),p.x=f.x+o.clientLeft,p.y=f.y+o.clientTop}const m=s&&!u&&!n?ye(s,a,!0):_(0);return{width:r.width*l.x,height:r.height*l.y,x:r.x*l.x-a.scrollLeft*l.x+p.x+m.x,y:r.y*l.y-a.scrollTop*l.y+p.y+m.y}}function Ge(t){return Array.from(t.getClientRects())}function Je(t){const e=U(t),r=At(t),o=t.ownerDocument.body,i=C(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=C(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+Mt(t);const c=-r.scrollTop;return I(o).direction==="rtl"&&(s+=C(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:c}}function Qe(t,e){const r=S(t),o=U(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,c=0,a=0;if(i){n=i.width,s=i.height;const l=Nt();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:n,height:s,x:c,y:a}}function to(t,e){const r=J(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=M(t)?rt(t):_(1),s=t.clientWidth*n.x,c=t.clientHeight*n.y,a=i*n.x,l=o*n.y;return{width:s,height:c,x:a,y:l}}function Wt(t,e,r){let o;if(e==="viewport")o=Qe(t,r);else if(e==="document")o=Je(U(t));else if(k(e))o=to(e,r);else{const i=Ee(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Tt(o)}function we(t,e){const r=q(t);return r===e||!k(r)||it(r)?!1:I(r).position==="fixed"||we(r,e)}function eo(t,e){const r=e.get(t);if(r)return r;let o=lt(t,[],!1).filter(c=>k(c)&&ct(c)!=="body"),i=null;const n=I(t).position==="fixed";let s=n?q(t):t;for(;k(s)&&!it(s);){const c=I(s),a=$t(s);!a&&c.position==="fixed"&&(i=null),(n?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||dt(s)&&!a&&we(t,s))?o=o.filter(p=>p!==s):i=c,s=q(s)}return e.set(t,o),o}function oo(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?Lt(e)?[]:eo(e,this._c):[].concat(r),o],c=s[0],a=s.reduce((l,p)=>{const u=Wt(e,p,i);return l.top=C(u.top,l.top),l.right=Z(u.right,l.right),l.bottom=Z(u.bottom,l.bottom),l.left=C(u.left,l.left),l},Wt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ro(t){const{width:e,height:r}=be(t);return{width:e,height:r}}function io(t,e,r){const o=M(e),i=U(e),n=r==="fixed",s=J(t,!0,n,e);let c={scrollLeft:0,scrollTop:0};const a=_(0);if(o||!o&&!n)if((ct(e)!=="body"||dt(i))&&(c=At(e)),o){const m=J(e,!0,n,e);a.x=m.x+e.clientLeft,a.y=m.y+e.clientTop}else i&&(a.x=Mt(i));const l=i&&!o&&!n?ye(i,c):_(0),p=s.left+c.scrollLeft-a.x-l.x,u=s.top+c.scrollTop-a.y-l.y;return{x:p,y:u,width:s.width,height:s.height}}function Ct(t){return I(t).position==="static"}function Yt(t,e){if(!M(t)||I(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return U(t)===r&&(r=r.ownerDocument.body),r}function xe(t,e){const r=S(t);if(Lt(t))return r;if(!M(t)){let i=q(t);for(;i&&!it(i);){if(k(i)&&!Ct(i))return i;i=q(i)}return r}let o=Yt(t,e);for(;o&&Xe(o)&&Ct(o);)o=Yt(o,e);return o&&it(o)&&Ct(o)&&!$t(o)?r:o||je(t)||r}const no=async function(t){const e=this.getOffsetParent||xe,r=this.getDimensions,o=await r(t.floating);return{reference:io(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function so(t){return I(t).direction==="rtl"}const co={convertOffsetParentRelativeRectToViewportRelativeRect:qe,getDocumentElement:U,getClippingRect:oo,getOffsetParent:xe,getElementRects:no,getClientRects:Ge,getDimensions:ro,getScale:rt,isElement:k,isRTL:so};function ao(t,e){let r=null,o;const i=U(t);function n(){var c;clearTimeout(o),(c=r)==null||c.disconnect(),r=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),n();const{left:l,top:p,width:u,height:m}=t.getBoundingClientRect();if(c||e(),!u||!m)return;const f=ut(p),h=ut(i.clientWidth-(l+u)),g=ut(i.clientHeight-(p+m)),b=ut(l),E={rootMargin:-f+"px "+-h+"px "+-g+"px "+-b+"px",threshold:C(0,Z(1,a))||1};let w=!0;function A(O){const F=O[0].intersectionRatio;if(F!==a){if(!w)return s();F?s(!1,F):o=setTimeout(()=>{s(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(A,{...E,root:i.ownerDocument})}catch{r=new IntersectionObserver(A,E)}r.observe(t)}return s(!0),n}function lo(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=_t(t),p=i||n?[...l?lt(l):[],...lt(e)]:[];p.forEach(v=>{i&&v.addEventListener("scroll",r,{passive:!0}),n&&v.addEventListener("resize",r)});const u=l&&c?ao(l,r):null;let m=-1,f=null;s&&(f=new ResizeObserver(v=>{let[E]=v;E&&E.target===l&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var w;(w=f)==null||w.observe(e)})),r()}),l&&!a&&f.observe(l),f.observe(e));let h,g=a?J(t):null;a&&b();function b(){const v=J(t);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&r(),g=v,h=requestAnimationFrame(b)}return r(),()=>{var v;p.forEach(E=>{i&&E.removeEventListener("scroll",r),n&&E.removeEventListener("resize",r)}),u==null||u(),(v=f)==null||v.disconnect(),f=null,a&&cancelAnimationFrame(h)}}const po=Ve,uo=We,fo=He,ho=Ye,mo=Ue,go=(t,e,r)=>{const o=new Map,i={platform:co,...r},n={...i.platform,_c:o};return Me(t,e,{...i,platform:n})},vo=Le`
  :host {
    --mdc-popover-arrow-border-radius: 0.1875rem;
    --mdc-popover-arrow-border: 0.0625rem solid var(--mds-color-theme-outline-secondary-normal);

    --mdc-popover-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-popover-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
    --mdc-popover-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
    --mdc-popover-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
  }

  :host([color='contrast']) .popover-container {
    .popover-arrow {
      background-color: var(--mdc-popover-inverted-background-color);
      border-color: var(--mdc-popover-inverted-border-color);
    }

    .popover-close {
      color: var(--mdc-popover-inverted-text-color);
    }
  }

  .popover-container {
    display: none;
    position: absolute;
    box-sizing: content-box;
  }

  :host([visible]) .popover-container {
    display: block;
  }

  .popover-container::part(container) {
    padding: 0;
  }

  :host::part(popover-content) {
    position: relative;
    padding: 0.75rem;
    overflow-y: auto;
    min-width: max-content;
    z-index: 9998;
  }

  .popover-backdrop {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
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
`,bo=[vo],Eo=Ae.constructTagName("popover"),H={LEFT_START:"left-start",LEFT:"left",LEFT_END:"left-end",RIGHT_START:"right-start",RIGHT:"right",RIGHT_END:"right-end",TOP_START:"top-start",TOP:"top",TOP_END:"top-end",BOTTOM_START:"bottom-start",BOTTOM:"bottom",BOTTOM_END:"bottom-end"},Te={CLICK:"click",MOUSEENTER:"mouseenter",FOCUSIN:"focusin",MANUAL:"manual"},d={PLACEMENT:H.BOTTOM,TRIGGER:Te.CLICK,COLOR:Rt.TONAL,OFFSET:4,VISIBLE:!1,ARROW:!1,CLOSE_BUTTON:!1,FOCUS_TRAP:!1,INTERACTIVE:!1,PREVENT_SCROLL:!1,HIDE_ON_ESCAPE:!1,HIDE_ON_BLUR:!1,HIDE_ON_CLICK_OUTSIDE:!1,FOCUS_BACK:!1,BACKDROP:!1,FLIP:!0,SIZE:!1,DELAY:"0,0",ROLE:"dialog",Z_INDEX:1e3};var yo=Object.defineProperty,Xt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&yo(e,r,i),i};const wo=t=>{class e extends t{constructor(...o){super(...o),this.enabledFocusTrap=d.FOCUS_TRAP,this.enabledPreventScroll=d.PREVENT_SCROLL,this.focusTrapIndex=-1,this.focusableElements=[],this.shouldWrapFocus=()=>!0,this.addEventListener("keydown",this.handleKeydown)}deactivateFocusTrap(){this.enabledFocusTrap=!1,this.enabledPreventScroll=!1,this.focusTrapIndex=-1,document.body.style.overflow=""}hasNoClientRects(o){return o.getClientRects().length===0}hasZeroDimensions(o){const{width:i,height:n}=o.getBoundingClientRect(),{offsetWidth:s,offsetHeight:c}=o;return s+c+n+i===0}isNotVisible(o){return this.hasZeroDimensions(o)||this.hasNoClientRects(o)}hasHiddenStyle(o){const{display:i,opacity:n,visibility:s}=o.style;return i==="none"||n==="0"||s==="hidden"||s==="collapse"}hasComputedHidden(o){const i=getComputedStyle(o);return i.visibility==="hidden"||i.height==="0"||i.display==="none"}isHidden(o){return o.hasAttribute("hidden")||o.getAttribute("aria-hidden")==="true"||this.hasHiddenStyle(o)||this.isNotVisible(o)||this.hasComputedHidden(o)}isNotTabbable(o){return o.getAttribute("tabindex")==="-1"}isInteractiveElement(o){return!!(new Set(["BUTTON","DETAILS","EMBED","IFRAME","SELECT","TEXTAREA"]).has(o.tagName)||o instanceof HTMLAnchorElement&&o.hasAttribute("href")||o instanceof HTMLInputElement&&o.type!=="hidden"||(o instanceof HTMLAudioElement||o instanceof HTMLVideoElement)&&o.hasAttribute("controls")||(o instanceof HTMLImageElement||o instanceof HTMLObjectElement)&&o.hasAttribute("usemap")||o.hasAttribute("tabindex")&&o.tabIndex>-1)}isFocusable(o){return this.isHidden(o)||this.isNotTabbable(o)?!1:this.isInteractiveElement(o)}findFocusable(o,i=new Set){return o instanceof HTMLElement&&this.isFocusable(o)&&i.add(o),Array.from(o.children).forEach(s=>{const c=s;this.isFocusable(c)&&i.add(c),c.shadowRoot?this.findFocusable(c.shadowRoot,i):c.tagName==="SLOT"?c.assignedElements({flatten:!0}).forEach(l=>{l instanceof HTMLElement&&this.findFocusable(l,i)}):this.findFocusable(c,i)}),[...i]}setFocusableElements(){this.shadowRoot&&(this.focusableElements=this.findFocusable(this.shadowRoot,new Set))}setInitialFocus(o=0){this.focusableElements.length!==0&&(this.enabledPreventScroll&&(document.body.style.overflow="hidden"),this.focusableElements[o]&&(this.focusTrapIndex=o,this.focusableElements[o].focus()))}calculateNextIndex(o,i){const{length:n}=this.focusableElements,s=this.shouldWrapFocus();if(o===-1)return i>0?0:n-1;let c=o+i;return s?(c<0&&(c=n-1),c>=n&&(c=0)):(c<0&&(c=0),c>=n&&(c=n-1)),c}getDeepActiveElement(){var i;let o=document.activeElement||document.body;for(;o instanceof HTMLElement&&((i=o.shadowRoot)!=null&&i.activeElement);)o=o.shadowRoot.activeElement;return o||document.body}findElement(o){return this.focusableElements.findIndex(i=>this.isEqualFocusNode(o,i))}isEqualFocusNode(o,i){return o.nodeType>=0?i.isEqualNode(o)&&i===o:!1}trapFocus(o){if(this.focusableElements.length===0)return;const i=this.getDeepActiveElement(),n=this.findElement(i);o?this.focusTrapIndex=this.calculateNextIndex(n,-1):this.focusTrapIndex=this.calculateNextIndex(n,1);const s=this.focusableElements[this.focusTrapIndex];s&&s.focus()}handleKeydown(o){!this.enabledFocusTrap||!this.focusableElements.length||o.key==="Tab"&&(o.preventDefault(),this.trapFocus(o.shiftKey))}}return Xt([x({type:Boolean})],e.prototype,"enabledFocusTrap"),Xt([x({type:Boolean})],e.prototype,"enabledPreventScroll"),e};class xo{constructor(){this.stack=[]}push(e){this.stack.push(e)}pop(){return this.stack.pop()}peek(){return this.stack[this.stack.length-1]}remove(e){this.stack=this.stack.filter(r=>r!==e)}clear(){this.stack=[]}}const ot=new xo;class ft{static dispatchPopoverEvent(e,r){r.dispatchEvent(new CustomEvent(e,{detail:{show:r.visible},composed:!0,bubbles:!0}))}static onShowPopover(e){this.dispatchPopoverEvent("popover-on-show",e)}static onHidePopover(e){this.dispatchPopoverEvent("popover-on-hide",e)}static onCreatedPopover(e){this.dispatchPopoverEvent("popover-on-created",e)}static onDestroyedPopover(e){this.dispatchPopoverEvent("popover-on-destroyed",e)}}class To{constructor(e){this.arrowPixelChange=!1,this.popover=e}setupDelay(){try{const[e,r]=this.popover.delay.split(",").map(o=>{const i=parseInt(o,10);if(Number.isNaN(i)||i<0)throw new Error(`Invalid delay value: ${o}`);return i});return[e,r]}catch{return this.popover.delay="0,0",[0,0]}}setupHoverBridge(e){var c;const r=this.popover.renderRoot.querySelector(".popover-hover-bridge");Object.assign(r.style,{top:"",left:"",right:"",bottom:""});const o=`calc(${this.popover.showArrow?"0.75rem + ":""}${this.popover.offset}px)`,i=(c=this.popover.shadowRoot)==null?void 0:c.querySelector("mdc-modalcontainer"),n=i.offsetHeight||0,s=i.offsetWidth||0;if(r)switch(e.split("-")[0]){case"top":r.style.height=o,r.style.bottom=`calc(-1 * (${o}))`,r.style.left="50%",r.style.width=`${s}px`;break;case"left":r.style.height=`${n}px`,r.style.width=o,r.style.right=`calc(-1.5 * (${o}))`;break;case"right":r.style.height=`${n}px`,r.style.width=o,r.style.left=`calc(-0.5 * (${o}))`;break;case"bottom":default:r.style.height=o,r.style.top=`calc(-1 * (${o}))`,r.style.left="50%",r.style.width=`${s}px`;break}}setupAppendTo(){if(this.popover.appendTo){const e=document.getElementById(this.popover.appendTo);e&&e.appendChild(this.popover)}}setupAccessibility(){var e,r,o;this.popover.interactive&&(this.popover.dataAriaLabel||(this.popover.dataAriaLabel=((e=this.popover.triggerElement)==null?void 0:e.ariaLabel)||((r=this.popover.triggerElement)==null?void 0:r.textContent)||""),this.popover.dataAriaLabelledby||(this.popover.dataAriaLabelledby=((o=this.popover.triggerElement)==null?void 0:o.id)||""))}updateArrowStyle(e,r){var p;if(!this.popover.arrowElement)return;const o=r.split("-")[0],i={top:"bottom",right:"left",bottom:"top",left:"right"}[o],{x:n,y:s}=e,c=this.popover.arrowElement.getBoundingClientRect(),a=(p=this.popover.arrowElement.offsetParent)==null?void 0:p.getBoundingClientRect();if(!this.arrowPixelChange){const u=a!=null&&a[i]?12-Math.abs(c[i]-a[i]):0;Math.round(u)===1?this.arrowPixelChange=!0:this.arrowPixelChange=!1}const l=this.arrowPixelChange?.5:0;this.popover.arrowElement.setAttribute("data-side",o),Object.assign(this.popover.arrowElement.style,{left:n!=null?`${n}px`:"",top:s!=null?`${s}px`:"",[i]:`${-this.popover.arrowElement.offsetHeight/2-l}px`})}updatePopoverStyle(e,r){this.popover.containerElement&&Object.assign(this.popover.containerElement.style,{left:`${e}px`,top:`${r}px`})}}var Oo=Object.defineProperty,T=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Oo(e,r,i),i};const Ut=class Ut extends Se(De(Ce(wo(Ht)))){constructor(){super(),this.id="",this.triggerID="",this.trigger=d.TRIGGER,this.placement=d.PLACEMENT,this.color=d.COLOR,this.visible=d.VISIBLE,this.offset=d.OFFSET,this.focusTrap=d.FOCUS_TRAP,this.preventScroll=d.PREVENT_SCROLL,this.showArrow=d.ARROW,this.closeButton=d.CLOSE_BUTTON,this.interactive=d.INTERACTIVE,this.delay=d.DELAY,this.hideOnEscape=d.HIDE_ON_ESCAPE,this.hideOnBlur=d.HIDE_ON_BLUR,this.hideOnOutsideClick=d.HIDE_ON_CLICK_OUTSIDE,this.focusBackToTrigger=d.FOCUS_BACK,this.backdrop=d.BACKDROP,this.flip=d.FLIP,this.size=d.SIZE,this.zIndex=d.Z_INDEX,this.appendTo="",this.closeButtonAriaLabel=null,this.dataRole=d.ROLE,this.arrowElement=null,this.triggerElement=null,this.containerElement=null,this.hoverTimer=null,this.isTriggerClicked=!1,this.openDelay=0,this.closeDelay=0,this.onOutsidePopoverClick=e=>{if(ot.peek()!==this)return;let r=!1;const o=e.composedPath();r=this.contains(e.target)||o.includes(this.triggerElement);const i=this.renderRoot.querySelector(".popover-backdrop"),n=i?o.includes(i):!1;(!r||n)&&this.hidePopover()},this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),this.hidePopover())},this.onPopoverFocusOut=e=>{this.contains(e.relatedTarget)||this.hidePopover()},this.startCloseDelay=()=>{if(!this.interactive)this.hidePopover();else{if(this.isTriggerClicked)return;this.hoverTimer=window.setTimeout(()=>{this.visible=!1},this.closeDelay)}},this.cancelCloseDelay=()=>{this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null)},this.showPopover=()=>{this.cancelCloseDelay(),setTimeout(()=>{this.visible=!0,ft.onShowPopover(this)},this.openDelay),ot.peek()!==this&&ot.push(this)},this.hidePopover=()=>{ot.peek()===this&&(setTimeout(()=>{this.visible=!1,ft.onHidePopover(this),this.isTriggerClicked=!1},this.closeDelay),ot.pop())},this.togglePopoverVisible=()=>{this.isTriggerClicked?this.hidePopover():(this.showPopover(),this.isTriggerClicked=!0)},this.utils=new To(this)}async firstUpdated(e){super.firstUpdated(e),this.containerElement=this.renderRoot.querySelector(".popover-container"),this.utils.setupAppendTo(),[this.openDelay,this.closeDelay]=this.utils.setupDelay(),this.setupTriggerListener(),this.utils.setupAccessibility(),ft.onCreatedPopover(this),this.visible&&(await this.positionPopover(),await this.handleCreatePopoverFirstUpdate())}async disconnectedCallback(){super.disconnectedCallback(),await this.removeEventListeners(),ft.onDestroyedPopover(this),ot.remove(this)}setupTriggerListener(){var e,r;if(this.triggerID&&(this.triggerElement=document.getElementById(this.triggerID),!!this.triggerElement)){if(this.trigger==="mouseenter"&&(this.interactive?this.trigger="mouseenter click":this.trigger="mouseenter focusin"),this.trigger.includes("click")&&this.triggerElement.addEventListener("click",this.togglePopoverVisible),this.trigger.includes("mouseenter")){const o=this.renderRoot.querySelector(".popover-hover-bridge");this.triggerElement.addEventListener("mouseenter",this.showPopover),this.triggerElement.addEventListener("mouseleave",this.startCloseDelay),(e=this.containerElement)==null||e.addEventListener("mouseenter",this.cancelCloseDelay),(r=this.containerElement)==null||r.addEventListener("mouseleave",this.startCloseDelay),o==null||o.addEventListener("mouseenter",this.cancelCloseDelay)}this.trigger.includes("focusin")&&(this.triggerElement.addEventListener("focusin",this.showPopover),this.interactive||this.triggerElement.addEventListener("focusout",this.hidePopover)),this.addEventListener("focus-trap-exit",this.hidePopover)}}removeEventListeners(){var r,o;if(!this.triggerElement)return;const e=this.renderRoot.querySelector(".popover-hover-bridge");this.triggerElement.removeEventListener("click",this.togglePopoverVisible),this.triggerElement.removeEventListener("mouseenter",this.showPopover),this.triggerElement.removeEventListener("mouseleave",this.hidePopover),(r=this.containerElement)==null||r.removeEventListener("mouseenter",this.cancelCloseDelay),(o=this.containerElement)==null||o.removeEventListener("mouseleave",this.startCloseDelay),this.triggerElement.removeEventListener("focusin",this.showPopover),this.triggerElement.removeEventListener("focusout",this.hidePopover),e==null||e.removeEventListener("mouseenter",this.cancelCloseDelay),this.removeEventListener("focus-trap-exit",this.hidePopover)}async updated(e){if(super.updated(e),e.has("visible")){const r=e.get("visible");await this.isOpenUpdated(r,this.visible)}if(e.has("placement")&&this.setAttribute("placement",Object.values(H).includes(this.placement)?this.placement:d.PLACEMENT),e.has("delay")&&([this.openDelay,this.closeDelay]=this.utils.setupDelay()),e.has("trigger")){const o=this.trigger.split(" ").filter(i=>Object.values(Te).includes(i));this.setAttribute("trigger",o.length>0?this.trigger:d.TRIGGER),this.removeEventListeners(),this.setupTriggerListener()}e.has("color")&&this.setAttribute("color",Object.values(Rt).includes(this.color)?this.color:d.COLOR),e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("append-to")&&this.utils.setupAppendTo(),(e.has("interactive")||e.has("data-aria-label")||e.has("data-aria-labelledby"))&&this.utils.setupAccessibility()}async isOpenUpdated(e,r){var o,i,n,s;if(!(e===r||!this.triggerElement))if(r){if(this.enabledFocusTrap=this.focusTrap,this.enabledPreventScroll=this.preventScroll,this.backdrop){const c=this.renderRoot.querySelector(".popover-backdrop");c.style.zIndex=`${this.zIndex-1}`,this.triggerElement.style.zIndex=`${this.zIndex}`}this.positionPopover(),await this.handleCreatePopoverFirstUpdate(),this.hideOnBlur&&((o=this.containerElement)==null||o.addEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(this.triggerElement.style.pointerEvents="none")),this.hideOnOutsideClick&&document.addEventListener("click",this.onOutsidePopoverClick),this.hideOnEscape&&document.addEventListener("keydown",this.onEscapeKeydown),this.triggerElement.setAttribute("aria-expanded","true"),this.interactive&&this.triggerElement.setAttribute("aria-haspopup",this.triggerElement.getAttribute("aria-haspopup")||"dialog")}else this.hideOnBlur&&((i=this.containerElement)==null||i.removeEventListener("focusout",this.onPopoverFocusOut),this.trigger==="click"&&(this.triggerElement.style.pointerEvents="")),this.hideOnOutsideClick&&document.removeEventListener("click",this.onOutsidePopoverClick),this.hideOnEscape&&document.removeEventListener("keydown",this.onEscapeKeydown),(n=this.deactivateFocusTrap)==null||n.call(this),this.triggerElement.removeAttribute("aria-expanded"),this.interactive&&this.triggerElement.removeAttribute("aria-haspopup"),this.focusBackToTrigger&&((s=this.triggerElement)==null||s.focus())}async handleCreatePopoverFirstUpdate(){var e,r;this.visible&&this.interactive&&((e=this.setFocusableElements)==null||e.call(this),await this.updateComplete,(r=this.setInitialFocus)==null||r.call(this))}positionPopover(){if(!this.triggerElement||!this.containerElement)return;const e=[uo()];let r=this.offset;if(this.flip&&e.push(fo()),this.size){const o=this.containerElement.querySelector('[part="popover-content"]');e.push(ho({apply({availableHeight:i}){o&&Object.assign(o.style,{maxHeight:`${i}px`})},padding:50}))}if(this.showArrow&&(this.arrowElement=this.renderRoot.querySelector(".popover-arrow"),this.arrowElement)){const o=this.arrowElement.offsetHeight;r=Math.sqrt(2*o**2)/2+this.offset,e.push(mo({element:this.arrowElement,padding:12}))}e.push(po(r)),lo(this.triggerElement,this.containerElement,async()=>{if(!this.triggerElement||!this.containerElement)return;const{x:o,y:i,middlewareData:n,placement:s}=await go(this.triggerElement,this.containerElement,{placement:this.placement,middleware:e});this.utils.updatePopoverStyle(o,i),n.arrow&&this.arrowElement&&this.utils.updateArrowStyle(n.arrow,s),this.trigger.includes("mouseenter")&&this.utils.setupHoverBridge(s)})}render(){return L`
      ${this.backdrop&&this.visible?L`<div class="popover-backdrop"></div>`:Dt}
      <mdc-modalcontainer
        class="popover-container"
        elevation="3"
        color=${this.color}
        ?data-aria-modal=${this.interactive}
        data-role="${at(this.dataRole)}"
        data-aria-label="${at(this.interactive?this.dataAriaLabel:void 0)}"
        data-aria-labelledby="${at(this.interactive?this.dataAriaLabelledby:void 0)}"
        data-aria-describedby="${at(this.interactive?this.dataAriaDescribedby:void 0)}"
        style="z-index: ${this.zIndex};"
      >
        <div class="popover-hover-bridge"></div>
        ${this.closeButton?L` <mdc-button
              class="popover-close"
              prefix-icon="cancel-bold"
              variant="tertiary"
              size="20"
              aria-label=${at(this.closeButtonAriaLabel)}
              @click="${this.hidePopover}"
            ></mdc-button>`:Dt}
        ${this.showArrow?L`<div class="popover-arrow"></div>`:Dt}
        <div part="popover-content">
          <slot></slot>
        </div>
      </mdc-modalcontainer>
    `}};Ut.styles=[...Ht.styles,...bo];let y=Ut;T([x({type:String})],y.prototype,"id");T([x({type:String})],y.prototype,"triggerID");T([x({type:String,reflect:!0})],y.prototype,"trigger");T([x({type:String,reflect:!0})],y.prototype,"placement");T([x({type:String,reflect:!0})],y.prototype,"color");T([x({type:Boolean,reflect:!0})],y.prototype,"visible");T([x({type:Number,reflect:!0})],y.prototype,"offset");T([x({type:Boolean,reflect:!0,attribute:"focus-trap"})],y.prototype,"focusTrap");T([x({type:Boolean,reflect:!0,attribute:"prevent-scroll"})],y.prototype,"preventScroll");T([x({type:Boolean,attribute:"show-arrow"})],y.prototype,"showArrow");T([x({type:Boolean,reflect:!0,attribute:"close-button"})],y.prototype,"closeButton");T([x({type:Boolean,reflect:!0})],y.prototype,"interactive");T([x({type:String,reflect:!0})],y.prototype,"delay");T([x({type:Boolean,reflect:!0,attribute:"hide-on-escape"})],y.prototype,"hideOnEscape");T([x({type:Boolean,reflect:!0,attribute:"hide-on-blur"})],y.prototype,"hideOnBlur");T([x({type:Boolean,reflect:!0,attribute:"hide-on-outside-click"})],y.prototype,"hideOnOutsideClick");T([x({type:Boolean,reflect:!0,attribute:"focus-back-to-trigger"})],y.prototype,"focusBackToTrigger");T([x({type:Boolean,reflect:!0})],y.prototype,"backdrop");T([x({type:Boolean,reflect:!0})],y.prototype,"flip");T([x({type:Boolean,reflect:!0})],y.prototype,"size");T([x({type:Number,reflect:!0,attribute:"z-index"})],y.prototype,"zIndex");T([x({type:String,reflect:!0,attribute:"append-to"})],y.prototype,"appendTo");T([x({type:String,attribute:"close-button-aria-label"})],y.prototype,"closeButtonAriaLabel");T([x({type:String,reflect:!0,attribute:"data-role"})],y.prototype,"dataRole");y.register(Eo);const Q=(t,e)=>L`
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
    data-aria-label="${t["data-aria-label"]}"
    data-aria-labelledby="${t["data-aria-labelledby"]}"
    data-aria-describedby="${t["data-aria-describedby"]}"
    data-role="${t["data-role"]}"
    @popover-on-show="${pt("onshow")}"
    @popover-on-hide="${pt("onhide")}"
    @popover-on-created="${pt("oncreated")}"
    @popover-on-destroyed="${pt("ondestroyed")}"
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
`,Lo=t=>L`
  ${tt("popover-trigger","Click me!")}
  ${Q(t,L`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,Ao=t=>L`
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
`,Do=t=>L`
  ${tt("popover-trigger-interactive-hover","Hover me!")}
  ${Q(t,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,Co=t=>L`
  ${tt("popover-trigger-hide-on-blur","Click me!")}
  ${Q(t,L`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,So=t=>L`
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
    <mdc-text>Description tooltip on mou se enter</mdc-text>
  </mdc-popover>
`,Fo=t=>L`
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
`,Po=t=>L`
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
`,tr={title:"Work In Progress/popover",tags:["autodocs"],component:"mdc-popover",render:Lo,parameters:{badges:["wip"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(H)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(Rt)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"data-aria-label":{control:"text"},"data-aria-labelledby":{control:"text"},"data-aria-describedby":{control:"text"},"data-role":{control:"text"},...Fe(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color"]),...Pe(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},ht={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"show-arrow":!0,"data-role":d.ROLE,color:d.COLOR}},mt={render:Ao,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:d.FLIP,size:!0,"data-role":d.ROLE,color:d.COLOR}},gt={render:Do,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:H.BOTTOM,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,"data-role":d.ROLE,color:d.COLOR}},vt={render:So,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"close-button":!0,"data-role":d.ROLE,color:d.COLOR}},bt={render:Fo,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":10,delay:d.DELAY,flip:d.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,"data-role":d.ROLE,color:d.COLOR}},Et={render:Co,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:H.RIGHT,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,"data-role":d.ROLE,color:d.COLOR}},yt={render:Po,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:H.TOP,offset:d.OFFSET,"z-index":d.Z_INDEX,delay:d.DELAY,flip:d.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,"data-role":d.ROLE,color:d.COLOR}};var jt,Zt,Kt;ht.parameters={...ht.parameters,docs:{...(jt=ht.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
    'data-role': DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(Kt=(Zt=ht.parameters)==null?void 0:Zt.docs)==null?void 0:Kt.source}}};var qt,Gt,Jt;mt.parameters={...mt.parameters,docs:{...(qt=mt.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
    'data-role': DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(Jt=(Gt=mt.parameters)==null?void 0:Gt.docs)==null?void 0:Jt.source}}};var Qt,te,ee;gt.parameters={...gt.parameters,docs:{...(Qt=gt.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
    'data-role': DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(ee=(te=gt.parameters)==null?void 0:te.docs)==null?void 0:ee.source}}};var oe,re,ie;vt.parameters={...vt.parameters,docs:{...(oe=vt.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
    'data-role': DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(ie=(re=vt.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ne,se,ce;bt.parameters={...bt.parameters,docs:{...(ne=bt.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
    'data-role': DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(ce=(se=bt.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ae,le,de;Et.parameters={...Et.parameters,docs:{...(ae=Et.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
    'data-role': DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(de=(le=Et.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ue,fe;yt.parameters={...yt.parameters,docs:{...(pe=yt.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
    'data-role': DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(fe=(ue=yt.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};const er=["Default","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop"];export{ht as Default,er as __namedExportsOrder,tr as default,Et as hideOnBlur,mt as interactiveContent,gt as interactiveHover,vt as interactiveMultiple,bt as nestedPopover,yt as popoverWithBackdrop};
