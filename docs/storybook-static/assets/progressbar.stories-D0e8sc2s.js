import{ap as s,aq as b,k as t}from"./iframe-DKmoi846.js";import{c,s as g}from"./commonArgTypes-BG7EqI50.js";import{h as v}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const u=e=>t`
  <mdc-progressbar
    value="${e.value}"
    variant="${e.variant}"
    label="${e.label}"
    ?error="${e.error}"
    help-text="${e["help-text"]}"
    data-aria-label="${e["data-aria-label"]}"
  ></mdc-progressbar>
`,T={title:"Components/progressbar",tags:["autodocs"],component:"mdc-progressbar",render:u,argTypes:{value:{control:"text"},variant:{control:{type:"inline-radio"},options:Object.values(s)},label:{control:"text"},error:{control:"boolean"},"help-text":{control:"text"},"data-aria-label":{control:"text"},...v(["help-text-type","required","name","disabled","validation-message","toggletip-text","toggletip-placement","toggletip-strategy","info-icon-aria-label"]),...c,...g}},a={args:{value:"0",variant:b.VARIANT,label:"Label",error:!1,"help-text":"Helper text","data-aria-label":"This is a progressbar"}},r={render:()=>t`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        ${[!1,!0].map(e=>(e?[100]:[0,25,50,75,100]).map(l=>t`
              <mdc-progressbar
                value="${l}"
                variant="${s.DEFAULT}"
                label="Label"
                ?error="${e}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `))}
      </div>
      <div>
        <h3>Inline Variant</h3>
        ${[!1,!0].map(e=>(e?[100]:[0,25,50,75,100]).map(l=>t`
              <mdc-progressbar
                value="${l}"
                variant="${s.INLINE}"
                label="Label"
                ?error="${e}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `))}
      </div>
    </div>
  `};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    value: '0',
    variant: DEFAULTS.VARIANT,
    label: 'Label',
    error: false,
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progressbar'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const f=["Example","AllVariants"];export{r as AllVariants,a as Example,f as __namedExportsOrder,T as default};
