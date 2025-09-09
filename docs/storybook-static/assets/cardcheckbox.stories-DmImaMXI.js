import{i as W,D as k,k as r}from"./lit-element-D5KKan5q.js";import{n as Z}from"./property-Bj3TGwkg.js";import{D as Q}from"./DisabledMixin-B-Cnza7-.js";import{T as J}from"./TabIndexMixin-DEwGeIeI.js";import{C as x}from"./card.component-DJi3YkJi.js";import{R as ee}from"./roles-CJI3JVG-.js";import{K as y}from"./keys-hFXe221I.js";import{u as te}from"./provider.component-DrWB4byV.js";import{a as ae}from"./index-CqVtAZCJ.js";import"./index-C1uW47F2.js";import{V as N}from"./index-D2VIkDCb.js";import"./index-DGRdUi1i.js";import{Q as re}from"./repeat-CNQ7t7Vw.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as o}from"./imageFixtures-CD4avj2q.js";import{c as ie,s as oe}from"./commonArgTypes-BluK8w5L.js";import{a as le,t as ce,d as ne}from"./utils-CFOyPOhY.js";import{V as se,O as E,D as t}from"./FooterMixin-oJpTePmN.js";import"./index-CvDndNGh.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./iframe-kOqprQN7.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./v4-CQkTLCs1.js";import"./link.constants-DNTydABS.js";import"./index-dnhgIkgF.js";import"./button.component-DPkHVNTO.js";import"./buttonsimple.component-1GEifFmP.js";import"./button.utils-rNW36Ji7.js";import"./index-BIM2snXJ.js";import"./popover.component-BYKb63Rn.js";import"./if-defined-D5BV9-c0.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./formfieldwrapper.component-DfjqvCUn.js";const de=te.constructTagName("cardcheckbox"),v={DEFAULT:"check-circle-bold",CHECKED:"check-circle-filled"},i={CHECK:"check",CHECKBOX:"checkbox"},T={SELECTION_TYPE:i.CHECK,ICON_SIZE:1.5,ICON_LENGTH_UNIT:"rem"},me=W`
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
`,be=[me,...ae()];var pe=Object.defineProperty,q=(e,a,I,he)=>{for(var l=void 0,A=e.length-1,f;A>=0;A--)(f=e[A])&&(l=f(a,I,l)||l);return l&&pe(a,I,l),l};const C=class C extends Q(J(x)){constructor(){super(),this.checked=!1,this.selectionType=T.SELECTION_TYPE,this.addEventListener("click",this.toggleChecked.bind(this)),this.addEventListener("keydown",this.toggleOnEnter.bind(this)),this.addEventListener("keyup",this.toggleOnSpace.bind(this))}connectedCallback(){super.connectedCallback(),this.role=ee.CHECKBOX}update(a){super.update(a),a.has("checked")&&this.setAttribute("aria-checked",`${this.checked}`),a.has("disabled")&&(this.setAttribute("aria-disabled",`${this.disabled}`),this.tabIndex=this.disabled?-1:0)}toggleChecked(){this.disabled||(this.checked=!this.checked),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}toggleOnEnter(a){a.key===y.ENTER&&this.toggleChecked()}toggleOnSpace(a){a.key===y.SPACE&&this.toggleChecked()}renderSelection(){const a=this.checked?v.CHECKED:v.DEFAULT;switch(this.selectionType){case i.CHECK:return r`<mdc-icon
          part="check check-icon"
          size="${T.ICON_SIZE}"
          length-unit="${T.ICON_LENGTH_UNIT}"
          name="${a}"
        ></mdc-icon>`;case i.CHECKBOX:return r`<mdc-staticcheckbox
          part="check"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>`;default:return k}}renderHeader(){return this.cardTitle?r`<div part="header">${this.renderIcon()} ${this.renderTitle()} ${this.renderSelection()}</div>`:k}render(){return r`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `}};C.styles=[...x.styles,...be];let s=C;q([Z({type:Boolean,reflect:!0})],s.prototype,"checked");q([Z({type:String,attribute:"selection-type",reflect:!0})],s.prototype,"selectionType");s.register(de);const ue=e=>r` <mdc-cardcheckbox
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
  >`,lt={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:ue,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(se)},orientation:{control:"select",options:Object.values(E)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text"},"selection-type":{control:"select",options:Object.values(i)},"title-tag-name":{control:"select",options:Object.values(N)},"subtitle-tag-name":{control:"select",options:Object.values(N)},...le(["children"]),...ce(["--mdc-card-width"]),...ie,...oe}},c=r`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,d={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,variant:t.VARIANT,orientation:t.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":i.CHECK,children:c}},m={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"selection-type":i.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:E.HORIZONTAL,children:c}},b={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,"aria-label":"Aria Label","selection-type":i.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION,children:c}},p={args:{"image-src":o.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":i.CHECK,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:t.VARIANT,orientation:t.ORIENTATION}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:t.ORIENTATION,"selection-type":i.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${o.card}" alt="Image Alt" />
      </div>
      ${c}`}},h={args:{"card-title":"Title",subtitle:"Subtitle","image-src":o.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:t.VARIANT,"title-tag-name":t.TAGNAME,"subtitle-tag-name":t.TAGNAME,orientation:E.HORIZONTAL,"selection-type":i.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:r`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${o.card}" alt="Image Alt" />
      </div>
      ${c}`}},g={render:()=>r`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${re([1,2,3,4],e=>r`
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
  `,argTypes:{...ne(["variant","orientation","card-title","subtitle","image-src","image-alt","icon-name","checked","disabled","tabIndex","data-aria-label"])}};var S,O,$;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...($=(O=d.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var L,F,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(F=m.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var H,R,G;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(R=b.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var U,M,_;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var B,K,V;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(K=u.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var P,w,X;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(X=(w=h.parameters)==null?void 0:w.docs)==null?void 0:X.source}}};var Y,z,j;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(j=(z=g.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const ct=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","CardsInCheckboxGroup"];export{p as CardWithoutBody,b as CardWithoutImage,g as CardsInCheckboxGroup,h as ContentAfterBody,u as ContentBeforeBody,d as Example,m as HorizontalCard,ct as __namedExportsOrder,lt as default};
