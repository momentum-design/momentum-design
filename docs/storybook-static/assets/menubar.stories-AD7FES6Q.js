import{k as a}from"./iframe-D0jeH_1V.js";import"./index-BYNj6eEb.js";import{c as w,s as S}from"./commonArgTypes-BluK8w5L.js";import{d as C,a as E}from"./utils-Dd_sfl9-.js";import"./index-n5dnmW3D.js";import"./index-Ds-r6kCg.js";import"./index-BRE3AU1G.js";import"./index-CHWWc8oC.js";import"./index-pzaSSmj3.js";import"./preload-helper-C1FmrZbK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./popover.component-DPWF8ikr.js";import"./if-defined-CfnkxC3R.js";import"./BackdropMixin-CVoxCdx-.js";import"./menupopover.constants-DVh2TC8r.js";import"./badge.constants-DholOOE5.js";import"./menuitemradio.constants-e0cvTg-j.js";import"./TabIndexMixin-DxZG6Klh.js";import"./index-DeFIgEEb.js";import"./index-K1gnSoAO.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CYKkKpU7.js";import"./listitem.component-BmmQFt2E.js";import"./DisabledMixin-CgF8PS8f.js";import"./index-dEZzaSdf.js";import"./formfieldwrapper.constants-CTURLOGg.js";import"./toggle.constants-Cbt6YLAS.js";import"./index-CzH_gc-F.js";import"./v4-CmTdKEVZ.js";import"./class-map-B7n3dgYr.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-CWWHto0E.js";import"./menuitemcheckbox.constants-B44FFCVS.js";import"./index-CGDN1bGe.js";import"./sidenavigation.component-DBIOQgID.js";import"./index-w8XfX15U.js";var l=Object.freeze,A=Object.defineProperty,$=(e,i)=>l(A(e,"raw",{value:l(e.slice())})),o;const{action:D}=__STORYBOOK_MODULE_ACTIONS__,f=()=>a(o||(o=$([`
  <div style="width: 100%; display: flex;" class="root">
    <mdc-menubar @click="`,`">
      <mdc-menuitem label="Home"></mdc-menuitem>
      <mdc-menuitem id="file-id" label="File" arrow-position="trailing"></mdc-menuitem>
      <mdc-menupopover triggerid="file-id">
        <mdc-menuitem label="New File"></mdc-menuitem>
        <mdc-menuitem label="New Window"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Open"></mdc-menuitem>
        <mdc-menuitem label="Open Folder"></mdc-menuitem>
        <mdc-menuitem id="open-recent" label="Open Recent" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerID="open-recent">
          <mdc-menuitem label="~/Documents/menu.ts"></mdc-menuitem>
          <mdc-menuitem label="~/Documents/popover.ts"></mdc-menuitem>
          <mdc-menuitem id="button-file" label="~/Documents/button" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="button-file">
            <mdc-menuitem label="~/Documents/button/button.ts"></mdc-menuitem>
            <mdc-menuitem label="~/Documents/button/button.html"></mdc-menuitem>
            <mdc-menuitem label="~/Documents/button/button.css"></mdc-menuitem>
          </mdc-menupopover>
          <mdc-menuitem label="~/Documents/popover.css"></mdc-menuitem>
        </mdc-menupopover>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Save"></mdc-menuitem>
        <mdc-menuitem label="Save As..."></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem id="share-id" label="Share" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerID="share-id">
          <mdc-menuitem label="AirDrop"></mdc-menuitem>
          <mdc-menuitem label="Messages"></mdc-menuitem>
          <mdc-menuitem label="Notes"></mdc-menuitem>
          <mdc-menuitem label="Freeform"></mdc-menuitem>
          <mdc-menuitem label="Reminders"></mdc-menuitem>
        </mdc-menupopover>
      </mdc-menupopover>
      <mdc-menuitem id="edit-id" label="Edit" arrow-position="trailing"></mdc-menuitem>
      <mdc-menupopover triggerid="edit-id">
        <mdc-menuitem label="Undo"></mdc-menuitem>
        <mdc-menuitem label="Redo"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Cut"></mdc-menuitem>
        <mdc-menuitem label="Copy"></mdc-menuitem>
        <mdc-menuitem label="Paste"></mdc-menuitem>
      </mdc-menupopover>
      <mdc-menuitem id="view-id" label="View" arrow-position="trailing"></mdc-menuitem>
      <mdc-menupopover triggerid="view-id">
        <mdc-menuitem label="Zoom In"></mdc-menuitem>
        <mdc-menuitem label="Zoom Out"></mdc-menuitem>
      </mdc-menupopover>
      <mdc-menuitem label="Tools"></mdc-menuitem>
      <mdc-menuitem id="terminal-id" label="Terminal" soft-disabled arrow-position="trailing"></mdc-menuitem>
      <mdc-menupopover triggerid="terminal-id">
        <mdc-menuitem label="New Terminal"></mdc-menuitem>
        <mdc-menuitem label="Open Terminal"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Run Task"></mdc-menuitem>
        <mdc-menuitem label="Build Task"></mdc-menuitem>
        <mdc-divider></mdc-divider>
        <mdc-menuitem label="Configure Task"></mdc-menuitem>
      </mdc-menupopover>
      <mdc-menuitem label="Window"></mdc-menuitem>
      <mdc-menuitem label="Help"></mdc-menuitem>
    </mdc-menubar>
    <div
      style="
      height: 25rem; width: 100%; display: flex; justify-content: center; align-items: center;
      background-image: linear-gradient(120deg, #fdfbfb 0%, #d3d3d3 100%);
    "
    >
      <div id="container">
        <h1>Welcome, select a menu item from the top</h1>
      </div>
    </div>
  </div>
  <script>
    var handleClick = event => {
      const activePage = event.target.getAttribute('label');
      const container = document.getElementById('container');
      if (!activePage || !container) return;

      container.innerHTML = '<h1>You have clicked ' + activePage + '</h1>';
    };
    document.addEventListener('action', handleClick);
  <\/script>
  <style>
    #container h1 {
      color: black;
    }
    mdc-menubar {
      width: 10rem;
    }
    .root:has(mdc-menubar) {
      flex-direction: row;
    }
  </style>
`])),D("onclick")),se={title:"Internal/menubar",tags:["autodocs"],component:"mdc-menubar",render:f,parameters:{badges:["stable"]},argTypes:{...w,...S,...C(["slot","default"]),...E(["menuItems","aria-orientation"])}},n={render:f},c={render:()=>{const e=i=>{const x=i.target.hasAttribute("disabled"),r=i.target.getAttribute("label"),t=i.target.getAttribute("aria-checked"),m=document.getElementById("textarea");if(!(x||!r||!m))switch(r){case"Bold":m.style.fontWeight=t==="true"?"bold":"unset";break;case"Italic":m.style.fontStyle=t==="true"?"italic":"unset";break;case"Underline":m.style.textDecoration=t==="true"?"underline":"unset";break;case"Strikethrough":m.style.textDecoration=t==="true"?"line-through":"unset";break;case"Red":m.style.color="red";break;case"Green":m.style.color="green";break;case"Blue":m.style.color="blue";break;case"Left":m.style.textAlign="left";break;case"Center":m.style.textAlign="center";break;case"Right":m.style.textAlign="right";break;case"Justify":m.style.textAlign="justify";break;case"Small":m.style.fontSize="small";break;case"Medium":m.style.fontSize="medium";break;case"Large":m.style.fontSize="large";break}};return a`
      <div style="display:flex">
        <mdc-menubar style="width: 8rem; margin: 1rem 0;">
          <mdc-menuitem id="style-id" label="Style" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="style-id">
            <mdc-menusection>
              <mdc-menuitemcheckbox name="style" @click="${e}" label="Bold"></mdc-menuitemcheckbox>
              <mdc-menuitemcheckbox name="style" @click="${e}" label="Italic"></mdc-menuitemcheckbox>
              <mdc-menuitemcheckbox name="style" @click="${e}" label="Underline"></mdc-menuitemcheckbox>
              <mdc-menuitemcheckbox
                name="style"
                @click="${e}"
                label="Strikethrough"
              ></mdc-menuitemcheckbox>
            </mdc-menusection>
            <mdc-divider></mdc-divider>
            <mdc-menusection>
              <mdc-menuitemradio name="color" @click="${e}" label="Red"></mdc-menuitemradio>
              <mdc-menuitemradio name="color" @click="${e}" label="Green"></mdc-menuitemradio>
              <mdc-menuitemradio name="color" @click="${e}" label="Blue"></mdc-menuitemradio>
              <mdc-menuitemradio name="color" disabled label="Black"></mdc-menuitemradio>
            </mdc-menusection>
          </mdc-menupopover>
          <mdc-menuitem id="align-id" label="Align" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="align-id">
            <mdc-menusection>
              <mdc-menuitemradio name="align" @click="${e}" label="Left"></mdc-menuitemradio>
              <mdc-menuitemradio name="align" @click="${e}" label="Center"></mdc-menuitemradio>
              <mdc-menuitemradio name="align" @click="${e}" label="Right"></mdc-menuitemradio>
              <mdc-menuitemradio name="align" @click="${e}" label="Justify"></mdc-menuitemradio>
            </mdc-menusection>
          </mdc-menupopover>
          <mdc-menuitem id="size-id" label="Size" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="size-id">
            <mdc-menusection>
              <mdc-menuitem name="size" @click="${e}" label="Small"></mdc-menuitem>
              <mdc-menuitem name="size" @click="${e}" label="Medium"></mdc-menuitem>
              <mdc-menuitem name="size" @click="${e}" label="Large"></mdc-menuitem>
            </mdc-menusection>
          </mdc-menupopover>
        </mdc-menubar>
        <p id="textarea" style="width: 80%; height: 80%; border: 1px solid white; border-radius: 5px; padding: 1rem;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at accumsan purus, non dignissim mi. Nam in nisl
          at neque mollis tempor iaculis ut felis. Etiam bibendum vitae est vitae dictum. Nulla non sapien volutpat,
          ornare diam sit amet, viverra dui. Vestibulum sit amet eros nec lacus laoreet commodo. Praesent pharetra enim
          vitae felis egestas rutrum. In in erat et neque ornare efficitur. Curabitur facilisis orci quis est dictum,
          vitae efficitur metus imperdiet. Duis vel ipsum est. Nulla commodo feugiat augue, sed dapibus ante mollis
          dignissim. Nullam varius a libero quis elementum. In et arcu mi.
          <br /><br />
          Donec id dui nunc. Integer auctor sodales consequat. Nunc sagittis nisi luctus mauris tincidunt tempor. Nulla
          pharetra convallis ultrices. Nam porta erat in nisi efficitur, non luctus elit viverra. Fusce sit amet
          lobortis lectus. Mauris fermentum nisi et tortor elementum, vitae molestie lacus gravida. Vivamus molestie leo
          non lobortis tincidunt. Etiam gravida, nulla eu porta vestibulum, arcu mauris pellentesque lorem, a tempus
          massa tortor ac libero. Fusce iaculis odio in tincidunt efficitur.
        </p>
      </div>
    `}},d={render:()=>a` <mdc-menubar style="width: 8rem; margin: 1rem 0;">
      <mdc-menusection show-divider>
        <mdc-menuitem id="temp-id1" label="Style1"></mdc-menuitem>
        <mdc-menuitem id="temp-id2" label="Style2"></mdc-menuitem>
        <mdc-menuitem id="temp-id3" label="Style3"></mdc-menuitem>
        <mdc-menuitem id="temp-id4" label="Style4" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="temp-id4">
          <mdc-menusection>
            <mdc-menuitem label="Small"></mdc-menuitem>
            <mdc-menuitem label="Medium"></mdc-menuitem>
            <mdc-menuitem label="Large"></mdc-menuitem>
          </mdc-menusection>
        </mdc-menupopover>
      </mdc-menusection>
      <mdc-menusection>
        <mdc-menuitem id="align-id1" label="Align1" arrow-position="trailing"></mdc-menuitem>
        <mdc-menuitem id="align-id2" label="Align2"></mdc-menuitem>
        <mdc-menuitem id="align-id3" label="Align3"></mdc-menuitem>
        <mdc-menuitem id="align-id4" label="Align4"></mdc-menuitem>
        <mdc-menupopover triggerid="align-id1">
          <mdc-menusection>
            <mdc-menuitem label="Left"></mdc-menuitem>
            <mdc-menuitem label="Center"></mdc-menuitem>
            <mdc-menuitem label="Right"></mdc-menuitem>
          </mdc-menusection>
        </mdc-menupopover>
      </mdc-menusection>
    </mdc-menubar>`};var u,s,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render
}`,...(b=(s=n.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var p,g,v;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const handleEditorClick = (event: any) => {
      const isDisabled = event.target.hasAttribute('disabled');
      const action = event.target.getAttribute('label');
      const isChecked = event.target.getAttribute('aria-checked');
      const textarea = document.getElementById('textarea');
      if (isDisabled || !action || !textarea) return;
      switch (action) {
        case 'Bold':
          textarea.style.fontWeight = isChecked === 'true' ? 'bold' : 'unset';
          break;
        case 'Italic':
          textarea.style.fontStyle = isChecked === 'true' ? 'italic' : 'unset';
          break;
        case 'Underline':
          textarea.style.textDecoration = isChecked === 'true' ? 'underline' : 'unset';
          break;
        case 'Strikethrough':
          textarea.style.textDecoration = isChecked === 'true' ? 'line-through' : 'unset';
          break;
        case 'Red':
          textarea.style.color = 'red';
          break;
        case 'Green':
          textarea.style.color = 'green';
          break;
        case 'Blue':
          textarea.style.color = 'blue';
          break;
        case 'Left':
          textarea.style.textAlign = 'left';
          break;
        case 'Center':
          textarea.style.textAlign = 'center';
          break;
        case 'Right':
          textarea.style.textAlign = 'right';
          break;
        case 'Justify':
          textarea.style.textAlign = 'justify';
          break;
        case 'Small':
          textarea.style.fontSize = 'small';
          break;
        case 'Medium':
          textarea.style.fontSize = 'medium';
          break;
        case 'Large':
          textarea.style.fontSize = 'large';
          break;
        default:
          break;
      }
    };
    return html\`
      <div style="display:flex">
        <mdc-menubar style="width: 8rem; margin: 1rem 0;">
          <mdc-menuitem id="style-id" label="Style" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="style-id">
            <mdc-menusection>
              <mdc-menuitemcheckbox name="style" @click="\${handleEditorClick}" label="Bold"></mdc-menuitemcheckbox>
              <mdc-menuitemcheckbox name="style" @click="\${handleEditorClick}" label="Italic"></mdc-menuitemcheckbox>
              <mdc-menuitemcheckbox name="style" @click="\${handleEditorClick}" label="Underline"></mdc-menuitemcheckbox>
              <mdc-menuitemcheckbox
                name="style"
                @click="\${handleEditorClick}"
                label="Strikethrough"
              ></mdc-menuitemcheckbox>
            </mdc-menusection>
            <mdc-divider></mdc-divider>
            <mdc-menusection>
              <mdc-menuitemradio name="color" @click="\${handleEditorClick}" label="Red"></mdc-menuitemradio>
              <mdc-menuitemradio name="color" @click="\${handleEditorClick}" label="Green"></mdc-menuitemradio>
              <mdc-menuitemradio name="color" @click="\${handleEditorClick}" label="Blue"></mdc-menuitemradio>
              <mdc-menuitemradio name="color" disabled label="Black"></mdc-menuitemradio>
            </mdc-menusection>
          </mdc-menupopover>
          <mdc-menuitem id="align-id" label="Align" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="align-id">
            <mdc-menusection>
              <mdc-menuitemradio name="align" @click="\${handleEditorClick}" label="Left"></mdc-menuitemradio>
              <mdc-menuitemradio name="align" @click="\${handleEditorClick}" label="Center"></mdc-menuitemradio>
              <mdc-menuitemradio name="align" @click="\${handleEditorClick}" label="Right"></mdc-menuitemradio>
              <mdc-menuitemradio name="align" @click="\${handleEditorClick}" label="Justify"></mdc-menuitemradio>
            </mdc-menusection>
          </mdc-menupopover>
          <mdc-menuitem id="size-id" label="Size" arrow-position="trailing"></mdc-menuitem>
          <mdc-menupopover triggerid="size-id">
            <mdc-menusection>
              <mdc-menuitem name="size" @click="\${handleEditorClick}" label="Small"></mdc-menuitem>
              <mdc-menuitem name="size" @click="\${handleEditorClick}" label="Medium"></mdc-menuitem>
              <mdc-menuitem name="size" @click="\${handleEditorClick}" label="Large"></mdc-menuitem>
            </mdc-menusection>
          </mdc-menupopover>
        </mdc-menubar>
        <p id="textarea" style="width: 80%; height: 80%; border: 1px solid white; border-radius: 5px; padding: 1rem;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at accumsan purus, non dignissim mi. Nam in nisl
          at neque mollis tempor iaculis ut felis. Etiam bibendum vitae est vitae dictum. Nulla non sapien volutpat,
          ornare diam sit amet, viverra dui. Vestibulum sit amet eros nec lacus laoreet commodo. Praesent pharetra enim
          vitae felis egestas rutrum. In in erat et neque ornare efficitur. Curabitur facilisis orci quis est dictum,
          vitae efficitur metus imperdiet. Duis vel ipsum est. Nulla commodo feugiat augue, sed dapibus ante mollis
          dignissim. Nullam varius a libero quis elementum. In et arcu mi.
          <br /><br />
          Donec id dui nunc. Integer auctor sodales consequat. Nunc sagittis nisi luctus mauris tincidunt tempor. Nulla
          pharetra convallis ultrices. Nam porta erat in nisi efficitur, non luctus elit viverra. Fusce sit amet
          lobortis lectus. Mauris fermentum nisi et tortor elementum, vitae molestie lacus gravida. Vivamus molestie leo
          non lobortis tincidunt. Etiam gravida, nulla eu porta vestibulum, arcu mauris pellentesque lorem, a tempus
          massa tortor ac libero. Fusce iaculis odio in tincidunt efficitur.
        </p>
      </div>
    \`;
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var k,h,y;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\` <mdc-menubar style="width: 8rem; margin: 1rem 0;">
      <mdc-menusection show-divider>
        <mdc-menuitem id="temp-id1" label="Style1"></mdc-menuitem>
        <mdc-menuitem id="temp-id2" label="Style2"></mdc-menuitem>
        <mdc-menuitem id="temp-id3" label="Style3"></mdc-menuitem>
        <mdc-menuitem id="temp-id4" label="Style4" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="temp-id4">
          <mdc-menusection>
            <mdc-menuitem label="Small"></mdc-menuitem>
            <mdc-menuitem label="Medium"></mdc-menuitem>
            <mdc-menuitem label="Large"></mdc-menuitem>
          </mdc-menusection>
        </mdc-menupopover>
      </mdc-menusection>
      <mdc-menusection>
        <mdc-menuitem id="align-id1" label="Align1" arrow-position="trailing"></mdc-menuitem>
        <mdc-menuitem id="align-id2" label="Align2"></mdc-menuitem>
        <mdc-menuitem id="align-id3" label="Align3"></mdc-menuitem>
        <mdc-menuitem id="align-id4" label="Align4"></mdc-menuitem>
        <mdc-menupopover triggerid="align-id1">
          <mdc-menusection>
            <mdc-menuitem label="Left"></mdc-menuitem>
            <mdc-menuitem label="Center"></mdc-menuitem>
            <mdc-menuitem label="Right"></mdc-menuitem>
          </mdc-menusection>
        </mdc-menupopover>
      </mdc-menusection>
    </mdc-menubar>\`
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const be=["Example","EditorMenubar","WithMenuSections"];export{c as EditorMenubar,n as Example,d as WithMenuSections,be as __namedExportsOrder,se as default};
