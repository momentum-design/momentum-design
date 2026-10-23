import{bv as D,bw as $,aL as T,bx as _,k as n}from"./iframe-BdE6CcAw.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=D(class extends ${constructor(){super(...arguments),this.key=T}render(e,t){return this.key=e,t}update(e,[t,d]){return t!==this.key&&(_(e),this.key=t),d}}),q=["---","title: Gradient Border","summary: Shared stylesheet for the Momentum AI hint border — a gradient ring that can travel around any element.","tier: 3","---","","## Overview","","Gradient Border is a shared stylesheet, not a component. There is no `mdc-gradient-border` element","to render — you import the stylesheet once and apply the classes to any element you already have,","whether that is a Momentum component, a plain `div`, or markup from another library.","","| Class | |","| --- | --- |","| `mdc-gradient-border-primary` | Draws the ring with the primary linear gradient. |","| `mdc-gradient-border-secondary` | Draws the ring with the secondary conic gradient. |","| `mdc-gradient-border-animated` | Makes the gradient travel around the ring. |","| `mdc-gradient-border-fade-in` | Fades the border in once when playback starts. |","| `mdc-gradient-border-fade-out` | Fades the border out at the end of finite playback. |","","### When to use","","- Use a gradient border to mark a surface as AI assisted, so the gradient is read as a hint about","  where the content came from rather than as decoration.","- Reach for `mdc-gradient-border-primary` when the ring should be solid the whole way round, and for","  `mdc-gradient-border-secondary` when it should taper into a comet tail instead.","- Add `mdc-gradient-border-animated` while the assistant is working. The travelling gradient is a","  progress cue, so remove the class once the result has settled. Set","  `--mdc-gradient-border-iteration-count: 1` instead when the work is short enough to be covered by","  a single turn.","","### When not to use","","- Do not use it where a solid outline is wanted. Use a `border` with","  `--mds-color-theme-outline-secondary-normal` instead.","- Do not use it to convey status such as error, warning, or success. Those have their own outline","  tokens and are not gradients.","","## Guidelines","","### Accessibility","","The ring is decorative, so it carries no accessible name — announce the AI state through the","content or a live region instead. The animation is suppressed under `prefers-reduced-motion`, and","in forced-colors mode the ring falls back to a solid `CanvasText` outline because angular","gradients are not painted there.","","### Developer usage","","```js","import '@momentum-design/components/dist/styles/gradient-border.css';","```","","```html",'<div class="mdc-gradient-border-primary mdc-gradient-border-animated">AI generated</div>',"```","","The ring is drawn by a masked pseudo-element, which leaves `box-shadow` free for the focus ring and","keeps translucent and glass surfaces underneath untinted. It uses `border-radius: inherit`, so set","the radius on the element itself rather than on the ring.","","Override the thickness, the colours, and the animation through their custom properties:","","| Custom property | Default |","| --- | --- |","| `--mdc-gradient-border-width` | `0.125rem` |","| `--mdc-gradient-border-stops` | the `--mds-color-theme-ai-hint-*-gradient-*` tokens of the variant |","| `--mdc-gradient-border-start-angle` | `90deg` on primary, `180deg` on secondary |","| `--mdc-gradient-border-duration` | `6s` |","| `--mdc-gradient-border-iteration-count` | `infinite` |","| `--mdc-gradient-border-fade-in-duration` | `var(--mds-motion-duration-slow, 600ms)`, used when fade in is enabled |","| `--mdc-gradient-border-fade-out-duration` | `var(--mds-motion-duration-slow, 600ms)`, used when fade out is enabled |","","```css",".panel.mdc-gradient-border-primary {","  --mdc-gradient-border-width: 0.25rem;","  --mdc-gradient-border-duration: 2s;","}","```","","`--mdc-gradient-border-stops` is spliced into the variant’s gradient function — `linear-gradient()`","for primary, `conic-gradient()` for secondary — so a replacement list has to suit that function. On","secondary, repeat the first colour last to close the ring without a seam unless, as with the AI hint","tokens, both ends are already transparent. A Momentum theme stylesheet must be loaded for the colour","tokens to resolve.","","`--mdc-gradient-border-start-angle` positions a static ring and sets the starting point of playback.","","### Finite and continuous playback","","With `infinite`, the border rotates at a constant speed. A finite, positive iteration count settles","to a stop once, at the end of the complete sequence. The total time is duration multiplied by turns;","duration is therefore an average time per turn during finite playback. Fractional turns are supported.","","Finite playback travels linearly for the first 60% of its time, then uses the entrance easing token","to decelerate. The travel split is matched to that token’s initial slope to avoid a speed jump.","The border holds its final angle. Whole turns finish at the starting angle.","","### Optional fades","","Fade in and fade out are independent modifiers. Fade in also works with `infinite`; fade out is","ignored for continuous playback because there is no scheduled end. Without fade out, a finite","sequence leaves the static border visible. Only the border fades; content stays visible.","","Fade times are included in finite playback and are clamped to fit, with fade in taking priority","if they would overlap. A zero duration makes an enabled fade instant; remove its class to disable it.","With animation disabled, omit both fade classes to show a static border.","","Load the motion stylesheet and apply `mds-motion` to the element or an ancestor to use the system","easings and fade durations. Matching fallback values support existing theme-only consumers.","","```js","import '@momentum-design/tokens/dist/css/motion/complete.css';","```","","```html",'<div class="mds-motion mdc-gradient-border-secondary mdc-gradient-border-animated mdc-gradient-border-fade-in"','     style="--mdc-gradient-border-duration: 2s; --mdc-gradient-border-iteration-count: 2;">',"  AI generated","</div>","```","","### Browser support","","Everything that paints the ring is behind `@supports (mask-composite: exclude)`. Engines without","the unprefixed mask render the element unchanged rather than with a broken outline. Engines without","the Properties and Values API animate nothing and hold the first frame. Settling and optional fades","also require CSS `round()`; older engines retain the original constant-speed playback."].join(`
`),R={title:"Styles/Gradient Border",tags:["autodocs"],parameters:{actions:{disable:!0},a11y:{disable:!0},docs:{markdown:q,description:{story:n`<mdc-text tagname="p">
          The ring marks a surface as AI assisted. Toggle the animation to see the travelling gradient used while an
          assistant is working.
        </mdc-text>`}}}},F=({currentTarget:e})=>{var d;const t=(d=e.parentElement)==null?void 0:d.querySelector(".gradientBorderStoryPanel");t==null||t.classList.remove("mdc-gradient-border-animated"),requestAnimationFrame(()=>{requestAnimationFrame(()=>t==null?void 0:t.classList.add("mdc-gradient-border-animated"))})},i={"100ms":"var(--mds-motion-duration-instant)","200ms":"var(--mds-motion-duration-fast)","300ms":"var(--mds-motion-duration-normal)","450ms":"var(--mds-motion-duration-relaxed)","600ms":"var(--mds-motion-duration-slow)","1200ms":"var(--mds-motion-duration-sustained)","2400ms":"var(--mds-motion-duration-extended)"},a={argTypes:{variant:{control:"inline-radio",options:["primary","secondary"],description:"Picks between the `mdc-gradient-border-primary` and `mdc-gradient-border-secondary` classes."},animated:{control:"boolean",description:"Adds the `mdc-gradient-border-animated` class."},width:{control:"select",options:["0.0625rem","0.125rem","0.25rem","0.5rem"],description:"Thickness assigned to `--mdc-gradient-border-width`."},duration:{control:"select",options:["1s","2s","3s","6s","12s"],description:"Time per turn; average time per turn when finite playback decelerates."},iterationCount:{control:"select",options:["1","2","3","infinite"],description:"Turns to play, assigned to `--mdc-gradient-border-iteration-count`."},fadeIn:{name:"Fade in",control:"boolean",description:"Appear gradually when playback starts."},fadeInDuration:{name:"Fade in time",control:"select",options:Object.keys(i),mapping:i,if:{arg:"fadeIn"}},fadeOut:{name:"Fade out",control:"boolean",description:"Disappear at the end of finite playback.",if:{arg:"iterationCount",neq:"infinite"}},fadeOutDuration:{name:"Fade out time",control:"select",options:Object.keys(i),mapping:i,if:{arg:"iterationCount",neq:"infinite"}}},args:{variant:"primary",animated:!0,width:"0.125rem",duration:"6s",iterationCount:"infinite",fadeIn:!1,fadeOut:!1,fadeInDuration:"600ms",fadeOutDuration:"600ms"},render:e=>n`
    <div class="gradientBorderStoryCenter gradientBorderStoryCenter__stacked">
      ${x(JSON.stringify(e),n`
        <div
          class="mds-motion gradientBorderStoryPanel gradientBorderStoryPanel__large mdc-gradient-border-${e.variant} ${e.animated?"mdc-gradient-border-animated":""} ${e.animated&&e.fadeIn?"mdc-gradient-border-fade-in":""}
            ${e.animated&&e.fadeOut&&e.iterationCount!=="infinite"?"mdc-gradient-border-fade-out":""}"
          style="--mdc-gradient-border-width: ${e.width};
                 --mdc-gradient-border-duration: ${e.duration};
                 --mdc-gradient-border-iteration-count: ${e.iterationCount};
                 --mdc-gradient-border-fade-in-duration: ${e.fadeInDuration};
                 --mdc-gradient-border-fade-out-duration: ${e.fadeOutDuration}"
        >
          AI generated
        </div>
      `)}
      ${e.animated?n`<mdc-button variant="secondary" @click="${F}">Replay</mdc-button>`:""}
    </div>
  `},o={parameters:{controls:{disable:!0}},render:()=>n`
    <div class="gradientBorderStoryRow">
      <div class="gradientBorderStoryPanel mdc-gradient-border-primary">Primary</div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-primary mdc-gradient-border-animated">
        Primary animated
      </div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-secondary">Secondary</div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-secondary mdc-gradient-border-animated">
        Secondary animated
      </div>
      <div class="gradientBorderStoryPanel gradientBorderStoryPanel__round mdc-gradient-border-secondary">Circle</div>
    </div>
  `},s={parameters:{controls:{disable:!0},docs:{description:{story:n`<mdc-text tagname="p">
          The ring starts at 135°, makes one turn, and slows to a stop at its starting angle.
        </mdc-text>`}}},render:()=>n`
    <div class="gradientBorderStoryCenter gradientBorderStoryCenter__stacked">
      <div
        class="mds-motion gradientBorderStoryPanel gradientBorderStoryPanel__large mdc-gradient-border-secondary mdc-gradient-border-animated"
        style="--mdc-gradient-border-start-angle: 135deg;
               --mdc-gradient-border-duration: 3s;
               --mdc-gradient-border-iteration-count: 1"
      >
        One turn from 135°
      </div>
      <mdc-button variant="secondary" @click="${F}">Replay</mdc-button>
    </div>
  `},r={...a,args:{...a.args,variant:"secondary",duration:"2s",iterationCount:"2",fadeIn:!0}},c={...r,args:{...r.args,iterationCount:"infinite"}},m={...r,args:{...r.args,fadeOut:!0}};var l,u,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
      description: 'Picks between the \`mdc-gradient-border-primary\` and \`mdc-gradient-border-secondary\` classes.'
    },
    animated: {
      control: 'boolean',
      description: 'Adds the \`mdc-gradient-border-animated\` class.'
    },
    width: {
      control: 'select',
      options: ['0.0625rem', '0.125rem', '0.25rem', '0.5rem'],
      description: 'Thickness assigned to \`--mdc-gradient-border-width\`.'
    },
    duration: {
      control: 'select',
      options: ['1s', '2s', '3s', '6s', '12s'],
      description: 'Time per turn; average time per turn when finite playback decelerates.'
    },
    iterationCount: {
      control: 'select',
      options: ['1', '2', '3', 'infinite'],
      description: 'Turns to play, assigned to \`--mdc-gradient-border-iteration-count\`.'
    },
    fadeIn: {
      name: 'Fade in',
      control: 'boolean',
      description: 'Appear gradually when playback starts.'
    },
    fadeInDuration: {
      name: 'Fade in time',
      control: 'select',
      options: Object.keys(fadeDurations),
      mapping: fadeDurations,
      if: {
        arg: 'fadeIn'
      }
    },
    fadeOut: {
      name: 'Fade out',
      control: 'boolean',
      description: 'Disappear at the end of finite playback.',
      if: {
        arg: 'iterationCount',
        neq: 'infinite'
      }
    },
    fadeOutDuration: {
      name: 'Fade out time',
      control: 'select',
      options: Object.keys(fadeDurations),
      mapping: fadeDurations,
      if: {
        arg: 'iterationCount',
        neq: 'infinite'
      }
    }
  },
  args: {
    variant: 'primary',
    animated: true,
    width: '0.125rem',
    duration: '6s',
    iterationCount: 'infinite',
    fadeIn: false,
    fadeOut: false,
    fadeInDuration: '600ms',
    fadeOutDuration: '600ms'
  },
  render: args => html\`
    <div class="gradientBorderStoryCenter gradientBorderStoryCenter__stacked">
      \${keyed(JSON.stringify(args), html\`
        <div
          class="mds-motion gradientBorderStoryPanel gradientBorderStoryPanel__large mdc-gradient-border-\${args.variant} \${args.animated ? 'mdc-gradient-border-animated' : ''} \${args.animated && args.fadeIn ? 'mdc-gradient-border-fade-in' : ''}
            \${args.animated && args.fadeOut && args.iterationCount !== 'infinite' ? 'mdc-gradient-border-fade-out' : ''}"
          style="--mdc-gradient-border-width: \${args.width};
                 --mdc-gradient-border-duration: \${args.duration};
                 --mdc-gradient-border-iteration-count: \${args.iterationCount};
                 --mdc-gradient-border-fade-in-duration: \${args.fadeInDuration};
                 --mdc-gradient-border-fade-out-duration: \${args.fadeOutDuration}"
        >
          AI generated
        </div>
      \`)}
      \${args.animated ? html\`<mdc-button variant="secondary" @click="\${replay}">Replay</mdc-button>\` : ''}
    </div>
  \`
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,p,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div class="gradientBorderStoryRow">
      <div class="gradientBorderStoryPanel mdc-gradient-border-primary">Primary</div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-primary mdc-gradient-border-animated">
        Primary animated
      </div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-secondary">Secondary</div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-secondary mdc-gradient-border-animated">
        Secondary animated
      </div>
      <div class="gradientBorderStoryPanel gradientBorderStoryPanel__round mdc-gradient-border-secondary">Circle</div>
    </div>
  \`
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,f,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: html\`<mdc-text tagname="p">
          The ring starts at 135°, makes one turn, and slows to a stop at its starting angle.
        </mdc-text>\`
      }
    }
  },
  render: () => html\`
    <div class="gradientBorderStoryCenter gradientBorderStoryCenter__stacked">
      <div
        class="mds-motion gradientBorderStoryPanel gradientBorderStoryPanel__large mdc-gradient-border-secondary mdc-gradient-border-animated"
        style="--mdc-gradient-border-start-angle: 135deg;
               --mdc-gradient-border-duration: 3s;
               --mdc-gradient-border-iteration-count: 1"
      >
        One turn from 135°
      </div>
      <mdc-button variant="secondary" @click="\${replay}">Replay</mdc-button>
    </div>
  \`
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,w,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Example,
  args: {
    ...Example.args,
    variant: 'secondary',
    duration: '2s',
    iterationCount: '2',
    fadeIn: true
  }
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var I,B,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...FadeInAndSettle,
  args: {
    ...FadeInAndSettle.args,
    iterationCount: 'infinite'
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var O,A,P;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...FadeInAndSettle,
  args: {
    ...FadeInAndSettle.args,
    fadeOut: true
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const L=["Example","Variants","SingleTurn","FadeInAndSettle","FadeInAndLoop","FadeInOut"];export{a as Example,c as FadeInAndLoop,r as FadeInAndSettle,m as FadeInOut,s as SingleTurn,o as Variants,L as __namedExportsOrder,R as default};
