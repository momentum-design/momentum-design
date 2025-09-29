import{P as b,T as c,V as l,D as g}from"./progressbar.component-DKTRaFvT.js";import"./index-9-OsRZK_.js";import"./index-BjB2ba7z.js";import{k as t}from"./iframe-BZzdMAZp.js";import{c as v,s as u}from"./commonArgTypes-BluK8w5L.js";import{a as h,t as x}from"./utils-CFOyPOhY.js";import"./index-CawV12T7.js";import"./index-DVr7PYE6.js";import"./button.component-DoeRgBbi.js";import"./button.constants-XDh12voX.js";import"./buttonsimple.constants-CLFrJb8-.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CR61XUh9.js";import"./keys-hFXe221I.js";import"./DisabledMixin-FFwZPyaL.js";import"./TabIndexMixin-BZbJwgjr.js";import"./index-CWcLttKP.js";import"./button.utils-rNW36Ji7.js";import"./index-BrHvQWhu.js";import"./popover.component-Boo_DYe1.js";import"./base-DIkkzJ-c.js";import"./if-defined-DZZrGFtM.js";import"./BackdropMixin-sWGUFycW.js";import"./index--K6VXkND.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-DuRDxB8e.js";import"./DataAriaLabelMixin-Con2Dv41.js";import"./preload-helper-C1FmrZbK.js";import"./index-MnuDyUBt.js";import"./index-DTrDRi1E.js";b.register(c);const $=r=>t`
  <mdc-progressbar
    value="${r.value}"
    variant="${r.variant}"
    label="${r.label}"
    ?error="${r.error}"
    help-text="${r["help-text"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-progressbar>
`,W={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:$,argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(l)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...h(["help-text-type","required","name","disabled","validation-message","toggletip-text","toggletip-placement","toggletip-strategy","info-icon-aria-label"]),...x(["--mdc-progressbar-background-color","--mdc-progressbar-active-background-color","--mdc-progressbar-success-color","--mdc-progressbar-error-color","--mdc-progressbar-height","--mdc-progressbar-border-radius","--mdc-progressbar-label-color","--mdc-progressbar-label-line-height","--mdc-progressbar-label-font-size","--mdc-progressbar-label-font-weight","--mdc-progressbar-help-text-color"]),...v,...u}},e={args:{value:"0",variant:g.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},a={render:()=>t`
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const X=["Example","AllVariants"];export{a as AllVariants,e as Example,X as __namedExportsOrder,W as default};
