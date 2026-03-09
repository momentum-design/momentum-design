import{k as a}from"./iframe-C252fD8g.js";import"./index-s0GoFeGp.js";import{c,s}from"./commonArgTypes-BG7EqI50.js";import{b}from"./utils-B5QUENNQ.js";import"./index-BeNKt3V6.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-DQqxUq8u.js";import"./DataAriaLabelMixin-qqDg6DtS.js";import"./DisabledMixin-DVtDJQvO.js";import"./optgroup.constants-CzU8oMml.js";import"./index-DlsJDHpW.js";import"./index-YE1ol78E.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-Dfg8iEd3.js";import"./listitem.component-CINL3m5b.js";import"./KeyDownHandledMixin-DzpgmDKR.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CmnW_yOz.js";const m=o=>a`
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
