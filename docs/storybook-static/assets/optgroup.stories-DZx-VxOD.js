import{i as D,k as r,D as v}from"./lit-element-D5KKan5q.js";import{u as $,C as m,n as T}from"./index-C9z9WAEj.js";import{o as E}from"./listitem.component-D_F-zTFD.js";import{D as _}from"./FormInternalsMixin-BezuNa1f.js";import{D as L}from"./DisabledMixin-CizxPH9K.js";import{T as M,V as S}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import{c as I,s as B}from"./commonArgTypes-BluK8w5L.js";import{h as O}from"./utils-D1SE5bce.js";import"./index-B4nAsTwy.js";import"./v4-BnQ50LvX.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-BX3Tn-Br.js";import"./index-P21x_s7g.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";const P=$.constructTagName("optgroup"),c="header-id",C=D`
  :host {
    --mdc-optgroup-disabled-color: var(--mds-color-theme-text-primary-disabled);
  }
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
    height: 2.25rem;
  }
  :host([disabled]),
  :host([disabled])::part(header-text) {
    color: var(--mdc-optgroup-disabled-color);
    cursor: default;
  }
`,N=[C];var w=Object.defineProperty,x=(o,t,n,k)=>{for(var e=void 0,p=o.length-1,l;p>=0;p--)(l=o[p])&&(e=l(t,n,e)||e);return e&&w(t,n,e),e};const s=class s extends _(L(m)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?r`
      <mdc-text
        id="${c}"
        part="header-text"
        type="${M.BODY_MIDSIZE_BOLD}"
        tagname="${S.SPAN}"
      >${this.label}</mdc-text>
    `:v;return r`
      <div
        role="group"
        aria-labelledby="${this.label?c:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="presentation"></slot>
      </div>
    `}};s.styles=[...m.styles,...N];let i=s;x([T({type:String,reflect:!0})],i.prototype,"label");x([E({selector:"mdc-option"})],i.prototype,"options");i.register(P);const y=o=>r`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,V=o=>y(r`
  <mdc-optgroup
    label="${o.label}"
    ?disabled="${o.disabled}"
    data-aria-label="${o["data-aria-label"]}"
  >
    <mdc-option>Boston, MA</mdc-option>
    <mdc-option selected>Chicago, IL</mdc-option>
    <mdc-option>Detroit, MI</mdc-option>
    <mdc-option>Flagstaff, AZ</mdc-option>
    <mdc-option>Honolulu, HI</mdc-option>
  </mdc-optgroup>
`),po={title:"Work In Progress/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:V,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...O(["--mdc-optgroup-disabled-color"]),...I,...B}},a={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},d={render:o=>y(r`
    <mdc-optgroup label="North America">
      <mdc-option>Boston</mdc-option>
      <mdc-option>Mexico</mdc-option>
      <mdc-option>Toronto</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Europe" ?disabled="${o.disabled}">
      <mdc-option>Berlin</mdc-option>
      <mdc-option>London</mdc-option>
      <mdc-option>Vienna</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Asia Pacific">
      <mdc-option>Mumbai</mdc-option>
      <mdc-option>Sydney</mdc-option>
    </mdc-optgroup>
  `),args:{disabled:!0}};var b,u,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Office locations',
    disabled: false,
    'data-aria-label': 'Select an item from the list'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,A;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: Args) => wrapWithDiv(html\`
    <mdc-optgroup label="North America">
      <mdc-option>Boston</mdc-option>
      <mdc-option>Mexico</mdc-option>
      <mdc-option>Toronto</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Europe" ?disabled="\${args.disabled}">
      <mdc-option>Berlin</mdc-option>
      <mdc-option>London</mdc-option>
      <mdc-option>Vienna</mdc-option>
    </mdc-optgroup>
    <mdc-optgroup label="Asia Pacific">
      <mdc-option>Mumbai</mdc-option>
      <mdc-option>Sydney</mdc-option>
    </mdc-optgroup>
  \`),
  args: {
    disabled: true
  }
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const so=["Example","List"];export{a as Example,d as List,so as __namedExportsOrder,po as default};
