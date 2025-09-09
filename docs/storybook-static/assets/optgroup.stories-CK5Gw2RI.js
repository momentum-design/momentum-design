import{k as a}from"./lit-element-D5KKan5q.js";import"./index-B2pabD1r.js";import{c,s}from"./commonArgTypes-BluK8w5L.js";import{t as b,d as u}from"./utils-CFOyPOhY.js";import"./index-GZ7YkSWL.js";import"./property-Bj3TGwkg.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./provider.component-DrWB4byV.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./DisabledMixin-B-Cnza7-.js";import"./roles-CJI3JVG-.js";import"./index-D2VIkDCb.js";import"./index-C1uW47F2.js";import"./iframe-kOqprQN7.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-CqVtAZCJ.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./listitem.component-B3497azE.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-DEwGeIeI.js";const n=o=>a`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,g=o=>n(a`
    <mdc-optgroup label="${o.label}" ?disabled="${o.disabled}" data-aria-label="${o["data-aria-label"]}">
      <mdc-option label="Boston, MA"></mdc-option>
      <mdc-option label="Chicago, IL" selected></mdc-option>
      <mdc-option label="Detroit, MI"></mdc-option>
      <mdc-option label="Flagstaff, AZ"></mdc-option>
      <mdc-option label="Honolulu, HI"></mdc-option>
    </mdc-optgroup>
  `),j={title:"Components/select/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:g,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...b(["--mdc-optgroup-disabled-color"]),...u(["default"]),...c,...s}},t={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},e={render:o=>n(a`
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
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var r,m,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const q=["Example","List"];export{t as Example,e as List,q as __namedExportsOrder,j as default};
