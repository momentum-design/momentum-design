import{N as k}from"./ValueMixin-BtwaDIvZ.js";import{F as u}from"./index-BVxdfF6R.js";import{T as A}from"./index-CkUlOppp.js";import{u as F}from"./index-HW6KrQZO.js";import{k as D}from"./lit-element-CHllvULs.js";import{a as q}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as $,s as C}from"./commonArgTypes-BluK8w5L.js";import{h as G}from"./utils-D1SE5bce.js";import"./index-B6Z7xuy0.js";import"./formfieldwrapper.component-CWIPqk6J.js";import"./DisabledMixin-DBt9didn.js";import"./text.constants-DJu2q-6E.js";import"./index-CEbgplXA.js";import"./index-BGkqZMsC.js";import"./if-defined-C4tJgJ33.js";import"./v4-CQkTLCs1.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-Dc4O0li7.js";import"./button.constants-BmMoyae9.js";import"./button.utils-BKs-jRfA.js";import"./index-ChCfgxW1.js";import"./iframe-CWgoKrN5.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";const d=class d extends k(u){constructor(){super(),this.isRadio=!0}firstUpdated(){var t,m,r,c,p;(p=(c=(r=(m=Array.from(((t=this.shadowRoot)==null?void 0:t.querySelectorAll("slot"))||[]))==null?void 0:m.flatMap(e=>e.assignedElements({flatten:!0})))==null?void 0:r.filter(e=>e.tagName.toLowerCase()===A))==null?void 0:c.filter(e=>!e.hasAttribute("name")))==null||p.forEach(e=>e.setAttribute("name",this.name))}};d.styles=[...u.styles];let s=d;const M=F.constructTagName("radiogroup");s.register(M);const N=a=>D`
  <mdc-radiogroup 
  name="${a.name}"
  label="${a.label}"
  help-text="${a["help-text"]}"
  data-aria-label="${a["data-aria-label"]}"
  required-label="${a["required-label"]}"
  >
    <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
    <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
    <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
    <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
    <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
    <mdc-radio label="Thor" value="Thor"></mdc-radio>
  </mdc-radiogroup>`,me={title:"Work In Progress/radio-group",tags:["autodocs"],component:"mdc-radiogroup",render:N,parameters:{badges:["wip"]},argTypes:{...$,...C,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:"text"},"required-label":{control:"text"},...G(["help-text-type","disabled"])}},o={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience","required-label":"required","data-aria-label":"Team Captain"}},i={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},l={args:{label:"Select your team captain",name:"team-captain"}},n=()=>D`
    <form @submit=${t=>{t.preventDefault();const r=new FormData(t.target).get("course-plan");q("Form Submitted")({name:"course-plan",value:r})}}>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
      >
        <mdc-radio value="standard" data-aria-label="Standard Plan" label="Standard Plan">
        </mdc-radio>
        <mdc-radio value="premium" data-aria-label="Premium Plan" label="Premium Plan">
        </mdc-radio>
        <mdc-radio
          value="enterprise"
          checked
          data-aria-label="Enterprise Plan"
          label="Enterprise Plan">
        </mdc-radio>
      </mdc-radiogroup>
      <br/>
      <mdc-button type="submit">Submit</mdc-button>
    </form>
  `;var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience',
    'required-label': 'required',
    'data-aria-label': 'Team Captain'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,f,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,w,E;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
      >
        <mdc-radio value="standard" data-aria-label="Standard Plan" label="Standard Plan">
        </mdc-radio>
        <mdc-radio value="premium" data-aria-label="Premium Plan" label="Premium Plan">
        </mdc-radio>
        <mdc-radio
          value="enterprise"
          checked
          data-aria-label="Enterprise Plan"
          label="Enterprise Plan">
        </mdc-radio>
      </mdc-radiogroup>
      <br/>
      <mdc-button type="submit">Submit</mdc-button>
    </form>
  \`;
}`,...(E=(w=n.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const se=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInForm"];export{o as Example,n as RadioGroupInForm,i as RadioGroupWithDescription,l as RadioGroupWithoutDescription,se as __namedExportsOrder,me as default};
