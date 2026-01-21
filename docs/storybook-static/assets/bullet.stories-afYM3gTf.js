import{X as h,u as y,H as d,n as A,k as E}from"./iframe-CUGe0MVU.js";import{t as I}from"./if-defined-BA0pvBbp.js";import{c as S,s as f}from"./commonArgTypes-BG7EqI50.js";import{a as L}from"./utils-D6nie9pS.js";import"./index-BE6o8lGa.js";import"./index-eVpoRzV7.js";import"./preload-helper-C1FmrZbK.js";import"./ListNavigationMixin-DB9FDrtu.js";import"./KeyToActionMixin-C36uALhV.js";import"./listitem.component-Dd19pBbc.js";import"./query-assigned-elements-BRp6AyZG.js";import"./DisabledMixin-BAsAWpL6.js";import"./CaptureDestroyEventForChildElement-CbG9X_YX.js";import"./dom-BlZvhF8F.js";const v=h`
  :host {
    --mdc-bullet-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-bullet-size: 0.25rem;

    border-radius: 50%;
    display: block;
    aspect-ratio: 1;
    height: var(--mdc-bullet-size);
    background-color: var(--mdc-bullet-background-color);
  }
  :host([size='small']) {
    --mdc-bullet-size: 0.25rem;
  }
  :host([size='medium']) {
    --mdc-bullet-size: 0.5rem;
  }
  :host([size='large']) {
    --mdc-bullet-size: 1rem;
  }
`,U=[v],$=y.constructTagName("bullet"),t={SMALL:"small",MEDIUM:"medium",LARGE:"large"};var C=Object.defineProperty,D=(l,a,c,_)=>{for(var e=void 0,i=l.length-1,n;i>=0;i--)(n=l[i])&&(e=n(a,c,e)||e);return e&&C(a,c,e),e};const m=class m extends d{constructor(){super(...arguments),this.size=t.SMALL}};m.styles=[...d.styles,...U];let o=m;D([A({type:String,reflect:!0})],o.prototype,"size");o.register($);const k=l=>E` <mdc-bullet size="${I(l.size)}"></mdc-bullet>`,B={title:"Components/decorator/bullet",tags:["autodocs"],component:"mdc-bullet",render:k,argTypes:{size:{control:"select",options:Object.values(t)},...S,...f},parameters:{actions:{disable:!0}}},s={args:{size:t.SMALL}},r={render:()=>E`
    <main>
      <mdc-list aria-label="Fruit list">
        <mdc-listitem label="Apple">
          <mdc-bullet size="${t.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Banana">
          <mdc-bullet size="${t.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Cherry">
          <mdc-bullet size="${t.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
      </mdc-list>
    </main>
  `,...L()};var u,p,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL
  }
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,z,M;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <main>
      <mdc-list aria-label="Fruit list">
        <mdc-listitem label="Apple">
          <mdc-bullet size="\${SIZE.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Banana">
          <mdc-bullet size="\${SIZE.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Cherry">
          <mdc-bullet size="\${SIZE.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
      </mdc-list>
    </main>
  \`,
  ...hideAllControls()
}`,...(M=(z=r.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const J=["Example","UnorderedList"];export{s as Example,r as UnorderedList,J as __namedExportsOrder,B as default};
