import{k as g}from"./iframe-Bc3u0Dmm.js";import{t as i}from"./if-defined-CMPxZ_UN.js";import"./index-CHrGyIb9.js";import{c as K,s as J}from"./commonArgTypes-BG7EqI50.js";import{h as Q,a as x}from"./utils-D6nie9pS.js";import"./index-DdrIhW8P.js";import{V as X}from"./ControlTypeMixin-DK9Egivu.js";import{P as ee,S as te}from"./popover.constants-BfagOuA7.js";import{T as S,D as y}from"./toggle.constants-QPCkVP4p.js";import"./preload-helper-C1FmrZbK.js";import"./index-CpcTMpyg.js";import"./index-NFN2GxWP.js";import"./index-DTrDRi1E.js";import"./index-Ckg95xFE.js";import"./base-DIkkzJ-c.js";import"./popover.component-ISmkTUPa.js";import"./BackdropMixin-C3tWoGkC.js";import"./index-ZpzHEXz7.js";import"./v4-CmTdKEVZ.js";import"./TabIndexMixin-BshATDlN.js";import"./buttonsimple.component-B4x4HCdF.js";import"./DisabledMixin-Dp3-nAOW.js";import"./DataAriaLabelMixin-DbJjtqsW.js";import"./FormInternalsMixin-CNq_SDD0.js";import"./query-BPxBhMfF.js";import"./index-4rthyzqf.js";import"./formfieldwrapper.component-CLHml2R1.js";import"./formfieldwrapper.constants-DT4B2rRe.js";import"./button.component-BBLcEPOq.js";import"./button.utils-rNW36Ji7.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,oe=e=>g`
  <div role="main">
    <mdc-toggle
      name="${i(e.name)}"
      value="${i(e.value)}"
      @focus="${o("onfocus")}"
      @change="${o("onchange")}"
      @keydown="${o("onkeydown")}"
      @click="${o("onclick")}"
      size="${e.size}"
      control-type="${i(e["control-type"])}"
      toggletip-text="${e["toggletip-text"]}"
      toggletip-placement="${e["toggletip-placement"]}"
      toggletip-strategy="${e["toggletip-strategy"]}"
      info-icon-aria-label="${e["info-icon-aria-label"]}"
      label="${i(e.label)}"
      help-text="${i(e["help-text"])}"
      data-aria-label="${i(e["data-aria-label"])}"
      ?checked="${e.checked}"
      ?required="${e.required}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      ?disabled="${e.disabled}"
      ?readonly="${e.readonly}"
      ?soft-disabled="${e["soft-disabled"]}"
    >
    </mdc-toggle>
  </div>
`,Ve={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:oe,argTypes:{size:{control:"inline-radio",options:Object.values(S)},checked:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},"control-type":{control:"select",options:[void 0,...X]},label:{control:"text"},"help-text":{control:"text"},"auto-focus-on-mount":{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(ee)},"toggletip-strategy":{control:"select",options:Object.values(te)},"info-icon-aria-label":{control:"text"},...Q(["help-text-type","id","validation-message","validity","willValidate"]),...K,...J}},a={args:{name:"toggleName",value:"toggleValue",label:"Toggle label",checked:!1,size:y.SIZE,disabled:!1,readonly:!1,"soft-disabled":!1,"help-text":""}},d={args:{...a.args,size:S.DEFAULT}},m={args:{...a.args,size:S.COMPACT}},p={args:{...a.args,"help-text":"helper text"}},u={args:{size:y.SIZE},render:e=>g`
      <div role="main">
        <div style="display: flex; flex-direction: column; gap: 5px">
          <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
          <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
        </div>
      </div>
    `},h={args:{...a.args,label:void 0,"data-aria-label":"This is a toggle with no label"}},b={args:{size:y.SIZE},render:e=>g`
      <div role="main">
        <form @submit="${n=>{n.preventDefault();const t=new FormData(n.target).get("toggleName");o("Form Submitted")({value:t})}}">
          <fieldset>
            <legend>Form Example</legend>
            <mdc-toggle
              name="toggleName"
              value="toggleValue"
              label="Agree to Terms"
              size="${e.size}"
              required
              validation-message="Toggle this switch to continue"
            ></mdc-toggle>
            <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </fieldset>
        </form>
      </div>
    `,...x()},f={render:e=>{const c=(t,s)=>{const l=t.querySelector('mdc-toggle[name="toggleName"]'),{checked:T}=l;return s.required&&!T?(l.setAttribute("help-text","Please agree to the terms to continue"),l.setAttribute("help-text-type","error"),!1):(l.setAttribute("help-text","Looks good!"),l.setAttribute("help-text-type","success"),!0)};return g`
      <div role="main">
        <form @submit="${t=>{t.preventDefault();const s=t.target;if(!c(s,e))return;const T=new FormData(s).get("toggleName");o("Form Submitted")({value:T})}}" @reset="${t=>{const l=t.target.querySelector('mdc-toggle[name="toggleName"]');l.setAttribute("help-text",e["help-text"]||""),l.setAttribute("help-text-type",e["help-text-type"]||"default")}}" novalidate>
          <fieldset>
            <legend>Form Example With Dynamic Help Text</legend>
            <mdc-toggle
              name="toggleName"
              value="toggleValue"
              label="Agree to Terms"
              size="${e.size}"
              required
            ></mdc-toggle>
            <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </fieldset>
        </form>
      </div>
    `},args:{size:y.SIZE,required:!0,"help-text":"","help-text-type":"default"},...x()},v={render:()=>g`
      <div role="main" style="padding: 1rem;">
        <h3>Controlled Toggle with Confirmation Dialog</h3>
        <p>
          This toggle uses <code>control-type="controlled"</code>. Try clicking it and you'll see a
          confirmation dialog.
        </p>
        <mdc-toggle
          control-type="controlled"
          label="Controlled: Requires confirmation for any change"
          help-text="Dispatches change event but doesn't update state. Parent handles confirmation."
          @change="${c=>{const n=c.target,r=!n.checked,t=r?"Enable this setting?":"Are you sure you want to disable this setting?";o("Toggle Change Attempted")({currentState:n.checked,attemptedState:r}),confirm(t)?(n.checked=r,o(r?"Toggle Enabled":"Toggle Disabled")({confirmed:!0})):o("Toggle Change Cancelled")({confirmed:!1})}}"
        ></mdc-toggle>

        <h3 style="margin-top: 2rem;">Uncontrolled Toggle (Default)</h3>
        <mdc-toggle
          label="Uncontrolled: Changes state immediately"
          help-text="Manages its own state and updates immediately when clicked"
          @change="${o("Uncontrolled Toggle Changed")}"
        ></mdc-toggle>
      </div>
    `,...x()};var E,z,A;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: 'toggleName',
    value: 'toggleValue',
    label: 'Toggle label',
    checked: false,
    size: DEFAULTS.SIZE,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    'help-text': ''
  }
}`,...(A=(z=a.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,$,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(C=($=d.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var k,F,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(w=(F=m.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var L,V,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var I,N,O;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  },
  render: args => html\`
      <div role="main">
        <div style="display: flex; flex-direction: column; gap: 5px">
          <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
          <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
        </div>
      </div>
    \`
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,R,_;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    label: undefined,
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(_=(R=h.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var Z,H,M;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE
  },
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
      <div role="main">
        <form @submit="\${onSubmit}">
          <fieldset>
            <legend>Form Example</legend>
            <mdc-toggle
              name="toggleName"
              value="toggleValue"
              label="Agree to Terms"
              size="\${args.size}"
              required
              validation-message="Toggle this switch to continue"
            ></mdc-toggle>
            <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </fieldset>
        </form>
      </div>
    \`;
  },
  ...hideAllControls()
}`,...(M=(H=b.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,W,G;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const validateToggle = (form: HTMLFormElement, args: any): boolean => {
      const toggleEl = form.querySelector('mdc-toggle[name="toggleName"]') as Toggle;
      const {
        checked
      } = toggleEl;
      if (args.required && !checked) {
        toggleEl.setAttribute('help-text', 'Please agree to the terms to continue');
        toggleEl.setAttribute('help-text-type', 'error');
        return false;
      }
      toggleEl.setAttribute('help-text', 'Looks good!');
      toggleEl.setAttribute('help-text-type', 'success');
      return true;
    };
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateToggle(form, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    const onReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const toggleEl = form.querySelector('mdc-toggle[name="toggleName"]') as Toggle;
      toggleEl.setAttribute('help-text', args['help-text'] || '');
      toggleEl.setAttribute('help-text-type', args['help-text-type'] || 'default');
    };
    return html\`
      <div role="main">
        <form @submit="\${onSubmit}" @reset="\${onReset}" novalidate>
          <fieldset>
            <legend>Form Example With Dynamic Help Text</legend>
            <mdc-toggle
              name="toggleName"
              value="toggleValue"
              label="Agree to Terms"
              size="\${args.size}"
              required
            ></mdc-toggle>
            <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </fieldset>
        </form>
      </div>
    \`;
  },
  args: {
    size: DEFAULTS.SIZE,
    required: true,
    'help-text': '',
    'help-text-type': 'default'
  },
  ...hideAllControls()
}`,...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var j,Y,B;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const handleToggleChange = (event: Event) => {
      const toggle = event.target as Toggle;
      const newState = !toggle.checked;
      const message = newState ? 'Enable this setting?' : 'Are you sure you want to disable this setting?';
      action('Toggle Change Attempted')({
        currentState: toggle.checked,
        attemptedState: newState
      });

      // eslint-disable-next-line no-alert, no-restricted-globals
      const confirmed = confirm(message);
      if (confirmed) {
        toggle.checked = newState;
        action(newState ? 'Toggle Enabled' : 'Toggle Disabled')({
          confirmed: true
        });
      } else {
        action('Toggle Change Cancelled')({
          confirmed: false
        });
      }
    };
    return html\`
      <div role="main" style="padding: 1rem;">
        <h3>Controlled Toggle with Confirmation Dialog</h3>
        <p>
          This toggle uses <code>control-type="controlled"</code>. Try clicking it and you'll see a
          confirmation dialog.
        </p>
        <mdc-toggle
          control-type="controlled"
          label="Controlled: Requires confirmation for any change"
          help-text="Dispatches change event but doesn't update state. Parent handles confirmation."
          @change="\${handleToggleChange}"
        ></mdc-toggle>

        <h3 style="margin-top: 2rem;">Uncontrolled Toggle (Default)</h3>
        <mdc-toggle
          label="Uncontrolled: Changes state immediately"
          help-text="Manages its own state and updates immediately when clicked"
          @change="\${action('Uncontrolled Toggle Changed')}"
        ></mdc-toggle>
      </div>
    \`;
  },
  ...hideAllControls()
}`,...(B=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};const qe=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm","ToggleInsideFormWithHelpTextValidation","ControlledToggleWithConfirmation"];export{m as CompactSize,v as ControlledToggleWithConfirmation,d as DefaultSize,u as Disabled,a as Example,b as ToggleInsideForm,f as ToggleInsideFormWithHelpTextValidation,p as WithHelperText,h as WithoutLabel,qe as __namedExportsOrder,Ve as default};
