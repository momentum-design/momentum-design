import"./index-C-qboZoI.js";import{k as x}from"./iframe-DHOQtyml.js";import{t as E}from"./if-defined-DClzWNv2.js";import{c as y,s as h}from"./commonArgTypes-BluK8w5L.js";import{a as T}from"./utils-Dd_sfl9-.js";import{P as f}from"./popover.component-VS8Aqnx3.js";import{A as l,D as i}from"./menupopover.constants-aPkAaYcL.js";import"./menuitem.component-DemX_Ry8.js";import"./listitem.component-8Ay7yom4.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CJnrukpa.js";import"./DisabledMixin-DvdaRsAD.js";import"./index-CGHaPVXe.js";import"./sidenavigation.component-BOjprJVa.js";import"./index-BDboxI16.js";import"./v4-CmTdKEVZ.js";import"./button.utils-rNW36Ji7.js";import"./index-Bv1yOQYJ.js";import"./IconNameMixin-BjKpCPYn.js";import"./badge.constants-D_rKPEOK.js";import"./index-CTR5va3i.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./BackdropMixin-DO-GzP2a.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,O=e=>x`
  <div role="menubar">
    <mdc-navmenuitem
      @click="${t("onclick")}"
      @keydown="${t("onkeydown")}"
      @keyup="${t("onkeyup")}"
      @focus="${t("onfocus")}"
      @activechange="${t("onactivechange")}"
      nav-id="${e["nav-id"]}"
      icon-name="${e["icon-name"]}"
      label=${e.label}
      ?disabled=${e.disabled}
      badge-type="${e["badge-type"]}"
      counter=${e.counter}
      max-counter="${e["max-counter"]}"
      ?active=${e.active}
      ?show-label=${e["show-label"]}
      ?disable-aria-current=${e["disable-aria-current"]}
      ?cannot-activate=${e["cannot-activate"]}
      aria-label=${E(e["aria-label"])}
      tooltip-text=${e["tooltip-text"]}
      tooltip-placement=${e["tooltip-placement"]}
      tooltip-type=${e["tooltip-type"]}
      tooltip-appearance=${e["tooltip-appearance"]}
      tooltip-boundary-padding=${e["tooltip-boundary-padding"]}
    ></mdc-navmenuitem>
  </div>
`,q={title:"Components/sidenavigation/navmenuitem",tags:["autodocs"],component:"mdc-navmenuitem",render:O,argTypes:{"show-label":{control:"boolean"},active:{control:"boolean"},"cannot-activate":{control:"boolean"},"nav-id":{control:"text"},"icon-name":{control:"text"},"badge-type":{control:"radio",options:Object.values(l)},counter:{control:"number"},"max-counter":{control:{type:"number",min:9,max:999}},label:{control:"text",description:"Label text displayed for the nav item."},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(f)},"tooltip-type":{control:"select",options:["description","label","none"]},"tooltip-appearance":{control:"select",options:["when-collapsed","always"]},"tooltip-boundary-padding":{control:"number"},disabled:{control:"boolean"},"aria-label":{control:"text"},"disable-aria-current":{control:"boolean"},...T(["--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","subline-text","side-header-text","tertiary-label","secondary-label","variant","arrow-position","arrow-direction","tabIndex"]),...y,...h}},o={args:{"show-label":!0,active:!1,"nav-id":"1","icon-name":"placeholder-bold","badge-type":l.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,label:"Dashboard"}},a={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":l.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,"aria-label":"This is a navmenuitem.",active:!1,"show-label":!1}},n={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":l.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,"aria-label":"This is a navmenuitem.",active:!1,"show-label":!1,"tooltip-text":"This is a tooltip text."}};var r,c,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    'show-label': true,
    active: false,
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    label: 'Dashboard'
  }
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    'aria-label': 'This is a navmenuitem.',
    active: false,
    'show-label': false
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,u,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    'aria-label': 'This is a navmenuitem.',
    active: false,
    'show-label': false,
    'tooltip-text': 'This is a tooltip text.'
  }
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const z=["Example","collapsedNavMenuItem","tooltipNavMenuItem"];export{o as Example,z as __namedExportsOrder,a as collapsedNavMenuItem,q as default,n as tooltipNavMenuItem};
