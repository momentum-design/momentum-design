import{W as We,aR as o,k as t,t as l}from"./iframe-DKmoi846.js";import{c as _e,s as He}from"./commonArgTypes-BG7EqI50.js";import{h as qe,a as n}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const _=Object.values(We).filter(e=>e!=="priority"),Fe=e=>t`
  <mdc-timepicker
    label="${l(e.label)}"
    value="${l(e.value)}"
    time-format="${l(e["time-format"])}"
    interval="${l(e.interval)}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    help-text="${l(e["help-text"])}"
    help-text-type="${l(e["help-text-type"])}"
    min="${l(e.min)}"
    max="${l(e.max)}"
    append-to="${l(e["append-to"])}"
    backdrop-append-to="${l(e["backdrop-append-to"])}"
    locale-hours-label="${l(e["locale-hours-label"])}"
    locale-minutes-label="${l(e["locale-minutes-label"])}"
    locale-period-label="${l(e["locale-period-label"])}"
    locale-hours-placeholder="${l(e["locale-hours-placeholder"])}"
    locale-minutes-placeholder="${l(e["locale-minutes-placeholder"])}"
    locale-period-placeholder="${l(e["locale-period-placeholder"])}"
    locale-am-label="${l(e["locale-am-label"])}"
    locale-pm-label="${l(e["locale-pm-label"])}"
    locale-show-time-picker-label="${l(e["locale-show-time-picker-label"])}"
    locale-time-options-label="${l(e["locale-time-options-label"])}"
    locale-spinbutton-description="${l(e["locale-spinbutton-description"])}"
  ></mdc-timepicker>
`,Ne={title:"Components/timepicker",tags:["autodocs"],component:"mdc-timepicker",render:Fe,argTypes:{label:{control:"text"},"time-format":{control:"select",options:Object.values(o)},interval:{control:"number"},required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"help-text":{control:"text"},"help-text-type":{control:"select",description:`The type of help text. It can be ${_.map(e=>`'${e}'`).join(", ")}.`,options:_},min:{control:"text"},max:{control:"text"},"append-to":{control:"text"},"backdrop-append-to":{control:"text"},"locale-hours-label":{control:"text"},"locale-minutes-label":{control:"text"},"locale-period-label":{control:"text"},"locale-hours-placeholder":{control:"text"},"locale-minutes-placeholder":{control:"text"},"locale-period-placeholder":{control:"text"},"locale-am-label":{control:"text"},"locale-pm-label":{control:"text"},"locale-show-time-picker-label":{control:"text"},"locale-time-options-label":{control:"text"},"locale-spinbutton-description":{control:"text"},...qe(["value","validation-message","validity","willValidate"]),..._e,...He}},a={"locale-hours-label":"hours","locale-minutes-label":"minutes","locale-period-label":"period","locale-hours-placeholder":"hh","locale-minutes-placeholder":"mm","locale-period-placeholder":"--","locale-am-label":"AM","locale-pm-label":"PM","locale-show-time-picker-label":"Show time picker","locale-time-options-label":"Time options","locale-spinbutton-description":"To set value, use the up/down arrow keys or type a value"},m={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,interval:30,required:!0,...a}},p={args:{label:"Start time",value:"20:30","time-format":o.TWENTY_FOUR_HOUR,interval:30,required:!0,...a}},d={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,interval:15,required:!0,...a}},u={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,required:!0,"help-text":"Time will be adjusted to attendee's timezone",...a}},h={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,required:!0,"help-text":"Please select a valid time","help-text-type":"error",...a}},b={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,required:!0,"help-text":"This time may conflict with another event","help-text-type":"warning",...a}},f={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,required:!0,"help-text":"Time confirmed","help-text-type":"success",...a}},v={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,disabled:!0,...a}},k={args:{label:"Start time",value:"08:30","time-format":o.TWELVE_HOUR,readonly:!0,...a}},T={args:{label:"Meeting time",value:"09:00","time-format":o.TWELVE_HOUR,required:!0,min:"08:00",max:"17:00","help-text":"Select a time between 8:00 AM and 5:00 PM",...a}},w={render:()=>t`
    <div style="width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,...n()},M={render:()=>t`
    <div style="display: flex; gap: 1rem;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    </div>
  `,...n()},y={render:()=>t`
    <mdc-timepicker
      label="Hora de inicio"
      value="14:30"
      time-format="12h"
      required
      locale-hours-label="horas"
      locale-minutes-label="minutos"
      locale-period-label="período"
      locale-hours-placeholder="hh"
      locale-minutes-placeholder="mm"
      locale-period-placeholder="--"
      locale-am-label="a.m."
      locale-pm-label="p.m."
      locale-show-time-picker-label="Mostrar selector de hora"
      locale-time-options-label="Opciones de hora"
      locale-spinbutton-description="Para establecer el valor, use las teclas de flecha arriba/abajo o escriba un valor"
      help-text="Seleccione una hora de inicio"
    ></mdc-timepicker>
  `,...n()},x={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  `,...n()},S={render:()=>t`
    <mdc-timepicker
      label="Start time"
      value="08:30"
      time-format="12h"
      prefix-icon="recents-bold"
      locale-hours-label="hours"
      locale-minutes-label="minutes"
      locale-period-label="period"
      locale-hours-placeholder="hh"
      locale-minutes-placeholder="mm"
      locale-period-placeholder="--"
      locale-am-label="AM"
      locale-pm-label="PM"
      locale-show-time-picker-label="Show time picker"
      locale-time-options-label="Time options"
      locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
    ></mdc-timepicker>
  `,...n()},E={render:()=>{const e="08:30";return t`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        .optionLabelFormatter="${(c,$)=>{const[g,O]=e.split(":").map(Number),[L,R]=$.split(":").map(Number),r=L*60+R-(g*60+O);if(r<=0)return c;const s=Math.floor(r/60),i=r%60,W=s>0?`${s}h ${i>0?`${i}m`:""}`.trim():`${i}m`;return`${c} (${W})`}}"
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    `},...n()},A={render:()=>{const e="08:30";return t`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        prefix-icon="recents-bold"
        .optionLabelFormatter="${(c,$)=>{const[g,O]=e.split(":").map(Number),[L,R]=$.split(":").map(Number),r=L*60+R-(g*60+O);if(r<=0)return c;const s=Math.floor(r/60),i=r%60,W=s>0?`${s}h ${i>0?`${i}m`:""}`.trim():`${i}m`;return`${c} (${W})`}}"
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    `},...n()};var H,q,F;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var P,U,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '20:30',
    'time-format': TIME_FORMAT.TWENTY_FOUR_HOUR,
    interval: 30,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var I,N,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    interval: 15,
    required: true,
    ...defaultLocaleArgs
  }
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var j,z,D;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': "Time will be adjusted to attendee's timezone",
    ...defaultLocaleArgs
  }
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var Y,B,G;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Please select a valid time',
    'help-text-type': 'error',
    ...defaultLocaleArgs
  }
}`,...(G=(B=h.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'This time may conflict with another event',
    'help-text-type': 'warning',
    ...defaultLocaleArgs
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    'help-text': 'Time confirmed',
    'help-text-type': 'success',
    ...defaultLocaleArgs
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,oe,ae;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    disabled: true,
    ...defaultLocaleArgs
  }
}`,...(ae=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,re,ie;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Start time',
    value: '08:30',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    readonly: true,
    ...defaultLocaleArgs
  }
}`,...(ie=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ne,ce,se;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Meeting time',
    value: '09:00',
    'time-format': TIME_FORMAT.TWELVE_HOUR,
    required: true,
    min: '08:00',
    max: '17:00',
    'help-text': 'Select a time between 8:00 AM and 5:00 PM',
    ...defaultLocaleArgs
  }
}`,...(se=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var me,pe,de;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  \`,
  ...hideAllControls()
}`,...(de=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,he,be;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 1rem;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    </div>
  \`,
  ...hideAllControls()
}`,...(be=(he=M.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var fe,ve,ke;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-timepicker
      label="Hora de inicio"
      value="14:30"
      time-format="12h"
      required
      locale-hours-label="horas"
      locale-minutes-label="minutos"
      locale-period-label="período"
      locale-hours-placeholder="hh"
      locale-minutes-placeholder="mm"
      locale-period-placeholder="--"
      locale-am-label="a.m."
      locale-pm-label="p.m."
      locale-show-time-picker-label="Mostrar selector de hora"
      locale-time-options-label="Opciones de hora"
      locale-spinbutton-description="Para establecer el valor, use las teclas de flecha arriba/abajo o escriba un valor"
      help-text="Seleccione una hora de inicio"
    ></mdc-timepicker>
  \`,
  ...hideAllControls()
}`,...(ke=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Te,we,Me;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
      <mdc-timepicker
        label="Start time"
        value="08:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
      <mdc-timepicker
        label="End time"
        value="09:30"
        time-format="12h"
        required
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
        style="--mdc-timepicker-width: 100%;"
      ></mdc-timepicker>
    </div>
  \`,
  ...hideAllControls()
}`,...(Me=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var ye,xe,Se;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-timepicker
      label="Start time"
      value="08:30"
      time-format="12h"
      prefix-icon="recents-bold"
      locale-hours-label="hours"
      locale-minutes-label="minutes"
      locale-period-label="period"
      locale-hours-placeholder="hh"
      locale-minutes-placeholder="mm"
      locale-period-placeholder="--"
      locale-am-label="AM"
      locale-pm-label="PM"
      locale-show-time-picker-label="Show time picker"
      locale-time-options-label="Time options"
      locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
    ></mdc-timepicker>
  \`,
  ...hideAllControls()
}`,...(Se=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ee,Ae,$e;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const startTime = '08:30';
    const formatter = (label: string, value: string) => {
      const [startH, startM] = startTime.split(':').map(Number);
      const [h, m] = value.split(':').map(Number);
      const diffMinutes = h * 60 + m - (startH * 60 + startM);
      if (diffMinutes <= 0) return label;
      const hours = Math.floor(diffMinutes / 60);
      const mins = diffMinutes % 60;
      const duration = hours > 0 ? \`\${hours}h \${mins > 0 ? \`\${mins}m\` : ''}\`.trim() : \`\${mins}m\`;
      return \`\${label} (\${duration})\`;
    };
    return html\`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        .optionLabelFormatter="\${formatter}"
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    \`;
  },
  ...hideAllControls()
}`,...($e=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:$e.source}}};var ge,Oe,Le;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const startTime = '08:30';
    const formatter = (label: string, value: string) => {
      const [startH, startM] = startTime.split(':').map(Number);
      const [h, m] = value.split(':').map(Number);
      const diffMinutes = h * 60 + m - (startH * 60 + startM);
      if (diffMinutes <= 0) return label;
      const hours = Math.floor(diffMinutes / 60);
      const mins = diffMinutes % 60;
      const duration = hours > 0 ? \`\${hours}h \${mins > 0 ? \`\${mins}m\` : ''}\`.trim() : \`\${mins}m\`;
      return \`\${label} (\${duration})\`;
    };
    return html\`
      <mdc-timepicker
        label="End time"
        value="09:00"
        time-format="12h"
        min="08:30"
        max="17:00"
        prefix-icon="recents-bold"
        .optionLabelFormatter="\${formatter}"
        locale-hours-label="hours"
        locale-minutes-label="minutes"
        locale-period-label="period"
        locale-hours-placeholder="hh"
        locale-minutes-placeholder="mm"
        locale-period-placeholder="--"
        locale-am-label="AM"
        locale-pm-label="PM"
        locale-show-time-picker-label="Show time picker"
        locale-time-options-label="Time options"
        locale-spinbutton-description="To set value, use the up/down arrow keys or type a value"
      ></mdc-timepicker>
    \`;
  },
  ...hideAllControls()
}`,...(Le=(Oe=A.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};const Ce=["Example","TwentyFourHourFormat","FifteenMinuteInterval","WithHelpText","ErrorState","WarningState","SuccessState","Disabled","Readonly","WithMinMax","StretchedWidth","StartAndEndTime","Localized","VerticalLayout","WithPrefixIcon","WithOptionLabelFormatter","WithPrefixIconAndFormatter"];export{v as Disabled,h as ErrorState,m as Example,d as FifteenMinuteInterval,y as Localized,k as Readonly,M as StartAndEndTime,w as StretchedWidth,f as SuccessState,p as TwentyFourHourFormat,x as VerticalLayout,b as WarningState,u as WithHelpText,T as WithMinMax,E as WithOptionLabelFormatter,S as WithPrefixIcon,A as WithPrefixIconAndFormatter,Ce as __namedExportsOrder,Ne as default};
