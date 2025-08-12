import{k as p}from"./lit-element-D5KKan5q.js";import{n as N,u as w}from"./provider.component-BaQC7CJH.js";import{a as P,B as R}from"./button.component-CnLy9CQy.js";import{D,P as A,a as E,B as U,I as u}from"./button.constants-BpS-4nLb.js";import{L as j}from"./linksimple.component-D2w8QSTB.js";import"./index-C8hUXlI_.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as Z,s as V}from"./commonArgTypes-BluK8w5L.js";import{a as M,d as W}from"./utils-CFOyPOhY.js";import"./state-C0WmBOuD.js";import"./roles-DU0xbrD4.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./iframe-BTdpgPYp.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";var F=Object.defineProperty,C=(e,o,s,G)=>{for(var i=void 0,m=e.length-1,b;m>=0;m--)(b=e[m])&&(i=b(o,s,i)||i);return i&&F(o,s,i),i};const f=class f extends P(j){constructor(){super(...arguments),this.size=D.SIZE}setSoftDisabled(o,s){s?o.setAttribute("aria-disabled","true"):o.removeAttribute("aria-disabled")}update(o){super.update(o),o.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&this.inferButtonType()}render(){return p`
      ${this.prefixIcon?p` <mdc-icon name="${this.prefixIcon}" part="prefix-icon" length-unit="rem"></mdc-icon>`:""}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon?p` <mdc-icon name="${this.postfixIcon}" part="postfix-icon" length-unit="rem"></mdc-icon>`:""}
    `}};f.styles=[...R.styles];let r=f;C([N({type:Number,reflect:!0})],r.prototype,"size");C([N({type:Boolean,attribute:"soft-disabled",reflect:!0})],r.prototype,"softDisabled");const q=w.constructTagName("buttonlink");r.register(q);const Y=e=>p` <mdc-buttonlink
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @focus="${n("onfocus")}"
    @blur="${n("onblur")}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    prefix-icon="${e["prefix-icon"]}"
    postfix-icon="${e["postfix-icon"]}"
    size="${e.size}"
    color="${e.color}"
    variant="${e.variant}"
    href="${e.href}"
    target="${e.target}"
    rel="${e.rel}"
    tabindex="${e.tabIndex}"
    aria-label="${e["aria-label"]}"
    >${e.children}</mdc-buttonlink
  >`,ke={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:Y,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},size:{control:"select",options:Object.values(A)},color:{control:"select",options:Object.values(E)},variant:{control:"select",options:Object.values(U)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},...M(["icon-name","inline","inverted","handleNavigation","--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"]),...W([]),...Z,...V}},t={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:A[32],color:E.DEFAULT,variant:U.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},a={args:{...t.args}},l={args:{...t.args,"prefix-icon":"placeholder-bold"}},c={args:{...t.args,"postfix-icon":"placeholder-bold"}},d={argTypes:{size:{options:Object.values(u)},"aria-label":{description:"Aria label for the icon buttonLink. Required for accessibility."}},args:{...t.args,children:"","prefix-icon":"placeholder-bold",size:u[32],"aria-label":"icon buttonLink"}};var h,x,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var k,I,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,g,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...(O=(g=l.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var _,$,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var y,z,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    'aria-label': 'icon buttonLink'
  }
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const Ie=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{t as Example,d as IconButtonLink,a as PillButtonLink,c as PillWithPostfixIcon,l as PillWithPrefixIcon,Ie as __namedExportsOrder,ke as default};
