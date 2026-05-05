import{t as a}from"./if-defined-azXttZBh.js";import{S as _,T as I}from"./searchfield.component-B6DUnE81.js";import"./index-Dng3CR56.js";import"./index-D23DQGIK.js";import{k as r}from"./iframe-DN1k4W8X.js";import{c as M,s as U}from"./commonArgTypes-BG7EqI50.js";import{h as V}from"./utils-B5QUENNQ.js";import"./index-BWSIwSVS.js";import"./index-BQOfMQv1.js";import"./index-CqQ7_uYP.js";import{A as z,a as k}from"./input.constants-BEvKIrt3.js";import"./query-assigned-elements-BMQyIwoJ.js";import"./class-map-rH9ZL3rJ.js";import"./directive-Ctav8iJK.js";import"./input.component-B1ewuy4G.js";import"./index-B3VTLk81.js";import"./index-RYrlNTZL.js";import"./popover.component-gyt4qKyk.js";import"./BackdropMixin-CNm8jVNU.js";import"./KeyDownHandledMixin-B33si3O1.js";import"./index-BnT307RE.js";import"./popover.constants-75zN0u0Y.js";import"./index-BmjQdyqq.js";import"./v4-CmTdKEVZ.js";import"./formfieldwrapper.component-BCMEoytg.js";import"./DisabledMixin-Bs8Qw-yl.js";import"./formfieldwrapper.constants-D6MXTeyd.js";import"./DataAriaLabelMixin-Btv6KE-u.js";import"./FormInternalsMixin-DyR61VmT.js";import"./buttonsimple.component-C4_c_DnO.js";import"./ControlTypeMixin-Cf2W7-Aa.js";import"./chip.component-BohgsZbM.js";import"./IconNameMixin-CuKkw3z7.js";import"./staticchip.component-D_50ERDu.js";import"./alertchip.constants-h4y0s9El.js";import"./button.component-CgRi9wO7.js";import"./button.utils-rNW36Ji7.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";_.register(I);const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Q=e=>r` <mdc-searchfield
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
