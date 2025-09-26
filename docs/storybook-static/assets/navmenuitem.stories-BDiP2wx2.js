import"./index-nCqCvGT6.js";import{k as x}from"./iframe-DbFhe1C8.js";import{c as g,s as h}from"./commonArgTypes-BluK8w5L.js";import{t as E,a as T}from"./utils-CFOyPOhY.js";import{A as r,D as i}from"./menupopover.constants-C59X_q-S.js";import"./if-defined-D0TzS11l.js";import"./index-CdiuGzo8.js";import"./index-BnjtOTfP.js";import"./IconNameMixin-miLAir6r.js";import"./menuitem.component-Bo9LflPf.js";import"./roles-CJI3JVG-.js";import"./listitem.component-DRoTy_NQ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-hFXe221I.js";import"./DisabledMixin--7NqFN-A.js";import"./TabIndexMixin-cqZr-zGd.js";import"./index-CO0us3Ia.js";import"./button.utils-rNW36Ji7.js";import"./sidenavigation.component-BCSXJYGF.js";import"./divider.constants-sHxR8a8j.js";import"./popover.component-Evq03FS9.js";import"./BackdropMixin-HyPJ6UeR.js";import"./index-5KKekaUT.js";import"./v4-CmTdKEVZ.js";import"./index-ZKKTmItT.js";import"./class-map-CFLOWsqj.js";import"./directive-Ctav8iJK.js";import"./badge.constants-CLImyAYt.js";import"./index-wwme6ITP.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./buttonsimple.constants-Bv0Py8O9.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,f=e=>x`
  <div role="menubar">
    <mdc-navmenuitem
      @click="${a("onclick")}"
      @keydown="${a("onkeydown")}"
      @keyup="${a("onkeyup")}"
      @focus="${a("onfocus")}"
      @activechange="${a("onactivechange")}"
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
      aria-label=${e["aria-label"]}
      tooltip-text=${e["tooltip-text"]}
    ></mdc-navmenuitem>
  </div>
`,ae={title:"Components/sidenavigation/navmenuitem",tags:["autodocs"],component:"mdc-navmenuitem",render:f,argTypes:{"nav-id":{control:"text"},"icon-name":{control:"text"},"badge-type":{control:"radio",options:Object.values(r)},counter:{control:"number"},"max-counter":{control:{type:"number",min:9,max:999}},label:{control:"text",description:"Label text displayed for the nav item."},disabled:{control:"boolean"},active:{control:"boolean"},"show-label":{control:"boolean"},"aria-label":{control:"text"},"disable-aria-current":{control:"boolean"},"tooltip-text":{control:"text"},...E(["--mdc-navmenuitem-color","--mdc-navmenuitem-border-color","--mdc-navmenuitem-disabled-color","--mdc-navmenuitem-expanded-width","--mdc-navmenuitem-hover-background-color","--mdc-navmenuitem-hover-active-background-color","--mdc-navmenuitem-pressed-background-color","--mdc-navmenuitem-pressed-active-background-color","--mdc-navmenuitem-disabled-background-color","--mdc-navmenuitem-disabled-active-background-color","--mdc-navmenuitem-rest-active-background-color"]),...T(["--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","subline-text","side-header-text","tertiary-label","secondary-label","variant","arrow-position","arrow-direction","tabIndex"]),...g,...h}},o={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":r.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,active:!1,"show-label":!0,label:"Dashboard"}},t={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":r.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,"aria-label":"This is a navmenuitem.",active:!1,"show-label":!1}},n={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":r.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,"aria-label":"This is a navmenuitem.",active:!1,"show-label":!1,"tooltip-text":"This is a tooltip text."}};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    active: false,
    'show-label': true,
    label: 'Dashboard'
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,s,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var b,u,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const oe=["Example","collapsedNavMenuItem","tooltipNavMenuItem"];export{o as Example,oe as __namedExportsOrder,t as collapsedNavMenuItem,ae as default,n as tooltipNavMenuItem};
