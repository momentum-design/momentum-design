import{U as Z,X as Q,R as X,h as Y,k as l,n as K,V as x}from"./iframe-c_i7I41_.js";import{D as J}from"./DisabledMixin-BZSiUR0v.js";import{T as ee,K as I}from"./TabIndexMixin-CHrFJxDJ.js";import{C as k}from"./card.component-D6-2idrl.js";import{T as te}from"./index-B9qlxDwQ.js";import"./index-B-TyZsse.js";import"./index-Cm5mXPku.js";import{t as r}from"./if-defined-Cz0DV4mo.js";import{Q as ae}from"./repeat-CPJqXM_f.js";import{i as re}from"./manifest-DRrdiy54.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{c as ie,s as oe}from"./commonArgTypes-BG7EqI50.js";import{h as ne,a as le}from"./utils-D6nie9pS.js";import{V as de,O as v,D as t}from"./FooterMixin-DRYWk_Bs.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-BJRqoF64.js";import"./index-All1gC_H.js";import"./button.component-CPL4OMaM.js";import"./buttonsimple.component-BHKaT178.js";import"./button.utils-rNW36Ji7.js";import"./index-Bhcs96Ba.js";import"./popover.component-fHHEeBTN.js";import"./BackdropMixin-BZsxHFaN.js";import"./popover.constants-DDMtGR2D.js";import"./index-B3CxAmvZ.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-CY7MM2gf.js";import"./formfieldwrapper.component-4G0wMAIW.js";import"./formfieldwrapper.constants-FhJcR3rF.js";import"./radio.constants-ZEPYte79.js";import"./index-DBHhIbk2.js";import"./index-DTrDRi1E.js";import"./directive-Ctav8iJK.js";import"./link.constants-OPpO8wKa.js";const se=Z`
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
`,ce=[se,...Q()];var me=Object.defineProperty,P=(e,a,n,s)=>{for(var i=void 0,o=e.length-1,E;o>=0;o--)(E=e[o])&&(i=E(a,n,i)||i);return i&&me(a,n,i),i};const y=class y extends J(ee(k)){constructor(){super(),this.checked=!1,this.name="",this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=X.RADIO}getAllCardsWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-cardradio[name="${this.name}"]`))}toggleChecked(){if(this.disabled||this.checked)return;this.getAllCardsWithinSameGroup().forEach(n=>{n.checked=!1}),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}setDisabled(a){this.setAttribute("aria-disabled",`${a}`),this.tabIndex=a?-1:0}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&this.setDisabled(this.disabled)}updateCardRadio(a,n){a[n].focus(),a[n].toggleChecked()}handleKeyDown(a){if(a.key===I.SPACE){a.preventDefault();return}if(this.disabled)return;const s=this.getAllCardsWithinSameGroup().filter(o=>!o.disabled),i=s.indexOf(this);if(["ArrowDown","ArrowRight"].includes(a.key)){const o=(i+1)%s.length;this.updateCardRadio(s,o)}else if(["ArrowUp","ArrowLeft"].includes(a.key)){const o=(i-1+s.length)%s.length;this.updateCardRadio(s,o)}a.key===I.ENTER&&this.toggleChecked()}toggleOnSpace(a){a.key===I.SPACE&&this.toggleChecked()}renderHeader(){return this.cardTitle?l`<div part="header">
      ${this.renderIcon()} ${this.renderTitle()}
      <mdc-staticradio part="check" ?checked="${this.checked}" ?disabled="${this.disabled}"></mdc-staticradio>
    </div>`:Y}render(){return l`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};y.styles=[...k.styles,...ce];let u=y;P([K({type:Boolean,reflect:!0})],u.prototype,"checked");P([K({type:String})],u.prototype,"name");u.register(te);const{action:m}=__STORYBOOK_MODULE_ACTIONS__,ue=e=>l`<div role="main">
    <mdc-cardradio
      @click="${m("onclick")}"
      @keydown="${m("onkeydown")}"
      @keyup="${m("onkeyup")}"
      @focus="${m("onfocus")}"
      @change="${m("onchange")}"
      name="${r(e.name)}"
      variant="${r(e.variant)}"
      orientation="${r(e.orientation)}"
      card-title="${r(e["card-title"])}"
      subtitle="${r(e.subtitle)}"
      image-src="${r(e["image-src"])}"
      image-alt="${r(e["image-alt"])}"
      icon-name="${r(e["icon-name"])}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      aria-label="${r(e["aria-label"])}"
      title-tag-name="${r(e["title-tag-name"])}"
      subtitle-tag-name="${r(e["subtitle-tag-name"])}"
      tabindex="${r(e.tabIndex)}"
      class="${r(e.class)}"
      style="${r(e.style)}"
      >${e.children}</mdc-cardradio
    >
  </div>`,Ze={title:"Components/card/cardradio",tags:["autodocs"],component:"mdc-cardradio",render:ue,argTypes:{variant:{control:"select",options:Object.values(de)},orientation:{control:"select",options:Object.values(v)},name:{control:"text"},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(re)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"title-tag-name":{control:"select",options:Object.values(x)},"subtitle-tag-name":{control:"select",options:Object.values(x)},...ne(["children"]),...ie,...oe}},c=l`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,b={args:{"card-title":"Title",name:"radio-card",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:c}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:v.HORIZONTAL,children:c}},h={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label",checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:c}},g={args:{"image-src":d.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},A={args:{"card-title":"Title",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${d.card}" alt="Image Alt" />
      </div>
      ${c}`}},T={args:{"card-title":"Title",subtitle:"Subtitle","image-src":d.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:v.HORIZONTAL,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${d.card}" alt="Image Alt" />
      </div>
      ${c}`}},f={render:()=>l`
    <mdc-formfieldgroup label="Radio Cards" name="radio-cards" help-text="Help Text" data-aria-label="Radio Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${ae([1,2,3,4],e=>l`
            <mdc-cardradio
              name="radio-cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="${d.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${c}
            </mdc-cardradio>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...le()};var N,S,C;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    name: 'radio-card',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
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
}`,...(C=(S=b.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,$,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
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
}`,...(R=($=p.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var L,D,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(D=h.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,M,U;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
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
}`,...(U=(M=g.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var w,V,B;A.parameters={...A.parameters,docs:{...(w=A.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(B=(V=A.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var _,H,j;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(j=(H=T.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var z,W,q;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
              image-src="\${imageFixtures.card}"
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
  ...hideAllControls()
}`,...(q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const Qe=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInRadioGroup"];export{g as CardWithoutBody,h as CardWithoutImage,f as CardsInRadioGroup,T as ContentAfterBody,A as ContentBeforeBody,b as Example,p as HorizontalCard,Qe as __namedExportsOrder,Ze as default};
