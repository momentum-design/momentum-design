import"./index-DA2-NWXu.js";import{k as p}from"./iframe-BuPhkxnS.js";import{c as H,s as M}from"./commonArgTypes-BluK8w5L.js";import{a as _}from"./utils-Dd_sfl9-.js";import"./index-CJAVJ7NB.js";import{P as z,S as P}from"./popover.component-CNuE2aOy.js";import"./index-3bqSnZjZ.js";import"./preload-helper-C1FmrZbK.js";import"./index-DI_GDpjL.js";import"./index-DTrDRi1E.js";import"./index-JKoOFnOo.js";import"./DisabledMixin-C1arkXyT.js";import"./index-D5FL5ZaI.js";import"./if-defined-BgceRQth.js";import"./index-XyQ1SAY1.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./buttonsimple.component-BIAvjM6b.js";import"./TabIndexMixin-BmouFCHF.js";import"./DataAriaLabelMixin-D-GayhQ9.js";import"./FormInternalsMixin-Sqx1Amu-.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./formfieldwrapper.component-D1kfTtJ1.js";import"./button.component-xIQEkSwV.js";import"./button.utils-rNW36Ji7.js";import"./BackdropMixin-BjxtrY8I.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,U=e=>p`
  <mdc-checkbox
    label="${e.label}"
    help-text="${e["help-text"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    name="${e.name}"
    value="${e.value}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    id="${e.id}"
    ?indeterminate="${e.indeterminate}"
    data-aria-label="${e["data-aria-label"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    @change="${b("onchange")}"
  ></mdc-checkbox>
`,ke={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:U,argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(z)},"toggletip-strategy":{control:"select",options:Object.values(P)},"info-icon-aria-label":{control:"text"},..._(["help-text-type","id","internals"]),...H,...M}},a={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},l={args:{"data-aria-label":"This is a checkbox with no label"}},s={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},n={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},i={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>p` <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},d={render:()=>p`
      <form @submit=${o=>{o.preventDefault();const h=new FormData(o.target).getAll("super-power");b("Form Submitted")({value:h})}}>
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
    `},m={render:e=>{const o=r=>{const t=Array.from(r.querySelectorAll('mdc-checkbox[name="super-power"]')).find(u=>u.hasAttribute("required"));return t?t.checked?(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","success"),!0):(t.setAttribute("help-text","Please select this required option"),t.setAttribute("help-text-type","error"),!1):!0};return p`
      <form @submit=${r=>{r.preventDefault();const c=r.target;if(!o(c))return;const u=new FormData(c).getAll("super-power");b("Form Submitted")({value:u})}} @reset=${r=>{const t=r.target.querySelector('mdc-checkbox[name="super-power"][required]');t&&(t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default"))}} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with validation)</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power" required></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{"help-text":"","help-text-type":"default"}};var x,k,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    'data-aria-label': 'Agree to all terms and conditions'
  }
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,y,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label'
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,w,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.'
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var q,A,F;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var $,C,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,B,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var L,O,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const validateCheckboxGroup = (form: HTMLFormElement): boolean => {
      const checkboxes = Array.from(form.querySelectorAll('mdc-checkbox[name="super-power"]')) as Checkbox[];
      const requiredBox = checkboxes.find(cb => cb.hasAttribute('required'));
      if (!requiredBox) return true;
      if (!requiredBox.checked) {
        requiredBox.setAttribute('help-text', 'Please select this required option');
        requiredBox.setAttribute('help-text-type', 'error');
        return false;
      }
      requiredBox.setAttribute('help-text', 'Looks good!');
      requiredBox.setAttribute('help-text-type', 'success');
      return true;
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateCheckboxGroup(form)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const requiredBox = form.querySelector('mdc-checkbox[name="super-power"][required]') as Checkbox;
      if (requiredBox) {
        requiredBox.setAttribute('help-text', args['help-text'] || '');
        requiredBox.setAttribute('help-text-type', args['help-text-type'] || 'default');
      }
    };
    return html\`
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power (with validation)</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power" required></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    'help-text': '',
    'help-text-type': 'default'
  }
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const fe=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField","FormFieldCheckboxWithHelpTextValidation"];export{i as DisabledVariants,a as Example,d as FormField,m as FormFieldCheckboxWithHelpTextValidation,s as HelperText,n as Indeterminate,l as WithoutLabel,fe as __namedExportsOrder,ke as default};
