import{u as W,X as Q,a0 as J,R as ee,h as te,k as r,n as Z,V as N}from"./iframe-CM5v7A9W.js";import{D as ae}from"./DisabledMixin-CLyN7JwY.js";import{K as ie,T as re,A as C}from"./KeyToActionMixin-eZa7VV6_.js";import{C as x}from"./card.component-CLlBs4TE.js";import"./index-8eILrhn8.js";import"./index-B-iBrAKP.js";import{t as i}from"./if-defined-DgC6xmGR.js";import{Q as oe}from"./repeat-CnCDBWoJ.js";import{i as ne}from"./manifest-FrmGbvs6.js";import{i as n}from"./imageFixtures-CD4avj2q.js";import{c as le,s as ce}from"./commonArgTypes-BG7EqI50.js";import{h as se,a as de}from"./utils-D6nie9pS.js";import{V as me,O as f,D as t}from"./FooterMixin-By1ENOxB.js";import"./index-DsN-9C60.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-CpgEA_Ma.js";import"./index-7nPJAxAt.js";import"./index-DTrDRi1E.js";import"./formfieldwrapper.constants-BXCNKWCp.js";import"./popover.constants-DAVJA-Mk.js";import"./directive-Ctav8iJK.js";import"./link.constants-CT-yY72U.js";import"./index-BukzXrpm.js";import"./button.component-Dt4zzUmj.js";import"./buttonsimple.component-Brk_p-op.js";import"./button.utils-rNW36Ji7.js";import"./index-DMugiz5i.js";import"./popover.component-DTgwRjCX.js";import"./BackdropMixin-Bj9Wbfvj.js";import"./dom-BlZvhF8F.js";import"./index-DwtCwkBS.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-Bksih1qV.js";import"./formfieldwrapper.component-Bf_bW2S9.js";const be=W.constructTagName("cardcheckbox"),v={DEFAULT:"check-circle-bold",CHECKED:"check-circle-filled"},o={CHECK:"check",CHECKBOX:"checkbox"},I={SELECTION_TYPE:o.CHECK,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem"},ue=Q`
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
`,pe=[ue,...J()];var he=Object.defineProperty,q=(e,a,s,ge)=>{for(var l=void 0,E=e.length-1,k;E>=0;E--)(k=e[E])&&(l=k(a,s,l)||l);return l&&he(a,s,l),l};const y=class y extends ie(ae(re(x))){constructor(){super(),this.checked=!1,this.selectionType=I.SELECTION_TYPE,this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=ee.CHECKBOX}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&(this.setAttribute("aria-disabled",`${this.disabled}`),this.tabIndex=this.disabled?-1:0)}toggleChecked(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}handleKeyDown(a){const s=this.getActionForKeyEvent(a);s===C.ENTER&&(this.toggleChecked(),a.preventDefault()),s===C.SPACE&&a.preventDefault()}toggleOnSpace(a){this.getActionForKeyEvent(a)===C.SPACE&&(a.preventDefault(),this.toggleChecked())}renderSelection(){const a=this.checked?v.CHECKED:v.DEFAULT;switch(this.selectionType){case o.CHECK:return r`<mdc-icon
          part="check check-icon"
          size="${I.ICON_SIZE}"
          length-unit="${I.ICON_LENGTH_UNIT}"
          name="${a}"
        ></mdc-icon>`;case o.CHECKBOX:return r`<mdc-staticcheckbox
          part="check"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>`;default:return te}}renderHeader(){return r`<div part="header">${this.renderIcon()} ${this.renderTitle()} ${this.renderSelection()}</div>`}render(){return r`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};y.styles=[...x.styles,...pe];let m=y;q([Z({type:Boolean,reflect:!0})],m.prototype,"checked");q([Z({type:String,attribute:"selection-type",reflect:!0})],m.prototype,"selectionType");m.register(be);const{action:d}=__STORYBOOK_MODULE_ACTIONS__,Ae=e=>r`<div role="main">
    <mdc-cardcheckbox
      @click="${d("onclick")}"
      @keydown="${d("onkeydown")}"
      @keyup="${d("onkeyup")}"
      @focus="${d("onfocus")}"
      @change="${d("onchange")}"
      variant="${i(e.variant)}"
      orientation="${i(e.orientation)}"
      card-title="${i(e["card-title"])}"
      subtitle="${i(e.subtitle)}"
      image-src="${i(e["image-src"])}"
      image-alt="${i(e["image-alt"])}"
      icon-name="${i(e["icon-name"])}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      aria-label="${i(e["aria-label"])}"
      selection-type="${i(e["selection-type"])}"
      title-tag-name="${i(e["title-tag-name"])}"
      subtitle-tag-name="${i(e["subtitle-tag-name"])}"
      tabindex="${i(e.tabIndex)}"
      class="${i(e.class)}"
      style="${i(e.style)}"
      >${e.children}</mdc-cardcheckbox
    >
  </div>`,Qe={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:Ae,argTypes:{variant:{control:"select",options:Object.values(me)},orientation:{control:"select",options:Object.values(f)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(ne)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"selection-type":{control:"select",options:Object.values(o)},"title-tag-name":{control:"select",options:Object.values(N)},"subtitle-tag-name":{control:"select",options:Object.values(N)},...se(["children"]),...le,...ce}},c=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":n.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":o.CHECK,children:c}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":n.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:f.HORIZONTAL,children:c}},p={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label","selection-type":o.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:c}},h={args:{"image-src":n.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":o.CHECK,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},A={args:{"card-title":"Title",subtitle:"Subtitle","image-src":n.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${n.card}" alt="Image Alt" />
      </div>
      ${c}`}},g={args:{"card-title":"Title",subtitle:"Subtitle","image-src":n.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:f.HORIZONTAL,"selection-type":o.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${n.card}" alt="Image Alt" />
      </div>
      ${c}`}},T={render:()=>r`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${oe([1,2,3,4],e=>r`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="${n.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${c}
            </mdc-cardcheckbox>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...de()};var S,O,L;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(O=b.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var $,D,F;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,H,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var U,_,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(_=h.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,B,V;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(B=A.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var w,P,X;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(X=(P=g.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Y,j,z;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(z=(j=T.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const Je=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{h as CardWithoutBody,p as CardWithoutImage,T as CardsInCheckboxGroup,g as ContentAfterBody,A as ContentBeforeBody,b as Example,u as HorizontalCard,Je as __namedExportsOrder,Qe as default};
