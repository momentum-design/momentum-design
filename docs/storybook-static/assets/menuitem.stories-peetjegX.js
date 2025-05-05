import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-D3DhXfcW.js";import{a as v,L as Q}from"./listitem.component-BQHoDai9.js";import{u as U}from"./index-C9z9WAEj.js";import{c as X,s as Y}from"./commonArgTypes-BluK8w5L.js";import{h as Z,d as ee,a as r}from"./utils-CO8B6ZcN.js";import"./index-DZYrq_RC.js";import"./index-BKk1AD_8.js";import"./index-CfZ8Vjo0.js";import"./v4-CQkTLCs1.js";import"./text.constants-ZF0jM5wn.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./iframe-D6gMwof8.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const y=class y extends v{connectedCallback(){super.connectedCallback(),this.role="menuitem",this.variant=Q.INSET_RECTANGLE}};y.styles=[...v.styles];let g=y;const te=U.constructTagName("menuitem");g.register(te);const n="Menu Item",t=m=>e`<div role="menu" style="width: 20rem;">${m}</div>`,re=m=>t(e`
  <mdc-menuitem
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    ?disabled="${m.disabled}"
    label="${m.label}"
    secondary-label="${m["secondary-label"]}"
    side-header-text="${m["side-header-text"]}"
    tertiary-label="${m["tertiary-label"]}"
    subline-text="${m["subline-text"]}"
  ></mdc-menuitem>`),De={title:"Work In Progress/menu/menuitem",tags:["autodocs"],component:"mdc-menuitem",render:re,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},"secondary-label":{control:"text"},"side-header-text":{control:"text"},disabled:{control:"boolean"},"tertiary-label":{control:"text"},"subline-text":{control:"text"},...Z(["variant","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","default"]),...ee(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","click","keydown","keyup","focus"]),...X,...Y}},i={args:{label:n,"secondary-label":"This is a secondary Label","side-header-text":"","tertiary-label":"","subline-text":"",disabled:!1}},l={render:()=>t(e`
    <mdc-menuitem label="New" secondary-label="Create a new file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Open File" secondary-label="Open an existing file"></mdc-menuitem>
    <mdc-menuitem label="Close File" secondary-label="Close the current file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Save" secondary-label="Save the current file"></mdc-menuitem>
    <mdc-menuitem label="Save As" secondary-label="Save the current file with a new name"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Share" secondary-label="Share the current file"></mdc-menuitem>
  `),...r()},o={render:()=>t(e`
    <mdc-menuitem label="${n}">
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()},d={render:()=>t(e`
    <mdc-menuitem label="${n}">
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()},c={render:()=>t(e`
    <mdc-menuitem label="${n}">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-menuitem>
  `),...r()},s={render:()=>t(e`
    <mdc-menuitem label="${n}">
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    </mdc-menuitem>
  `),...r()},u={render:()=>t(e`
    <mdc-menuitem label="${n}">
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    </mdc-menuitem>
  `),...r()},p={render:()=>t(e`
    <mdc-menuitem label="${n}" side-header-text="##"></mdc-menuitem>
  `),...r()},b={render:()=>t(e`
    <mdc-menuitem label="${n}">
      <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()},h={render:()=>t(e`
    <mdc-menuitem label="${n}">
      <mdc-icon slot="leading-controls" name="arrow-left-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()};var w,x,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label,
    'secondary-label': 'This is a secondary Label',
    'side-header-text': '',
    'tertiary-label': '',
    'subline-text': '',
    disabled: false
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,S,W;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="New" secondary-label="Create a new file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Open File" secondary-label="Open an existing file"></mdc-menuitem>
    <mdc-menuitem label="Close File" secondary-label="Close the current file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Save" secondary-label="Save the current file"></mdc-menuitem>
    <mdc-menuitem label="Save As" secondary-label="Save the current file with a new name"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Share" secondary-label="Share the current file"></mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(W=(S=l.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var $,A,C;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var M,T,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var L,D,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,O,B;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var F,_,G;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var R,P,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}" side-header-text="##"></mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var j,q,z;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(z=(q=b.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var H,J,K;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="leading-controls" name="arrow-left-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ee=["Example","ListOfMenuItems","MenuItemWithLeadingIcon","MenuItemWithTrailingIcon","MenuItemWithBadge","MenuItemWithBadgeIcon","MenuItemWithBadgeCounter","MenuItemWithSideText","MenuItemWithTrailingArrow","MenuItemWithLeadingArrow"];export{i as Example,l as ListOfMenuItems,c as MenuItemWithBadge,u as MenuItemWithBadgeCounter,s as MenuItemWithBadgeIcon,h as MenuItemWithLeadingArrow,o as MenuItemWithLeadingIcon,p as MenuItemWithSideText,b as MenuItemWithTrailingArrow,d as MenuItemWithTrailingIcon,Ee as __namedExportsOrder,De as default};
