import{R as W,k as y}from"./lit-element-CHllvULs.js";import{e as H,i as J,t as Q}from"./directive-Ctav8iJK.js";import{u as Y,c as v,a as g,p as x,d as q}from"./directive-helpers-5SvKRCBg.js";import{A as T,D as B}from"./index-DBvNrUbO.js";import{t as f}from"./if-defined-C4tJgJ33.js";import{T as G}from"./index-CuV6gmVf.js";import{d as E}from"./utils-C8za8dl6.js";import{c as K,s as N}from"./commonArgTypes-BluK8w5L.js";import"./state-CWckTc1X.js";import"./index-HW6KrQZO.js";import"./index-CcvxQn6k.js";import"./text.constants-DJu2q-6E.js";import"./index-DsezohW9.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./index-DcQ7scWP.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=(e,c,d)=>{const u=new Map;for(let s=c;s<=d;s++)u.set(e[s],s);return u},U=H(class extends J{constructor(e){if(super(e),e.type!==Q.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,c,d){let u;d===void 0?d=c:c!==void 0&&(u=c);const s=[],o=[];let a=0;for(const l of e)s[a]=u?u(l,a):a,o[a]=d(l,a),a++;return{values:o,keys:s}}render(e,c,d){return this.dt(e,c,d).values}update(e,[c,d,u]){const s=Y(e),{values:o,keys:a}=this.dt(c,d,u);if(!Array.isArray(s))return this.ut=a,o;const l=this.ut??(this.ut=[]),p=[];let h,j,t=0,i=s.length-1,r=0,n=o.length-1;for(;t<=i&&r<=n;)if(s[t]===null)t++;else if(s[i]===null)i--;else if(l[t]===a[r])p[r]=v(s[t],o[r]),t++,r++;else if(l[i]===a[n])p[n]=v(s[i],o[n]),i--,n--;else if(l[t]===a[n])p[n]=v(s[t],o[n]),g(e,p[n+1],s[t]),t++,n--;else if(l[i]===a[r])p[r]=v(s[i],o[r]),g(e,s[t],s[i]),i--,r++;else if(h===void 0&&(h=D(a,r,n),j=D(l,t,i)),h.has(l[t]))if(h.has(l[i])){const m=j.get(a[r]),S=m!==void 0?s[m]:null;if(S===null){const k=g(e,s[t]);v(k,o[r]),p[r]=k}else p[r]=v(S,o[r]),g(e,s[t],S),s[m]=null;r++}else x(s[i]),i--;else x(s[t]),t++;for(;r<=n;){const m=g(e,p[n+1]);v(m,o[r]),p[r++]=m}for(;t<=i;){const m=s[t++];m!==null&&x(m)}return this.ut=a,q(e,p),W}}),X=e=>y`
  <mdc-avatar
    counter="${f(e.counter)}"
    icon-name="${f(e["icon-name"])}"
    initials="${f(e.initials)}"
    presence="${f(e.presence)}"
    size="${f(e.size)}"
    src="${f(e.src)}"
    ?is-typing="${e["is-typing"]}"
  ></mdc-avatar>
`,ye={title:"Components/avatar",tags:["autodocs"],component:"mdc-avatar",render:X,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:Object.values(G)},size:{control:"select",options:Object.values(T)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},...E(["--mdc-avatar-default-background-color","--mdc-avatar-default-foreground-color","--mdc-avatar-loading-indicator-background-color","--mdc-avatar-loading-indicator-foreground-color","--mdc-avatar-loading-overlay-background-color"]),...K,...N}},z={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:88,"icon-name":"","is-typing":""}},$={args:{size:B.SIZE}},b={render:()=>y`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
    ${U(Object.values(T),e=>y`
        <mdc-avatar size="${e}"></mdc-avatar>
      `)}
    </div>
  `,argTypes:{...E(["counter","icon-name","initials","presence","size","src","is-typing"])}},A={render:e=>y`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${U(Object.values(T),c=>y`
        <mdc-avatar
          src="${f(e.src)}"
          presence="${f(e.presence)}"
          ?is-typing="${e["is-typing"]}"
          size="${c}"
        ></mdc-avatar>
      `)}
    </div>
  `,argTypes:{...E(["counter","icon-name","initials","size"])},args:{src:"https://picsum.photos/id/63/256",presence:"active","is-typing":!1}};var O,I,C;z.parameters={...z.parameters,docs:{...(O=z.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': ''
  }
}`,...(C=(I=z.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var Z,_,F;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  }
}`,...(F=(_=$.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var R,L,M;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
    \${repeat(Object.values(AVATAR_SIZE), size => html\`
        <mdc-avatar size="\${size}"></mdc-avatar>
      \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'presence', 'size', 'src', 'is-typing'])
  }
}`,...(M=(L=b.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,V,w;A.parameters={...A.parameters,docs:{...(P=A.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(AVATAR_SIZE), size => html\`
        <mdc-avatar
          src="\${ifDefined(args.src)}"
          presence="\${ifDefined(args.presence)}"
          ?is-typing="\${args['is-typing']}"
          size="\${size}"
        ></mdc-avatar>
      \`)}
    </div>
  \`,
  argTypes: {
    ...disableControls(['counter', 'icon-name', 'initials', 'size'])
  },
  args: {
    src: 'https://picsum.photos/id/63/256',
    presence: 'active',
    'is-typing': false
  }
}`,...(w=(V=A.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const he=["Example","Fallback","Size","SizeWithPresence"];export{z as Example,$ as Fallback,b as Size,A as SizeWithPresence,he as __namedExportsOrder,ye as default};
