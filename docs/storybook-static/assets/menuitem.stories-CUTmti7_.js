import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-B8p1Q7A4.js";import{c as X,s as Y}from"./commonArgTypes-BluK8w5L.js";import{a as Z,d as ee,h as r}from"./utils-CFOyPOhY.js";import"./index-D-ZwDGTF.js";import"./index-BWIpxT1l.js";import"./index-D38jSS5Q.js";import{a as U}from"./popover.component-BeJYT0F1.js";import{A as te,a as re}from"./menuitem.component-CtCANyEv.js";import"./v4-CQkTLCs1.js";import"./index-riA1qVWu.js";import"./provider.component-BaQC7CJH.js";import"./index-DYRxW7oy.js";import"./roles-DU0xbrD4.js";import"./v4-CmTdKEVZ.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./if-defined-D5BV9-c0.js";import"./IconNameMixin-CRlZlTtq.js";import"./badge.constants-Cr-5n44e.js";import"./index-B-GnYs90.js";import"./divider.constants-DBMTjDho.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./iframe-ie6jbfXq.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./base-DIkkzJ-c.js";import"./listitem.component-CqDx-T5W.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";const o="Menu Item",n=e=>t`<div role="menu" style="width: 20rem;">${e}</div>`,ne=e=>n(t` <mdc-menuitem
      @click="${i("onclick")}"
      @keydown="${i("onkeydown")}"
      @keyup="${i("onkeyup")}"
      @focus="${i("onfocus")}"
      arrow-position="${e["arrow-position"]}"
      arrow-direction="${e["arrow-direction"]}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      side-header-text="${e["side-header-text"]}"
      tertiary-label="${e["tertiary-label"]}"
      subline-text="${e["subline-text"]}"
      tooltip-text="${e["tooltip-text"]}"
      tooltip-placement="${e["tooltip-placement"]}"
    ></mdc-menuitem>`),je={title:"Components/menupopover/menuitem",tags:["autodocs"],component:"mdc-menuitem",render:ne,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"secondary-label":{control:"text"},"side-header-text":{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"tertiary-label":{control:"text"},"subline-text":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(U)},"arrow-position":{control:"select",options:Object.values(te)},"arrow-direction":{control:"select",options:Object.values(re)},...Z(["variant","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","default"]),...ee(["leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","click","keydown","keyup","focus"]),...X,...Y}},m={args:{label:o,"secondary-label":"This is a secondary Label","side-header-text":"","tertiary-label":"","subline-text":"",disabled:!1,"tooltip-text":"","tooltip-placement":U.TOP}},l={render:()=>n(t`
      <mdc-menuitem label="New" secondary-label="Create a new file"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Open File" secondary-label="Open an existing file"></mdc-menuitem>
      <mdc-menuitem label="Close File" secondary-label="Close the current file"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Save" secondary-label="Save the current file"></mdc-menuitem>
      <mdc-menuitem label="Save As" secondary-label="Save the current file with a new name"></mdc-menuitem>
      <mdc-divider></mdc-divider>
      <mdc-menuitem label="Share" secondary-label="Share the current file"></mdc-menuitem>
    `),...r()},a={render:()=>n(t`
      <mdc-menuitem label="${o}">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    `),...r()},d={render:()=>n(t`
      <mdc-menuitem label="${o}">
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    `),...r()},c={render:()=>n(t`
      <mdc-menuitem label="${o}">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-menuitem>
    `),...r()},s={render:()=>n(t`
      <mdc-menuitem label="${o}">
        <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
      </mdc-menuitem>
    `),...r()},u={render:()=>n(t`
      <mdc-menuitem label="${o}">
        <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
      </mdc-menuitem>
    `),...r()},p={render:()=>n(t` <mdc-menuitem label="${o}" side-header-text="##"></mdc-menuitem> `),...r()},b={render:()=>n(t` <mdc-menuitem label="${o}" arrow-position="trailing"></mdc-menuitem> `),...r()},h={render:()=>n(t` <mdc-menuitem label="${o}" arrow-position="leading"></mdc-menuitem> `),...r()},g={render:()=>t`
    <div role="menu" style="width: 20rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" tooltip-text="This is the tooltip text." tooltip-placement="bottom">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    </div>
  `,...r()};var y,v,x;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,f,$;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(f=l.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var I,W,S;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(S=(W=a.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var C,A,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var O,T,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,E,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,R,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-menuitem label="\${label}">
        <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
      </mdc-menuitem>
    \`),
  ...hideAllControls()
}`,...(B=(R=u.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var N,_,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" side-header-text="##"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var j,H,V;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="trailing"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(V=(H=b.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var q,z,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:'{\n  render: () => wrapWithDiv(html` <mdc-menuitem label="${label}" arrow-position="leading"></mdc-menuitem> `),\n  ...hideAllControls()\n}',...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div role="menu" style="width: 20rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" tooltip-text="This is the tooltip text." tooltip-placement="bottom">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
    </div>
  \`,
  ...hideAllControls()
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const He=["Example","ListOfMenuItems","MenuItemWithLeadingIcon","MenuItemWithTrailingIcon","MenuItemWithBadge","MenuItemWithBadgeIcon","MenuItemWithBadgeCounter","MenuItemWithSideText","MenuItemWithTrailingArrow","MenuItemWithLeadingArrow","MenuItemWithTooltip"];export{m as Example,l as ListOfMenuItems,c as MenuItemWithBadge,u as MenuItemWithBadgeCounter,s as MenuItemWithBadgeIcon,h as MenuItemWithLeadingArrow,a as MenuItemWithLeadingIcon,p as MenuItemWithSideText,g as MenuItemWithTooltip,b as MenuItemWithTrailingArrow,d as MenuItemWithTrailingIcon,He as __namedExportsOrder,je as default};
