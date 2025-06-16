import{k as p}from"./lit-element-D5KKan5q.js";import"./index-DN5IXob1.js";import{c as l,s}from"./commonArgTypes-BluK8w5L.js";import{h as b,d as u}from"./utils-CO8B6ZcN.js";import"./index-31TC6SKf.js";import"./index-C9z9WAEj.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./DisabledMixin-BZruwOeC.js";import"./roles-BH_hBfTz.js";import"./index-D1yLszQ-.js";import"./optgroup.constants-CwoRKCZY.js";import"./index-BpPzqC-M.js";import"./iframe-DK7Navp5.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-C34JuzZ8.js";import"./popover.component-2fUXsfxE.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-CjzCjsSm.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./listitem.component-BrjALe5l.js";import"./TabIndexMixin-CsrHswKP.js";const c=o=>p`
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
`),G={title:"Components/select/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:g,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...b(["--mdc-optgroup-disabled-color"]),...u(["default"]),...l,...s}},t={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},i={render:o=>c(p`
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
  `),args:{disabled:!0}};var r,e,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Office locations',
    disabled: false,
    'data-aria-label': 'Select an item from the list'
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var m,d,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(d=i.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const J=["Example","List"];export{t as Example,i as List,J as __namedExportsOrder,G as default};
