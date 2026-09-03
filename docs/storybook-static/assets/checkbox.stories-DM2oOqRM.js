import{H as r,J as G,K as Y,k as l,P as j}from"./iframe-DBPSo1pq.js";import{c as J,s as Q}from"./commonArgTypes-BG7EqI50.js";import{i as Z}from"./imageFixtures-CD4avj2q.js";import{h as ee,a as k}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,te=e=>l`
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
      @change="${c("onchange")}"
      @keydown="${c("onkeydown")}"
      @focus="${c("onfocus")}"
      @click="${c("onclick")}"
    ></mdc-checkbox>
  </div>
`,ne={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:te,argTypes:{label:{control:"text"},"help-text":{control:"text"},"help-text-type":{control:"radio",options:Object.values(r)},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},"data-aria-label":{control:"text"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(G)},"toggletip-strategy":{control:"select",options:Object.values(Y)},"info-icon-aria-label":{control:"text"},...ee(["id","internals","validation-message","validity","willValidate"]),...J,...Q}},s={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,readonly:!1,"soft-disabled":!1,"data-aria-label":"Agree to all terms and conditions","help-text-type":r.DEFAULT}},i={args:{"data-aria-label":"This is a checkbox with no label","help-text-type":r.DEFAULT}},d={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails.","help-text-type":r.DEFAULT}},m={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0,"help-text-type":r.DEFAULT}},p={render:()=>l`
    <mdc-checkbox
      checked
      label="Alex Example"
      help-text="example.com"
      toggletip-text="This participant is connected from a video device."
      info-icon-aria-label="About Alex Example"
    >
      <mdc-avatar
        slot="leading-visual"
        size="32"
        src=${Z.avatar}
        presence=${j.ON_DEVICE}
      ></mdc-avatar>
    </mdc-checkbox>
  `,...k()},h={render:()=>l` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
        <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
      </div>
    </div>`},u={render:()=>l`
      <div role="main">
        <form @submit=${o=>{o.preventDefault();const y=new FormData(o.target).getAll("super-power");c("Form Submitted")({value:y})}}>
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
    `,...k()},b={render:e=>{const o=a=>{const t=Array.from(a.querySelectorAll('mdc-checkbox[name="super-power"]')).find(f=>f.hasAttribute("required"));return t?t.checked?(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","default"),!0):(t.setAttribute("help-text","Please select this required option"),t.setAttribute("help-text-type","error"),!1):!0};return l`
      <div role="main">
        <form @submit=${a=>{a.preventDefault();const n=a.target;if(!o(n))return;const f=new FormData(n).getAll("super-power");c("Form Submitted")({value:f})}} @reset=${a=>{const t=a.target.querySelector('mdc-checkbox[name="super-power"][required]');t&&(t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default"))}} novalidate>
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
    `},args:{"help-text":"","help-text-type":r.DEFAULT},...k()},x={decorators:[e=>{const o=document.createElement("style");return o.textContent=`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        mdc-checkbox:state(checked) { animation: fade-in 400ms ease-in-out; }
      `,document.head.appendChild(o),e()}],render:()=>l`
    <div role="main" style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="margin: 0; font-size: 0.875rem;">
        When checked, <code>mdc-checkbox:state(checked)</code> triggers a fade-in on the checkbox host element.
      </p>
      <mdc-checkbox label="Click me to see the fade-in animation"></mdc-checkbox>
    </div>
  `,...k()};var g,v,A;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var T,E,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,w,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var F,$,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true,
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var L,I,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-checkbox
      checked
      label="Alex Example"
      help-text="example.com"
      toggletip-text="This participant is connected from a video device."
      info-icon-aria-label="About Alex Example"
    >
      <mdc-avatar
        slot="leading-visual"
        size="32"
        src=\${imageFixtures.avatar}
        presence=\${PRESENCE_TYPE.ON_DEVICE}
      ></mdc-avatar>
    </mdc-checkbox>
  \`,
  ...hideAllControls()
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var V,B,_;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(B=h.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var H,U,R;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(U=u.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var z,N,M;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(N=b.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var P,K,W;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(K=x.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const se=["Example","WithoutLabel","HelperText","Indeterminate","LeadingVisual","DisabledVariants","FormField","FormFieldCheckboxWithHelpTextValidation","CustomStateChecked"];export{x as CustomStateChecked,h as DisabledVariants,s as Example,u as FormField,b as FormFieldCheckboxWithHelpTextValidation,d as HelperText,m as Indeterminate,p as LeadingVisual,i as WithoutLabel,se as __namedExportsOrder,ne as default};
