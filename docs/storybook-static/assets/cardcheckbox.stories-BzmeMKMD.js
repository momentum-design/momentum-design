import{u as q,S as Q,X as J,W as ee,h as f,k as i,n as Z,V as x}from"./iframe-Bf6-IwAq.js";import{D as te}from"./DisabledMixin-VQPUxNBU.js";import{T as ae}from"./TabIndexMixin-DwRLYS46.js";import{C as y}from"./card.component-xfGjiDGa.js";import{K as N}from"./keys-hFXe221I.js";import"./index-D_ECVX3R.js";import"./index-CdOQCQfF.js";import{Q as ie}from"./repeat-DUymCvq0.js";import{i as o}from"./imageFixtures-CD4avj2q.js";import{c as re,s as oe}from"./commonArgTypes-BluK8w5L.js";import{a as le,d as ce}from"./utils-Dd_sfl9-.js";import{V as ne,O as E,D as t}from"./FooterMixin-S16xyLWI.js";import"./index-D4Djtqgq.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-7U_I6KX4.js";import"./index-DTrDRi1E.js";import"./formfieldwrapper.constants-COFz-Mjg.js";import"./directive-Ctav8iJK.js";import"./link.constants-CltrA98W.js";import"./index-CUTflbsM.js";import"./button.component-CQzCH_PC.js";import"./buttonsimple.component-BDbkvrcc.js";import"./button.utils-rNW36Ji7.js";import"./index-NSkDcpgY.js";import"./popover.component-4uKr9v9E.js";import"./if-defined-DdJfs53F.js";import"./BackdropMixin-C2wU_3qk.js";import"./index-Dt-pvUnY.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-nR37qCN2.js";import"./formfieldwrapper.component-CTBZmkz9.js";const se=q.constructTagName("cardcheckbox"),v={DEFAULT:"check-circle-bold",CHECKED:"check-circle-filled"},r={CHECK:"check",CHECKBOX:"checkbox"},T={SELECTION_TYPE:r.CHECK,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem"},de=Q`
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
`,me=[de,...J()];var be=Object.defineProperty,W=(e,a,I,pe)=>{for(var l=void 0,A=e.length-1,k;A>=0;A--)(k=e[A])&&(l=k(a,I,l)||l);return l&&be(a,I,l),l};const C=class C extends te(ae(y)){constructor(){super(),this.checked=!1,this.selectionType=T.SELECTION_TYPE,this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.toggleOnEnter.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=ee.CHECKBOX}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&(this.setAttribute("aria-disabled",`${this.disabled}`),this.tabIndex=this.disabled?-1:0)}toggleChecked(){this.disabled||(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}toggleOnEnter(a){a.key===N.ENTER&&this.toggleChecked()}toggleOnSpace(a){a.key===N.SPACE&&this.toggleChecked()}renderSelection(){const a=this.checked?v.CHECKED:v.DEFAULT;switch(this.selectionType){case r.CHECK:return i`<mdc-icon
          part="check check-icon"
          size="${T.ICON_SIZE}"
          length-unit="${T.ICON_LENGTH_UNIT}"
          name="${a}"
        ></mdc-icon>`;case r.CHECKBOX:return i`<mdc-staticcheckbox
          part="check"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>`;default:return f}}renderHeader(){return this.cardTitle?i`<div part="header">${this.renderIcon()} ${this.renderTitle()} ${this.renderSelection()}</div>`:f}render(){return i`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};C.styles=[...y.styles,...me];let s=C;W([Z({type:Boolean,reflect:!0})],s.prototype,"checked");W([Z({type:String,attribute:"selection-type",reflect:!0})],s.prototype,"selectionType");s.register(se);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,ue=e=>i` <mdc-cardcheckbox
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    @change="${n("onchange")}"
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
    selection-type="${e["selection-type"]}"
    title-tag-name="${e["title-tag-name"]}"
    subtitle-tag-name="${e["subtitle-tag-name"]}"
    tabindex="${e.tabIndex}"
    class="${e.class}"
    style="${e.style}"
    >${e.children}</mdc-cardcheckbox
  >`,je={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:ue,argTypes:{variant:{control:"select",options:Object.values(ne)},orientation:{control:"select",options:Object.values(E)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"selection-type":{control:"select",options:Object.values(r)},"title-tag-name":{control:"select",options:Object.values(x)},"subtitle-tag-name":{control:"select",options:Object.values(x)},...le(["children"]),...re,...oe}},c=i`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,d={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":r.CHECK,children:c}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:E.HORIZONTAL,children:c}},b={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label","selection-type":r.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:c}},u={args:{"image-src":o.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":r.CHECK,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},p={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:i`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${o.card}" alt="Image Alt" />
      </div>
      ${c}`}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:E.HORIZONTAL,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:i`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${o.card}" alt="Image Alt" />
      </div>
      ${c}`}},g={render:()=>i`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${ie([1,2,3,4],e=>i`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${e}"
              subtitle="Subtitle"
              image-src="${o.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${c}
            </mdc-cardcheckbox>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,argTypes:{...ce(["variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex","data-aria-label"])}};var S,O,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var $,F,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(F=m.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var H,R,U;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(R=b.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var _,G,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(G=u.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var B,K,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(K=p.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var P,X,Y;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var w,z,j;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  argTypes: {
    ...disableControls(['variant', 'orientation', 'card-title', 'subtitle', 'image-src', 'image-alt', 'icon-name', 'checked', 'disabled', 'tabIndex', 'data-aria-label'])
  }
}`,...(j=(z=g.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const Ze=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{u as CardWithoutBody,b as CardWithoutImage,g as CardsInCheckboxGroup,h as ContentAfterBody,p as ContentBeforeBody,d as Example,m as HorizontalCard,Ze as __namedExportsOrder,je as default};
