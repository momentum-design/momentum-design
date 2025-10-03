import{d as t,e as c,f as o,k as n}from"./iframe-DlUA9Lme.js";import"./index-CUuLJ370.js";import{c as D,s as E}from"./commonArgTypes-BluK8w5L.js";import{t as N,a as p}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B-Pn-UIi.js";import"./buttonsimple.component-DbCI_knu.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CAO-9s6U.js";import"./TabIndexMixin-D2-rjBj7.js";import"./button.utils-rNW36Ji7.js";import"./index-DWTl0clH.js";import"./index-BLWS0bNq.js";import"./index-DTrDRi1E.js";const f=e=>({text:n`<mdc-text tagname="h1">${e.childrenText}</mdc-text>`,grabber:n`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,noChildren:n``}),R=e=>{const i=f(e)[e.typeOfChildren]||n``;return n`
    <div style="height: 25rem; margin: 1rem">
      <mdc-divider
        orientation=${e.orientation}
        variant=${e.variant}
        arrow-direction=${e["arrow-direction"]}
        button-position=${e["button-position"]}
      >
        ${i}
      </mdc-divider>
    </div>
  `},l={title:"Components/decorator/divider",tags:["autodocs"],component:"mdc-divider",render:R,argTypes:{typeOfChildren:{control:"radio",options:["noChildren","text","grabber"],description:"Choose the type of content to render inside the divider"},childrenText:{control:"text",description:"Text content for the text divider",if:{arg:"typeOfChildren",eq:"text"}},orientation:{control:"radio",options:Object.values(t)},variant:{control:"radio",options:Object.values(c)},"arrow-direction":{control:"select",options:Object.values(o)},"button-position":{control:"select",options:Object.values(o)},...N(["--mdc-divider-background-color","--mdc-divider-width","--mdc-divider-horizontal-gradient","--mdc-divider-vertical-gradient","--mdc-divider-text-size","--mdc-divider-text-color","--mdc-divider-text-margin","--mdc-divider-grabber-button-background-color-normal","--mdc-divider-grabber-button-background-color-hover","--mdc-divider-grabber-button-background-color-pressed","--mdc-divider-grabber-button-border-color","--mdc-divider-grabber-button-border-radius","--mdc-divider-text-line-height"]),...D,...E,...p(["observer"])}},d={args:{typeOfChildren:"noChildren",childrenText:"Divider Text",orientation:t.HORIZONTAL,variant:c.SOLID,"arrow-direction":o.NEGATIVE,"button-position":o.NEGATIVE},decorators:[(e,i)=>(i.args.typeOfChildren==="text"&&i.args.orientation===t.VERTICAL&&(i.args.orientation=t.HORIZONTAL),e())]},r={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["noChildren"],description:"NoChildren type is selected"},...p(["arrow-direction","button-position"])},args:{typeOfChildren:"noChildren",childrenText:"Divider Text",orientation:t.HORIZONTAL,variant:c.SOLID}},a={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["text"],description:"Text type is selected"},orientation:{control:"radio",options:[t.HORIZONTAL],description:`Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.`},...p(["arrow-direction","button-position"])},args:{...r.args,typeOfChildren:"text",childrenText:"Divider Text"}},s={argTypes:{...l.argTypes,typeOfChildren:{control:"radio",options:["grabber"],description:"Grabber Button type is selected"}},args:{...r.args,typeOfChildren:"grabber",childrenText:"Divider Text","arrow-direction":o.NEGATIVE,"button-position":o.NEGATIVE}};var T,m,h;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(h=(m=d.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var I,O,b;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(O=r.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var g,v,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const W=["Example","noChildrenDivider","textDivider","grabberButtonDivider"];export{d as Example,W as __namedExportsOrder,l as default,s as grabberButtonDivider,r as noChildrenDivider,a as textDivider};
