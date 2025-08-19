import"./index-BMKWtzu_.js";import{k as i}from"./lit-element-D5KKan5q.js";import{a as F}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as D,s as E}from"./commonArgTypes-BluK8w5L.js";import{a as A,t as L}from"./utils-CFOyPOhY.js";import"./index-EO-F4xWv.js";import{a as O}from"./popover.component-CWSuSUni.js";import"./index-C1I-QMLj.js";import"./iframe-CQ2BYk5f.js";import"../sb-preview/runtime.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./provider.component-DrWB4byV.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-DTKEcboi.js";import"./DisabledMixin-B-Cnza7-.js";import"./index-DeEenWCE.js";import"./index-eW6vgMN0.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DR-5bOLb.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./formfieldwrapper.component-BeqiOSNt.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./v4-CQkTLCs1.js";import"./button.component-AY6DUPps.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./TabIndexMixin-DEwGeIeI.js";import"./button.utils-rNW36Ji7.js";const V=e=>i`
  <mdc-checkbox
    label="${e.label}"
    help-text="${e["help-text"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    name="${e.name}"
    value="${e.value}"
    ?autofocus="${e.autofocus}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    id="${e.id}"
    ?indeterminate="${e.indeterminate}"
    data-aria-label="${e["data-aria-label"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    @change="${F("onchange")}"
  ></mdc-checkbox>
`,ve={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:V,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},autofocus:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(O)},"info-icon-aria-label":{control:"text"},...A(["help-text-type","id","internals"]),...L(["--mdc-checkbox-background-color-hover","--mdc-checkbox-checked-background-color-hover","--mdc-checkbox-checked-pressed-icon-color","--mdc-checkbox-pressed-icon-color","--mdc-checkbox-disabled-checked-icon-color"]),...D,...E}},t={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},c={args:{"data-aria-label":"This is a checkbox with no label"}},o={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},a={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},l={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>i` <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},r={render:()=>i`
      <form @submit=${n=>{n.preventDefault();const C=new FormData(n.target).getAll("super-power");F("Form Submitted")({value:C})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox
            label="Mind Control"
            value="mind-control"
            name="super-power"
            required
            validation-message="This selection is necessary"
          ></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `};var s,d,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    'data-aria-label': 'Agree to all terms and conditions'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label'
  }
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,u,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.'
  }
}`,...(k=(u=o.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,f,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      element: 'mdc-checkbox'
    }
  },
  render: () => html\` <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>\`
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var $,w,I;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox
            label="Mind Control"
            value="mind-control"
            name="super-power"
            required
            validation-message="This selection is necessary"
          ></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  }
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const ye=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField"];export{l as DisabledVariants,t as Example,r as FormField,o as HelperText,a as Indeterminate,c as WithoutLabel,ye as __namedExportsOrder,ve as default};
