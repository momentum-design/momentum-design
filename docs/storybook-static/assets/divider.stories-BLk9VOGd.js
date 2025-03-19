import{D as e,a as p,b as o}from"./index-BmDXFujM.js";import"./index-gzus7acS.js";import"./index-D3DhXfcW.js";import{k as i}from"./lit-element-D5KKan5q.js";import{c as D,s as N}from"./commonArgTypes-BluK8w5L.js";import{d as R,h as c}from"./utils-D1SE5bce.js";import"./index-C9z9WAEj.js";import"./index-BX3Tn-Br.js";import"./text.constants-ZF0jM5wn.js";import"./button.constants-D3lNAbe_.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./state-CSSggq2n.js";import"./button.utils-idYASaaz.js";import"./index-DfZde-XB.js";import"./iframe-F2T7fWhq.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const A={text:i`<mdc-text tagname="h1">Label</mdc-text>`,grabber:i`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,noChildren:i``},f=r=>{const n=A[r.typeOfChildren]||i``;return i`
    <div style="height: 25rem; margin: 1rem">
      <mdc-divider
        orientation=${r.orientation}
        variant=${r.variant}
        arrow-direction=${r["arrow-direction"]}
        button-position=${r["button-position"]}
      >
        ${n}
      </mdc-divider>
    </div>
  `},l={title:"Components/decorator/divider",tags:["autodocs"],component:"mdc-divider",render:f,parameters:{badges:["stable"]},argTypes:{typeOfChildren:{control:"radio",options:["noChildren","text","grabber"],description:"Choose the type of content to render inside the divider"},orientation:{control:"radio",options:Object.values(e)},variant:{control:"radio",options:Object.values(p)},"arrow-direction":{control:"select",options:Object.values(o)},"button-position":{control:"select",options:Object.values(o)},...R(["--mdc-divider-background-color","--mdc-divider-width","--mdc-divider-horizontal-gradient","--mdc-divider-vertical-gradient","--mdc-divider-text-size","--mdc-divider-text-color","--mdc-divider-text-margin","--mdc-divider-grabber-button-background-color-normal","--mdc-divider-grabber-button-background-color-hover","--mdc-divider-grabber-button-background-color-pressed","--mdc-divider-grabber-button-border-color","--mdc-divider-grabber-button-border-radius","--mdc-divider-text-line-height"]),...D,...N,...c(["observer"])}},a={args:{typeOfChildren:"noChildren",orientation:e.HORIZONTAL,variant:p.SOLID,"arrow-direction":o.NEGATIVE,"button-position":o.NEGATIVE},decorators:[(r,n)=>(n.args.typeOfChildren==="text"&&n.args.orientation===e.VERTICAL&&(n.args.orientation=e.HORIZONTAL),r())]},t={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["noChildren"],description:"NoChildren type is selected"},...c(["arrow-direction","button-position"])},args:{typeOfChildren:"noChildren",orientation:e.HORIZONTAL,variant:p.SOLID}},d={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["text"],description:"Text type is selected"},orientation:{control:"radio",options:[e.HORIZONTAL],description:`Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.`},...c(["arrow-direction","button-position"])},args:{...t.args,typeOfChildren:"text"}},s={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["grabber"],description:"Grabber Button type is selected"}},args:{...t.args,typeOfChildren:"grabber","arrow-direction":o.NEGATIVE,"button-position":o.NEGATIVE}};var m,b,I;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    typeOfChildren: 'noChildren',
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID,
    'arrow-direction': DIRECTIONS.NEGATIVE,
    'button-position': DIRECTIONS.NEGATIVE
  },
  decorators: [(Story, context) => {
    // Enforce horizontal orientation when typeOfChildren is 'text'
    if (context.args.typeOfChildren === 'text' && context.args.orientation === DIVIDER_ORIENTATION.VERTICAL) {
      context.args.orientation = DIVIDER_ORIENTATION.HORIZONTAL;
    }
    return Story();
  }]
}`,...(I=(b=a.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var O,g,T;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  argTypes: {
    ...meta.argTypes,
    typeOfChildren: {
      control: 'radio',
      options: ['noChildren'],
      description: 'NoChildren type is selected'
    },
    ...hideControls(['arrow-direction', 'button-position'])
  },
  args: {
    typeOfChildren: 'noChildren',
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID
  }
}`,...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,u,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    ...meta.argTypes,
    typeOfChildren: {
      control: 'radio',
      options: ['text'],
      description: 'Text type is selected'
    },
    orientation: {
      control: 'radio',
      options: [DIVIDER_ORIENTATION.HORIZONTAL],
      description: \`Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.\`
    },
    ...hideControls(['arrow-direction', 'button-position'])
  },
  args: {
    ...noChildrenDivider.args,
    typeOfChildren: 'text'
  }
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var C,v,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  argTypes: {
    ...meta.argTypes,
    typeOfChildren: {
      control: 'radio',
      options: ['grabber'],
      description: 'Grabber Button type is selected'
    }
  },
  args: {
    ...noChildrenDivider.args,
    typeOfChildren: 'grabber',
    'arrow-direction': DIRECTIONS.NEGATIVE,
    'button-position': DIRECTIONS.NEGATIVE
  }
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const Q=["Example","noChildrenDivider","textDivider","grabberButtonDivider"];export{a as Example,Q as __namedExportsOrder,l as default,s as grabberButtonDivider,t as noChildrenDivider,d as textDivider};
