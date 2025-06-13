import"./index-BoQQU9ZI.js";import{k as t}from"./lit-element-D5KKan5q.js";import{Q as f}from"./repeat-CNQ7t7Vw.js";import{c as u,s as h}from"./commonArgTypes-BluK8w5L.js";import{d as y}from"./utils-CO8B6ZcN.js";import{F as g,V as b}from"./formfieldwrapper.component-B1RGcmSz.js";import{P as T}from"./popover.component-2fUXsfxE.js";import"./index-Bw6sn9m_.js";import"./button.component-CETyLHgp.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-oB9lXDry.js";import"./iframe-Dz4JvwFF.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D1yLszQ-.js";import"./index-DfMg_rup.js";import"./if-defined-D5BV9-c0.js";import"./index-CWUJHaLg.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./base-DIkkzJ-c.js";import"./FocusTrapMixin-CjzCjsSm.js";import"./roles-BH_hBfTz.js";class w extends g{render(){return t`
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
    </mdc-subcomponent-formfieldwrapper>`,oe={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:v,parameters:{badges:["internal"]},argTypes:{...u,...h,"help-text-type":{control:"select",options:Object.values(b)},id:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},disabled:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(T)},"info-icon-aria-label":{control:"text"}}},r={args:{label:"Label","help-text":"Helper text","help-text-type":"default",children:"[Child Component]",required:!0,disabled:!1,"toggletip-text":"toggletip text","info-icon-aria-label":"Info icon aria label"}},o={render:()=>t`
  <div style="width: 170px;">
    <mdc-subcomponent-formfieldwrapper
      style="width: 100%"
      label="This is a long label text"
      help-text="Helper text"
      help-text-type="default"
      required>
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
      required>
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
}`,...(x=(c=l.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const le=["Example","LongLabelText","HelperTextTypes"];export{r as Example,l as HelperTextTypes,o as LongLabelText,le as __namedExportsOrder,oe as default};
