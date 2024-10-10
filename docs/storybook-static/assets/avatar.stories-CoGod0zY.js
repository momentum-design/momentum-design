import{i as x,k as o}from"./lit-element-CPYlYYac.js";import{u as g,C as E,n}from"./index-fQJcZKNb.js";import{t as l}from"./if-defined-4GS2c12S.js";const T=x`
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
`,b=g.constructTagName("avatar"),v="rem",a={TYPE:"photo",SIZE:1.5};var S=Object.defineProperty,p=(s,t,m,z)=>{for(var r=void 0,c=s.length-1,h;c>=0;c--)(h=s[c])&&(r=h(t,m,r)||r);return r&&S(t,m,r),r};const d=class d extends E{constructor(){super(...arguments),this.type=a.TYPE,this.size=a.SIZE}updateSize(){if(this.size){const t=`${this.size}${v}`;this.style.width=t,this.style.height=t}}updated(t){super.updated(t),t.has("size")&&this.updateSize()}photoTemplate(){return o`
      <img
        src="${l(this.src)}"
        alt="${l(this.alt)}"
      />
    `}render(){let t;return this.type==="photo"?t=this.photoTemplate():t=o``,o`${t}`}};d.styles=T;let e=d;p([n({type:String,reflect:!0})],e.prototype,"type");p([n({type:String})],e.prototype,"alt");p([n({type:String})],e.prototype,"src");p([n({type:Number})],e.prototype,"size");e.register(b);const w=s=>o`
  <mdc-avatar src="${s.src}" size="${s.size}" type="${s.type}"></mdc-avatar>
`,H={title:"Work In Progress/avatar",component:"mdc-avatar",render:w,parameters:{badges:["wip"]},argTypes:{}},i={args:{src:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80",size:a.SIZE,type:a.TYPE}};var f,u,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    // eslint-disable-next-line max-len
    src: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80',
    size: DEFAULTS.SIZE,
    type: DEFAULTS.TYPE
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const M=["Primary"];export{i as Primary,M as __namedExportsOrder,H as default};
