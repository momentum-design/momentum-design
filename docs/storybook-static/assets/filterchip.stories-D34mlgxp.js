import{u as T,n as L}from"./index-C9z9WAEj.js";import{a as u}from"./chip.component-sLfxAX02.js";import{i as M,k as E}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as w,s as I}from"./commonArgTypes-BluK8w5L.js";import{h as R}from"./utils-CO8B6ZcN.js";import"./index-MA1r3zrt.js";import"./IconNameMixin-CujGSn0t.js";import"./buttonsimple.component-Djhz-GfJ.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./text.constants-ZF0jM5wn.js";import"./v4-CQkTLCs1.js";const V=M`
  :host([selected]){
    border: 2px solid;
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([selected]:active) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-normal);
  }

  :host([selected]:focus) {
    --mdc-chip-background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([disabled]), :host([disabled]:hover), :host([disabled]:active) {
    --mdc-chip-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-chip-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-chip-color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`,j=[V],z=T.constructTagName("filterchip"),h={ICON_NAME:"check-bold",COLOR:"default"};var B=Object.defineProperty,G=(t,e,m,U)=>{for(var s=void 0,n=t.length-1,b;n>=0;n--)(b=t[n])&&(s=b(e,m,s)||s);return s&&B(e,m,s),s};const p=class p extends u{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.color=h.COLOR}setSelected(e){e?(this.iconName=h.ICON_NAME,this.setAttribute("aria-pressed","true")):(this.iconName=void 0,this.setAttribute("aria-pressed","false"))}executeAction(){this.selected=!this.selected}update(e){super.update(e),e.has("selected")&&this.setSelected(this.selected)}};p.styles=[...u.styles,...j];let i=p;G([L({type:Boolean,reflect:!0})],i.prototype,"selected");i.register(z);const P=t=>E`
  <mdc-filterchip 
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
    label="${t.label}"
    ?selected="${t.selected}"
    ?disabled="${t.disabled}"
  ></mdc-filterchip>`,le={title:"Components/chip/filter",tags:["autodocs"],component:"mdc-filterchip",render:P,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},...w,...I,...R(["soft-disabled","size","role","type","active","icon-name","color"])}},l={args:{label:"Filterchip",selected:!1,disabled:!1}},a={args:{label:"Filterchip",selected:!0,disabled:!1}},c={args:{label:"Filterchip",selected:!1,disabled:!0}},d={args:{label:"Filterchip",selected:!0,disabled:!0}},o={render:()=>E`
  <div style="display: flex; gap: 0.5rem;">
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
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,x,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: true
  }
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var C,N,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: true
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,$,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
  <div style="display: flex; gap: 0.5rem;">
    <mdc-filterchip label="Filterchip"></mdc-filterchip>
    <mdc-filterchip label="Selected" selected></mdc-filterchip>
    <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
  </div>\`
}`,...(D=($=o.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const ae=["Example","Selected","Disabled","SelectedAndDisabled","StatesAndVariants"];export{c as Disabled,l as Example,a as Selected,d as SelectedAndDisabled,o as StatesAndVariants,ae as __namedExportsOrder,le as default};
