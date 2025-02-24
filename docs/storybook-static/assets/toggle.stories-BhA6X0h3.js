import{T as p,D as H}from"./index-CY-TZzbd.js";import{k as d}from"./lit-element-CHllvULs.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as M,s as U}from"./commonArgTypes-BluK8w5L.js";import{h as W,d as P}from"./utils-D1SE5bce.js";import"./index-Aiq256PZ.js";import"./index-HW6KrQZO.js";import"./if-defined-C4tJgJ33.js";import"./index-CEbgplXA.js";import"./index-D10qisB1.js";import"./formfieldwrapper.component-BuhNSbbS.js";import"./DisabledMixin-DBt9didn.js";import"./text.constants-DJu2q-6E.js";import"./index-DUaaHH_4.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-XZChMYdq.js";import"./create-context-89xeped_.js";import"./index-BGkqZMsC.js";import"./ValueMixin-DFWGhyGn.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.component-Dc4O0li7.js";import"./button.constants-BmMoyae9.js";import"./button.utils-BKs-jRfA.js";const j=e=>d`
  <mdc-toggle
      name="toggleName"
      value="toggleValue"
      @focus="${i("onfocus")}"
      @change="${i("onchange")}"
      size="${e.size}"
      label="${e.label}"
      help-text="${e["help-text"]}"
      data-aria-label="${e["data-aria-label"]}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}">
    </mdc-toggle>
`,fe={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:j,parameters:{badges:["stable"]},argTypes:{size:{control:{type:"inline-radio"},options:Object.values(p)},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},...W(["help-text-type","label-info","id"]),...P(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-border-radius","--mdc-toggle-border-radius-compact","--mdc-toggle-border","--mdc-toggle-inactive-rest-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color","--mdc-toggle-inactive-disabled-color","--mdc-toggle-active-rest-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-active-disabled-color","--mdc-toggle-help-text-color","--mdc-toggle-label-color-disabled"]),...M,...U}},t={args:{label:"Toggle label",checked:!1,disabled:!1,size:H.SIZE,"help-text":""}},o={args:{...t.args,size:p.DEFAULT}},r={args:{...t.args,size:p.COMPACT}},l={args:{...t.args,"help-text":"helper text"}},s={render:e=>d`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},m={args:{...t.args,label:"","data-aria-label":"This is a toggle with no label"}},n={render:e=>d`
    <form @submit="${a=>{a.preventDefault();const g=new FormData(a.target).get("toggleName");i("Form Submitted")({value:g})}}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueActivated" checked label="Agree to Terms"
          size="${e.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  `},c={render:e=>d`
    <form @submit="${a=>{a.preventDefault();const g=new FormData(a.target).get("toggleName");i("Form Submitted")({value:g})}}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueDeactivated" label="Agree to Terms"
          size="${e.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  `};var u,b,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    disabled: false,
    size: DEFAULTS.SIZE,
    'help-text': ''
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,h,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,z,D;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(D=(z=r.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var E,T,F;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var $,A,y;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(y=(A=s.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var I,L,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    label: '',
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var k,C,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
    <form @submit="\${onSubmit}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueActivated" checked label="Agree to Terms"
          size="\${args.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  \`;
  }
}`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var w,O,G;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
    <form @submit="\${onSubmit}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueDeactivated" label="Agree to Terms"
          size="\${args.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  \`;
  }
}`,...(G=(O=c.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const ve=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","IsActivatedInsideForm","IsDeactivatedInsideForm"];export{r as CompactSize,o as DefaultSize,s as Disabled,t as Example,n as IsActivatedInsideForm,c as IsDeactivatedInsideForm,l as WithHelperText,m as WithoutLabel,ve as __namedExportsOrder,fe as default};
