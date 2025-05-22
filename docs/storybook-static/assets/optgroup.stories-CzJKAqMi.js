import{k as p}from"./lit-element-D5KKan5q.js";import"./index-CILQw29s.js";import{c as l,s}from"./commonArgTypes-BluK8w5L.js";import{h as b,d as u}from"./utils-CO8B6ZcN.js";import"./index-DYNvT0ye.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./optgroup.constants-CwoRKCZY.js";import"./index-D3DhXfcW.js";import"./index-JpCV5CPS.js";import"./iframe-BjnW5VIv.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-CcXofQbA.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-w8B2CBxb.js";import"./popover.component-BTxIb0E7.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./roles-DMFGbP5t.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./listitem.component-CJpRoKE-.js";import"./TabIndexMixin-CsrHswKP.js";const c=o=>p`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,g=o=>c(p`
  <mdc-optgroup
    label="${o.label}"
    ?disabled="${o.disabled}"
    data-aria-label="${o["data-aria-label"]}"
  >
    <mdc-option>Boston, MA</mdc-option>
    <mdc-option selected>Chicago, IL</mdc-option>
    <mdc-option>Detroit, MI</mdc-option>
    <mdc-option>Flagstaff, AZ</mdc-option>
    <mdc-option>Honolulu, HI</mdc-option>
  </mdc-optgroup>
`),J={title:"Components/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:g,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...b(["--mdc-optgroup-disabled-color"]),...u(["default"]),...l,...s}},t={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},i={render:o=>c(p`
    <mdc-optgroup label="North America">
      <mdc-option>Boston</mdc-option>
      <mdc-option>Mexico</mdc-option>
      <mdc-option>Toronto</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Europe" ?disabled="${o.disabled}">
      <mdc-option>Berlin</mdc-option>
      <mdc-option>London</mdc-option>
      <mdc-option>Vienna</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Asia Pacific">
      <mdc-option>Mumbai</mdc-option>
      <mdc-option>Sydney</mdc-option>
    </mdc-optgroup>
  `),args:{disabled:!0}};var r,m,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Office locations',
    disabled: false,
    'data-aria-label': 'Select an item from the list'
  }
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var e,d,n;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithDiv(html\`
    <mdc-optgroup label="North America">
      <mdc-option>Boston</mdc-option>
      <mdc-option>Mexico</mdc-option>
      <mdc-option>Toronto</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Europe" ?disabled="\${args.disabled}">
      <mdc-option>Berlin</mdc-option>
      <mdc-option>London</mdc-option>
      <mdc-option>Vienna</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Asia Pacific">
      <mdc-option>Mumbai</mdc-option>
      <mdc-option>Sydney</mdc-option>
    </mdc-optgroup>
  \`),
  args: {
    disabled: true
  }
}`,...(n=(d=i.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const K=["Example","List"];export{t as Example,i as List,K as __namedExportsOrder,J as default};
