import"./index-jC-Nxus5.js";import{k as y}from"./lit-element-D5KKan5q.js";import{a as S}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as f,s as P}from"./commonArgTypes-BluK8w5L.js";import{h as T}from"./utils-CO8B6ZcN.js";import"./index-Btw0xR_d.js";import"./index-kAuWNkNv.js";import"./index-C9z9WAEj.js";import"./index-DWgD2Mdq.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-DMFGbP5t.js";import"./formfieldwrapper.component-DGQBm8Ze.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-CcXofQbA.js";import"./index-D3DhXfcW.js";import"./index-DTUAfOMb.js";import"./iframe-C7hvKWjo.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./radio.constants-DXoIHWZL.js";import"./v4-CQkTLCs1.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-BQHpR8ua.js";import"./button.component-DP9lGkCN.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";const D=e=>y`
  <mdc-radiogroup 
  name="${e.name}"
  label="${e.label}"
  help-text="${e["help-text"]}"
  data-aria-label="${e["data-aria-label"]}"
  ?required="${e.required}"
  >
    <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
    <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
    <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
    <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
    <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
    <mdc-radio label="Thor" value="Thor"></mdc-radio>
  </mdc-radiogroup>`,de={title:"Components/radiogroup",tags:["autodocs"],component:"mdc-radiogroup",render:D,parameters:{badges:["stable"]},argTypes:{...f,...P,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:"text"},required:{control:"boolean"},...T(["help-text-type","disabled"])}},a={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience",required:!0,"data-aria-label":"Team Captain"}},t={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},r={args:{label:"Select your team captain",name:"team-captain"}},o=()=>y`
    <form @submit=${i=>{i.preventDefault();const x=new FormData(i.target).get("course-plan");S("Form Submitted")({name:"course-plan",value:x})}}>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
        required
      >
        <mdc-radio value="standard" data-aria-label="Standard Plan" label="Standard Plan"
        validation-message="Select a plan to continue">
        </mdc-radio>
        <mdc-radio value="premium" data-aria-label="Premium Plan" label="Premium Plan">
        </mdc-radio>
        <mdc-radio
          value="enterprise"
          data-aria-label="Enterprise Plan"
          label="Enterprise Plan">
        </mdc-radio>
      </mdc-radiogroup>
      <br/>
      <div style='display: flex; gap: 0.25rem;'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
    </form>
  `;var n,l,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience',
    required: true,
    'data-aria-label': 'Team Captain'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var s,u,h;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
        <mdc-radio value="standard" data-aria-label="Standard Plan" label="Standard Plan"
        validation-message="Select a plan to continue">
        </mdc-radio>
        <mdc-radio value="premium" data-aria-label="Premium Plan" label="Premium Plan">
        </mdc-radio>
        <mdc-radio
          value="enterprise"
          data-aria-label="Enterprise Plan"
          label="Enterprise Plan">
        </mdc-radio>
      </mdc-radiogroup>
      <br/>
      <div style='display: flex; gap: 0.25rem;'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
    </form>
  \`;
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const pe=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInForm"];export{a as Example,o as RadioGroupInForm,t as RadioGroupWithDescription,r as RadioGroupWithoutDescription,pe as __namedExportsOrder,de as default};
