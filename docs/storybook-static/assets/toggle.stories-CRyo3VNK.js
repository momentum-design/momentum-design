import{k as u}from"./iframe-E1lunX_E.js";import{t as s}from"./if-defined-CeOZCovI.js";import"./index-B82n25ai.js";import{c as G,s as j}from"./commonArgTypes-BG7EqI50.js";import{h as Y,a as U}from"./utils-D6nie9pS.js";import"./index-4XAof5NQ.js";import{P as B,S as K}from"./popover.constants-COEDd5UF.js";import{T as h,D as b}from"./toggle.constants-BuI8R28t.js";import"./preload-helper-C1FmrZbK.js";import"./index-D_vVtYUN.js";import"./index-T1WrLezj.js";import"./index-DTrDRi1E.js";import"./index-eIMx10hO.js";import"./base-DIkkzJ-c.js";import"./popover.component-oiHJ_bnY.js";import"./BackdropMixin-DtZZ-ijw.js";import"./index-CabWCfBv.js";import"./v4-CmTdKEVZ.js";import"./TabIndexMixin-EvA1cca2.js";import"./buttonsimple.component-tAMGZA2K.js";import"./DisabledMixin-DutBLYdm.js";import"./DataAriaLabelMixin-Sr3iQzQE.js";import"./FormInternalsMixin-BdeCmsy_.js";import"./query-BPxBhMfF.js";import"./index-C6BFb9wc.js";import"./formfieldwrapper.component-BEvotpjQ.js";import"./formfieldwrapper.constants-DG5De6w4.js";import"./button.component-D4S8tPM8.js";import"./button.utils-rNW36Ji7.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,J=e=>u`
  <div role="main">
    <mdc-toggle
      name="${s(e.name)}"
      value="${s(e.value)}"
      @focus="${l("onfocus")}"
      @change="${l("onchange")}"
      @keydown="${l("onkeydown")}"
      @click="${l("onclick")}"
      size="${e.size}"
      toggletip-text="${e["toggletip-text"]}"
      toggletip-placement="${e["toggletip-placement"]}"
      toggletip-strategy="${e["toggletip-strategy"]}"
      info-icon-aria-label="${e["info-icon-aria-label"]}"
      label="${s(e.label)}"
      help-text="${s(e["help-text"])}"
      data-aria-label="${s(e["data-aria-label"])}"
      ?checked="${e.checked}"
      ?required="${e.required}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      ?disabled="${e.disabled}"
      ?readonly="${e.readonly}"
      ?soft-disabled="${e["soft-disabled"]}"
    >
    </mdc-toggle>
  </div>
`,De={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:J,argTypes:{size:{control:"inline-radio",options:Object.values(h)},checked:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},"auto-focus-on-mount":{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(B)},"toggletip-strategy":{control:"select",options:Object.values(K)},"info-icon-aria-label":{control:"text"},...Y(["help-text-type","id","validation-message","validity","willValidate"]),...G,...j}},a={args:{name:"toggleName",value:"toggleValue",label:"Toggle label",checked:!1,size:b.SIZE,disabled:!1,readonly:!1,"soft-disabled":!1,"help-text":""}},n={args:{...a.args,size:h.DEFAULT}},i={args:{...a.args,size:h.COMPACT}},m={args:{...a.args,"help-text":"helper text"}},g={args:{size:b.SIZE},render:e=>u`
      <div role="main">
        <div style="display: flex; flex-direction: column; gap: 5px">
          <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
          <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
        </div>
      </div>
    `},d={args:{...a.args,label:void 0,"data-aria-label":"This is a toggle with no label"}},c={args:{size:b.SIZE},render:e=>u`
      <div role="main">
        <form @submit="${f=>{f.preventDefault();const o=new FormData(f.target).get("toggleName");l("Form Submitted")({value:o})}}">
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
            <div style="display: flex; gap: 0.25rem">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </fieldset>
        </form>
      </div>
    `,...U()},p={render:e=>{const x=(o,r)=>{const t=o.querySelector('mdc-toggle[name="toggleName"]'),{checked:v}=t;return r.required&&!v?(t.setAttribute("help-text","Please agree to the terms to continue"),t.setAttribute("help-text-type","error"),!1):(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","success"),!0)};return u`
      <div role="main">
        <form @submit="${o=>{o.preventDefault();const r=o.target;if(!x(r,e))return;const v=new FormData(r).get("toggleName");l("Form Submitted")({value:v})}}" @reset="${o=>{const t=o.target.querySelector('mdc-toggle[name="toggleName"]');t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default")}}" novalidate>
          <fieldset>
            <legend>Form Example With Dynamic Help Text</legend>
            <mdc-toggle
              name="toggleName"
              value="toggleValue"
              label="Agree to Terms"
              size="${e.size}"
              required
            ></mdc-toggle>
            <div style="display: flex; gap: 0.25rem">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </fieldset>
        </form>
      </div>
    `},args:{size:b.SIZE,required:!0,"help-text":"","help-text-type":"default"},...U()};var y,E,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var T,z,A;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(A=(z=n.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var $,D,F;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var L,k,q;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var I,N,O;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,C,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    label: undefined,
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var _,w,Z;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
            <div style="display: flex; gap: 0.25rem">
              <mdc-button type="submit" size="24">Submit</mdc-button>
              <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
            </div>
          </fieldset>
        </form>
      </div>
    \`;
  },
  ...hideAllControls()
}`,...(Z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:Z.source}}};var H,M,P;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
            <div style="display: flex; gap: 0.25rem">
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
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Fe=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm","ToggleInsideFormWithHelpTextValidation"];export{i as CompactSize,n as DefaultSize,g as Disabled,a as Example,c as ToggleInsideForm,p as ToggleInsideFormWithHelpTextValidation,m as WithHelperText,d as WithoutLabel,Fe as __namedExportsOrder,De as default};
