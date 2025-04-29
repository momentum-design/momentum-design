import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as d}from"./lit-element-D5KKan5q.js";import{t as m}from"./if-defined-D5BV9-c0.js";import"./index-DiswCswR.js";import{c as G,s as V}from"./commonArgTypes-BluK8w5L.js";import{h as q,d as N}from"./utils-CO8B6ZcN.js";import"./index-D0TJSAwA.js";import{T as g,D as Z}from"./toggle.constants-UTL486-l.js";import"./v4-CQkTLCs1.js";import"./index-DNslf-HV.js";import"./iframe-Cticwtmv.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-BU_n_WWN.js";import"./formfieldwrapper.component-DNKMXI01.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./button.component-C5MmAiQW.js";import"./button.constants-Bfip8hYE.js";import"./buttonsimple.component-9hW3yvQZ.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";const _=e=>d`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${c("onfocus")}"
    @change="${c("onchange")}"
    size="${e.size}"
    label="${m(e.label)}"
    help-text="${m(e["help-text"])}"
    data-aria-label="${m(e["data-aria-label"])}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}">
  </mdc-toggle>
`,Te={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:_,parameters:{badges:["stable"]},argTypes:{size:{control:"inline-radio",options:Object.values(g)},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},autofocus:{control:"boolean"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},...q(["help-text-type","label-info","id"]),...N(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-label-lineheight","--mdc-toggle-label-fontsize","--mdc-toggle-label-fontweight","--mdc-toggle-label-color-disabled","--mdc-toggle-help-text-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color"]),...G,...V}},t={args:{label:"Toggle label",checked:!1,size:Z.SIZE,disabled:!1,autofocus:!1,"help-text":""}},o={args:{...t.args,size:g.DEFAULT}},a={args:{...t.args,size:g.COMPACT}},r={args:{...t.args,"help-text":"helper text"}},l={render:e=>d`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},s={args:{"data-aria-label":"This is a toggle with no label"}},i={render:e=>d`
    <form @submit="${n=>{n.preventDefault();const O=new FormData(n.target).get("toggleName");c("Form Submitted")({value:O})}}">
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
    size: DEFAULTS.SIZE,
    disabled: false,
    autofocus: false,
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
}`,...(y=(E=r.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var D,$,F;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(F=($=l.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var A,L,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(k=(L=s.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,C,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Ee=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm"];export{a as CompactSize,o as DefaultSize,l as Disabled,t as Example,i as ToggleInsideForm,r as WithHelperText,s as WithoutLabel,Ee as __namedExportsOrder,Te as default};
