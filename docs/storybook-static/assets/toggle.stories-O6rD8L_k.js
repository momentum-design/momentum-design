import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as n}from"./lit-element-D5KKan5q.js";import{t as c}from"./if-defined-D5BV9-c0.js";import"./index-BF9mGRcX.js";import{c as q,s as G}from"./commonArgTypes-BluK8w5L.js";import{h as V,d as N}from"./utils-CO8B6ZcN.js";import"./index-VRKrKUFJ.js";import{T as d,D as Z}from"./toggle.constants-CKaUGZ68.js";import"./v4-CQkTLCs1.js";import"./index-CeHFGVJ3.js";import"./iframe-CX2n4kMX.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-n5bMvgnA.js";import"./formfieldwrapper.component-GHRMc24M.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import"./button.component-D7MTmNXw.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";const _=e=>n`
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
    ?required="${e.required}"
    ?autofocus="${e.autofocus}"
    ?disabled="${e.disabled}">
  </mdc-toggle>
`,Ee={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:_,parameters:{badges:["stable"]},argTypes:{size:{control:"inline-radio",options:Object.values(d)},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},autofocus:{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},...V(["help-text-type","label-info","id"]),...N(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-label-lineheight","--mdc-toggle-label-fontsize","--mdc-toggle-label-fontweight","--mdc-toggle-label-color-disabled","--mdc-toggle-help-text-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color"]),...q,...G}},t={args:{label:"Toggle label",checked:!1,size:Z.SIZE,disabled:!1,autofocus:!1,"help-text":""}},o={args:{...t.args,size:d.DEFAULT}},a={args:{...t.args,size:d.COMPACT}},r={args:{...t.args,"help-text":"helper text"}},l={render:e=>n`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},s={args:{"data-aria-label":"This is a toggle with no label"}},i={render:e=>n`
    <form @submit="${g=>{g.preventDefault();const O=new FormData(g.target).get("toggleName");m("Form Submitted")({value:O})}}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValue" label="Agree to Terms" size="${e.size}" 
          required validation-message='Toggle this switch to continue'></mdc-toggle>
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
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,z,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(S=(z=a.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var T,E,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(y=(E=r.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var $,D,F;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var A,L,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
          required validation-message='Toggle this switch to continue'></mdc-toggle>
          <div style='display: flex; gap: 0.25rem'>
            <mdc-button type="submit" size='24'>Submit</mdc-button>
            <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
          </div>
      </fieldset>
    </form>
  \`;
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const ye=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm"];export{a as CompactSize,o as DefaultSize,l as Disabled,t as Example,i as ToggleInsideForm,r as WithHelperText,s as WithoutLabel,ye as __namedExportsOrder,Ee as default};
