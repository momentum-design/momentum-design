import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as m}from"./lit-element-D5KKan5q.js";import{t as n}from"./if-defined-D5BV9-c0.js";import"./index-DuA-DV1m.js";import{c as V,s as q}from"./commonArgTypes-BluK8w5L.js";import{h as G,t as N}from"./utils-CF1irry3.js";import"./index-D0GW8FnA.js";import{P}from"./popover.component-b3MZdLOz.js";import{T as g,D as _}from"./toggle.constants-CdQimcHL.js";import"./v4-CQkTLCs1.js";import"./index-ewT5CF46.js";import"./iframe-BNsfsY0w.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-BrLJ_9IK.js";import"./index-_Nf1vLd4.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./roles-BH_hBfTz.js";import"./index-Br_IBuGe.js";import"./formfieldwrapper.component-D6q8AeiS.js";import"./DisabledMixin-BZruwOeC.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./button.component-DLvLGT3A.js";import"./buttonsimple.component-q2YakOka.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";const Z=e=>m`
  <mdc-toggle
    name="toggleName"
    value="toggleValue"
    @focus="${c("onfocus")}"
    @change="${c("onchange")}"
    size="${e.size}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-text="${e["toggletip-text"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    label="${n(e.label)}"
    help-text="${n(e["help-text"])}"
    data-aria-label="${n(e["data-aria-label"])}"
    ?checked="${e.checked}"
    ?required="${e.required}"
    ?autofocus="${e.autofocus}"
    ?disabled="${e.disabled}"
  >
  </mdc-toggle>
`,Fe={title:"Components/toggle",tags:["autodocs"],component:"mdc-toggle",render:Z,parameters:{badges:["stable"]},argTypes:{size:{control:"inline-radio",options:Object.values(g)},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},"help-text":{control:"text"},autofocus:{control:"boolean"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(P)},"info-icon-aria-label":{control:"text"},...G(["help-text-type","id"]),...N(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-label-lineheight","--mdc-toggle-label-fontsize","--mdc-toggle-label-fontweight","--mdc-toggle-label-color-disabled","--mdc-toggle-help-text-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color"]),...V,...q}},t={args:{label:"Toggle label",checked:!1,size:_.SIZE,disabled:!1,autofocus:!1,"help-text":""}},o={args:{...t.args,size:g.DEFAULT}},a={args:{...t.args,size:g.COMPACT}},r={args:{...t.args,"help-text":"helper text"}},l={render:e=>m` <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${e.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${e.size}"></mdc-toggle>
    </div>`},s={args:{"data-aria-label":"This is a toggle with no label"}},i={render:e=>m`
      <form @submit="${d=>{d.preventDefault();const I=new FormData(d.target).get("toggleName");c("Form Submitted")({value:I})}}">
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
    autofocus: false,
    'help-text': ''
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,z,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Ae=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","ToggleInsideForm"];export{a as CompactSize,o as DefaultSize,l as Disabled,t as Example,i as ToggleInsideForm,r as WithHelperText,s as WithoutLabel,Ae as __namedExportsOrder,Fe as default};
