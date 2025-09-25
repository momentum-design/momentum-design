import{i as U,k as p,n as B,u as R}from"./iframe-CXwaMhTJ.js";import{a as D,B as P}from"./button.component-tJYu4dOM.js";import{D as j,P as N,a as E,B as w,I as f}from"./button.constants-BYi0TZnF.js";import{L as Z}from"./linksimple.component-Z3tjdL50.js";import{a as M}from"./index-BH7b8QFc.js";import"./index-BhZLYGY0.js";import{c as V,s as F}from"./commonArgTypes-BluK8w5L.js";import{a as W,d as Y}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-uJ9ziZ_h.js";import"./keys-hFXe221I.js";import"./DisabledMixin-8BMo0Dt6.js";import"./TabIndexMixin-Ckq1KLgg.js";import"./buttonsimple.constants-BOMNYkoG.js";import"./button.utils-rNW36Ji7.js";import"./if-defined-DIAx6F34.js";import"./DataAriaLabelMixin-CZlwpjd5.js";import"./index-D0R6A-G4.js";import"./index-DTrDRi1E.js";const q=U`
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
    border-color: var(--mdc-button-secondary-border-color);
  }

  :host([variant='secondary'][disabled])::part(anchor),
  :host([variant='secondary'][soft-disabled])::part(anchor) {
    border-color: var(--mdc-button-secondary-disabled-border-color);
  }
`,G=[q,...M(!0)];var K=Object.defineProperty,C=(t,o,n,Q)=>{for(var r=void 0,b=t.length-1,m;b>=0;b--)(m=t[b])&&(r=m(o,n,r)||r);return r&&K(o,n,r),r};const h=class h extends D(Z){constructor(){super(...arguments),this.size=j.SIZE}setSoftDisabled(o,n){n?o.setAttribute("aria-disabled","true"):o.removeAttribute("aria-disabled")}update(o){super.update(o),o.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&this.inferButtonType()}renderAnchorContent(){return p`
      ${this.prefixIcon?p`<mdc-icon name="${this.prefixIcon}" part="prefix-icon" length-unit="rem"></mdc-icon>`:""}
      <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
      ${this.postfixIcon?p`<mdc-icon name="${this.postfixIcon}" part="postfix-icon" length-unit="rem"></mdc-icon>`:""}
    `}};h.styles=[...P.styles,...G];let i=h;C([B({type:Number,reflect:!0})],i.prototype,"size");C([B({type:Boolean,attribute:"soft-disabled",reflect:!0})],i.prototype,"softDisabled");const H=R.constructTagName("buttonlink");i.register(H);const{action:a}=__STORYBOOK_MODULE_ACTIONS__,J=t=>p` <mdc-buttonlink
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @focus="${a("onfocus")}"
    @blur="${a("onblur")}"
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
  >`,kt={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:J,argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},size:{control:"select",options:Object.values(N)},color:{control:"select",options:Object.values(E)},variant:{control:"select",options:Object.values(w)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},"data-aria-label":{control:"text"},...W(["icon-name","inline","inverted","handleNavigation","--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"]),...Y([]),...V,...F}},e={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:N[32],color:E.DEFAULT,variant:w.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},s={args:{...e.args}},l={args:{...e.args,"prefix-icon":"placeholder-bold"}},c={args:{...e.args,"postfix-icon":"placeholder-bold"}},d={argTypes:{size:{options:Object.values(f)},"aria-label":{description:"Aria label for the icon buttonLink. Required for accessibility."}},args:{...e.args,children:"","prefix-icon":"placeholder-bold",size:f[32],"aria-label":"icon buttonLink","data-aria-label":"icon buttonLink for accessibility"}};var u,x,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,T,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var g,I,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,_,z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var L,$,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const Tt=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{e as Example,d as IconButtonLink,s as PillButtonLink,c as PillWithPostfixIcon,l as PillWithPrefixIcon,Tt as __namedExportsOrder,kt as default};
