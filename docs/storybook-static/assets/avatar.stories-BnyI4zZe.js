import{i as g,k as o}from"./lit-element-CPYlYYac.js";import{u as E,C as h,n}from"./index-BLShQaRP.js";import{t as f}from"./if-defined-4GS2c12S.js";const T=g`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100vh;
    position: relative;
    width: fit-content;
  }
  img {
    border-radius: 100vh;
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
`,b=[T],v=E.constructTagName("avatar"),S="rem",a={TYPE:"photo",SIZE:1.5};var w=Object.defineProperty,p=(s,t,l,$)=>{for(var r=void 0,c=s.length-1,m;c>=0;c--)(m=s[c])&&(r=m(t,l,r)||r);return r&&w(t,l,r),r};const d=class d extends h{constructor(){super(...arguments),this.type=a.TYPE,this.size=a.SIZE}updateSize(){if(this.size){const t=`${this.size}${S}`;this.style.width=t,this.style.height=t}}updated(t){super.updated(t),t.has("size")&&this.updateSize()}photoTemplate(){return o`
      <img
        src="${f(this.src)}"
        alt="${f(this.alt)}"
      />
    `}render(){let t;return this.type==="photo"?t=this.photoTemplate():t=o``,o`${t}`}};d.styles=[...h.styles,...b];let e=d;p([n({type:String,reflect:!0})],e.prototype,"type");p([n({type:String})],e.prototype,"alt");p([n({type:String})],e.prototype,"src");p([n({type:Number})],e.prototype,"size");e.register(v);const z=s=>o`
  <mdc-avatar src="${s.src}" size="${s.size}" type="${s.type}"></mdc-avatar>
`,M={title:"Work In Progress/avatar",component:"mdc-avatar",render:z,parameters:{badges:["wip"]},argTypes:{}},i={args:{src:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80",size:a.SIZE,type:a.TYPE}};var u,y,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    // eslint-disable-next-line max-len
    src: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80',
    size: DEFAULTS.SIZE,
    type: DEFAULTS.TYPE
  }
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const _=["Primary"];export{i as Primary,_ as __namedExportsOrder,M as default};
