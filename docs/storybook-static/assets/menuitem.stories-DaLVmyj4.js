import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-D3DhXfcW.js";import{a as x,L as ee}from"./listitem.component-DCWpekq1.js";import{R as te}from"./roles-DCpIf2k8.js";import{u as re}from"./index-C9z9WAEj.js";import{c as ne,s as me}from"./commonArgTypes-BluK8w5L.js";import{h as oe,d as le,a as r}from"./utils-CO8B6ZcN.js";import"./index-DX4AyC2W.js";import"./index-BKk1AD_8.js";import"./index-D_U1O2ot.js";import{P as Z}from"./popover.component-B7gte4U1.js";import"./v4-CQkTLCs1.js";import"./text.constants-ZF0jM5wn.js";import"./v4-CmTdKEVZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./iframe-B46Nvhm3.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const v=class v extends x{connectedCallback(){super.connectedCallback(),this.role=te.MENUITEM,this.variant=ee.INSET_RECTANGLE}};v.styles=[...x.styles];let y=v;const ie=re.constructTagName("menuitem");y.register(ie);const m="Menu Item",n=t=>e`<div role="menu" style="width: 20rem;">${t}</div>`,ae=t=>n(e`
  <mdc-menuitem
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
    ?disabled="${t.disabled}"
    label="${t.label}"
    secondary-label="${t["secondary-label"]}"
    side-header-text="${t["side-header-text"]}"
    tertiary-label="${t["tertiary-label"]}"
    subline-text="${t["subline-text"]}"
    tooltip-text="${t["tooltip-text"]}"
    tooltip-placement="${t["tooltip-placement"]}"
  ></mdc-menuitem>`),Ve={title:"Work In Progress/menu/menuitem",tags:["autodocs"],component:"mdc-menuitem",render:ae,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},"secondary-label":{control:"text"},"side-header-text":{control:"text"},disabled:{control:"boolean"},"tertiary-label":{control:"text"},"subline-text":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(Z)},...oe(["variant","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","default"]),...le(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","click","keydown","keyup","focus"]),...ne,...me}},l={args:{label:m,"secondary-label":"This is a secondary Label","side-header-text":"","tertiary-label":"","subline-text":"",disabled:!1,"tooltip-text":"","tooltip-placement":Z.TOP}},i={render:()=>n(e`
    <mdc-menuitem label="New" secondary-label="Create a new file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Open File" secondary-label="Open an existing file"></mdc-menuitem>
    <mdc-menuitem label="Close File" secondary-label="Close the current file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Save" secondary-label="Save the current file"></mdc-menuitem>
    <mdc-menuitem label="Save As" secondary-label="Save the current file with a new name"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Share" secondary-label="Share the current file"></mdc-menuitem>
  `),...r()},a={render:()=>n(e`
    <mdc-menuitem label="${m}">
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()},c={render:()=>n(e`
    <mdc-menuitem label="${m}">
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()},d={render:()=>n(e`
    <mdc-menuitem label="${m}">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-menuitem>
  `),...r()},s={render:()=>n(e`
    <mdc-menuitem label="${m}">
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    </mdc-menuitem>
  `),...r()},u={render:()=>n(e`
    <mdc-menuitem label="${m}">
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    </mdc-menuitem>
  `),...r()},p={render:()=>n(e`
    <mdc-menuitem label="${m}" side-header-text="##"></mdc-menuitem>
  `),...r()},b={render:()=>n(e`
    <mdc-menuitem label="${m}">
      <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()},h={render:()=>n(e`
    <mdc-menuitem label="${m}">
      <mdc-icon slot="leading-controls" name="arrow-left-bold"></mdc-icon>
    </mdc-menuitem>
  `),...r()},g={render:()=>e`
    <div role="menu" style="width: 20rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" tooltip-text="This is the tooltip text." tooltip-placement="bottom">
        <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    </div>
  `,...r()};var w,f,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label,
    'secondary-label': 'This is a secondary Label',
    'side-header-text': '',
    'tertiary-label': '',
    'subline-text': '',
    disabled: false,
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP
  }
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var W,$,S;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(S=($=i.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var T,A,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(C=(A=a.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var M,k,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var L,O,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(D=(O=d.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var N,P,B;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(B=(P=s.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var R,_,F;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(F=(_=u.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var V,G,H;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}" side-header-text="##"></mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var j,U,q;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(q=(U=b.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var z,J,K;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon slot="leading-controls" name="arrow-left-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => html\`
    <div role="menu" style="width: 20rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" tooltip-text="This is the tooltip text." tooltip-placement="bottom">
        <mdc-icon slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    </div>
  \`,
  ...hideAllControls()
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ge=["Example","ListOfMenuItems","MenuItemWithLeadingIcon","MenuItemWithTrailingIcon","MenuItemWithBadge","MenuItemWithBadgeIcon","MenuItemWithBadgeCounter","MenuItemWithSideText","MenuItemWithTrailingArrow","MenuItemWithLeadingArrow","MenuItemWithTooltip"];export{l as Example,i as ListOfMenuItems,d as MenuItemWithBadge,u as MenuItemWithBadgeCounter,s as MenuItemWithBadgeIcon,h as MenuItemWithLeadingArrow,a as MenuItemWithLeadingIcon,p as MenuItemWithSideText,g as MenuItemWithTooltip,b as MenuItemWithTrailingArrow,c as MenuItemWithTrailingIcon,Ge as __namedExportsOrder,Ve as default};
