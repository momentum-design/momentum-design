import{D as e,a as p,b as o}from"./index-BKk1AD_8.js";import"./index-DfpzDdaa.js";import"./index-D3DhXfcW.js";import{k as n}from"./lit-element-D5KKan5q.js";import{c as D,s as N}from"./commonArgTypes-BluK8w5L.js";import{d as R,h as c}from"./utils-CO8B6ZcN.js";import"./index-C9z9WAEj.js";import"./index-CcXofQbA.js";import"./text.constants-ZF0jM5wn.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./button.component-DP9lGkCN.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-B8TSxrBc.js";import"./iframe-r35pFleP.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const A={text:n`<mdc-text tagname="h1">Label</mdc-text>`,grabber:n`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,noChildren:n``},f=r=>{const i=A[r.typeOfChildren]||n``;return n`
    <div style="height: 25rem; margin: 1rem">
      <mdc-divider
        orientation=${r.orientation}
        variant=${r.variant}
        arrow-direction=${r["arrow-direction"]}
        button-position=${r["button-position"]}
      >
        ${i}
      </mdc-divider>
    </div>
  `},l={title:"Components/decorator/divider",tags:["autodocs"],component:"mdc-divider",render:f,parameters:{badges:["stable"]},argTypes:{typeOfChildren:{control:"radio",options:["noChildren","text","grabber"],description:"Choose the type of content to render inside the divider"},orientation:{control:"radio",options:Object.values(e)},variant:{control:"radio",options:Object.values(p)},"arrow-direction":{control:"select",options:Object.values(o)},"button-position":{control:"select",options:Object.values(o)},...R(["--mdc-divider-background-color","--mdc-divider-width","--mdc-divider-horizontal-gradient","--mdc-divider-vertical-gradient","--mdc-divider-text-size","--mdc-divider-text-color","--mdc-divider-text-margin","--mdc-divider-grabber-button-background-color-normal","--mdc-divider-grabber-button-background-color-hover","--mdc-divider-grabber-button-background-color-pressed","--mdc-divider-grabber-button-border-color","--mdc-divider-grabber-button-border-radius","--mdc-divider-text-line-height"]),...D,...N,...c(["observer"])}},a={args:{typeOfChildren:"noChildren",orientation:e.HORIZONTAL,variant:p.SOLID,"arrow-direction":o.NEGATIVE,"button-position":o.NEGATIVE},decorators:[(r,i)=>(i.args.typeOfChildren==="text"&&i.args.orientation===e.VERTICAL&&(i.args.orientation=e.HORIZONTAL),r())]},t={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["noChildren"],description:"NoChildren type is selected"},...c(["arrow-direction","button-position"])},args:{typeOfChildren:"noChildren",orientation:e.HORIZONTAL,variant:p.SOLID}},d={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["text"],description:"Text type is selected"},orientation:{control:"radio",options:[e.HORIZONTAL],description:`Only horizontal orientation with 0.0625rem width is allowed. 
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
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const X=["Example","noChildrenDivider","textDivider","grabberButtonDivider"];export{a as Example,X as __namedExportsOrder,l as default,s as grabberButtonDivider,t as noChildrenDivider,d as textDivider};
