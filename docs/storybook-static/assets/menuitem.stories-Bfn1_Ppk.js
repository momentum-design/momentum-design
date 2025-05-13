import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-D3DhXfcW.js";import"./listitem.component-CoWrg7da.js";import{M as X}from"./menuitem.component-B_I0twuD.js";import{u as Y}from"./index-C9z9WAEj.js";import{c as Z,s as ee}from"./commonArgTypes-BluK8w5L.js";import{h as te,d as ne,a as n}from"./utils-CO8B6ZcN.js";import"./index-DgZ6Nty1.js";import"./index-BKk1AD_8.js";import"./index-CNShk9YU.js";import{P as U}from"./popover.component-Dx75vo8o.js";import"./v4-CQkTLCs1.js";import"./text.constants-ZF0jM5wn.js";import"./roles-DCpIf2k8.js";import"./v4-CmTdKEVZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CujGSn0t.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./iframe-D_7QXMK9.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./FocusTrapMixin-SA_WaGa6.js";const re=Y.constructTagName("menuitem");X.register(re);const m="Menu Item",r=t=>e`<div role="menu" style="width: 20rem;">${t}</div>`,me=t=>r(e`
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
  ></mdc-menuitem>`),Fe={title:"Work In Progress/menu/menuitem",tags:["autodocs"],component:"mdc-menuitem",render:me,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},"secondary-label":{control:"text"},"side-header-text":{control:"text"},disabled:{control:"boolean"},"tertiary-label":{control:"text"},"subline-text":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(U)},...te(["variant","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","default"]),...ne(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","click","keydown","keyup","focus"]),...Z,...ee}},o={args:{label:m,"secondary-label":"This is a secondary Label","side-header-text":"","tertiary-label":"","subline-text":"",disabled:!1,"tooltip-text":"","tooltip-placement":U.TOP}},l={render:()=>r(e`
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
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,f,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var W,$,M;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(M=($=a.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var S,A,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var T,k,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var D,E,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,B,N;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(N=(B=u.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var _,F,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}" side-header-text="##"></mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var R,V,j;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var G,q,z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-menuitem label="\${label}">
      <mdc-icon length-unit="rem" slot="leading-controls" name="arrow-left-bold"></mdc-icon>
    </mdc-menuitem>
  \`),
  ...hideAllControls()
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div role="menu" style="width: 20rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" tooltip-text="This is the tooltip text." tooltip-placement="bottom">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    </div>
  \`,
  ...hideAllControls()
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const He=["Example","ListOfMenuItems","MenuItemWithLeadingIcon","MenuItemWithTrailingIcon","MenuItemWithBadge","MenuItemWithBadgeIcon","MenuItemWithBadgeCounter","MenuItemWithSideText","MenuItemWithTrailingArrow","MenuItemWithLeadingArrow","MenuItemWithTooltip"];export{o as Example,l as ListOfMenuItems,c as MenuItemWithBadge,u as MenuItemWithBadgeCounter,s as MenuItemWithBadgeIcon,h as MenuItemWithLeadingArrow,a as MenuItemWithLeadingIcon,p as MenuItemWithSideText,g as MenuItemWithTooltip,b as MenuItemWithTrailingArrow,d as MenuItemWithTrailingIcon,He as __namedExportsOrder,Fe as default};
