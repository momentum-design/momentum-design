import{a as O,D as m}from"./index-BxW-W6i1.js";import{k as n}from"./iframe-BceO9xBA.js";import{c as T,s as y}from"./commonArgTypes-BG7EqI50.js";import"./index-DqcwKQda.js";import{B as A,a as h,b as $}from"./index-B8gRmHFs.js";import{a as g}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./ref-jZiHhZXV.js";import"./directive-Ctav8iJK.js";import"./button.component-CfRI-83W.js";import"./buttonsimple.component-CAmLtJMK.js";import"./TabIndexMixin-CLzlMbCP.js";import"./DisabledMixin-CJ7Qsp83.js";import"./button.utils-rNW36Ji7.js";import"./index-C-PBsjQe.js";import"./index-ByQ9qkf1.js";import"./index-DTrDRi1E.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,N=o=>n` <mdc-animation
    @load="${r("load")}"
    @complete="${r("complete")}"
    @error="${r("error")}"
    name="${o.name}"
    loop="${o.loop}"
    ?autoplay="${o.autoplay}"
    aria-label="${o["aria-label"]}"
    aria-labelledby="${o["aria-labelledby"]}"
  ></mdc-animation>`,F={title:"Components/animation",tags:["autodocs"],component:"mdc-animation",render:N,argTypes:{name:{control:"select",options:Object.keys(O)},loop:{control:"text"},autoplay:{control:"boolean"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},...T,...y}},a={args:{name:"celebrate",loop:m.LOOP,autoplay:m.AUTO_PLAY,"aria-label":"","aria-labelledby":""}},t={render:o=>n`
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
  `,args:{...a.args,name:"thumb_up_yellow",loop:"3"}},e={render:()=>n`
    <mdc-buttongroup
      variant="${A.SECONDARY}"
      size="${h[40]}"
      orientation="${$.HORIZONTAL}"
    >
      ${["thumb_up_yellow","smile","wow","sad","slow_down","speed_up","raise_hand_yellow"].map(o=>n` <mdc-button inverted>
            <mdc-animation
              name="${o}"
              slot="prefix"
              style="height: 1.5rem; width: 1.5rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>`)}
    </mdc-buttongroup>
  `,...g()};var i,l,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'celebrate',
    loop: DEFAULTS.LOOP,
    autoplay: DEFAULTS.AUTO_PLAY,
    'aria-label': '',
    'aria-labelledby': ''
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var p,d,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,_,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(_=e.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const z=["Example","AnimationInButton","EmojiAnimationGroup"];export{t as AnimationInButton,e as EmojiAnimationGroup,a as Example,z as __namedExportsOrder,F as default};
