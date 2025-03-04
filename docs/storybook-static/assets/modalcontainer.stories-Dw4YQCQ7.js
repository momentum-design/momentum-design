import{C as d,E as n,D as e}from"./index-D5dDIFjJ.js";import{k as c}from"./lit-element-CHllvULs.js";import{c as i,s as m}from"./commonArgTypes-BluK8w5L.js";import{d as s}from"./utils-D1SE5bce.js";import"./index-HW6KrQZO.js";import"./if-defined-C4tJgJ33.js";import"./index-BGjwsboe.js";import"./DataAriaLabelMixin-vs_lw9aw.js";const b=a=>c`
<mdc-modalcontainer
  color="${a.color}"
  elevation="${a.elevation}"
  data-role="${a["data-role"]}"
  data-aria-label="${a["data-aria-label"]}"
  data-aria-labelledby="${a["data-aria-labelledby"]}"
  data-aria-describedby="${a["data-aria-describedby"]}"
  data-arial-modal="${a["data-aria-modal"]}"
>
  ${a.children}
</mdc-modalcontainer>
`,x={title:"Internal/modalcontainer",tags:["autodocs"],component:"mdc-modalcontainer",render:b,parameters:{badges:["internal"]},argTypes:{children:{control:"text",description:'Text for the modal container (passed into "default" slot)'},color:{control:"select",options:Object.values(d)},elevation:{control:"select",options:Object.values(n)},"data-role":{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the modal container. Required for accessibility."},"data-aria-labelledby":{control:"text"},"data-aria-describedby":{control:"text"},"data-aria-modal":{control:"boolean"},...i,...m,...s(["--mdc-modalcontainer-primary-background-color","--mdc-modalcontainer-border-color","--mdc-modalcontainer-inverted-background-color","--mdc-modalcontainer-inverted-border-color","--mdc-modalcontainer-inverted-text-color"])}},o={args:{color:d.CONTRAST,elevation:n[0],"data-aria-label":"Modal container","data-role":e.ROLE,"data-aria-modal":e.ARIA_MODAL,children:e.CHILDREN}};var r,t,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    color: COLOR.CONTRAST,
    elevation: ELEVATION[0],
    'data-aria-label': 'Modal container',
    'data-role': DEFAULTS.ROLE,
    'data-aria-modal': DEFAULTS.ARIA_MODAL,
    children: DEFAULTS.CHILDREN
  }
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const R=["Example"];export{o as Example,R as __namedExportsOrder,x as default};
