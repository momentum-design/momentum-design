import{u as Q,U as J,X as ee,R as te,h as y,k as r,n as q,V as N}from"./iframe-CqrI13U9.js";import{D as ae}from"./DisabledMixin-DlWJY35l.js";import{T as ie,K as x}from"./TabIndexMixin-cy2_g44-.js";import{C as v}from"./card.component-DKYPrcQQ.js";import"./index-Bwut11Ud.js";import"./index-CqhwrAWb.js";import{t as a}from"./if-defined-Cxn4X8l_.js";import{Q as re}from"./repeat-ByjA3Nm6.js";import{i as oe}from"./manifest-D8HABGqZ.js";import{i as l}from"./imageFixtures-CD4avj2q.js";import{c as le,s as ne}from"./commonArgTypes-BG7EqI50.js";import{h as ce,a as se}from"./utils-D6nie9pS.js";import{V as de,O as C,D as t}from"./FooterMixin-Bf-zapGG.js";import"./index-R42MJkx1.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-CeZqJBJZ.js";import"./index-DTrDRi1E.js";import"./formfieldwrapper.constants-CJzTakq_.js";import"./popover.constants-B-drNLuh.js";import"./directive-Ctav8iJK.js";import"./link.constants-DFTH45oE.js";import"./index-DTqic_Td.js";import"./button.component-03COms2Y.js";import"./buttonsimple.component-C0XShElB.js";import"./button.utils-rNW36Ji7.js";import"./index-D4HqM3w_.js";import"./popover.component-DlOdf4gZ.js";import"./BackdropMixin-CyfveceT.js";import"./index-DyFAfT9A.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-Deqp14ZC.js";import"./formfieldwrapper.component-CvVk4FtN.js";const me=Q.constructTagName("cardcheckbox"),O={DEFAULT:"check-circle-bold",CHECKED:"check-circle-filled"},o={CHECK:"check",CHECKBOX:"checkbox"},E={SELECTION_TYPE:o.CHECK,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem"},be=J`
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

  :host([disabled])::part(check-icon) {
    color: var(--mds-color-theme-text-primary-disabled);
  }
`,ue=[be,...ee()];var pe=Object.defineProperty,W=(e,i,f,ge)=>{for(var n=void 0,T=e.length-1,k;T>=0;T--)(k=e[T])&&(n=k(i,f,n)||n);return n&&pe(i,f,n),n};const I=class I extends ae(ie(v)){constructor(){super(),this.checked=!1,this.selectionType=E.SELECTION_TYPE,this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.toggleOnEnter.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=te.CHECKBOX}update(i){super.update(i),i.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),i.has("disabled")&&(this.setAttribute("aria-disabled",`${this.disabled}`),this.tabIndex=this.disabled?-1:0)}toggleChecked(){this.disabled||(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}toggleOnEnter(i){i.key===x.ENTER&&this.toggleChecked()}toggleOnSpace(i){i.key===x.SPACE&&this.toggleChecked()}renderSelection(){const i=this.checked?O.CHECKED:O.DEFAULT;switch(this.selectionType){case o.CHECK:return r`<mdc-icon
          part="check check-icon"
          size="${E.ICON_SIZE}"
          length-unit="${E.ICON_LENGTH_UNIT}"
          name="${i}"
        ></mdc-icon>`;case o.CHECKBOX:return r`<mdc-staticcheckbox
          part="check"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>`;default:return y}}renderHeader(){return this.cardTitle?r`<div part="header">${this.renderIcon()} ${this.renderTitle()} ${this.renderSelection()}</div>`:y}render(){return r`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};I.styles=[...v.styles,...ue];let d=I;W([q({type:Boolean,reflect:!0})],d.prototype,"checked");W([q({type:String,attribute:"selection-type",reflect:!0})],d.prototype,"selectionType");d.register(me);const{action:s}=__STORYBOOK_MODULE_ACTIONS__,he=e=>r`<div role="main">
    <mdc-cardcheckbox
      @click="${s("onclick")}"
      @keydown="${s("onkeydown")}"
      @keyup="${s("onkeyup")}"
      @focus="${s("onfocus")}"
      @change="${s("onchange")}"
      variant="${a(e.variant)}"
      orientation="${a(e.orientation)}"
      card-title="${a(e["card-title"])}"
      subtitle="${a(e.subtitle)}"
      image-src="${a(e["image-src"])}"
      image-alt="${a(e["image-alt"])}"
      icon-name="${a(e["icon-name"])}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      aria-label="${a(e["aria-label"])}"
      selection-type="${a(e["selection-type"])}"
      title-tag-name="${a(e["title-tag-name"])}"
      subtitle-tag-name="${a(e["subtitle-tag-name"])}"
      tabindex="${a(e.tabIndex)}"
      class="${a(e.class)}"
      style="${a(e.style)}"
      >${e.children}</mdc-cardcheckbox
    >
  </div>`,We={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:he,argTypes:{variant:{control:"select",options:Object.values(de)},orientation:{control:"select",options:Object.values(C)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(oe)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"selection-type":{control:"select",options:Object.values(o)},"title-tag-name":{control:"select",options:Object.values(N)},"subtitle-tag-name":{control:"select",options:Object.values(N)},...ce(["children"]),...le,...ne}},c=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":o.CHECK,children:c}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:C.HORIZONTAL,children:c}},u={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label","selection-type":o.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:c}},p={args:{"image-src":l.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":o.CHECK,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${l.card}" alt="Image Alt" />
      </div>
      ${c}`}},g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":l.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:C.HORIZONTAL,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${l.card}" alt="Image Alt" />
      </div>
      ${c}`}},A={render:()=>r`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${re([1,2,3,4],e=>r`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="${l.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${c}
            </mdc-cardcheckbox>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...se()};var S,L,$;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
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
    'selection-type': SELECTION_TYPE.CHECK,
    children: defaultChildren
  }
}`,...($=(L=m.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var F,D,R;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(R=(D=b.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var H,U,M;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    'selection-type': SELECTION_TYPE.CHECK,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(M=(U=u.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var _,G,B;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'selection-type': SELECTION_TYPE.CHECK,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(B=(G=p.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var K,V,P;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(P=(V=h.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var w,X,Y;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var j,z,Z;A.parameters={...A.parameters,docs:{...(j=A.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        \${repeat([1, 2, 3, 4], index => html\`
            <mdc-cardcheckbox
              name="checkbox cards"
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
            </mdc-cardcheckbox>
          \`)}
      </div>
    </mdc-formfieldgroup>
  \`,
  ...hideAllControls()
}`,...(Z=(z=A.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};const Qe=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{p as CardWithoutBody,u as CardWithoutImage,A as CardsInCheckboxGroup,g as ContentAfterBody,h as ContentBeforeBody,m as Example,b as HorizontalCard,Qe as __namedExportsOrder,We as default};
