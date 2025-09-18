import{i as U,k as p}from"./lit-element-D5KKan5q.js";import{n as B,u as R}from"./provider.component-BaQC7CJH.js";import{a as P,B as D}from"./button.component-D5eG231X.js";import{D as j,P as N,a as E,B as w,I as f}from"./button.constants-B6suqA4v.js";import{L as Z}from"./linksimple.component-BhKRWe-u.js";import{a as V}from"./index-CqVtAZCJ.js";import"./index-Bm26OmBi.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as F,s as M}from"./commonArgTypes-BluK8w5L.js";import{a as W,d as q}from"./utils-CFOyPOhY.js";import"./state-C0WmBOuD.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./buttonsimple.constants-An7St6B1.js";import"./button.utils-rNW36Ji7.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./iframe-Cob3QfUc.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const Y=U`
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
`,G=[Y,...V(!0)];var H=Object.defineProperty,C=(t,o,a,Q)=>{for(var r=void 0,m=t.length-1,h;m>=0;m--)(h=t[m])&&(r=h(o,a,r)||r);return r&&H(o,a,r),r};const b=class b extends P(Z){constructor(){super(...arguments),this.size=j.SIZE}setSoftDisabled(o,a){a?o.setAttribute("aria-disabled","true"):o.removeAttribute("aria-disabled")}update(o){super.update(o),o.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&this.inferButtonType()}renderAnchorContent(){return p`
      ${this.prefixIcon?p`<mdc-icon name="${this.prefixIcon}" part="prefix-icon" length-unit="rem"></mdc-icon>`:""}
      <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
      ${this.postfixIcon?p`<mdc-icon name="${this.postfixIcon}" part="postfix-icon" length-unit="rem"></mdc-icon>`:""}
    `}};b.styles=[...D.styles,...G];let i=b;C([B({type:Number,reflect:!0})],i.prototype,"size");C([B({type:Boolean,attribute:"soft-disabled",reflect:!0})],i.prototype,"softDisabled");const J=R.constructTagName("buttonlink");i.register(J);const K=t=>p` <mdc-buttonlink
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
  >`,zt={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:K,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},size:{control:"select",options:Object.values(N)},color:{control:"select",options:Object.values(E)},variant:{control:"select",options:Object.values(w)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},"data-aria-label":{control:"text"},...W(["icon-name","inline","inverted","handleNavigation","--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"]),...q([]),...F,...M}},e={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:N[32],color:E.DEFAULT,variant:w.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},s={args:{...e.args}},l={args:{...e.args,"prefix-icon":"placeholder-bold"}},c={args:{...e.args,"postfix-icon":"placeholder-bold"}},d={argTypes:{size:{options:Object.values(f)},"aria-label":{description:"Aria label for the icon buttonLink. Required for accessibility."}},args:{...e.args,children:"","prefix-icon":"placeholder-bold",size:f[32],"aria-label":"icon buttonLink","data-aria-label":"icon buttonLink for accessibility"}};var u,x,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,v,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var g,I,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var z,L,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var _,$,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const Lt=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{e as Example,d as IconButtonLink,s as PillButtonLink,c as PillWithPostfixIcon,l as PillWithPrefixIcon,Lt as __namedExportsOrder,zt as default};
