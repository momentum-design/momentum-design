import{n as A,u as D}from"./index-C9z9WAEj.js";import{F as u}from"./index-Bbb5MAGb.js";import{T as C}from"./index-C339unsw.js";import{k as E}from"./lit-element-D5KKan5q.js";import{a as F}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as k,s as $}from"./commonArgTypes-BluK8w5L.js";import{h as G}from"./utils-CO8B6ZcN.js";import"./index-BAPdKlxO.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./formfieldwrapper.component-DNKMXI01.js";import"./DisabledMixin-BZruwOeC.js";import"./text.constants-ZF0jM5wn.js";import"./index-MA1r3zrt.js";import"./index-D3DhXfcW.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./index-BQHpR8ua.js";import"./v4-CQkTLCs1.js";import"./button.component-BUQFBHVg.js";import"./state-CSSggq2n.js";import"./button.constants-5DPaNLmI.js";import"./buttonsimple.component-BXEhGPPe.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-CU1TiYQs.js";import"./iframe-GYqBgqZ6.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";var _=Object.defineProperty,R=(a,r,o,l)=>{for(var t=void 0,i=a.length-1,e;i>=0;i--)(e=a[i])&&(t=e(r,o,t)||t);return t&&_(r,o,t),t};const c=class c extends u{constructor(){super(),this.name="",this.isRadio=!0}firstUpdated(){var r,o,l,t,i;(i=(t=(l=(o=Array.from(((r=this.shadowRoot)==null?void 0:r.querySelectorAll("slot"))||[]))==null?void 0:o.flatMap(e=>e.assignedElements({flatten:!0})))==null?void 0:l.filter(e=>e.tagName.toLowerCase()===C))==null?void 0:t.filter(e=>!e.hasAttribute("name")))==null||i.forEach(e=>{e.setAttribute("name",this.name),this.requiredLabel&&e.setAttribute("required-label",this.requiredLabel)})}};c.styles=[...u.styles];let p=c;R([A({type:String})],p.prototype,"name");const M=D.constructTagName("radiogroup");p.register(M);const W=a=>E`
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
  </mdc-radiogroup>`,ve={title:"Components/radiogroup",tags:["autodocs"],component:"mdc-radiogroup",render:W,parameters:{badges:["stable"]},argTypes:{...k,...$,name:{control:{type:"text"}},label:{control:{type:"text"}},"help-text":{control:{type:"text"}},"data-aria-label":{control:"text"},"required-label":{control:"text"},...G(["help-text-type","disabled"])}},n={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience","required-label":"required","data-aria-label":"Team Captain"}},m={args:{label:"Select your team captain","help-text":"The team captain should have previous experience leading the team through challenging situations.",name:"team-captain-with-experience"}},s={args:{label:"Select your team captain",name:"team-captain"}},d=()=>E`
    <form @submit=${r=>{r.preventDefault();const l=new FormData(r.target).get("course-plan");F("Form Submitted")({name:"course-plan",value:l})}}>
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
  `;var h,b,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience',
    'required-label': 'required',
    'data-aria-label': 'Team Captain'
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,f,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through ' + 'challenging situations.',
    name: 'team-captain-with-experience'
  }
}`,...(x=(f=m.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,S,P;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Select your team captain',
    name: 'team-captain'
  }
}`,...(P=(S=s.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,q,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(w=(q=d.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const fe=["Example","RadioGroupWithDescription","RadioGroupWithoutDescription","RadioGroupInForm"];export{n as Example,d as RadioGroupInForm,m as RadioGroupWithDescription,s as RadioGroupWithoutDescription,fe as __namedExportsOrder,ve as default};
