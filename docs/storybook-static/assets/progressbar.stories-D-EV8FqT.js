import{P as b,T as c,V as l,D as g}from"./progressbar.component-CTgy8GhI.js";import"./index-DWTl0clH.js";import{k as t}from"./iframe-DlUA9Lme.js";import{c as v,s as u}from"./commonArgTypes-BluK8w5L.js";import{a as h,t as x}from"./utils-CFOyPOhY.js";import"./index-4agTb2Xy.js";import"./index-CUuLJ370.js";import"./button.component-B-Pn-UIi.js";import"./buttonsimple.component-DbCI_knu.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CAO-9s6U.js";import"./TabIndexMixin-D2-rjBj7.js";import"./button.utils-rNW36Ji7.js";import"./index-DBsvpO9c.js";import"./popover.component-BBliWbI3.js";import"./base-DIkkzJ-c.js";import"./if-defined-sRFM4mFi.js";import"./BackdropMixin-B37S2fZg.js";import"./index-DNlVfzVs.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-D1y10-Nw.js";import"./DataAriaLabelMixin-zzpBu2FW.js";import"./preload-helper-C1FmrZbK.js";import"./index-BLWS0bNq.js";import"./index-DTrDRi1E.js";b.register(c);const $=r=>t`
  <mdc-progressbar
    value="${r.value}"
    variant="${r.variant}"
    label="${r.label}"
    ?error="${r.error}"
    help-text="${r["help-text"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-progressbar>
`,M={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:$,argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(l)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...h(["help-text-type","required","name","disabled","validation-message","toggletip-text","toggletip-placement","toggletip-strategy","info-icon-aria-label"]),...x(["--mdc-progressbar-background-color","--mdc-progressbar-active-background-color","--mdc-progressbar-success-color","--mdc-progressbar-error-color","--mdc-progressbar-height","--mdc-progressbar-border-radius","--mdc-progressbar-label-color","--mdc-progressbar-label-line-height","--mdc-progressbar-label-font-size","--mdc-progressbar-label-font-weight","--mdc-progressbar-help-text-color"]),...v,...u}},e={args:{value:"0",variant:g.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},a={render:()=>t`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        ${[!1,!0].map(r=>(r?[100]:[0,25,50,75,100]).map(o=>t`
              <mdc-progressbar
                value="${o}"
                variant="${l.DEFAULT}"
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
                variant="${l.INLINE}"
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Example","AllVariants"];export{a as AllVariants,e as Example,B as __namedExportsOrder,M as default};
