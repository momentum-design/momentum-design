import{P as b,T as c,V as l,D as g}from"./progressbar.component-T8Fl5jNE.js";import"./index-IctbibX3.js";import"./index-DeEenWCE.js";import{k as t}from"./lit-element-D5KKan5q.js";import{c as u,s as v}from"./commonArgTypes-BluK8w5L.js";import{a as h,t as x}from"./utils-CFOyPOhY.js";import"./property-Bj3TGwkg.js";import"./index-j3XKDd_i.js";import"./index-CAqEkK81.js";import"./button.component-AY6DUPps.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-DI6pSreE.js";import"./popover.component-CWSuSUni.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-BeqiOSNt.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./iframe-BmWM5hEh.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";b.register(c);const $=r=>t`
  <mdc-progressbar
    value="${r.value}"
    variant="${r.variant}"
    label="${r.label}"
    ?error="${r.error}"
    help-text="${r["help-text"]}"
    data-aria-label="${r["data-aria-label"]}"
  ></mdc-progressbar>
`,rr={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:$,parameters:{badges:["stable"]},argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(l)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...h(["help-text-type","required","name","disabled","validation-message","toggletip-text","toggletip-placement","info-icon-aria-label"]),...x(["--mdc-progressbar-default-background-color","--mdc-progressbar-default-active-background-color","--mdc-progressbar-success-background-color","--mdc-progressbar-error-background-color","--mdc-progressbar-height","--mdc-progressbar-border-radius","--mdc-progressbar-label-color","--mdc-progressbar-label-lineheight","--mdc-progressbar-label-fontsize","--mdc-progressbar-label-fontweight","--mdc-progressbar-help-text-color"]),...u,...v}},e={args:{value:"0",variant:g.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},a={render:()=>t`
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
