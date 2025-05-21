import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-CYQYOGII.js";import{c as X,s as Y}from"./commonArgTypes-BluK8w5L.js";import{h as Z,d as ee,a as n}from"./utils-CO8B6ZcN.js";import"./index-DDCuMq7j.js";import"./index-BKk1AD_8.js";import"./index-Bsm1O7tu.js";import{P as U}from"./popover.component-DCc9qDH7.js";import"./v4-CQkTLCs1.js";import"./index-D3DhXfcW.js";import"./index-C9z9WAEj.js";import"./text.constants-ZF0jM5wn.js";import"./listitem.component-qFhQUFkA.js";import"./roles-DMFGbP5t.js";import"./v4-CmTdKEVZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./menuitem.component-D_e2cxUY.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./iframe-CDGo2ghH.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./FocusTrapMixin-SA_WaGa6.js";const m="Menu Item",r=t=>e`<div role="menu" style="width: 20rem;">${t}</div>`,te=t=>r(e`
  <mdc-menuitem
    @click="${i("onclick")}"
    @keydown="${i("onkeydown")}"
    @keyup="${i("onkeyup")}"
    @focus="${i("onfocus")}"
    ?disabled="${t.disabled}"
    label="${t.label}"
    secondary-label="${t["secondary-label"]}"
    side-header-text="${t["side-header-text"]}"
    tertiary-label="${t["tertiary-label"]}"
    subline-text="${t["subline-text"]}"
    tooltip-text="${t["tooltip-text"]}"
    tooltip-placement="${t["tooltip-placement"]}"
  ></mdc-menuitem>`),Fe={title:"Work In Progress/menu/menuitem",tags:["autodocs"],component:"mdc-menuitem",render:te,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},"secondary-label":{control:"text"},"side-header-text":{control:"text"},disabled:{control:"boolean"},"tertiary-label":{control:"text"},"subline-text":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(U)},...Z(["variant","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","default"]),...ee(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","click","keydown","keyup","focus"]),...X,...Y}},o={args:{label:m,"secondary-label":"This is a secondary Label","side-header-text":"","tertiary-label":"","subline-text":"",disabled:!1,"tooltip-text":"","tooltip-placement":U.TOP}},l={render:()=>r(e`
    <mdc-menuitem label="New" secondary-label="Create a new file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Open File" secondary-label="Open an existing file"></mdc-menuitem>
    <mdc-menuitem label="Close File" secondary-label="Close the current file"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Save" secondary-label="Save the current file"></mdc-menuitem>
    <mdc-menuitem label="Save As" secondary-label="Save the current file with a new name"></mdc-menuitem>
    <mdc-divider></mdc-divider>
    <mdc-menuitem label="Share" secondary-label="Share the current file"></mdc-menuitem>
  `),...n()},a={render:()=>r(e`
    <mdc-menuitem label="${m}">
      <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  `),...n()},d={render:()=>r(e`
    <mdc-menuitem label="${m}">
      <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  `),...n()},c={render:()=>r(e`
    <mdc-menuitem label="${m}">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-menuitem>
  `),...n()},s={render:()=>r(e`
    <mdc-menuitem label="${m}">
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    </mdc-menuitem>
  `),...n()},u={render:()=>r(e`
    <mdc-menuitem label="${m}">
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    </mdc-menuitem>
  `),...n()},p={render:()=>r(e`
    <mdc-menuitem label="${m}" side-header-text="##"></mdc-menuitem>
  `),...n()},b={render:()=>r(e`
    <mdc-menuitem label="${m}">
      <mdc-icon length-unit="rem" slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
    </mdc-menuitem>
  `),...n()},h={render:()=>r(e`
    <mdc-menuitem label="${m}">
      <mdc-icon length-unit="rem" slot="leading-controls" name="arrow-left-bold"></mdc-icon>
    </mdc-menuitem>
  `),...n()},g={render:()=>e`
    <div role="menu" style="width: 20rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" tooltip-text="This is the tooltip text." tooltip-placement="bottom">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    </div>
  `,...n()};var y,v,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,f,W;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(W=(f=l.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};var $,I,S;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,M,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var T,k,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var D,L,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(P=(L=s.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var E,B,F;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var N,_,H;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}" side-header-text="##"></mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var R,V,j;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var q,z,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="leading-controls" name="arrow-left-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div role="menu" style="width: 20rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" tooltip-text="This is the tooltip text." tooltip-placement="bottom">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    </div>
  \`,
  ...hideAllControls()
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ne=["Example","ListOfMenuItems","MenuItemWithLeadingIcon","MenuItemWithTrailingIcon","MenuItemWithBadge","MenuItemWithBadgeIcon","MenuItemWithBadgeCounter","MenuItemWithSideText","MenuItemWithTrailingArrow","MenuItemWithLeadingArrow","MenuItemWithTooltip"];export{o as Example,l as ListOfMenuItems,c as MenuItemWithBadge,u as MenuItemWithBadgeCounter,s as MenuItemWithBadgeIcon,h as MenuItemWithLeadingArrow,a as MenuItemWithLeadingIcon,p as MenuItemWithSideText,g as MenuItemWithTooltip,b as MenuItemWithTrailingArrow,d as MenuItemWithTrailingIcon,Ne as __namedExportsOrder,Fe as default};
