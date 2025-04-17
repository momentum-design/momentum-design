import{k as p}from"./lit-element-D5KKan5q.js";import"./index-DPkVAo11.js";import{c as l,s}from"./commonArgTypes-BluK8w5L.js";import{h as b}from"./utils-CO8B6ZcN.js";import"./index-stvS0N7_.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./index-D0_fT5Rb.js";import"./iframe-B0EsXYpU.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-BL7cBJOV.js";import"./popover.component-BXope1DD.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./listitem.component-CAQJg3uX.js";import"./TabIndexMixin-CsrHswKP.js";const c=o=>p`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,u=o=>c(p`
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
`),j={title:"Components/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:u,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...b(["--mdc-optgroup-disabled-color"]),...l,...s}},t={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},i={render:o=>c(p`
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
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var e,n,d;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(d=(n=i.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const q=["Example","List"];export{t as Example,i as List,q as __namedExportsOrder,j as default};
