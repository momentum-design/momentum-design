import"./index-ClbCd_Hl.js";import{k as n}from"./lit-element-D5KKan5q.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as T,s as V}from"./commonArgTypes-BluK8w5L.js";import{t as W}from"./utils-CFOyPOhY.js";import"./provider.component-BaQC7CJH.js";import"./DisabledMixin-DcYwkKYf.js";import"./IconNameMixin-CRlZlTtq.js";import"./index-B-GnYs90.js";import"./index-riA1qVWu.js";import"./index-BPhA6fY3.js";import"./iframe-CvIwniDS.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-juPgxxWU.js";import"./button.component-CMTraJwt.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./roles-DU0xbrD4.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.utils-rNW36Ji7.js";import"./v4-CQkTLCs1.js";const R=e=>n` <mdc-inputchip
    @remove="${t("remove")}"
    label="${e.label}"
    icon-name="${e["icon-name"]}"
    ?error="${e.error}"
    ?disabled="${e.disabled}"
    clear-aria-label="${e["clear-aria-label"]}"
  ></mdc-inputchip>`,ie={title:"Components/chip/input",tags:["autodocs"],component:"mdc-inputchip",render:R,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"icon-name":{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},"clear-aria-label":{control:"text"},...T,...V,...W(["--mdc-chip-color","--mdc-chip-border-color","--mdc-chip-background-color"])}},r={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!1}},a={args:{label:"Input Chip","icon-name":"placeholder-bold","clear-aria-label":"Clear",error:!1,disabled:!1}},l={args:{label:"Input Chip","clear-aria-label":"Clear",error:!0,disabled:!1}},o={args:{label:"Input Chip","clear-aria-label":"Clear",error:!1,disabled:!0}},c={render:()=>n` <div style="display: flex; gap: 0.5rem;">
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
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const te=["Example","WithIcon","Error","Disabled","StatesAndVariants","WithRemove"];export{o as Disabled,l as Error,r as Example,c as StatesAndVariants,a as WithIcon,i as WithRemove,te as __namedExportsOrder,ie as default};
