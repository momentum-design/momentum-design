import{T as d,D as G}from"./index-BDvasA0l.js";import{k as g}from"./lit-element-D5KKan5q.js";import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as c}from"./if-defined-D5BV9-c0.js";import{c as V,s as q}from"./commonArgTypes-BluK8w5L.js";import{h as N,d as Z}from"./utils-D1SE5bce.js";import"./index-vGa-YSJb.js";import"./index-C9z9WAEj.js";import"./index-BX3Tn-Br.js";import"./index-bxhk8h4S.js";import"./formfieldwrapper.component-DKn4fQEK.js";import"./DisabledMixin-CizxPH9K.js";import"./text.constants-ZF0jM5wn.js";import"./index-P21x_s7g.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./FormInternalsMixin-BezuNa1f.js";import"./v4-BnQ50LvX.js";import"./v4-CQkTLCs1.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.constants-D3lNAbe_.js";import"./button.utils-idYASaaz.js";const _=e=>g`
  <mdc-toggle
      name="toggleName"
      value="toggleValue"
      @focus="${m("onfocus")}"
      @change="${m("onchange")}"
      size="${e.size}"
      label="${c(e.label)}"
      help-text="${c(e["help-text"])}"
      data-aria-label="${c(e["data-aria-label"])}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}">
    </mdc-toggle>
`,fe={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:_,parameters:{badges:["stable"]},argTypes:{size:{control:{type:"inline-radio"},options:Object.values(d)},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},...N(["help-text-type","label-info","id"]),...Z(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-border-radius","--mdc-toggle-border-radius-compact","--mdc-toggle-border","--mdc-toggle-inactive-rest-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color","--mdc-toggle-inactive-disabled-color","--mdc-toggle-active-rest-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-active-disabled-color","--mdc-toggle-help-text-color","--mdc-toggle-label-color-disabled"]),...V,...q}},t={args:{label:"Toggle label",checked:!1,disabled:!1,size:G.SIZE,"help-text":""}},o={args:{...t.args,size:d.DEFAULT}},a={args:{...t.args,size:d.COMPACT}},r={args:{...t.args,"help-text":"helper text"}},s={render:e=>g`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},l={args:{"data-aria-label":"This is a toggle with no label"}},i={render:e=>g`
    <form @submit="${n=>{n.preventDefault();const O=new FormData(n.target).get("toggleName");m("Form Submitted")({value:O})}}">
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
  `};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    disabled: false,
    size: DEFAULTS.SIZE,
    'help-text': ''
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,z,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(S=(z=a.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var T,E,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(y=(E=r.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var D,$,F;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(F=($=s.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var A,L,C;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var k,w,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const ve=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm"];export{a as CompactSize,o as DefaultSize,s as Disabled,t as Example,i as ToggleInsideForm,r as WithHelperText,l as WithoutLabel,ve as __namedExportsOrder,fe as default};
