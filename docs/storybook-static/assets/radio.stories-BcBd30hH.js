import{i as O,D as H,k as l}from"./lit-element-CHllvULs.js";import{n as q,u as U}from"./index-HW6KrQZO.js";import{t as _}from"./if-defined-C4tJgJ33.js";import{N as j,V as K,D as Q}from"./ValueMixin-DFWGhyGn.js";import{h as Y,a as J}from"./index-MYSkQ1zX.js";import{F as g}from"./formfieldwrapper.component-Dae6IeB3.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as X,s as Z}from"./commonArgTypes-BluK8w5L.js";import{h as ee,d as ae}from"./utils-D1SE5bce.js";import"./text.constants-DJu2q-6E.js";import"./DisabledMixin-DBt9didn.js";import"./v4-CQkTLCs1.js";const oe=[Y,O`
  :host{
    --mdc-radio-inner-circle-size: 0.375rem;
    --mdc-radio-text-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-radio-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-radio-normal-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-radio-inner-circle-normal-background: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-radio-inner-circle-disabled-background: var(--mds-color-theme-inverted-text-primary-disabled);

    --mdc-radio-control-inactive-color: var(--mds-color-theme-control-inactive-normal);
    --mdc-radio-control-inactive-hover: var(--mds-color-theme-control-inactive-hover);
    --mdc-radio-control-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
    --mdc-radio-control-inactive-disabled-background: var(--mds-color-theme-control-inactive-disabled);

    --mdc-radio-control-active-color: var(--mds-color-theme-control-active-normal);
    --mdc-radio-control-active-hover-color: var(--mds-color-theme-control-active-hover);
    --mdc-radio-control-active-pressed-color: var(--mds-color-theme-control-active-pressed);
    --mdc-radio-control-active-disabled-background: var(--mds-color-theme-control-active-disabled);

  }
  :host([readonly]) .mdc-radio__input,
  :host([disabled]) .mdc-radio__input,
  :host([disabled]) .mdc-label,
  :host([readonly]) .mdc-label{
    cursor: default;
  }

  .mdc-label {
    cursor: pointer;
  }

  :host([disabled]) .mdc-radio__label-text,
  :host([disabled]) .mdc-radio__help-text {
    color: var(--mdc-radio-text-disabled-color);
  }

  :host([disabled]) .mdc-radio__icon,
  :host([disabled]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly]) .mdc-radio__icon,
  :host([disabled][readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-disabled-border-color);
    background: var(--mdc-radio-control-inactive-disabled-background);
  }

  :host([disabled][checked]) .mdc-radio__icon,
  :host([disabled][checked]) .mdc-radio__container:hover .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__icon,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon {
    border: var(--mdc-radio-control-active-disabled-background);
    background: var(--mdc-radio-control-active-disabled-background);
  }

  :host([disabled][checked]) .mdc-radio__icon:after,
  :host([disabled][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__icon:after,
  :host([disabled][readonly][checked]) .mdc-radio__container:hover  .mdc-radio__icon:after {
    background: var(--mdc-radio-inner-circle-disabled-background);
  }

  :host .mdc-radio__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 0.0625rem solid var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
    border-radius: 50%;
  }

  :host([checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-color);
    background-color: var(--mdc-radio-control-active-color);
  }

  :host([checked]) .mdc-radio__icon:after {
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--mdc-radio-inner-circle-size);
    height: var(--mdc-radio-inner-circle-size);
    border-radius: 50%;
    background: var(--mdc-radio-inner-circle-normal-background);
  }

  :host .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-hover);
  }

  :host([checked]) .mdc-radio__input:hover ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-hover-color);
    background-color: var(--mdc-radio-control-active-hover-color);
  }

  :host .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-pressed-color);
  }

  :host([checked]) .mdc-radio__input:active ~ .mdc-radio__icon {
    border-color: var(--mdc-radio-control-active-pressed-color);
    background-color: var(--mdc-radio-control-active-pressed-color);
  }

  :host([readonly]) .mdc-radio__icon,
  :host([readonly]) .mdc-radio__container:hover .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
    background-color: var(--mdc-radio-control-inactive-color);
  }

  :host([readonly][checked]) .mdc-radio__icon {
    border-color: var(--mdc-radio-normal-border-color);
  }

  :host([readonly][checked]) .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:hover .mdc-radio__icon:after,
  :host([readonly][checked]) .mdc-radio__container:active .mdc-radio__icon:after {
    background-color: var(--mdc-radio-text-disabled-color);
  }

  .mdc-radio__container {
    display: flex;
    align-items: start;
    gap: 0.5rem;
  }
  .mdc-radio__icon-container {
    display: block;
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem 0;
    border-radius: 50%;
  }

  .mdc-radio__icon-container input{
    position: absolute;
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
  }
  
  .mdc-radio__icon-container .mdc-radio__icon:after {
    content: "";
    position: absolute;
    display: none;
  }

  .mdc-radio__label-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
  }
`,...J(!0)];var re=Object.defineProperty,z=(t,e,d,r)=>{for(var a=void 0,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=i(e,d,a)||a);return a&&re(e,d,a),a};const y=class y extends j(K(Q(g))){constructor(){super(),this.checked=!1,this.readonly=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}setFormValue(){this.checked&&this.internals.setFormValue(this.value)}firstUpdated(){this.updateTabIndex()}getAllRadiosWithinSameGroup(){return Array.from(document.querySelectorAll(`mdc-radio[name="${this.name}"]`))}dispatchChangeEvent(e){const d=e.constructor;this.dispatchEvent(new d(e.type,e))}handleChange(e){var a;if(this.disabled||this.readonly)return;this.getAllRadiosWithinSameGroup().forEach(o=>{var f;const i=(f=o.shadowRoot)==null?void 0:f.querySelector("input");i&&(o.checked=!1,i.checked=!1)}),this.checked=!0;const r=(a=this.shadowRoot)==null?void 0:a.querySelector("input");r&&(r.checked=!0),this.dispatchChangeEvent(e)}updateRadio(e,d,r){var a,o;(o=(a=e[d].shadowRoot)==null?void 0:a.querySelector("input"))==null||o.focus(),e[d].handleChange(r)}handleKeyDown(e){if(this.disabled)return;const r=this.getAllRadiosWithinSameGroup().filter(o=>!o.disabled),a=r.indexOf(this);if(["ArrowDown","ArrowRight"].includes(e.key)){const o=(a+1)%r.length;this.updateRadio(r,o,e)}else if(["ArrowUp","ArrowLeft"].includes(e.key)){const o=(a-1+r.length)%r.length;this.updateRadio(r,o,e)}this.updateTabIndex()}updateTabIndex(){const e=this.getAllRadiosWithinSameGroup(),d=e.find(a=>a.checked),r=e.find(a=>!a.disabled);e.forEach(a=>{var i;const o=(i=a.shadowRoot)==null?void 0:i.querySelector("input");o&&(o.tabIndex=-1,(a===d||!d&&a===r)&&(o.tabIndex=0))})}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){const e=this.helpText?this.renderHelperText():H;return l`
      <div class="mdc-radio__container">
        <div class="mdc-radio__icon-container mdc-focus-ring">
          <input
            id="${this.id}"
            type="radio"
            role="radio"
            name="${_(this.name)}"
            value="${_(this.value)}"
            @change=${this.handleChange}
            @keydown=${this.handleKeyDown}
            ?checked=${this.checked}
            ?readonly=${this.readonly}
            ?disabled=${this.disabled}
            class="mdc-radio__input"
            aria-checked="${this.checked}"
            aria-label="${this.dataAriaLabel??""}"
          />
          <span class="mdc-radio__icon"></span>
        </div>
        <div class="mdc-radio__label-container">
          ${this.renderLabel()}
          ${e}
        </div>
      </div>
    `}};y.formAssociated=!0,y.styles=[...g.styles,...oe];let n=y;z([q({type:Boolean,reflect:!0})],n.prototype,"checked");z([q({type:Boolean,reflect:!0})],n.prototype,"readonly");const de=U.constructTagName("radio");n.register(de);const te=t=>l`
  <mdc-radio
    @change="${c("onchange")}"
    @keydown="${c("onkeydown")}"
    @focus="${c("onfocus")}"
    @click="${c("onclick")}"
    label="${t.label}"
    name="radio"
    value="option1"
    help-text="${t["help-text"]}"
    ?checked=${t.checked}
    ?disabled=${t.disabled}
    ?readonly=${t.readonly}
    data-aria-label="${t["data-aria-label"]}"
  ></mdc-radio>
`,fe={title:"Components/radio",tags:["autodocs"],component:"mdc-radio",render:te,parameters:{badges:["stable"]},argTypes:{...X,...Z,readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},label:{control:{type:"text"}},name:{control:{type:"text"}},value:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:{type:"text"}},...ee(["help-text-type"]),...ae(["--mdc-radio-inner-circle-size","--mdc-radio-text-disabled-color","--mdc-radio-disabled-border-color","--mdc-radio-normal-border-color","--mdc-radio-inner-circle-normal-background","--mdc-radio-inner-circle-disabled-background","--mdc-radio-control-inactive-color","--mdc-radio-control-inactive-hover","--mdc-radio-control-inactive-pressed-color","--mdc-radio-control-inactive-disabled-background","--mdc-radio-control-active-color","--mdc-radio-control-active-hover-color","--mdc-radio-control-active-pressed-color","--mdc-radio-control-active-disabled-background"])}},s={args:{label:"Standard Plan",checked:!1,readonly:!1,disabled:!1}},m={render:()=>l`
    <div style="display: flex; flex-direction: column;">
      Radio Group for selecting plans
      <mdc-radio name="plan" value="option1" label="Standard Plan" ></mdc-radio>
      <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
      <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
      <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
    </div>
    <div style="display: flex; flex-direction: column; margin-top: 10px">
      Radio Group for selecting billing cycle
      <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
      <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
    </div>
    `,parameters:{docs:{description:{story:"Radio buttons with the same `name` attribute are grouped together. When radio buttons share the same `name`, selecting one will automatically deselect the others in the group. The example includes various states of radio buttons such as disabled, readonly, and different labels. We can use flex layout to display radio buttons in a column."}}}},u={args:{"data-aria-label":"Radio button without label"},parameters:{docs:{description:{story:"If we don't want to display a label, we can omit the 'label' attribute, but it is recommended to pass an aria label through data-aria-label for accessibility. "}}}},b={render:()=>l`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To disable the radio button, use the `disabled` attribute. "}}}},h={render:()=>l`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>`,parameters:{docs:{description:{story:"To make the radio button read-only, use the `readonly` attribute. "}}}},p={args:{label:"Standard Plan","help-text":"Standard plan provides basic features",checked:!1,disabled:!1,readonly:!1},parameters:{docs:{description:{story:"To add help text to the radio button, use the `help-text` attribute. "}}}},v=()=>l`
    <form @submit=${e=>{e.preventDefault();const r=new FormData(e.target).get("course-plan");c("Form Submitted")({value:r})}}>
      <mdc-radio name="course-plan" value="standard" data-aria-label="Standard Plan" label="Standard Plan">
      </mdc-radio>
      <mdc-radio name="course-plan" value="premium" data-aria-label="Premium Plan" label="Premium Plan">
      </mdc-radio>
      <mdc-radio
        name="course-plan"
        value="enterprise"
        checked
        data-aria-label="Enterprise Plan"
        label="Enterprise Plan">
      </mdc-radio>
      <br />
      <button type="submit">Submit</button>
    </form>
  `;var k,x,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    checked: false,
    readonly: false,
    disabled: false
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var P,w,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      Radio Group for selecting plans
      <mdc-radio name="plan" value="option1" label="Standard Plan" ></mdc-radio>
      <mdc-radio name="plan" value="option2" label="Disabled Premium Plan" disabled></mdc-radio>
      <mdc-radio name="plan" value="option3" label="Premium Plan"></mdc-radio>
      <mdc-radio name="plan" value="option4" label="Premium Plan for family"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Business Plan"></mdc-radio>
      <mdc-radio name="plan" value="option5" label="Enterprise Plan"></mdc-radio>
    </div>
    <div style="display: flex; flex-direction: column; margin-top: 10px">
      Radio Group for selecting billing cycle
      <mdc-radio name="billing-cycle" value="option1" label="Weekly" disabled></mdc-radio>
      <mdc-radio name="billing-cycle" value="option1" label="Monthly" checked></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Quaterly"></mdc-radio>
      <mdc-radio name="billing-cycle" value="option2" label="Yearly"></mdc-radio>
    </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with the same \`name\` attribute are grouped together. ' + 'When radio buttons share the same \`name\`, selecting one will automatically deselect the others in the ' + 'group. The example includes various states of radio buttons such as disabled, readonly, ' + 'and different labels. We can use flex layout to display radio buttons in a column.'
      }
    }
  }
}`,...($=(w=m.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var R,D,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'Radio button without label'
  },
  parameters: {
    docs: {
      description: {
        story: 'If we don\\'t want to display a label, we can omit the \\'label\\' attribute, ' + 'but it is recommended to pass an aria label through data-aria-label for accessibility. '
      }
    }
  }
}`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var T,A,W;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio label="Disabled Standard Plan" disabled></mdc-radio>
      <mdc-radio label="Selected But Disabled Standard Plan" disabled checked></mdc-radio>
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'To disable the radio button, use the \`disabled\` attribute. '
      }
    }
  }
}`,...(W=(A=b.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var F,I,C;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column;">
      <mdc-radio name="read" value="option1" label="Unselected" readonly></mdc-radio>
      <mdc-radio name="read" value="option2" label="Selected" readonly checked></mdc-radio>
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'To make the radio button read-only, use the \`readonly\` attribute. '
      }
    }
  }
}`,...(C=(I=h.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var G,V,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Standard Plan',
    'help-text': 'Standard plan provides basic features',
    checked: false,
    disabled: false,
    readonly: false
  },
  parameters: {
    docs: {
      description: {
        story: 'To add help text to the radio button, use the \`help-text\` attribute. '
      }
    }
  }
}`,...(L=(V=p.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,B,N;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const selectedValue = formData.get('course-plan');
    action('Form Submitted')({
      value: selectedValue
    });
  };
  return html\`
    <form @submit=\${handleSubmit}>
      <mdc-radio name="course-plan" value="standard" data-aria-label="Standard Plan" label="Standard Plan">
      </mdc-radio>
      <mdc-radio name="course-plan" value="premium" data-aria-label="Premium Plan" label="Premium Plan">
      </mdc-radio>
      <mdc-radio
        name="course-plan"
        value="enterprise"
        checked
        data-aria-label="Enterprise Plan"
        label="Enterprise Plan">
      </mdc-radio>
      <br />
      <button type="submit">Submit</button>
    </form>
  \`;
}`,...(N=(B=v.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const _e=["Example","withNameGroup","WithoutLabel","Disabled","ReadOnly","WithHelpText","RadioInForm"];export{b as Disabled,s as Example,v as RadioInForm,h as ReadOnly,p as WithHelpText,u as WithoutLabel,_e as __namedExportsOrder,fe as default,m as withNameGroup};
