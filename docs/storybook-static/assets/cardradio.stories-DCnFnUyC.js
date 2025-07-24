import{i as q,D as Z,k as l}from"./lit-element-D5KKan5q.js";import{n as W}from"./index-C9z9WAEj.js";import{D as Q}from"./DisabledMixin-BZruwOeC.js";import{T as P}from"./TabIndexMixin-CsrHswKP.js";import{C as x}from"./card.component-BTL2dXcs.js";import{R as X}from"./roles-BH_hBfTz.js";import{a as J}from"./index-B-GnYs90.js";import{T as K}from"./index-CufkW33b.js";import"./index-ewT5CF46.js";import{V as y}from"./index-BrLJ_9IK.js";import"./index-Cdz8MLaY.js";import{Q as Y}from"./repeat-CNQ7t7Vw.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as ee,s as te}from"./commonArgTypes-BluK8w5L.js";import{h as ae,d as re}from"./utils-CF1irry3.js";import{V as oe,O as T,D as t}from"./FooterMixin-BsROIhT5.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-DM3Lkm3w.js";import"./index-D0GW8FnA.js";import"./button.component-DLvLGT3A.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-q2YakOka.js";import"./button.utils-rNW36Ji7.js";import"./index-_Nf1vLd4.js";import"./popover.component-b3MZdLOz.js";import"./if-defined-D5BV9-c0.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./formfieldwrapper.component-D6q8AeiS.js";import"./radio.constants-DXoIHWZL.js";import"./iframe-BNsfsY0w.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./v4-CQkTLCs1.js";import"./link.constants-CqyNsepP.js";const ie=q`
  :host {
    cursor: pointer;
    user-select: none;
  }

  :host(:dir(ltr))::part(check) {
    margin-left: auto;
  }

  :host(:dir(rtl))::part(check) {
    margin-right: auto;
  }

  :host(:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host(:active) {
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]) {
    border: 1px solid var(--mds-color-theme-outline-input-active);
    box-shadow: 0 0 0 1px var(--mds-color-theme-outline-input-active);
    background-color: var(--mds-color-theme-background-primary-active);
  }

  :host([checked]:hover) {
    background-color: var(--mds-color-theme-background-primary-hover);
  }

  :host([checked]:active) {
    background-color: var(--mds-color-theme-background-primary-ghost);
  }

  :host::part(check-icon) {
    color: var(--mds-color-theme-text-secondary-normal);
  }

  :host([checked])::part(check-icon) {
    color: var(--mds-color-theme-text-accent-normal);
  }

  :host([disabled]) {
    background-color: var(--mds-color-theme-background-primary-ghost);
    color: var(--mds-color-theme-text-primary-disabled);
    border-color: var(--mds-color-theme-outline-primary-disabled);
  }

  :host([disabled])::part(image) {
    opacity: 0.5;
  }
`,le=[ie,...J()];var de=Object.defineProperty,j=(e,a,i,d)=>{for(var r=void 0,o=e.length-1,I;o>=0;o--)(I=e[o])&&(r=I(a,i,r)||r);return r&&de(a,i,r),r};const f=class f extends Q(P(x)){constructor(){super(),this.checked=!1,this.name="",this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",this.toggleOnEnter),this.addEventListener("keyup",this.toggleOnSpace)}connectedCallback(){super.connectedCallback(),this.role=X.RADIO}getAllCardsWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-cardradio[name="${this.name}"]`))}toggleChecked(){if(this.disabled)return;this.getAllCardsWithinSameGroup().forEach(i=>{i.checked=!1}),this.checked=!0}setDisabled(a){this.setAttribute("aria-disabled",`${a}`),this.tabIndex=a?-1:0}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&this.setDisabled(this.disabled)}updateCardRadio(a,i){a[i].focus(),a[i].toggleChecked()}toggleOnEnter(a){if(this.disabled)return;const d=this.getAllCardsWithinSameGroup().filter(o=>!o.disabled),r=d.indexOf(this);if(["ArrowDown","ArrowRight"].includes(a.key)){const o=(r+1)%d.length;this.updateCardRadio(d,o)}else if(["ArrowUp","ArrowLeft"].includes(a.key)){const o=(r-1+d.length)%d.length;this.updateCardRadio(d,o)}a.key==="Enter"&&this.toggleChecked()}toggleOnSpace(a){a.key===" "&&this.toggleChecked()}renderHeader(){return this.cardTitle?l`<div part="header">
      ${this.renderIcon()} ${this.renderTitle()}
      <mdc-staticradio part="check" ?checked="${this.checked}" ?disabled="${this.disabled}"></mdc-staticradio>
    </div>`:Z}render(){return l`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};f.styles=[...x.styles,...le];let c=f;j([W({type:Boolean,reflect:!0})],c.prototype,"checked");j([W({type:String})],c.prototype,"name");c.register(K);const ne=e=>l` <mdc-cardradio
    @click="${s("onclick")}"
    @keydown="${s("onkeydown")}"
    @keyup="${s("onkeyup")}"
    @focus="${s("onfocus")}"
    @change="${s("onchange")}"
    name="${e.name}"
    variant="${e.variant}"
    orientation="${e.orientation}"
    card-title="${e["card-title"]}"
    subtitle="${e.subtitle}"
    image-src="${e["image-src"]}"
    image-alt="${e["image-alt"]}"
    icon-name="${e["icon-name"]}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    aria-label="${e["aria-label"]}"
    title-tag-name="${e["title-tag-name"]}"
    subtitle-tag-name="${e["subtitle-tag-name"]}"
    tabindex="${e.tabIndex}"
    class="${e.class}"
    style="${e.style}"
    >${e.children}</mdc-cardradio
  >`,Ke={title:"Components/card/cardradio",tags:["autodocs"],component:"mdc-cardradio",render:ne,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(oe)},orientation:{control:"select",options:Object.values(T)},name:{control:"text"},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"title-tag-name":{control:"select",options:Object.values(y)},"subtitle-tag-name":{control:"select",options:Object.values(y)},...ae(["children"]),...ee,...te}},n=l`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,m={args:{"card-title":"Title",name:"radio-card",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:n}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x280","image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:T.HORIZONTAL,children:n}},h={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label",checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:n}},b={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:l` <mdc-text slot="before-body" type="body-midsize-medium" tagname="span"
        >Content Before Body</mdc-text
      >
      <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body" />
      ${n}`}},g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x540","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,checked:!1,disabled:!1,tabIndex:0,children:l` <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body" />
      <mdc-text slot="after-body" type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
      ${n}`}},A={render:()=>l`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${Y([1,2,3,4],e=>l`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="https://placehold.co/320x200"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${n}
            </mdc-cardradio>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,argTypes:{...re(["aria-label","name","variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex"])}};var E,k,v;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    name: 'radio-card',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: defaultChildren
  }
}`,...(v=(k=m.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var N,S,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x280',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,$,R;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(R=($=h.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var L,D,G;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(G=(D=b.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var M,U,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/320x200',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\` <mdc-text slot="before-body" type="body-midsize-medium" tagname="span"
        >Content Before Body</mdc-text
      >
      <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body" />
      \${defaultChildren}\`
  }
}`,...(F=(U=u.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var V,B,w;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': 'https://placehold.co/160x540',
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\` <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body" />
      <mdc-text slot="after-body" type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
      \${defaultChildren}\`
  }
}`,...(w=(B=g.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var H,_,z;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        \${repeat([1, 2, 3, 4], index => html\`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title \${index}"
              subtitle="Subtitle"
              image-src="https://placehold.co/320x200"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              \${defaultChildren}
            </mdc-cardradio>
          \`)}
      </div>
    </mdc-formfieldgroup>
  \`,
  argTypes: {
    ...disableControls(['aria-label', 'name', 'variant', 'orientation', 'card-title', 'subtitle', 'image-src', 'image-alt', 'icon-name', 'checked', 'disabled', 'tabIndex'])
  }
}`,...(z=(_=A.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const Ye=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInRadioGroup"];export{b as CardWithoutBody,h as CardWithoutImage,A as CardsInRadioGroup,g as ContentAfterBody,u as ContentBeforeBody,m as Example,p as HorizontalCard,Ye as __namedExportsOrder,Ke as default};
