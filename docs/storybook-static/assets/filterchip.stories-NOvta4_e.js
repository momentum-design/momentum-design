import{S as $,u as L,n as M,k as T}from"./iframe-PAxJhFDH.js";import{C as u}from"./chip.component-CR-AGJnB.js";import"./index-AlUfwEUP.js";import{c as I,s as R}from"./commonArgTypes-BluK8w5L.js";import{a as w}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./IconNameMixin-PaOVIFCy.js";import"./buttonsimple.component-KTxWGHiY.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BZQXf7FT.js";import"./TabIndexMixin-BM_duI-h.js";import"./staticchip.component-DcDow-1Y.js";import"./index-B_X5E31I.js";import"./index-DTrDRi1E.js";const B=$`
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
`,U=[B],V=L.constructTagName("filterchip"),h={ICON_NAME:"check-bold",COLOR:"default"};var j=Object.defineProperty,z=(t,e,m,K)=>{for(var s=void 0,n=t.length-1,b;n>=0;n--)(b=t[n])&&(s=b(e,m,s)||s);return s&&j(e,m,s),s};const p=class p extends u{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.color=h.COLOR}setSelected(e){e?(this.iconName=h.ICON_NAME,this.setAttribute("aria-pressed","true")):(this.iconName=void 0,this.setAttribute("aria-pressed","false"))}executeAction(){this.selected=!this.selected}update(e){super.update(e),e.has("selected")&&this.setSelected(this.selected)}};p.styles=[...u.styles,...U];let i=p;z([M({type:Boolean,reflect:!0})],i.prototype,"selected");i.register(V);const{action:r}=__STORYBOOK_MODULE_ACTIONS__,G=t=>T` <mdc-filterchip
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
    label="${t.label}"
    ?selected="${t.selected}"
    ?disabled="${t.disabled}"
  ></mdc-filterchip>`,ce={title:"Components/chip/filter",tags:["autodocs"],component:"mdc-filterchip",render:G,argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},...I,...R,...w(["soft-disabled","size","role","type","active","icon-name","color"])}},l={args:{label:"Filterchip",selected:!1,disabled:!1}},c={args:{label:"Filterchip",selected:!0,disabled:!1}},a={args:{label:"Filterchip",selected:!1,disabled:!0}},d={args:{label:"Filterchip",selected:!0,disabled:!0}},o={render:()=>T` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>`};var f,g,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: false
  }
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,k,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: false
  }
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,_,O;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: true
  }
}`,...(O=(_=a.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var x,C,F;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: true
  }
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var N,D,E;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>\`
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ae=["Example","Selected","Disabled","SelectedAndDisabled","StatesAndVariants"];export{a as Disabled,l as Example,c as Selected,d as SelectedAndDisabled,o as StatesAndVariants,ae as __namedExportsOrder,ce as default};
