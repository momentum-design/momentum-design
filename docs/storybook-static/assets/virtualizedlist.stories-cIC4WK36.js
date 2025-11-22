import"./index-gOmj4Z12.js";import{R as Y,$ as m,E as b,k as o,h as H,n as d}from"./iframe-BCanoCRe.js";import{c as Z,s as X}from"./commonArgTypes-BluK8w5L.js";import{Q as w}from"./repeat-Wg0KkxbI.js";import{i as U,K as Q}from"./ref-CbXH1gv9.js";import{e as ee,i as te,t as se}from"./directive-Ctav8iJK.js";import"./index-DbNE6rXY.js";import"./index-Dfh-k8IN.js";import"./index-Cm2lzNsz.js";import"./index-B0oP7N4V.js";import"./index-BuDVyBnb.js";import"./index-DnGGgs1q.js";import{a as x}from"./utils-Dd_sfl9-.js";import"./query-BPxBhMfF.js";import"./base-DIkkzJ-c.js";import"./DataAriaLabelMixin-BX3YsaxT.js";import"./TabIndexMixin-Dq2oczWO.js";import"./listitem.component-D1FnNj5r.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-BApzXNWy.js";import"./preload-helper-C1FmrZbK.js";import"./ListNavigationMixin-Tnu6GYrA.js";import"./CaptureDestroyEventForChildElement-1bk77Y1Q.js";import"./button.component-BPw-r-Mr.js";import"./buttonsimple.component-DA2CTyD3.js";import"./button.utils-rNW36Ji7.js";import"./index-jw-wyglp.js";import"./index-CMEhrORJ.js";import"./index-DTrDRi1E.js";import"./if-defined-BKKfBTgX.js";import"./IconNameMixin-CJWkmvfz.js";import"./index-DAsGZWAO.js";import"./index-B8PKvsLO.js";import"./index-ao5-DYXH.js";import"./popover.component-DoM1jhNA.js";import"./BackdropMixin-irboKES9.js";import"./index-C4Oxf6-h.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-DIxVLrIR.js";import"./formfieldwrapper.constants-CQWGpnDo.js";import"./input.constants-TKVW6Jka.js";import"./FormInternalsMixin-BozvY87n.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q="important",ie=" !"+q,ae=ee(class extends te{constructor(a){var e;if(super(a),a.type!==se.ATTRIBUTE||a.name!=="style"||((e=a.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return Object.keys(a).reduce((e,t)=>{const i=a[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(a,[e]){const{style:t}=a.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const s=e[i];if(s!=null){this.ft.add(i);const r=typeof s=="string"&&s.endsWith(ie);i.includes("-")||r?t.setProperty(i,r?s.slice(0,-11):s,r?q:""):t[i]=s}}return Y}});var re=Object.defineProperty,_=(a,e,t,i)=>{for(var s=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(s=n(e,t,s)||s);return s&&re(e,t,s),s};class h extends b{constructor(){super(...arguments),this.chatMessages={msg_001:{name:"Alice Johnson",message:"Hey team! Just finished the quarterly report. Ready for review."},msg_002:{name:"Bob Smith",message:"Great work Alice! I'll take a look this afternoon."},msg_003:{name:"Carol Davis",message:"Perfect timing. We can discuss it in tomorrow's standup."},msg_004:{name:"Alice Johnson",message:"Sounds good! Also, anyone know if the client meeting is still at 3pm?",parent:"msg_001"},msg_005:{name:"Bob Smith",message:"Yes, still at 3pm. I'll send the calendar invite.",parent:"msg_001"},msg_006:{name:"David Wilson",message:"Morning everyone! Can someone help me with the API documentation?"},msg_007:{name:"Emma Brown",message:"Good morning! What specific part are you struggling with?"},msg_008:{name:"David Wilson",message:"I need to understand the authentication flow for the new endpoints.",parent:"msg_006"},msg_009:{name:"Frank Miller",message:"I can help with that! Let me share the updated docs.",parent:"msg_006"},msg_010:{name:"Emma Brown",message:"Frank has the latest version, mine might be outdated.",parent:"msg_006"},msg_011:{name:"Carol Davis",message:"Quick question - has anyone tested the new deployment pipeline?"},msg_012:{name:"Bob Smith",message:"I ran it yesterday, worked perfectly! No issues on my end."},msg_013:{name:"Alice Johnson",message:"Same here. The performance improvements are noticeable."},msg_014:{name:"Carol Davis",message:"Excellent! Should we roll it out to staging then?",parent:"msg_011"},msg_015:{name:"Alice Johnson",message:"I think we're ready. Bob, what do you think?",parent:"msg_011"},msg_016:{name:"Bob Smith",message:"Let's do it! I can handle the deployment this evening.",parent:"msg_011"},msg_017:{name:"Frank Miller",message:"Just pushed the hotfix for the login issue. Please test when you can."},msg_018:{name:"Emma Brown",message:"Thanks Frank! I'll test it right now."},msg_019:{name:"David Wilson",message:"Login is working perfectly on my end now. Great job!"},msg_020:{name:"Frank Miller",message:"Awesome! The fix was simpler than I thought.",parent:"msg_017"},msg_021:{name:"Bob Smith",message:"Should we backport this to the release branch?",parent:"msg_017"},msg_022:{name:"Alice Johnson",message:"Yes, definitely. This was blocking our demo tomorrow.",parent:"msg_017"},msg_023:{name:"Emma Brown",message:"Hey team, reminder that code freeze is at 5pm today for the sprint."},msg_024:{name:"Carol Davis",message:"Perfect timing! I just submitted my last PR."},msg_025:{name:"David Wilson",message:"Mine is still in review. Carol, could you take a look?"},msg_026:{name:"Carol Davis",message:"Sure! Send me the link and I'll review it now.",parent:"msg_025"},msg_027:{name:"Bob Smith",message:"I can also help with reviews if needed.",parent:"msg_025"},msg_028:{name:"Frank Miller",message:"Does anyone know if the database migration is scheduled for tonight?"},msg_029:{name:"Emma Brown",message:"Yes, it's scheduled for 11pm. I'll be monitoring it."},msg_030:{name:"Alice Johnson",message:"I can stay online too in case we need to rollback."},msg_031:{name:"Frank Miller",message:"Great! I'll prepare the rollback scripts just in case.",parent:"msg_028"},msg_032:{name:"Bob Smith",message:"Should we create a war room channel for tonight?",parent:"msg_028"},msg_033:{name:"Emma Brown",message:"Good idea! I'll set it up and invite everyone.",parent:"msg_028"},msg_034:{name:"Grace Lee",message:"Just joined the team! Excited to work with everyone. 👋"},msg_035:{name:"Alice Johnson",message:"Welcome Grace! Great to have you on board!"},msg_036:{name:"Bob Smith",message:"Welcome! Let me know if you need help getting set up."},msg_037:{name:"Grace Lee",message:"Thanks everyone! Alice, could you help me with the development environment setup?",parent:"msg_034"},msg_038:{name:"Alice Johnson",message:"Absolutely! I'll send you the setup guide and we can pair tomorrow.",parent:"msg_034"},msg_039:{name:"Carol Davis",message:"Grace, I've added you to all the relevant Slack channels too.",parent:"msg_034"},msg_040:{name:"David Wilson",message:"Quick update: the API rate limiting is now live in production."},msg_041:{name:"Frank Miller",message:"Nice! Are we seeing any impact on performance?"},msg_042:{name:"Emma Brown",message:"Monitoring shows everything looks good so far."},msg_043:{name:"David Wilson",message:"Perfect! The new limits should prevent the timeout issues we had last week.",parent:"msg_040"},msg_044:{name:"Bob Smith",message:"Great work David! This was a critical fix.",parent:"msg_040"},msg_045:{name:"Carol Davis",message:"Thanks everyone! This has been a productive week."},msg_046:{name:"Grace Lee",message:"Looking forward to contributing next week!"},msg_047:{name:"Alice Johnson",message:"Have a great weekend everyone!"},msg_048:{name:"Frank Miller",message:"See you all on Monday! 🎉"},msg_049:{name:"Emma Brown",message:"One last thing - don't forget the retrospective is moved to Tuesday."},msg_050:{name:"Bob Smith",message:"Thanks for the reminder! I'll update my calendar."},msg_051:{name:"Carol Davis",message:"Same here. What time was it again?",parent:"msg_049"},msg_052:{name:"Emma Brown",message:"2pm, right after the sprint planning meeting.",parent:"msg_049"},msg_053:{name:"Grace Lee",message:"Should I join the retrospective even though I just started?",parent:"msg_049"},msg_054:{name:"Alice Johnson",message:"Absolutely! It's a great way to learn about our process.",parent:"msg_049"}},this.listItems=this.getOrderedMessageKeys(),this.virtualData={virtualItems:[]},this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:e=>this.listItems[e]},this.textareaValue="",this.messageCounter=54,this.textareaRef=U(),this.randomMessages=["Just finished reviewing the latest pull request.","The build is now passing on all environments.","Quick reminder about tomorrow's team meeting.","I've updated the documentation with the latest changes.","The performance metrics look great this week!","Does anyone have time to pair on this feature?","Just deployed the hotfix to production.","The client feedback has been very positive.","I'll be working from home tomorrow.","Great work on the sprint demo today!","The new feature is ready for QA testing.","Coffee break anyone? ☕","The integration tests are now automated.","Thanks for the code review feedback!","The database migration completed successfully."],this.teamMembers=["Alice Johnson","Bob Smith","Carol Davis","David Wilson","Emma Brown","Frank Miller","Grace Lee"],this.handleTextareaKeyDown=e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.sendMessage())},this.handleTextareaInput=e=>{const t=e.target;this.textareaValue=t.value},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}getOrderedMessageKeys(){const e=Object.keys(this.chatMessages),t=e.filter(s=>!this.chatMessages[s].parent),i=[];return t.forEach(s=>{i.push(s);const r=e.filter(n=>this.chatMessages[n].parent===s);i.push(...r)}),i}connectedCallback(){super.connectedCallback(),this.startRandomMessageTimer()}disconnectedCallback(){super.disconnectedCallback(),this.stopRandomMessageTimer()}startRandomMessageTimer(){this.randomMessageTimer=window.setInterval(()=>{this.addRandomMessage()},5e3)}stopRandomMessageTimer(){this.randomMessageTimer&&(clearInterval(this.randomMessageTimer),this.randomMessageTimer=void 0)}addRandomMessage(){const e=this.randomMessages[Math.floor(Math.random()*this.randomMessages.length)],t=this.teamMembers[Math.floor(Math.random()*this.teamMembers.length)],i=`msg_${String(this.messageCounter+1).padStart(3,"0")}`;let s;const r=Object.keys(this.chatMessages).filter(n=>!this.chatMessages[n].parent).slice(-10);r.length>0&&(s=r[Math.floor(Math.random()*r.length)]),this.messageCounter+=1,this.chatMessages={...this.chatMessages,[i]:{name:t,message:e,...s&&{parent:s}}}}sendMessage(){if(this.textareaValue.trim()){const e=`msg_${String(this.messageCounter+1).padStart(3,"0")}`;if(this.messageCounter+=1,this.chatMessages={...this.chatMessages,[e]:{name:"You",message:this.textareaValue.trim()}},this.textareaValue="",this.textareaRef.value){const t=this.textareaRef.value.querySelector("textarea");t&&(t.value="",t.focus())}}}update(e){super.update(e),e.has("chatMessages")&&(this.listItems=this.getOrderedMessageKeys(),this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:t=>this.listItems[t]})}generateListItem({index:e}){const t=this.chatMessages[this.listItems[e]];return o`
      <mdc-listitem data-index=${e}>
        <div
          slot="content"
          style=${ae({display:"flex",gap:"0.5rem","align-items":"center",...t.parent?{"margin-left":"1rem"}:{}})}
        >
          <mdc-avatar
            initials=${t.name.split(" ").map(i=>i[0]).join("")}
          ></mdc-avatar>
          <mdc-text tagname="span">${t.message}</mdc-text>
        </div>
      </mdc-listitem>
    `}createRenderRoot(){return this}render(){return o`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.listItems.length-1}
          scroll-anchoring
        >
          ${w(this.virtualData.virtualItems,({key:e})=>e,this.generateListItem.bind(this))}
        </mdc-virtualizedlist>
        <!-- Start AI-Assisted -->
        <div class="chat-input-container">
          <mdc-textarea
            ${Q(this.textareaRef)}
            placeholder="Type a message... (Press Enter to send, Shift+Enter for new line)"
            .value=${this.textareaValue}
            @input=${this.handleTextareaInput}
            @keydown=${this.handleTextareaKeyDown}
            resize="none"
            rows="2"
          ></mdc-textarea>
          <mdc-button @click=${this.sendMessage} variant="primary" ?disabled=${!this.textareaValue.trim()}>
            Send
          </mdc-button>
        </div>
        <!-- End AI-Assisted -->
      </div>
      <style>
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: min(100%, 600px);
          display: flex;
          flex-direction: column;
        }

        /* Start AI-Assisted */
        .chat-input-container {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem;
          border-top: 1px solid var(--mds-color-theme-outline-secondary-normal);
          align-items: flex-end;
        }

        .chat-input-container mdc-textarea {
          flex: 1;
        }
        /* End AI-Assisted */
      </style>
    `}}_([m()],h.prototype,"chatMessages");_([m()],h.prototype,"virtualData");_([m()],h.prototype,"virtualizerProps");_([m()],h.prototype,"textareaValue");h.register("mdc-virtualizedlist-chat-example");var ne=Object.defineProperty,$=(a,e,t,i)=>{for(var s=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(s=n(e,t,s)||s);return s&&ne(e,t,s),s};class z extends b{constructor(){super(...arguments),this.listItems=new Array(20).fill(!0).map((e,t)=>`list item number ${t}`),this.virtualData={virtualItems:[]},this.virtualizerProps={count:0,estimateSize:()=>0,getItemKey:e=>this.listItems[e]},this.counter=this.listItems.length,this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}connectedCallback(){super.connectedCallback(),this.updateVirtualProps()}generateListItem(e,t){return o`
      <mdc-listitem data-index=${e} label=${t}>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem(0,5)}>Add 5 At Top</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem(e)}>Add Above</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem(e+1)}>Add Below</mdc-button>
          <mdc-button variant="primary" color="positive" @click=${()=>this.addItem()}>Add Last</mdc-button>
        </mdc-buttongroup>
        <mdc-buttongroup slot="trailing-controls">
          <mdc-button variant="primary" color="negative" @click=${()=>this.removeItem(e)}>Remove This</mdc-button>
          <mdc-button variant="primary" color="negative" @click=${()=>this.removeItem(e-1)}
            >Remove Above</mdc-button
          >
          <mdc-button variant="primary" color="negative" @click=${()=>this.removeItem(e+1)}
            >Remove Below</mdc-button
          >
        </mdc-buttongroup>
      </mdc-listitem>
    `}addItem(e,t=1){const i=new Array(t).fill(!0).map(()=>{const s=`list item number ${this.counter}`;return this.counter+=1,s});e===void 0?this.listItems=[...this.listItems,...i]:this.listItems=[...this.listItems.slice(0,e),...i,...this.listItems.slice(e,this.listItems.length)],this.updateVirtualProps()}removeItem(e){e===void 0?this.listItems=this.listItems.slice(0,-1):this.listItems=[...this.listItems.slice(0,e),...this.listItems.slice(e+1,this.listItems.length)],this.updateVirtualProps()}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>44,getItemKey:e=>this.listItems[e]}}render(){return o`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
          scroll-anchoring
        >
          ${w(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.generateListItem(e,this.listItems[e]))}
        </mdc-virtualizedlist>
      </div>
      <div style="margin-top: 1rem;">
        <div>Current List Size: <span data-test="counter">${this.listItems.length}</span></div>
        <div style="display: flex; gap: 0.25rem;">
          <mdc-button @click=${()=>this.removeItem()}>Remove Last</mdc-button>
        </div>
      </div>
      <style>
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: calc(100% - 200px);
        }
      </style>
    `}createRenderRoot(){return this}}$([m()],z.prototype,"listItems");$([m()],z.prototype,"virtualData");$([m()],z.prototype,"virtualizerProps");z.register("mdc-virtualizeddynamiclist");var oe=Object.defineProperty,S=(a,e,t,i)=>{for(var s=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(s=n(e,t,s)||s);return s&&oe(e,t,s),s};const C=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ","standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ","a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ","remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "," Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions ","of Lorem Ipsum."].join(" ").split(" "),p=(a,e)=>a+Math.floor(Math.random()*e);class k extends b{constructor(){super(...arguments),this.listItems=[],this.virtualData={virtualItems:[]},this.virtualizerProps={useAnimationFrameWithResizeObserver:!0,count:0,estimateSize:()=>36,getItemKey:e=>{var t;return(t=this.listItems[e])==null?void 0:t.key}},this.virtualizerRef=U(),this.counter=0,this.isClippyNext=!1,this.addChunks=()=>{var r,n;clearTimeout(this.timerId);const e=p(2,30);let t=new Array(e).fill(!0).map(()=>C[p(0,C.length-1)]).join(" ").replace(/ +/gm," ").trim();const i=p(0,10);t+=i>6?`.
`:"",t+=i>8?`
`:"";const s=(n=(r=this.listItems.at(-1))==null?void 0:r.data)==null?void 0:n.at(-1);(!s||s===`
`)&&(t=t.charAt(0).toUpperCase()+t.slice(1)),this.listItems[this.listItems.length-1].data+=`${t}`,this.requestUpdate(),this.timerId=setTimeout(this.addChunks,p(5,200))},this.onNext=async e=>{this.isClippyNext?(this.listItems.push({key:this.listItems.length.toString(),data:""}),this.addChunks()):(clearTimeout(this.timerId),this.counter+=1,this.listItems.push({key:this.listItems.length.toString(),data:`Question #${this.counter}`})),this.isClippyNext=!this.isClippyNext,this.virtualizerProps={...this.virtualizerProps,count:this.listItems.length},e&&(await this.updateComplete,this.virtualizerRef.value.scrollToIndex(this.listItems.length-1,{align:"end",behavior:"auto"}))},this.reset=()=>{clearTimeout(this.timerId),this.counter=0,this.isClippyNext=!1,this.listItems.length=0,this.virtualizerProps={...this.virtualizerProps,count:this.listItems.length}},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}connectedCallback(){super.connectedCallback(),this.updateVirtualProps(),this.reset()}disconnectedCallback(){super.disconnectedCallback(),this.reset()}generateListItem(e,t){return o`
      <mdc-listitem data-index=${e} label=${t}>
        <pre slot="content">${t}</pre>
      </mdc-listitem>
    `}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:e=>{var t;return(t=this.listItems[e])==null?void 0:t.key}}}render(){return o`
      <div class="vlist-dynamic-content--wrapper">
        <mdc-virtualizedlist
          ${Q(this.virtualizerRef)}
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
          observe-size-changes
          revert-list
          scroll-anchoring
        >
          ${this.listItems.length?w(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.generateListItem(e,this.listItems[e].data)):H}
        </mdc-virtualizedlist>
        <div style="margin-top: 1rem;">
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button @click=${()=>this.onNext(!0)}>Go to next message</mdc-button>
            <mdc-button @click=${()=>this.onNext(!1)}>Add next message</mdc-button>
            <mdc-button variant="secondary" @click=${this.reset}>Reset</mdc-button>
          </div>
        </div>
      </div>

      <style>
        .vlist-dynamic-content--wrapper {
          width: 100%;
          margin-block: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        mdc-virtualizedlist {
          width: 640px;
          height: 480px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1rem;
        }
        pre {
          text-wrap: auto;
        }
      </style>
    `}createRenderRoot(){return this}}S([m()],k.prototype,"listItems");S([m()],k.prototype,"virtualData");S([m()],k.prototype,"virtualizerProps");k.register("mdc-virtualizeddynamiclistcontent");var me=Object.defineProperty,c=(a,e,t,i)=>{for(var s=void 0,r=a.length-1,n;r>=0;r--)(n=a[r])&&(s=n(e,t,s)||s);return s&&me(e,t,s),s};class l extends b{constructor(){super(),this.virtualizerProps={count:100,estimateSize:()=>this.itemSize,getItemKey:e=>this.listItemTexts[e]},this.story="text",this.loop="false",this.itemSize=36,this.initialFocus=0,this.virtualData={virtualItems:[]},this.listItemTexts=new Array(this.virtualizerProps.count).fill(!0).map((e,t)=>`list item number ${t}`),this.handleVirtualItemsChange=e=>{this.virtualData=e.detail},this.onscroll=null}update(e){super.update(e),e.has("virtualizerProps")&&this.updateListItemTextArray(),e.has("itemSize")&&(this.virtualizerProps={...this.virtualizerProps,estimateSize:()=>this.itemSize})}connectedCallback(){var e;super.connectedCallback(),(e=this.virtualizerProps)!=null&&e.count&&this.updateListItemTextArray()}updateListItemTextArray(){var e;this.listItemTexts=new Array((e=this.virtualizerProps)==null?void 0:e.count).fill(!0).map((t,i)=>`list item number ${i}`)}renderItem(e){return this.story==="text"?o`<mdc-listitem data-index=${e} label="${this.listItemTexts[e]}"></mdc-listitem> `:this.story==="interactive"?o`
        <mdc-listitem data-index=${e}>
          <span slot="leading-text-primary-label">${this.listItemTexts[e]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `:this.story==="dynamic"?o`
        <mdc-listitem data-index=${e} style="--mdc-listitem-height: ${50+e%5*10}px">
          <span slot="leading-text-primary-label">${this.listItemTexts[e]}</span>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
        </mdc-listitem>
      `:o``}render(){return o`
      <div part="wrapper">
        <mdc-virtualizedlist
          @scroll=${this.onscroll}
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.initialFocus}
          loop=${this.loop}
        >
          ${w(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.renderItem(e))}
        </mdc-virtualizedlist>
      </div>
      <style>
        :host([story='text'])::part(wrapper) {
          width: 500px;
          height: 500px;
        }
        :host([story='interactive'])::part(wrapper) {
          width: 100%;
          height: 500px;
        }
        :host([story='dynamic'])::part(wrapper) {
          width: 100%;
          height: 500px;
        }
      </style>
    `}}c([d({type:Object,attribute:"virtualizerprops"})],l.prototype,"virtualizerProps");c([d({type:String})],l.prototype,"story");c([d({type:String,reflect:!0})],l.prototype,"loop");c([d({type:Number,reflect:!0,attribute:"item-size"})],l.prototype,"itemSize");c([d({type:Number,reflect:!0,attribute:"initial-focus"})],l.prototype,"initialFocus");c([m()],l.prototype,"virtualData");c([m()],l.prototype,"listItemTexts");l.register("mdc-virtualizedwrapper");const{action:le}=__STORYBOOK_MODULE_ACTIONS__,ce=a=>o` <mdc-virtualizedwrapper
    .virtualizerProps=${a.virtualizerProps}
    .onscroll=${le("scroll")}
    story=${a.story}
    initial-focus="${a["initial-focus"]||0}"
  ></mdc-virtualizedwrapper>`,Xe={title:"Components/virtualizedlist",tags:["autodocs"],component:"mdc-virtualizedlist",render:ce,argTypes:{...x(["virtualizerController","virtualizer","scrollElementRef","focusTrapRef","loop","role","itemsStore"]),...x(["story"]),...Z,...X}},u={args:{virtualizerProps:{count:200,estimateSize:()=>36,overscan:30},story:"text"}},g={args:{virtualizerProps:{count:200,estimateSize:()=>48},story:"interactive"}},v={argTypes:{...x(["initial-focus"])},args:{virtualizerProps:{count:200,estimateSize:()=>48},story:"interactive","initial-focus":199}},y={render:()=>o` <mdc-virtualizeddynamiclist></mdc-virtualizeddynamiclist>`},f={render:()=>o` <mdc-virtualizedlist-chat-example></mdc-virtualizedlist-chat-example>`},I={parameters:{docs:{description:{story:o`<p>AI chat like example to test revers list with dynamically changing content height.</p>
          <p>Every second message is an "AI" answer updated over time.</p>`}}},render:()=>o` <mdc-virtualizeddynamiclistcontent></mdc-virtualizeddynamiclistcontent>`};var M,A,T;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 36,
      overscan: 30
    },
    story: 'text'
  }
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var P,D,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 48
    },
    story: 'interactive'
  }
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,E,V;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['initial-focus'])
  },
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 48
    },
    story: 'interactive',
    'initial-focus': 199
  }
}`,...(V=(E=v.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var B,O,j;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:"{\n  render: () => html` <mdc-virtualizeddynamiclist></mdc-virtualizeddynamiclist>`\n}",...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var K,W,G;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:"{\n  render: () => html` <mdc-virtualizedlist-chat-example></mdc-virtualizedlist-chat-example>`\n}",...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,F,N;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\`<p>AI chat like example to test revers list with dynamically changing content height.</p>
          <p>Every second message is an "AI" answer updated over time.</p>\`
      }
    }
  },
  render: () => html\` <mdc-virtualizeddynamiclistcontent></mdc-virtualizeddynamiclistcontent>\`
}`,...(N=(F=I.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const et=["Example","Interactive","InteractiveStartAtBottom","Dynamic","Chat","DynamicContent"];export{f as Chat,y as Dynamic,I as DynamicContent,u as Example,g as Interactive,v as InteractiveStartAtBottom,et as __namedExportsOrder,Xe as default};
