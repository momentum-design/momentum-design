import{k as t}from"./iframe-E1lunX_E.js";import"./index-BTsBkf3o.js";import{c as k,s as T}from"./commonArgTypes-BG7EqI50.js";import{h as f}from"./utils-D6nie9pS.js";import"./index-GMMRLyZs.js";import{P as y,S as A}from"./popover.constants-COEDd5UF.js";import{V as L}from"./formfieldwrapper.constants-DG5De6w4.js";import"./index-B82n25ai.js";import"./preload-helper-C1FmrZbK.js";import"./index-4XAof5NQ.js";import"./button.component-D4S8tPM8.js";import"./buttonsimple.component-tAMGZA2K.js";import"./TabIndexMixin-EvA1cca2.js";import"./DisabledMixin-DutBLYdm.js";import"./button.utils-rNW36Ji7.js";import"./index-D_vVtYUN.js";import"./index-T1WrLezj.js";import"./index-DTrDRi1E.js";import"./index-eIMx10hO.js";import"./base-DIkkzJ-c.js";import"./if-defined-CeOZCovI.js";import"./popover.component-oiHJ_bnY.js";import"./BackdropMixin-DtZZ-ijw.js";import"./index-CabWCfBv.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-Sr3iQzQE.js";import"./formfieldwrapper.component-BEvotpjQ.js";import"./index-BtCtbknQ.js";import"./FormInternalsMixin-BdeCmsy_.js";import"./query-BPxBhMfF.js";import"./toggle.constants-BuI8R28t.js";import"./index-C6BFb9wc.js";const S=e=>t` <mdc-formfieldgroup
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
  </mdc-formfieldgroup>`,oe={title:"Components/formfieldgroup",tags:["autodocs"],component:"mdc-formfieldgroup",render:S,argTypes:{label:{control:"text"},"help-text":{control:"text"},"data-aria-label":{control:"text"},required:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(y)},"toggletip-strategy":{control:"select",options:Object.values(A)},"info-icon-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(L)},children:{description:"The html content which can be placed inside the formfieldgroup component.",control:"object"},...f(["disabled"]),...k,...T}},l={args:{label:"Group label","help-text":"This is an example help text.","data-aria-label":"Label text aria label","help-text-type":"default",children:t`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `}},o={args:{label:"Group label","data-aria-label":"Label text aria label",children:t`
      <li>Loreim impusum</li>
      <li>Donec a lectus</li>
      <li>Praesent maximus</li>
      <li>Aenean id</li>
      <li>Integer non</li>
    `}},a={args:{label:"Select your Avengers team","help-text":"The team captain should have previous challenging situations.","data-aria-label":"Select one of the Avengers",children:t`
      <mdc-checkbox label="Black Widow"></mdc-checkbox>
      <mdc-checkbox label="Captain America"></mdc-checkbox>
      <mdc-checkbox label="Hawkye"></mdc-checkbox>
      <mdc-checkbox label="The Hulk"></mdc-checkbox>
      <mdc-checkbox label="Iron Man"></mdc-checkbox>
      <mdc-checkbox label="Thor"></mdc-checkbox>
    `}},r={args:{label:"Engine thrusters","help-text":"Select all the thrusters you would like to turn on.","data-aria-label":"Select one of the engine thrusters",children:t`
      <mdc-toggle label="Left Thruster 1"></mdc-toggle>
      <mdc-toggle label="Left Thruster 2"></mdc-toggle>
      <mdc-toggle label="Left Thruster 3"></mdc-toggle>
      <mdc-toggle label="Right Thruster 1"></mdc-toggle>
      <mdc-toggle label="Right Thruster 2"></mdc-toggle>
      <mdc-toggle label="Right Thruster 3"></mdc-toggle>
    `}};var c,i,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,s,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var d,h,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,u,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const ae=["Example","GroupWithoutHelpText","CheckboxGroup","ToggleGroup"];export{a as CheckboxGroup,l as Example,o as GroupWithoutHelpText,r as ToggleGroup,ae as __namedExportsOrder,oe as default};
