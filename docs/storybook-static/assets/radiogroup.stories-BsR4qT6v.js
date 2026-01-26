import"./index-C7OShgPo.js";import{k as m}from"./iframe-DBGUNv4F.js";import{c as w,s as k}from"./commonArgTypes-BG7EqI50.js";import{h as C}from"./utils-D6nie9pS.js";import"./index-DsuP5pnN.js";import"./index-C4Fa2Q6W.js";import"./index-B0w9BMdH.js";import"./index-C-v37Hmt.js";import"./preload-helper-C1FmrZbK.js";import"./index-DYxC4i4C.js";import"./index-DTrDRi1E.js";import"./index-DPycxoRr.js";import"./if-defined-ByroiDkB.js";import"./popover.component-BSR9kose.js";import"./BackdropMixin-pu4YriUi.js";import"./dom-BlZvhF8F.js";import"./KeyToActionMixin-CyA1a_rM.js";import"./popover.constants-CQwJjFEb.js";import"./index-BY9gZPFl.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-1_uyFcu6.js";import"./formfieldwrapper.component-7FRpi-mD.js";import"./DisabledMixin-toBsO7Rw.js";import"./formfieldwrapper.constants-CtuU3XED.js";import"./radio.constants-BMizd5Hg.js";import"./index-Vbt82wXk.js";import"./index-BjgVzaWt.js";import"./FormInternalsMixin-C7tSfuKP.js";import"./buttonsimple.component-D4MYEviQ.js";import"./button.component-DHSQJTRA.js";import"./button.utils-rNW36Ji7.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,G=t=>m` <mdc-radiogroup
    name="${t.name}"
    label="${t.label}"
    help-text="${t["help-text"]}"
    data-aria-label="${t["data-aria-label"]}"
    ?required="${t.required}"
  >
    <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
    <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
    <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
    <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
    <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
    <mdc-radio label="Thor" value="Thor"></mdc-radio>
  </mdc-radiogroup>`,ce={title:"Components/radiogroup",tags:["autodocs"],component:"mdc-radiogroup",render:G,argTypes:{...w,...k,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:"text"},required:{control:"boolean"},...C(["help-text-type","disabled"])}},o={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience",required:!0,"data-aria-label":"Team Captain"}},l={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},n={args:{label:"Select your team captain",name:"team-captain"}},i=()=>m`
    <form @submit=${s=>{s.preventDefault();const a=new FormData(s.target).get("course-plan");E("Form Submitted")({name:"course-plan",value:a})}}>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
        required
      >
        <mdc-radio
          value="standard"
          data-aria-label="Standard Plan"
          label="Standard Plan"
          validation-message="Select a plan to continue"
        >
        </mdc-radio>
        <mdc-radio value="premium" data-aria-label="Premium Plan" label="Premium Plan"> </mdc-radio>
        <mdc-radio value="enterprise" data-aria-label="Enterprise Plan" label="Enterprise Plan"> </mdc-radio>
      </mdc-radiogroup>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  `,d=()=>{const t=a=>{const e=a.querySelector('mdc-radiogroup[name="course-plan"]');return Array.from(a.querySelectorAll('mdc-radio[name="course-plan"]')).find(q=>q.checked)?(e==null||e.setAttribute("help-text","Looks good!"),e==null||e.setAttribute("help-text-type","success"),!0):(e==null||e.setAttribute("help-text","Please select a course plan"),e==null||e.setAttribute("help-text-type","error"),!1)};return m`
    <form @submit=${a=>{a.preventDefault();const e=a.target;if(!t(e))return;const c=new FormData(e).get("course-plan");E("Form Submitted")({name:"course-plan",value:c})}} @reset=${a=>{const r=a.target.querySelector('mdc-radiogroup[name="course-plan"]');r==null||r.setAttribute("help-text","Choose a plan that best suits your needs"),r==null||r.setAttribute("help-text-type","default")}} novalidate>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
        required
      >
        <mdc-radio value="standard" name="course-plan" data-aria-label="Standard Plan" label="Standard Plan">
        </mdc-radio>
        <mdc-radio value="premium" name="course-plan" data-aria-label="Premium Plan" label="Premium Plan"> </mdc-radio>
        <mdc-radio value="enterprise" name="course-plan" data-aria-label="Enterprise Plan" label="Enterprise Plan">
        </mdc-radio>
      </mdc-radiogroup>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  `};var u,p,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    name: 'team-captain-with-experience',
    required: true,
    'data-aria-label': 'Team Captain'
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,v,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,f,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,P,R;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const selectedValue = formData.get('course-plan');
    action('Form Submitted')({
      name: 'course-plan',
      value: selectedValue
    });
  };
  return html\`
    <form @submit=\${handleSubmit}>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
        required
      >
        <mdc-radio
          value="standard"
          data-aria-label="Standard Plan"
          label="Standard Plan"
          validation-message="Select a plan to continue"
        >
        </mdc-radio>
        <mdc-radio value="premium" data-aria-label="Premium Plan" label="Premium Plan"> </mdc-radio>
        <mdc-radio value="enterprise" data-aria-label="Enterprise Plan" label="Enterprise Plan"> </mdc-radio>
      </mdc-radiogroup>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  \`;
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var D,A,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const validateRadioGroup = (form: HTMLFormElement): boolean => {
    const radioGroup = form.querySelector('mdc-radiogroup[name="course-plan"]') as RadioGroup;
    const radios = Array.from(form.querySelectorAll('mdc-radio[name="course-plan"]')) as Radio[];
    const selected = radios.find(radio => radio.checked);
    if (!selected) {
      radioGroup?.setAttribute('help-text', 'Please select a course plan');
      radioGroup?.setAttribute('help-text-type', 'error');
      return false;
    }
    radioGroup?.setAttribute('help-text', 'Looks good!');
    radioGroup?.setAttribute('help-text-type', 'success');
    return true;
  };
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!validateRadioGroup(form)) {
      return;
    }
    const formData = new FormData(form);
    const selectedValue = formData.get('course-plan');
    action('Form Submitted')({
      name: 'course-plan',
      value: selectedValue
    });
  };
  const handleReset = (event: Event) => {
    const form = event.target as HTMLFormElement;
    const radioGroup = form.querySelector('mdc-radiogroup[name="course-plan"]') as RadioGroup;
    radioGroup?.setAttribute('help-text', 'Choose a plan that best suits your needs');
    radioGroup?.setAttribute('help-text-type', 'default');
  };
  return html\`
    <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
        required
      >
        <mdc-radio value="standard" name="course-plan" data-aria-label="Standard Plan" label="Standard Plan">
        </mdc-radio>
        <mdc-radio value="premium" name="course-plan" data-aria-label="Premium Plan" label="Premium Plan"> </mdc-radio>
        <mdc-radio value="enterprise" name="course-plan" data-aria-label="Enterprise Plan" label="Enterprise Plan">
        </mdc-radio>
      </mdc-radiogroup>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  \`;
}`,...(T=(A=d.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const ue=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInForm","RadioGroupInFormWithHelpTextValidation"];export{o as Example,i as RadioGroupInForm,d as RadioGroupInFormWithHelpTextValidation,l as RadioGroupWithDescription,n as RadioGroupWithoutDescription,ue as __namedExportsOrder,ce as default};
