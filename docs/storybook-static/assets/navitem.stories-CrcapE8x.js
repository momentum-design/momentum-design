import{A as r,D as s}from"./index-x8Ewq2Rq.js";import{k as p}from"./lit-element-D5KKan5q.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as b,s as u}from"./commonArgTypes-BluK8w5L.js";import{t as v,h as g}from"./utils-CF1irry3.js";import"./index-C9z9WAEj.js";import"./if-defined-D5BV9-c0.js";import"./index-2PiEGcHV.js";import"./index-BrLJ_9IK.js";import"./menupopover.constants-Df21F9dQ.js";import"./popover.component-Bw5zQP8M.js";import"./base-DIkkzJ-c.js";import"./roles-BH_hBfTz.js";import"./IconNameMixin-CujGSn0t.js";import"./menuitem.component-BoKm6qLY.js";import"./listitem.component-Bh3_BYs0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-DfhuLnrm.js";import"./v4-CmTdKEVZ.js";import"./index-Cx7wvr8C.js";import"./button.utils-rNW36Ji7.js";import"./state-CSSggq2n.js";import"./divider.constants-DyEGqhgz.js";import"./create-context-89xeped_.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-CURAQ2f4.js";import"./class-map-BcCVsMyu.js";import"./directive-Ctav8iJK.js";import"./index-C-sYZp06.js";import"./iframe-BTIP1BQ1.js";import"../sb-preview/runtime.js";import"./iconprovider.component-Bvm-70EG.js";import"./v4-CQkTLCs1.js";const x=e=>p`
  <div role="menubar">
    <mdc-navitem
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
    ></mdc-navitem>
  </div>
`,Z={title:"Work In Progress/sidenavigation/navitem",tags:["autodocs"],component:"mdc-navitem",render:x,parameters:{badges:["wip"]},argTypes:{"nav-id":{control:"text"},"icon-name":{control:"text"},"badge-type":{control:"radio",options:Object.values(r)},counter:{control:"number"},"max-counter":{control:{type:"number",min:9,max:999}},label:{control:"text",description:"Label text displayed for the nav item."},disabled:{control:"boolean"},active:{control:"boolean"},"show-label":{control:"boolean"},"aria-label":{control:"text"},"disable-aria-current":{control:"boolean"},...v(["--mdc-navitem-color","--mdc-navitem-border-color","--mdc-navitem-disabled-color","--mdc-navitem-expanded-width","--mdc-navitem-hover-background-color","--mdc-navitem-hover-active-background-color","--mdc-navitem-pressed-background-color","--mdc-navitem-pressed-active-background-color","--mdc-navitem-disabled-background-color","--mdc-navitem-disabled-active-background-color","--mdc-navitem-rest-active-background-color"]),...g(["--mdc-listitem-default-background-color","--mdc-listitem-background-color-hover","--mdc-listitem-background-color-active","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","--mdc-listitem-padding-left-and-right","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-text-side-header","trailing-text-subline","trailing-controls","subline-text","side-header-text","tertiary-label","secondary-label","variant","arrow-position","arrow-direction","tabIndex","tooltip-text","tooltip-placement"]),...b,...u}},o={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":r.COUNTER,counter:3,"max-counter":s.MAX_COUNTER,disabled:!1,active:!1,"show-label":!0,label:"Dashboard"}},t={args:{"nav-id":"1","icon-name":"placeholder-bold","badge-type":r.COUNTER,counter:3,"max-counter":s.MAX_COUNTER,disabled:!1,"aria-label":"This is a navitem.",active:!1,"show-label":!1}};var i,l,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'nav-id': '1',
    'icon-name': 'placeholder-bold',
    'badge-type': ALLOWED_BADGE_TYPES.COUNTER,
    counter: 3,
    'max-counter': DEFAULTS.MAX_COUNTER,
    disabled: false,
    'aria-label': 'This is a navitem.',
    active: false,
    'show-label': false
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const ee=["Example","collapsedNavItem"];export{o as Example,ee as __namedExportsOrder,t as collapsedNavItem,Z as default};
