import{i as p,k as f}from"./lit-element-CPYlYYac.js";import{C as y,n as u,u as x}from"./index-CFYjfE6c.js";const b=p`
  :host([type="heading-1"]) {
    font-size: 7.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 9.375rem */
    text-transform: capitalize;
  }

  :host([type="heading-2"]) {
    font-size: 6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 7.5rem */
    text-transform: capitalize;
  }

  :host([type="heading-3"]) {
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 3.75rem */
  }

  :host([type="heading-4"]) {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 3.125rem */
  }

  :host([type="heading-5"]) {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 2.5rem */
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  :host([type="heading-6"]) {
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 171.429% */
  }

  :host([type="heading-7"]) {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
  }

  :host([type="body-large"]) {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 3rem */
    margin-block-end: 1.875em; /* paragraph spacing, 30px */
  }

  :host([type="body-regular"]) {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 2.25rem */
    margin-block-end: 1.5em; /* paragraph spacing, 24px */
  }

  :host([type="body-small"]) {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.875rem */
    margin-block-end: 0.125rem; /* paragraph spacing, 2px */
  }

  :host([type="image-title"]) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.04rem;
    text-transform: uppercase;
  }

  :host([type="label"]) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.02rem;
  }
`,z=[p`
    :host {
      --mdc-text-font-family: var(--mdc-themeprovider-font-family);

      display: block;
      font-family: var(--mdc-text-font-family);
    }
  `,b],d=e=>{const t=e.split("-");return{firstPart:t[0],secondPart:t[1]}},c=e=>{const{firstPart:t,secondPart:r}=d(e);return t==="heading"&&+r>0&&+r<7},w=e=>e?c(e)?"heading":"paragraph":null,P=e=>{if(e&&c(e)){const{secondPart:t}=d(e);return t}return null};var v=Object.defineProperty,T=(e,t,r,E)=>{for(var n=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=l(t,r,n)||n);return n&&v(t,r,n),n};const s=class s extends y{handleTypeChanged(){this.role=w(this.type),this.ariaLevel=P(this.type)}updated(t){super.updated(t),t.has("type")&&this.handleTypeChanged()}render(){return f`<slot></slot>`}};s.styles=z;let o=s;T([u({attribute:"type",reflect:!0,type:String})],o.prototype,"type");const k=x.constructTagName("text"),_={TYPE:["heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","heading-7","body-large","body-regular","body-small","image-title","label"]};o.register(k);const C=e=>f`
<mdc-text type="${e.type}">${e.children}</mdc-text>
`,L={title:"Work In Progress/text",tags:["autodocs"],component:"mdc-text",render:C,parameters:{badges:["wip"]},argTypes:{type:{control:"radio",options:_.TYPE}}},i={args:{type:"heading-1",children:"This is a test text"}};var h,m,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'heading-1',
    children: 'This is a test text'
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const N=["Primary"];export{i as Primary,N as __namedExportsOrder,L as default};
