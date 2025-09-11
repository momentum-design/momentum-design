import{i as R,k as h}from"./lit-element-D5KKan5q.js";import{n as w}from"./property-Bj3TGwkg.js";import{t as i}from"./if-defined-D5BV9-c0.js";import{a as P,B as D}from"./button.component-DPkHVNTO.js";import{D as j,P as N,a as E,B as U,I as u}from"./button.constants-BBlkZKjZ.js";import{L as Z}from"./linksimple.component-NGz6eGkj.js";import{a as V}from"./index-CqVtAZCJ.js";import{u as F}from"./provider.component-DrWB4byV.js";import"./index-BsapJqGO.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as M,s as W}from"./commonArgTypes-BluK8w5L.js";import{a as q,d as Y}from"./utils-CFOyPOhY.js";import"./state-CmYk530Z.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-1GEifFmP.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./button.utils-rNW36Ji7.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./iframe-D9uOLpUa.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const G=R`
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
`,H=[G,...V(!0)];var J=Object.defineProperty,C=(t,e,n,X)=>{for(var r=void 0,m=t.length-1,f;m>=0;m--)(f=t[m])&&(r=f(e,n,r)||r);return r&&J(e,n,r),r};const b=class b extends P(Z){constructor(){super(...arguments),this.size=j.SIZE}setSoftDisabled(e,n){n?e.setAttribute("aria-disabled","true"):e.removeAttribute("aria-disabled")}update(e){super.update(e),e.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),e.has("size")&&this.setSize(this.size),e.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),e.has("color")&&this.setColor(this.color),e.has("typeInternal")&&this.setSize(this.size),(e.has("prefixIcon")||e.has("postfixIcon"))&&this.inferButtonType()}render(){return h`
      <a
        class="mdc-focus-ring"
        part="anchor"
        href="${this.href}"
        target="${this.target}"
        rel="${i(this.rel)}"
        download="${i(this.download)}"
        ping="${i(this.ping)}"
        hreflang="${i(this.hreflang)}"
        type="${i(this.type)}"
        referrerpolicy="${i(this.referrerpolicy)}"
        aria-label="${this.dataAriaLabel??""}"
        tabindex="${this.disabled?-1:0}"
      >
        ${this.prefixIcon?h`<mdc-icon
              name="${this.prefixIcon}"
              part="prefix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
        <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
        ${this.postfixIcon?h`<mdc-icon
              name="${this.postfixIcon}"
              part="postfix-icon"
              length-unit="rem"
            ></mdc-icon>`:""}
      </a>
    `}};b.styles=[...D.styles,...H];let a=b;C([w({type:Number,reflect:!0})],a.prototype,"size");C([w({type:Boolean,attribute:"soft-disabled",reflect:!0})],a.prototype,"softDisabled");const K=F.constructTagName("buttonlink");a.register(K);const Q=t=>h` <mdc-buttonlink
    @click="${s("onclick")}"
    @keydown="${s("onkeydown")}"
    @focus="${s("onfocus")}"
    @blur="${s("onblur")}"
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
  >`,Lt={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:Q,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},size:{control:"select",options:Object.values(N)},color:{control:"select",options:Object.values(E)},variant:{control:"select",options:Object.values(U)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},"data-aria-label":{control:"text"},...q(["icon-name","inline","inverted","handleNavigation","--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"]),...Y([]),...M,...W}},o={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:N[32],color:E.DEFAULT,variant:U.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},l={args:{...o.args}},c={args:{...o.args,"prefix-icon":"placeholder-bold"}},d={args:{...o.args,"postfix-icon":"placeholder-bold"}},p={argTypes:{size:{options:Object.values(u)},"aria-label":{description:"Aria label for the icon buttonLink. Required for accessibility."}},args:{...o.args,children:"","prefix-icon":"placeholder-bold",size:u[32],"aria-label":"icon buttonLink","data-aria-label":"icon buttonLink for accessibility"}};var x,y,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var k,v,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var $,I,S;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var z,L,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var _,A,B;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Ot=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{o as Example,p as IconButtonLink,l as PillButtonLink,d as PillWithPostfixIcon,c as PillWithPrefixIcon,Ot as __namedExportsOrder,Lt as default};
