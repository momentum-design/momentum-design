import{k as a}from"./iframe-B0KTrzx9.js";import"./index-DyLbnMnq.js";import{c,s}from"./commonArgTypes-BluK8w5L.js";import{t as b,d as u}from"./utils-CFOyPOhY.js";import"./index-ybE6IA0W.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DataAriaLabelMixin-D8WkMzZs.js";import"./DisabledMixin-mZwCl_Iz.js";import"./roles-CJI3JVG-.js";import"./index-B0BwlIJd.js";import"./index-DNweNtkz.js";import"./index-C6YLtR8D.js";import"./index-fannbufq.js";import"./index-DTrDRi1E.js";import"./if-defined-DNHI_5dY.js";import"./FormInternalsMixin-i29fyrCl.js";import"./query-DXShiZ7f.js";import"./listitem.component-C1aS-Srd.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-0A7WQtCp.js";const m=o=>a`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,g=o=>m(a`
    <mdc-optgroup label="${o.label}" ?disabled="${o.disabled}" data-aria-label="${o["data-aria-label"]}">
      <mdc-option label="Boston, MA"></mdc-option>
      <mdc-option label="Chicago, IL" selected></mdc-option>
      <mdc-option label="Detroit, MI"></mdc-option>
      <mdc-option label="Flagstaff, AZ"></mdc-option>
      <mdc-option label="Honolulu, HI"></mdc-option>
    </mdc-optgroup>
  `),V={title:"Components/select/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:g,argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...b(["--mdc-optgroup-disabled-color"]),...u(["default"]),...c,...s}},t={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},e={render:o=>m(a`
      <mdc-optgroup label="North America">
        <mdc-option label="Boston"></mdc-option>
        <mdc-option label="Mexico"></mdc-option>
        <mdc-option label="Toronto"></mdc-option>
      </mdc-optgroup>
      <mdc-optgroup label="Europe" ?disabled="${o.disabled}">
        <mdc-option label="Berlin"></mdc-option>
        <mdc-option label="London"></mdc-option>
        <mdc-option label="Vienna"></mdc-option>
      </mdc-optgroup>
      <mdc-optgroup label="Asia Pacific">
        <mdc-option label="Mumbai"></mdc-option>
        <mdc-option label="Sydney"></mdc-option>
      </mdc-optgroup>
    `),args:{disabled:!0}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Office locations',
    disabled: false,
    'data-aria-label': 'Select an item from the list'
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var r,n,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-optgroup label="North America">
        <mdc-option label="Boston"></mdc-option>
        <mdc-option label="Mexico"></mdc-option>
        <mdc-option label="Toronto"></mdc-option>
      </mdc-optgroup>
      <mdc-optgroup label="Europe" ?disabled="\${args.disabled}">
        <mdc-option label="Berlin"></mdc-option>
        <mdc-option label="London"></mdc-option>
        <mdc-option label="Vienna"></mdc-option>
      </mdc-optgroup>
      <mdc-optgroup label="Asia Pacific">
        <mdc-option label="Mumbai"></mdc-option>
        <mdc-option label="Sydney"></mdc-option>
      </mdc-optgroup>
    \`),
  args: {
    disabled: true
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const W=["Example","List"];export{t as Example,e as List,W as __namedExportsOrder,V as default};
