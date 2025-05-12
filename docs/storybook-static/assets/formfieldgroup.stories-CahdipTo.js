import{k as l}from"./lit-element-D5KKan5q.js";import"./index-B_EqOnoU.js";import{c as k,s as T}from"./commonArgTypes-BluK8w5L.js";import{h as f}from"./utils-CO8B6ZcN.js";import"./index-DINJCEE0.js";import"./index-BnU5x3fb.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./index-C9z9WAEj.js";import"./roles-DCpIf2k8.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-CcXofQbA.js";import"./index-D3DhXfcW.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-DTLqyY9Y.js";import"./index-BSoBtipA.js";import"./iframe-D4ut1yO_.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./toggle.constants-BE0K6Cg_.js";import"./index-CCRpv70I.js";const L=e=>l`
  <mdc-formfieldgroup
    label="${e.label}"
    help-text="${e["help-text"]}"
    data-aria-label="${e["data-aria-label"]}"
    required-label="${e["required-label"]}"
  >
    ${e.children}
  </mdc-formfieldgroup>`,X={title:"Components/formfieldgroup",tags:["autodocs"],component:"mdc-formfieldgroup",render:L,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},"data-aria-label":{control:"text"},"required-label":{control:"text"},children:{description:"The html content which can be placed inside the formfieldgroup component.",control:"object"},...f(["help-text-type","disabled"]),...k,...T}},t={args:{label:"Group label","help-text":"This is an example help text.","data-aria-label":"Label text aria label",children:l`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `}},a={args:{label:"Group label","data-aria-label":"Label text aria label",children:l`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `}},r={args:{label:"Select your Avengers team","help-text":"The team captain should have previous challenging situations.","data-aria-label":"Select one of the Avengers",children:l`
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    `}},o={args:{label:"Engine thrusters","help-text":"Select all the thrusters you would like to turn on.","data-aria-label":"Select one of the engine thrusters",children:l`
      <mdc-toggle label="Left Thruster 1"></mdc-toggle>
      <mdc-toggle label="Left Thruster 2"></mdc-toggle>
      <mdc-toggle label="Left Thruster 3"></mdc-toggle>
      <mdc-toggle label="Right Thruster 1"></mdc-toggle>
      <mdc-toggle label="Right Thruster 2"></mdc-toggle>
      <mdc-toggle label="Right Thruster 3"></mdc-toggle>
    `}};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Group label',
    'help-text': 'This is an example help text.',
    'data-aria-label': 'Label text aria label',
    children: html\`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    \`
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,s,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Group label',
    'data-aria-label': 'Label text aria label',
    children: html\`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    \`
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var h,p,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Select your Avengers team',
    'help-text': 'The team captain should have previous challenging situations.',
    'data-aria-label': 'Select one of the Avengers',
    children: html\`
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    \`
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,u,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Engine thrusters',
    'help-text': 'Select all the thrusters you would like to turn on.',
    'data-aria-label': 'Select one of the engine thrusters',
    children: html\`
      <mdc-toggle label="Left Thruster 1"></mdc-toggle>
      <mdc-toggle label="Left Thruster 2"></mdc-toggle>
      <mdc-toggle label="Left Thruster 3"></mdc-toggle>
      <mdc-toggle label="Right Thruster 1"></mdc-toggle>
      <mdc-toggle label="Right Thruster 2"></mdc-toggle>
      <mdc-toggle label="Right Thruster 3"></mdc-toggle>
    \`
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const Y=["Example","GroupWithoutHelpText","CheckboxGroup","ToggleGroup"];export{r as CheckboxGroup,t as Example,a as GroupWithoutHelpText,o as ToggleGroup,Y as __namedExportsOrder,X as default};
