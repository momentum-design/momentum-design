import"./index-CbIlSgnN.js";import"./index-4_Nzo-g_.js";import"./index-D2VIkDCb.js";import{k as n}from"./lit-element-D5KKan5q.js";import{c as D,s as E}from"./commonArgTypes-BluK8w5L.js";import{t as N,a as c}from"./utils-CFOyPOhY.js";import{D as t,a as p,b as o}from"./divider.constants-DXWnBz1m.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./index-B-GnYs90.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./button.component-DXfxhmBS.js";import"./state-CmYk530Z.js";import"./buttonsimple.component-jROCF6tv.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./button.utils-rNW36Ji7.js";import"./index-BSenfTXI.js";import"./iframe-CG7B6cy6.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";const f=r=>({text:n`<mdc-text tagname="h1">${r.childrenText}</mdc-text>`,grabber:n`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,noChildren:n``}),R=r=>{const i=f(r)[r.typeOfChildren]||n``;return n`
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
  `},l={title:"Components/decorator/divider",tags:["autodocs"],component:"mdc-divider",render:R,parameters:{badges:["stable"]},argTypes:{typeOfChildren:{control:"radio",options:["noChildren","text","grabber"],description:"Choose the type of content to render inside the divider"},childrenText:{control:"text",description:"Text content for the text divider",if:{arg:"typeOfChildren",eq:"text"}},orientation:{control:"radio",options:Object.values(t)},variant:{control:"radio",options:Object.values(p)},"arrow-direction":{control:"select",options:Object.values(o)},"button-position":{control:"select",options:Object.values(o)},...N(["--mdc-divider-background-color","--mdc-divider-width","--mdc-divider-horizontal-gradient","--mdc-divider-vertical-gradient","--mdc-divider-text-size","--mdc-divider-text-color","--mdc-divider-text-margin","--mdc-divider-grabber-button-background-color-normal","--mdc-divider-grabber-button-background-color-hover","--mdc-divider-grabber-button-background-color-pressed","--mdc-divider-grabber-button-border-color","--mdc-divider-grabber-button-border-radius","--mdc-divider-text-line-height"]),...D,...E,...c(["observer"])}},d={args:{typeOfChildren:"noChildren",childrenText:"Divider Text",orientation:t.HORIZONTAL,variant:p.SOLID,"arrow-direction":o.NEGATIVE,"button-position":o.NEGATIVE},decorators:[(r,i)=>(i.args.typeOfChildren==="text"&&i.args.orientation===t.VERTICAL&&(i.args.orientation=t.HORIZONTAL),r())]},e={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["noChildren"],description:"NoChildren type is selected"},...c(["arrow-direction","button-position"])},args:{typeOfChildren:"noChildren",childrenText:"Divider Text",orientation:t.HORIZONTAL,variant:p.SOLID}},a={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["text"],description:"Text type is selected"},orientation:{control:"radio",options:[t.HORIZONTAL],description:`Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.`},...c(["arrow-direction","button-position"])},args:{...e.args,typeOfChildren:"text",childrenText:"Divider Text"}},s={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["grabber"],description:"Grabber Button type is selected"}},args:{...e.args,typeOfChildren:"grabber",childrenText:"Divider Text","arrow-direction":o.NEGATIVE,"button-position":o.NEGATIVE}};var m,T,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(T=d.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var b,I,O;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(I=e.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var g,v,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,y,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const er=["Example","noChildrenDivider","textDivider","grabberButtonDivider"];export{d as Example,er as __namedExportsOrder,l as default,s as grabberButtonDivider,e as noChildrenDivider,a as textDivider};
