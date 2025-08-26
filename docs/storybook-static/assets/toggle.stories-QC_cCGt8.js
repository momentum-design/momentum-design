import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as c}from"./lit-element-D5KKan5q.js";import{t as n}from"./if-defined-D5BV9-c0.js";import"./index-CMxRyW_4.js";import{c as V,s as q}from"./commonArgTypes-BluK8w5L.js";import{a as G,t as N}from"./utils-CFOyPOhY.js";import"./index-CSxZp6qf.js";import{a as _}from"./popover.component-CWSuSUni.js";import{T as g,D as P}from"./toggle.constants-r1of4vm5.js";import"./v4-CQkTLCs1.js";import"./index-D6YxUDcd.js";import"./iframe-Dzy9pE1X.js";import"../sb-preview/runtime.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./provider.component-DrWB4byV.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-DeEenWCE.js";import"./index-Dgg11LW0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./buttonsimple.component-DgtnjMrJ.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./index-CHyHQU_3.js";import"./formfieldwrapper.component-BfkD1w96.js";import"./button.constants-BBlkZKjZ.js";import"./button.component-B08yfJ7f.js";import"./button.utils-rNW36Ji7.js";const Z=e=>c`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${m("onfocus")}"
    @change="${m("onchange")}"
    size="${e.size}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-text="${e["toggletip-text"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    label="${n(e.label)}"
    help-text="${n(e["help-text"])}"
    data-aria-label="${n(e["data-aria-label"])}"
    ?checked="${e.checked}"
    ?required="${e.required}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    ?disabled="${e.disabled}"
  >
  </mdc-toggle>
`,Le={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:Z,parameters:{badges:["stable"]},argTypes:{size:{control:"inline-radio",options:Object.values(g)},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},"auto-focus-on-mount":{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(_)},"info-icon-aria-label":{control:"text"},...G(["help-text-type","id"]),...N(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-label-lineheight","--mdc-toggle-label-fontsize","--mdc-toggle-label-fontweight","--mdc-toggle-label-color-disabled","--mdc-toggle-help-text-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color"]),...V,...q}},t={args:{label:"Toggle label",checked:!1,size:P.SIZE,disabled:!1,"help-text":""}},o={args:{...t.args,size:g.DEFAULT}},a={args:{...t.args,size:g.COMPACT}},r={args:{...t.args,"help-text":"helper text"}},l={render:e=>c` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},s={args:{"data-aria-label":"This is a toggle with no label"}},i={render:e=>c`
      <form @submit="${d=>{d.preventDefault();const I=new FormData(d.target).get("toggleName");m("Form Submitted")({value:I})}}">
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
    `};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    size: DEFAULTS.SIZE,
    disabled: false,
    'help-text': ''
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,z,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(T=(z=a.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var S,E,$;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...($=(E=r.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var y,D,F;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var A,L,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(C=(L=s.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var O,k,w;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Ce=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm"];export{a as CompactSize,o as DefaultSize,l as Disabled,t as Example,i as ToggleInsideForm,r as WithHelperText,s as WithoutLabel,Ce as __namedExportsOrder,Le as default};
