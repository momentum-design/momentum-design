import{i as h,k as o}from"./lit-element-CPYlYYac.js";import{u as f,C as u,n as g}from"./index-BLShQaRP.js";import{h as y,a as S}from"./index-DOMSj5Ok.js";import"./jsx-runtime-N83kn9-W.js";import"./index-0ECw4a0e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BsLnwl5J.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";const k=f.constructTagName("subcomponent-focusring"),b={SHAPE:"button"},x=["button","radio","checkbox"],A=[y,h`
    .button:focus, .radio:focus, .checkbox:focus {
      outline: none;
    }
  `,S];var E=Object.defineProperty,P=(e,c,i,_)=>{for(var t=void 0,a=e.length-1,p;a>=0;a--)(p=e[a])&&(t=p(c,i,t)||t);return t&&E(c,i,t),t};const n=class n extends u{constructor(){super(...arguments),this.shape=b.SHAPE}render(){switch(this.shape){case"button":return o`<button class="button">ClickMe</button>`;case"radio":return o`<input type="radio" id="radio" name="group" class="radio" /><label for="radio"
            >SelectMe</label
          >`;case"checkbox":return o`
          <input type="checkbox" id="checkbox" name="terms" class="checkbox" />
          <label for="checkbox">Accept Terms</label>
        `;default:return null}}};n.styles=[...u.styles,...A];let r=n;P([g({type:String})],r.prototype,"shape");r.register(k);const T=e=>o` <mdc-subcomponent-focusring shape="${e.shape}"></mdc-subcomponent-focusring> `,w={title:"Styling/Focus Ring",component:"mdc-subcomponent-focusring",render:T,parameters:{badges:["stable"]},argTypes:{shape:{options:x,control:{type:"radio"}}}},s={args:{shape:b.SHAPE}};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    shape: DEFAULTS.SHAPE
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const G=["Primary"];export{s as Primary,G as __namedExportsOrder,w as default};
