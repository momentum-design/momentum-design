import{a as k}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import{M as x,T as y}from"./menubar.component-uIUWWyzt.js";import{c as w,s as S}from"./commonArgTypes-BluK8w5L.js";import{d as A,h as C}from"./utils-CF1irry3.js";import"./index-BmHe-T6f.js";import"./index-BS6QInT8.js";import"./index-OTo84YPB.js";import"./index-hFelCdMA.js";import"./index-BrO4IecJ.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./roles-BH_hBfTz.js";import"./popover.component-Bw5zQP8M.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./menupopover.constants-Df21F9dQ.js";import"./menusection.constants-BCYXL6dH.js";import"./listitem.component-Bh3_BYs0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-BrLJ_9IK.js";import"./index-DfhuLnrm.js";import"./v4-CmTdKEVZ.js";import"./index-Cx7wvr8C.js";import"./divider.constants-DyEGqhgz.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-Cn9cAoOq.js";import"./iframe-Cy-CTt01.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./menuitem.component-C82Go1iM.js";import"./index-B8YkM_U-.js";import"./toggle.constants-Di8nTuH5.js";import"./menuitemcheckbox.constants-DmrkQGAP.js";import"./index-Cdz8MLaY.js";import"./menuitemradio.constants-CPWIpsqE.js";x.register(y);var d=Object.freeze,D=Object.defineProperty,h=(n,E)=>d(D(n,"raw",{value:d(n.slice())})),a,r;const f=()=>t(a||(a=h([`
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
    document.addEventListener('click', handleClick);
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
`])),k("onclick")),ve={title:"Work In Progress/menu/menubar",tags:["autodocs"],component:"mdc-menubar",render:f,parameters:{badges:["wip"],docs:{source:{format:"html",code:`
          <mdc-menubar>
            <mdc-menuitem label="..."></mdc-menuitem>
            <mdc-menupopover triggerid="menu-id">
              <mdc-menuitem label="..."></mdc-menuitem>
              <mdc-menuitem id="sub-menu-id" label="..."></mdc-menuitem>
              <mdc-menupopover triggerid="sub-menu-id">
                <mdc-menuitem label="..."></mdc-menuitem>
                <mdc-menuitem label="..."></mdc-menuitem>
              </mdc-menupopover>
              <mdc-menuitem label="..."></mdc-menuitem>
            </mdc-menupopover>
            <mdc-menuitem label="..."></mdc-menuitem>
          </mdc-menubar>
        `}}},argTypes:{...w,...S,...A(["slot","default"]),...C(["menuItems","aria-orientation"])}},e={render:f},m={render:()=>t(r||(r=h([`
    <div style="display:flex">
      <mdc-menubar style="width: 8rem; margin: 1rem 0;">
        <mdc-menuitem id="style-id" label="Style" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="style-id">
          <mdc-menusection>
            <mdc-menuitemcheckbox label="Bold"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Italic"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Underline"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Strikethrough"></mdc-menuitemcheckbox>
          </mdc-menusection>
          <mdc-divider></mdc-divider>
          <mdc-menusection>
            <mdc-menuitemradio label="Red"></mdc-menuitemradio>
            <mdc-menuitemradio label="Green"></mdc-menuitemradio>
            <mdc-menuitemradio label="Blue"></mdc-menuitemradio>
            <mdc-menuitemradio disabled label="Black"></mdc-menuitemradio>
          </mdc-menusection>
        </mdc-menupopover>
        <mdc-menuitem id="align-id" label="Align" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="align-id">
          <mdc-menusection>
            <mdc-menuitemradio label="Left"></mdc-menuitemradio>
            <mdc-menuitemradio label="Center"></mdc-menuitemradio>
            <mdc-menuitemradio label="Right"></mdc-menuitemradio>
            <mdc-menuitemradio label="Justify"></mdc-menuitemradio>
          </mdc-menusection>
        </mdc-menupopover>
        <mdc-menuitem id="size-id" label="Size" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="size-id">
          <mdc-menusection>
            <mdc-menuitem label="Small"></mdc-menuitem>
            <mdc-menuitem label="Medium"></mdc-menuitem>
            <mdc-menuitem label="Large"></mdc-menuitem>
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
        pharetra convallis ultrices. Nam porta erat in nisi efficitur, non luctus elit viverra. Fusce sit amet lobortis
        lectus. Mauris fermentum nisi et tortor elementum, vitae molestie lacus gravida. Vivamus molestie leo non
        lobortis tincidunt. Etiam gravida, nulla eu porta vestibulum, arcu mauris pellentesque lorem, a tempus massa
        tortor ac libero. Fusce iaculis odio in tincidunt efficitur.
      </p>
    </div>
    <script>
      var handleEditorClick = event => {
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
            console.log('Turbo set small');
            textarea.style.fontSize = 'small';
            break;
          case 'Medium':
            textarea.style.fontSize = 'medium';
            break;
          case 'Large':
            textarea.style.fontSize = 'large';
            break;
        }
      };
      document.addEventListener('click', handleEditorClick);
    <\/script>
  `])))},i={render:()=>t` <mdc-menubar style="width: 8rem; margin: 1rem 0;">
      <mdc-menusection>
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
      <mdc-divider></mdc-divider>
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
    </mdc-menubar>`};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var o,s,b;m.parameters={...m.parameters,docs:{...(o=m.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex">
      <mdc-menubar style="width: 8rem; margin: 1rem 0;">
        <mdc-menuitem id="style-id" label="Style" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="style-id">
          <mdc-menusection>
            <mdc-menuitemcheckbox label="Bold"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Italic"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Underline"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Strikethrough"></mdc-menuitemcheckbox>
          </mdc-menusection>
          <mdc-divider></mdc-divider>
          <mdc-menusection>
            <mdc-menuitemradio label="Red"></mdc-menuitemradio>
            <mdc-menuitemradio label="Green"></mdc-menuitemradio>
            <mdc-menuitemradio label="Blue"></mdc-menuitemradio>
            <mdc-menuitemradio disabled label="Black"></mdc-menuitemradio>
          </mdc-menusection>
        </mdc-menupopover>
        <mdc-menuitem id="align-id" label="Align" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="align-id">
          <mdc-menusection>
            <mdc-menuitemradio label="Left"></mdc-menuitemradio>
            <mdc-menuitemradio label="Center"></mdc-menuitemradio>
            <mdc-menuitemradio label="Right"></mdc-menuitemradio>
            <mdc-menuitemradio label="Justify"></mdc-menuitemradio>
          </mdc-menusection>
        </mdc-menupopover>
        <mdc-menuitem id="size-id" label="Size" arrow-position="trailing"></mdc-menuitem>
        <mdc-menupopover triggerid="size-id">
          <mdc-menusection>
            <mdc-menuitem label="Small"></mdc-menuitem>
            <mdc-menuitem label="Medium"></mdc-menuitem>
            <mdc-menuitem label="Large"></mdc-menuitem>
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
        pharetra convallis ultrices. Nam porta erat in nisi efficitur, non luctus elit viverra. Fusce sit amet lobortis
        lectus. Mauris fermentum nisi et tortor elementum, vitae molestie lacus gravida. Vivamus molestie leo non
        lobortis tincidunt. Etiam gravida, nulla eu porta vestibulum, arcu mauris pellentesque lorem, a tempus massa
        tortor ac libero. Fusce iaculis odio in tincidunt efficitur.
      </p>
    </div>
    <script>
      var handleEditorClick = event => {
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
            console.log('Turbo set small');
            textarea.style.fontSize = 'small';
            break;
          case 'Medium':
            textarea.style.fontSize = 'medium';
            break;
          case 'Large':
            textarea.style.fontSize = 'large';
            break;
        }
      };
      document.addEventListener('click', handleEditorClick);
    <\/script>
  \`
}`,...(b=(s=m.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var p,g,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\` <mdc-menubar style="width: 8rem; margin: 1rem 0;">
      <mdc-menusection>
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
      <mdc-divider></mdc-divider>
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
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const he=["Example","EditorMenubar","WithMenuSections"];export{m as EditorMenubar,e as Example,i as WithMenuSections,he as __namedExportsOrder,ve as default};
