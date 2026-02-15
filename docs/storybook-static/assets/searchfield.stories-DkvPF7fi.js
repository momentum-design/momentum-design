import{t as a}from"./if-defined-CVMw9D_D.js";import{S,T}from"./searchfield.component-Da97ubUq.js";import"./index-BQ2PLB_I.js";import"./index-CBfQUMDE.js";import{k as x}from"./iframe-ojQsro1_.js";import{c as y,s as g}from"./commonArgTypes-BG7EqI50.js";import{h as O}from"./utils-B5QUENNQ.js";import"./index-CDHJ-37x.js";import{A as _,a as A}from"./input.constants-ocL32L6L.js";import"./query-assigned-elements-Ch3CugO5.js";import"./class-map-DEbijC-h.js";import"./directive-Ctav8iJK.js";import"./input.component-CP4wn9Gj.js";import"./index-CrxYT9af.js";import"./index-DsUi5e9a.js";import"./popover.component-CgI2Li1_.js";import"./BackdropMixin-wwWxqvnp.js";import"./KeyDownHandledMixin-CwWe2bID.js";import"./index-CWGsCnx3.js";import"./popover.constants-Bk1cvuYk.js";import"./index-DxZ1GeMr.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-NfHYx8j2.js";import"./DisabledMixin-DFNBhceF.js";import"./formfieldwrapper.constants-DLC9PYne.js";import"./DataAriaLabelMixin-BDsf-JHW.js";import"./FormInternalsMixin-TCbF8GsZ.js";import"./buttonsimple.component-y4d96y3m.js";import"./button.component-DWDgEEeQ.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-BUn9T64S.js";S.register(T);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,E=e=>x` <mdc-searchfield
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
  ></mdc-searchfield>`,ne={title:"Components/searchfield",tags:["autodocs"],component:"mdc-searchfield",render:E,argTypes:{label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(_)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"text",options:Object.values(A)},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...O(["prefix-text","help-text","help-text-type","required","validation-message","validity","willValidate","trailing-button","leading-icon","inputChips"]),...y,...g}},r={args:{label:"Label",placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear"}},t={args:{placeholder:"Placeholder",value:"Value",disabled:!1,"clear-aria-label":"Clear","data-aria-label":"Search"}},o={args:{placeholder:"Placeholder",value:"Value",disabled:!0,"clear-aria-label":"Clear","data-aria-label":"Search"}},i={render:()=>{const e=C=>{C.target.remove()};return x`
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
        <mdc-chip label="This does not render" slot="filters"></mdc-chip>
      </mdc-searchfield>
    `}};var c,n,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear'
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
    disabled: true,
    'clear-aria-label': 'Clear',
    'data-aria-label': 'Search'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,$,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        <mdc-chip label="This does not render" slot="filters"></mdc-chip>
      </mdc-searchfield>
    \`;
  }
}`,...(v=($=i.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};const se=["Example","WithoutLabel","DisabledSearch","WithInputChipFilters"];export{o as DisabledSearch,r as Example,i as WithInputChipFilters,t as WithoutLabel,se as __namedExportsOrder,ne as default};
