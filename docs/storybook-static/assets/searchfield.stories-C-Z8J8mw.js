import{t as a}from"./if-defined-CcLsQsCq.js";import{S as I,T as M}from"./searchfield.component-B8ixsIPL.js";import"./index-BcEEePcu.js";import"./index-CEMlnyZJ.js";import{k as r}from"./iframe-q5YgjDld.js";import{c as U,s as V}from"./commonArgTypes-BG7EqI50.js";import{h as z}from"./utils-B5QUENNQ.js";import"./index-D1KQSsGP.js";import"./index-Ct2XXVPR.js";import"./index-ZCr7gG8P.js";import{A as k,a as Q}from"./input.constants-BzdslCo4.js";import"./query-assigned-elements-GuUXfDeP.js";import"./class-map-CbMcLV6r.js";import"./directive-Ctav8iJK.js";import"./input.component-Do98jjGc.js";import"./index-1POYyp6c.js";import"./index-BNkDDT40.js";import"./popover.component-BM1Ac3-w.js";import"./BackdropMixin-DjC6jDwl.js";import"./KeyDownHandledMixin-C-TUEG1Q.js";import"./index-BAndwYFW.js";import"./popover.constants-BXXJvqk9.js";import"./index-BL9jYc0X.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-D-pSsTfD.js";import"./DisabledMixin-fbiLTt1z.js";import"./formfieldwrapper.constants-BjDZM3sR.js";import"./DataAriaLabelMixin-F_qF3igS.js";import"./FormInternalsMixin-BA5P1Osz.js";import"./buttonsimple.component-D5vIGevR.js";import"./chip.component-BTSgY5w5.js";import"./IconNameMixin-DPkRvt5Q.js";import"./staticchip.component-BH-Sk96h.js";import"./alertchip.constants-B6PrIjfs.js";import"./button.component-rHS9HpdE.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";I.register(M);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,w=e=>r` <mdc-searchfield
    @input="${l("oninput")}"
    @change="${l("onchange")}"
    @focus="${l("onfocus")}"
    @blur="${l("onblur")}"
    @clear="${l("onclear")}"
    label="${e.label}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${e.value}"
    ?disabled="${e.disabled}"
    id="${e.id}"
    data-aria-label="${a(e["data-aria-label"])}"
    clear-aria-label="${a(e["clear-aria-label"])}"
    class="${e.class}"
    style="${e.style}"
    ?readonly="${e.readonly}"
    maxlength="${a(e.maxlength)}"
    minlength="${a(e.minlength)}"
    autocapitalize="${a(e.autocapitalize)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${a(e.autocomplete)}"
    dirname="${a(e.dirname)}"
    pattern="${a(e.pattern)}"
    list="${a(e.list)}"
    size="${a(e.size)}"
  ></mdc-searchfield>`,Se={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:w,argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(k)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(Q)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...z(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...U,...V}},t={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},c={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},i={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},o={render:()=>{const e=m=>{m.target.remove()};return r`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: value"
          slot="filters"
          @remove="${e}"
        ></mdc-inputchip>
        <mdc-inputchip
          clear-aria-label="Clear"
          label="In: Marketing"
          slot="filters"
          @remove="${e}"
        ></mdc-inputchip>
      </mdc-searchfield>
    `}},n={render:()=>r`
    <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
      <mdc-alertchip label="Warning: Unsaved changes" variant="warning" slot="filters"></mdc-alertchip>
      <mdc-alertchip label="Error: Invalid input" variant="error" slot="filters"></mdc-alertchip>
    </mdc-searchfield>
  `},s={render:()=>r`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: momentum"
          slot="filters"
          @remove="${m=>{m.target.remove()}}"
        ></mdc-inputchip>
        <mdc-alertchip label="Updated: 2 days ago" slot="filters"></mdc-alertchip>
      </mdc-searchfield>
    `},d={render:()=>r`
    <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
      <mdc-chip label="Filter 1" slot="filters"></mdc-chip>
      <mdc-chip label="Filter 2" slot="filters"></mdc-chip>
      <mdc-chip label="Filter 3" slot="filters"></mdc-chip>
    </mdc-searchfield>
  `};var p,h,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var b,f,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,$,g;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(g=($=i.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var x,F,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html\`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: value"
          slot="filters"
          @remove="\${clearFilter}"
        ></mdc-inputchip>
        <mdc-inputchip
          clear-aria-label="Clear"
          label="In: Marketing"
          slot="filters"
          @remove="\${clearFilter}"
        ></mdc-inputchip>
      </mdc-searchfield>
    \`;
  }
}`,...(y=(F=o.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var L,S,P;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
      <mdc-alertchip label="Warning: Unsaved changes" variant="warning" slot="filters"></mdc-alertchip>
      <mdc-alertchip label="Error: Invalid input" variant="error" slot="filters"></mdc-alertchip>
    </mdc-searchfield>
  \`
}`,...(P=(S=n.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var E,T,A;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html\`
      <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: momentum"
          slot="filters"
          @remove="\${clearFilter}"
        ></mdc-inputchip>
        <mdc-alertchip label="Updated: 2 days ago" slot="filters"></mdc-alertchip>
      </mdc-searchfield>
    \`;
  }
}`,...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var W,O,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-searchfield label="Label" placeholder="Placeholder" clear-aria-label="Clear">
      <mdc-chip label="Filter 1" slot="filters"></mdc-chip>
      <mdc-chip label="Filter 2" slot="filters"></mdc-chip>
      <mdc-chip label="Filter 3" slot="filters"></mdc-chip>
    </mdc-searchfield>
  \`
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const Pe=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters","WithAlertChipFilters","WithMixedChipFilters","WithBasicChips"];export{i as DisabledSearch,t as Example,n as WithAlertChipFilters,d as WithBasicChips,o as WithInputChipFilters,s as WithMixedChipFilters,c as WithoutLabel,Pe as __namedExportsOrder,Se as default};
