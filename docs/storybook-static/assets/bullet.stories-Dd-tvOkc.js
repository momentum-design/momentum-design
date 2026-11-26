import{u as e,k as c,t as d}from"./iframe-BKosmI65.js";import{s as u,c as p}from"./commonArgTypes-BG7EqI50.js";import{h as b}from"./utils-DrEByy2n.js";import"./preload-helper-C1FmrZbK.js";const g=n=>c` <mdc-bullet size="${d(n.size)}"></mdc-bullet>`,S={title:"Components/decorator/bullet",tags:["autodocs"],component:"mdc-bullet",render:g,argTypes:{size:{control:"select",options:Object.values(e)},...p,...u},parameters:{actions:{disable:!0}}},l={args:{size:e.SMALL}},t={render:()=>c`
    <main>
      <mdc-list aria-label="Fruit list">
        <mdc-listitem label="Apple">
          <mdc-bullet size="${e.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Banana">
          <mdc-bullet size="${e.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
        <mdc-listitem label="Cherry">
          <mdc-bullet size="${e.MEDIUM}" slot="leading-controls"></mdc-bullet>
        </mdc-listitem>
      </mdc-list>
    </main>
  `,...b()};var s,r,i;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL
  }
}`,...(i=(r=l.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,m,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(m=t.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const A=["Example","UnorderedList"];export{l as Example,t as UnorderedList,A as __namedExportsOrder,S as default};
