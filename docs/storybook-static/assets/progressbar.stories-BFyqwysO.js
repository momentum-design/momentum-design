import{P as b,T as c,V as o,D as g}from"./progressbar.component-DlTVTqix.js";import"./index-DMVaZqHt.js";import{k as t}from"./iframe-BtkPwD7j.js";import{c as v,s as u}from"./commonArgTypes-BG7EqI50.js";import{h}from"./utils-B5QUENNQ.js";import"./index-Bnas0WJZ.js";import"./index-D5i9PN5c.js";import"./button.component-CTWLHGQw.js";import"./buttonsimple.component-D1YQZgrB.js";import"./DisabledMixin-Dt4Z3yf0.js";import"./KeyDownHandledMixin-BBk9G6iG.js";import"./index-Bjbavagu.js";import"./button.utils-rNW36Ji7.js";import"./index-BfgTlmLk.js";import"./if-defined-CRPsi96p.js";import"./popover.component-CsknWiHS.js";import"./BackdropMixin-v_CGG5fB.js";import"./popover.constants-BnL-ohWH.js";import"./index-Cyzogn-_.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-BEGkdnOz.js";import"./formfieldwrapper.constants-CillUOcz.js";import"./DataAriaLabelMixin-vKL0c_au.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";b.register(c);const x=r=>t`
  <mdc-progressbar
    value="${r.value}"
    variant="${r.variant}"
    label="${r.label}"
    ?error="${r.error}"
    help-text="${r["help-text"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-progressbar>
`,w={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:x,argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(o)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...h(["help-text-type","required","name","disabled","validation-message","toggletip-text","toggletip-placement","toggletip-strategy","info-icon-aria-label"]),...v,...u}},e={args:{value:"0",variant:g.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},a={render:()=>t`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        ${[!1,!0].map(r=>(r?[100]:[0,25,50,75,100]).map(l=>t`
              <mdc-progressbar
                value="${l}"
                variant="${o.DEFAULT}"
                label="Label"
                ?error="${r}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `))}
      </div>
      <div>
        <h3>Inline Variant</h3>
        ${[!1,!0].map(r=>(r?[100]:[0,25,50,75,100]).map(l=>t`
              <mdc-progressbar
                value="${l}"
                variant="${o.INLINE}"
                label="Label"
                ?error="${r}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `))}
      </div>
    </div>
  `};var s,i,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: '0',
    variant: DEFAULTS.VARIANT,
    label: 'Label',
    error: false,
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progressbar'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,m,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        \${[false, true].map(error => (error ? [100] : [0, 25, 50, 75, 100]).map(value => html\`
              <mdc-progressbar
                value="\${value}"
                variant="\${VARIANT.DEFAULT}"
                label="Label"
                ?error="\${error}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            \`))}
      </div>
      <div>
        <h3>Inline Variant</h3>
        \${[false, true].map(error => (error ? [100] : [0, 25, 50, 75, 100]).map(value => html\`
              <mdc-progressbar
                value="\${value}"
                variant="\${VARIANT.INLINE}"
                label="Label"
                ?error="\${error}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            \`))}
      </div>
    </div>
  \`
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const z=["Example","AllVariants"];export{a as AllVariants,e as Example,z as __namedExportsOrder,w as default};
