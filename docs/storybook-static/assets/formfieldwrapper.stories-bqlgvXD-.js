import"./index-DBVEzXBt.js";import{k as t}from"./iframe-5RFEiZ85.js";import{Q as y}from"./repeat-CZSP_yaY.js";import{c as T,s as v}from"./commonArgTypes-BluK8w5L.js";import{d as w}from"./utils-CFOyPOhY.js";import{P as C,S as $}from"./popover.component-0XdmZfJe.js";import{F as L,V as h}from"./formfieldwrapper.component-Ba7C2QCM.js";import"./index-vXoKIu_l.js";import"./button.component-CpNqFzrf.js";import"./button.constants-mviOTe3v.js";import"./buttonsimple.constants-DnKeL5S2.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-OOqBkiLH.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BzeozoI6.js";import"./TabIndexMixin-If-29Q9p.js";import"./index-BldB1hzz.js";import"./button.utils-rNW36Ji7.js";import"./index-BAamgs9z.js";import"./preload-helper-C1FmrZbK.js";import"./index-DHmKhpvb.js";import"./index-DTrDRi1E.js";import"./index-DmZ0oACR.js";import"./index-NF4Dsba4.js";import"./if-defined-C_QIaKNN.js";import"./index-B4qVyqT-.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-CSzzhPL5.js";class q extends L{render(){return t`
      ${this.renderLabel()}
      <slot></slot>
      ${this.renderHelperText()}
    `}}q.register("mdc-subcomponent-formfieldwrapper");const H=e=>t` <mdc-subcomponent-formfieldwrapper
    label="${e.label}"
    ?disabled="${e.disabled}"
    ?required="${e.required}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
  >
    ${e.children}
  </mdc-subcomponent-formfieldwrapper>`,re={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:H,argTypes:{...T,...v,"help-text-type":{control:"select",options:Object.values(h)},id:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},disabled:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(C)},"toggletip-strategy":{control:"select",options:Object.values($)},"info-icon-aria-label":{control:"text"}}},o={args:{label:"Label","help-text":"Helper text","help-text-type":"default",children:"[Child Component]",required:!0,disabled:!1,"toggletip-text":"toggletip text","info-icon-aria-label":"Info icon aria label"}},l={render:()=>t`
    <div style="width: 170px;">
      <mdc-subcomponent-formfieldwrapper
        style="width: 100%"
        label="This is a long label text"
        help-text="Helper text"
        help-text-type="default"
        required
      >
        [Child Component]
      </mdc-subcomponent-formfieldwrapper>
    </div>
  `,argTypes:{...w(["label","help-text","help-text-type","required","id","disabled"])}},r={render:()=>t` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${y(Object.values(h),e=>t`
          <mdc-subcomponent-formfieldwrapper
            help-text-type="${e}"
            label="Label"
            help-text="Helper text"
            toggletip-text="toggletip text"
            info-icon-aria-label="Info icon aria label"
          >
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        `)}
    </div>`},i={render:()=>t`
    <mdc-subcomponent-formfieldwrapper label="Label" help-text="Helper text" help-text-type="default" required>
      <mdc-button
        id="toggletip-btn"
        slot="toggletip"
        prefix-icon="info-badge-filled"
        aria-label="Info icon aria label"
        variant="tertiary"
        size="20"
      ></mdc-button>
      <mdc-toggletip slot="toggletip" triggerid="toggletip-btn">
        This is a toggletip text provided in the slot
      </mdc-toggletip>
      [Child Component]
    </mdc-subcomponent-formfieldwrapper>
  `};var p,n,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]',
    required: true,
    disabled: false,
    'toggletip-text': 'toggletip text',
    'info-icon-aria-label': 'Info icon aria label'
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var d,s,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 170px;">
      <mdc-subcomponent-formfieldwrapper
        style="width: 100%"
        label="This is a long label text"
        help-text="Helper text"
        help-text-type="default"
        required
      >
        [Child Component]
      </mdc-subcomponent-formfieldwrapper>
    </div>
  \`,
  argTypes: {
    ...disableControls(['label', 'help-text', 'help-text-type', 'required', 'id', 'disabled'])
  }
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,g,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-subcomponent-formfieldwrapper
            help-text-type="\${validation}"
            label="Label"
            help-text="Helper text"
            toggletip-text="toggletip text"
            info-icon-aria-label="Info icon aria label"
          >
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        \`)}
    </div>\`
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,x,u;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-subcomponent-formfieldwrapper label="Label" help-text="Helper text" help-text-type="default" required>
      <mdc-button
        id="toggletip-btn"
        slot="toggletip"
        prefix-icon="info-badge-filled"
        aria-label="Info icon aria label"
        variant="tertiary"
        size="20"
      ></mdc-button>
      <mdc-toggletip slot="toggletip" triggerid="toggletip-btn">
        This is a toggletip text provided in the slot
      </mdc-toggletip>
      [Child Component]
    </mdc-subcomponent-formfieldwrapper>
  \`
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const ie=["Example","LongLabelText","HelperTextTypes","WithSlottedToggletip"];export{o as Example,r as HelperTextTypes,l as LongLabelText,i as WithSlottedToggletip,ie as __namedExportsOrder,re as default};
