import{P as b,T as c,V as o,D as g}from"./progressbar.component-VFgD0dKL.js";import"./index-Bk2gUKGo.js";import{k as t}from"./iframe-B7bS_Rc1.js";import{c as v,s as u}from"./commonArgTypes-BG7EqI50.js";import{h}from"./utils-D6nie9pS.js";import"./index-DCR-WNU6.js";import"./index-DYFtQ6Qq.js";import"./button.component-B4Q3Ax0b.js";import"./buttonsimple.component-BMZpUHRL.js";import"./TabIndexMixin-C4f_ZdSf.js";import"./DisabledMixin-fEKYSTzR.js";import"./button.utils-rNW36Ji7.js";import"./index-388ZY_ot.js";import"./base-DIkkzJ-c.js";import"./if-defined-i8aYRTth.js";import"./popover.component-CSvAI602.js";import"./BackdropMixin-BDk9x3p8.js";import"./popover.constants-BPk-51YU.js";import"./index-Cl_H-EqT.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-DCWUBz2H.js";import"./formfieldwrapper.constants-DcMblaxW.js";import"./DataAriaLabelMixin-_c_CvxgU.js";import"./preload-helper-C1FmrZbK.js";import"./index-BeSsrQSZ.js";import"./index-DTrDRi1E.js";b.register(c);const x=r=>t`
  <mdc-progressbar
    value="${r.value}"
    variant="${r.variant}"
    label="${r.label}"
    ?error="${r.error}"
    help-text="${r["help-text"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-progressbar>
`,z={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:x,argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(o)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...h(["help-text-type","required","name","disabled","validation-message","toggletip-text","toggletip-placement","toggletip-strategy","info-icon-aria-label"]),...v,...u}},e={args:{value:"0",variant:g.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},a={render:()=>t`
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Example","AllVariants"];export{a as AllVariants,e as Example,B as __namedExportsOrder,z as default};
