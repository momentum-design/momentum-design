import{i as J,k as c}from"./lit-element-CHllvULs.js";import{u as Q,n as q}from"./index-HW6KrQZO.js";import{t as E}from"./if-defined-C4tJgJ33.js";import{h as X,a as Y}from"./index-MYSkQ1zX.js";import"./index-DqrRE3eA.js";import{N as ee,V as te,D as oe}from"./ValueMixin-DFWGhyGn.js";import{F as S}from"./formfieldwrapper.component-Dae6IeB3.js";import"./index-BUvIMixM.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as re,s as ae}from"./commonArgTypes-BluK8w5L.js";import{h as le,d as ce}from"./utils-D1SE5bce.js";import"./index-CgIMCVCL.js";import"./index-BGkqZMsC.js";import"./text.constants-DJu2q-6E.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CvArfi6w.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./button.constants-CjxsrM-Y.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./buttonsimple.component-C2NzybLk.js";const se=[X,J`
  :host {
    --mdc-toggle-width: 3rem;
    --mdc-toggle-height: 1.5rem;
    --mdc-toggle-width-compact: 2rem;
    --mdc-toggle-height-compact: 1rem;
    --mdc-toggle-border-radius: 0.75rem;
    --mdc-toggle-border-radius-compact: 0.5rem;
    --mdc-toggle-border: 0.0625rem solid var(--mds-color-theme-outline-input-normal);

    --mdc-toggle-inactive-rest-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-toggle-inactive-hover-color: var(--mds-color-theme-control-inactive-hover);
    --mdc-toggle-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-toggle-inactive-disabled-color: var(--mds-color-theme-control-inactive-disabled);
    --mdc-toggle-active-rest-color: var(--mds-color-theme-control-active-normal);
    --mdc-toggle-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-toggle-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-toggle-active-disabled-color: var(--mds-color-theme-control-active-disabled);

    --mdc-toggle-label-lineheight: var(--mds-font-lineheight-body-midsize);
    --mdc-toggle-label-fontsize: var(--mds-font-size-body-midsize);
    --mdc-toggle-label-fontweight: 400;
    --mdc-toggle-label-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-toggle-help-text-color: var(--mds-color-theme-text-secondary-normal);

    --mdc-toggle-icon-color-normal: var(--mds-color-theme-common-inverted-text-primary-normal);
    --mdc-toggle-icon-color-disabled: var(--mds-color-theme-common-inverted-text-primary-disabled);
    --mdc-toggle-icon-background-color-normal: var(--mds-color-theme-common-text-primary-normal);
    --mdc-toggle-icon-background-color-disabled: var(--mds-color-theme-common-text-primary-disabled);

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    column-gap: 0.75rem;
    row-gap: 0.25rem;
  }

  :host([help-text='']) {
    row-gap: 0rem;
  }

  .mdc-toggle__container {
    position: relative;
    border-radius: var(--mdc-toggle-border-radius);
  }

  .mdc-toggle__input {
    opacity: 0;
    position: absolute;
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
    cursor: pointer;
  }

  .mdc-toggle__slider {
    width: var(--mdc-toggle-width);
    height: var(--mdc-toggle-height);
    background: var(--mdc-toggle-inactive-rest-color);
    border-radius: var(--mdc-toggle-border-radius);
    border: var(--mdc-toggle-border);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: background-color 0.3s ease;
    outline: none;
    padding: 0.0625rem;
  }

  :host([checked]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-rest-color);
    justify-content: flex-end;
    border-color: transparent;
  }

  :host([size='compact']) .mdc-toggle__slider {
    width: var(--mdc-toggle-width-compact);
    height: var(--mdc-toggle-height-compact);
    border-radius: var(--mdc-toggle-border-radius-compact);
  }
  
  .mdc-toggle__icon {
    padding: 0.25rem;
   --mdc-icon-fill-color: var(--mdc-toggle-icon-color-normal);
   background-color: var(--mdc-toggle-icon-background-color-normal);
   border-radius: 50%;
  }

  :host([disabled]) .mdc-toggle__icon {
    --mdc-icon-fill-color: var(--mdc-toggle-icon-color-disabled);
  }

  :host([size='compact']) .mdc-toggle__icon {
    padding: 0.125rem;
  }

  :host(:not([disabled])) .mdc-toggle__container:hover .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-hover-color);
  }

  :host(:not([disabled])) .mdc-toggle__container:active .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-pressed-color);
  }

  :host(:not([disabled])[checked]) .mdc-toggle__container:hover .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-hover-color);
  }

  :host(:not([disabled])[checked]) .mdc-toggle__container:active .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-pressed-color);
  }

  :host([disabled]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-inactive-disabled-color);
  }

  :host([disabled][checked]) .mdc-toggle__slider {
    background-color: var(--mdc-toggle-active-disabled-color);
  }

  :host([disabled]) .mdc-toggle__icon {
    background-color: var(--mdc-toggle-icon-background-color-disabled);
  }

  .mdc-label-text, .mdc-help-text {
    font-size: var(--mdc-toggle-label-fontsize);
    font-weight: var(--mdc-toggle-label-fontweight);
    line-height: var(--mdc-toggle-label-lineheight);
    grid-column: 2;
  }

  .mdc-help-text {
    color: var(--mdc-toggle-help-text-color);
  }

  :host([disabled]) .mdc-label-text, :host([disabled]) .mdc-help-text {
    color: var(--mdc-toggle-label-color-disabled);
  }

   /* High Contrast Mode */
   @media (forced-colors: active) {
    :host([checked]) .mdc-toggle__slider, .mdc-toggle__icon {
      border: var(--mdc-toggle-border);
    }
  }
`,...Y(!0)],de=Q.constructTagName("toggle"),s={DEFAULT:"default",COMPACT:"compact"},z={CHECKED:"check-bold",UNCHECKED:"cancel-bold"},ie={compact:.75,default:1.25},f={SIZE:s.DEFAULT};var me=Object.defineProperty,B=(t,e,o,_)=>{for(var r=void 0,v=t.length-1,x;v>=0;v--)(x=t[v])&&(r=x(e,o,r)||r);return r&&me(e,o,r),r};const b=class b extends ee(te(oe(S))){constructor(){super(),this.checked=!1,this.size=f.SIZE,this.internals=this.attachInternals(),this.helpTextType=void 0}get form(){return this.internals.form}setFormValue(){let e=null;this.checked&&(e=this.value?this.value:"isActive"),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked)}handleChange(e){this.toggleState();const o=e.constructor;this.dispatchEvent(new o(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(s).includes(e)?e:f.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return c`
        <div class="mdc-toggle__container mdc-focus-ring">
          <input
            id="${this.id}"
            type="checkbox"
            class="mdc-toggle__input"
            role="switch"
            name="${E(this.name)}"
            value="${E(this.value)}"
            .checked="${this.checked}"
            .disabled="${this.disabled}"
            aria-label="${this.dataAriaLabel??""}"
            tabindex="${this.disabled?-1:0}"
            @change="${this.handleChange}"
          />
          <div class="mdc-toggle__slider">
            <mdc-icon
              name="${this.checked?z.CHECKED:z.UNCHECKED}"
              class="mdc-toggle__icon"
              length-unit="rem"
              size="${ie[this.size]}"
            ></mdc-icon>
          </div>
        </div>
        ${this.renderLabel()}
        ${this.renderHelperText()}
    `}};b.formAssociated=!0,b.styles=[...S.styles,...se];let l=b;B([q({type:Boolean,reflect:!0})],l.prototype,"checked");B([q({type:String,reflect:!0})],l.prototype,"size");l.register(de);const ge=t=>c`
  <mdc-toggle
      name="toggleName"
      value="toggleValue"
      @focus="${p("onfocus")}"
      @change="${p("onchange")}"
      size="${t.size}"
      label="${t.label}"
      help-text="${t["help-text"]}"
      data-aria-label="${t["data-aria-label"]}"
      ?checked="${t.checked}"
      ?disabled="${t.disabled}">
    </mdc-toggle>
`,Ve={title:"Work In Progress/toggle",tags:["autodocs"],component:"mdc-toggle",render:ge,parameters:{badges:["wip"]},argTypes:{size:{control:{type:"inline-radio"},options:Object.values(s)},"data-aria-label":{control:"text",description:"Aria label for the toggle component. Required for accessibility."},...le(["help-text-type","label-info","id"]),...ce(["--mdc-toggle-width","--mdc-toggle-height","--mdc-toggle-width-compact","--mdc-toggle-height-compact","--mdc-toggle-border-radius","--mdc-toggle-border-radius-compact","--mdc-toggle-border","--mdc-toggle-inactive-rest-color","--mdc-toggle-inactive-hover-color","--mdc-toggle-inactive-pressed-color","--mdc-toggle-inactive-disabled-color","--mdc-toggle-active-rest-color","--mdc-toggle-active-hover-color","--mdc-toggle-active-pressed-color","--mdc-toggle-active-disabled-color","--mdc-toggle-help-text-color","--mdc-toggle-label-color-disabled"]),...re,...ae}},a={args:{label:"Toggle label",checked:!1,disabled:!1,size:f.SIZE,"help-text":""}},d={args:{...a.args,size:s.DEFAULT}},i={args:{...a.args,size:s.COMPACT}},m={args:{...a.args,"help-text":"helper text"}},g={render:t=>c`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="${t.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="${t.size}"></mdc-toggle>
    </div>`},n={args:{...a.args,label:"","data-aria-label":"This is a toggle with no label"}},h={render:t=>c`
    <form @submit="${o=>{o.preventDefault();const r=new FormData(o.target).get("toggleName");p("Form Submitted")({value:r})}}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueActivated" checked label="Agree to Terms"
          size="${t.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  `},u={render:t=>c`
    <form @submit="${o=>{o.preventDefault();const r=new FormData(o.target).get("toggleName");p("Form Submitted")({value:r})}}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueDeactivated" label="Agree to Terms"
          size="${t.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  `};var k,y,D;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    disabled: false,
    size: DEFAULTS.SIZE,
    'help-text': ''
  }
}`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var $,F,T;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.DEFAULT
  }
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var A,C,w;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: TOGGLE_SIZE.COMPACT
  }
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,N,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'helper text'
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var L,M,O;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 5px">
      <mdc-toggle label="inactive toggle" disabled size="\${args.size}"></mdc-toggle>
      <mdc-toggle label="active toggle" disabled checked size="\${args.size}"></mdc-toggle>
    </div>\`
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var H,Z,U;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    label: '',
    'data-aria-label': 'This is a toggle with no label'
  }
}`,...(U=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var G,W,j;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
    <form @submit="\${onSubmit}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueActivated" checked label="Agree to Terms"
          size="\${args.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  \`;
  }
}`,...(j=(W=h.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var K,P,R;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.get('toggleName');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
    <form @submit="\${onSubmit}">
      <fieldset>
        <legend>Form Example</legend>
        <mdc-toggle name="toggleName" value="toggleValueDeactivated" label="Agree to Terms"
          size="\${args.size}"></mdc-toggle>
        <mdc-button type="submit">Submit</mdc-button>
      </fieldset>
    </form>
  \`;
  }
}`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const Le=["Example","DefaultSize","CompactSize","WithHelperText","Disabled","WithoutLabel","IsActivatedInsideForm","IsDeactivatedInsideForm"];export{i as CompactSize,d as DefaultSize,g as Disabled,a as Example,h as IsActivatedInsideForm,u as IsDeactivatedInsideForm,m as WithHelperText,n as WithoutLabel,Le as __namedExportsOrder,Ve as default};
