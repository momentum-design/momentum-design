import{i as A,k as e}from"./lit-element-CHllvULs.js";import{D as R}from"./ValueMixin-DFWGhyGn.js";import{D as s,F as n}from"./formfieldwrapper.component-BUtu4LPi.js";import{u as v}from"./index-HW6KrQZO.js";import"./index-BGkqZMsC.js";import{c as G,s as S}from"./commonArgTypes-BluK8w5L.js";import{h as D}from"./utils-D1SE5bce.js";import"./index-BG9a_I-Z.js";import"./index-C8pPz3Of.js";import"./DisabledMixin-DBt9didn.js";import"./text.constants-DJu2q-6E.js";import"./index-MYSkQ1zX.js";import"./if-defined-C4tJgJ33.js";import"./index-BG5U1zMe.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-XZChMYdq.js";import"./create-context-89xeped_.js";import"./index-DWL1B6mM.js";const E=v.constructTagName("formfieldgroup"),m={RADIOGROUP:"radiogroup",GROUP:"group"},$=A`

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  :host::part(group-header) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  :host::part(label-text){
    font-weight: bold;
  }
`,I=[$],i=class i extends R(n){constructor(){super(),this.isRadio=!1,this.helpTextType=void 0}render(){return e`
      <div
        part="container"
        role="${this.isRadio?m.RADIOGROUP:m.GROUP}"
        aria-labelledby="${s.LABEL_ID}"
        aria-describedby="${s.HELPER_TEXT_ID}"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="group-header">
          ${this.renderLabel()}
          ${this.renderHelperText()}
        </div>
        <slot></slot>
      </div>
    `}};i.styles=[...n.styles,...I];let c=i;c.register(E);const P=l=>e`
  <mdc-formfieldgroup
    label="${l.label}"
    help-text="${l["help-text"]}"
    data-aria-label="${l["data-aria-label"]}"
    required-label="${l["required-label"]}"
  >
    ${l.children}
  </mdc-formfieldgroup>`,Y={title:"Components/formfieldgroup",tags:["autodocs"],component:"mdc-formfieldgroup",render:P,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},"data-aria-label":{control:"text"},"required-label":{control:"text"},children:{description:"The html content which can be placed inside the formfieldgroup component.",control:"object"},...D(["help-text-type"]),...G,...S}},t={args:{label:"Group label","help-text":"This is an example help text.","data-aria-label":"Label text aria label",children:e`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `}},a={args:{label:"Group label","data-aria-label":"Label text aria label",children:e`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `}},r={args:{label:"Select your Avengers team","help-text":"The team captain should have previous challenging situations.","data-aria-label":"Select one of the Avengers",children:e`
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    `}},o={args:{label:"Engine thrusters","help-text":"Select all the thrusters you would like to turn on.","data-aria-label":"Select one of the engine thrusters",children:e`
      <mdc-toggle label="Left Thruster 1"></mdc-toggle>
      <mdc-toggle label="Left Thruster 2"></mdc-toggle>
      <mdc-toggle label="Left Thruster 3"></mdc-toggle>
      <mdc-toggle label="Right Thruster 1"></mdc-toggle>
      <mdc-toggle label="Right Thruster 2"></mdc-toggle>
      <mdc-toggle label="Right Thruster 3"></mdc-toggle>
    `}};var d,h,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,b,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var x,k,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var f,L,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(L=o.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const Z=["Example","GroupWithoutHelpText","CheckboxGroup","ToggleGroup"];export{r as CheckboxGroup,t as Example,a as GroupWithoutHelpText,o as ToggleGroup,Z as __namedExportsOrder,Y as default};
