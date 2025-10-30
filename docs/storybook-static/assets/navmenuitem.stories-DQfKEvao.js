import"./index-DfaFumY0.js";import{k as x}from"./iframe-BV5DWP9v.js";import{c as E,s as h}from"./commonArgTypes-BluK8w5L.js";import{a as T}from"./utils-Dd_sfl9-.js";import{A as l,D as i}from"./menupopover.constants-D9oQ7tqr.js";import"./if-defined-D2_Zq9Ec.js";import"./index-DVU4gHUE.js";import"./IconNameMixin-Bfeul72n.js";import"./menuitem.component-CrUZCzaa.js";import"./listitem.component-DvdYxTQT.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CzgsI75_.js";import"./DisabledMixin-4l6RL3Et.js";import"./button.utils-rNW36Ji7.js";import"./sidenavigation.component-JMrsgGkq.js";import"./popover.component-B4ffFb1U.js";import"./BackdropMixin-DS-9bUP-.js";import"./index-DWTClZG3.js";import"./v4-CmTdKEVZ.js";import"./index-BcsrSSIM.js";import"./badge.constants-CAm4ACHV.js";import"./index-ZSNJZ3qa.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,g=e=>x`
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
`,K={title:"Components/sidenavigation/navmenuitem",tags:["autodocs"],component:"mdc-navmenuitem",render:g,argTypes:{"nav-id":{control:"text"},"icon-name":{control:"text"},"badge-type":{control:"radio",options:Object.values(l)},counter:{control:"number"},"max-counter":{control:{type:"number",min:9,max:999}},label:{control:"text",description:"Label text displayed for the nav item."},disabled:{control:"boolean"},active:{control:"boolean"},"show-label":{control:"boolean"},"aria-label":{control:"text"},"disable-aria-current":{control:"boolean"},"tooltip-text":{control:"text"},...T(["--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","subline-text","side-header-text","tertiary-label","secondary-label","variant","arrow-position","arrow-direction","tabIndex"]),...E,...h}},t={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":l.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,active:!1,"show-label":!0,label:"Dashboard"}},o={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":l.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,"aria-label":"This is a navmenuitem.",active:!1,"show-label":!1}},n={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":l.COUNTER,counter:3,"max-counter":i.MAX_COUNTER,disabled:!1,"aria-label":"This is a navmenuitem.",active:!1,"show-label":!1,"tooltip-text":"This is a tooltip text."}};var r,c,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(c=t.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,u,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const q=["Example","collapsedNavMenuItem","tooltipNavMenuItem"];export{t as Example,q as __namedExportsOrder,o as collapsedNavMenuItem,K as default,n as tooltipNavMenuItem};
