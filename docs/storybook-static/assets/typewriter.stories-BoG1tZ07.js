import{S as xe,u as we,s as R,E as D,k as s,$ as C,n as k,q as d,V as S}from"./iframe-D6lHhKC3.js";import{t as A}from"./if-defined-BPDtHRBw.js";import"./index-Bjqmjn_b.js";import"./index-C_vuJDA-.js";import"./index-kO1FfR_f.js";import"./index-D3cyjTt0.js";import"./index-Cf8j7FoC.js";import"./index-COwaLUJV.js";import"./index-D1Drmj9T.js";import{c as Te,s as ve}from"./commonArgTypes-BluK8w5L.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DrB2uRFx.js";import"./buttonsimple.component-X_w4hL51.js";import"./TabIndexMixin-CJsJut2d.js";import"./DisabledMixin-CJlycYIb.js";import"./button.utils-rNW36Ji7.js";import"./index-Db1H6DQD.js";import"./index-BGot_E9v.js";import"./index-DTrDRi1E.js";import"./index-BhHZ5AmF.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./base-DIkkzJ-c.js";import"./popover.component-Jq_wylKh.js";import"./BackdropMixin-2L6Aywa5.js";import"./index-D_USQ7gU.js";import"./v4-CmTdKEVZ.js";import"./input.component-BUFngT9B.js";import"./directive-Ctav8iJK.js";import"./index-BiJ2x1XQ.js";import"./formfieldwrapper.component-B65xujyc.js";import"./formfieldwrapper.constants-BUOm1379.js";import"./DataAriaLabelMixin-DW9o9iLu.js";import"./FormInternalsMixin-C5aGezV6.js";import"./query-BPxBhMfF.js";import"./input.constants-DS4Cl8ZY.js";import"./index-Cy9E-KWp.js";import"./CaptureDestroyEventForChildElement-E7-Sk0hM.js";import"./listitem.component-Tgl2nBVV.js";import"./query-assigned-elements-uEuc3rg8.js";import"./ListNavigationMixin-Cyq072y6.js";const be=[xe`
    :host {
      display: block;
      position: relative;
    }

    :host::part(container) {
      display: flex;
      align-items: baseline;
    }

    :host::part(typewriter-hidden) {
      display: none;
    }
  `],Ee=we.constructTagName("typewriter"),m={VERY_SLOW:240,SLOW:120,NORMAL:60,FAST:20,VERY_FAST:1},a={TYPE:R.TYPE,TEXT_ELEMENT_TAGNAME:R.TEXT_ELEMENT_TAGNAME,CSS_PART_TEXT:"text",CSS_PART_CONTAINER:"container",CSS_PART_HIDDEN:"typewriter-hidden",CHILDREN:"",SPEED:"normal",CUSTOM_EVENT:{TYPING_COMPLETE:"typing-complete"}};var fe=Object.defineProperty,p=(e,t,n,i)=>{for(var r=void 0,c=e.length-1,_;c>=0;c--)(_=e[c])&&(r=_(t,n,r)||r);return r&&fe(t,n,r),r};const I=class I extends D{constructor(){super(...arguments),this.type=a.TYPE,this.tagname=a.TEXT_ELEMENT_TAGNAME,this.speed=a.SPEED,this.maxQueueSize=Number.MAX_SAFE_INTEGER,this.displayedText="",this.originalText="",this.currentIndex=0,this.typingTimeout=null,this.pendingTimeouts=new Set,this.textChunkQueue=[],this.previousTextContent="",this.typingComplete=!0}connectedCallback(){super.connectedCallback(),this.createTimeout(()=>{this.captureAndProcessContent()},0)}disconnectedCallback(){this.clearTypingAnimation(),this.clearAllTimeouts(),super.disconnectedCallback()}createTimeout(t,n){const i=window.setTimeout(()=>{this.pendingTimeouts.delete(i),t()},n);return this.pendingTimeouts.add(i),i}clearAllTimeouts(){this.pendingTimeouts.forEach(t=>clearTimeout(t)),this.pendingTimeouts.clear()}clearQueue(){this.textChunkQueue.length=0}addTextChunk(t,n,i){t&&(this.maxQueueSize<Number.MAX_SAFE_INTEGER&&this.textChunkQueue.length>=this.maxQueueSize&&this.textChunkQueue.splice(0,this.textChunkQueue.length-this.maxQueueSize+1),this.textChunkQueue.push({text:t,speed:n,instant:i}),this.processChunkQueue())}addInstantTextChunk(t){this.addTextChunk(t,void 0,!0)}processChunkQueue(){this.textChunkQueue.length>0&&this.processNextChunk()}processNextChunk(){if(this.textChunkQueue.length===0)return;const t=this.textChunkQueue.shift(),n=this.speed;t.speed!==void 0&&(this.speed=t.speed),this.originalText+=t.text,this.typingComplete=!1,t.instant?(this.displayedText=this.originalText,this.currentIndex=this.originalText.length,this.typingComplete=!0,this.requestUpdate(),t.speed!==void 0&&(this.speed=n),this.textChunkQueue.length>0?this.createTimeout(()=>{this.processNextChunk()},0):this.dispatchEvent(new CustomEvent(a.CUSTOM_EVENT.TYPING_COMPLETE,{bubbles:!0,composed:!0}))):this.startTypingAnimation(()=>{t.speed!==void 0&&(this.speed=n),this.textChunkQueue.length>0?this.createTimeout(()=>{this.processNextChunk()},0):this.dispatchEvent(new CustomEvent(a.CUSTOM_EVENT.TYPING_COMPLETE,{bubbles:!0,composed:!0}))})}getTypingDelayMs(){const t=this.speed;switch(t){case"slow":return m.SLOW;case"fast":return m.FAST;case"very-slow":return m.VERY_SLOW;case"very-fast":return m.VERY_FAST;case"normal":return m.NORMAL;default:{const n=parseInt(t,10);return Number.isNaN(n)?m.NORMAL:Math.max(10,n)}}}updated(t){super.updated(t),t.has("speed")&&!this.typingComplete&&this.textChunkQueue.length===0&&this.startTypingAnimation()}captureAndProcessContent(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("slot");if(!t)return;const n=t.assignedNodes().filter(r=>r.nodeType===Node.TEXT_NODE||r.nodeType===Node.ELEMENT_NODE).map(r=>r.textContent||"").join("");n!==this.previousTextContent&&(this.displayedText===""||!n.includes(this.displayedText)?(this.originalText=n,this.displayedText="",this.currentIndex=0,this.typingComplete=!1):(this.originalText=n,this.typingComplete=!1),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{content:this.originalText,isTyping:!this.typingComplete}})),this.previousTextContent=n,this.startTypingAnimation())}startTypingAnimation(t){if(this.clearTypingAnimation(),this.displayedText===this.originalText){this.typingComplete=!0,t&&this.createTimeout(()=>{t()},0);return}this.currentIndex=this.displayedText.length,this.typingComplete=!1;const n=()=>{if(this.currentIndex<this.originalText.length){const i=this.originalText[this.currentIndex],r=this.displayedText+i;r!==this.displayedText&&(this.displayedText=r,this.requestUpdate()),this.currentIndex+=1,this.typingTimeout=window.setTimeout(n,this.getTypingDelayMs())}else this.clearTypingAnimation(),this.typingComplete=!0,t?this.createTimeout(()=>{t()},0):this.createTimeout(()=>{this.dispatchEvent(new CustomEvent(a.CUSTOM_EVENT.TYPING_COMPLETE,{bubbles:!0,composed:!0,detail:{finalContent:this.originalText}}))},0)};this.typingTimeout=window.setTimeout(n,this.getTypingDelayMs())}clearTypingAnimation(){this.typingTimeout!==null&&(clearTimeout(this.typingTimeout),this.typingTimeout=null)}handleSlotChange(){this.captureAndProcessContent()}render(){return s`
      <div part="${a.CSS_PART_CONTAINER}" aria-live="polite" aria-busy="${!this.typingComplete}">
        <mdc-text
          part="${a.CSS_PART_TEXT}"
          type="${this.type}"
          tagname="${A(this.tagname)}"
          aria-label="${this.originalText}"
          >${this.displayedText}</mdc-text
        >
        <slot @slotchange=${this.handleSlotChange} part="${a.CSS_PART_HIDDEN}"></slot>
      </div>
    `}};I.styles=[...D.styles,...be];let o=I;p([k({attribute:"type",reflect:!0,type:String})],o.prototype,"type");p([k({attribute:"tagname",reflect:!0,type:String})],o.prototype,"tagname");p([k({attribute:"speed",reflect:!0})],o.prototype,"speed");p([k({attribute:"max-queue-size",type:Number,reflect:!0})],o.prototype,"maxQueueSize");p([C()],o.prototype,"displayedText");p([C()],o.prototype,"originalText");p([C()],o.prototype,"typingComplete");o.register(Ee);var B=Object.freeze,ke=Object.defineProperty,Se=(e,t)=>B(ke(e,"raw",{value:B(e.slice())})),L;const{action:$}=__STORYBOOK_MODULE_ACTIONS__,Ae=e=>s`
  <mdc-typewriter
    @change="${$("change")}"
    @typing-complete="${$("typing-complete")}"
    type="${e.type}"
    tagname="${A(e.tagname)}"
    speed="${e.speed}"
    max-queue-size="${A(e["max-queue-size"])}"
    >${e.children}</mdc-typewriter
  >
`,ut={title:"Widgets/typewriter",tags:["autodocs"],component:"mdc-typewriter",render:Ae,argTypes:{children:{control:"text",description:'Children (passed into "default" slot)'},type:{control:"select",options:Object.values(d)},tagname:{control:"select",options:Object.values(S)},speed:{control:"text",description:'Speed of typewriter effect. Use preset values ("slow", "normal", "fast", "very-slow", "very-fast") or numeric strings ("100", "50", etc.) in milliseconds per character.'},"max-queue-size":{control:{type:"number",min:1,max:1e3,step:1},description:"Maximum number of text chunks in queue before dropping oldest chunks. Set to high value for unlimited."},...Te,...ve}},l={args:{type:a.TYPE,tagname:null,speed:a.SPEED,children:"The quick brown fox jumps over the lazy dog"}},u={args:{type:d.HEADING_LARGE_BOLD,tagname:S.H2,speed:"slow",children:"This types more slowly for emphasis"}},y={args:{type:d.BODY_MIDSIZE_MEDIUM,tagname:S.P,speed:"fast",children:"This types very quickly! Almost like someone who is excited about something!"}},h={render:()=>s`
    <div>
      <mdc-typewriter
        id="custom-speed-typewriter"
        type="${d.BODY_LARGE_REGULAR}"
        tagname="${S.P}"
        speed="100"
      >
        This uses a custom speed value of 100ms per character.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("custom-speed-typewriter");e&&(e.textContent="This uses a custom speed value of 100ms per character.",e.speed="100")}}
        >
          Reset
        </mdc-button>
      </div>
    </div>
  `},g={render:()=>s`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Dynamic Speed Adjustment</mdc-text>
      <mdc-text type="body-large-regular" tagname="p">
        Changing the speed property affects the remaining characters of the current animation. This demonstration shows
        how speed changes apply immediately to ongoing typing.
      </mdc-text>
      <mdc-typewriter id="dynamic-speed-typewriter" type="${d.BODY_LARGE_REGULAR}" speed="120">
        This text starts typing slowly (120ms per character)... but you can change the speed while it's typing!
      </mdc-typewriter>
      <div style="margin-top: 20px; display: flex; gap: 12px;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("dynamic-speed-typewriter");e&&(e.speed="20")}}
        >
          Speed Up Current Text
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=${()=>{const e=document.getElementById("dynamic-speed-typewriter");e&&(e.speed="200")}}
        >
          Slow Down Current Text
        </mdc-button>
        <mdc-button
          variant="tertiary"
          @click=${()=>{const e=document.getElementById("dynamic-speed-typewriter");e&&(e.speed="60")}}
        >
          Reset Speed
        </mdc-button>
      </div>
    </div>
  `},x={render:()=>s`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Chunked Text Addition</mdc-text>
      <mdc-text type="body-large-regular" tagname="p">
        Text chunks are processed sequentially. Each chunk can have its own speed setting that temporarily overrides the
        component's speed property, then restores the original speed defined in the base component when the chunk
        completes. Chunks don't queue - they start processing immediately when added which also dumps all elements in
        the queue behind it, then completes with animation.
      </mdc-text>
      <mdc-typewriter id="chunked-typewriter" type="${d.BODY_LARGE_REGULAR}" speed="60">
        Initial text.
      </mdc-typewriter>
      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("chunked-typewriter");e&&e.addTextChunk(" [Fast chunk at 20ms]","20")}}
        >
          Add Fast Chunk
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=${()=>{const e=document.getElementById("chunked-typewriter");e&&e.addTextChunk(" [Slow chunk at 150ms]","150")}}
        >
          Add Slow Chunk
        </mdc-button>
        <mdc-button
          variant="tertiary"
          @click=${()=>{const e=document.getElementById("chunked-typewriter");e&&e.addTextChunk(" [Normal speed chunk]")}}
        >
          Add Normal Chunk
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=${()=>{const e=document.getElementById("chunked-typewriter");e&&e.addInstantTextChunk(" [INSTANT]")}}
        >
          Add Instant Text
        </mdc-button>
      </div>
      <div style="margin-top: 10px;">
        <mdc-text type="body-small-medium" tagname="p">
          Notice: Each chunk's speed setting is temporary and doesn't affect the component's base speed property.
        </mdc-text>
      </div>
    </div>
  `},w={render:()=>s`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Accessibility Features Demo</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >This typewriter component includes accessibility features:</mdc-text
      >
      <mdc-list style="margin: 16px 0;">
        <mdc-listitem>Screen readers announce the complete text</mdc-listitem>
        <mdc-listitem>Uses <code>aria-live="polite"</code> for dynamic updates</mdc-listitem>
        <mdc-listitem>Shows <code>aria-busy</code> during typing animation</mdc-listitem>
        <mdc-listitem>Cursor is hidden from screen readers with <code>aria-hidden</code></mdc-listitem>
      </mdc-list>

      <mdc-typewriter type="${d.BODY_LARGE_REGULAR}" speed="normal" id="dynamic-typewriter-a11y">
        This text demonstrates accessible typewriter functionality. Screen readers will announce the complete text
        rather than character by character.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("dynamic-typewriter-a11y");e&&(e.textContent+=" And now some additional text gets added!")}}
        >
          Add more text
        </mdc-button>
      </div>
    </div>
  `},T={render:()=>s`
    <div>
      <mdc-typewriter id="dynamic-typewriter" type="${d.BODY_LARGE_REGULAR}" speed="normal">
        Initial text that will be typed out.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("dynamic-typewriter");e&&(e.textContent+=" And now some additional text gets added!")}}
        >
          Add more text
        </mdc-button>
      </div>
    </div>
  `},v={render:()=>s(L||(L=Se([`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Dynamic Text + Speed Control</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"> This demo shows two different ways to control speed: </mdc-text>
      <mdc-list style="margin: 16px 0;">
        <mdc-listitem
          ><strong>Add Text:</strong> Adds a chunk with temporary speed (restores original speed after)</mdc-listitem
        >
        <mdc-listitem
          ><strong>Change Speed:</strong> Changes the component's base speed property (affects remaining
          text)</mdc-listitem
        >
      </mdc-list>

      <mdc-typewriter id="dynamic-combined-typewriter" type="`,`" speed="60">
        Welcome to the interactive typewriter!
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <mdc-input
          id="custom-text-input"
          type="text"
          placeholder="Enter text to add..."
          style="flex: 1; min-width: 200px;"
        ></mdc-input>

        <mdc-select id="speed-selector" style="min-width: 150px;">
          <mdc-selectlistbox>
            <mdc-option value="1" label="Very Fast"></mdc-option>
            <mdc-option value="20" label="Fast (20ms)"></mdc-option>
            <mdc-option value="60" label="Normal (60ms)" selected></mdc-option>
            <mdc-option value="120" label="Slow (120ms)"></mdc-option>
            <mdc-option value="200" label="Very Slow (200ms)"></mdc-option>
            <mdc-option value="custom" label="Custom..."></mdc-option>
          </mdc-selectlistbox>
        </mdc-select>

        <mdc-input
          id="custom-speed-input"
          type="number"
          placeholder="Custom ms"
          min="10"
          max="1000"
          step="10"
          style="width: 100px; display: none;"
        ></mdc-input>

        <mdc-button
          variant="primary"
          @click=`,`
        >
          Add Text (Temporary Speed)
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=`,`
        >
          Change Base Speed
        </mdc-button>
      </div>

      <div style="margin-top: 15px;">
        <mdc-text type="body-small-medium" tagname="span">Quick Actions:</mdc-text>
        <div style="display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap;">
          <mdc-button
            variant="tertiary"
            @click=`,`
          >
            Add Fast Chunk
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=`,`
          >
            Add Slow Chunk
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=`,`
          >
            Change Base + Add
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=`,`
          >
            Reset
          </mdc-button>
        </div>
      </div>

      <script>
        // Handle custom speed input visibility
        document.addEventListener('DOMContentLoaded', () => {
          const speedSelector = document.getElementById('speed-selector');
          const customSpeedInput = document.getElementById('custom-speed-input');

          if (speedSelector && customSpeedInput) {
            speedSelector.addEventListener('change', (e: Event) => {
              const target = e.target as HTMLSelectElement;
              if (target.value === 'custom') {
                customSpeedInput.style.display = 'block';
              } else {
                customSpeedInput.style.display = 'none';
              }
            });
          }
        });
      <\/script>
    </div>
  `])),d.BODY_LARGE_REGULAR,()=>{const e=document.getElementById("dynamic-combined-typewriter"),t=document.getElementById("custom-text-input"),n=document.getElementById("speed-selector"),i=document.getElementById("custom-speed-input");if(e&&t&&n){const r=t.value.trim();if(!r)return;let c=n.value;n.value==="custom"&&i.value&&(c=i.value),e.addTextChunk(` ${r}`,c),t.value=""}},()=>{const e=document.getElementById("dynamic-combined-typewriter"),t=document.getElementById("speed-selector"),n=document.getElementById("custom-speed-input");if(e&&t){let i=t.value;t.value==="custom"&&n.value&&(i=n.value),e.speed=i}},()=>{const e=document.getElementById("dynamic-combined-typewriter");e&&e.addTextChunk(" 🚀 Super fast chunk!","15")},()=>{const e=document.getElementById("dynamic-combined-typewriter");e&&e.addTextChunk(" This chunk types slowly to demonstrate temporary speed override.","150")},()=>{const e=document.getElementById("dynamic-combined-typewriter");e&&(e.speed="20",e.addTextChunk(" Base speed changed to fast!"))},()=>{const e=document.getElementById("dynamic-combined-typewriter");e&&(e.textContent="Reset! Ready for new content.",e.speed="60")})},b={render:()=>s`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Instant Text Addition</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Demonstrate instant text that bypasses the typing animation:</mdc-text
      >

      <mdc-typewriter id="instant-typewriter" type="${d.BODY_LARGE_REGULAR}" speed="normal">
        This text types normally...
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("instant-typewriter");e&&e.addInstantTextChunk(" INSTANT TEXT!")}}
        >
          Add Instant Text
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=${()=>{const e=document.getElementById("instant-typewriter");e&&e.addTextChunk(" And back to typing...",80)}}
        >
          Add Animated Text
        </mdc-button>

        <mdc-button
          variant="tertiary"
          @click=${()=>{const e=document.getElementById("instant-typewriter");e&&e.addTextChunk(" Also instant!",void 0,!0)}}
        >
          Add Instant (Parameter)
        </mdc-button>
      </div>
    </div>
  `},E={render:()=>s`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Mixed Instant & Animated Chunks</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Demonstrate seamless mixing of instant and animated text chunks:</mdc-text
      >

      <mdc-typewriter id="mixed-typewriter" type="${d.BODY_LARGE_REGULAR}" speed="normal">
        Starting text...
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("mixed-typewriter");e&&(e.addTextChunk(" This will type out",50),e.addInstantTextChunk(" [INSTANT]"),e.addTextChunk(" then continue typing",30),e.addInstantTextChunk(" [INSTANT AGAIN]"),e.addTextChunk(" and finish normally.",60))}}
        >
          Add Mixed Sequence
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=${()=>{const e=document.getElementById("mixed-typewriter");e&&(e.textContent="Starting text...")}}
        >
          Reset
        </mdc-button>
      </div>
    </div>
  `},f={render:()=>s`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Rapid Updates Use Case</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Simulate rapid data updates where animation would be too slow:</mdc-text
      >

      <mdc-typewriter id="rapid-typewriter" type="${d.BODY_LARGE_REGULAR}" speed="fast"> Live Feed: </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${()=>{const e=document.getElementById("rapid-typewriter");e&&["User123 joined","New message received","System update complete","Alert: High traffic detected","Database sync finished"].forEach((n,i)=>{setTimeout(()=>{const r=new Date().toLocaleTimeString();e.addInstantTextChunk(`
[${r}] ${n}`)},i*500)})}}
        >
          Simulate Live Updates
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=${()=>{const e=document.getElementById("rapid-typewriter");e&&(e.textContent="Live Feed: ")}}
        >
          Clear Feed
        </mdc-button>
      </div>
    </div>
  `};var N,G,O;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    tagname: null,
    speed: DEFAULTS.SPEED,
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var M,P,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: TYPE.HEADING_LARGE_BOLD,
    tagname: VALID_TEXT_TAGS.H2,
    speed: 'slow',
    children: 'This types more slowly for emphasis'
  }
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var Y,F,q;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: TYPE.BODY_MIDSIZE_MEDIUM,
    tagname: VALID_TEXT_TAGS.P,
    speed: 'fast',
    children: 'This types very quickly! Almost like someone who is excited about something!'
  }
}`,...(q=(F=y.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var Q,H,V;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-typewriter
        id="custom-speed-typewriter"
        type="\${TYPE.BODY_LARGE_REGULAR}"
        tagname="\${VALID_TEXT_TAGS.P}"
        speed="100"
      >
        This uses a custom speed value of 100ms per character.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('custom-speed-typewriter') as any;
    if (typewriter) {
      typewriter.textContent = 'This uses a custom speed value of 100ms per character.';
      typewriter.speed = '100';
    }
  }}
        >
          Reset
        </mdc-button>
      </div>
    </div>
  \`
}`,...(V=(H=h.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var X,z,j;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Dynamic Speed Adjustment</mdc-text>
      <mdc-text type="body-large-regular" tagname="p">
        Changing the speed property affects the remaining characters of the current animation. This demonstration shows
        how speed changes apply immediately to ongoing typing.
      </mdc-text>
      <mdc-typewriter id="dynamic-speed-typewriter" type="\${TYPE.BODY_LARGE_REGULAR}" speed="120">
        This text starts typing slowly (120ms per character)... but you can change the speed while it's typing!
      </mdc-typewriter>
      <div style="margin-top: 20px; display: flex; gap: 12px;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
    if (typewriter) {
      typewriter.speed = '20'; // Much faster - affects remaining characters immediately
    }
  }}
        >
          Speed Up Current Text
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=\${() => {
    const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
    if (typewriter) {
      typewriter.speed = '200'; // Much slower - affects remaining characters immediately
    }
  }}
        >
          Slow Down Current Text
        </mdc-button>
        <mdc-button
          variant="tertiary"
          @click=\${() => {
    const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
    if (typewriter) {
      typewriter.speed = '60'; // Reset to normal
    }
  }}
        >
          Reset Speed
        </mdc-button>
      </div>
    </div>
  \`
}`,...(j=(z=g.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var W,Z,K;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Chunked Text Addition</mdc-text>
      <mdc-text type="body-large-regular" tagname="p">
        Text chunks are processed sequentially. Each chunk can have its own speed setting that temporarily overrides the
        component's speed property, then restores the original speed defined in the base component when the chunk
        completes. Chunks don't queue - they start processing immediately when added which also dumps all elements in
        the queue behind it, then completes with animation.
      </mdc-text>
      <mdc-typewriter id="chunked-typewriter" type="\${TYPE.BODY_LARGE_REGULAR}" speed="60">
        Initial text.
      </mdc-typewriter>
      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('chunked-typewriter') as any;
    if (typewriter) {
      typewriter.addTextChunk(' [Fast chunk at 20ms]', '20');
    }
  }}
        >
          Add Fast Chunk
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=\${() => {
    const typewriter = document.getElementById('chunked-typewriter') as any;
    if (typewriter) {
      typewriter.addTextChunk(' [Slow chunk at 150ms]', '150');
    }
  }}
        >
          Add Slow Chunk
        </mdc-button>
        <mdc-button
          variant="tertiary"
          @click=\${() => {
    const typewriter = document.getElementById('chunked-typewriter') as any;
    if (typewriter) {
      typewriter.addTextChunk(' [Normal speed chunk]');
    }
  }}
        >
          Add Normal Chunk
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=\${() => {
    const typewriter = document.getElementById('chunked-typewriter') as any;
    if (typewriter) {
      typewriter.addInstantTextChunk(' [INSTANT]');
    }
  }}
        >
          Add Instant Text
        </mdc-button>
      </div>
      <div style="margin-top: 10px;">
        <mdc-text type="body-small-medium" tagname="p">
          Notice: Each chunk's speed setting is temporary and doesn't affect the component's base speed property.
        </mdc-text>
      </div>
    </div>
  \`
}`,...(K=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var J,ee,te;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Accessibility Features Demo</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >This typewriter component includes accessibility features:</mdc-text
      >
      <mdc-list style="margin: 16px 0;">
        <mdc-listitem>Screen readers announce the complete text</mdc-listitem>
        <mdc-listitem>Uses <code>aria-live="polite"</code> for dynamic updates</mdc-listitem>
        <mdc-listitem>Shows <code>aria-busy</code> during typing animation</mdc-listitem>
        <mdc-listitem>Cursor is hidden from screen readers with <code>aria-hidden</code></mdc-listitem>
      </mdc-list>

      <mdc-typewriter type="\${TYPE.BODY_LARGE_REGULAR}" speed="normal" id="dynamic-typewriter-a11y">
        This text demonstrates accessible typewriter functionality. Screen readers will announce the complete text
        rather than character by character.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('dynamic-typewriter-a11y');
    if (typewriter) {
      typewriter.textContent += ' And now some additional text gets added!';
    }
  }}
        >
          Add more text
        </mdc-button>
      </div>
    </div>
  \`
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,re;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-typewriter id="dynamic-typewriter" type="\${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        Initial text that will be typed out.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('dynamic-typewriter');
    if (typewriter) {
      typewriter.textContent += ' And now some additional text gets added!';
    }
  }}
        >
          Add more text
        </mdc-button>
      </div>
    </div>
  \`
}`,...(re=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var de,ae,se;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Dynamic Text + Speed Control</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"> This demo shows two different ways to control speed: </mdc-text>
      <mdc-list style="margin: 16px 0;">
        <mdc-listitem
          ><strong>Add Text:</strong> Adds a chunk with temporary speed (restores original speed after)</mdc-listitem
        >
        <mdc-listitem
          ><strong>Change Speed:</strong> Changes the component's base speed property (affects remaining
          text)</mdc-listitem
        >
      </mdc-list>

      <mdc-typewriter id="dynamic-combined-typewriter" type="\${TYPE.BODY_LARGE_REGULAR}" speed="60">
        Welcome to the interactive typewriter!
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <mdc-input
          id="custom-text-input"
          type="text"
          placeholder="Enter text to add..."
          style="flex: 1; min-width: 200px;"
        ></mdc-input>

        <mdc-select id="speed-selector" style="min-width: 150px;">
          <mdc-selectlistbox>
            <mdc-option value="1" label="Very Fast"></mdc-option>
            <mdc-option value="20" label="Fast (20ms)"></mdc-option>
            <mdc-option value="60" label="Normal (60ms)" selected></mdc-option>
            <mdc-option value="120" label="Slow (120ms)"></mdc-option>
            <mdc-option value="200" label="Very Slow (200ms)"></mdc-option>
            <mdc-option value="custom" label="Custom..."></mdc-option>
          </mdc-selectlistbox>
        </mdc-select>

        <mdc-input
          id="custom-speed-input"
          type="number"
          placeholder="Custom ms"
          min="10"
          max="1000"
          step="10"
          style="width: 100px; display: none;"
        ></mdc-input>

        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
    const textInput = document.getElementById('custom-text-input') as HTMLInputElement;
    const speedSelector = document.getElementById('speed-selector') as HTMLSelectElement;
    const customSpeedInput = document.getElementById('custom-speed-input') as HTMLInputElement;
    if (typewriter && textInput && speedSelector) {
      const text = textInput.value.trim();
      if (!text) return;
      let speed = speedSelector.value;
      if (speedSelector.value === 'custom' && customSpeedInput.value) {
        speed = customSpeedInput.value;
      }

      // Add the text chunk with temporary speed (restores original speed after)
      typewriter.addTextChunk(\` \${text}\`, speed);

      // Clear the input
      textInput.value = '';
    }
  }}
        >
          Add Text (Temporary Speed)
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=\${() => {
    const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
    const speedSelector = document.getElementById('speed-selector') as HTMLSelectElement;
    const customSpeedInput = document.getElementById('custom-speed-input') as HTMLInputElement;
    if (typewriter && speedSelector) {
      let newSpeed = speedSelector.value;
      if (speedSelector.value === 'custom' && customSpeedInput.value) {
        newSpeed = customSpeedInput.value;
      }

      // Change the component's base speed property (affects remaining characters)
      typewriter.speed = newSpeed;
    }
  }}
        >
          Change Base Speed
        </mdc-button>
      </div>

      <div style="margin-top: 15px;">
        <mdc-text type="body-small-medium" tagname="span">Quick Actions:</mdc-text>
        <div style="display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap;">
          <mdc-button
            variant="tertiary"
            @click=\${() => {
    const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
    if (typewriter) {
      typewriter.addTextChunk(' 🚀 Super fast chunk!', '15');
    }
  }}
          >
            Add Fast Chunk
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=\${() => {
    const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
    if (typewriter) {
      typewriter.addTextChunk(' This chunk types slowly to demonstrate temporary speed override.', '150');
    }
  }}
          >
            Add Slow Chunk
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=\${() => {
    const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
    if (typewriter) {
      typewriter.speed = '20'; // Change base speed
      typewriter.addTextChunk(' Base speed changed to fast!');
    }
  }}
          >
            Change Base + Add
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=\${() => {
    const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
    if (typewriter) {
      typewriter.textContent = 'Reset! Ready for new content.';
      typewriter.speed = '60';
    }
  }}
          >
            Reset
          </mdc-button>
        </div>
      </div>

      <script>
        // Handle custom speed input visibility
        document.addEventListener('DOMContentLoaded', () => {
          const speedSelector = document.getElementById('speed-selector');
          const customSpeedInput = document.getElementById('custom-speed-input');

          if (speedSelector && customSpeedInput) {
            speedSelector.addEventListener('change', (e: Event) => {
              const target = e.target as HTMLSelectElement;
              if (target.value === 'custom') {
                customSpeedInput.style.display = 'block';
              } else {
                customSpeedInput.style.display = 'none';
              }
            });
          }
        });
      <\/script>
    </div>
  \`
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,pe,ce;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Instant Text Addition</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Demonstrate instant text that bypasses the typing animation:</mdc-text
      >

      <mdc-typewriter id="instant-typewriter" type="\${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        This text types normally...
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('instant-typewriter') as any;
    if (typewriter) {
      typewriter.addInstantTextChunk(' INSTANT TEXT!');
    }
  }}
        >
          Add Instant Text
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=\${() => {
    const typewriter = document.getElementById('instant-typewriter') as any;
    if (typewriter) {
      typewriter.addTextChunk(' And back to typing...', 80);
    }
  }}
        >
          Add Animated Text
        </mdc-button>

        <mdc-button
          variant="tertiary"
          @click=\${() => {
    const typewriter = document.getElementById('instant-typewriter') as any;
    if (typewriter) {
      // Using the instant parameter
      typewriter.addTextChunk(' Also instant!', undefined, true);
    }
  }}
        >
          Add Instant (Parameter)
        </mdc-button>
      </div>
    </div>
  \`
}`,...(ce=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var me,le,ue;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Mixed Instant & Animated Chunks</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Demonstrate seamless mixing of instant and animated text chunks:</mdc-text
      >

      <mdc-typewriter id="mixed-typewriter" type="\${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        Starting text...
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('mixed-typewriter') as any;
    if (typewriter) {
      // Add a sequence of mixed chunks
      typewriter.addTextChunk(' This will type out', 50);
      typewriter.addInstantTextChunk(' [INSTANT]');
      typewriter.addTextChunk(' then continue typing', 30);
      typewriter.addInstantTextChunk(' [INSTANT AGAIN]');
      typewriter.addTextChunk(' and finish normally.', 60);
    }
  }}
        >
          Add Mixed Sequence
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=\${() => {
    const typewriter = document.getElementById('mixed-typewriter') as any;
    if (typewriter) {
      typewriter.textContent = 'Starting text...';
    }
  }}
        >
          Reset
        </mdc-button>
      </div>
    </div>
  \`
}`,...(ue=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ye,he,ge;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => html\`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Rapid Updates Use Case</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Simulate rapid data updates where animation would be too slow:</mdc-text
      >

      <mdc-typewriter id="rapid-typewriter" type="\${TYPE.BODY_LARGE_REGULAR}" speed="fast"> Live Feed: </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=\${() => {
    const typewriter = document.getElementById('rapid-typewriter') as any;
    if (typewriter) {
      // Simulate rapid live updates
      const messages = ['User123 joined', 'New message received', 'System update complete', 'Alert: High traffic detected', 'Database sync finished'];
      messages.forEach((message, index) => {
        setTimeout(() => {
          const timestamp = new Date().toLocaleTimeString();
          typewriter.addInstantTextChunk(\`\\n[\${timestamp}] \${message}\`);
        }, index * 500);
      });
    }
  }}
        >
          Simulate Live Updates
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=\${() => {
    const typewriter = document.getElementById('rapid-typewriter') as any;
    if (typewriter) {
      typewriter.textContent = 'Live Feed: ';
    }
  }}
        >
          Clear Feed
        </mdc-button>
      </div>
    </div>
  \`
}`,...(ge=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const yt=["Example","SlowTyping","FastTyping","CustomSpeed","DynamicSpeedDemo","ChunkedTextDemo","AccessibilityDemo","DynamicExample","DynamicTextAndSpeedDemo","InstantTextDemo","MixedChunksDemo","RapidUpdatesDemo"];export{w as AccessibilityDemo,x as ChunkedTextDemo,h as CustomSpeed,T as DynamicExample,g as DynamicSpeedDemo,v as DynamicTextAndSpeedDemo,l as Example,y as FastTyping,b as InstantTextDemo,E as MixedChunksDemo,f as RapidUpdatesDemo,u as SlowTyping,yt as __namedExportsOrder,ut as default};
