import{k as d}from"./lit-element-D5KKan5q.js";import{n as N}from"./property-Bj3TGwkg.js";import{a as w,B as P}from"./button.component-DPkHVNTO.js";import{D as R,P as A,a as E,B as U,I as u}from"./button.constants-BBlkZKjZ.js";import{L as D}from"./linksimple.component-DpE2jXnl.js";import{u as j}from"./provider.component-DrWB4byV.js";import"./index-5cTagJDb.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as Z,s as V}from"./commonArgTypes-BluK8w5L.js";import{a as M,d as W}from"./utils-CFOyPOhY.js";import"./state-CmYk530Z.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-1GEifFmP.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./iframe-Dig_U7mL.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";var F=Object.defineProperty,C=(e,o,s,G)=>{for(var r=void 0,m=e.length-1,b;m>=0;m--)(b=e[m])&&(r=b(o,s,r)||r);return r&&F(o,s,r),r};const f=class f extends w(D){constructor(){super(...arguments),this.size=R.SIZE}setSoftDisabled(o,s){s?o.setAttribute("aria-disabled","true"):o.removeAttribute("aria-disabled")}update(o){super.update(o),o.has("softDisabled")&&this.setSoftDisabled(this,this.softDisabled),o.has("size")&&this.setSize(this.size),o.has("variant")&&(this.setVariant(this.variant),this.setSize(this.size)),o.has("color")&&this.setColor(this.color),o.has("typeInternal")&&this.setSize(this.size),(o.has("prefixIcon")||o.has("postfixIcon"))&&this.inferButtonType()}render(){return d`
      ${this.prefixIcon?d` <mdc-icon name="${this.prefixIcon}" part="prefix-icon" length-unit="rem"></mdc-icon>`:""}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon?d` <mdc-icon name="${this.postfixIcon}" part="postfix-icon" length-unit="rem"></mdc-icon>`:""}
    `}};f.styles=[...P.styles];let i=f;C([N({type:Number,reflect:!0})],i.prototype,"size");C([N({type:Boolean,attribute:"soft-disabled",reflect:!0})],i.prototype,"softDisabled");const q=j.constructTagName("buttonlink");i.register(q);const Y=e=>d` <mdc-buttonlink
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
  >`,Ie={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:Y,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},size:{control:"select",options:Object.values(A)},color:{control:"select",options:Object.values(E)},variant:{control:"select",options:Object.values(U)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},...M(["icon-name","inline","inverted","handleNavigation","--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"]),...W([]),...Z,...V}},t={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:A[32],color:E.DEFAULT,variant:U.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},a={args:{...t.args}},l={args:{...t.args,"prefix-icon":"placeholder-bold"}},c={args:{...t.args,"postfix-icon":"placeholder-bold"}},p={argTypes:{size:{options:Object.values(u)},"aria-label":{description:"Aria label for the icon buttonLink. Required for accessibility."}},args:{...t.args,children:"","prefix-icon":"placeholder-bold",size:u[32],"aria-label":"icon buttonLink"}};var h,x,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var y,z,B;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ve=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{t as Example,p as IconButtonLink,a as PillButtonLink,c as PillWithPostfixIcon,l as PillWithPrefixIcon,ve as __namedExportsOrder,Ie as default};
