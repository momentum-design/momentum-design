import{k as e}from"./iframe-Dqi1znBL.js";import"./index-CmhvGHT3.js";import{c as Q,s as V}from"./commonArgTypes-BluK8w5L.js";import{a as X,d as Z,h as r}from"./utils-Dd_sfl9-.js";import"./index-8HHGytQs.js";import"./index-B1nOY4fG.js";import"./index-BWSZCGHI.js";import{A as ee,a as te}from"./menuitem.component-Dxg5lcP0.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-DBaEJSn3.js";import"./IconNameMixin-B3pAQP38.js";import"./badge.constants-VZXKZ_rI.js";import"./index-DGYPCJg1.js";import"./index-DTrDRi1E.js";import"./popover.component-bUfFPcWv.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-RE41TDyT.js";import"./v4-CmTdKEVZ.js";import"./listitem.component-BVAw3VRV.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BBBcOPXh.js";import"./TabIndexMixin-ZLzuhBZK.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m="Menu Item",n=t=>e`<div role="menu" style="width: 20rem;">${t}</div>`,re=t=>n(e` <mdc-menuitem
      @click="${i("onclick")}"
      @keydown="${i("onkeydown")}"
      @keyup="${i("onkeyup")}"
      @focus="${i("onfocus")}"
      @created="${i("oncreated")}"
      @destroyed="${i("ondestroyed")}"
      arrow-position="${t["arrow-position"]}"
      arrow-direction="${t["arrow-direction"]}"
      ?disabled="${t.disabled}"
      ?soft-disabled="${t["soft-disabled"]}"
      label="${t.label}"
      secondary-label="${t["secondary-label"]}"
      side-header-text="${t["side-header-text"]}"
      tertiary-label="${t["tertiary-label"]}"
      subline-text="${t["subline-text"]}"
    ></mdc-menuitem>`),Ce={title:"Components/menupopover/menuitem",tags:["autodocs"],component:"mdc-menuitem",render:re,argTypes:{label:{control:"text"},"secondary-label":{control:"text"},"side-header-text":{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"tertiary-label":{control:"text"},"subline-text":{control:"text"},"arrow-position":{control:"select",options:Object.values(ee)},"arrow-direction":{control:"select",options:Object.values(te)},...X(["variant","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","default"]),...Z(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","click","keydown","keyup","focus"]),...Q,...V}},o={args:{label:m,"secondary-label":"This is a secondary Label","side-header-text":"","tertiary-label":"","subline-text":"",disabled:!1}},l={render:()=>n(e`
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
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    `),...r()},d={render:()=>n(e`
      <mdc-menuitem label="${m}">
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    `),...r()},c={render:()=>n(e`
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
    `),...r()},p={render:()=>n(e` <mdc-menuitem label="${m}" side-header-text="##"></mdc-menuitem> `),...r()},b={render:()=>n(e` <mdc-menuitem label="${m}" arrow-position="trailing"></mdc-menuitem> `),...r()},h={render:()=>n(e` <mdc-menuitem label="${m}" arrow-position="leading"></mdc-menuitem> `),...r()},g={render:()=>e`
    <div role="menu" style="width: 15rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" id="menuitem-1">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
      <mdc-tooltip triggerID="menuitem-1" show-arrow>This is the tooltip text.</mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the menuitem from their end</mdc-text>
    </div>
  `,...r()};var y,v,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label,
    'secondary-label': 'This is a secondary Label',
    'side-header-text': '',
    'tertiary-label': '',
    'subline-text': '',
    disabled: false
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,I,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(I=l.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var $,S,W;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(W=(S=a.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var C,A,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var T,O,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var D,_,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(L=(_=s.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var B,N,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,F,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" side-header-text="##"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(j=(F=p.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var H,K,P;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="trailing"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(P=(K=b.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var U,Y,q;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="leading"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var z,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div role="menu" style="width: 15rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" id="menuitem-1">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
      <mdc-tooltip triggerID="menuitem-1" show-arrow>This is the tooltip text.</mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the menuitem from their end</mdc-text>
    </div>
  \`,
  ...hideAllControls()
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Ae=["Example","ListOfMenuItems","MenuItemWithLeadingIcon","MenuItemWithTrailingIcon","MenuItemWithBadge","MenuItemWithBadgeIcon","MenuItemWithBadgeCounter","MenuItemWithSideText","MenuItemWithTrailingArrow","MenuItemWithLeadingArrow","MenuItemWithTooltip"];export{o as Example,l as ListOfMenuItems,c as MenuItemWithBadge,u as MenuItemWithBadgeCounter,s as MenuItemWithBadgeIcon,h as MenuItemWithLeadingArrow,a as MenuItemWithLeadingIcon,p as MenuItemWithSideText,g as MenuItemWithTooltip,b as MenuItemWithTrailingArrow,d as MenuItemWithTrailingIcon,Ae as __namedExportsOrder,Ce as default};
