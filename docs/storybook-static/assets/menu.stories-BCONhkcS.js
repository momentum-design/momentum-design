import{k as i}from"./lit-element-D5KKan5q.js";import"./index-D3DhXfcW.js";import{o as v}from"./query-assigned-elements-uEuc3rg8.js";import{R as T}from"./roles-DMFGbP5t.js";import{L as c}from"./list.component-DGR1ggSm.js";import{T as A}from"./menuitem.component-CbblTtM1.js";import{T as E}from"./menu.constants-Bt64zAlX.js";import{c as y,s as L}from"./commonArgTypes-BluK8w5L.js";import{h as _}from"./utils-CO8B6ZcN.js";import"./index-CcV-UfAY.js";import"./index-DLn5M7ul.js";import"./index-C9z9WAEj.js";import"./text.constants-ZF0jM5wn.js";import"./base-DIkkzJ-c.js";import"./listitem.component-Bi_eCmxm.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-BtYs-q2U.js";import"./popover.component-CrEN2vM_.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./v4-CmTdKEVZ.js";import"./index-MA1r3zrt.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-BuBAOxzU.js";import"./iframe-BETP4OFk.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";var $=Object.defineProperty,k=(t,d,n,I)=>{for(var e=void 0,o=t.length-1,p;o>=0;o--)(p=t[o])&&(e=p(d,n,e)||e);return e&&$(d,n,e),e};const s=class s extends c{connectedCallback(){super.connectedCallback(),this.dataRole=T.MENU}};s.styles=[...c.styles];let a=s;k([v({selector:`${A}:not([disabled])`})],a.prototype,"listItems");a.register(E);const g=i`
  <mdc-menuitem label="New"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menuitem label="Open"></mdc-menuitem>
  <mdc-menuitem label="Save"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menuitem label="Close"></mdc-menuitem>
  <mdc-menuitem label="Exit"></mdc-menuitem>
`,C=t=>i`
  <mdc-menu header-text="${t["header-text"]}" data-aria-label="${t["data-aria-label"]}">
    ${g}
  </mdc-menu>`,ne={title:"Work In Progress/menu/menu",tags:["autodocs"],component:"mdc-menu",render:C,parameters:{badges:["wip"]},argTypes:{"header-text":{control:"text"},"data-aria-label":{control:"text"},...y,...L,..._(["default","listItems"])}},r={args:{"header-text":"Menu Header","data-aria-label":"This is an Aria Label"}},m={render:()=>i`<mdc-menu>${g}</mdc-menu>`};var l,u,b;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'header-text': 'Menu Header',
    'data-aria-label': 'This is an Aria Label'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,h,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:"{\n  render: () => html`<mdc-menu>${menuItemsList}</mdc-menu>`\n}",...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const pe=["Example","MenuWithoutHeader"];export{r as Example,m as MenuWithoutHeader,pe as __namedExportsOrder,ne as default};
