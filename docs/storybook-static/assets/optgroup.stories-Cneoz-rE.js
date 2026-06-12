import{k as a}from"./iframe-5H9qcZJ2.js";import"./index-Bvl3e2S7.js";import{c,s}from"./commonArgTypes-BG7EqI50.js";import{b}from"./utils-B5QUENNQ.js";import"./index-k37q7gsp.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-Dim3kyMa.js";import"./DataAriaLabelMixin-9ouzFIjs.js";import"./DisabledMixin-C3uKy2QQ.js";import"./optgroup.constants-j561Fxb1.js";import"./index-Bfir4c11.js";import"./index-5C1genq1.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-zGkd97u6.js";import"./listitem.component-DZXy3O22.js";import"./KeyDownHandledMixin-DQIM2UJ1.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-D8cquwlD.js";const m=o=>a`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,u=o=>m(a`
    <mdc-optgroup label="${o.label}" ?disabled="${o.disabled}" data-aria-label="${o["data-aria-label"]}">
      <mdc-option label="Boston, MA"></mdc-option>
      <mdc-option label="Chicago, IL" selected></mdc-option>
      <mdc-option label="Detroit, MI"></mdc-option>
      <mdc-option label="Flagstaff, AZ"></mdc-option>
      <mdc-option label="Honolulu, HI"></mdc-option>
    </mdc-optgroup>
  `),O={title:"Components/select/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:u,argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...b(["default"]),...c,...s}},t={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},e={render:o=>m(a`
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
    `),args:{disabled:!0}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Office locations',
    disabled: false,
    'data-aria-label': 'Select an item from the list'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,r,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const k=["Example","List"];export{t as Example,e as List,k as __namedExportsOrder,O as default};
