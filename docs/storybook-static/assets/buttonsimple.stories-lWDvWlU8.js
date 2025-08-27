import{B as l}from"./buttonsimple.component-jROCF6tv.js";import{T as c,a as r,B as i,D as d}from"./buttonsimple.constants-CVV9o_W6.js";import{k as p}from"./lit-element-D5KKan5q.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as m}from"./if-defined-D5BV9-c0.js";import{c as b,s as u}from"./commonArgTypes-BluK8w5L.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./roles-CJI3JVG-.js";import"./v4-CQkTLCs1.js";l.register(c);const f=e=>p` <mdc-buttonsimple
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
    ?active="${e.active}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    size="${e.size}"
    type="${e.type}"
    role="${e.role}"
    tabIndex="${e.tabIndex}"
    ariaStateKey="${m(e.ariaStateKey)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-buttonsimple
  >`,A={title:"Internal/buttonsimple",tags:["autodocs"],component:"mdc-buttonsimple",render:f,parameters:{badges:["internal"]},argTypes:{children:{description:"Text label for the button.",control:"text"},ariaStateKey:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},size:{control:"select",options:Object.values(r)},type:{control:"select",options:Object.values(i)},"auto-focus-on-mount":{control:"boolean"},...b,...u}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,size:r[32],type:i.BUTTON,role:d.ROLE,tabIndex:0}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    size: BUTTON_SIZES[32],
    type: BUTTON_TYPE.BUTTON,
    role: DEFAULTS.ROLE,
    tabIndex: 0
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const h=["Example"];export{t as Example,h as __namedExportsOrder,A as default};
