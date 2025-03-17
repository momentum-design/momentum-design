import{u as T,n as w}from"./index-C9z9WAEj.js";import{C as h}from"./chip.component-_IIpo63b.js";import{i as I,k as C}from"./lit-element-D5KKan5q.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as L,s as M}from"./commonArgTypes-BluK8w5L.js";import{h as P}from"./utils-D1SE5bce.js";import"./index-BX3Tn-Br.js";import"./IconNameMixin-CujGSn0t.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./text.constants-ZF0jM5wn.js";import"./v4-CQkTLCs1.js";const R=I`
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
`,V=[R],j=T.constructTagName("filterchip"),u={ICON_NAME:"check-bold",COLOR:"default"};var z=Object.defineProperty,B=(r,e,m,U)=>{for(var s=void 0,n=r.length-1,b;n>=0;n--)(b=r[n])&&(s=b(e,m,s)||s);return s&&z(e,m,s),s};const p=class p extends h{constructor(){super(),this.selected=!1,this.color=u.COLOR}setSelected(e){e?(this.iconName=u.ICON_NAME,this.setAttribute("aria-pressed","true")):(this.iconName=void 0,this.setAttribute("aria-pressed","false"))}executeAction(){this.selected=!this.selected}update(e){super.update(e),e.has("selected")&&this.setSelected(this.selected)}};p.styles=[...h.styles,...V];let i=p;B([w({type:Boolean,reflect:!0})],i.prototype,"selected");i.register(j);const G=r=>C`
  <mdc-filterchip 
    @click="${t("onclick")}"
    @keydown="${t("onkeydown")}"
    @keyup="${t("onkeyup")}"
    @focus="${t("onfocus")}"
    label="${r.label}"
    ?selected="${r.selected}"
    ?disabled="${r.disabled}"
  ></mdc-filterchip>`,le={title:"Work In Progress/chip/filter",tags:["autodocs"],component:"mdc-filterchip",render:G,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},...L,...M,...P(["soft-disabled","size","role","type","active","icon-name","color"])}},l={args:{label:"Filterchip",selected:!1,disabled:!1}},a={args:{label:"Filterchip",selected:!0,disabled:!1}},c={args:{label:"Filterchip",selected:!1,disabled:!0}},d={args:{label:"Filterchip",selected:!0,disabled:!0}},o={render:()=>C`
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
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var N,O,_;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: true
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var $,D,E;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
  <div style="display: flex; gap: 0.5rem;">
    <mdc-filterchip label="Filterchip"></mdc-filterchip>
    <mdc-filterchip label="Selected" selected></mdc-filterchip>
    <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
  </div>\`
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ae=["Example","Selected","Disabled","SelectedAndDisabled","StatesAndVariants"];export{c as Disabled,l as Example,a as Selected,d as SelectedAndDisabled,o as StatesAndVariants,ae as __namedExportsOrder,le as default};
