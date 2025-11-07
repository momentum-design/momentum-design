import"./index-Dfh8v1An.js";import{k as u}from"./iframe-D-wtYgP4.js";import{c as _,s as R}from"./commonArgTypes-BluK8w5L.js";import{a as M}from"./utils-Dd_sfl9-.js";import"./index-BNNuxFcN.js";import{P as z,S as N}from"./popover.component-DXo1Q79I.js";import{C as l}from"./index-Ci8k55lz.js";import"./index-R2uCROWE.js";import"./preload-helper-C1FmrZbK.js";import"./index-Nn1cdab0.js";import"./index-DTrDRi1E.js";import"./index-BgVBsRrr.js";import"./base-DIkkzJ-c.js";import"./if-defined-CgebNzyn.js";import"./index-BcrmARF7.js";import"./v4-CmTdKEVZ.js";import"./TabIndexMixin-8R5zBaJM.js";import"./buttonsimple.component-BhoVFfPX.js";import"./DisabledMixin-DZ9F4VFG.js";import"./DataAriaLabelMixin-008vVYaB.js";import"./FormInternalsMixin-DZlIr-NT.js";import"./query-BPxBhMfF.js";import"./formfieldwrapper.component-BTrEtnOG.js";import"./formfieldwrapper.constants-CiRnuiYm.js";import"./button.component-L5eFM7wO.js";import"./button.utils-rNW36Ji7.js";import"./BackdropMixin-DuBcFtIs.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,K=e=>u`
  <mdc-checkbox
    label="${e.label}"
    help-text="${e["help-text"]}"
    help-text-type="${e["help-text-type"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?soft-disabled="${e["soft-disabled"]}"
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
    @change="${r("onchange")}"
    @keydown="${r("onkeydown")}"
    @focus="${r("onfocus")}"
    @click="${r("onclick")}"
  ></mdc-checkbox>
`,ke={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:K,argTypes:{label:{control:"text"},"help-text":{control:"text"},"help-text-type":{control:"radio",options:Object.values(l)},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(z)},"toggletip-strategy":{control:"select",options:Object.values(N)},"info-icon-aria-label":{control:"text"},...M(["id","internals"]),..._,...R}},s={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,readonly:!1,"soft-disabled":!1,"data-aria-label":"Agree to all terms and conditions","help-text-type":l.DEFAULT}},n={args:{"data-aria-label":"This is a checkbox with no label","help-text-type":l.DEFAULT}},i={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails.","help-text-type":l.DEFAULT}},d={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0,"help-text-type":l.DEFAULT}},m={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>u` <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},p={render:()=>u`
      <form @submit=${a=>{a.preventDefault();const x=new FormData(a.target).getAll("super-power");r("Form Submitted")({value:x})}}>
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
    `},b={render:e=>{const a=o=>{const t=Array.from(o.querySelectorAll('mdc-checkbox[name="super-power"]')).find(h=>h.hasAttribute("required"));return t?t.checked?(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","default"),!0):(t.setAttribute("help-text","Please select this required option"),t.setAttribute("help-text-type","error"),!1):!0};return u`
      <form @submit=${o=>{o.preventDefault();const c=o.target;if(!a(c))return;const h=new FormData(c).getAll("super-power");r("Form Submitted")({value:h})}} @reset=${o=>{const t=o.target.querySelector('mdc-checkbox[name="super-power"][required]');t&&(t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default"))}} novalidate>
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
    `},args:{"help-text":"","help-text-type":l.DEFAULT}};var f,k,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    'data-aria-label': 'Agree to all terms and conditions',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var g,v,A;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var T,S,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,F,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true,
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var C,$,q;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var L,I,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var B,V,H;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      requiredBox.setAttribute('help-text-type', 'default');
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
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const ye=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField","FormFieldCheckboxWithHelpTextValidation"];export{m as DisabledVariants,s as Example,p as FormField,b as FormFieldCheckboxWithHelpTextValidation,i as HelperText,d as Indeterminate,n as WithoutLabel,ye as __namedExportsOrder,ke as default};
