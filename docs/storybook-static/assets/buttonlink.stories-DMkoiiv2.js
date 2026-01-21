import{X as P,a0 as j,a2 as D,k as h,n as A,u as M,P as E,b as U,B as C,I as u,R as Z}from"./iframe-CUGe0MVU.js";import{a as V,B as F}from"./button.component-CpAhzLXI.js";import{L as W}from"./linksimple.component-BXUW0s24.js";import"./index-CXoUVess.js";import{i as x}from"./manifest-DRrdiy54.js";import{t as o}from"./if-defined-BA0pvBbp.js";import{c as Y,s as G}from"./commonArgTypes-BG7EqI50.js";import{h as K}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./buttonsimple.component-CZfhk0dL.js";import"./DisabledMixin-BAsAWpL6.js";import"./KeyToActionMixin-C36uALhV.js";import"./button.utils-rNW36Ji7.js";import"./DataAriaLabelMixin-Bv66yN0M.js";import"./index-D2ah7UPG.js";import"./index-DTrDRi1E.js";const X=P`
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
`,q=[X,...j(!0)];var H=Object.defineProperty,R=(t,e,s,tt)=>{for(var i=void 0,f=t.length-1,m;f>=0;f--)(m=t[f])&&(i=m(e,s,i)||i);return i&&H(e,s,i),i};const b=class b extends V(W){constructor(){super(...arguments),this.size=D.SIZE}setSoftDisabled(e,s){s?e.setAttribute("aria-disabled","true"):e.removeAttribute("aria-disabled")}update(e){super.update(e),e.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),e.has("size")&&this.setSize(this.size),e.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),e.has("color")&&this.setColor(this.color),e.has("typeInternal")&&this.setSize(this.size),(e.has("prefixIcon")||e.has("postfixIcon"))&&this.inferButtonType()}renderAnchorContent(){return h`
      ${this.prefixIcon?h`<mdc-icon name="${this.prefixIcon}" part="prefix-icon" length-unit="rem"></mdc-icon>`:""}
      <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
      ${this.postfixIcon?h`<mdc-icon name="${this.postfixIcon}" part="postfix-icon" length-unit="rem"></mdc-icon>`:""}
    `}};b.styles=[...F.styles,...q];let n=b;R([A({type:Number,reflect:!0})],n.prototype,"size");R([A({type:Boolean,attribute:"soft-disabled",reflect:!0})],n.prototype,"softDisabled");const J=M.constructTagName("buttonlink");n.register(J);const{action:a}=__STORYBOOK_MODULE_ACTIONS__,Q=t=>h`<div role="${Z.MAIN}">
    <mdc-buttonlink
      @click="${a("onclick")}"
      @keydown="${a("onkeydown")}"
      @focus="${a("onfocus")}"
      @blur="${a("onblur")}"
      ?disabled="${t.disabled}"
      ?soft-disabled="${t["soft-disabled"]}"
      prefix-icon="${o(t["prefix-icon"])}"
      postfix-icon="${o(t["postfix-icon"])}"
      size="${o(t.size)}"
      color="${o(t.color)}"
      variant="${o(t.variant)}"
      href="${o(t.href)}"
      target="${o(t.target)}"
      rel="${o(t.rel)}"
      download="${o(t.download)}"
      ping="${o(t.ping)}"
      hreflang="${o(t.hreflang)}"
      type="${o(t.type)}"
      referrerpolicy="${o(t.referrerpolicy)}"
      data-aria-label="${o(t["data-aria-label"])}"
      >${t.children}</mdc-buttonlink
    >
  </div>`,xt={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:Q,argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"select",options:Object.keys(x)},"postfix-icon":{control:"select",options:Object.keys(x)},size:{control:"select",options:Object.values(E)},color:{control:"select",options:Object.values(U)},variant:{control:"select",options:Object.values(C)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},download:{control:"text"},ping:{control:"text"},hreflang:{control:"text"},type:{control:"text"},referrerpolicy:{control:"text"},"data-aria-label":{control:"text"},...K(["icon-name","inline","inverted","handleNavigation"]),...Y,...G}},r={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:E[32],color:U.DEFAULT,variant:C.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},l={args:{...r.args}},c={args:{...r.args,"prefix-icon":"placeholder-bold"}},p={args:{...r.args,"postfix-icon":"placeholder-bold"}},d={argTypes:{size:{options:Object.values(u)}},args:{...r.args,children:"","prefix-icon":"placeholder-bold",size:u[32],"data-aria-label":"icon buttonLink"}};var y,T,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var I,O,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(S=(O=l.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var v,_,$;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...($=(_=c.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,k,L;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(L=(k=p.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var B,N,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const yt=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{r as Example,d as IconButtonLink,l as PillButtonLink,p as PillWithPostfixIcon,c as PillWithPrefixIcon,yt as __namedExportsOrder,xt as default};
