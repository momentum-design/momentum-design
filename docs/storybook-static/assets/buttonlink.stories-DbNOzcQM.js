import{U as P,X as j,a0 as D,k as n,n as N,u as M,P as E,b as U,B as C,I as u,R as Z}from"./iframe-BP3AX2ct.js";import{t}from"./if-defined-DcFDK1LV.js";import{a as V,B as F}from"./button.component-Bq8C_gde.js";import{L as W}from"./linksimple.component-D4gyDenZ.js";import"./index-BA-5qcsH.js";import{i as x}from"./manifest-D8HABGqZ.js";import{c as Y,s as G}from"./commonArgTypes-BG7EqI50.js";import{h as K}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./buttonsimple.component-B9fsjtzB.js";import"./TabIndexMixin-CSnhgxZt.js";import"./DisabledMixin-3kafPYYR.js";import"./button.utils-rNW36Ji7.js";import"./DataAriaLabelMixin-Cv2DWa48.js";import"./index-B1NKWUza.js";import"./index-DTrDRi1E.js";const X=P`
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
`,q=[X,...j(!0)];var H=Object.defineProperty,R=(e,o,s,tt)=>{for(var i=void 0,f=e.length-1,m;f>=0;f--)(m=e[f])&&(i=m(o,s,i)||i);return i&&H(o,s,i),i};const b=class b extends V(W){constructor(){super(...arguments),this.size=D.SIZE}setSoftDisabled(o,s){s?o.setAttribute("aria-disabled","true"):o.removeAttribute("aria-disabled")}update(o){super.update(o),o.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&this.inferButtonType()}renderAnchorContent(){return n`
      ${this.prefixIcon?n`<mdc-icon name="${this.prefixIcon}" part="prefix-icon" length-unit="rem"></mdc-icon>`:""}
      <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
      ${this.postfixIcon?n`<mdc-icon name="${this.postfixIcon}" part="postfix-icon" length-unit="rem"></mdc-icon>`:""}
    `}render(){return n`
      <a
        class="mdc-focus-ring"
        part="anchor"
        href="${t(this.href)}"
        target="${this.target}"
        rel="${t(this.rel)}"
        download="${t(this.download)}"
        ping="${t(this.ping)}"
        hreflang="${t(this.hreflang)}"
        type="${t(this.type)}"
        referrerpolicy="${t(this.referrerpolicy)}"
        role="button"
        aria-label="${this.dataAriaLabel??""}"
        tabindex="${this.disabled?-1:0}"
      >
        ${this.renderAnchorContent()}
      </a>
    `}};b.styles=[...F.styles,...q];let a=b;R([N({type:Number,reflect:!0})],a.prototype,"size");R([N({type:Boolean,attribute:"soft-disabled",reflect:!0})],a.prototype,"softDisabled");const J=M.constructTagName("buttonlink");a.register(J);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Q=e=>n`<div role="${Z.MAIN}">
    <mdc-buttonlink
      @click="${l("onclick")}"
      @keydown="${l("onkeydown")}"
      @focus="${l("onfocus")}"
      @blur="${l("onblur")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      prefix-icon="${t(e["prefix-icon"])}"
      postfix-icon="${t(e["postfix-icon"])}"
      size="${t(e.size)}"
      color="${t(e.color)}"
      variant="${t(e.variant)}"
      href="${t(e.href)}"
      target="${t(e.target)}"
      rel="${t(e.rel)}"
      download="${t(e.download)}"
      ping="${t(e.ping)}"
      hreflang="${t(e.hreflang)}"
      type="${t(e.type)}"
      referrerpolicy="${t(e.referrerpolicy)}"
      data-aria-label="${t(e["data-aria-label"])}"
      >${e.children}</mdc-buttonlink
    >
  </div>`,xt={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:Q,argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"select",options:Object.keys(x)},"postfix-icon":{control:"select",options:Object.keys(x)},size:{control:"select",options:Object.values(E)},color:{control:"select",options:Object.values(U)},variant:{control:"select",options:Object.values(C)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},download:{control:"text"},ping:{control:"text"},hreflang:{control:"text"},type:{control:"text"},referrerpolicy:{control:"text"},"data-aria-label":{control:"text"},...K(["icon-name","inline","inverted","handleNavigation"]),...Y,...G}},r={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:E[32],color:U.DEFAULT,variant:C.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},c={args:{...r.args}},p={args:{...r.args,"prefix-icon":"placeholder-bold"}},d={args:{...r.args,"postfix-icon":"placeholder-bold"}},h={argTypes:{size:{options:Object.values(u)}},args:{...r.args,children:"","prefix-icon":"placeholder-bold",size:u[32],"data-aria-label":"icon buttonLink"}};var y,g,$;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...($=(g=r.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var T,I,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var S,v,_;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...(_=(v=p.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var z,k,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var w,A,B;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    }
  },
  args: {
    ...Example.args,
    children: '',
    'prefix-icon': 'placeholder-bold',
    size: ICON_BUTTON_SIZES[32],
    'data-aria-label': 'icon buttonLink'
  }
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const yt=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{r as Example,h as IconButtonLink,c as PillButtonLink,d as PillWithPostfixIcon,p as PillWithPrefixIcon,yt as __namedExportsOrder,xt as default};
