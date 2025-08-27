import"./index-B_Thb8MV.js";import{k as p}from"./lit-element-D5KKan5q.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as b,s as u}from"./commonArgTypes-BluK8w5L.js";import{t as v,a as g}from"./utils-CFOyPOhY.js";import{A as r,D as s}from"./menupopover.constants-BCvF7ZAQ.js";import"./property-Bj3TGwkg.js";import"./if-defined-D5BV9-c0.js";import"./index-CwZu4Wnd.js";import"./provider.component-DrWB4byV.js";import"./index-DeEenWCE.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./menuitem.component-DzHW4eQ9.js";import"./roles-CJI3JVG-.js";import"./listitem.component-moTyXfIR.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-DM9rY9pk.js";import"./popover.component-CWSuSUni.js";import"./v4-CmTdKEVZ.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./sidenavigation.component-BT4bDVNN.js";import"./divider.constants-DXWnBz1m.js";import"./create-context-89xeped_.js";import"./index-CEnrxJXn.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./badge.constants-C6WKiCnx.js";import"./index-BQiCZx_Y.js";import"./iframe-DTDfIGes.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./iconprovider.component-BtAZSWEH.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.constants-CVV9o_W6.js";const x=e=>p`
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
    ></mdc-navmenuitem>
  </div>
`,te={title:"Components/sidenavigation/navmenuitem",tags:["autodocs"],component:"mdc-navmenuitem",render:x,parameters:{badges:["stable"]},argTypes:{"nav-id":{control:"text"},"icon-name":{control:"text"},"badge-type":{control:"radio",options:Object.values(r)},counter:{control:"number"},"max-counter":{control:{type:"number",min:9,max:999}},label:{control:"text",description:"Label text displayed for the nav item."},disabled:{control:"boolean"},active:{control:"boolean"},"show-label":{control:"boolean"},"aria-label":{control:"text"},"disable-aria-current":{control:"boolean"},...v(["--mdc-navmenuitem-color","--mdc-navmenuitem-border-color","--mdc-navmenuitem-disabled-color","--mdc-navmenuitem-expanded-width","--mdc-navmenuitem-hover-background-color","--mdc-navmenuitem-hover-active-background-color","--mdc-navmenuitem-pressed-background-color","--mdc-navmenuitem-pressed-active-background-color","--mdc-navmenuitem-disabled-background-color","--mdc-navmenuitem-disabled-active-background-color","--mdc-navmenuitem-rest-active-background-color"]),...g(["--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","subline-text","side-header-text","tertiary-label","secondary-label","variant","arrow-position","arrow-direction","tabIndex","tooltip-text","tooltip-placement"]),...b,...u}},o={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":r.COUNTER,counter:3,"max-counter":s.MAX_COUNTER,disabled:!1,active:!1,"show-label":!0,label:"Dashboard"}},t={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":r.COUNTER,counter:3,"max-counter":s.MAX_COUNTER,disabled:!1,"aria-label":"This is a navmenuitem.",active:!1,"show-label":!1}};var n,i,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const re=["Example","collapsedNavMenuItem"];export{o as Example,re as __namedExportsOrder,t as collapsedNavMenuItem,te as default};
