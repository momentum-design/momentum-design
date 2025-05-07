import"./index-DmQsz46S.js";import{k as x}from"./lit-element-D5KKan5q.js";import{a as y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as P,s as f}from"./commonArgTypes-BluK8w5L.js";import{h as T}from"./utils-CO8B6ZcN.js";import"./index-Bbw3D4cn.js";import"./index-DFYnp3b5.js";import"./index-C9z9WAEj.js";import"./index-B_EqOnoU.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./roles-DCpIf2k8.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-CcXofQbA.js";import"./index-D3DhXfcW.js";import"./radio.constants-DXoIHWZL.js";import"./v4-CQkTLCs1.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-BQHpR8ua.js";import"./button.component-DF6F2T9a.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-jt085OsO.js";import"./iframe-CMLBCrpv.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const D=e=>x`
  <mdc-radiogroup 
  name="${e.name}"
  label="${e.label}"
  help-text="${e["help-text"]}"
  data-aria-label="${e["data-aria-label"]}"
  required-label="${e["required-label"]}"
  >
    <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
    <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
    <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
    <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
    <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
    <mdc-radio label="Thor" value="Thor"></mdc-radio>
  </mdc-radiogroup>`,de={title:"Components/radiogroup",tags:["autodocs"],component:"mdc-radiogroup",render:D,parameters:{badges:["stable"]},argTypes:{...P,...f,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:"text"},"required-label":{control:"text"},...T(["help-text-type","disabled"])}},a={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience","required-label":"required","data-aria-label":"Team Captain"}},t={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},r={args:{label:"Select your team captain",name:"team-captain"}},o=()=>x`
    <form @submit=${i=>{i.preventDefault();const S=new FormData(i.target).get("course-plan");y("Form Submitted")({name:"course-plan",value:S})}}>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
        required-label="required"
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
      <mdc-button type="submit">Submit</mdc-button>
    </form>
  `;var l,m,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience',
    'required-label': 'required',
    'data-aria-label': 'Team Captain'
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var s,u,b;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
        required-label="required"
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
      <mdc-button type="submit">Submit</mdc-button>
    </form>
  \`;
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const pe=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInForm"];export{a as Example,o as RadioGroupInForm,t as RadioGroupWithDescription,r as RadioGroupWithoutDescription,pe as __namedExportsOrder,de as default};
