import{k as p}from"./iframe-DbFhe1C8.js";import{t as f}from"./if-defined-D0TzS11l.js";import"./index-DQ9gAo0t.js";import{c as Z,s as U}from"./commonArgTypes-BluK8w5L.js";import{a as j,t as Y}from"./utils-CFOyPOhY.js";import"./index-DyUOsQox.js";import{P as B,S as K}from"./popover.component-Evq03FS9.js";import{T as h,D as W}from"./toggle.constants-aW_kF10n.js";import"./preload-helper-C1FmrZbK.js";import"./index-wwme6ITP.js";import"./index-CdiuGzo8.js";import"./index-CO0us3Ia.js";import"./index-DTrDRi1E.js";import"./index-BnjtOTfP.js";import"./index-ByPqDEhQ.js";import"./index-DW9wG8BE.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./buttonsimple.component-DXSlxVmF.js";import"./DisabledMixin--7NqFN-A.js";import"./TabIndexMixin-cqZr-zGd.js";import"./buttonsimple.constants-Bv0Py8O9.js";import"./roles-CJI3JVG-.js";import"./DataAriaLabelMixin-DtwoeGMi.js";import"./FormInternalsMixin-BHLJ3gDi.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./index-BHt2iRmc.js";import"./formfieldwrapper.component-C8gtv1jz.js";import"./button.constants-qgaQHYJd.js";import"./button.component-t35ApAkT.js";import"./button.utils-rNW36Ji7.js";import"./BackdropMixin-HyPJ6UeR.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,J=e=>p`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${d("onfocus")}"
    @change="${d("onchange")}"
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
  >
  </mdc-toggle>
`,Oe={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:J,argTypes:{size:{control:"inline-radio",options:Object.values(h)},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},"auto-focus-on-mount":{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(B)},"toggletip-strategy":{control:"select",options:Object.values(K)},"info-icon-aria-label":{control:"text"},...j(["help-text-type","id"]),...Y(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-label-lineheight","--mdc-toggle-label-fontsize","--mdc-toggle-label-fontweight","--mdc-toggle-label-color-disabled","--mdc-toggle-help-text-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color"]),...Z,...U}},l={args:{label:"Toggle label",checked:!1,size:W.SIZE,disabled:!1,"help-text":""}},a={args:{...l.args,size:h.DEFAULT}},s={args:{...l.args,size:h.COMPACT}},n={args:{...l.args,"help-text":"helper text"}},i={render:e=>p` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},m={args:{"data-aria-label":"This is a toggle with no label"}},g={render:e=>p`
      <form @submit="${u=>{u.preventDefault();const o=new FormData(u.target).get("toggleName");d("Form Submitted")({value:o})}}">
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
    `},c={render:e=>{const x=(o,r)=>{const t=o.querySelector('mdc-toggle[name="toggleName"]'),{checked:b}=t;return r.required&&!b?(t.setAttribute("help-text","Please agree to the terms to continue"),t.setAttribute("help-text-type","error"),!1):(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","success"),!0)};return p`
      <form @submit="${o=>{o.preventDefault();const r=o.target;if(!x(r,e))return;const b=new FormData(r).get("toggleName");d("Form Submitted")({value:b})}}" @reset="${o=>{const t=o.target.querySelector('mdc-toggle[name="toggleName"]');t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default")}}" novalidate>
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
    `},args:{size:W.SIZE,required:!0,"help-text":"","help-text-type":"default"}};var v,y,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    size: DEFAULTS.SIZE,
    disabled: false,
    'help-text': ''
  }
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var T,S,z;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var A,D,$;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...($=(D=s.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var F,L,q;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(q=(L=n.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var O,N,k;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => html\` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(k=(N=i.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var V,I,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,w,C;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(w=g.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var H,M,P;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Ne=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm","ToggleInsideFormWithHelpTextValidation"];export{s as CompactSize,a as DefaultSize,i as Disabled,l as Example,g as ToggleInsideForm,c as ToggleInsideFormWithHelpTextValidation,n as WithHelperText,m as WithoutLabel,Ne as __namedExportsOrder,Oe as default};
