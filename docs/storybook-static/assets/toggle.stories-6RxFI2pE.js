import{k as p}from"./iframe-smnB6toM.js";import{t as f}from"./if-defined-CkowoNDe.js";import"./index-Dto3_WDm.js";import{c as Z,s as U}from"./commonArgTypes-BluK8w5L.js";import{a as j}from"./utils-Dd_sfl9-.js";import"./index-C71JLKW4.js";import{P as Y,S as B}from"./popover.component-CpI-fa7g.js";import{T as x,D as W}from"./toggle.constants-BGweVPdX.js";import"./preload-helper-C1FmrZbK.js";import"./index-MgEYcR_f.js";import"./index-Dg-WFu4P.js";import"./index-DTrDRi1E.js";import"./index-O5VGaaRA.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./base-DIkkzJ-c.js";import"./index-FyCLCGby.js";import"./v4-CmTdKEVZ.js";import"./TabIndexMixin-CEnaSXUN.js";import"./buttonsimple.component-DEAZgpYK.js";import"./DisabledMixin-COaDUKdG.js";import"./DataAriaLabelMixin-woJJ8Erw.js";import"./FormInternalsMixin-yiT4tHLR.js";import"./query-DXShiZ7f.js";import"./index-C8jxw6o_.js";import"./formfieldwrapper.component-BNzk5Kg_.js";import"./formfieldwrapper.constants-CGQVMaBE.js";import"./button.component-D9_PmuOu.js";import"./button.utils-rNW36Ji7.js";import"./BackdropMixin-CoDiFpRA.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,K=e=>p`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${l("onfocus")}"
    @change="${l("onchange")}"
    @keydown="${l("onkeydown")}"
    @click="${l("onclick")}"
    size="${e.size}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    label="${f(e.label)}"
    help-text="${f(e["help-text"])}"
    data-aria-label="${f(e["data-aria-label"])}"
    ?checked="${e.checked}"
    ?required="${e.required}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?soft-disabled="${e["soft-disabled"]}"
  >
  </mdc-toggle>
`,Ae={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:K,argTypes:{size:{control:"inline-radio",options:Object.values(x)},checked:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},"auto-focus-on-mount":{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(Y)},"toggletip-strategy":{control:"select",options:Object.values(B)},"info-icon-aria-label":{control:"text"},...j(["help-text-type","id"]),...Z,...U}},a={args:{label:"Toggle label",checked:!1,size:W.SIZE,disabled:!1,readonly:!1,"soft-disabled":!1,"help-text":""}},s={args:{...a.args,size:x.DEFAULT}},n={args:{...a.args,size:x.COMPACT}},i={args:{...a.args,"help-text":"helper text"}},m={render:e=>p` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},c={args:{"data-aria-label":"This is a toggle with no label"}},g={render:e=>p`
      <form @submit="${u=>{u.preventDefault();const o=new FormData(u.target).get("toggleName");l("Form Submitted")({value:o})}}">
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
    `},d={render:e=>{const h=(o,r)=>{const t=o.querySelector('mdc-toggle[name="toggleName"]'),{checked:b}=t;return r.required&&!b?(t.setAttribute("help-text","Please agree to the terms to continue"),t.setAttribute("help-text-type","error"),!1):(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","success"),!0)};return p`
      <form @submit="${o=>{o.preventDefault();const r=o.target;if(!h(r,e))return;const b=new FormData(r).get("toggleName");l("Form Submitted")({value:b})}}" @reset="${o=>{const t=o.target.querySelector('mdc-toggle[name="toggleName"]');t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default")}}" novalidate>
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
    `},args:{size:W.SIZE,required:!0,"help-text":"","help-text-type":"default"}};var y,v,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    size: DEFAULTS.SIZE,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    'help-text': ''
  }
}`,...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var T,S,z;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var $,A,D;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,k,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var q,O,N;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => html\` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(N=(O=m.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var V,I,R;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,w,C;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    \`;
  }
}`,...(C=(w=g.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var H,M,P;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    \`;
  },
  args: {
    size: DEFAULTS.SIZE,
    required: true,
    'help-text': '',
    'help-text-type': 'default'
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const De=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm","ToggleInsideFormWithHelpTextValidation"];export{n as CompactSize,s as DefaultSize,m as Disabled,a as Example,g as ToggleInsideForm,d as ToggleInsideFormWithHelpTextValidation,i as WithHelperText,c as WithoutLabel,De as __namedExportsOrder,Ae as default};
