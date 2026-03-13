import"./index-BoR_km2R.js";import{k as S}from"./iframe-D5_nhDxE.js";import{c as R,s as D}from"./commonArgTypes-BG7EqI50.js";import{V as A}from"./formfieldwrapper.constants-DQfsjwj-.js";import{h as q}from"./utils-B5QUENNQ.js";import"./index-gv8SZfC0.js";import"./index-d89jH2I6.js";import"./index-B_Jxm10G.js";import"./index-JE5oisxl.js";import"./preload-helper-C1FmrZbK.js";import"./index-CuCAJ8l7.js";import"./index-DTrDRi1E.js";import"./index-BN5jFS0Y.js";import"./if-defined-DPoTFAdO.js";import"./popover.component-BxLUNmCo.js";import"./BackdropMixin-74BKBgmd.js";import"./KeyDownHandledMixin-sL_lJMjH.js";import"./popover.constants-DWb8CL7J.js";import"./index-bFP8etn_.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-CLrG9WiN.js";import"./DisabledMixin-BAU8JVJU.js";import"./radio.constants-CvhPlJsP.js";import"./index-DRY2GWNQ.js";import"./index-C0MGa-5P.js";import"./FormInternalsMixin-C85XOVkD.js";import"./buttonsimple.component-C1KDmBVv.js";import"./button.component-D8k_U0MV.js";import"./button.utils-rNW36Ji7.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,k=a=>S` <div role="main">
    <mdc-radiogroup
      name="${a.name}"
      label="${a.label}"
      help-text="${a["help-text"]}"
      help-text-type="${a["help-text-type"]}"
      ?required="${a.required}"
    >
      <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
      <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
      <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
      <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
      <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
      <mdc-radio label="Thor" value="Thor"></mdc-radio>
    </mdc-radiogroup>
  </div>`,ne={title:"Components/radiogroup",tags:["autodocs"],component:"mdc-radiogroup",render:k,argTypes:{...R,...D,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"help-text-type":{control:"select",options:Object.values(A)},required:{control:"boolean"},...q(["disabled","info-icon-aria-label","isRadio",'Slot Name: "toggletip"',"toggletip-placement","toggletip-strategy","toggletip-text"])}},o={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.","help-text-type":A.DEFAULT,name:"team-captain-with-experience",required:!0}},i={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},n={args:{label:"Select your team captain",name:"team-captain"}},l=()=>{const a=r=>{const e=r.querySelector('mdc-radiogroup[name="course-plan"]');return Array.from(r.querySelectorAll('mdc-radio[name="course-plan"]')).find(T=>T.checked)?(e==null||e.setAttribute("help-text","Looks good!"),e==null||e.setAttribute("help-text-type","success"),!0):(e==null||e.setAttribute("help-text","Please select a course plan"),e==null||e.setAttribute("help-text-type","error"),!1)};return S`
    <form @submit=${r=>{r.preventDefault();const e=r.target;if(!a(e))return;const s=new FormData(e).get("course-plan");E("Form Submitted")({name:"course-plan",value:s})}} @reset=${r=>{const t=r.target.querySelector('mdc-radiogroup[name="course-plan"]');t==null||t.setAttribute("help-text","Choose a plan that best suits your needs"),t==null||t.setAttribute("help-text-type","default")}} novalidate>
      <div role="main">
        <mdc-radiogroup
          name="course-plan"
          label="Select your course plan"
          help-text="Choose a plan that best suits your needs"
          required
        >
          <mdc-radio value="standard" name="course-plan" label="Standard Plan"> </mdc-radio>
          <mdc-radio value="premium" name="course-plan" label="Premium Plan"> </mdc-radio>
          <mdc-radio value="enterprise" name="course-plan" label="Enterprise Plan"> </mdc-radio>
        </mdc-radiogroup>
      </div>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  `};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    'help-text-type': VALIDATION.DEFAULT,
    name: 'team-captain-with-experience',
    required: true
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,x,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
      <div role="main">
        <mdc-radiogroup
          name="course-plan"
          label="Select your course plan"
          help-text="Choose a plan that best suits your needs"
          required
        >
          <mdc-radio value="standard" name="course-plan" label="Standard Plan"> </mdc-radio>
          <mdc-radio value="premium" name="course-plan" label="Premium Plan"> </mdc-radio>
          <mdc-radio value="enterprise" name="course-plan" label="Enterprise Plan"> </mdc-radio>
        </mdc-radiogroup>
      </div>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  \`;
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const le=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInFormWithHelpTextValidation"];export{o as Example,l as RadioGroupInFormWithHelpTextValidation,i as RadioGroupWithDescription,n as RadioGroupWithoutDescription,le as __namedExportsOrder,ne as default};
