import{T as m,D as O}from"./index-DcRnB1Vq.js";import{k as d}from"./lit-element-CHllvULs.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as G,s as V}from"./commonArgTypes-BluK8w5L.js";import{h as q,d as N}from"./utils-D1SE5bce.js";import"./index-BT1ISfLJ.js";import"./index-HW6KrQZO.js";import"./if-defined-C4tJgJ33.js";import"./index-CEbgplXA.js";import"./index-Mdu4l6Cj.js";import"./formfieldwrapper.component-CWIPqk6J.js";import"./DisabledMixin-DBt9didn.js";import"./text.constants-DJu2q-6E.js";import"./index-W-2h3si0.js";import"./iframe-CIJ1rX14.js";import"../sb-preview/runtime.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./index-BGkqZMsC.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./FormInternalsMixin-D4P2zbkO.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.component-CXHzGrZ-.js";import"./button.constants-D0rdLcnn.js";import"./button.utils-CC-feA6A.js";const Z=e=>d`
  <mdc-toggle
      name="toggleName"
      value="toggleValue"
      @focus="${c("onfocus")}"
      @change="${c("onchange")}"
      size="${e.size}"
      label="${e.label}"
      help-text="${e["help-text"]}"
      data-aria-label="${e["data-aria-label"]}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}">
    </mdc-toggle>
`,be={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:Z,parameters:{badges:["stable"]},argTypes:{size:{control:{type:"inline-radio"},options:Object.values(m)},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},...q(["help-text-type","label-info","id"]),...N(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-border-radius","--mdc-toggle-border-radius-compact","--mdc-toggle-border","--mdc-toggle-inactive-rest-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color","--mdc-toggle-inactive-disabled-color","--mdc-toggle-active-rest-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-active-disabled-color","--mdc-toggle-help-text-color","--mdc-toggle-label-color-disabled"]),...G,...V}},t={args:{label:"Toggle label",checked:!1,disabled:!1,size:O.SIZE,"help-text":""}},a={args:{...t.args,size:m.DEFAULT}},o={args:{...t.args,size:m.COMPACT}},r={args:{...t.args,"help-text":"helper text"}},l={render:e=>d`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},s={args:{...t.args,label:"","data-aria-label":"This is a toggle with no label"}},i={render:e=>d`
    <form @submit="${g=>{g.preventDefault();const I=new FormData(g.target).get("toggleName");c("Form Submitted")({value:I})}}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValue" label="Agree to Terms" size="${e.size}" 
          required-label='required' validation-message='Toggle this switch to continue'></mdc-toggle>
          <div style='display: flex; gap: 0.25rem'>
            <mdc-button type="submit" size='24'>Submit</mdc-button>
            <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
          </div>
      </fieldset>
    </form>
  `};var n,p,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    disabled: false,
    size: DEFAULTS.SIZE,
    'help-text': ''
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,x,z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,T,E;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(E=(T=r.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var y,D,$;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...($=(D=l.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var F,A,L;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    label: '',
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var C,k,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <mdc-toggle name="toggleName" value="toggleValue" label="Agree to Terms" size="\${args.size}" 
          required-label='required' validation-message='Toggle this switch to continue'></mdc-toggle>
          <div style='display: flex; gap: 0.25rem'>
            <mdc-button type="submit" size='24'>Submit</mdc-button>
            <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
          </div>
      </fieldset>
    </form>
  \`;
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const he=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm"];export{o as CompactSize,a as DefaultSize,l as Disabled,t as Example,i as ToggleInsideForm,r as WithHelperText,s as WithoutLabel,he as __namedExportsOrder,be as default};
