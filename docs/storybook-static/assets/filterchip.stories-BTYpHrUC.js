import{n as T}from"./property-Bj3TGwkg.js";import{C as u}from"./chip.component-MKdh0FnE.js";import{i as L,k as E}from"./lit-element-D5KKan5q.js";import{u as M}from"./provider.component-DrWB4byV.js";import"./index-D2VIkDCb.js";import"./index-CNsEVMWn.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as w,s as I}from"./commonArgTypes-BluK8w5L.js";import{a as R}from"./utils-CFOyPOhY.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./buttonsimple.component-1GEifFmP.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./index-CqVtAZCJ.js";import"./staticchip.component-B6T76d3x.js";import"./iframe-JKLF7Uto.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const V=L`
  :host([selected]) {
    border: 2px solid;
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([selected]:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);
  }

  :host([selected]:focus) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`,j=[V],z=M.constructTagName("filterchip"),h={ICON_NAME:"check-bold",COLOR:"default"};var B=Object.defineProperty,G=(t,e,n,U)=>{for(var r=void 0,p=t.length-1,b;p>=0;p--)(b=t[p])&&(r=b(e,n,r)||r);return r&&B(e,n,r),r};const m=class m extends u{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.color=h.COLOR}setSelected(e){e?(this.iconName=h.ICON_NAME,this.setAttribute("aria-pressed","true")):(this.iconName=void 0,this.setAttribute("aria-pressed","false"))}executeAction(){this.selected=!this.selected}update(e){super.update(e),e.has("selected")&&this.setSelected(this.selected)}};m.styles=[...u.styles,...j];let d=m;G([T({type:Boolean,reflect:!0})],d.prototype,"selected");d.register(z);const P=t=>E` <mdc-filterchip
    @click="${s("onclick")}"
    @keydown="${s("onkeydown")}"
    @keyup="${s("onkeyup")}"
    @focus="${s("onfocus")}"
    label="${t.label}"
    ?selected="${t.selected}"
    ?disabled="${t.disabled}"
  ></mdc-filterchip>`,fe={title:"Components/chip/filter",tags:["autodocs"],component:"mdc-filterchip",render:P,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},...w,...I,...R(["soft-disabled","size","role","type","active","icon-name","color"])}},l={args:{label:"Filterchip",selected:!1,disabled:!1}},a={args:{label:"Filterchip",selected:!0,disabled:!1}},c={args:{label:"Filterchip",selected:!1,disabled:!0}},o={args:{label:"Filterchip",selected:!0,disabled:!0}},i={render:()=>E` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>`};var f,g,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: false
  }
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,k,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: false
  }
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,x,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: true
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var F,N,O;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: true
  }
}`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,$,D;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>\`
}`,...(D=($=i.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const ge=["Example","Selected","Disabled","SelectedAndDisabled","StatesAndVariants"];export{c as Disabled,l as Example,a as Selected,o as SelectedAndDisabled,i as StatesAndVariants,ge as __namedExportsOrder,fe as default};
