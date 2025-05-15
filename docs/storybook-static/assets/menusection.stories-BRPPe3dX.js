import{k as s}from"./lit-element-D5KKan5q.js";import{c as f,s as E}from"./commonArgTypes-BluK8w5L.js";import{a as A}from"./utils-CO8B6ZcN.js";import{o as g}from"./query-assigned-elements-uEuc3rg8.js";import{T as C}from"./index-7nkRQM75.js";import{T as x}from"./index-D_T5rwZX.js";import{A as a,T as v}from"./menusection.constants-CectB7Mc.js";import{C as p}from"./index-C9z9WAEj.js";import{R as y}from"./roles-DMFGbP5t.js";import{K as n}from"./keys-CuA-OPmH.js";import"./index-CdUCglIm.js";import"./index-BKk1AD_8.js";import"./base-DIkkzJ-c.js";import"./index-BQHpR8ua.js";import"./DisabledMixin-BZruwOeC.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./listitem.component-DutIXdka.js";import"./popover.component-Dx75vo8o.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./v4-CmTdKEVZ.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./menuitem.component-D_U39F3H.js";import"./index-DGo1hAUy.js";import"./iframe-KXyrsHkr.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-B6Hgn4vS.js";import"./toggle.constants-TSzMzqaO.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";var T=Object.defineProperty,R=(i,e,r,d)=>{for(var t=void 0,m=i.length-1,u;m>=0;m--)(u=i[m])&&(t=u(e,r,t)||t);return t&&T(e,r,t),t};const l=class l extends p{constructor(){super(...arguments),this.handleClick=e=>{this.toggleCheckedState(e.target)},this.handleKeydown=e=>{e.key!==n.ENTER&&e.key!==n.SPACE||(e.key===n.SPACE&&e.preventDefault(),this.toggleCheckedState(e.target))}}connectedCallback(){super.connectedCallback(),this.setAttribute("role",y.GROUP),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeydown)}toggleCheckedState(e){if(!(e instanceof HTMLElement)||e.hasAttribute("disabled"))return;const r=e.tagName.toLowerCase(),d=e.getAttribute("aria-checked")===a.TRUE;switch(r){case x:e.setAttribute("aria-checked",String(!d));break;case C:if(d)return;this.radios.forEach(t=>{const m=t===e?a.TRUE:a.FALSE;t.setAttribute("aria-checked",m)});break}}render(){return s`<slot></slot>`}};l.styles=[...p.styles];let c=l;R([g({selector:`${C}:not([disabled])`})],c.prototype,"radios");c.register(v);const w=i=>s`<div role="menubar" style="width: 25rem;">${i}</div>`,S=()=>w(s`
    <mdc-menusection>
      <mdc-menuitemcheckbox label="Checkbox1"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox label="Checkbox2"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox label="Checkbox3"></mdc-menuitemcheckbox>
      <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
      <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
      <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
    </mdc-menusection>
    <mdc-divider></mdc-divider>
    <mdc-menusection>
      <mdc-menuitemradio label="Radio1"></mdc-menuitemradio>
      <mdc-menuitemradio label="Radio2"></mdc-menuitemradio>
      <mdc-menuitemradio label="Radio3"></mdc-menuitemradio>
    </mdc-menusection>
    <mdc-divider></mdc-divider>
    <mdc-menusection>
      <mdc-menuitem label="MenuItem1"></mdc-menuitem>
      <mdc-menuitem label="MenuItem2"></mdc-menuitem>
    </mdc-menusection>
    <mdc-divider></mdc-divider>
    <mdc-menusection>
      <mdc-menuitemcheckbox label="Toggle6" indicator="toggle"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox label="Checkmark7" indicator="checkmark" 
      aria-label="Checkbox 7"></mdc-menuitemcheckbox>
    </mdc-menusection>`),le={title:"Work In Progress/menu/menusection",tags:["autodocs"],component:"mdc-menusection",parameters:{badges:["wip"]},argTypes:{...f,...E}},o={render:S,...A()};var h,k,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render,
  ...hideAllControls()
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const ue=["Example"];export{o as Example,ue as __namedExportsOrder,le as default};
