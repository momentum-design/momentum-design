import{i as ee,k as s}from"./lit-element-D5KKan5q.js";import{n as Q}from"./property-Bj3TGwkg.js";import{r as te}from"./state-CmYk530Z.js";import{L as oe}from"./index-BQhqfvGb.js";import{T as ie}from"./index-Co35kDyu.js";import{R as ne}from"./roles-CJI3JVG-.js";import{b as m}from"./listitem.component-D_1lkCxZ.js";import{K as r}from"./keys-hFXe221I.js";import{C as le,u as ae}from"./provider.component-DrWB4byV.js";import{a as u}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as se,d as I,h}from"./utils-CFOyPOhY.js";import{c as ce,s as re}from"./commonArgTypes-BluK8w5L.js";import"./index-B2pabD1r.js";import"./index-CbIlSgnN.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-ontT1z4L.js";import"./iframe-BIsR5SVO.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-D2VIkDCb.js";import"./index-DM9rY9pk.js";import"./popover.component-CWSuSUni.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./v4-CQkTLCs1.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./divider.constants-DXWnBz1m.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";const de=l=>{class e extends l{constructor(...i){super(...i),this.handleItemCreation=t=>{const n=t.target;n&&n.addEventListener(m.DESTROYED,this.handleItemRemovedEvent)},this.handleItemRemovedEvent=t=>{if(t.stopImmediatePropagation(),t.target&&t.type===m.DESTROYED){t.target.removeEventListener(m.DESTROYED,this.handleItemRemovedEvent);const n=new Event(t.type,{bubbles:t.bubbles,composed:t.composed});Object.defineProperty(n,"target",{set(){},get:()=>t.target}),this.dispatchEvent(n)}},this.addEventListener(m.CREATED,this.handleItemCreation)}}return e},pe=l=>{class e extends l{constructor(...i){super(...i),this.loop=!0,this.propagateAllKeyEvents=!1,this.handleNavigationKeyDown=t=>{let n=!1;const c=t.target,a=this.getCurrentIndex(c);if(a===-1)return;this.resetTabIndexes(a);const p=window.getComputedStyle(this).direction==="rtl";switch(this.resolveDirectionKey(t.key,p)){case r.HOME:{this.resetTabIndexAndSetFocus(0,a),n=!0;break}case r.END:{this.resetTabIndexAndSetFocus(this.navItems.length-1,a),n=!0;break}case r.ARROW_DOWN:{const E=this.loop?0:a,C=a+1===this.navItems.length?E:a+1;this.resetTabIndexAndSetFocus(C,a),n=!0;break}case r.ARROW_UP:{const E=this.loop?this.navItems.length-1:a,C=a-1===-1?E:a-1;this.resetTabIndexAndSetFocus(C,a),n=!0;break}}n&&!this.propagateAllKeyEvents&&(t.stopPropagation(),t.preventDefault())},this.handleNavigationClick=t=>{const n=this.getCurrentIndex(t.target);this.resetTabIndexes(n)},this.addEventListener("keydown",this.handleNavigationKeyDown),this.addEventListener("click",this.handleNavigationClick)}async firstUpdated(i){super.firstUpdated(i),this.resetTabIndexAndSetFocus(0,void 0,!1)}getCurrentIndex(i){return this.navItems.findIndex(t=>t===i)}resetTabIndexes(i){if(this.navItems.length>0){this.navItems.forEach(n=>n.setAttribute("tabindex","-1"));const t=this.navItems[i]?i:0;this.navItems[t].setAttribute("tabindex","0"),this.navItems[t].focus()}}resetTabIndexAndSetFocus(i,t,n=!0){const{navItems:c}=this;if(c.length===0)return;const a=c[i]?i:0,p=c[a];i===t&&p&&p.getAttribute("tabindex")==="0"||(t!==void 0&&c[t]&&c[t].setAttribute("tabindex","-1"),p.setAttribute("tabindex","0"),n&&p.focus())}resolveDirectionKey(i,t){if(!t)return i;switch(i){case r.ARROW_LEFT:return r.ARROW_RIGHT;case r.ARROW_RIGHT:return r.ARROW_LEFT;default:return i}}}return e},me=(l,e)=>!!(l.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING),be=l=>!!l;class he{constructor(e,o){this.cache=[],this.itemCreationHandler=i=>{this.addItem(i.target,void 0)},this.itemDestroyHandler=i=>{this.delete(i.target)},this.host=e,e.addController(this),this.isValidItem=(o==null?void 0:o.isValidItem)||be,this.host.addEventListener(m.CREATED,this.itemCreationHandler),this.host.addEventListener(m.DESTROYED,this.itemDestroyHandler)}get items(){return this.cache}hostConnected(){}hostDisconnected(){}add(e){this.addItem(e,void 0)}addAt(e,o){this.addItem(e,o)}addItem(e,o=void 0){const i=e;if(this.isValidItem(i)&&!this.cache.includes(i)){const t=o===void 0?this.cache.findIndex(n=>me(i,n)):o;t===-1?this.cache.push(i):t>=0&&this.cache.splice(t,0,i)}}delete(e){const o=this.cache.indexOf(e);o!==-1&&this.cache.splice(o,1)}reset(e){this.cache.length=0,this.cache.push(...e||[])}}const ue=ee`
  :host {
    --mdc-listbox-max-height: auto;

    height: inherit;
    width: inherit;

    overflow-y: scroll;
    max-height: var(--mdc-listbox-max-height);

    /* prevent focus ring clipping */
    padding: 0.25rem;
  }

  ::slotted(mdc-option) {
    width: 100%;
  }
`,xe=[ue];var ge=Object.defineProperty,L=(l,e,o,i)=>{for(var t=void 0,n=l.length-1,c;n>=0;n--)(c=l[n])&&(t=c(e,o,t)||t);return t&&ge(e,o,t),t};const k=class k extends pe(de(le)){constructor(){super(),this.loop=!1,this.name=void 0,this.value=void 0,this.itemsStore=new he(this,{isValidItem:this.isValidItem}),this.handleDestroyEvent=()=>{this.handleNoSelection()},this.addEventListener("click",this.handleClick),this.addEventListener("modified",this.handleModifiedEvent),this.addEventListener("destroyed",this.handleDestroyEvent)}connectedCallback(){super.connectedCallback(),this.role=ne.LISTBOX}handleModifiedEvent(e){const o=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(o);break;case"disabled":this.itemsStore.delete(o);break;case"selected":this.setSelectedOption(o,!1,!1);break;case"unselected":this.handleNoSelection();break}}handleNoSelection(){this.getFirstSelectedOption()||(this.selectedOption=void 0,this.value=void 0)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${ie}:not([disabled])`)}handleClick(e){const o=e.target;this.isValidItem(o)&&this.setSelectedOption(o)}getFirstSelectedOption(){return this.itemsStore.items.find(e=>e.matches("[selected]"))}updated(e){if(e.has("value")){const o=this.itemsStore.items.find(i=>i.value===this.value);o?this.setSelectedOption(o,!1):this.setSelectedOption(null,!1)}}setSelectedOption(e,o=!0,i=!0){e!=null&&e.disabled||e!=null&&e.softDisabled||(i&&this.updateSelectedInChildOptions(e),this.selectedOption=e,this.value=e==null?void 0:e.value,o&&this.fireEvents())}updateSelectedInChildOptions(e){this.itemsStore.items.forEach(o=>o.removeAttribute("selected")),e==null||e.toggleAttribute("selected",!0)}fireEvents(){this.selectedOption&&this.dispatchEvent(new Event("change",{composed:!0,bubbles:!0}))}render(){return s`<slot part="container"></slot>`}};k.styles=[...oe.styles,...xe];let b=k;L([Q({type:String,reflect:!0})],b.prototype,"name");L([Q({type:String,reflect:!0})],b.prototype,"value");L([te()],b.prototype,"selectedOption");const ve=ae.constructTagName("listbox");b.register(ve);const d=l=>s`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${l}
  </div>
`,fe=l=>d(s`
    <mdc-listbox @change="${u("onchange")}" name="${l.name}" value="${l.value}">
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `),nt={title:"Components/listbox",tags:["autodocs"],component:"mdc-listbox",render:fe,parameters:{badges:["stable"]},argTypes:{name:{control:"text"},value:{control:"text"},...se(["--mdc-listbox-max-height"]),...I(["default"]),...ce,...re}},x={args:{value:"london"}},g={render:()=>d(s`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
      </mdc-listbox>
    `),...h()},v={render:()=>s`
    <div style="height: 35rem;">
      <mdc-listbox label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-optgroup label="Fruit">
          <mdc-option value="apple" label="Apples"></mdc-option>
          <mdc-option value="banana" label="Bananas"></mdc-option>
          <mdc-option value="cherry" label="Cherries"></mdc-option>
          <mdc-option value="damson" label="Damsons"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Vegetables" disabled>
          <mdc-option value="artichoke" label="Artichokes"></mdc-option>
          <mdc-option value="broccoli" label="Broccoli"></mdc-option>
          <mdc-option value="cabbage" label="Cabbages"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Fish">
          <mdc-option value="tuna" label="Tuna"></mdc-option>
          <mdc-option value="salmon" label="Salmon"></mdc-option>
        </mdc-optgroup>
      </mdc-listbox>
    </div>
  `,...h()},f={render:()=>d(s`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
        ></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-listbox>
    `),...h()},S={render:()=>d(s`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
      </mdc-listbox>
    `),...h()},y={args:{height:"18rem",placeholder:"Select an option",label:"Select option"},render:l=>d(s`
      <mdc-listbox placeholder="${l.placeholder}" label="${l.label}" style="--mdc-listbox-max-height: 30rem">
        ${Array.from({length:1e3},(e,o)=>s`<mdc-option label="Option Label ${o+1}"></mdc-option>`)}
      </mdc-listbox>
    `),argTypes:{...I(["name","data-aria-label","disabled","required","help-text-type","help-text"])}},O={render:()=>{const l=Array.from({length:10},(o,i)=>s`<mdc-option label="Option ${i+1}"></mdc-option>`);let e=null;return setTimeout(()=>{e=s`<mdc-option label="Delayed Option"></mdc-option>`;const o=document.querySelector('mdc-listbox[label="Select option"]');if(o){const i=document.createElement("mdc-option");i.setAttribute("label","Delayed Option"),o.appendChild(i)}},2e3),d(s`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${l} ${e||""} </mdc-listbox>
    `)},argTypes:{...I(["name","data-aria-label","disabled","required","help-text-type","help-text"])},...h()},A={render:()=>d(s`
      <mdc-button @click=${()=>{const o=document.querySelector('mdc-listbox[label="Select an option"]');o&&o.querySelectorAll("mdc-option").forEach((t,n)=>{n===0&&t.removeAttribute("selected"),n===1&&t.setAttribute("selected","")})}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const o=document.querySelector('mdc-listbox[label="Select an option"]');o&&o.querySelectorAll("mdc-option").forEach(t=>{t.removeAttribute("selected")})}}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="${u("onchange")}"
        @click="${u("onclick")}"
        @keydown="${u("onkeydown")}"
        @focus="${u("onfocus")}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    `),...h()};var D,T,w;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 'london'
  }
}`,...(w=(T=x.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var R,W,$;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...($=(W=g.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var _,F,N;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 35rem;">
      <mdc-listbox label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-optgroup label="Fruit">
          <mdc-option value="apple" label="Apples"></mdc-option>
          <mdc-option value="banana" label="Bananas"></mdc-option>
          <mdc-option value="cherry" label="Cherries"></mdc-option>
          <mdc-option value="damson" label="Damsons"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Vegetables" disabled>
          <mdc-option value="artichoke" label="Artichokes"></mdc-option>
          <mdc-option value="broccoli" label="Broccoli"></mdc-option>
          <mdc-option value="cabbage" label="Cabbages"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Fish">
          <mdc-option value="tuna" label="Tuna"></mdc-option>
          <mdc-option value="salmon" label="Salmon"></mdc-option>
        </mdc-optgroup>
      </mdc-listbox>
    </div>
  \`,
  ...hideAllControls()
}`,...(N=(F=v.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var B,M,q;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
        ></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var V,K,Y;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(Y=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var H,G,P;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    height: '18rem',
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}" style="--mdc-listbox-max-height: 30rem">
        \${Array.from({
    length: 1000
  }, (_, i) => html\`<mdc-option label="Option Label \${i + 1}"></mdc-option>\`)}
      </mdc-listbox>
    \`),
  argTypes: {
    ...disableControls(['name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  }
}`,...(P=(G=y.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var U,j,X;O.parameters={...O.parameters,docs:{...(U=O.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const options = Array.from({
      length: 10
    }, (_, i) => html\`<mdc-option label="Option \${i + 1}"></mdc-option>\`);
    let extraOption: TemplateResult | null = null;
    setTimeout(() => {
      extraOption = html\`<mdc-option label="Delayed Option"></mdc-option>\`;
      const listbox = document.querySelector('mdc-listbox[label="Select option"]');
      if (listbox) {
        const option = document.createElement('mdc-option');
        option.setAttribute('label', 'Delayed Option');
        listbox.appendChild(option);
      }
    }, 2000);
    return wrapWithDiv(html\`
      <mdc-listbox placeholder="Select an option" label="Select option"> \${options} \${extraOption || ''} </mdc-listbox>
    \`);
  },
  argTypes: {
    ...disableControls(['name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text'])
  },
  ...hideAllControls()
}`,...(X=(j=O.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var Z,z,J;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const handleClick = () => {
      const listBox = document.querySelector('mdc-listbox[label="Select an option"]') as ListBox;
      if (listBox) {
        const options = listBox.querySelectorAll('mdc-option');
        options.forEach((option, idx) => {
          if (idx === 0) {
            option.removeAttribute('selected');
          }
          if (idx === 1) {
            option.setAttribute('selected', '');
          }
        });
      }
    };
    const handleClickRemove = () => {
      const listBox = document.querySelector('mdc-listbox[label="Select an option"]') as ListBox;
      if (listBox) {
        const options = listBox.querySelectorAll('mdc-option');
        options.forEach(option => {
          option.removeAttribute('selected');
        });
      }
    };
    return wrapWithDiv(html\`
      <mdc-button @click=\${handleClick}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=\${handleClickRemove}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="\${action('onchange')}"
        @click="\${action('onclick')}"
        @keydown="\${action('onkeydown')}"
        @focus="\${action('onfocus')}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    \`);
  },
  ...hideAllControls()
}`,...(J=(z=A.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const lt=["Example","ListboxWithSecondaryLabel","ListboxWithGroups","ListboxWithLongOptionText","ListboxWithIconOptions","ListboxWithFixedHeight","ListboxWithDynamicOptions","ListboxWithChangingSelectedAfterMount"];export{x as Example,A as ListboxWithChangingSelectedAfterMount,O as ListboxWithDynamicOptions,y as ListboxWithFixedHeight,v as ListboxWithGroups,S as ListboxWithIconOptions,f as ListboxWithLongOptionText,g as ListboxWithSecondaryLabel,lt as __namedExportsOrder,nt as default};
