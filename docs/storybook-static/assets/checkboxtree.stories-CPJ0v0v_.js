import{L as o,J as A,K as f,k as d,t as c}from"./iframe-DzQePvdO.js";import{c as S,s as T}from"./commonArgTypes-BG7EqI50.js";import{h as E}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const v=d`
  <mdc-checkbox label="Avengers"></mdc-checkbox>
  <mdc-checkboxtree>
    <mdc-checkbox checked label="Iron Man"></mdc-checkbox>
    <mdc-checkbox label="Captain America"></mdc-checkbox>
    <mdc-checkboxtree>
      <mdc-checkbox checked label="Falcon"></mdc-checkbox>
      <mdc-checkbox label="Winter Soldier"></mdc-checkbox>
    </mdc-checkboxtree>
    <mdc-checkbox label="Thor"></mdc-checkbox>
  </mdc-checkboxtree>
  <mdc-checkbox label="Guardians of the Galaxy"></mdc-checkbox>
  <mdc-checkboxtree>
    <mdc-checkbox checked label="Peter Quill"></mdc-checkbox>
    <mdc-checkbox checked label="Gamora"></mdc-checkbox>
    <mdc-checkbox checked label="Rocket"></mdc-checkbox>
  </mdc-checkboxtree>
`,L=e=>d`
  <mdc-checkboxtree
    class=${c(e.class)}
    style=${c(e.style)}
    label=${c(e.label)}
    help-text=${c(e["help-text"])}
    help-text-type=${e["help-text-type"]}
    toggletip-text=${c(e["toggletip-text"])}
    toggletip-placement=${e["toggletip-placement"]}
    toggletip-strategy=${e["toggletip-strategy"]}
    info-icon-aria-label=${c(e["info-icon-aria-label"])}
    ?required=${e.required}
  >
    ${e.children}
  </mdc-checkboxtree>
`,C={title:"Widgets/checkboxtree",tags:["autodocs"],component:"mdc-checkboxtree",render:L,argTypes:{label:{control:"text"},"help-text":{control:"text"},"help-text-type":{control:"select",options:Object.values(o)},required:{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(A)},"toggletip-strategy":{control:"select",options:Object.values(f)},"info-icon-aria-label":{control:"text"},children:{control:!1,description:"Direct mdc-checkbox children and recursively nested mdc-checkboxtree groups."},...E(["disabled","readonly","soft-disabled"]),...S,...T}},t={args:{label:"Select your Avengers team","help-text":"Select all that apply.","help-text-type":o.DEFAULT,required:!0,"toggletip-text":"Parent selections apply to every available descendant.","toggletip-placement":A.TOP,"toggletip-strategy":f.ABSOLUTE,"info-icon-aria-label":"About team selection",children:v}},a={args:{label:"Notification preferences","help-text":"Choose which work notifications you receive.","help-text-type":o.DEFAULT,children:d`
      <mdc-checkbox
        label="Work notifications"
        readonly
        help-text="Update each notification separately."
      ></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox checked label="Meeting reminders"></mdc-checkbox>
        <mdc-checkbox label="Direct messages"></mdc-checkbox>
        <mdc-checkbox checked readonly label="Security alerts" help-text="Required for your account."></mdc-checkbox>
        <mdc-checkbox
          disabled
          label="SMS notifications"
          help-text="Add a phone number to enable SMS notifications."
        ></mdc-checkbox>
        <mdc-checkbox
          checked
          soft-disabled
          label="Service updates"
          help-text="Managed by your organization."
        ></mdc-checkbox>
      </mdc-checkboxtree>
    `}},l={args:{...t.args,"help-text":"You must select at least one team member.","help-text-type":o.ERROR,"toggletip-text":void 0}},r={args:{label:"Select teams for the international incident response program","help-text":"Choose every regional team that should receive alerts.","help-text-type":o.DEFAULT,children:d`
      <mdc-checkbox label="Americas response teams"></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox label="North American emergency communications and coordination team"></mdc-checkbox>
        <mdc-checkbox label="Equipo de respuesta para América Latina"></mdc-checkbox>
      </mdc-checkboxtree>
      <mdc-checkbox label="فرق الاستجابة الإقليمية"></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox label="فريق الاستجابة للشرق الأوسط"></mdc-checkbox>
        <mdc-checkbox label="アジア太平洋地域の緊急対応チーム"></mdc-checkbox>
      </mdc-checkboxtree>
    `}};var n,i,h;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Select your Avengers team',
    'help-text': 'Select all that apply.',
    'help-text-type': VALIDATION.DEFAULT,
    required: true,
    'toggletip-text': 'Parent selections apply to every available descendant.',
    'toggletip-placement': POPOVER_PLACEMENT.TOP,
    'toggletip-strategy': STRATEGY.ABSOLUTE,
    'info-icon-aria-label': 'About team selection',
    children: avengersTree
  }
}`,...(h=(i=t.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var s,m,b;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Notification preferences',
    'help-text': 'Choose which work notifications you receive.',
    'help-text-type': VALIDATION.DEFAULT,
    children: html\`
      <mdc-checkbox
        label="Work notifications"
        readonly
        help-text="Update each notification separately."
      ></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox checked label="Meeting reminders"></mdc-checkbox>
        <mdc-checkbox label="Direct messages"></mdc-checkbox>
        <mdc-checkbox checked readonly label="Security alerts" help-text="Required for your account."></mdc-checkbox>
        <mdc-checkbox
          disabled
          label="SMS notifications"
          help-text="Add a phone number to enable SMS notifications."
        ></mdc-checkbox>
        <mdc-checkbox
          checked
          soft-disabled
          label="Service updates"
          help-text="Managed by your organization."
        ></mdc-checkbox>
      </mdc-checkboxtree>
    \`
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,p,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'help-text': 'You must select at least one team member.',
    'help-text-type': VALIDATION.ERROR,
    'toggletip-text': undefined
  }
}`,...(k=(p=l.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var g,u,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Select teams for the international incident response program',
    'help-text': 'Choose every regional team that should receive alerts.',
    'help-text-type': VALIDATION.DEFAULT,
    children: html\`
      <mdc-checkbox label="Americas response teams"></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox label="North American emergency communications and coordination team"></mdc-checkbox>
        <mdc-checkbox label="Equipo de respuesta para América Latina"></mdc-checkbox>
      </mdc-checkboxtree>
      <mdc-checkbox label="فرق الاستجابة الإقليمية"></mdc-checkbox>
      <mdc-checkboxtree>
        <mdc-checkbox label="فريق الاستجابة للشرق الأوسط"></mdc-checkbox>
        <mdc-checkbox label="アジア太平洋地域の緊急対応チーム"></mdc-checkbox>
      </mdc-checkboxtree>
    \`
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const I=["Example","CheckboxStates","Error","LongAndMultilingualContent"];export{a as CheckboxStates,l as Error,t as Example,r as LongAndMultilingualContent,I as __namedExportsOrder,C as default};
