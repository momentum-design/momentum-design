import{F as m,T as c,V as d}from"./formfieldwrapper.component-DAx6tjPQ.js";import"./index-BRJNDW9c.js";import"./index-BGkqZMsC.js";import{k as p}from"./lit-element-CHllvULs.js";import{Q as f}from"./repeat-B3UFROme.js";import{c as x,s as b}from"./commonArgTypes-BluK8w5L.js";import"./index-HW6KrQZO.js";import"./index-MYSkQ1zX.js";import"./text.constants-DJu2q-6E.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-5SvKRCBg.js";m.register(c);class u extends m{render(){return p`
          ${this.renderLabel()}
          <slot></slot>
          ${this.renderHelperText()}
        `}}u.register("mdc-subcomponent-formfieldwrapper");const h=e=>p` <mdc-subcomponent-formfieldwrapper
    label="${e.label}"
    ?disabled="${e.disabled}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    >
    ${e.children}
    </mdc-subcomponent-formfieldwrapper>`,N={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:h,parameters:{badges:["wip"]},argTypes:{...x,...b,"help-text-type":{control:"select",options:Object.values(d)},id:{control:"text"},label:{control:"text"},"help-text":{control:"text"},disabled:{control:"boolean"}}},t={args:{label:"Label (required)","help-text":"Helper text","help-text-type":"default",children:"[Child Component]",disabled:!1}},r={render:()=>p` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${f(Object.values(d),e=>p`
          <mdc-subcomponent-formfieldwrapper help-text-type="${e}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        `)}
    </div>`};var l,o,a;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Label (required)',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]',
    disabled: false
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-subcomponent-formfieldwrapper help-text-type="\${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        \`)}
    </div>\`
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Example","HelperTextTypes"];export{t as Example,r as HelperTextTypes,S as __namedExportsOrder,N as default};
