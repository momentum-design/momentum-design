import{J as k,K as T,W as f,k as l}from"./iframe-DKmoi846.js";import{c as y,s as A}from"./commonArgTypes-BG7EqI50.js";import{h as L}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const S=e=>l` <mdc-formfieldgroup
    label="${e.label}"
    help-text="${e["help-text"]}"
    data-aria-label="${e["data-aria-label"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    ?required=${e.required}
    help-text-type="${e["help-text-type"]}"
  >
    ${e.children}
  </mdc-formfieldgroup>`,I={title:"Components/formfieldgroup",tags:["autodocs"],component:"mdc-formfieldgroup",render:S,argTypes:{label:{control:"text"},"help-text":{control:"text"},"data-aria-label":{control:"text"},required:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(k)},"toggletip-strategy":{control:"select",options:Object.values(T)},"info-icon-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(f)},children:{description:"The html content which can be placed inside the formfieldgroup component.",control:"object"},...L(["disabled"]),...y,...A}},t={args:{label:"Group label","help-text":"This is an example help text.","data-aria-label":"Label text aria label","help-text-type":"default",children:l`
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
    `}},o={args:{label:"Select your Avengers team","help-text":"The team captain should have previous challenging situations.","data-aria-label":"Select one of the Avengers",children:l`
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    `}},c={args:{label:"Engine thrusters","help-text":"Select all the thrusters you would like to turn on.","data-aria-label":"Select one of the engine thrusters",children:l`
      <mdc-toggle label="Left Thruster 1"></mdc-toggle>
      <mdc-toggle label="Left Thruster 2"></mdc-toggle>
      <mdc-toggle label="Left Thruster 3"></mdc-toggle>
      <mdc-toggle label="Right Thruster 1"></mdc-toggle>
      <mdc-toggle label="Right Thruster 2"></mdc-toggle>
      <mdc-toggle label="Right Thruster 3"></mdc-toggle>
    `}};var r,i,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Group label',
    'help-text': 'This is an example help text.',
    'data-aria-label': 'Label text aria label',
    'help-text-type': 'default',
    children: html\`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    \`
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var s,m,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,g,p;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var b,u,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const R=["Example","GroupWithoutHelpText","CheckboxGroup","ToggleGroup"];export{o as CheckboxGroup,t as Example,a as GroupWithoutHelpText,c as ToggleGroup,R as __namedExportsOrder,I as default};
