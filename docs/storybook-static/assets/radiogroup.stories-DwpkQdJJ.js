import"./index-CPI6Q5Zv.js";import{k as d}from"./iframe-BMQAO-1d.js";import{c as _,s as E}from"./commonArgTypes-BG7EqI50.js";import{V as C}from"./formfieldwrapper.constants-DYQj1U_c.js";import{h as P,a as q}from"./utils-B5QUENNQ.js";import"./index-D_p3KyRs.js";import"./index-B-FecbyM.js";import"./index-D7xTBYHY.js";import"./index-BAOJRb7S.js";import"./index-Ty40rxEB.js";import"./preload-helper-C1FmrZbK.js";import"./index-DzaT7ri-.js";import"./index-DTrDRi1E.js";import"./index-FkfV73gj.js";import"./if-defined-DjrVqlJq.js";import"./popover.component-BWvZeF9F.js";import"./BackdropMixin-DJbsX_HG.js";import"./KeyDownHandledMixin-D5ID8XRZ.js";import"./popover.constants-BEuc21JW.js";import"./index-BkZAyxzx.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-BsecmuTY.js";import"./DisabledMixin-B6ArWvcr.js";import"./radio.constants-DFF8TDbr.js";import"./index-pv5Lu9M7.js";import"./index-Dgy9qw7e.js";import"./FormInternalsMixin-B-_ePyXw.js";import"./buttonsimple.component-CywH7ZQb.js";import"./ref-C7JTQ6fc.js";import"./directive-Ctav8iJK.js";import"./button.component-BKfCPW1e.js";import"./button.utils-rNW36Ji7.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,W=t=>d` <div role="main">
    <mdc-radiogroup
      name="${t.name}"
      label="${t.label}"
      help-text="${t["help-text"]}"
      help-text-type="${t["help-text-type"]}"
      ?required="${t.required}"
    >
      <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
      <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
      <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
      <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
      <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
      <mdc-radio label="Thor" value="Thor"></mdc-radio>
    </mdc-radiogroup>
  </div>`,he={title:"Components/radiogroup",tags:["autodocs"],component:"mdc-radiogroup",render:W,argTypes:{..._,...E,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"help-text-type":{control:"select",options:Object.values(C)},required:{control:"boolean"},...P(["disabled","info-icon-aria-label","isRadio",'Slot Name: "toggletip"',"toggletip-placement","toggletip-strategy","toggletip-text"])}},n={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.","help-text-type":C.DEFAULT,name:"team-captain-with-experience",required:!0}},i={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},l={args:{label:"Select your team captain",name:"team-captain"}},s=()=>{const t=a=>{const e=a.querySelector('mdc-radiogroup[name="course-plan"]');return Array.from(a.querySelectorAll('mdc-radio[name="course-plan"]')).find(D=>D.checked)?(e==null||e.setAttribute("help-text","Looks good!"),e==null||e.setAttribute("help-text-type","success"),!0):(e==null||e.setAttribute("help-text","Please select a course plan"),e==null||e.setAttribute("help-text-type","error"),!1)};return d`
    <form @submit=${a=>{a.preventDefault();const e=a.target;if(!t(e))return;const p=new FormData(e).get("course-plan");O("Form Submitted")({name:"course-plan",value:p})}} @reset=${a=>{const r=a.target.querySelector('mdc-radiogroup[name="course-plan"]');r==null||r.setAttribute("help-text","Choose a plan that best suits your needs"),r==null||r.setAttribute("help-text-type","default")}} novalidate>
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
  `},m={render:()=>{let t="medium";const c=o=>{t=o.target.value};return d`
      <style>
        .skinTonePickerWrapper {
          display: flex;
          width: auto;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 0.5rem;
        }
        .skinToneOption {
          padding: 0.5rem;
          border-radius: 0.5rem;

          &[checked] {
            background-color: var(--mds-color-theme-background-primary-active);
          }

          &:hover {
            background-color: var(--mds-color-theme-background-primary-hover);
          }
        }
      </style>
      <main>
        <h5>Select your skin tone</h5>
        <mdc-radiogroup class="skinTonePickerWrapper" name="skin-tone-picker">
          ${["yellow","light","medium_light","medium","medium_dark","dark"].map(o=>d` <mdc-radio ?checked="${o===t}" onChange="${c}" class="skinToneOption">
                <mdc-animation
                  style="width: 2rem; height: 2rem;"
                  slot="indicator"
                  name="${`thumb_up_${o}`}"
                  loop="false"
                  aria-label="${`Select ${o} skin tone`}"
                ></mdc-animation>
              </mdc-radio>`)}
        </mdc-radiogroup>
      </main>
    `},...q()};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    'help-text-type': VALIDATION.DEFAULT,
    name: 'team-captain-with-experience',
    required: true
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,y,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,f,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,T,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var R,$,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    let selectedValue = 'medium';
    const handleChange = (event: Event) => {
      const radio = event.target as HTMLInputElement;
      selectedValue = radio.value;
    };
    return html\`
      <style>
        .skinTonePickerWrapper {
          display: flex;
          width: auto;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 0.5rem;
        }
        .skinToneOption {
          padding: 0.5rem;
          border-radius: 0.5rem;

          &[checked] {
            background-color: var(--mds-color-theme-background-primary-active);
          }

          &:hover {
            background-color: var(--mds-color-theme-background-primary-hover);
          }
        }
      </style>
      <main>
        <h5>Select your skin tone</h5>
        <mdc-radiogroup class="skinTonePickerWrapper" name="skin-tone-picker">
          \${['yellow', 'light', 'medium_light', 'medium', 'medium_dark', 'dark'].map(name => html\` <mdc-radio ?checked="\${name === selectedValue}" onChange="\${handleChange}" class="skinToneOption">
                <mdc-animation
                  style="width: 2rem; height: 2rem;"
                  slot="indicator"
                  name="\${\`thumb_up_\${name}\` as AnimationNames}"
                  loop="false"
                  aria-label="\${\`Select \${name} skin tone\`}"
                ></mdc-animation>
              </mdc-radio>\`)}
        </mdc-radiogroup>
      </main>
    \`;
  },
  ...hideAllControls()
}`,...(w=($=m.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const ge=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInFormWithHelpTextValidation","RadioGroupWithCustomRadioSlot"];export{n as Example,s as RadioGroupInFormWithHelpTextValidation,m as RadioGroupWithCustomRadioSlot,i as RadioGroupWithDescription,l as RadioGroupWithoutDescription,ge as __namedExportsOrder,he as default};
