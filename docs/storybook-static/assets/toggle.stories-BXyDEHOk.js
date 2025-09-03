import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as p}from"./lit-element-D5KKan5q.js";import{t as f}from"./if-defined-D5BV9-c0.js";import"./index-CTDcjyVj.js";import{c as _,s as U}from"./commonArgTypes-BluK8w5L.js";import{a as j,t as B}from"./utils-CFOyPOhY.js";import"./index-C6YmrGgi.js";import{a as J}from"./popover.component-C-Xszb39.js";import{T as h,D as Z}from"./toggle.constants-Dzjyt1Wq.js";import"./v4-CQkTLCs1.js";import"./index-J6Uj5bTz.js";import"./iframe-DvrVLc6t.js";import"../sb-preview/runtime.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./provider.component-DrWB4byV.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-D2VIkDCb.js";import"./index-gAeEZUOB.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./buttonsimple.component-jROCF6tv.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./index-DXiMkxGd.js";import"./formfieldwrapper.component-BO2gGcYF.js";import"./button.constants-BBlkZKjZ.js";import"./button.component-DXfxhmBS.js";import"./button.utils-rNW36Ji7.js";const K=e=>p`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${d("onfocus")}"
    @change="${d("onchange")}"
    size="${e.size}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-text="${e["toggletip-text"]}"
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
`,Ce={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:K,parameters:{badges:["stable"]},argTypes:{size:{control:"inline-radio",options:Object.values(h)},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},"auto-focus-on-mount":{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(J)},"info-icon-aria-label":{control:"text"},...j(["help-text-type","id"]),...B(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-label-lineheight","--mdc-toggle-label-fontsize","--mdc-toggle-label-fontweight","--mdc-toggle-label-color-disabled","--mdc-toggle-help-text-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color"]),..._,...U}},r={args:{label:"Toggle label",checked:!1,size:Z.SIZE,disabled:!1,"help-text":""}},a={args:{...r.args,size:h.DEFAULT}},s={args:{...r.args,size:h.COMPACT}},i={args:{...r.args,"help-text":"helper text"}},n={render:e=>p` <div style="display: flex; flex-direction: column; gap: 5px">
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
    `},c={render:e=>{const x=(o,l)=>{const t=o.querySelector('mdc-toggle[name="toggleName"]'),{checked:b}=t;return l.required&&!b?(t.setAttribute("help-text","Please agree to the terms to continue"),t.setAttribute("help-text-type","error"),!1):(t.setAttribute("help-text","Looks good!"),t.setAttribute("help-text-type","success"),!0)};return p`
      <form @submit="${o=>{o.preventDefault();const l=o.target;if(!x(l,e))return;const b=new FormData(l).get("toggleName");d("Form Submitted")({value:b})}}" @reset="${o=>{const t=o.target.querySelector('mdc-toggle[name="toggleName"]');t.setAttribute("help-text",e["help-text"]||""),t.setAttribute("help-text-type",e["help-text-type"]||"default")}}" novalidate>
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
    `},args:{size:Z.SIZE,required:!0,"help-text":"","help-text-type":"default"}};var v,y,E;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    size: DEFAULTS.SIZE,
    disabled: false,
    'help-text': ''
  }
}`,...(E=(y=r.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var T,S,z;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,A,$;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...($=(A=s.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var F,L,q;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var k,N,V;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => html\` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var w,I,C;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var H,O,R;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(O=g.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,M,P;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const He=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm","ToggleInsideFormWithHelpTextValidation"];export{s as CompactSize,a as DefaultSize,n as Disabled,r as Example,g as ToggleInsideForm,c as ToggleInsideFormWithHelpTextValidation,i as WithHelperText,m as WithoutLabel,He as __namedExportsOrder,Ce as default};
