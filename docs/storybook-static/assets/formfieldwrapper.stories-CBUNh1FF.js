import"./index-BpdLI1YF.js";import{k as t}from"./lit-element-D5KKan5q.js";import{Q as u}from"./repeat-CNQ7t7Vw.js";import{c as f,s as h}from"./commonArgTypes-BluK8w5L.js";import{d as y}from"./utils-CO8B6ZcN.js";import{F as w,V as x}from"./formfieldwrapper.component-DWkrE3Yi.js";import"./index-CjvXDYhD.js";import"./iframe-CggEXcgM.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./DisabledMixin-BZruwOeC.js";class T extends w{render(){return t`
          ${this.renderLabel()}
          <slot></slot>
          ${this.renderHelperText()}
        `}}T.register("mdc-subcomponent-formfieldwrapper");const v=e=>t` <mdc-subcomponent-formfieldwrapper
    label="${e.label}"
    ?disabled="${e.disabled}"
    required-label="${e["required-label"]}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    >
    ${e.children}
    </mdc-subcomponent-formfieldwrapper>`,z={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:v,parameters:{badges:["internal"]},argTypes:{...f,...h,"help-text-type":{control:"select",options:Object.values(x)},id:{control:"text"},label:{control:"text"},"required-label":{control:"text"},"help-text":{control:"text"},disabled:{control:"boolean"}}},r={args:{label:"Label","help-text":"Helper text","help-text-type":"default",children:"[Child Component]","required-label":"required",disabled:!1}},l={render:()=>t`
  <div style="width: 170px;">
    <mdc-subcomponent-formfieldwrapper
      style="width: 100%"
      label="This is a long label text"
      help-text="Helper text"
      help-text-type="default"
      required-label="required">
      [Child Component]
    </mdc-subcomponent-formfieldwrapper>
    </div>
  `,argTypes:{...y(["label","help-text","help-text-type","required-label","id","disabled"])}},p={render:()=>t` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${u(Object.values(x),e=>t`
          <mdc-subcomponent-formfieldwrapper help-text-type="${e}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        `)}
    </div>`};var o,a,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]',
    'required-label': 'required',
    disabled: false
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var i,n,s;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
  <div style="width: 170px;">
    <mdc-subcomponent-formfieldwrapper
      style="width: 100%"
      label="This is a long label text"
      help-text="Helper text"
      help-text-type="default"
      required-label="required">
      [Child Component]
    </mdc-subcomponent-formfieldwrapper>
    </div>
  \`,
  argTypes: {
    ...disableControls(['label', 'help-text', 'help-text-type', 'required-label', 'id', 'disabled'])
  }
}`,...(s=(n=l.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,c,b;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-subcomponent-formfieldwrapper help-text-type="\${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        \`)}
    </div>\`
}`,...(b=(c=p.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const B=["Example","LongLabelText","HelperTextTypes"];export{r as Example,p as HelperTextTypes,l as LongLabelText,B as __namedExportsOrder,z as default};
