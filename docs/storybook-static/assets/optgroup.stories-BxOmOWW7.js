import{k as a}from"./iframe-DpdbTchC.js";import"./index-CdPi1UsN.js";import{c,s}from"./commonArgTypes-BG7EqI50.js";import{b}from"./utils-B5QUENNQ.js";import"./index-CVTtlViz.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-_4KI8iPf.js";import"./DataAriaLabelMixin-DyzknH4g.js";import"./DisabledMixin-CrZP289j.js";import"./optgroup.constants-C66AHKAf.js";import"./index-DZDhbmdk.js";import"./index-CyXF7i9z.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-BHsfjJBF.js";import"./listitem.component-DRiAyb6X.js";import"./KeyDownHandledMixin-B9W1g_ZS.js";const m=o=>a`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,u=o=>m(a`
    <mdc-optgroup label="${o.label}" ?disabled="${o.disabled}" data-aria-label="${o["data-aria-label"]}">
      <mdc-option label="Boston, MA"></mdc-option>
      <mdc-option label="Chicago, IL" selected></mdc-option>
      <mdc-option label="Detroit, MI"></mdc-option>
      <mdc-option label="Flagstaff, AZ"></mdc-option>
      <mdc-option label="Honolulu, HI"></mdc-option>
    </mdc-optgroup>
  `),D={title:"Components/select/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:u,argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...b(["default"]),...c,...s}},t={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},e={render:o=>m(a`
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
    `),args:{disabled:!0}};var l,i,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Office locations',
    disabled: false,
    'data-aria-label': 'Select an item from the list'
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,d,r;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const I=["Example","List"];export{t as Example,e as List,I as __namedExportsOrder,D as default};
