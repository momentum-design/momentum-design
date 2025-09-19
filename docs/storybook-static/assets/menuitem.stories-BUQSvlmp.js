import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as e}from"./lit-element-D5KKan5q.js";import"./index-DbwFWRIE.js";import{c as V,s as X}from"./commonArgTypes-BluK8w5L.js";import{a as Y,d as Z,h as r}from"./utils-CFOyPOhY.js";import"./index-DEo-gc7q.js";import"./index-BaUwcf4A.js";import"./index-BYNNLGJf.js";import"./index-DQ1Hv4sq.js";import{A as ee,a as te}from"./menuitem.component-Dws3iiL_.js";import"./v4-CQkTLCs1.js";import"./index-DHsMOcdX.js";import"./provider.component-BaQC7CJH.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CRlZlTtq.js";import"./roles-CJI3JVG-.js";import"./badge.constants-Cr-5n44e.js";import"./index-CqVtAZCJ.js";import"./divider.constants-DBMTjDho.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./iframe-sUkS64Sw.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./popover.component-CgG8O1N4.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./listitem.component-Cy9hWtov.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";const m="Menu Item",n=t=>e`<div role="menu" style="width: 20rem;">${t}</div>`,re=t=>n(e` <mdc-menuitem
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
    ></mdc-menuitem>`),je={title:"Components/menupopover/menuitem",tags:["autodocs"],component:"mdc-menuitem",render:re,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"secondary-label":{control:"text"},"side-header-text":{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"tertiary-label":{control:"text"},"subline-text":{control:"text"},"arrow-position":{control:"select",options:Object.values(ee)},"arrow-direction":{control:"select",options:Object.values(te)},...Y(["variant","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","default"]),...Z(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","click","keydown","keyup","focus"]),...V,...X}},o={args:{label:m,"secondary-label":"This is a secondary Label","side-header-text":"","tertiary-label":"","subline-text":"",disabled:!1}},a={render:()=>n(e`
      <mdc-menuitem label="New" secondary-label="Create a new file"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Open File" secondary-label="Open an existing file"></mdc-menuitem>
      <mdc-menuitem label="Close File" secondary-label="Close the current file"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Save" secondary-label="Save the current file"></mdc-menuitem>
      <mdc-menuitem label="Save As" secondary-label="Save the current file with a new name"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Share" secondary-label="Share the current file"></mdc-menuitem>
    `),...r()},l={render:()=>n(e`
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
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,f,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var $,W,S;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(S=(W=l.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var C,A,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var T,k,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var D,L,B;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(B=(L=s.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var N,R,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(E=(R=u.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var F,_,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" side-header-text="##"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var H,P,q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="trailing"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var z,G,J;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="leading"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const He=["Example","ListOfMenuItems","MenuItemWithLeadingIcon","MenuItemWithTrailingIcon","MenuItemWithBadge","MenuItemWithBadgeIcon","MenuItemWithBadgeCounter","MenuItemWithSideText","MenuItemWithTrailingArrow","MenuItemWithLeadingArrow","MenuItemWithTooltip"];export{o as Example,a as ListOfMenuItems,c as MenuItemWithBadge,u as MenuItemWithBadgeCounter,s as MenuItemWithBadgeIcon,h as MenuItemWithLeadingArrow,l as MenuItemWithLeadingIcon,p as MenuItemWithSideText,g as MenuItemWithTooltip,b as MenuItemWithTrailingArrow,d as MenuItemWithTrailingIcon,He as __namedExportsOrder,je as default};
