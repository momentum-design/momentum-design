import{i as U,k as l,D as k}from"./lit-element-CHllvULs.js";import{n as d,u as W}from"./index-HW6KrQZO.js";import{t as v}from"./if-defined-C4tJgJ33.js";import{F as g}from"./formfieldwrapper.component-DAx6tjPQ.js";import{a as R}from"./index-MYSkQ1zX.js";import"./index-BRJNDW9c.js";import{a as P}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as z,s as B}from"./commonArgTypes-BluK8w5L.js";import{h as K,d as G}from"./utils-D1SE5bce.js";import"./index-Dlz7565z.js";import"./text.constants-DJu2q-6E.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./button.constants-CjxsrM-Y.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./buttonsimple.component-C2NzybLk.js";var q=Object.defineProperty,J=(o,e,t,n)=>{for(var c=void 0,r=o.length-1,a;r>=0;r--)(a=o[r])&&(c=a(e,t,c)||c);return c&&q(e,t,c),c};const Q=o=>{class e extends o{constructor(){super(...arguments),this.dataAriaLabel=null}}return J([d({type:String,reflect:!0,attribute:"data-aria-label"})],e.prototype,"dataAriaLabel"),e};var X=Object.defineProperty,Y=(o,e,t,n)=>{for(var c=void 0,r=o.length-1,a;r>=0;r--)(a=o[r])&&(c=a(e,t,c)||c);return c&&X(e,t,c),c};const Z=o=>{class e extends o{constructor(){super(...arguments),this.name=""}}return Y([d({reflect:!0,type:String})],e.prototype,"name"),e};var ee=Object.defineProperty,ce=(o,e,t,n)=>{for(var c=void 0,r=o.length-1,a;r>=0;r--)(a=o[r])&&(c=a(e,t,c)||c);return c&&ee(e,t,c),c};const oe=o=>{class e extends o{constructor(){super(...arguments),this.value=""}}return ce([d({reflect:!0,type:String})],e.prototype,"value"),e},te=W.constructTagName("checkbox"),f={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},re=[U`
  :host {
    --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-checkbox-border-color: var(--mds-color-theme-outline-button-normal);
    --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
    --mdc-checkbox-checked-background-color: var(--mds-color-theme-control-active-normal);
    --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
    --mdc-checkbox-disabled-background-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-checkbox-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);
    --mdc-checkbox-disabled-icon-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-checkbox-icon-background-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-checkbox-icon-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-checkbox-icon-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);

    flex-direction: row;
    align-items: flex-start;
  }
  .mdc-label, .input {
    cursor: pointer;
  }
  :host([checked]) .icon-container,
  :host([indeterminate]) .icon-container {
    background: var(--mdc-checkbox-checked-background-color);
    border: unset;
  }
  :host([checked]) .container:hover .icon-container,
  :host([indeterminate]) .container:hover .icon-container {
    background: var(--mdc-checkbox-checked-background-color-hover);
  }
  :host([checked]) .container:active .icon-container,
  :host([indeterminate]) .container:active .icon-container {
    background: var(--mdc-checkbox-checked-pressed-icon-color);
  }
  :host([disabled]) .mdc-label,
  :host([disabled]) .input {
    cursor: default;
  }
  :host([disabled]) .container:hover {
    background: unset;
  }
  :host([disabled]) .icon-container {
    border-color: var(--mdc-checkbox-disabled-border-color);
    background: var(--mdc-checkbox-disabled-background-color);
  }
  :host([disabled]) .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-disabled-icon-color);
  }
  :host([disabled][checked]) .icon-container,
  :host([disabled][indeterminate]) .icon-container {
    background: var(--mdc-checkbox-disabled-checked-icon-color);
    border: 0.0625rem solid var(--mdc-checkbox-disabled-border-color);
  }
  .input {
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0.1%;
    overflow: visible;
    z-index: 1;
  }
  .icon-container {
    display: flex;
    align-items: center;
    border: 0.0625rem solid var(--mdc-checkbox-icon-border-color);
    background: var(--mdc-checkbox-icon-background-color);
  }
  .container:hover {
    background: var(--mdc-checkbox-background-color-hover);
  }
  .container:active {
    background: var(--mdc-checkbox-pressed-icon-color);
  }
  .input, .icon-container {
    width: 1rem;
    height: 1rem;
  }
  .input,
  .icon-container,
  .container {
    border-radius: 0.125rem;
  }
  .icon {
    --mdc-icon-fill-color: var(--mdc-checkbox-icon-color);
  }
  .container {
    margin: 0.125rem 0;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  /* High Contrast Mode */
  @media (forced-colors: active) {
    :host([checked]) .icon-container,
    :host([indeterminate]) .icon-container {
      border: 0.0625rem solid var(--mdc-checkbox-border-color);
    }
  }
`,...R(!0)];var ae=Object.defineProperty,j=(o,e,t,n)=>{for(var c=void 0,r=o.length-1,a;r>=0;r--)(a=o[r])&&(c=a(e,t,c)||c);return c&&ae(e,t,c),c};const x=class x extends Z(oe(Q(g))){constructor(){super(),this.checked=!1,this.indeterminate=!1,this.internals=this.attachInternals(),this.helpTextType=void 0}get form(){return this.internals.form}setFormValue(){let e=null;this.checked&&(e=this.value?this.value:"on"),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleChange(e){this.toggleState(),this.dispatchEvent(new Event(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){const e=this.checked||this.indeterminate?l`
      <mdc-icon
        class="icon"
        name="${this.indeterminate?f.INDETERMINATE:f.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    `:k,t=this.helpText?this.renderHelperText():k;return l`
      <div class="container mdc-focus-ring">
        <input
          id="${this.id}"
          type="checkbox"
          class="input"
          name="${v(this.name)}"
          value="${v(this.value)}"
          .checked="${this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel??""}"
          @change=${this.handleChange}
        />
        <div class="icon-container">${e}</div>
      </div>
      <div class="text-container">
        ${this.renderLabel()}
        ${t}
      </div>
    `}};x.formAssociated=!0,x.styles=[...g.styles,...re];let i=x;j([d({type:Boolean,reflect:!0})],i.prototype,"checked");j([d({type:Boolean,reflect:!0})],i.prototype,"indeterminate");i.register(te);const ne=o=>l`
  <mdc-checkbox
    label="${o.label}"
    help-text="${o["help-text"]}"
    ?checked="${o.checked}"
    ?disabled="${o.disabled}"
    ?indeterminate="${o.indeterminate}"
    data-aria-label="${o["data-aria-label"]}"
    @change="${P("onchange")}"
  ></mdc-checkbox>
`,we={title:"Work In Progress/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:ne,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},...K(["help-text-type","label-info","id","internals"]),...G(["--mdc-checkbox-background-color-hover","--mdc-checkbox-border-color","--mdc-checkbox-checked-background-color","--mdc-checkbox-checked-background-color-hover","--mdc-checkbox-checked-pressed-icon-color","--mdc-checkbox-disabled-background-color","--mdc-checkbox-disabled-border-color","--mdc-checkbox-disabled-checked-icon-color","--mdc-checkbox-disabled-icon-color","--mdc-checkbox-icon-background-color","--mdc-checkbox-icon-border-color","--mdc-checkbox-icon-color","--mdc-checkbox-pressed-icon-color"]),...z,...B}},s={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},m={args:{"data-aria-label":"This is a checkbox with no label"}},h={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},b={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},p={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>l`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},u={render:()=>l`
      <form @submit=${e=>{e.preventDefault();const n=new FormData(e.target).getAll("super-power");P("Form Submitted")({value:n})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <mdc-button type="submit">Submit</mdc-button>
        </fieldset>
      </form>
    `};var y,T,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    'data-aria-label': 'Agree to all terms and conditions'
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var $,I,C;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label'
  }
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var w,E,_;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.'
  }
}`,...(_=(E=h.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,A,D;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(D=(A=b.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,L,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      element: 'mdc-checkbox'
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>\`
}`,...(V=(L=p.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var H,N,O;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <mdc-button type="submit">Submit</mdc-button>
        </fieldset>
      </form>
    \`;
  }
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const Ee=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField"];export{p as DisabledVariants,s as Example,u as FormField,h as HelperText,b as Indeterminate,m as WithoutLabel,Ee as __namedExportsOrder,we as default};
