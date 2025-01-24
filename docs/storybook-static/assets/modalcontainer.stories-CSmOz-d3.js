import{i as f,k as E}from"./lit-element-CHllvULs.js";import{u as g,C as u,n as l}from"./index-HW6KrQZO.js";import{t as y}from"./if-defined-C4tJgJ33.js";import{h as T}from"./index-BNZgxKMr.js";import{c as A,s as R}from"./commonArgTypes-BluK8w5L.js";import{d as C}from"./utils-D1SE5bce.js";const N=[T,f`
    :host {
      --mdc-modalcontainer-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
      --mdc-modalcontainer-border-color: var(--mds-color-theme-outline-secondary-normal);
      --mdc-modalcontainer-inverted-background-color: var(--mds-color-theme-inverted-background-normal);
      --mdc-modalcontainer-inverted-border-color: var(--mds-color-theme-inverted-outline-primary-normal);
      --mdc-modalcontainer-inverted-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-modalcontainer-elevation-1: var(--mds-elevation-1);
      --mdc-modalcontainer-elevation-2: var(--mds-elevation-2);
      --mdc-modalcontainer-elevation-3: var(--mds-elevation-3);
      --mdc-modalcontainer-elevation-4: var(--mds-elevation-4);
    }

    .mdc-modal-container {
      padding: 0.75rem;
      background-color: var(--mdc-modalcontainer-primary-background-color);
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-modalcontainer-border-color);
    }

    .mdc-modal-container[contrast] {
      background-color: var(--mdc-modalcontainer-inverted-background-color);
      border: 0.0625rem solid var(--mdc-modalcontainer-inverted-border-color);
      color: var(--mdc-modalcontainer-inverted-text-color);
    }

    .mdc-modal-container[data-elevation='1'] {
      filter: var(--mdc-modalcontainer-elevation-1);
    }
    .mdc-modal-container[data-elevation='2'] {
      filter: var(--mdc-modalcontainer-elevation-2);
    }
    .mdc-modal-container[data-elevation='3'] {
      filter: var(--mdc-modalcontainer-elevation-3);
    }
    .mdc-modal-container[data-elevation='4'] {
      filter: var(--mdc-modalcontainer-elevation-4);
    }
  `],k=g.constructTagName("modalcontainer"),c={TONAL:"tonal",CONTRAST:"contrast"},d={0:0,1:1,2:2,3:3,4:4},h={DIALOG:"dialog",ALERT_DIALOG:"alertdialog"},a={COLOR:c.TONAL,ELEVATION:d[0],ROLE:h.DIALOG,CHILDREN:"Lorem ipsum dolor sit amet"};var x=Object.defineProperty,i=(o,s,v,S)=>{for(var e=void 0,n=o.length-1,p;n>=0;n--)(p=o[n])&&(e=p(s,v,e)||e);return e&&x(s,v,e),e};const m=class m extends u{constructor(){super(...arguments),this.color=a.COLOR,this.elevation=a.ELEVATION,this.role=a.ROLE}render(){return E`
      <div 
        id='mdc-modal-container' 
        class='mdc-modal-container'  
        ?contrast="${this.color==="contrast"}"
        role="${this.role}"
        aria-modal='true'
        aria-label=${y(this.ariaLabel)}
        data-elevation="${this.elevation}"
        >
        <slot></slot>
      </div>
      `}};m.styles=[...u.styles,...N];let r=m;i([l({type:String,reflect:!0})],r.prototype,"color");i([l({type:Number,reflect:!0})],r.prototype,"elevation");i([l({type:String})],r.prototype,"role");r.register(k);const I=o=>E`
<mdc-modalcontainer
  color="${o.color}"
  elevation="${o.elevation}"
  role="${o.role}"
  aria-label="${o["aria-label"]}"
>
  ${o.children}
</mdc-modalcontainer>
`,V={title:"Internal/modalcontainer",tags:["autodocs"],component:"mdc-modalcontainer",render:I,parameters:{badges:["wip"]},argTypes:{children:{control:"text",description:'Text for the modal container (passed into "default" slot)'},color:{control:"select",options:Object.values(c)},elevation:{control:"select",options:Object.values(d)},role:{control:"radio",options:Object.values(h)},"aria-label":{control:"text",description:"Aria label for the modal container. Required for accessibility."},...A,...R,...C(["--mdc-modalcontainer-primary-background-color","--mdc-modalcontainer-border-color","--mdc-modalcontainer-inverted-background-color","--mdc-modalcontainer-inverted-border-color","--mdc-modalcontainer-inverted-text-color"])}},t={args:{color:c.CONTRAST,elevation:d[0],role:a.ROLE,"aria-label":"Modal container",children:a.CHILDREN}};var b,O,L;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: COLOR.CONTRAST,
    elevation: ELEVATION[0],
    role: DEFAULTS.ROLE,
    'aria-label': 'Modal container',
    children: DEFAULTS.CHILDREN
  }
}`,...(L=(O=t.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const H=["Example"];export{t as Example,H as __namedExportsOrder,V as default};
