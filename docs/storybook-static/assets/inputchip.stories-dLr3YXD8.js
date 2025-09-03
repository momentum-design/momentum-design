import"./index-D40SsQaL.js";import{k as n}from"./lit-element-D5KKan5q.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as T,s as V}from"./commonArgTypes-BluK8w5L.js";import{t as W}from"./utils-CFOyPOhY.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./DisabledMixin-B-Cnza7-.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./index-B-GnYs90.js";import"./index-D2VIkDCb.js";import"./index-J6Uj5bTz.js";import"./iframe-DvrVLc6t.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-C6YmrGgi.js";import"./button.component-DXfxhmBS.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-jROCF6tv.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-DEwGeIeI.js";import"./button.utils-rNW36Ji7.js";import"./v4-CQkTLCs1.js";const R=e=>n` <mdc-inputchip
    @remove="${t("remove")}"
    label="${e.label}"
    icon-name="${e["icon-name"]}"
    ?error="${e.error}"
    ?disabled="${e.disabled}"
    clear-aria-label="${e["clear-aria-label"]}"
  ></mdc-inputchip>`,te={title:"Components/chip/input",tags:["autodocs"],component:"mdc-inputchip",render:R,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"icon-name":{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},"clear-aria-label":{control:"text"},...T,...V,...W(["--mdc-chip-color","--mdc-chip-border-color","--mdc-chip-background-color"])}},r={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!1}},a={args:{label:"Input Chip","icon-name":"placeholder-bold","clear-aria-label":"Clear",error:!1,disabled:!1}},l={args:{label:"Input Chip","clear-aria-label":"Clear",error:!0,disabled:!1}},o={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!0}},c={render:()=>n` <div style="display: flex; gap: 0.5rem;">
      <mdc-inputchip
        label="Input"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        @click="${t("click")}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Error"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        error
        @click="${t("click")}"
      ></mdc-inputchip>
      <mdc-inputchip
        label="Disabled"
        icon-name="placeholder-bold"
        clear-aria-label="Clear"
        disabled
        @click="${t("click")}"
      ></mdc-inputchip>
    </div>`},i={render:()=>n` <mdc-inputchip
      @remove="${D=>{var p;(p=D.target)==null||p.remove()}}"
      label="Value"
      icon-name="placeholder-bold"
      clear-aria-label="Clear"
    ></mdc-inputchip>`};var s,m,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: false
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,u,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,k,$;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Input Chip',
    'clear-aria-label': 'Clear',
    error: false,
    disabled: true
  }
}`,...($=(k=o.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var I,x,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var y,S,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const ne=["Example","WithIcon","Error","Disabled","StatesAndVariants","WithRemove"];export{o as Disabled,l as Error,r as Example,c as StatesAndVariants,a as WithIcon,i as WithRemove,ne as __namedExportsOrder,te as default};
