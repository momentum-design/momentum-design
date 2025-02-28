import{i as G,k as v}from"./lit-element-CHllvULs.js";import{u as _,C as E,n as g}from"./index-HW6KrQZO.js";import{a as H}from"./index-CEbgplXA.js";import{a as Z}from"./text.constants-DJu2q-6E.js";import{T as B}from"./button.constants-DopO3xW8.js";import"./index-C_4gFS82.js";import"./index-BGkqZMsC.js";import{c as j,s as P}from"./commonArgTypes-BluK8w5L.js";import{d as $,h as O}from"./utils-D1SE5bce.js";import"./buttonsimple.component-BZ9r9wPy.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./button.utils-F1-WjXoW.js";import"./index-8XRYgcxm.js";import"./iframe-BtqB3ETb.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";const U=_.constructTagName("divider"),o={HORIZONTAL:"horizontal",VERTICAL:"vertical"},b={SOLID:"solid",GRADIENT:"gradient"},r={POSITIVE:"positive",NEGATIVE:"negative"},m={UP:"arrow-up-regular",DOWN:"arrow-down-regular",LEFT:"arrow-left-regular",RIGHT:"arrow-right-regular"},c={ORIENTATION:o.HORIZONTAL,VARIANT:b.SOLID,ARROW_DIRECTION:r.NEGATIVE,BUTTON_DIRECTION:r.NEGATIVE},W=[H,G`
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
      --mdc-divider-grabber-button-border-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-divider-grabber-button-background-color-normal: var(--mds-color-theme-overlay-button-secondary-normal);
      --mdc-divider-grabber-button-background-color-hover: var(--mds-color-theme-overlay-button-secondary-hover);
      --mdc-divider-grabber-button-background-color-pressed: var(--mds-color-theme-overlay-button-secondary-pressed);

      display: flex;
      justify-content: center;
    }

    /* Primary and grabber divider styles */
    :host([data-type='mdc-primary-divider']),
    :host([data-type='mdc-grabber-divider']) {
      background-color: var(--mdc-divider-background-color);
    }

    @media (forced-colors: active) {
      /* Primary and grabber divider styles */
      :host([data-type='mdc-primary-divider'][button-position='positive']),
      :host([data-type='mdc-grabber-divider'][button-position='positive']) {
        border: 0;
        border-top: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][button-position='negative']),
      :host([data-type='mdc-grabber-divider'][button-position='negative']) {
        border: 0;
        border-bottom: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='positive']),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='positive']),
      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='negative']:dir(rtl)),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='negative']:dir(rtl)) {
        border: 0;
        border-right: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }

      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='negative']),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='negative']),
      :host([data-type='mdc-primary-divider'][orientation='vertical'][button-position='positive']:dir(rtl)),
      :host([data-type='mdc-grabber-divider'][orientation='vertical'][button-position='positive']:dir(rtl)) {
        border: 0;
        border-left: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }
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

    ::slotted(mdc-button) {
      background-color: var(--mdc-divider-grabber-button-background-color-normal);
      border-color: var(--mdc-divider-grabber-button-border-color);
    }

    ::slotted(mdc-button:hover) {
      background-color: var(--mdc-divider-grabber-button-background-color-hover);
    }

    ::slotted(mdc-button:active) {
      background-color: var(--mdc-divider-grabber-button-background-color-pressed);
    }

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
      margin: 0;
      margin-bottom: var(--mdc-divider-width);
      border-bottom: 0;
    }

    :host([orientation='horizontal'][button-position='negative']) ::slotted(mdc-button) {
      margin: 0;
      margin-top: var(--mdc-divider-width);
      border-top: 0;
    }

    :host([orientation='vertical'][button-position='negative']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: var(--mdc-divider-grabber-button-border-radius)
          0
          0
          var(--mdc-divider-grabber-button-border-radius);
      margin: 0;
      margin-right: var(--mdc-divider-width);
      border-right: 0;
    }

    :host([orientation='vertical'][button-position='positive']:dir(ltr)) ::slotted(mdc-button),
    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      margin: 0;
      margin-left: var(--mdc-divider-width);
      border-left: 0;
    }

    :host([orientation='vertical'][button-position='positive']:dir(rtl)) ::slotted(mdc-button) {
      border-radius: 0
          var(--mdc-divider-grabber-button-border-radius)
          var(--mdc-divider-grabber-button-border-radius)
          0;
      transform: rotate(180deg);
      margin: 0;
      margin-right: var(--mdc-divider-width);
    }

    :host([orientation='vertical'][button-position='negative']:dir(rtl)) ::slotted(mdc-button) {
      transform: rotate(180deg);
      margin: 0;
      margin-left: var(--mdc-divider-width);
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

    @media (forced-colors: active) {
      :host([data-type='mdc-text-divider']) > div {
        border-bottom: var(--mdc-divider-width) solid var(--mdc-divider-background-color);
      }
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
  `];var F=Object.defineProperty,y=(e,t,i,I)=>{for(var d=void 0,a=e.length-1,s;a>=0;a--)(s=e[a])&&(d=s(t,i,d)||d);return d&&F(t,i,d),d};const f=class f extends E{constructor(){super(),this.orientation=c.ORIENTATION,this.variant=c.VARIANT,this.arrowDirection=c.ARROW_DIRECTION,this.buttonPosition=c.BUTTON_DIRECTION,this.setAttribute("data-type","mdc-primary-divider")}setVariant(t){this.setAttribute("variant",Object.values(b).includes(t)?t:c.VARIANT)}setOrientation(t){this.setAttribute("orientation",Object.values(o).includes(t)?t:c.ORIENTATION)}ensureValidDirections(){const t=this.orientation===o.HORIZONTAL?r.NEGATIVE:r.POSITIVE;Object.values(r).includes(this.buttonPosition)||(this.buttonPosition=t),Object.values(r).includes(this.arrowDirection)||(this.arrowDirection=t)}setGrabberButton(){this.ensureValidDirections();const t=this.querySelector("mdc-button");if(t){const i=this.getArrowIcon();t.setAttribute("variant","secondary"),t.setAttribute("prefix-icon",i)}}getArrowIcon(){const t=this.orientation===o.HORIZONTAL,i=this.arrowDirection===r.POSITIVE;return t?i?m.UP:m.DOWN:i?m.RIGHT:m.LEFT}update(t){super.update(t),t.has("orientation")&&this.setOrientation(this.orientation),t.has("variant")&&this.setVariant(this.variant),(t.has("orientation")||t.has("arrowDirection")||t.has("buttonPosition"))&&this.setGrabberButton()}inferDividerType(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("slot"),i=(t==null?void 0:t.assignedElements({flatten:!0}))||[];if(i.length>1)return;const I=i.some(s=>s.tagName===Z.toUpperCase()),d=i.some(s=>s.tagName===B.toUpperCase());I&&!d?this.setAttribute("data-type","mdc-text-divider"):!I&&d&&(this.setAttribute("data-type","mdc-grabber-divider"),this.setGrabberButton())}render(){return v`
      <div></div>
      <slot @slotchange=${this.inferDividerType}></slot>
      <div></div>
    `}};f.styles=[...E.styles,...W];let n=f;y([g({type:String,reflect:!0})],n.prototype,"orientation");y([g({type:String,reflect:!0})],n.prototype,"variant");y([g({type:String,attribute:"arrow-direction",reflect:!0})],n.prototype,"arrowDirection");y([g({type:String,attribute:"button-position",reflect:!0})],n.prototype,"buttonPosition");n.register(U);const M={text:v`<mdc-text tagname="h1">Label</mdc-text>`,grabber:v`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,noChildren:v``},q=e=>{const t=M[e.typeOfChildren]||v``;return v`
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
  `},T={title:"Components/decorator/divider",tags:["autodocs"],component:"mdc-divider",render:q,parameters:{badges:["stable"]},argTypes:{typeOfChildren:{control:"radio",options:["noChildren","text","grabber"],description:"Choose the type of content to render inside the divider"},orientation:{control:"radio",options:Object.values(o)},variant:{control:"radio",options:Object.values(b)},"arrow-direction":{control:"select",options:Object.values(r)},"button-position":{control:"select",options:Object.values(r)},...$(["--mdc-divider-background-color","--mdc-divider-width","--mdc-divider-horizontal-gradient","--mdc-divider-vertical-gradient","--mdc-divider-text-size","--mdc-divider-text-color","--mdc-divider-text-margin","--mdc-divider-grabber-button-background-color-normal","--mdc-divider-grabber-button-background-color-hover","--mdc-divider-grabber-button-background-color-pressed","--mdc-divider-grabber-button-border-color","--mdc-divider-grabber-button-border-radius","--mdc-divider-text-line-height"]),...j,...P,...O(["observer"])}},p={args:{typeOfChildren:"noChildren",orientation:o.HORIZONTAL,variant:b.SOLID,"arrow-direction":r.NEGATIVE,"button-position":r.NEGATIVE},decorators:[(e,t)=>(t.args.typeOfChildren==="text"&&t.args.orientation===o.VERTICAL&&(t.args.orientation=o.HORIZONTAL),e())]},l={argTypes:{...T.argTypes,typeOfChildren:{control:"radio",options:["noChildren"],description:"NoChildren type is selected"},...O(["arrow-direction","button-position"])},args:{typeOfChildren:"noChildren",orientation:o.HORIZONTAL,variant:b.SOLID}},u={argTypes:{...T.argTypes,typeOfChildren:{control:"radio",options:["text"],description:"Text type is selected"},orientation:{control:"radio",options:[o.HORIZONTAL],description:`Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.`},...O(["arrow-direction","button-position"])},args:{...l.args,typeOfChildren:"text"}},h={argTypes:{...T.argTypes,typeOfChildren:{control:"radio",options:["grabber"],description:"Grabber Button type is selected"}},args:{...l.args,typeOfChildren:"grabber","arrow-direction":r.NEGATIVE,"button-position":r.NEGATIVE}};var N,A,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var R,w,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var x,V,k;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(V=u.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var S,z,L;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(z=h.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const pt=["Example","noChildrenDivider","textDivider","grabberButtonDivider"];export{p as Example,pt as __namedExportsOrder,T as default,h as grabberButtonDivider,l as noChildrenDivider,u as textDivider};
