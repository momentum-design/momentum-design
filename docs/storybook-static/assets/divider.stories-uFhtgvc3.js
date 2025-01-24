import{i as _,k as p}from"./lit-element-CHllvULs.js";import{u as H,C as E,n as g}from"./index-HW6KrQZO.js";import{h as k}from"./index-BNZgxKMr.js";import{a as Z}from"./text.constants-DJu2q-6E.js";import{T as B}from"./button.constants-C4PVPP-B.js";import{c as j,s as P}from"./commonArgTypes-BluK8w5L.js";import{d as $,h as O}from"./utils-D1SE5bce.js";import"./buttonsimple.constants-Biy6Bznc.js";const U=[k,_`
    :host {
      --mdc-divider-background-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-divider-width: 0.0625rem;
      --mdc-divider-horizontal-gradient: var(--mds-color-theme-gradientdivider-default-normal);
      --mdc-divider-vertical-gradient: var(--mds-color-theme-gradientdivider-vertical-normal);
      --mdc-divider-text-size: var(--mds-font-size-body-midsize);
      --mdc-divider-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-divider-text-line-height: var(--mds-font-lineheight-body-midsize);
      --mdc-divider-text-margin: 1.5rem;
      --mdc-divider-grabber-button-border-radius: 0.5rem;

      display: flex;
      justify-content: center;
    }

    /* Primary and grabber divider styles */
    :host([data-type='mdc-primary-divider']),
    :host([data-type='mdc-grabber-divider']) {
      background-color: var(--mdc-divider-background-color);
    }

    /* Orientation-specific styles */
    :host([orientation='horizontal']) {
      flex-direction: row;
      height: var(--mdc-divider-width);
      width: 100%;
    }

    :host([orientation='vertical']:not([data-type='mdc-text-divider'])) {
      flex-direction: column;
      height: 100%;
      width: var(--mdc-divider-width);
    }

    /* Gradient styles for primary and grabber dividers */
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-primary-divider']),
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-grabber-divider']) {
      background: var(--mdc-divider-horizontal-gradient);
    }

    :host([orientation='vertical'][variant='gradient'][data-type='mdc-primary-divider']),
    :host([orientation='vertical'][variant='gradient'][data-type='mdc-grabber-divider']) {
      background: var(--mdc-divider-vertical-gradient);
    }

    /* Hiding slotted content for primary dividers */
    :host([data-type='mdc-primary-divider']) ::slotted(*) {
      display: none;
    }

    /** Button divider styles */
    :host([orientation='vertical']) ::slotted(mdc-button) {
      width: 1.25rem;
      height: 2.5rem;
      border-radius: 0 
          var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius) 
          0;
    }

    :host([orientation='horizontal']) ::slotted(mdc-button) {
      height: 1.25rem;
      width: 2.5rem;
      border-radius: 0 
          0 
          var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius);
    }

    :host([orientation='horizontal'][button-position='positive']),
    :host([orientation='vertical'][button-position='negative']) {
      align-items: end;
    }

    :host([orientation='horizontal'][button-position='negative']),
    :host([orientation='vertical'][button-position='positive']) {
      align-items: start;
    }

    :host([orientation='horizontal'][button-position='positive']) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius) 
          0 
          0;
      border-bottom-color: transparent;
    }

    :host([orientation='horizontal'][button-position='negative']) ::slotted(mdc-button) {
      border-top-color: transparent;
    }

    :host([orientation='vertical'][button-position='negative']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius) 
          0 
          0 
          var(--mdc-divider-grabber-button-border-radius);
      border-right-color: transparent;
    }

    :host([orientation='vertical'][button-position='positive']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      border-left-color: transparent;
    }

    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: 0 
          var(--mdc-divider-grabber-button-border-radius) 
          var(--mdc-divider-grabber-button-border-radius) 
          0;
      transform: rotate(180deg);
    }

    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      transform: rotate(180deg);
    }

    /** Text divider styles */
    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']),
    :host([orientation='horizontal'][variant='solid'][data-type='mdc-text-divider']) {
      align-items: center;
    }

    :host([data-type='mdc-text-divider']) > div {
      width: 100%;
      height: 100%;
      background-color: var(--mdc-divider-background-color);
    }

    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']) > div:first-of-type {
      background: linear-gradient(to right, transparent, 30%, var(--mdc-divider-background-color));
    }

    :host([orientation='horizontal'][variant='gradient'][data-type='mdc-text-divider']) > div:last-of-type {
      background: linear-gradient(to left, transparent, 30%, var(--mdc-divider-background-color));
    }

    :host([data-type='mdc-text-divider']) ::slotted(mdc-text) {
      margin: 0 var(--mdc-divider-text-margin);
      color: var(--mdc-divider-text-color);
      font-size: var(--mdc-divider-text-size);
      line-height: var(--mdc-divider-text-line-height);
    }
  `],W=H.constructTagName("divider"),o={HORIZONTAL:"horizontal",VERTICAL:"vertical"},v={SOLID:"solid",GRADIENT:"gradient"},r={POSITIVE:"positive",NEGATIVE:"negative"},b={UP:"arrow-up-regular",DOWN:"arrow-down-regular",LEFT:"arrow-left-regular",RIGHT:"arrow-right-regular"},c={ORIENTATION:o.HORIZONTAL,VARIANT:v.SOLID,ARROW_DIRECTION:r.NEGATIVE,BUTTON_DIRECTION:r.NEGATIVE};var F=Object.defineProperty,I=(e,t,i,y)=>{for(var n=void 0,d=e.length-1,s;d>=0;d--)(s=e[d])&&(n=s(t,i,n)||n);return n&&F(t,i,n),n};const f=class f extends E{constructor(){super(),this.orientation=c.ORIENTATION,this.variant=c.VARIANT,this.arrowDirection=c.ARROW_DIRECTION,this.buttonPosition=c.BUTTON_DIRECTION,this.setAttribute("data-type","mdc-primary-divider")}setVariant(t){this.setAttribute("variant",Object.values(v).includes(t)?t:c.VARIANT)}setOrientation(t){this.setAttribute("orientation",Object.values(o).includes(t)?t:c.ORIENTATION)}ensureValidDirections(){const t=this.orientation===o.HORIZONTAL?r.NEGATIVE:r.POSITIVE;Object.values(r).includes(this.buttonPosition)||(this.buttonPosition=t),Object.values(r).includes(this.arrowDirection)||(this.arrowDirection=t)}setGrabberButton(){this.ensureValidDirections();const t=this.querySelector("mdc-button");if(t){const i=this.getArrowIcon();t.setAttribute("variant","secondary"),t.setAttribute("prefix-icon",i)}}getArrowIcon(){const t=this.orientation===o.HORIZONTAL,i=this.arrowDirection===r.POSITIVE;return t?i?b.UP:b.DOWN:i?b.RIGHT:b.LEFT}update(t){super.update(t),t.has("orientation")&&this.setOrientation(this.orientation),t.has("variant")&&this.setVariant(this.variant),(t.has("orientation")||t.has("arrowDirection")||t.has("buttonPosition"))&&this.setGrabberButton()}inferDividerType(){var d;const t=(d=this.shadowRoot)==null?void 0:d.querySelector("slot"),i=(t==null?void 0:t.assignedElements({flatten:!0}))||[];if(i.length>1)return;const y=i.some(s=>s.tagName===Z.toUpperCase()),n=i.some(s=>s.tagName===B.toUpperCase());y&&!n?this.setAttribute("data-type","mdc-text-divider"):!y&&n&&(this.setAttribute("data-type","mdc-grabber-divider"),this.setGrabberButton())}render(){return p`
      <div></div>
      <slot @slotchange=${this.inferDividerType}></slot>
      <div></div>
    `}};f.styles=[...E.styles,...U];let a=f;I([g({type:String,reflect:!0})],a.prototype,"orientation");I([g({type:String,reflect:!0})],a.prototype,"variant");I([g({type:String,attribute:"arrow-direction",reflect:!0})],a.prototype,"arrowDirection");I([g({type:String,attribute:"button-position",reflect:!0})],a.prototype,"buttonPosition");a.register(W);const M={text:p`<mdc-text tagname="h1">Label</mdc-text>`,grabber:p`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,noChildren:p``},q=e=>{const t=M[e.typeOfChildren]||p``;return p`
    <div style="height: 25rem; margin: 1rem">
      <mdc-divider
        orientation=${e.orientation}
        variant=${e.variant}
        arrow-direction=${e["arrow-direction"]}
        button-position=${e["button-position"]}
      >
        ${t}
      </mdc-divider>
    </div>
  `},T={title:"Components/decorator/divider",tags:["autodocs"],component:"mdc-divider",render:q,parameters:{badges:["stable"]},argTypes:{typeOfChildren:{control:"radio",options:["noChildren","text","grabber"],description:"Choose the type of content to render inside the divider"},orientation:{control:"radio",options:Object.values(o)},variant:{control:"radio",options:Object.values(v)},"arrow-direction":{control:"select",options:Object.values(r)},"button-position":{control:"select",options:Object.values(r)},...$(["--mdc-divider-background-color","--mdc-divider-width","--mdc-divider-horizontal-gradient","--mdc-divider-vertical-gradient","--mdc-divider-text-size","--mdc-divider-text-color","--mdc-divider-text-margin","--mdc-divider-grabber-button-border-radius","--mdc-divider-text-line-height"]),...j,...P,...O(["observer"])}},m={args:{typeOfChildren:"noChildren",orientation:o.HORIZONTAL,variant:v.SOLID,"arrow-direction":r.NEGATIVE,"button-position":r.NEGATIVE},decorators:[(e,t)=>(t.args.typeOfChildren==="text"&&t.args.orientation===o.VERTICAL&&(t.args.orientation=o.HORIZONTAL),e())]},l={argTypes:{...T.argTypes,typeOfChildren:{control:"radio",options:["noChildren"],description:"NoChildren type is selected"},...O(["arrow-direction","button-position"])},args:{typeOfChildren:"noChildren",orientation:o.HORIZONTAL,variant:v.SOLID}},h={argTypes:{...T.argTypes,typeOfChildren:{control:"radio",options:["text"],description:"Text type is selected"},orientation:{control:"radio",options:[o.HORIZONTAL],description:`Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.`},...O(["arrow-direction","button-position"])},args:{...l.args,typeOfChildren:"text"}},u={argTypes:{...T.argTypes,typeOfChildren:{control:"radio",options:["grabber"],description:"Grabber Button type is selected"}},args:{...l.args,typeOfChildren:"grabber","arrow-direction":r.NEGATIVE,"button-position":r.NEGATIVE}};var N,A,C;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(A=m.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var R,D,x;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(x=(D=l.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var w,V,S;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(V=h.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var z,L,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(L=u.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};const et=["Example","noChildrenDivider","textDivider","grabberButtonDivider"];export{m as Example,et as __namedExportsOrder,T as default,u as grabberButtonDivider,l as noChildrenDivider,h as textDivider};
