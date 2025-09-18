import"./index-RnsQm9DL.js";import{k as d}from"./lit-element-D5KKan5q.js";import{a as T}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as w,s as k}from"./commonArgTypes-BluK8w5L.js";import{a as C}from"./utils-CFOyPOhY.js";import"./index-C76jv19p.js";import"./index-BnJ6Hs2P.js";import"./provider.component-BaQC7CJH.js";import"./index-U2hEdVuO.js";import"./index-74sydAW6.js";import"./iframe-HpF2aG_F.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-CqVtAZCJ.js";import"./index-DHsMOcdX.js";import"./index-DKQKn8mh.js";import"./popover.component-CgG8O1N4.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./roles-CJI3JVG-.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./formfieldwrapper.component-Bh3Mxn5K.js";import"./DisabledMixin-DcYwkKYf.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./radio.constants-9sXjEnlE.js";import"./v4-CQkTLCs1.js";import"./index-CeWuhPGb.js";import"./index-DQ1Hv4sq.js";import"./FormInternalsMixin-CvUI0OX_.js";import"./query-DXShiZ7f.js";import"./keys-hFXe221I.js";import"./buttonsimple.component-CKyEWPbX.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.component-D5eG231X.js";import"./button.utils-rNW36Ji7.js";const G=t=>d` <mdc-radiogroup
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
  </mdc-radiogroup>`,xe={title:"Components/radiogroup",tags:["autodocs"],component:"mdc-radiogroup",render:G,parameters:{badges:["stable"]},argTypes:{...w,...k,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:"text"},required:{control:"boolean"},...C(["help-text-type","disabled"])}},o={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience",required:!0,"data-aria-label":"Team Captain"}},i={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},l={args:{label:"Select your team captain",name:"team-captain"}},n=()=>d`
    <form @submit=${s=>{s.preventDefault();const a=new FormData(s.target).get("course-plan");T("Form Submitted")({name:"course-plan",value:a})}}>
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
  `,m=()=>{const t=a=>{const e=a.querySelector('mdc-radiogroup[name="course-plan"]');return Array.from(a.querySelectorAll('mdc-radio[name="course-plan"]')).find(q=>q.checked)?(e==null||e.setAttribute("help-text","Looks good!"),e==null||e.setAttribute("help-text-type","success"),!0):(e==null||e.setAttribute("help-text","Please select a course plan"),e==null||e.setAttribute("help-text-type","error"),!1)};return d`
    <form @submit=${a=>{a.preventDefault();const e=a.target;if(!t(e))return;const c=new FormData(e).get("course-plan");T("Form Submitted")({name:"course-plan",value:c})}} @reset=${a=>{const r=a.target.querySelector('mdc-radiogroup[name="course-plan"]');r==null||r.setAttribute("help-text","Choose a plan that best suits your needs"),r==null||r.setAttribute("help-text-type","default")}} novalidate>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
        required
      >
        <mdc-radio
          value="standard"
          name="course-plan"
          data-aria-label="Standard Plan"
          label="Standard Plan"
        >
        </mdc-radio>
        <mdc-radio value="premium" name="course-plan" data-aria-label="Premium Plan" label="Premium Plan"> </mdc-radio>
        <mdc-radio value="enterprise" name="course-plan" data-aria-label="Enterprise Plan" label="Enterprise Plan"> </mdc-radio>
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
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,f,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,P,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(R=(P=n.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var D,A,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
        <mdc-radio
          value="standard"
          name="course-plan"
          data-aria-label="Standard Plan"
          label="Standard Plan"
        >
        </mdc-radio>
        <mdc-radio value="premium" name="course-plan" data-aria-label="Premium Plan" label="Premium Plan"> </mdc-radio>
        <mdc-radio value="enterprise" name="course-plan" data-aria-label="Enterprise Plan" label="Enterprise Plan"> </mdc-radio>
      </mdc-radiogroup>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  \`;
}`,...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const Pe=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInForm","RadioGroupInFormWithHelpTextValidation"];export{o as Example,n as RadioGroupInForm,m as RadioGroupInFormWithHelpTextValidation,i as RadioGroupWithDescription,l as RadioGroupWithoutDescription,Pe as __namedExportsOrder,xe as default};
