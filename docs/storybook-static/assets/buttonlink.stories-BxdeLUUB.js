import{S as C,X as R,a0 as P,k as d,n as B,u as D,P as N,a as E,B as w,I as u}from"./iframe-D0jeH_1V.js";import{a as j,B as Z}from"./button.component-BKk_ehtl.js";import{L as M}from"./linksimple.component-Cfe8jAh8.js";import"./index-DeFIgEEb.js";import{c as V,s as F}from"./commonArgTypes-BluK8w5L.js";import{a as W}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./buttonsimple.component-4OH0KaON.js";import"./TabIndexMixin-DxZG6Klh.js";import"./DisabledMixin-CgF8PS8f.js";import"./button.utils-rNW36Ji7.js";import"./if-defined-CfnkxC3R.js";import"./DataAriaLabelMixin-DV5KNmKs.js";import"./index-K1gnSoAO.js";import"./index-DTrDRi1E.js";const Y=C`
  :host {
    border: unset;
  }

  :host([data-btn-type='pill']),
  :host([data-btn-type='pill-with-icon']) {
    padding: unset;
  }

  :host([data-btn-type='pill'][size='24'])::part(anchor),
  :host([data-btn-type='pill-with-icon'][size='24'])::part(anchor) {
    padding: 0 0.625rem;
  }

  :host([data-btn-type='pill'][size='32'])::part(anchor),
  :host([data-btn-type='pill-with-icon'][size='32'])::part(anchor),
  :host([data-btn-type='pill'][size='28'])::part(anchor),
  :host([data-btn-type='pill-with-icon'][size='28'])::part(anchor) {
    padding: 0 0.75rem;
  }

  :host([data-btn-type='pill'][size='40'])::part(anchor),
  :host([data-btn-type='pill-with-icon'][size='40'])::part(anchor) {
    padding: 0 1rem;
  }

  :host([disabled]) {
    cursor: auto;
    pointer-events: none;
  }

  /* Anchor inside ButtonLink */
  :host::part(anchor) {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: inherit;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    border: 1px solid transparent;
  }

  :host([variant='secondary'])::part(anchor) {
    border-color: var(--mdc-button-border-color);
  }

  :host([variant='secondary'][disabled])::part(anchor),
  :host([variant='secondary'][soft-disabled])::part(anchor) {
    border-color: var(--mdc-button-border-color);
  }
`,q=[Y,...R(!0)];var G=Object.defineProperty,U=(t,e,a,H)=>{for(var i=void 0,h=t.length-1,f;h>=0;h--)(f=t[h])&&(i=f(e,a,i)||i);return i&&G(e,a,i),i};const b=class b extends j(M){constructor(){super(...arguments),this.size=P.SIZE}setSoftDisabled(e,a){a?e.setAttribute("aria-disabled","true"):e.removeAttribute("aria-disabled")}update(e){super.update(e),e.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),e.has("size")&&this.setSize(this.size),e.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),e.has("color")&&this.setColor(this.color),e.has("typeInternal")&&this.setSize(this.size),(e.has("prefixIcon")||e.has("postfixIcon"))&&this.inferButtonType()}renderAnchorContent(){return d`
      ${this.prefixIcon?d`<mdc-icon name="${this.prefixIcon}" part="prefix-icon" length-unit="rem"></mdc-icon>`:""}
      <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
      ${this.postfixIcon?d`<mdc-icon name="${this.postfixIcon}" part="postfix-icon" length-unit="rem"></mdc-icon>`:""}
    `}};b.styles=[...Z.styles,...q];let r=b;U([B({type:Number,reflect:!0})],r.prototype,"size");U([B({type:Boolean,attribute:"soft-disabled",reflect:!0})],r.prototype,"softDisabled");const K=D.constructTagName("buttonlink");r.register(K);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,X=t=>d` <mdc-buttonlink
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @focus="${n("onfocus")}"
    @blur="${n("onblur")}"
    ?disabled="${t.disabled}"
    ?soft-disabled="${t["soft-disabled"]}"
    prefix-icon="${t["prefix-icon"]}"
    postfix-icon="${t["postfix-icon"]}"
    size="${t.size}"
    color="${t.color}"
    variant="${t.variant}"
    href="${t.href}"
    target="${t.target}"
    rel="${t.rel}"
    data-aria-label="${t["data-aria-label"]}"
    >${t.children}</mdc-buttonlink
  >`,bt={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:X,argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},size:{control:"select",options:Object.values(N)},color:{control:"select",options:Object.values(E)},variant:{control:"select",options:Object.values(w)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},"data-aria-label":{control:"text"},...W(["icon-name","inline","inverted","handleNavigation"]),...V,...F}},o={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:N[32],color:E.DEFAULT,variant:w.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},s={args:{...o.args}},l={args:{...o.args,"prefix-icon":"placeholder-bold"}},c={args:{...o.args,"postfix-icon":"placeholder-bold"}},p={argTypes:{size:{options:Object.values(u)},"aria-label":{description:"Aria label for the icon buttonLink. Required for accessibility."}},args:{...o.args,children:"","prefix-icon":"placeholder-bold",size:u[32],"aria-label":"icon buttonLink","data-aria-label":"icon buttonLink for accessibility"}};var m,x,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'VisitLink',
    disabled: false,
    'soft-disabled': false,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    variant: BUTTON_VARIANTS.PRIMARY,
    href: 'https://www.webex.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,g,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(I=(g=s.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var S,O,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...(_=(O=l.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var k,v,z;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(z=(v=c.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var L,$,A;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    },
    'aria-label': {
      description: 'Aria label for the icon buttonLink. Required for accessibility.'
    }
  },
  args: {
    ...Example.args,
    children: '',
    'prefix-icon': 'placeholder-bold',
    size: ICON_BUTTON_SIZES[32],
    'aria-label': 'icon buttonLink',
    'data-aria-label': 'icon buttonLink for accessibility'
  }
}`,...(A=($=p.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const ft=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{o as Example,p as IconButtonLink,s as PillButtonLink,c as PillWithPostfixIcon,l as PillWithPrefixIcon,ft as __namedExportsOrder,bt as default};
