import{i as R,k as r,D as u}from"./lit-element-CHllvULs.js";import{u as z,n as O}from"./index-HW6KrQZO.js";import{t as x}from"./if-defined-C4tJgJ33.js";import{N as B,V as K,D as P}from"./ValueMixin-DFWGhyGn.js";import{F as v}from"./formfieldwrapper.component-Dae6IeB3.js";import{a as j}from"./index-MYSkQ1zX.js";import"./index-BUvIMixM.js";import{a as U}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as G,s as q}from"./commonArgTypes-BluK8w5L.js";import{h as J,d as Q}from"./utils-D1SE5bce.js";import"./index-CgIMCVCL.js";import"./text.constants-DJu2q-6E.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CvArfi6w.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./button.constants-CjxsrM-Y.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./buttonsimple.component-C2NzybLk.js";const X=z.constructTagName("checkbox"),g={CHECKED:"check-bold",INDETERMINATE:"minus-bold"},Y=[R`
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
`,...j(!0)];var Z=Object.defineProperty,W=(c,e,t,p)=>{for(var o=void 0,b=c.length-1,k;b>=0;b--)(k=c[b])&&(o=k(e,t,o)||o);return o&&Z(e,t,o),o};const h=class h extends B(K(P(v))){constructor(){super(),this.checked=!1,this.indeterminate=!1,this.internals=this.attachInternals(),this.helpTextType=void 0}get form(){return this.internals.form}setFormValue(){let e=null;this.checked&&(e=this.value?this.value:"on"),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleChange(e){this.toggleState(),this.dispatchEvent(new Event(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){const e=this.checked||this.indeterminate?r`
      <mdc-icon
        class="icon"
        name="${this.indeterminate?g.INDETERMINATE:g.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    `:u,t=this.helpText?this.renderHelperText():u;return r`
      <div class="container mdc-focus-ring">
        <input
          id="${this.id}"
          type="checkbox"
          class="input"
          name="${x(this.name)}"
          value="${x(this.value)}"
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
    `}};h.formAssociated=!0,h.styles=[...v.styles,...Y];let a=h;W([O({type:Boolean,reflect:!0})],a.prototype,"checked");W([O({type:Boolean,reflect:!0})],a.prototype,"indeterminate");a.register(X);const ee=c=>r`
  <mdc-checkbox
    label="${c.label}"
    help-text="${c["help-text"]}"
    ?checked="${c.checked}"
    ?disabled="${c.disabled}"
    ?indeterminate="${c.indeterminate}"
    data-aria-label="${c["data-aria-label"]}"
    @change="${U("onchange")}"
  ></mdc-checkbox>
`,Te={title:"Work In Progress/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:ee,parameters:{badges:["wip"]},argTypes:{label:{control:"text"},"help-text":{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},"data-aria-label":{control:"text"},name:{control:"text"},value:{control:"text"},...J(["help-text-type","label-info","id","internals"]),...Q(["--mdc-checkbox-background-color-hover","--mdc-checkbox-border-color","--mdc-checkbox-checked-background-color","--mdc-checkbox-checked-background-color-hover","--mdc-checkbox-checked-pressed-icon-color","--mdc-checkbox-disabled-background-color","--mdc-checkbox-disabled-border-color","--mdc-checkbox-disabled-checked-icon-color","--mdc-checkbox-disabled-icon-color","--mdc-checkbox-icon-background-color","--mdc-checkbox-icon-border-color","--mdc-checkbox-icon-color","--mdc-checkbox-pressed-icon-color"]),...G,...q}},n={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,"data-aria-label":"Agree to all terms and conditions"}},d={args:{"data-aria-label":"This is a checkbox with no label"}},i={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails."}},l={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0}},s={parameters:{a11y:{element:"mdc-checkbox"}},render:()=>r`
    <div style="display: flex; flex-direction: column;">
      <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
      <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
      <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
      <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
    </div>`},m={render:()=>r`
      <form @submit=${e=>{e.preventDefault();const p=new FormData(e.target).getAll("super-power");U("Form Submitted")({value:p})}}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
          <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <mdc-button type="submit">Submit</mdc-button>
        </fieldset>
      </form>
    `};var f,y,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    'data-aria-label': 'Agree to all terms and conditions'
  }
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,w,E;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label'
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var $,I,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.'
  }
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var F,C,A;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true
  }
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var M,V,N;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(V=s.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var H,L,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const Se=["Example","WithoutLabel","HelperText","Indeterminate","DisabledVariants","FormField"];export{s as DisabledVariants,n as Example,m as FormField,i as HelperText,l as Indeterminate,d as WithoutLabel,Se as __namedExportsOrder,Te as default};
