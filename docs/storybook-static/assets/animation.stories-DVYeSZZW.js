import{a as h,D as i}from"./index-BihAnHhx.js";import{k as e}from"./iframe-CYZ064vw.js";import{c as T,s as g}from"./commonArgTypes-BG7EqI50.js";import"./index-DM419G9w.js";import{B as U,a as N,b as w}from"./index-BrwLrpnM.js";import{a as x}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./ref-CpjbPkH6.js";import"./directive-Ctav8iJK.js";import"./button.component-DTdegw5n.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./KeyDownHandledMixin-DGzJ0rYO.js";import"./index-Cm4DuzN6.js";import"./button.utils-rNW36Ji7.js";import"./index-C-a6jsM_.js";import"./index-DTrDRi1E.js";import"./query-assigned-elements-D2XoKueq.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,E=o=>e` <mdc-animation
    @load="${a("load")}"
    @complete="${a("complete")}"
    @error="${a("error")}"
    name="${o.name}"
    src="${o.src}"
    loop="${o.loop}"
    ?autoplay="${o.autoplay}"
    aria-label="${o["aria-label"]}"
    aria-labelledby="${o["aria-labelledby"]}"
  ></mdc-animation>`,J={title:"Components/animation",tags:["autodocs"],component:"mdc-animation",render:E,argTypes:{name:{control:"select",options:[...Object.keys(h),void 0]},src:{control:"text"},loop:{control:"text"},autoplay:{control:"boolean"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},...T,...g}},t={args:{name:"celebrate",src:"",loop:i.LOOP,autoplay:i.AUTO_PLAY,"aria-label":"","aria-labelledby":""}},n={render:o=>e`
    <mdc-button inverted>
      Like
      <mdc-animation
        slot="postfix"
        name="${o.name}"
        loop="${o.loop}"
        ?autoplay="${o.autoplay}"
        style="width: 1rem; height: 1rem;"
      ></mdc-animation>
    </mdc-button>
  `,args:{...t.args,name:"thumb_up_yellow",loop:"3"}},r={render:()=>e`
    <mdc-buttongroup
      variant="${U.SECONDARY}"
      size="${N[40]}"
      orientation="${w.HORIZONTAL}"
    >
      ${["thumb_up_yellow","smile","wow","sad","slow_down","speed_up","raise_hand_yellow"].map(o=>e` <mdc-button inverted>
            <mdc-animation
              name="${o}"
              slot="prefix"
              style="height: 1.5rem; width: 1.5rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>`)}
    </mdc-buttongroup>
  `,...x()},m={render:o=>e`
    <mdc-animation
      @load="${a("load")}"
      @complete="${a("complete")}"
      @error="${a("error")}"
      src="${o.src}"
      loop="${o.loop}"
      ?autoplay="${o.autoplay}"
      style="width: 200px; height: 200px;"
    ></mdc-animation>
  `,args:{src:"https://assets2.lottiefiles.com/packages/lf20_UJNc2t.json",loop:i.LOOP,autoplay:i.AUTO_PLAY}};var l,s,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'celebrate',
    src: '',
    loop: DEFAULTS.LOOP,
    autoplay: DEFAULTS.AUTO_PLAY,
    'aria-label': '',
    'aria-labelledby': ''
  }
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <mdc-button inverted>
      Like
      <mdc-animation
        slot="postfix"
        name="\${args.name}"
        loop="\${args.loop}"
        ?autoplay="\${args.autoplay}"
        style="width: 1rem; height: 1rem;"
      ></mdc-animation>
    </mdc-button>
  \`,
  args: {
    ...Example.args,
    name: 'thumb_up_yellow',
    loop: '3'
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var _,O,y;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-buttongroup
      variant="\${BUTTON_GROUP_VARIANT.SECONDARY}"
      size="\${BUTTON_GROUP_SIZE[40]}"
      orientation="\${BUTTON_GROUP_ORIENTATION.HORIZONTAL}"
    >
      \${['thumb_up_yellow', 'smile', 'wow', 'sad', 'slow_down', 'speed_up', 'raise_hand_yellow'].map(animationName => html\` <mdc-button inverted>
            <mdc-animation
              name="\${animationName as AnimationNames}"
              slot="prefix"
              style="height: 1.5rem; width: 1.5rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>\`)}
    </mdc-buttongroup>
  \`,
  ...hideAllControls()
}`,...(y=(O=r.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var A,$,b;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <mdc-animation
      @load="\${action('load')}"
      @complete="\${action('complete')}"
      @error="\${action('error')}"
      src="\${args.src}"
      loop="\${args.loop}"
      ?autoplay="\${args.autoplay}"
      style="width: 200px; height: 200px;"
    ></mdc-animation>
  \`,
  args: {
    src: 'https://assets2.lottiefiles.com/packages/lf20_UJNc2t.json',
    loop: DEFAULTS.LOOP,
    autoplay: DEFAULTS.AUTO_PLAY
  }
}`,...(b=($=m.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const M=["Example","AnimationInButton","EmojiAnimationGroup","AnimationFromUrl"];export{m as AnimationFromUrl,n as AnimationInButton,r as EmojiAnimationGroup,t as Example,M as __namedExportsOrder,J as default};
