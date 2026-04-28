import"./index-8qXjFyRc.js";import{r as le,a4 as l,C as h,k as n,h as me,n as m}from"./iframe-DDdyYKcM.js";import{c as de,s as ce}from"./commonArgTypes-BG7EqI50.js";import{Q as p}from"./repeat-CDJI2Q6t.js";import{i as ae,K as ne}from"./ref-T-rYMboG.js";import{e as he,i as pe,t as ue}from"./directive-Ctav8iJK.js";import"./index-BuvWClpG.js";import"./index-DTlKTNn7.js";import"./index-Dkhvg0JF.js";import"./index-CyGS63ow.js";import"./index-BE89OOzt.js";import"./index-BcuJJ30Q.js";import"./index-DnRxdKAY.js";import{h as M}from"./utils-B5QUENNQ.js";import"./list.component-Bq9O3iOM.js";import"./ListNavigationMixin-DIH_3lSQ.js";import"./KeyDownHandledMixin-D_BymDsx.js";import"./index-BhcY06jc.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BfNXnQA9.js";import"./CaptureDestroyEventForChildElement-DR5r7ZeO.js";import"./DataAriaLabelMixin-B3sLV5oj.js";import"./preload-helper-C1FmrZbK.js";import"./listitem.component-GrNkl9y9.js";import"./query-assigned-elements-jBL5EVTj.js";import"./DisabledMixin-xgzT86Kg.js";import"./button.component-3Cp68A6B.js";import"./buttonsimple.component-2qLehltN.js";import"./button.utils-rNW36Ji7.js";import"./index-SSEGGe-_.js";import"./index-DTrDRi1E.js";import"./if-defined-BbSBl4wr.js";import"./IconNameMixin-BMkvk5fD.js";import"./index-CN1l1ZDj.js";import"./index-CyNsFN6p.js";import"./index-D-XWXgEY.js";import"./popover.component-AncBSVYA.js";import"./BackdropMixin-DAdP3NzV.js";import"./popover.constants-C7NqURGA.js";import"./index-Dmlr0iWX.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-feyKecto.js";import"./formfieldwrapper.constants-Bvn-bJEY.js";import"./input.constants-CnK5P-ar.js";import"./FormInternalsMixin-C0VnpdlX.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe="important",ge=" !"+oe,ve=he(class extends pe{constructor(s){var e;if(super(s),s.type!==ue.ATTRIBUTE||s.name!=="style"||((e=s.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const r=s[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(s,[e]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(const r in e){const i=e[r];if(i!=null){this.ft.add(r);const a=typeof i=="string"&&i.endsWith(ge);r.includes("-")||a?t.setProperty(r,a?i.slice(0,-11):i,a?oe:""):t[r]=i}}return le}});var ye=Object.defineProperty,S=(s,e,t,r)=>{for(var i=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(i=o(e,t,i)||i);return i&&ye(e,t,i),i};class u extends h{constructor(){super(...arguments),this.chatMessages={msg_001:{name:"Alice Johnson",message:"Hey team! Just finished the quarterly report. Ready for review."},msg_002:{name:"Bob Smith",message:"Great work Alice! I'll take a look this afternoon."},msg_003:{name:"Carol Davis",message:"Perfect timing. We can discuss it in tomorrow's standup."},msg_004:{name:"Alice Johnson",message:"Sounds good! Also, anyone know if the client meeting is still at 3pm?",parent:"msg_001"},msg_005:{name:"Bob Smith",message:"Yes, still at 3pm. I'll send the calendar invite.",parent:"msg_001"},msg_006:{name:"David Wilson",message:"Morning everyone! Can someone help me with the API documentation?"},msg_007:{name:"Emma Brown",message:"Good morning! What specific part are you struggling with?"},msg_008:{name:"David Wilson",message:"I need to understand the authentication flow for the new endpoints.",parent:"msg_006"},msg_009:{name:"Frank Miller",message:"I can help with that! Let me share the updated docs.",parent:"msg_006"},msg_010:{name:"Emma Brown",message:"Frank has the latest version, mine might be outdated.",parent:"msg_006"},msg_011:{name:"Carol Davis",message:"Quick question - has anyone tested the new deployment pipeline?"},msg_012:{name:"Bob Smith",message:"I ran it yesterday, worked perfectly! No issues on my end."},msg_013:{name:"Alice Johnson",message:"Same here. The performance improvements are noticeable."},msg_014:{name:"Carol Davis",message:"Excellent! Should we roll it out to staging then?",parent:"msg_011"},msg_015:{name:"Alice Johnson",message:"I think we're ready. Bob, what do you think?",parent:"msg_011"},msg_016:{name:"Bob Smith",message:"Let's do it! I can handle the deployment this evening.",parent:"msg_011"},msg_017:{name:"Frank Miller",message:"Just pushed the hotfix for the login issue. Please test when you can."},msg_018:{name:"Emma Brown",message:"Thanks Frank! I'll test it right now."},msg_019:{name:"David Wilson",message:"Login is working perfectly on my end now. Great job!"},msg_020:{name:"Frank Miller",message:"Awesome! The fix was simpler than I thought.",parent:"msg_017"},msg_021:{name:"Bob Smith",message:"Should we backport this to the release branch?",parent:"msg_017"},msg_022:{name:"Alice Johnson",message:"Yes, definitely. This was blocking our demo tomorrow.",parent:"msg_017"},msg_023:{name:"Emma Brown",message:"Hey team, reminder that code freeze is at 5pm today for the sprint."},msg_024:{name:"Carol Davis",message:"Perfect timing! I just submitted my last PR."},msg_025:{name:"David Wilson",message:"Mine is still in review. Carol, could you take a look?"},msg_026:{name:"Carol Davis",message:"Sure! Send me the link and I'll review it now.",parent:"msg_025"},msg_027:{name:"Bob Smith",message:"I can also help with reviews if needed.",parent:"msg_025"},msg_028:{name:"Frank Miller",message:"Does anyone know if the database migration is scheduled for tonight?"},msg_029:{name:"Emma Brown",message:"Yes, it's scheduled for 11pm. I'll be monitoring it."},msg_030:{name:"Alice Johnson",message:"I can stay online too in case we need to rollback."},msg_031:{name:"Frank Miller",message:"Great! I'll prepare the rollback scripts just in case.",parent:"msg_028"},msg_032:{name:"Bob Smith",message:"Should we create a war room channel for tonight?",parent:"msg_028"},msg_033:{name:"Emma Brown",message:"Good idea! I'll set it up and invite everyone.",parent:"msg_028"},msg_034:{name:"Grace Lee",message:"Just joined the team! Excited to work with everyone. 👋"},msg_035:{name:"Alice Johnson",message:"Welcome Grace! Great to have you on board!"},msg_036:{name:"Bob Smith",message:"Welcome! Let me know if you need help getting set up."},msg_037:{name:"Grace Lee",message:"Thanks everyone! Alice, could you help me with the development environment setup?",parent:"msg_034"},msg_038:{name:"Alice Johnson",message:"Absolutely! I'll send you the setup guide and we can pair tomorrow.",parent:"msg_034"},msg_039:{name:"Carol Davis",message:"Grace, I've added you to all the relevant Slack channels too.",parent:"msg_034"},msg_040:{name:"David Wilson",message:"Quick update: the API rate limiting is now live in production."},msg_041:{name:"Frank Miller",message:"Nice! Are we seeing any impact on performance?"},msg_042:{name:"Emma Brown",message:"Monitoring shows everything looks good so far."},msg_043:{name:"David Wilson",message:"Perfect! The new limits should prevent the timeout issues we had last week.",parent:"msg_040"},msg_044:{name:"Bob Smith",message:"Great work David! This was a critical fix.",parent:"msg_040"},msg_045:{name:"Carol Davis",message:"Thanks everyone! This has been a productive week."},msg_046:{name:"Grace Lee",message:"Looking forward to contributing next week!"},msg_047:{name:"Alice Johnson",message:"Have a great weekend everyone!"},msg_048:{name:"Frank Miller",message:"See you all on Monday! 🎉"},msg_049:{name:"Emma Brown",message:"One last thing - don't forget the retrospective is moved to Tuesday."},msg_050:{name:"Bob Smith",message:"Thanks for the reminder! I'll update my calendar."},msg_051:{name:"Carol Davis",message:"Same here. What time was it again?",parent:"msg_049"},msg_052:{name:"Emma Brown",message:"2pm, right after the sprint planning meeting.",parent:"msg_049"},msg_053:{name:"Grace Lee",message:"Should I join the retrospective even though I just started?",parent:"msg_049"},msg_054:{name:"Alice Johnson",message:"Absolutely! It's a great way to learn about our process.",parent:"msg_049"}},this.listItems=this.getOrderedMessageKeys(),this.virtualData={virtualItems:[]},this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:e=>this.listItems[e]},this.textareaValue="",this.messageCounter=54,this.textareaRef=ae(),this.randomMessages=["Just finished reviewing the latest pull request.","The build is now passing on all environments.","Quick reminder about tomorrow's team meeting.","I've updated the documentation with the latest changes.","The performance metrics look great this week!","Does anyone have time to pair on this feature?","Just deployed the hotfix to production.","The client feedback has been very positive.","I'll be working from home tomorrow.","Great work on the sprint demo today!","The new feature is ready for QA testing.","Coffee break anyone? ☕","The integration tests are now automated.","Thanks for the code review feedback!","The database migration completed successfully."],this.teamMembers=["Alice Johnson","Bob Smith","Carol Davis","David Wilson","Emma Brown","Frank Miller","Grace Lee"],this.handleTextareaKeyDown=e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.sendMessage())},this.handleTextareaInput=e=>{const t=e.target;this.textareaValue=t.value},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}getOrderedMessageKeys(){const e=Object.keys(this.chatMessages),t=e.filter(i=>!this.chatMessages[i].parent),r=[];return t.forEach(i=>{r.push(i);const a=e.filter(o=>this.chatMessages[o].parent===i);r.push(...a)}),r}connectedCallback(){super.connectedCallback(),this.startRandomMessageTimer()}disconnectedCallback(){super.disconnectedCallback(),this.stopRandomMessageTimer()}startRandomMessageTimer(){this.randomMessageTimer=window.setInterval(()=>{this.addRandomMessage()},5e3)}stopRandomMessageTimer(){this.randomMessageTimer&&(clearInterval(this.randomMessageTimer),this.randomMessageTimer=void 0)}addRandomMessage(){const e=this.randomMessages[Math.floor(Math.random()*this.randomMessages.length)],t=this.teamMembers[Math.floor(Math.random()*this.teamMembers.length)],r=`msg_${String(this.messageCounter+1).padStart(3,"0")}`;let i;const a=Object.keys(this.chatMessages).filter(o=>!this.chatMessages[o].parent).slice(-10);a.length>0&&(i=a[Math.floor(Math.random()*a.length)]),this.messageCounter+=1,this.chatMessages={...this.chatMessages,[r]:{name:t,message:e,...i&&{parent:i}}}}sendMessage(){if(this.textareaValue.trim()){const e=`msg_${String(this.messageCounter+1).padStart(3,"0")}`;if(this.messageCounter+=1,this.chatMessages={...this.chatMessages,[e]:{name:"You",message:this.textareaValue.trim()}},this.textareaValue="",this.textareaRef.value){const t=this.textareaRef.value.querySelector("textarea");t&&(t.value="",t.focus())}}}update(e){super.update(e),e.has("chatMessages")&&(this.listItems=this.getOrderedMessageKeys(),this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:t=>this.listItems[t]})}generateListItem({index:e}){const t=this.chatMessages[this.listItems[e]];return n`
      <mdc-listitem data-index=${e}>
        <div
          slot="content"
          style=${ve({display:"flex",gap:"0.5rem","align-items":"center",...t.parent?{"margin-left":"1rem"}:{}})}
        >
          <mdc-avatar
            initials=${t.name.split(" ").map(r=>r[0]).join("")}
          ></mdc-avatar>
          <mdc-text tagname="span">${t.message}</mdc-text>
        </div>
      </mdc-listitem>
    `}createRenderRoot(){return this}render(){return n`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.listItems.length-1}
          scroll-anchoring
        >
          ${p(this.virtualData.virtualItems,({key:e})=>e,this.generateListItem.bind(this))}
        </mdc-virtualizedlist>
        <!-- Start AI-Assisted -->
        <div class="chat-input-container">
          <mdc-textarea
            ${ne(this.textareaRef)}
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
        mdc-virtualizedlist-chat-example {
          display: block;
          width: 100%;
          height: 100%;
          flex: 1 1 auto;
        }
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
    `}}S([l()],u.prototype,"chatMessages");S([l()],u.prototype,"virtualData");S([l()],u.prototype,"virtualizerProps");S([l()],u.prototype,"textareaValue");u.register("mdc-virtualizedlist-chat-example");var fe=Object.defineProperty,A=(s,e,t,r)=>{for(var i=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(i=o(e,t,i)||i);return i&&fe(e,t,i),i};class $ extends h{constructor(){super(...arguments),this.listItems=new Array(20).fill(!0).map((e,t)=>`list item number ${t}`),this.virtualData={virtualItems:[]},this.virtualizerProps={count:0,estimateSize:()=>0,getItemKey:e=>this.listItems[e]},this.counter=this.listItems.length,this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}connectedCallback(){super.connectedCallback(),this.updateVirtualProps()}generateListItem(e,t){return n`
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
    `}addItem(e,t=1){const r=new Array(t).fill(!0).map(()=>{const i=`list item number ${this.counter}`;return this.counter+=1,i});e===void 0?this.listItems=[...this.listItems,...r]:this.listItems=[...this.listItems.slice(0,e),...r,...this.listItems.slice(e,this.listItems.length)],this.updateVirtualProps()}removeItem(e){e===void 0?this.listItems=this.listItems.slice(0,-1):this.listItems=[...this.listItems.slice(0,e),...this.listItems.slice(e+1,this.listItems.length)],this.updateVirtualProps()}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>44,getItemKey:e=>this.listItems[e]}}render(){return n`
      <div id="VirtualizedDynamicList--wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
          scroll-anchoring
        >
          ${p(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.generateListItem(e,this.listItems[e]))}
        </mdc-virtualizedlist>
      </div>
      <div style="margin-top: 1rem;">
        <div>Current List Size: <span data-test="counter">${this.listItems.length}</span></div>
        <div style="display: flex; gap: 0.25rem;">
          <mdc-button @click=${()=>this.removeItem()}>Remove Last</mdc-button>
        </div>
      </div>
      <style>
        mdc-virtualizeddynamiclist {
          display: block;
          width: 100%;
          height: 100%;
          flex: 1 1 auto;
        }
        #VirtualizedDynamicList--wrapper {
          width: 100%;
          height: calc(100% - 200px);
        }
      </style>
    `}createRenderRoot(){return this}}A([l()],$.prototype,"listItems");A([l()],$.prototype,"virtualData");A([l()],$.prototype,"virtualizerProps");$.register("mdc-virtualizeddynamiclist");var be=Object.defineProperty,T=(s,e,t,r)=>{for(var i=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(i=o(e,t,i)||i);return i&&be(e,t,i),i};const D=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ","standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ","a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ","remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "," Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions ","of Lorem Ipsum."].join(" ").split(" "),v=(s,e)=>s+Math.floor(Math.random()*e);class C extends h{constructor(){super(...arguments),this.listItems=[],this.virtualData={virtualItems:[]},this.virtualizerProps={useAnimationFrameWithResizeObserver:!0,count:0,estimateSize:()=>36,getItemKey:e=>{var t;return(t=this.listItems[e])==null?void 0:t.key}},this.virtualizerRef=ae(),this.counter=0,this.isClippyNext=!1,this.addChunks=()=>{var a,o;clearTimeout(this.timerId);const e=v(2,30);let t=new Array(e).fill(!0).map(()=>D[v(0,D.length-1)]).join(" ").replace(/ +/gm," ").trim();const r=v(0,10);t+=r>6?`.
`:"",t+=r>8?`
`:"";const i=(o=(a=this.listItems.at(-1))==null?void 0:a.data)==null?void 0:o.at(-1);(!i||i===`
`)&&(t=t.charAt(0).toUpperCase()+t.slice(1)),this.listItems[this.listItems.length-1].data+=`${t}`,this.requestUpdate(),this.timerId=setTimeout(this.addChunks,v(5,200))},this.onNext=async e=>{this.isClippyNext?(this.listItems.push({key:this.listItems.length.toString(),data:""}),this.addChunks()):(clearTimeout(this.timerId),this.counter+=1,this.listItems.push({key:this.listItems.length.toString(),data:`Question #${this.counter}`})),this.isClippyNext=!this.isClippyNext,this.virtualizerProps={...this.virtualizerProps,count:this.listItems.length},e&&(await this.updateComplete,this.virtualizerRef.value.scrollToIndex(this.listItems.length-1,{align:"end",behavior:"auto"}))},this.reset=()=>{clearTimeout(this.timerId),this.counter=0,this.isClippyNext=!1,this.listItems.length=0,this.virtualizerProps={...this.virtualizerProps,count:this.listItems.length}},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail}}connectedCallback(){super.connectedCallback(),this.updateVirtualProps(),this.reset()}disconnectedCallback(){super.disconnectedCallback(),this.reset()}generateListItem(e,t){return n`
      <mdc-listitem data-index=${e} label=${t}>
        <pre slot="content">${t}</pre>
      </mdc-listitem>
    `}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>48,getItemKey:e=>{var t;return(t=this.listItems[e])==null?void 0:t.key}}}render(){return n`
      <div class="vlist-dynamic-content--wrapper">
        <mdc-virtualizedlist
          ${ne(this.virtualizerRef)}
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
          observe-size-changes
          revert-list
          scroll-anchoring
        >
          ${this.listItems.length?p(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.generateListItem(e,this.listItems[e].data)):me}
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
        mdc-virtualizeddynamiclistcontent {
          display: block;
          width: 100%;
          height: 100%;
          flex: 1 1 auto;
        }
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
    `}createRenderRoot(){return this}}T([l()],C.prototype,"listItems");T([l()],C.prototype,"virtualData");T([l()],C.prototype,"virtualizerProps");C.register("mdc-virtualizeddynamiclistcontent");var Ie=Object.defineProperty,c=(s,e,t,r)=>{for(var i=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(i=o(e,t,i)||i);return i&&Ie(e,t,i),i};class d extends h{constructor(){super(),this.virtualizerProps={count:100,estimateSize:()=>this.itemSize,getItemKey:e=>this.listItemTexts[e]},this.story="text",this.loop="false",this.itemSize=36,this.initialFocus=0,this.virtualData={virtualItems:[]},this.listItemTexts=new Array(this.virtualizerProps.count).fill(!0).map((e,t)=>`list item number ${t}`),this.handleVirtualItemsChange=e=>{this.virtualData=e.detail},this.onscroll=null}update(e){super.update(e),e.has("virtualizerProps")&&this.updateListItemTextArray(),e.has("itemSize")&&(this.virtualizerProps={...this.virtualizerProps,estimateSize:()=>this.itemSize})}connectedCallback(){var e;super.connectedCallback(),(e=this.virtualizerProps)!=null&&e.count&&this.updateListItemTextArray()}updateListItemTextArray(){var e;this.listItemTexts=new Array((e=this.virtualizerProps)==null?void 0:e.count).fill(!0).map((t,r)=>`list item number ${r}`)}renderItem(e){return this.story==="text"?n`<mdc-listitem data-index=${e} label="${this.listItemTexts[e]}"></mdc-listitem> `:this.story==="interactive"?n`
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
      `:this.story==="dynamic"?n`
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
      `:n``}createRenderRoot(){return this}render(){return n`
      <div id="VirtualizedWrapper--wrapper">
        <mdc-virtualizedlist
          @scroll=${this.onscroll}
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.initialFocus}
          loop=${this.loop}
        >
          ${p(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.renderItem(e))}
        </mdc-virtualizedlist>
      </div>
      <style>
        mdc-virtualizedwrapper{
          display: block;
          width: 100%;
          height: 100%;
          flex: 1 1 auto;
        }
        #VirtualizedWrapper--wrapper {
          ${{text:`
              width: 500px;
              height: 500px;
            `,interactive:`
              width: 100%;
              height: 500px;
            `,dynamic:`
              width: 100%;
              height: 500px;
            `}[this.story]}
        }
      </style>
    `}}c([m({type:Object,attribute:"virtualizerprops"})],d.prototype,"virtualizerProps");c([m({type:String})],d.prototype,"story");c([m({type:String,reflect:!0})],d.prototype,"loop");c([m({type:Number,reflect:!0,attribute:"item-size"})],d.prototype,"itemSize");c([m({type:Number,reflect:!0,attribute:"initial-focus"})],d.prototype,"initialFocus");c([l()],d.prototype,"virtualData");c([l()],d.prototype,"listItemTexts");d.register("mdc-virtualizedwrapper");var we=Object.defineProperty,P=(s,e,t,r)=>{for(var i=void 0,a=s.length-1,o;a>=0;a--)(o=s[a])&&(i=o(e,t,i)||i);return i&&we(e,t,i),i};const L=10,ze=2;function _e(){const s=[];for(let e=0;e<ze;e+=1){s.push({type:"header",label:`Group ${e+1}`,key:`header-${e}`});for(let t=0;t<L;t+=1){const r=e*L+t;s.push({type:"item",label:`List item number ${r+1}`,key:`item-${r}`})}}return s}const y=_e();class g extends h{constructor(){super(),this.virtualizerProps={count:y.length,estimateSize:()=>36,getItemKey:e=>{var t;return((t=y[e])==null?void 0:t.key)??String(e)},isItemNavigable:e=>y[e].type==="item"},this.loop="false",this.initialFocus=0,this.virtualData={virtualItems:[]},this.handleVirtualItemsChange=e=>{this.virtualData=e.detail},this.onscroll=null}renderEntry(e){const t=y[e];return t?t.type==="header"?n`<mdc-listheader data-index=${e} header-text="${t.label}"></mdc-listheader>`:n`<mdc-listitem data-index=${e} label="${t.label}"></mdc-listitem>`:n``}createRenderRoot(){return this}render(){return n`
      <div id="VirtualizedWrapperWithHeaders--wrapper">
        <mdc-virtualizedlist
          @scroll=${this.onscroll}
          @virtualitemschange=${this.handleVirtualItemsChange}
          .virtualizerProps=${this.virtualizerProps}
          initial-focus=${this.initialFocus}
          loop=${this.loop}
        >
          ${p(this.virtualData.virtualItems,({key:e})=>e,({index:e})=>this.renderEntry(e))}
        </mdc-virtualizedlist>
      </div>
      <style>
        mdc-virtualizedwrapperwithheaders {
          display: block;
          width: 100%;
          height: 100%;
          flex: 1 1 auto;
        }
        #VirtualizedWrapperWithHeaders--wrapper {
          width: 500px;
          height: 500px;
        }
      </style>
    `}}P([m({type:Object,attribute:"virtualizerprops"})],g.prototype,"virtualizerProps");P([m({type:String,reflect:!0})],g.prototype,"loop");P([m({type:Number,reflect:!0,attribute:"initial-focus"})],g.prototype,"initialFocus");P([l()],g.prototype,"virtualData");g.register("mdc-virtualizedwrapperwithheaders");const{action:ke}=__STORYBOOK_MODULE_ACTIONS__,xe=s=>n` <mdc-virtualizedwrapper
    .virtualizerProps=${s.virtualizerProps}
    .onscroll=${ke("scroll")}
    story=${s.story}
    initial-focus="${s["initial-focus"]||0}"
  ></mdc-virtualizedwrapper>`,yt={title:"Components/virtualizedlist",tags:["autodocs"],component:"mdc-virtualizedlist",render:xe,argTypes:{...M(["virtualizerController","virtualizer","scrollElementRef","focusTrapRef","loop","role","itemsStore"]),...M(["story","orientation"]),...de,...ce}},f={args:{virtualizerProps:{count:200,estimateSize:()=>36,overscan:30},story:"text"}},b={args:{virtualizerProps:{count:200,estimateSize:()=>48},story:"interactive"}},I={argTypes:{...M(["initial-focus"])},args:{virtualizerProps:{count:200,estimateSize:()=>48},story:"interactive","initial-focus":199}},w={render:()=>n` <mdc-virtualizeddynamiclist></mdc-virtualizeddynamiclist>`},z={render:()=>n` <mdc-virtualizedlist-chat-example></mdc-virtualizedlist-chat-example>`},_={parameters:{docs:{description:{story:n`<p>AI chat like example to test revers list with dynamically changing content height.</p>
          <p>Every second message is an "AI" answer updated over time.</p>`}}},render:()=>n` <mdc-virtualizeddynamiclistcontent></mdc-virtualizeddynamiclistcontent>`},k={parameters:{docs:{description:{story:n`<p>
            If padding is required at the top or bottom of the scrollable region (for example if the focus ring is being
            cut off), use the <code>paddingStart</code> and <code>paddingEnd</code> attributes on the virtualizerProps
            property to add the required padding in pixels. Do not set anything in CSS.
          </p>
          <p>
            If a gap between listitems are required, define the gap using CSS (either with margins on the listitem or
            set a gap on the container CSS part), and use the <code>gap</code> attribute on the virtualizerProps
            property to tell the virtualizer to take the gap into account when calculating scroll height.
          </p>`}}},render:()=>n`<mdc-virtualizedwrapper
        .virtualizerProps=${{count:200,estimateSize:()=>36,paddingStart:8,paddingEnd:8,gap:8}}
        story="text"
      ></mdc-virtualizedwrapper>
      <style>
        #VirtualizedWrapper--wrapper {
          height: 300px;
        }
        mdc-listitem:not(:first-child) {
          margin-top: 0.25rem;
        }
        mdc-listitem:not(:last-child) {
          margin-bottom: 0.25rem;
        }
      </style> `},x={render:()=>n` <mdc-virtualizedwrapperwithheaders></mdc-virtualizedwrapperwithheaders>`};var R,E,V;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 36,
      overscan: 30
    },
    story: 'text'
  }
}`,...(V=(E=f.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var W,B,O;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    virtualizerProps: {
      count: 200,
      estimateSize: () => 48
    },
    story: 'interactive'
  }
}`,...(O=(B=b.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var j,G,K;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(K=(G=I.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var F,N,J;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:"{\n  render: () => html` <mdc-virtualizeddynamiclist></mdc-virtualizeddynamiclist>`\n}",...(J=(N=w.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var U,q,H;z.parameters={...z.parameters,docs:{...(U=z.parameters)==null?void 0:U.docs,source:{originalSource:"{\n  render: () => html` <mdc-virtualizedlist-chat-example></mdc-virtualizedlist-chat-example>`\n}",...(H=(q=z.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var Q,Y,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\`<p>AI chat like example to test revers list with dynamically changing content height.</p>
          <p>Every second message is an "AI" answer updated over time.</p>\`
      }
    }
  },
  render: () => html\` <mdc-virtualizeddynamiclistcontent></mdc-virtualizeddynamiclistcontent>\`
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var X,ee,te;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: html\`<p>
            If padding is required at the top or bottom of the scrollable region (for example if the focus ring is being
            cut off), use the <code>paddingStart</code> and <code>paddingEnd</code> attributes on the virtualizerProps
            property to add the required padding in pixels. Do not set anything in CSS.
          </p>
          <p>
            If a gap between listitems are required, define the gap using CSS (either with margins on the listitem or
            set a gap on the container CSS part), and use the <code>gap</code> attribute on the virtualizerProps
            property to tell the virtualizer to take the gap into account when calculating scroll height.
          </p>\`
      }
    }
  },
  render: () => html\`<mdc-virtualizedwrapper
        .virtualizerProps=\${{
    count: 200,
    estimateSize: () => 36,
    paddingStart: 8,
    paddingEnd: 8,
    gap: 8
  }}
        story="text"
      ></mdc-virtualizedwrapper>
      <style>
        #VirtualizedWrapper--wrapper {
          height: 300px;
        }
        mdc-listitem:not(:first-child) {
          margin-top: 0.25rem;
        }
        mdc-listitem:not(:last-child) {
          margin-bottom: 0.25rem;
        }
      </style> \`
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,se,re;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:"{\n  render: () => html` <mdc-virtualizedwrapperwithheaders></mdc-virtualizedwrapperwithheaders>`\n}",...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const ft=["Example","Interactive","InteractiveStartAtBottom","Dynamic","Chat","DynamicContent","WithPaddingAndGaps","WithHeaders"];export{z as Chat,w as Dynamic,_ as DynamicContent,f as Example,b as Interactive,I as InteractiveStartAtBottom,x as WithHeaders,k as WithPaddingAndGaps,ft as __namedExportsOrder,yt as default};
