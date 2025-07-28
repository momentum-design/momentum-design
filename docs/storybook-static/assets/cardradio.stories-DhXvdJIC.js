import{i as Z,D as P,k as l}from"./lit-element-D5KKan5q.js";import{n as j}from"./index-C9z9WAEj.js";import{D as Q}from"./DisabledMixin-BZruwOeC.js";import{T as K}from"./TabIndexMixin-CsrHswKP.js";import{C as x}from"./card.component-CwwePeTB.js";import{R as X}from"./roles-BH_hBfTz.js";import{K as y}from"./keys-Hz01Ianf.js";import{a as Y}from"./index-B-GnYs90.js";import{T as J}from"./index-CSsSZIqV.js";import"./index-D1XiiTJ7.js";import{V as E}from"./index-BrLJ_9IK.js";import"./index-Cdz8MLaY.js";import{Q as ee}from"./repeat-CNQ7t7Vw.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as te,s as ae}from"./commonArgTypes-BluK8w5L.js";import{h as re,d as oe}from"./utils-CF1irry3.js";import{V as ie,O as T,D as t}from"./FooterMixin-Dvth3EaW.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./button.constants-Bee4ioCR.js";import"./buttonsimple.constants-BcidWKgH.js";import"./index-CjLJJg6E.js";import"./index-CAfG9Zq5.js";import"./button.component-D2q6UH7t.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-VcDu9Hac.js";import"./button.utils-rNW36Ji7.js";import"./index-BXbHvfQq.js";import"./popover.component-b3MZdLOz.js";import"./if-defined-D5BV9-c0.js";import"./index-96ToHBu8.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./formfieldwrapper.component-DfVq87Ge.js";import"./radio.constants-DXoIHWZL.js";import"./iframe-ButxfMKR.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./v4-CQkTLCs1.js";import"./link.constants-CqyNsepP.js";const le=Z`
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
`,de=[le,...Y()];var se=Object.defineProperty,q=(e,a,i,d)=>{for(var r=void 0,o=e.length-1,I;o>=0;o--)(I=e[o])&&(r=I(a,i,r)||r);return r&&se(a,i,r),r};const f=class f extends Q(K(x)){constructor(){super(),this.checked=!1,this.name="",this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",this.toggleOnEnter),this.addEventListener("keyup",this.toggleOnSpace)}connectedCallback(){super.connectedCallback(),this.role=X.RADIO}getAllCardsWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-cardradio[name="${this.name}"]`))}toggleChecked(){if(this.disabled)return;this.getAllCardsWithinSameGroup().forEach(i=>{i.checked=!1}),this.checked=!0}setDisabled(a){this.setAttribute("aria-disabled",`${a}`),this.tabIndex=a?-1:0}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&this.setDisabled(this.disabled)}updateCardRadio(a,i){a[i].focus(),a[i].toggleChecked()}toggleOnEnter(a){if(this.disabled)return;const d=this.getAllCardsWithinSameGroup().filter(o=>!o.disabled),r=d.indexOf(this);if(["ArrowDown","ArrowRight"].includes(a.key)){const o=(r+1)%d.length;this.updateCardRadio(d,o)}else if(["ArrowUp","ArrowLeft"].includes(a.key)){const o=(r-1+d.length)%d.length;this.updateCardRadio(d,o)}a.key===y.ENTER&&this.toggleChecked()}toggleOnSpace(a){a.key===y.SPACE&&this.toggleChecked()}renderHeader(){return this.cardTitle?l`<div part="header">
      ${this.renderIcon()} ${this.renderTitle()}
      <mdc-staticradio part="check" ?checked="${this.checked}" ?disabled="${this.disabled}"></mdc-staticradio>
    </div>`:P}render(){return l`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};f.styles=[...x.styles,...de];let c=f;q([j({type:Boolean,reflect:!0})],c.prototype,"checked");q([j({type:String})],c.prototype,"name");c.register(J);const ne=e=>l` <mdc-cardradio
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    @change="${n("onchange")}"
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
  >`,et={title:"Components/card/cardradio",tags:["autodocs"],component:"mdc-cardradio",render:ne,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(ie)},orientation:{control:"select",options:Object.values(T)},name:{control:"text"},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"title-tag-name":{control:"select",options:Object.values(E)},"subtitle-tag-name":{control:"select",options:Object.values(E)},...re(["children"]),...te,...ae}},s=l`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,m={args:{"card-title":"Title",name:"radio-card",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:s}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x280","image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:T.HORIZONTAL,children:s}},h={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label",checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:s}},b={args:{"image-src":"https://placehold.co/320x200","image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/320x200","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:l` <mdc-text slot="before-body" type="body-midsize-medium" tagname="span"
        >Content Before Body</mdc-text
      >
      <img src="https://placehold.co/100x50" alt="Image Alt" slot="before-body" />
      ${s}`}},g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":"https://placehold.co/160x540","image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:T.HORIZONTAL,checked:!1,disabled:!1,tabIndex:0,children:l` <img src="https://placehold.co/100x50" alt="Image Alt" slot="after-body" />
      <mdc-text slot="after-body" type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
      ${s}`}},A={render:()=>l`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${ee([1,2,3,4],e=>l`
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
              ${s}
            </mdc-cardradio>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,argTypes:{...oe(["aria-label","name","variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex"])}};var k,v,N;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(v=m.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,C,O;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var $,R,L;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(R=h.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var D,G,M;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(G=b.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var U,F,V;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var B,w,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(w=g.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var _,z,W;A.parameters={...A.parameters,docs:{...(_=A.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(z=A.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const tt=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInRadioGroup"];export{b as CardWithoutBody,h as CardWithoutImage,A as CardsInRadioGroup,g as ContentAfterBody,u as ContentBeforeBody,m as Example,p as HorizontalCard,tt as __namedExportsOrder,et as default};
