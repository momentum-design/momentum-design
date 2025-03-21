import{i as D,k as i,D as v}from"./lit-element-D5KKan5q.js";import{u as $,C as m,n as T}from"./index-C9z9WAEj.js";import{o as E}from"./listitem.component-BafOqsyR.js";import{D as _}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{D as L}from"./DisabledMixin-CizxPH9K.js";import{T as M,V as S}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";import{c as B,s as I}from"./commonArgTypes-BluK8w5L.js";import{h as C}from"./utils-D1SE5bce.js";import"./index-H3sXpcE3.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-BX3Tn-Br.js";import"./index-CbJj7ITm.js";import"./iframe-BYhHLzXf.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-Dg5j8Yib.js";import"./v4-CmTdKEVZ.js";const O=$.constructTagName("optgroup"),c="header-id",N=D`
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
`,P=[N];var V=Object.defineProperty,x=(o,t,n,F)=>{for(var e=void 0,p=o.length-1,l;p>=0;p--)(l=o[p])&&(e=l(t,n,e)||e);return e&&V(t,n,e),e};const s=class s extends _(L(m)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?i`
      <mdc-text
        id="${c}"
        part="header-text"
        type="${M.BODY_MIDSIZE_BOLD}"
        tagname="${S.SPAN}"
      >${this.label}</mdc-text>
    `:v;return i`
      <div
        role="group"
        aria-labelledby="${this.label?c:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="presentation"></slot>
      </div>
    `}};s.styles=[...m.styles,...P];let r=s;x([T({type:String,reflect:!0})],r.prototype,"label");x([E({selector:"mdc-option"})],r.prototype,"options");r.register(O);const y=o=>i`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${o}</div>
`,w=o=>y(i`
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
`),no={title:"Components/optgroup",tags:["autodocs"],component:"mdc-optgroup",render:w,parameters:{badges:["stable"]},argTypes:{label:{control:"text"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},...C(["--mdc-optgroup-disabled-color"]),...B,...I}},a={args:{label:"Office locations",disabled:!1,"data-aria-label":"Select an item from the list"}},d={render:o=>y(i`
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
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const lo=["Example","List"];export{a as Example,d as List,lo as __namedExportsOrder,no as default};
