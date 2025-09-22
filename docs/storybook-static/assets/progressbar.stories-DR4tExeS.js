import{P as b,T as c,V as s,D as g}from"./progressbar.component-D4KbPWbK.js";import"./index-DhIhdWNp.js";import"./index-DHsMOcdX.js";import{k as t}from"./lit-element-D5KKan5q.js";import{c as v,s as u}from"./commonArgTypes-BluK8w5L.js";import{a as h,t as x}from"./utils-CFOyPOhY.js";import"./provider.component-BaQC7CJH.js";import"./index-BR8PBvMm.js";import"./index-DO0uJFRB.js";import"./button.component-D5eG231X.js";import"./state-C0WmBOuD.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./index-Do14t4YG.js";import"./popover.component-CgG8O1N4.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-Bh3Mxn5K.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./iframe-DtD0cJ2q.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";b.register(c);const $=r=>t`
  <mdc-progressbar
    value="${r.value}"
    variant="${r.variant}"
    label="${r.label}"
    ?error="${r.error}"
    help-text="${r["help-text"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-progressbar>
`,rr={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:$,parameters:{badges:["stable"]},argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(s)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...h(["help-text-type","required","name","disabled","validation-message","toggletip-text","toggletip-placement","info-icon-aria-label"]),...x(["--mdc-progressbar-background-color","--mdc-progressbar-active-background-color","--mdc-progressbar-success-color","--mdc-progressbar-error-color","--mdc-progressbar-height","--mdc-progressbar-border-radius","--mdc-progressbar-label-color","--mdc-progressbar-label-line-height","--mdc-progressbar-label-font-size","--mdc-progressbar-label-font-weight","--mdc-progressbar-help-text-color"]),...v,...u}},e={args:{value:"0",variant:g.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},a={render:()=>t`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        ${[!1,!0].map(r=>(r?[100]:[0,25,50,75,100]).map(o=>t`
              <mdc-progressbar
                value="${o}"
                variant="${s.DEFAULT}"
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
        ${[!1,!0].map(r=>(r?[100]:[0,25,50,75,100]).map(o=>t`
              <mdc-progressbar
                value="${o}"
                variant="${s.INLINE}"
                label="Label"
                ?error="${r}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `))}
      </div>
    </div>
  `};var l,i,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: '0',
    variant: DEFAULTS.VARIANT,
    label: 'Label',
    error: false,
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progressbar'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,n,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const er=["Example","AllVariants"];export{a as AllVariants,e as Example,er as __namedExportsOrder,rr as default};
