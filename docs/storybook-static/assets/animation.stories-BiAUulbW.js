import{c as h,d as m,k as t,B as T,e as g,f as U}from"./iframe-DKmoi846.js";import{c as N,s as w}from"./commonArgTypes-BG7EqI50.js";import{a as x}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,E=o=>t` <mdc-animation
    @load="${a("load")}"
    @complete="${a("complete")}"
    @error="${a("error")}"
    name="${o.name}"
    src="${o.src}"
    loop="${o.loop}"
    ?autoplay="${o.autoplay}"
    aria-label="${o["aria-label"]}"
    aria-labelledby="${o["aria-labelledby"]}"
  ></mdc-animation>`,P={title:"Components/animation",tags:["autodocs"],component:"mdc-animation",render:E,argTypes:{name:{control:"select",options:[...Object.keys(h),void 0]},src:{control:"text"},loop:{control:"text"},autoplay:{control:"boolean"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},...N,...w}},e={args:{name:"celebrate",src:"",loop:m.LOOP,autoplay:m.AUTO_PLAY,"aria-label":"","aria-labelledby":""}},n={render:o=>t`
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
  `,args:{...e.args,name:"thumb_up_yellow",loop:"3"}},r={render:()=>t`
    <mdc-buttongroup
      variant="${T.SECONDARY}"
      size="${g[40]}"
      orientation="${U.HORIZONTAL}"
    >
      ${["thumb_up_yellow","smile","wow","sad","slow_down","speed_up","raise_hand_yellow"].map(o=>t` <mdc-button inverted>
            <mdc-animation
              name="${o}"
              slot="prefix"
              style="height: 1.5rem; width: 1.5rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>`)}
    </mdc-buttongroup>
  `,...x()},l={render:o=>t`
    <mdc-animation
      @load="${a("load")}"
      @complete="${a("complete")}"
      @error="${a("error")}"
      src="${o.src}"
      loop="${o.loop}"
      ?autoplay="${o.autoplay}"
      style="width: 200px; height: 200px;"
    ></mdc-animation>
  `,args:{src:"https://assets2.lottiefiles.com/packages/lf20_UJNc2t.json",loop:m.LOOP,autoplay:m.AUTO_PLAY}};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: 'celebrate',
    src: '',
    loop: DEFAULTS.LOOP,
    autoplay: DEFAULTS.AUTO_PLAY,
    'aria-label': '',
    'aria-labelledby': ''
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(O=r.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var A,$,b;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=($=l.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const I=["Example","AnimationInButton","EmojiAnimationGroup","AnimationFromUrl"];export{l as AnimationFromUrl,n as AnimationInButton,r as EmojiAnimationGroup,e as Example,I as __namedExportsOrder,P as default};
