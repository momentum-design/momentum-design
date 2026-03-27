import{t as a}from"./if-defined-BvKStZe5.js";import{S as _,T as I}from"./searchfield.component-BOR4Ioj7.js";import"./index-DEt5yFrI.js";import"./index-CyqGq4J2.js";import{k as r}from"./iframe-DBAXEeb_.js";import{c as M,s as U}from"./commonArgTypes-BG7EqI50.js";import{h as V}from"./utils-B5QUENNQ.js";import"./index-Bq9rghue.js";import"./index-Ce3-eUIf.js";import"./index-CIe71W0S.js";import{A as z,a as k}from"./input.constants-BbBcxufs.js";import"./query-assigned-elements-BB93mBke.js";import"./class-map-uxXEDmBg.js";import"./directive-Ctav8iJK.js";import"./input.component-7e64YWSg.js";import"./index-C8BkBbk_.js";import"./index--83I_V0R.js";import"./popover.component-C39K7qX2.js";import"./BackdropMixin-BXUTii33.js";import"./KeyDownHandledMixin-CGg5F37x.js";import"./index-Bul3jdd3.js";import"./popover.constants-CJGZm9VD.js";import"./index-S0j83kMi.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-h4CyY1XU.js";import"./DisabledMixin-CJ5fJ_db.js";import"./formfieldwrapper.constants-BmEaP_B-.js";import"./DataAriaLabelMixin-BeMM70jK.js";import"./FormInternalsMixin-DcVhp37-.js";import"./buttonsimple.component-CCVl3Kje.js";import"./ControlTypeMixin-ByH73tF0.js";import"./chip.component-BlwL0zR8.js";import"./IconNameMixin-DuApkVb9.js";import"./staticchip.component-DyB3f1jJ.js";import"./alertchip.constants-nW1YxVMi.js";import"./button.component-iWITCBo-.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";_.register(I);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Q=e=>r` <mdc-searchfield
    @input="${l("oninput")}"
    @change="${l("onchange")}"
    @focus="${l("onfocus")}"
    @blur="${l("onblur")}"
    @clear="${l("onclear")}"
    @chipRemove="${l("onChipRemove")}"
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
  ></mdc-searchfield>`,Se={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:Q,argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(z)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(k)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...V(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...M,...U}},t={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},i={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},o={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},c={render:()=>{const e=d=>{d.target.remove()};return r`
      <mdc-searchfield
        @chipRemove="${l("onChipRemove")}"
        label="Label"
        placeholder="Placeholder"
        clear-aria-label="Clear"
      >
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
    <mdc-searchfield
      @chipRemove="${l("onChipRemove")}"
      label="Label"
      placeholder="Placeholder"
      clear-aria-label="Clear"
    >
      <mdc-alertchip label="Warning: Unsaved changes" variant="warning" slot="filters"></mdc-alertchip>
      <mdc-alertchip label="Error: Invalid input" variant="error" slot="filters"></mdc-alertchip>
    </mdc-searchfield>
  `},s={render:()=>{const e=d=>{d.target.remove()};return r`
      <mdc-searchfield
        @chipRemove="${l("onChipRemove")}"
        label="Label"
        placeholder="Placeholder"
        clear-aria-label="Clear"
      >
        <mdc-inputchip
          clear-aria-label="Clear"
          label="Query: momentum"
          slot="filters"
          @remove="${e}"
        ></mdc-inputchip>
        <mdc-alertchip label="Updated: 2 days ago" slot="filters"></mdc-alertchip>
      </mdc-searchfield>
    `}},m={render:()=>r`
    <mdc-searchfield
      @chipRemove="${l("onChipRemove")}"
      label="Label"
      placeholder="Placeholder"
      clear-aria-label="Clear"
    >
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
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var b,f,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,$,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(g=($=o.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var x,F,R;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html\`
      <mdc-searchfield
        @chipRemove="\${action('onChipRemove')}"
        label="Label"
        placeholder="Placeholder"
        clear-aria-label="Clear"
      >
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
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var y,L,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-searchfield
      @chipRemove="\${action('onChipRemove')}"
      label="Label"
      placeholder="Placeholder"
      clear-aria-label="Clear"
    >
      <mdc-alertchip label="Warning: Unsaved changes" variant="warning" slot="filters"></mdc-alertchip>
      <mdc-alertchip label="Error: Invalid input" variant="error" slot="filters"></mdc-alertchip>
    </mdc-searchfield>
  \`
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var P,E,T;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const clearFilter = (e: Event) => {
      (e.target as HTMLElement).remove();
    };
    return html\`
      <mdc-searchfield
        @chipRemove="\${action('onChipRemove')}"
        label="Label"
        placeholder="Placeholder"
        clear-aria-label="Clear"
      >
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
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var A,W,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-searchfield
      @chipRemove="\${action('onChipRemove')}"
      label="Label"
      placeholder="Placeholder"
      clear-aria-label="Clear"
    >
      <mdc-chip label="Filter 1" slot="filters"></mdc-chip>
      <mdc-chip label="Filter 2" slot="filters"></mdc-chip>
      <mdc-chip label="Filter 3" slot="filters"></mdc-chip>
    </mdc-searchfield>
  \`
}`,...(O=(W=m.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const Pe=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters","WithAlertChipFilters","WithMixedChipFilters","WithBasicChips"];export{o as DisabledSearch,t as Example,n as WithAlertChipFilters,m as WithBasicChips,c as WithInputChipFilters,s as WithMixedChipFilters,i as WithoutLabel,Pe as __namedExportsOrder,Se as default};
