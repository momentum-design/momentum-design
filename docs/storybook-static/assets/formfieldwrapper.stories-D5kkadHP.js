import"./index-CHyHQU_3.js";import{k as t}from"./lit-element-D5KKan5q.js";import{Q as f}from"./repeat-CNQ7t7Vw.js";import{c as u,s as h}from"./commonArgTypes-BluK8w5L.js";import{d as y}from"./utils-CFOyPOhY.js";import{a as g}from"./popover.component-CWSuSUni.js";import{F as T,V as b}from"./formfieldwrapper.component-BfkD1w96.js";import"./index-CSxZp6qf.js";import"./button.component-B08yfJ7f.js";import"./property-Bj3TGwkg.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-DgtnjMrJ.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-D6YxUDcd.js";import"./iframe-Dzy9pE1X.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-DeEenWCE.js";import"./index-Dgg11LW0.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./base-DIkkzJ-c.js";class w extends T{render(){return t`
      ${this.renderLabel()}
      <slot></slot>
      ${this.renderHelperText()}
    `}}w.register("mdc-subcomponent-formfieldwrapper");const v=e=>t` <mdc-subcomponent-formfieldwrapper
    label="${e.label}"
    ?disabled="${e.disabled}"
    ?required="${e.required}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
  >
    ${e.children}
  </mdc-subcomponent-formfieldwrapper>`,le={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:v,parameters:{badges:["internal"]},argTypes:{...u,...h,"help-text-type":{control:"select",options:Object.values(b)},id:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},disabled:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(g)},"info-icon-aria-label":{control:"text"}}},r={args:{label:"Label","help-text":"Helper text","help-text-type":"default",children:"[Child Component]",required:!0,disabled:!1,"toggletip-text":"toggletip text","info-icon-aria-label":"Info icon aria label"}},o={render:()=>t`
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
  `,argTypes:{...y(["label","help-text","help-text-type","required","id","disabled"])}},l={render:()=>t` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${f(Object.values(b),e=>t`
          <mdc-subcomponent-formfieldwrapper help-text-type="${e}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        `)}
    </div>`};var p,i,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var n,m,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var s,c,x;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-subcomponent-formfieldwrapper help-text-type="\${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        \`)}
    </div>\`
}`,...(x=(c=l.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const pe=["Example","LongLabelText","HelperTextTypes"];export{r as Example,l as HelperTextTypes,o as LongLabelText,pe as __namedExportsOrder,le as default};
