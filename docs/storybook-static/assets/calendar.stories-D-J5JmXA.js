import{C as a,k as m,t as o}from"./iframe-DKmoi846.js";import{c as $,s as _}from"./commonArgTypes-BG7EqI50.js";import{a as U}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const A=e=>m`
  <mdc-calendar
    value="${o(e.value)}"
    end-value="${o(e["end-value"])}"
    selection-mode="${o(e["selection-mode"])}"
    locale="${o(e.locale)}"
    min="${o(e.min)}"
    max="${o(e.max)}"
    ?show-today-button="${e["show-today-button"]}"
    locale-today-label="${o(e["locale-today-label"])}"
    locale-prev-month-label="${o(e["locale-prev-month-label"])}"
    locale-next-month-label="${o(e["locale-next-month-label"])}"
  ></mdc-calendar>
`,z={title:"Components/calendar",tags:["autodocs"],component:"mdc-calendar",render:A,argTypes:{value:{control:"text",description:"Selected date as ISO string (yyyy-mm-dd)"},"end-value":{control:"text",description:"End date for range selection (ISO string)"},"selection-mode":{control:"select",options:Object.values(a),description:"Selection mode: single, week, or range"},locale:{control:"text",description:"BCP 47 locale string"},min:{control:"text",description:"Minimum selectable date (ISO string)"},max:{control:"text",description:"Maximum selectable date (ISO string)"},"show-today-button":{control:"boolean",description:"Show a Today button below the calendar grid"},"locale-today-label":{control:"text",description:"Localized label for the Today button"},"locale-prev-month-label":{control:"text",description:"Localized aria-label for the previous month button"},"locale-next-month-label":{control:"text",description:"Localized aria-label for the next month button"},...$,..._}},n={args:{"selection-mode":a.SINGLE,locale:"en-US"}},l={args:{value:"2025-07-15","selection-mode":a.SINGLE,locale:"en-US"}},t={args:{value:"2025-07-13","end-value":"2025-07-19","selection-mode":a.WEEK,locale:"en-US","locale-prev-month-label":"Go to previous month","locale-next-month-label":"Go to next month"}},r={args:{value:"2025-07-10","end-value":"2025-07-20","selection-mode":a.RANGE,locale:"en-US"}},c={args:{"selection-mode":a.SINGLE,locale:"en-US",min:"2025-07-05",max:"2025-07-25"}},s={render:()=>m`
    <mdc-calendar
      selection-mode="single"
      locale="fr-FR"
      locale-prev-month-label="Mois précédent"
      locale-next-month-label="Mois suivant"
    ></mdc-calendar>
  `,...U()},d={render:()=>m`
    <mdc-calendar
      selection-mode="single"
      locale="de-DE"
      locale-prev-month-label="Vorheriger Monat"
      locale-next-month-label="Nächster Monat"
    ></mdc-calendar>
  `,...U()};var i,p,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    'selection-mode': SELECTION_MODE.SINGLE,
    locale: 'en-US'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,S,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: '2025-07-15',
    'selection-mode': SELECTION_MODE.SINGLE,
    locale: 'en-US'
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var E,x,v;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: '2025-07-13',
    'end-value': '2025-07-19',
    'selection-mode': SELECTION_MODE.WEEK,
    locale: 'en-US',
    'locale-prev-month-label': 'Go to previous month',
    'locale-next-month-label': 'Go to next month'
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,M,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: '2025-07-10',
    'end-value': '2025-07-20',
    'selection-mode': SELECTION_MODE.RANGE,
    locale: 'en-US'
  }
}`,...(y=(M=r.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var O,L,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'selection-mode': SELECTION_MODE.SINGLE,
    locale: 'en-US',
    min: '2025-07-05',
    max: '2025-07-25'
  }
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var N,C,G;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-calendar
      selection-mode="single"
      locale="fr-FR"
      locale-prev-month-label="Mois précédent"
      locale-next-month-label="Mois suivant"
    ></mdc-calendar>
  \`,
  ...hideAllControls()
}`,...(G=(C=s.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var T,f,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-calendar
      selection-mode="single"
      locale="de-DE"
      locale-prev-month-label="Vorheriger Monat"
      locale-next-month-label="Nächster Monat"
    ></mdc-calendar>
  \`,
  ...hideAllControls()
}`,...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const F=["Example","WithSelectedDate","WeekSelection","RangeSelection","MinMax","LocalizedFrench","MondayStart"];export{n as Example,s as LocalizedFrench,c as MinMax,d as MondayStart,r as RangeSelection,t as WeekSelection,l as WithSelectedDate,F as __namedExportsOrder,z as default};
