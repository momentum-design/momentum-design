import{e as r,f as p,g as n,k as i}from"./iframe-BP3AX2ct.js";import"./index-CXBgqhAW.js";import{c as u,s as v}from"./commonArgTypes-BG7EqI50.js";import{h as c}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bq8C_gde.js";import"./buttonsimple.component-B9fsjtzB.js";import"./TabIndexMixin-CSnhgxZt.js";import"./DisabledMixin-3kafPYYR.js";import"./button.utils-rNW36Ji7.js";import"./index-BA-5qcsH.js";import"./index-B1NKWUza.js";import"./index-DTrDRi1E.js";const N=e=>({text:i`<mdc-text tagname="h1">${e.childrenText}</mdc-text>`,grabber:i`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,noChildren:i``}),f=e=>{const o=N(e)[e.typeOfChildren]||i``;return i`
    <div style="height: 25rem; margin: 1rem">
      <mdc-divider
        orientation=${e.orientation}
        variant=${e.variant}
        arrow-direction=${e["arrow-direction"]}
        button-position=${e["button-position"]}
      >
        ${o}
      </mdc-divider>
    </div>
  `},l={title:"Components/decorator/divider",tags:["autodocs"],component:"mdc-divider",render:f,argTypes:{typeOfChildren:{control:"radio",options:["noChildren","text","grabber"],description:"Choose the type of content to render inside the divider"},childrenText:{control:"text",description:"Text content for the text divider",if:{arg:"typeOfChildren",eq:"text"}},orientation:{control:"radio",options:Object.values(r)},variant:{control:"radio",options:Object.values(p)},"arrow-direction":{control:"select",options:Object.values(n)},"button-position":{control:"select",options:Object.values(n)},...u,...v,...c(["observer"])}},a={args:{typeOfChildren:"noChildren",childrenText:"Divider Text",orientation:r.HORIZONTAL,variant:p.SOLID,"arrow-direction":n.NEGATIVE,"button-position":n.NEGATIVE},decorators:[(e,o)=>(o.args.typeOfChildren==="text"&&o.args.orientation===r.VERTICAL&&(o.args.orientation=r.HORIZONTAL),e())]},t={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["noChildren"],description:"NoChildren type is selected"},...c(["arrow-direction","button-position"])},args:{typeOfChildren:"noChildren",childrenText:"Divider Text",orientation:r.HORIZONTAL,variant:p.SOLID}},d={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["text"],description:"Text type is selected"},orientation:{control:"radio",options:[r.HORIZONTAL],description:`Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.`},...c(["arrow-direction","button-position"])},args:{...t.args,typeOfChildren:"text",childrenText:"Divider Text"}},s={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["grabber"],description:"Grabber Button type is selected"}},args:{...t.args,typeOfChildren:"grabber",childrenText:"Divider Text","arrow-direction":n.NEGATIVE,"button-position":n.NEGATIVE}};var T,I,O;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    typeOfChildren: 'noChildren',
    childrenText: 'Divider Text',
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
}`,...(O=(I=a.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var h,m,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    childrenText: 'Divider Text',
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID
  }
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,x,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    typeOfChildren: 'text',
    childrenText: 'Divider Text'
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,E,b;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    childrenText: 'Divider Text',
    'arrow-direction': DIRECTIONS.NEGATIVE,
    'button-position': DIRECTIONS.NEGATIVE
  }
}`,...(b=(E=s.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const z=["Example","noChildrenDivider","textDivider","grabberButtonDivider"];export{a as Example,z as __namedExportsOrder,l as default,s as grabberButtonDivider,t as noChildrenDivider,d as textDivider};
