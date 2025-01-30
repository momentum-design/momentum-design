import{i as h,k as o}from"./lit-element-CHllvULs.js";import{u as f,C as u,n as g}from"./index-HW6KrQZO.js";import{h as x,a as y}from"./index-BNZgxKMr.js";import"./jsx-runtime-N83kn9-W.js";import"./index-xcHCc_se.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CZ6U3Wjf.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";const S=f.constructTagName("subcomponent-focusring"),b={SHAPE:"button"},E=["button","radio","checkbox"],k=[x,h`
    .button:focus, .radio:focus, .checkbox:focus {
      outline: none;
    }
  `,...y()];var A=Object.defineProperty,P=(e,c,i,_)=>{for(var t=void 0,a=e.length-1,p;a>=0;a--)(p=e[a])&&(t=p(c,i,t)||t);return t&&A(c,i,t),t};const n=class n extends u{constructor(){super(...arguments),this.shape=b.SHAPE}render(){switch(this.shape){case"button":return o`<button class="button">ClickMe</button>`;case"radio":return o`<input type="radio" id="radio" name="group" class="radio" /><label for="radio"
            >SelectMe</label
          >`;case"checkbox":return o`
          <input type="checkbox" id="checkbox" name="terms" class="checkbox" />
          <label for="checkbox">Accept Terms</label>
        `;default:return null}}};n.styles=[...u.styles,...k];let r=n;P([g({type:String})],r.prototype,"shape");r.register(S);const T=e=>o` <mdc-subcomponent-focusring shape="${e.shape}"></mdc-subcomponent-focusring> `,w={title:"Styling/Focus Ring",component:"mdc-subcomponent-focusring",render:T,parameters:{badges:["stable"]},argTypes:{shape:{options:E,control:{type:"radio"}}}},s={args:{shape:b.SHAPE}};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    shape: DEFAULTS.SHAPE
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const G=["Example"];export{s as Example,G as __namedExportsOrder,w as default};
