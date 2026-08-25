import{bh as O,b7 as ne,k as t,Q as ie}from"./iframe-DKmoi846.js";import{b as ae,a as c}from"./utils-B5QUENNQ.js";import{c as ce,s as re}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";var de=Object.defineProperty,L=(e,o,l,i)=>{for(var a=void 0,d=e.length-1,A;d>=0;d--)(A=e[d])&&(a=A(o,l,a)||a);return a&&de(o,l,a),a};class f extends ne{constructor(){super(),this.listItems=new Array(1e3).fill(!0),this.virtualData={virtualItems:[]},this.virtualizerProps={count:0,estimateSize:()=>0,getItemKey:o=>this.listItems[o]},this.handleVirtualItemsChange=o=>{this.virtualData=o.detail},this.onscroll=null}connectedCallback(){super.connectedCallback(),this.updateVirtualProps()}updateVirtualProps(){this.virtualizerProps={count:this.listItems.length,estimateSize:()=>36,getItemKey:o=>this.listItems[o]}}render(){return t`
      <div class="wrapper">
        <mdc-virtualizedlist
          .virtualizerProps=${this.virtualizerProps}
          @virtualitemschange=${this.handleVirtualItemsChange}
        >
          ${ie(this.virtualData.virtualItems,({key:o})=>o,({index:o})=>t`<mdc-option data-index="${o}" label="Option Label ${o+1}"></mdc-option>`)}
        </mdc-virtualizedlist>
      </div>
      <style>
        .wrapper {
          height: 100vh;
        }
      </style>
    `}createRenderRoot(){return this}}L([O()],f.prototype,"listItems");L([O()],f.prototype,"virtualData");L([O()],f.prototype,"virtualizerProps");f.register("mdc-listboxvirtualizedlist");const{action:r}=__STORYBOOK_MODULE_ACTIONS__,n=e=>t`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${e}
  </div>
`,se=e=>n(t`
    <mdc-listbox @change="${r("onchange")}" name="${e.name}" value="${e.value}" ?multiple="${e.multiple}">
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `),he={title:"Components/listbox",tags:["autodocs"],component:"mdc-listbox",render:se,argTypes:{name:{control:"text"},value:{control:"text"},multiple:{control:"boolean"},...ae(["default"]),...ce,...re}},s={args:{value:"losangeles"}},p={render:()=>n(t`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    `),...c()},m={render:()=>t`
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
  `,...c()},b={render:()=>n(t`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red" value="red"></mdc-option>
        <mdc-option label="Yellow" value="yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
          value="whiteblack"
        ></mdc-option>
        <mdc-option label="Green" value="green"></mdc-option>
      </mdc-listbox>
    `),...c()},u={render:()=>n(t`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications" value="mute"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps" value="apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy" value="message"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities" value="meeting"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave" value="leave"></mdc-option>
      </mdc-listbox>
    `),...c()},h={args:{placeholder:"Select an option",label:"Select option"},render:e=>n(t`
      <mdc-listbox placeholder="${e.placeholder}" label="${e.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    `)},v={args:{"--mdc-listbox-max-height":"18rem",placeholder:"Select an option",label:"Select option"},render:e=>n(t`
      <mdc-listbox placeholder="${e.placeholder}" label="${e.label}">
        ${Array.from({length:1e3}).map((o,l)=>t`<mdc-option label="Option Label ${l+1}"></mdc-option>`)}
      </mdc-listbox>
    `)},x={render:()=>{const e=Array.from({length:10},(l,i)=>t`<mdc-option label="Option ${i+1}" value="option${i+1}"></mdc-option>`);let o=null;return setTimeout(()=>{o=t`<mdc-option label="Delayed Option" value="optionDelayed"></mdc-option>`;const l=document.querySelector('mdc-listbox[label="Select option"]');if(l){const i=document.createElement("mdc-option");i.setAttribute("label","Delayed Option"),l.appendChild(i)}},2e3),n(t`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${e} ${o||""} </mdc-listbox>
    `)},argTypes:{...ae(["name","data-aria-label","disabled","required","help-text-type","help-text"])},...c()},g={render:()=>n(t`
      <mdc-button @click=${()=>{const l=document.querySelector('mdc-listbox[label="Select an option"]');l&&l.querySelectorAll("mdc-option").forEach((a,d)=>{d===0&&a.removeAttribute("selected"),d===1&&a.setAttribute("selected","")})}}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${()=>{const l=document.querySelector('mdc-listbox[label="Select an option"]');l&&l.querySelectorAll("mdc-option").forEach(a=>{a.removeAttribute("selected")})}}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="${r("onchange")}"
        @click="${r("onclick")}"
        @keydown="${r("onkeydown")}"
        @focus="${r("onfocus")}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    `),...c()},y={render:()=>n(t`
      <mdc-listbox multiple @change="${r("onchange")}">
        <mdc-option value="apple" label="Apple"></mdc-option>
        <mdc-option value="banana" label="Banana" selected></mdc-option>
        <mdc-option value="cherry" label="Cherry"></mdc-option>
        <mdc-option value="date" label="Date" selected></mdc-option>
      </mdc-listbox>
    `),...c()},S={render:()=>n(t`
      <mdc-listbox @change="${r("onchange")}">
        <mdc-option value="user1" label="John Doe" secondary-label="john.doe@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user2" label="Jane Smith" secondary-label="jane.smith@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/64/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user3" label="Bob Wilson" secondary-label="bob.wilson@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/65/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user4" label="Alice Brown" secondary-label="alice.brown@example.com">
          <mdc-avatar slot="leading-controls" initials="AB" size="32"></mdc-avatar>
        </mdc-option>
      </mdc-listbox>
    `),...c()};var $,C,k;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 'losangeles'
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,W,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1" value="Option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="Option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="Option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="Option4"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var B,z,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var _,T,q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red" value="red"></mdc-option>
        <mdc-option label="Yellow" value="yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
          value="whiteblack"
        ></mdc-option>
        <mdc-option label="Green" value="green"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(q=(T=b.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var R,V,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications" value="mute"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps" value="apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy" value="message"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities" value="meeting"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave" value="leave"></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var P,M,Y;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}" style="overflow: hidden">
        <mdc-listboxvirtualizedlist></mdc-listboxvirtualizedlist>
      </mdc-listbox>
    \`)
}`,...(Y=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var j,F,G;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    '--mdc-listbox-max-height': '18rem',
    placeholder: 'Select an option',
    label: 'Select option'
  },
  render: (args: Args) => wrapWithDiv(html\`
      <mdc-listbox placeholder="\${args.placeholder}" label="\${args.label}">
        \${Array.from({
    length: 1000
  }).map((_, i) => html\`<mdc-option label="Option Label \${i + 1}"></mdc-option>\`)}
      </mdc-listbox>
    \`)
}`,...(G=(F=v.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,N;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const options = Array.from({
      length: 10
    }, (_, i) => html\`<mdc-option label="Option \${i + 1}" value="option\${i + 1}"></mdc-option>\`);
    let extraOption: TemplateResult | null = null;
    setTimeout(() => {
      extraOption = html\`<mdc-option label="Delayed Option" value="optionDelayed"></mdc-option>\`;
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
}`,...(N=(K=x.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var U,H,Q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var Z,X,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox multiple @change="\${action('onchange')}">
        <mdc-option value="apple" label="Apple"></mdc-option>
        <mdc-option value="banana" label="Banana" selected></mdc-option>
        <mdc-option value="cherry" label="Cherry"></mdc-option>
        <mdc-option value="date" label="Date" selected></mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var oe,te,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
      <mdc-listbox @change="\${action('onchange')}">
        <mdc-option value="user1" label="John Doe" secondary-label="john.doe@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/63/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user2" label="Jane Smith" secondary-label="jane.smith@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/64/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user3" label="Bob Wilson" secondary-label="bob.wilson@example.com">
          <mdc-avatar slot="leading-controls" src="https://picsum.photos/id/65/256" size="32"></mdc-avatar>
        </mdc-option>
        <mdc-option value="user4" label="Alice Brown" secondary-label="alice.brown@example.com">
          <mdc-avatar slot="leading-controls" initials="AB" size="32"></mdc-avatar>
        </mdc-option>
      </mdc-listbox>
    \`),
  ...hideAllControls()
}`,...(le=(te=S.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const ve=["Example","ListboxWithSecondaryLabel","ListboxWithGroups","ListboxWithLongOptionText","ListboxWithIconOptions","ListboxWithVirtualizedList","ListboxWithFixedHeight","ListboxWithDynamicOptions","ListboxWithChangingSelectedAfterMount","Multiselect","ListboxWithAvatarInOptions"];export{s as Example,S as ListboxWithAvatarInOptions,g as ListboxWithChangingSelectedAfterMount,x as ListboxWithDynamicOptions,v as ListboxWithFixedHeight,m as ListboxWithGroups,u as ListboxWithIconOptions,b as ListboxWithLongOptionText,p as ListboxWithSecondaryLabel,h as ListboxWithVirtualizedList,y as Multiselect,ve as __namedExportsOrder,he as default};
