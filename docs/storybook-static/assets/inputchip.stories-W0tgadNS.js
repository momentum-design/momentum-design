import"./index-Bd9AQVQf.js";import"./index-BMrc6f7w.js";import{k as m}from"./iframe-CrnImR4G.js";import{c as F,s as w}from"./commonArgTypes-BluK8w5L.js";import{i as e}from"./imageFixtures-CD4avj2q.js";import{h as R}from"./utils-Dd_sfl9-.js";import"./DisabledMixin-BmiKlCWv.js";import"./IconNameMixin-8qu3hifq.js";import"./index-DP53CESZ.js";import"./preload-helper-C1FmrZbK.js";import"./index-BPg1OG9M.js";import"./index-DTrDRi1E.js";import"./index-DaWfXzJH.js";import"./button.component-_X1-1Cl-.js";import"./buttonsimple.component-DktXvV2-.js";import"./TabIndexMixin-BpHFDf7-.js";import"./button.utils-rNW36Ji7.js";import"./if-defined-DCu-IhVE.js";import"./index--KwZils9.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,L=r=>m` <mdc-inputchip
    @remove="${a("remove")}"
    label="${r.label}"
    icon-name="${r["icon-name"]}"
    ?error="${r.error}"
    ?disabled="${r.disabled}"
    clear-aria-label="${r["clear-aria-label"]}"
  ></mdc-inputchip>`,la={title:"Components/chip/inputchip",tags:["autodocs"],component:"mdc-inputchip",render:L,argTypes:{label:{control:"text"},"icon-name":{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},"clear-aria-label":{control:"text"},...F,...w}},l={args:{label:"Input Chip","clear-aria-label":"Clear"}},i={args:{label:"Input Chip","icon-name":"placeholder-bold","clear-aria-label":"Clear"}},c={args:{label:"Input Chip","clear-aria-label":"Clear",error:!0}},t={args:{label:"Input Chip","clear-aria-label":"Clear",disabled:!0}},o={render:()=>m` <div style="display: flex; gap: 0.5rem;">
      <mdc-inputchip
        label="Input"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        @click="${a("click")}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Error"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        error
        @click="${a("click")}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Disabled"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        disabled
        @click="${a("click")}"
      ></mdc-inputchip>
    </div>`},n={render:()=>m` <mdc-inputchip
      @remove="${W=>{var s;(s=W.target)==null||s.remove()}}"
      label="Value"
      icon-name="placeholder-bold"
      clear-aria-label="Clear"
    ></mdc-inputchip>`},p={render:()=>m` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-inputchip label="Avatar Img" clear-aria-label="Clear" @remove="${a("remove")}">
        <mdc-avatar slot="prefix" src="${e.avatar}" initials="AP"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Error Img" clear-aria-label="Clear" error @remove="${a("remove")}">
        <mdc-avatar slot="prefix" src="${e.avatar}" initials="AE"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Disabled Img" clear-aria-label="Clear" disabled @remove="${a("remove")}">
        <mdc-avatar slot="prefix" src="${e.avatar}" initials="AD"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Error Disabled Img" clear-aria-label="Clear" error disabled @remove="${a("remove")}">
        <mdc-avatar slot="prefix" src="${e.avatar}" initials="ED"></mdc-avatar>
      </mdc-inputchip>
    </div>`,...R()};var d,b,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear'
  }
}`,...(u=(b=l.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,v,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear'
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var g,$,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: true
  }
}`,...(x=($=c.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var A,I,f;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    disabled: true
  }
}`,...(f=(I=t.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var E,k,D;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; gap: 0.5rem;">
      <mdc-inputchip
        label="Input"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        @click="\${action('click')}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Error"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        error
        @click="\${action('click')}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Disabled"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        disabled
        @click="\${action('click')}"
      ></mdc-inputchip>
    </div>\`
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var y,S,_;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const removeChip = (e: Event) => {
      (e.target as HTMLElement)?.remove();
    };
    return html\` <mdc-inputchip
      @remove="\${removeChip}"
      label="Value"
      icon-name="placeholder-bold"
      clear-aria-label="Clear"
    ></mdc-inputchip>\`;
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var O,T,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <mdc-inputchip label="Avatar Img" clear-aria-label="Clear" @remove="\${action('remove')}">
        <mdc-avatar slot="prefix" src="\${imageFixtures.avatar}" initials="AP"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Error Img" clear-aria-label="Clear" error @remove="\${action('remove')}">
        <mdc-avatar slot="prefix" src="\${imageFixtures.avatar}" initials="AE"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Disabled Img" clear-aria-label="Clear" disabled @remove="\${action('remove')}">
        <mdc-avatar slot="prefix" src="\${imageFixtures.avatar}" initials="AD"></mdc-avatar>
      </mdc-inputchip>
      <mdc-inputchip label="Avatar Error Disabled Img" clear-aria-label="Clear" error disabled @remove="\${action('remove')}">
        <mdc-avatar slot="prefix" src="\${imageFixtures.avatar}" initials="ED"></mdc-avatar>
      </mdc-inputchip>
    </div>\`,
  ...hideAllControls()
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const ia=["Example","WithIcon","Error","Disabled","StatesAndVariants","WithRemove","WithAvatarVariants"];export{t as Disabled,c as Error,l as Example,o as StatesAndVariants,p as WithAvatarVariants,i as WithIcon,n as WithRemove,ia as __namedExportsOrder,la as default};
