import{i as A,k as e}from"./lit-element-CHllvULs.js";import{u as E,C as l,n as H}from"./index-HW6KrQZO.js";import{h as C,a as F}from"./index-BGjwsboe.js";import{h as S}from"./utils-D1SE5bce.js";import"./jsx-runtime-N83kn9-W.js";import"./index-DDdiKr2t.js";import"./index-s2OUN_11.js";import"./index-c5NldiH8.js";import"./index-D_AcBDuB.js";import"./index-Q1Y3hlwM.js";import"./index-DoNa3y37.js";import"./index-D7v_kNLo.js";import"./index-0yAVlo_W.js";import"./index-fTKUCRcp.js";import"./index-DMGsr5-W.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-jUhjlhj2.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-BPMM56DO.js";import"./DisabledMixin-DBt9didn.js";import"./button.constants-BtWRRBoE.js";import"./button.utils-CM5PFBkb.js";import"./index-DmwdNJrh.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./if-defined-C4tJgJ33.js";import"./index-CUwa4kto.js";import"./IconNameMixin-DXlfdGtk.js";import"./index-BidNIFxu.js";import"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import"./class-map-DVSk4OQh.js";import"./directive-Ctav8iJK.js";import"./index-CznJ0h6r.js";import"./formfieldwrapper.component-63e8oEkZ.js";import"./DataAriaLabelMixin-vs_lw9aw.js";import"./FormInternalsMixin-Ch02HUy5.js";const P=E.constructTagName("subcomponent-focusring"),T={SHAPE:"button"},R=["button","radio","checkbox"],_=[C,A`
    .button:focus, .radio:focus, .checkbox:focus {
      outline: none;
    }
  `,...F()];var M=Object.defineProperty,B=(o,m,p,L)=>{for(var t=void 0,c=o.length-1,d;c>=0;c--)(d=o[c])&&(t=d(m,p,t)||t);return t&&M(m,p,t),t};const n=class n extends l{constructor(){super(...arguments),this.shape=T.SHAPE}render(){switch(this.shape){case"button":return e`<button class="button">ClickMe</button>`;case"radio":return e`<input type="radio" id="radio" name="group" class="radio" /><label for="radio"
            >SelectMe</label
          >`;case"checkbox":return e`
          <input type="checkbox" id="checkbox" name="terms" class="checkbox" />
          <label for="checkbox">Accept Terms</label>
        `;default:return null}}};n.styles=[...l.styles,..._];let s=n;B([H({type:String})],s.prototype,"shape");s.register(P);const D=o=>e` <mdc-subcomponent-focusring shape="${o.shape}"></mdc-subcomponent-focusring> `,At={title:"Styling/Focus Ring",component:"mdc-subcomponent-focusring",render:D,parameters:{badges:["stable"]},argTypes:{shape:{options:R,control:{type:"radio"}}}},r={args:{shape:T.SHAPE}},a={argTypes:{...S(["shape"])},render:()=>e`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-button>Button</mdc-button>
    <mdc-avatarbutton
      initials="MD"
      size="48"
      src="https://picsum.photos/id/63/256"
      aria-label="Avatar Button"
    ></mdc-avatarbutton>
    <mdc-tab 
      icon-name="placeholder-bold" 
      tabindex="0" 
      text="Tab 1" 
      variant="pill"
    >
      <mdc-badge 
        slot="badge" 
        type="counter" 
        counter="1"
      ></mdc-badge>
    </mdc-tab>
  </div>
  `},i={argTypes:{...S(["shape"])},render:()=>e`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
    <mdc-input value="Input" trailing-button></mdc-input>
    <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
    <mdc-checkbox label="Checkbox"></mdc-checkbox>
    <mdc-toggle label="Toggle"></mdc-toggle>
  </div>`};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    shape: DEFAULTS.SHAPE
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-button>Button</mdc-button>
    <mdc-avatarbutton
      initials="MD"
      size="48"
      src="https://picsum.photos/id/63/256"
      aria-label="Avatar Button"
    ></mdc-avatarbutton>
    <mdc-tab 
      icon-name="placeholder-bold" 
      tabindex="0" 
      text="Tab 1" 
      variant="pill"
    >
      <mdc-badge 
        slot="badge" 
        type="counter" 
        counter="1"
      ></mdc-badge>
    </mdc-tab>
  </div>
  \`
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,v,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\`
  <div style='display: flex; align-items: center; gap: 0.5rem'>
    <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
    <mdc-input value="Input" trailing-button></mdc-input>
    <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
    <mdc-checkbox label="Checkbox"></mdc-checkbox>
    <mdc-toggle label="Toggle"></mdc-toggle>
  </div>\`
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const Et=["Example","FocusRingOnHost","FocusRingWithinHost"];export{r as Example,a as FocusRingOnHost,i as FocusRingWithinHost,Et as __namedExportsOrder,At as default};
