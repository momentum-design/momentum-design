import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as w,k as d,D as S}from"./lit-element-CHllvULs.js";import{C as i,n as f,u as T}from"./index-HW6KrQZO.js";import{T as A}from"./index-D5kxIDdh.js";import{V as D,T as E}from"./text.constants-DJu2q-6E.js";import"./index-BGkqZMsC.js";import{c as F,s as _}from"./commonArgTypes-BluK8w5L.js";import{h as I,d as $}from"./utils-D1SE5bce.js";import"./index-CEJJ7ODp.js";import"./v4-CQkTLCs1.js";import"./if-defined-C4tJgJ33.js";import"./ValueMixin-DFWGhyGn.js";import"./formfieldwrapper.component-Dae6IeB3.js";import"./index-MYSkQ1zX.js";import"./DisabledMixin-DBt9didn.js";import"./index-BnIP7Wfy.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BFc9mT2k.js";import"./create-context-89xeped_.js";import"./buttonsimple.component-DVyOksUm.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./button.constants-CjxsrM-Y.js";import"./button.utils-DSouLKFM.js";const L=w`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`,C=[L];var M=Object.defineProperty,y=(a,e,c,t)=>{for(var r=void 0,o=a.length-1,m;o>=0;o--)(m=a[o])&&(r=m(e,c,r)||r);return r&&M(e,c,r),r};const p=class p extends i{constructor(){super(),this.role="group",this.addEventListener("keydown",this.handleKeyDown)}get checkboxList(){var t,r;const e=Array.from(((t=this.shadowRoot)==null?void 0:t.querySelectorAll("slot"))??[]);return(((r=e==null?void 0:e.filter(o=>o.name!=="help-text")[0])==null?void 0:r.assignedElements())||[]).filter(o=>o.tagName.toLowerCase()===A)}handleKeyDown(e){e.key==="ArrowDown"&&this.navigate(e.target,1),e.key==="ArrowUp"&&this.navigate(e.target,-1)}navigate(e,c){const t=this.checkboxList.map(m=>m.id),o=((t.indexOf(e.id)+c)%t.length+t.length)%t.length;this.children[o].focus()}render(){const e=this.headerText?d`<mdc-text class="header-text" tagname="${D.SPAN}" type="${E.BODY_LARGE_BOLD}">
          ${this.headerText}
        </mdc-text>`:S;return d`
      ${e}
      <slot name="help-text"></slot>
      <slot></slot>
    `}};p.styles=[...i.styles,...C];let s=p;y([f({type:String,attribute:"header-text"})],s.prototype,"headerText");y([f({type:String,reflect:!0})],s.prototype,"role");const N=T.constructTagName("checkboxgroup");s.register(N);const O=a=>d`
  <mdc-checkboxgroup
    header-text="${a["header-text"]}"
  >
    <mdc-checkbox label="Black Widow"></mdc-checkbox>
    <mdc-checkbox label="Captain America"></mdc-checkbox>
    <mdc-checkbox label="Hawkye"></mdc-checkbox>
    <mdc-checkbox label="The Hulk"></mdc-checkbox>
    <mdc-checkbox label="Iron Man"></mdc-checkbox>
    <mdc-checkbox label="Thor"></mdc-checkbox>
  </mdc-checkboxgroup>
`,me={title:"Work In Progress/checkboxgroup",tags:["autodocs"],render:O,component:"mdc-checkboxgroup",parameters:{badges:["wip"]},argTypes:{"header-text":{control:"text"},...I(["default"]),...F,..._}},l={args:{"header-text":"Select your Avengers team"}},n={render:()=>d`
      <form @submit=${e=>{e.preventDefault();const t=new FormData(e.target).getAll("super-power");v("Form Submitted")({value:t})}}>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mdc-checkboxgroup header-text="Super powers (check all that apply)">
            <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Mind control" value="mind-control" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super genius" value="super-genius" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Weather control" value="weather-control" name="super-power"></mdc-checkbox>
          </mdc-checkboxgroup>
          <mdc-button type="submit">Submit</mdc-button>
        </div>
      </form>
  `,argTypes:{...$(["header-text"])}};var h,u,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'header-text': 'Select your Avengers team'
  }
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,g,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mdc-checkboxgroup header-text="Super powers (check all that apply)">
            <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Mind control" value="mind-control" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super genius" value="super-genius" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Weather control" value="weather-control" name="super-power"></mdc-checkbox>
          </mdc-checkboxgroup>
          <mdc-button type="submit">Submit</mdc-button>
        </div>
      </form>
  \`;
  },
  argTypes: {
    ...disableControls(['header-text'])
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const le=["Example","FormField"];export{l as Example,n as FormField,le as __namedExportsOrder,me as default};
