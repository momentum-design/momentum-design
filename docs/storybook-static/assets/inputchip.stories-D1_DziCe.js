import"./index-CsZHb2rj.js";import{k as t}from"./iframe-5RFEiZ85.js";import{c as T,s as A}from"./commonArgTypes-BluK8w5L.js";import{t as D}from"./utils-CFOyPOhY.js";import"./DisabledMixin-BzeozoI6.js";import"./IconNameMixin-Cyclroqq.js";import"./index-BldB1hzz.js";import"./index-DmZ0oACR.js";import"./index-BAamgs9z.js";import"./preload-helper-C1FmrZbK.js";import"./index-DHmKhpvb.js";import"./index-DTrDRi1E.js";import"./index-vXoKIu_l.js";import"./button.component-CpNqFzrf.js";import"./button.constants-mviOTe3v.js";import"./buttonsimple.constants-DnKeL5S2.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-OOqBkiLH.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-If-29Q9p.js";import"./button.utils-rNW36Ji7.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,V=e=>t` <mdc-inputchip
    @remove="${n("remove")}"
    label="${e.label}"
    icon-name="${e["icon-name"]}"
    ?error="${e.error}"
    ?disabled="${e.disabled}"
    clear-aria-label="${e["clear-aria-label"]}"
  ></mdc-inputchip>`,ee={title:"Components/chip/input",tags:["autodocs"],component:"mdc-inputchip",render:V,argTypes:{label:{control:"text"},"icon-name":{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},"clear-aria-label":{control:"text"},...T,...A,...D(["--mdc-chip-color","--mdc-chip-border-color","--mdc-chip-background-color"])}},r={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!1}},a={args:{label:"Input Chip","icon-name":"placeholder-bold","clear-aria-label":"Clear",error:!1,disabled:!1}},l={args:{label:"Input Chip","clear-aria-label":"Clear",error:!0,disabled:!1}},c={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!0}},o={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      <mdc-inputchip
        label="Input"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        @click="${n("click")}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Error"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        error
        @click="${n("click")}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Disabled"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        disabled
        @click="${n("click")}"
      ></mdc-inputchip>
    </div>`},i={render:()=>t` <mdc-inputchip
      @remove="${O=>{var p;(p=O.target)==null||p.remove()}}"
      label="Value"
      icon-name="placeholder-bold"
      clear-aria-label="Clear"
    ></mdc-inputchip>`};var s,d,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var b,u,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'icon-name': 'placeholder-bold',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var C,g,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: true,
    disabled: false
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,k,$;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: true
  }
}`,...($=(k=c.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var I,x,E;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var S,y,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(y=i.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const re=["Example","WithIcon","Error","Disabled","StatesAndVariants","WithRemove"];export{c as Disabled,l as Error,r as Example,o as StatesAndVariants,a as WithIcon,i as WithRemove,re as __namedExportsOrder,ee as default};
