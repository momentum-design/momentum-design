import"./index-5R3KucBn.js";import{k as p}from"./iframe-BZzdMAZp.js";import{c as H,s as M}from"./commonArgTypes-BluK8w5L.js";import{a as _,t as z}from"./utils-CFOyPOhY.js";import"./index-DVr7PYE6.js";import{P,S as U}from"./popover.component-Boo_DYe1.js";import"./index-9-OsRZK_.js";import"./preload-helper-C1FmrZbK.js";import"./index-MnuDyUBt.js";import"./index-CWcLttKP.js";import"./index-DTrDRi1E.js";import"./index-6ylhXoF8.js";import"./DisabledMixin-FFwZPyaL.js";import"./index-BjB2ba7z.js";import"./index-BrHvQWhu.js";import"./if-defined-DZZrGFtM.js";import"./index--K6VXkND.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./buttonsimple.component-CR61XUh9.js";import"./TabIndexMixin-BZbJwgjr.js";import"./buttonsimple.constants-CLFrJb8-.js";import"./roles-CJI3JVG-.js";import"./DataAriaLabelMixin-Con2Dv41.js";import"./FormInternalsMixin-BtVKRgDd.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./formfieldwrapper.component-DuRDxB8e.js";import"./button.constants-XDh12voX.js";import"./button.component-DoeRgBbi.js";import"./button.utils-rNW36Ji7.js";import"./BackdropMixin-sWGUFycW.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,G=e=>p`
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
`,we={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:G,argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(P)},"toggletip-strategy":{control:"select",options:Object.values(U)},"info-icon-aria-label":{control:"text"},..._(["help-text-type","id","internals"]),...z(["--mdc-checkbox-background-color-hover","--mdc-checkbox-checked-background-color-hover","--mdc-checkbox-checked-pressed-icon-color","--mdc-checkbox-pressed-icon-color","--mdc-checkbox-disabled-checked-icon-color"]),...H,...M}},a={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},l={args:{"data-aria-label":"This is a checkbox with no label"}},s={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},i={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},n={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>p` <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},d={render:()=>p`
      <form @submit=${r=>{r.preventDefault();const h=new FormData(r.target).getAll("super-power");b("Form Submitted")({value:h})}}>
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
    `},m={render:e=>{const r=o=>{const t=Array.from(o.querySelectorAll('mdc-checkbox[name="super-power"]')).find(u=>u.hasAttribute("required"));return t?t.checked?(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","success"),!0):(t.setAttribute("help-text","Please select this required option"),t.setAttribute("help-text-type","error"),!1):!0};return p`
      <form @submit=${o=>{o.preventDefault();const c=o.target;if(!r(c))return;const u=new FormData(c).getAll("super-power");b("Form Submitted")({value:u})}} @reset=${o=>{const t=o.target.querySelector('mdc-checkbox[name="super-power"][required]');t&&(t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default"))}} novalidate>
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
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var q,A,F;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(F=(A=i.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var $,C,D;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,B,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Te=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField","FormFieldCheckboxWithHelpTextValidation"];export{n as DisabledVariants,a as Example,d as FormField,m as FormFieldCheckboxWithHelpTextValidation,s as HelperText,i as Indeterminate,l as WithoutLabel,Te as __namedExportsOrder,we as default};
