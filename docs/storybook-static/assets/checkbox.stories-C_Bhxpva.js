import{H as c,J as N,K as W,k as l}from"./iframe-DKmoi846.js";import{c as X,s as P}from"./commonArgTypes-BG7EqI50.js";import{h as G,a as k}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,j=e=>l`
  <div role="main">
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
  </div>
`,ee={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:j,argTypes:{label:{control:"text"},"help-text":{control:"text"},"help-text-type":{control:"radio",options:Object.values(c)},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},"data-aria-label":{control:"text"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(N)},"toggletip-strategy":{control:"select",options:Object.values(W)},"info-icon-aria-label":{control:"text"},...G(["id","internals","validation-message","validity","willValidate"]),...X,...P}},s={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,readonly:!1,"soft-disabled":!1,"data-aria-label":"Agree to all terms and conditions","help-text-type":c.DEFAULT}},d={args:{"data-aria-label":"This is a checkbox with no label","help-text-type":c.DEFAULT}},i={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails.","help-text-type":c.DEFAULT}},m={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0,"help-text-type":c.DEFAULT}},p={render:()=>l` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
        <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
      </div>
    </div>`},h={render:()=>l`
      <div role="main">
        <form @submit=${o=>{o.preventDefault();const f=new FormData(o.target).getAll("super-power");r("Form Submitted")({value:f})}}>
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
      </div>
    `,...k()},u={render:e=>{const o=a=>{const t=Array.from(a.querySelectorAll('mdc-checkbox[name="super-power"]')).find(x=>x.hasAttribute("required"));return t?t.checked?(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","default"),!0):(t.setAttribute("help-text","Please select this required option"),t.setAttribute("help-text-type","error"),!1):!0};return l`
      <div role="main">
        <form @submit=${a=>{a.preventDefault();const n=a.target;if(!o(n))return;const x=new FormData(n).getAll("super-power");r("Form Submitted")({value:x})}} @reset=${a=>{const t=a.target.querySelector('mdc-checkbox[name="super-power"][required]');t&&(t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default"))}} novalidate>
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
      </div>
    `},args:{"help-text":"","help-text-type":c.DEFAULT},...k()},b={decorators:[e=>{const o=document.createElement("style");return o.textContent=`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        mdc-checkbox:state(checked) { animation: fade-in 400ms ease-in-out; }
      `,document.head.appendChild(o),e()}],render:()=>l`
    <div role="main" style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="margin: 0; font-size: 0.875rem;">
        When checked, <code>mdc-checkbox:state(checked)</code> triggers a fade-in on the checkbox host element.
      </p>
      <mdc-checkbox label="Click me to see the fade-in animation"></mdc-checkbox>
    </div>
  `,...k()};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var A,T,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,w,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,F,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true,
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(q=(F=m.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var $,L,I;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
        <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
      </div>
    </div>\`
}`,...(I=(L=p.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var O,B,V;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      <div role="main">
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
      </div>
    \`;
  },
  ...hideAllControls()
}`,...(V=(B=h.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var H,U,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      <div role="main">
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
      </div>
    \`;
  },
  args: {
    'help-text': '',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  },
  ...hideAllControls()
}`,...(_=(U=u.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var R,z,M;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [story => {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        mdc-checkbox:state(checked) { animation: fade-in 400ms ease-in-out; }
      \`;
    document.head.appendChild(style);
    return story();
  }],
  render: () => html\`
    <div role="main" style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="margin: 0; font-size: 0.875rem;">
        When checked, <code>mdc-checkbox:state(checked)</code> triggers a fade-in on the checkbox host element.
      </p>
      <mdc-checkbox label="Click me to see the fade-in animation"></mdc-checkbox>
    </div>
  \`,
  ...hideAllControls()
}`,...(M=(z=b.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const te=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField","FormFieldCheckboxWithHelpTextValidation","CustomStateChecked"];export{b as CustomStateChecked,p as DisabledVariants,s as Example,h as FormField,u as FormFieldCheckboxWithHelpTextValidation,i as HelperText,m as Indeterminate,d as WithoutLabel,te as __namedExportsOrder,ee as default};
