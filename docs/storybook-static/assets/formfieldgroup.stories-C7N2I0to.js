import{i as _,D as L,k as r}from"./lit-element-CHllvULs.js";import{u as $,C as p,n as I}from"./index-HW6KrQZO.js";import{D as O}from"./ValueMixin-DFWGhyGn.js";import{V as v,T as u}from"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import{c as P,s as C}from"./commonArgTypes-BluK8w5L.js";import"./index-CHc--Sgp.js";import"./index-BAZ8Fs8g.js";import"./if-defined-C4tJgJ33.js";import"./formfieldwrapper.component-DYhI3Mut.js";import"./DisabledMixin-DBt9didn.js";import"./index-MYSkQ1zX.js";import"./index-BnIP7Wfy.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BFc9mT2k.js";import"./create-context-89xeped_.js";import"./index-_7Vf5t2Q.js";const G=$.constructTagName("formfieldgroup"),b={RADIOGROUP:"radiogroup",GROUP:"group"},l={HEADER_ID:"header-id",DESCRIPTION_ID:"description-id"},H=_`
  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  :host::part(description) {
    margin-bottom: 0.25rem;
  }
`,w=[H];var N=Object.defineProperty,S=(t,o,c,h)=>{for(var e=void 0,n=t.length-1,g;n>=0;n--)(g=t[n])&&(e=g(o,c,e)||e);return e&&N(o,c,e),e};const m=class m extends O(p){constructor(){super(...arguments),this.isRadio=!1}renderText(o,c,h,e){return e?r`<mdc-text id="${c}" type="${o}" tagname="${v.SPAN}" part="${h}">${e}</mdc-text>`:L}render(){return r`
      <div
        part="container"
        role="${this.isRadio?b.RADIOGROUP:b.GROUP}"
        aria-labelledby="${l.HEADER_ID}"
        aria-describedby="${l.DESCRIPTION_ID}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${this.renderText(u.BODY_LARGE_BOLD,l.HEADER_ID,"header",this.headerText)}
        ${this.renderText(u.BODY_LARGE_REGULAR,l.DESCRIPTION_ID,"description",this.descriptionText)}
        <slot></slot>
      </div>
    `}};m.styles=[...p.styles,...w];let a=m;S([I({type:String,attribute:"header-text",reflect:!0})],a.prototype,"headerText");S([I({type:String,attribute:"description-text",reflect:!0})],a.prototype,"descriptionText");a.register(G);const U=t=>r`
  <mdc-formfieldgroup
    header-text="${t["header-text"]}"
    description-text="${t["description-text"]}"
    data-aria-label="${t["data-aria-label"]}"
  >
    ${t.children}
  </mdc-formfieldgroup>`,oe={title:"Components/formfieldgroup",tags:["autodocs"],component:"mdc-formfieldgroup",render:U,parameters:{badges:["stable"]},argTypes:{"header-text":{control:"text"},"description-text":{control:"text"},"data-aria-label":{control:"text"},children:{description:"The html content which can be placed inside the formfieldgroup component.",control:"object"},...P,...C}},i={args:{"header-text":"Header text","description-text":"This is an example description text.","data-aria-label":"Header text aria label",children:r`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `}},s={args:{"header-text":"Select your Avengers team","description-text":"The team captain should have previous challenging situations.","data-aria-label":"Select one of the Avengers",children:r`
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    `}},d={args:{"header-text":"Engine thrusters","description-text":"Select all the thrusters you would like to turn on.","data-aria-label":"Select one of the engine thrusters",children:r`
      <mdc-toggle label="Left Thruster 1"></mdc-toggle>
      <mdc-toggle label="Left Thruster 2"></mdc-toggle>
      <mdc-toggle label="Left Thruster 3"></mdc-toggle>
      <mdc-toggle label="Right Thruster 1"></mdc-toggle>
      <mdc-toggle label="Right Thruster 2"></mdc-toggle>
      <mdc-toggle label="Right Thruster 3"></mdc-toggle>
    `}};var x,T,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'header-text': 'Header text',
    'description-text': 'This is an example description text.',
    'data-aria-label': 'Header text aria label',
    children: html\`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    \`
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var k,A,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    'header-text': 'Select your Avengers team',
    'description-text': 'The team captain should have previous challenging situations.',
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
}`,...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,y,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    'header-text': 'Engine thrusters',
    'description-text': 'Select all the thrusters you would like to turn on.',
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
}`,...(E=(y=d.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const ce=["Example","CheckboxGroup","ToggleGroup"];export{s as CheckboxGroup,i as Example,d as ToggleGroup,ce as __namedExportsOrder,oe as default};
