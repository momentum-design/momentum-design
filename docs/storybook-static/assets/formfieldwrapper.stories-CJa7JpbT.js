import"./index-d2ofplK6.js";import{k as t}from"./iframe-D1RGJO9g.js";import{Q as f}from"./repeat-CE2VsrkU.js";import{c as u,s as h}from"./commonArgTypes-BluK8w5L.js";import{d as y}from"./utils-CFOyPOhY.js";import{P as g}from"./popover.component-DYjVfDou.js";import{F as T,V as b}from"./formfieldwrapper.component-CvP6ABv6.js";import"./index-B4ra579S.js";import"./button.component-DqAqkrM0.js";import"./button.constants-ctBMf0Nr.js";import"./buttonsimple.constants-DiW5GZvm.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-bVzR6LPV.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CFnJTGkD.js";import"./TabIndexMixin-Bl7-LDRA.js";import"./index-CQUTSyim.js";import"./button.utils-rNW36Ji7.js";import"./index-DGuVKFIz.js";import"./preload-helper-C1FmrZbK.js";import"./index-0dAn93WX.js";import"./index-DTrDRi1E.js";import"./index-DcbpN_bp.js";import"./index-BUahXgHb.js";import"./if-defined-CEt-h5rX.js";import"./index-AkGujtMl.js";import"./v4-CmTdKEVZ.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";class w extends T{render(){return t`
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
  </mdc-subcomponent-formfieldwrapper>`,Y={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:v,argTypes:{...u,...h,"help-text-type":{control:"select",options:Object.values(b)},id:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},disabled:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(g)},"info-icon-aria-label":{control:"text"}}},r={args:{label:"Label","help-text":"Helper text","help-text-type":"default",children:"[Child Component]",required:!0,disabled:!1,"toggletip-text":"toggletip text","info-icon-aria-label":"Info icon aria label"}},l={render:()=>t`
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
  `,argTypes:{...y(["label","help-text","help-text-type","required","id","disabled"])}},o={render:()=>t` <div style="display: flex; justify-content: space-evenly; align-items: center">
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var n,d,s;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(d=l.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var m,c,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-subcomponent-formfieldwrapper help-text-type="\${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        \`)}
    </div>\`
}`,...(x=(c=o.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const Z=["Example","LongLabelText","HelperTextTypes"];export{r as Example,o as HelperTextTypes,l as LongLabelText,Z as __namedExportsOrder,Y as default};
