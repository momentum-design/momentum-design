// AI-Assisted
import tools from './tools';
import { assetsRegistry, colorTokensRegistry, componentsRegistry } from './data';
import { getAsset, searchAssets } from './utils/assetRegistry';
import { findColorTokens, searchColorTokens } from './utils/colorRegistry';
import { getComponent, searchComponents } from './utils/componentRegistry';
import { generateComponentCode } from './utils/codeGeneration';
import { convertMomentumUiUsage } from './utils/migration';
import { validateComponentUsage } from './utils/validation';

function requireTool(name: string) {
  const tool = tools.find(item => item.definition.name === name);

  if (!tool) {
    throw new Error(`Tool ${name} was not registered.`);
  }

  return tool;
}

function requireComponentForTest(name: string) {
  const component = getComponent(name);

  if (!component) {
    throw new Error(`Component ${name} was not found in the generated registry.`);
  }

  return component;
}

function issueMessages(result: ReturnType<typeof validateComponentUsage>): string {
  return result.issues.map(issue => issue.message).join(' ');
}

async function getToolText(name: string, args: Record<string, unknown> = {}): Promise<string> {
  const response = await requireTool(name).handler(args);

  return response.content[0].text;
}

describe('@momentum-design/components-mcp', () => {
  it('generates a registry entry for every component knowledge-base file', () => {
    expect(componentsRegistry).toHaveLength(96);
    expect(getComponent('button')?.tagName).toBe('mdc-button');
    expect(getComponent('mdc-dialog')?.name).toBe('dialog');
  });

  it('extracts exact button API values and accessibility metadata', () => {
    const button = getComponent('button');
    expect(button).toBeDefined();

    const variant = button?.api.properties.find(property => property.name === 'variant');
    const color = button?.api.properties.find(property => property.name === 'color');
    const size = button?.api.properties.find(property => property.name === 'size');

    expect(variant?.values).toEqual(expect.arrayContaining(['primary', 'secondary', 'tertiary']));
    expect(color?.values).toEqual(
      expect.arrayContaining(['default', 'positive', 'negative', 'accent', 'promotional']),
    );
    expect(size?.values).toEqual(expect.arrayContaining([20, 24, 28, 32, 40, 52, 64]));
    expect(button?.api.slots).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'default' })]));
    expect(button?.api.cssProperties).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: '--mdc-button-height' })]),
    );
  });

  it('finds components by intent aliases and documentation content', () => {
    expect(searchComponents('modal').map(component => component.name)).toContain('dialog');
    expect(searchComponents('profile picture').map(component => component.name)).toContain('avatar');
  });

  it('generates asset registry entries for public Momentum asset packages', () => {
    expect(assetsRegistry.filter(asset => asset.kind === 'icon').length).toBeGreaterThan(3000);
    expect(assetsRegistry.filter(asset => asset.kind === 'illustration').length).toBeGreaterThan(1000);
    expect(assetsRegistry.filter(asset => asset.kind === 'brand-visual').length).toBeGreaterThan(400);
    expect(assetsRegistry.filter(asset => asset.kind === 'animation').length).toBeGreaterThan(90);
    expect(getAsset('check-bold', 'icon')?.importPath).toBe('@momentum-design/icons/dist/svg/check-bold.svg');
    expect(getAsset('discoverability-badge', 'animation')?.name).toBe('discoverability_badge');
    expect(searchAssets('logo', { kind: 'brand-visual' }).length).toBeGreaterThan(0);
  });

  it('generates color token registry entries with resolved CSS variable values', () => {
    const primaryTextTokens = findColorTokens('color.theme.text.primary.normal');
    const stableLightPrimaryText = findColorTokens(
      '--mds-color-theme-text-primary-normal',
      { theme: 'stable-light' },
    )[0];

    expect(colorTokensRegistry.length).toBeGreaterThan(2000 - 1);
    expect(primaryTextTokens.length).toBeGreaterThan(1);
    expect(stableLightPrimaryText.cssVariable).toBe('--mds-color-theme-text-primary-normal');
    expect(stableLightPrimaryText.value).toBe('{color.core.black-alpha.95}');
    expect(stableLightPrimaryText.resolvedValue).toBe('#000000f2');
    expect(searchColorTokens('blue 70', { category: 'core' })[0].name).toBe('color.core.blue.70');
  });

  it('suggests icon and Momentum UI migration paths from public registries', () => {
    const migration = convertMomentumUiUsage('<md-button><md-icon name="check_16"></md-icon>Save</md-button>');

    expect(migration.convertedCode).toContain('<mdc-button>');
    expect(migration.convertedCode).toContain('<mdc-icon name="check_16"></mdc-icon>');
    expect(migration.mappings.map(mapping => mapping.componentName)).toEqual(
      expect.arrayContaining(['button', 'icon']),
    );
  });

  it('generates framework-specific component code', () => {
    const button = requireComponentForTest('button');

    const result = generateComponentCode(
      button,
      'angular',
      {
        variant: 'primary',
        size: 32,
        'prefix-icon': 'download-bold',
      },
      'Download',
    );

    expect(result.code).toContain('<mdc-button');
    expect(result.code).toContain('prefix-icon="download-bold"');
    expect(result.setupNotes.join(' ')).toContain('CUSTOM_ELEMENTS_SCHEMA');
    expect(result.validation.valid).toBe(true);
  });

  it('validates invalid button value combinations', () => {
    const button = requireComponentForTest('button');

    const result = validateComponentUsage(
      button,
      {
        variant: 'tertiary',
        color: 'positive',
        size: 20,
      },
      'Save',
    );

    expect(result.valid).toBe(false);
    expect(issueMessages(result)).toContain('tertiary');
    expect(issueMessages(result)).toContain('size 20');
  });

  it('validates buttonlink and linkbutton usage rules', () => {
    const buttonlink = requireComponentForTest('buttonlink');
    const invalidButtonlink = validateComponentUsage(
      buttonlink,
      {
        target: '_blank',
        rel: 'noreferrer',
        variant: 'tertiary',
        color: 'positive',
        size: 20,
      },
      'Open report',
    );
    const validButtonlink = validateComponentUsage(
      buttonlink,
      {
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer',
        variant: 'tertiary',
        color: 'accent',
        size: 20,
        'prefix-icon': 'pop-out-bold',
        'data-aria-label': 'Open example in a new tab',
      },
    );
    const linkbutton = requireComponentForTest('linkbutton');
    const invalidLinkbutton = validateComponentUsage(linkbutton, { size: 18 });
    const validLinkbutton = validateComponentUsage(linkbutton, { size: 16 }, 'Learn more');

    expect(invalidButtonlink.valid).toBe(false);
    expect(issueMessages(invalidButtonlink)).toContain('requires href');
    expect(issueMessages(invalidButtonlink)).toContain('target="_blank"');
    expect(issueMessages(invalidButtonlink)).toContain('tertiary');
    expect(issueMessages(invalidButtonlink)).toContain('size 20');
    expect(validButtonlink.valid).toBe(true);
    expect(validButtonlink.issues).toHaveLength(0);
    expect(invalidLinkbutton.valid).toBe(false);
    expect(issueMessages(invalidLinkbutton)).toContain('Valid values: 12, 14, 16');
    expect(issueMessages(invalidLinkbutton)).toContain('accessible name');
    expect(validLinkbutton.valid).toBe(true);
  });

  it('validates input and textarea accessibility and value rules', () => {
    const input = requireComponentForTest('input');
    const invalidInput = validateComponentUsage(input, {
      autocomplete: 'one-time-code',
      'prefix-text': 'TooLongPrefix',
      'trailing-button': true,
      'toggletip-text': 'Why amount',
      minlength: 12,
      maxlength: 4,
    });
    const validInput = validateComponentUsage(input, {
      autocomplete: 'one-time-code',
      label: 'Amount',
      'prefix-text': 'USD',
      'data-aria-label': 'Amount in US dollars',
      'trailing-button': true,
      'clear-aria-label': 'Clear amount',
      'toggletip-text': 'Currency help',
      'info-icon-aria-label': 'Amount help',
      minlength: 2,
      maxlength: 10,
    });
    const textarea = requireComponentForTest('textarea');
    const invalidTextarea = validateComponentUsage(textarea, {
      resizable: true,
      rows: 0,
      cols: 0,
      minlength: 12,
      maxlength: 4,
      'max-character-limit': 200,
    });
    const validTextarea = validateComponentUsage(textarea, {
      label: 'Bio',
      resizable: true,
      'resize-button-aria-label': 'Resize textarea with Arrow Up and Arrow Down',
      rows: 4,
      cols: 40,
      minlength: 1,
      maxlength: 200,
      'max-character-limit': 200,
      'help-text': 'Maximum 200 characters',
      wrap: 'hard',
    });

    expect(invalidInput.valid).toBe(false);
    expect(issueMessages(invalidInput)).toContain('requires either label or data-aria-label');
    expect(issueMessages(invalidInput)).toContain('prefix-text must be 10 characters or fewer');
    expect(issueMessages(invalidInput)).toContain('clear-aria-label');
    expect(issueMessages(invalidInput)).toContain('info-icon-aria-label');
    expect(issueMessages(invalidInput)).toContain('minlength cannot be greater than maxlength');
    expect(validInput.valid).toBe(true);
    expect(validInput.issues).toHaveLength(0);
    expect(invalidTextarea.valid).toBe(false);
    expect(issueMessages(invalidTextarea)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidTextarea)).toContain('resize-button-aria-label');
    expect(issueMessages(invalidTextarea)).toContain('rows must be greater than 0');
    expect(issueMessages(invalidTextarea)).toContain('cols must be greater than 0');
    expect(validTextarea.valid).toBe(true);
  });

  it('validates checkbox, radio, radiogroup, and toggle form rules', () => {
    const checkbox = requireComponentForTest('checkbox');
    const invalidCheckbox = validateComponentUsage(checkbox, {
      checked: true,
      indeterminate: true,
      'toggletip-text': 'More info',
    });
    const validCheckbox = validateComponentUsage(checkbox, {
      label: 'Email updates',
      checked: true,
    });
    const radio = requireComponentForTest('radio');
    const invalidRadio = validateComponentUsage(radio, {});
    const validRadio = validateComponentUsage(radio, {
      label: 'Small',
      name: 'shirt-size',
      value: 'small',
    });
    const radiogroup = requireComponentForTest('radiogroup');
    const invalidRadioGroup = validateComponentUsage(radiogroup, {
      'toggletip-text': 'Choose one',
    });
    const validRadioGroup = validateComponentUsage(radiogroup, {
      label: 'Preferred contact',
    });
    const toggle = requireComponentForTest('toggle');
    const invalidToggle = validateComponentUsage(toggle, {
      size: 'large',
      'control-type': 'manual',
      'toggletip-text': 'Details',
      required: true,
    });
    const validToggle = validateComponentUsage(toggle, {
      label: 'Notifications',
      size: 'compact',
      'control-type': 'controlled',
      'validation-message': 'Turn this on to continue',
    });

    expect(invalidCheckbox.valid).toBe(false);
    expect(issueMessages(invalidCheckbox)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidCheckbox)).toContain('clears indeterminate');
    expect(issueMessages(invalidCheckbox)).toContain('info-icon-aria-label');
    expect(validCheckbox.valid).toBe(true);
    expect(invalidRadio.valid).toBe(false);
    expect(issueMessages(invalidRadio)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidRadio)).toContain('shared name');
    expect(validRadio.valid).toBe(true);
    expect(invalidRadioGroup.valid).toBe(false);
    expect(issueMessages(invalidRadioGroup)).toContain('requires label or aria-label');
    expect(issueMessages(invalidRadioGroup)).toContain('info-icon-aria-label');
    expect(validRadioGroup.valid).toBe(true);
    expect(invalidToggle.valid).toBe(false);
    expect(issueMessages(invalidToggle)).toContain('Valid values: default, compact');
    expect(issueMessages(invalidToggle)).toContain('Valid values: controlled, uncontrolled');
    expect(issueMessages(invalidToggle)).toContain('requires label or data-aria-label');
    expect(validToggle.valid).toBe(true);
  });

  it('validates combobox, listbox, selectlistbox, option, and optgroup rules', () => {
    const combobox = requireComponentForTest('combobox');
    const invalidCombobox = validateComponentUsage(
      combobox,
      {
        placement: 'left',
        filter: 'contains',
        'toggletip-text': 'Country help',
        required: true,
        'no-result-text': 'No matches',
      },
      '<mdc-option label="Germany"></mdc-option><mdc-option value="de" label="Germany"></mdc-option>',
    );
    const validCombobox = validateComponentUsage(
      combobox,
      {
        label: 'Country',
        filter: 'match-starts-with',
        placement: 'bottom-start',
        strategy: 'fixed',
        'no-result-text': 'No matches',
        'invalid-custom-value-text': 'Choose a country from the list',
      },
      [
        '<mdc-selectlistbox>',
        '<mdc-option value="de" label="Germany"></mdc-option>',
        '<mdc-option value="fr" label="France"></mdc-option>',
        '</mdc-selectlistbox>',
      ].join(''),
    );
    const listbox = requireComponentForTest('listbox');
    const invalidListbox = validateComponentUsage(
      listbox,
      { value: 'system' },
      [
        '<mdc-option value="light" label="Light" selected></mdc-option>',
        '<mdc-option value="dark" label="Dark" selected></mdc-option>',
        '<mdc-option label="System"></mdc-option>',
      ].join(''),
    );
    const validListbox = validateComponentUsage(
      listbox,
      { multiple: true, 'aria-label': 'Theme choices' },
      [
        '<mdc-optgroup label="Theme">',
        '<mdc-option value="light" label="Light"></mdc-option>',
        '<mdc-option value="dark" label="Dark"></mdc-option>',
        '</mdc-optgroup>',
      ].join(''),
    );
    const selectListBox = requireComponentForTest('selectlistbox');
    const invalidSelectListBox = validateComponentUsage(
      selectListBox,
      {},
      '<mdc-menuitem label="Open"></mdc-menuitem><mdc-tooltip>Full text</mdc-tooltip>',
    );
    const option = requireComponentForTest('option');
    const invalidOption = validateComponentUsage(option, {
      name: 'country',
      'tertiary-label': 'Extra',
    });
    const validOption = validateComponentUsage(option, {
      value: 'de',
      label: 'Germany',
      'secondary-label': 'DE',
    });
    const optgroup = requireComponentForTest('optgroup');
    const invalidOptgroup = validateComponentUsage(
      optgroup,
      {},
      '<mdc-menuitem label="Open"></mdc-menuitem><mdc-optgroup label="Nested"></mdc-optgroup>',
    );
    const validOptgroup = validateComponentUsage(
      optgroup,
      { label: 'Europe' },
      '<mdc-option value="de" label="Germany"></mdc-option>',
    );

    expect(invalidCombobox.valid).toBe(false);
    expect(issueMessages(invalidCombobox)).toContain('Valid values: bottom-start, top-start');
    expect(issueMessages(invalidCombobox)).toContain('Valid values: match-starts-with, none');
    expect(issueMessages(invalidCombobox)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidCombobox)).toContain('wrapped in an mdc-selectlistbox');
    expect(issueMessages(invalidCombobox)).toContain('without value attributes');
    expect(validCombobox.valid).toBe(true);
    expect(validCombobox.issues).toHaveLength(0);
    expect(invalidListbox.valid).toBe(false);
    expect(issueMessages(invalidListbox)).toContain('does not match any child mdc-option value');
    expect(issueMessages(invalidListbox)).toContain('without value attributes');
    expect(issueMessages(invalidListbox)).toContain('more than one selected');
    expect(validListbox.valid).toBe(true);
    expect(invalidSelectListBox.valid).toBe(false);
    expect(issueMessages(invalidSelectListBox)).toContain('Use mdc-option inside mdc-selectlistbox');
    expect(issueMessages(invalidSelectListBox)).toContain('Do not place mdc-tooltip');
    expect(invalidOption.valid).toBe(false);
    expect(issueMessages(invalidOption)).toContain('requires label or aria-label');
    expect(issueMessages(invalidOption)).toContain('requires value');
    expect(issueMessages(invalidOption)).toContain('intentionally not rendered');
    expect(validOption.valid).toBe(true);
    expect(invalidOptgroup.valid).toBe(false);
    expect(issueMessages(invalidOptgroup)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidOptgroup)).toContain('Do not nest mdc-optgroup');
    expect(issueMessages(invalidOptgroup)).toContain('use mdc-menusection');
    expect(validOptgroup.valid).toBe(true);
  });

  it('validates menuitem, menuitemcheckbox, menuitemradio, and menubar rules', () => {
    const menuitem = requireComponentForTest('menuitem');
    const invalidMenuitem = validateComponentUsage(
      menuitem,
      {
        'arrow-position': 'trailing',
        disabled: true,
        'soft-disabled': true,
        'data-index': -1,
      },
      '<button aria-label="Focusable child"></button>',
    );
    const validMenuitem = validateComponentUsage(menuitem, {
      id: 'share-menu',
      label: 'Share',
      'arrow-position': 'trailing',
      'arrow-direction': 'positive',
      'data-index': 0,
    });
    const menuitemcheckbox = requireComponentForTest('menuitemcheckbox');
    const invalidMenuitemCheckbox = validateComponentUsage(
      menuitemcheckbox,
      {
        indicator: 'radio',
        'control-type': 'manual',
        checked: true,
        disabled: true,
        'soft-disabled': true,
      },
      '<mdc-button>Focusable child</mdc-button>',
    );
    const validMenuitemCheckbox = validateComponentUsage(menuitemcheckbox, {
      label: 'Show sidebar',
      name: 'view',
      value: 'sidebar',
      indicator: 'toggle',
      'control-type': 'controlled',
    });
    const menuitemradio = requireComponentForTest('menuitemradio');
    const invalidMenuitemRadio = validateComponentUsage(
      menuitemradio,
      { indicator: 'checkbox' },
      '<mdc-button>Focusable child</mdc-button>',
    );
    const validMenuitemRadio = validateComponentUsage(menuitemradio, {
      label: 'Compact',
      name: 'density',
      value: 'compact',
      indicator: 'radio',
    });
    const menubar = requireComponentForTest('menubar');
    const invalidMenubar = validateComponentUsage(
      menubar,
      {},
      [
        '<mdc-menuitem id="file-menu" arrow-position="trailing"></mdc-menuitem>',
        '<mdc-option value="light" label="Light"></mdc-option>',
        '<mdc-menuitemradio name="density" value="compact" label="Compact" checked></mdc-menuitemradio>',
        '<mdc-menuitemradio name="density" value="default" label="Default" checked></mdc-menuitemradio>',
      ].join(''),
    );
    const validMenubar = validateComponentUsage(
      menubar,
      { 'aria-label': 'Main menu' },
      [
        '<mdc-menuitem id="file-menu" label="File" arrow-position="trailing"></mdc-menuitem>',
        '<mdc-menupopover triggerid="file-menu"><mdc-menuitem label="New"></mdc-menuitem></mdc-menupopover>',
        '<mdc-menuitemcheckbox label="Show sidebar" indicator="checkbox"></mdc-menuitemcheckbox>',
        '<mdc-menuitemradio name="density" value="compact" label="Compact"></mdc-menuitemradio>',
      ].join(''),
    );

    expect(invalidMenuitem.valid).toBe(false);
    expect(issueMessages(invalidMenuitem)).toContain('requires label or aria-label');
    expect(issueMessages(invalidMenuitem)).toContain('needs an id');
    expect(issueMessages(invalidMenuitem)).toContain('data-index must be 0 or greater');
    expect(validMenuitem.valid).toBe(true);
    expect(invalidMenuitemCheckbox.valid).toBe(false);
    expect(issueMessages(invalidMenuitemCheckbox)).toContain('Valid values: none, checkbox, checkmark, toggle');
    expect(issueMessages(invalidMenuitemCheckbox)).toContain('Valid values: controlled, uncontrolled');
    expect(issueMessages(invalidMenuitemCheckbox)).toContain('Do not place focusable descendants');
    expect(validMenuitemCheckbox.valid).toBe(true);
    expect(invalidMenuitemRadio.valid).toBe(false);
    expect(issueMessages(invalidMenuitemRadio)).toContain('Valid values: none, radio, checkmark');
    expect(issueMessages(invalidMenuitemRadio)).toContain('requires name');
    expect(issueMessages(invalidMenuitemRadio)).toContain('Do not place focusable descendants');
    expect(validMenuitemRadio.valid).toBe(true);
    expect(invalidMenubar.valid).toBe(false);
    expect(issueMessages(invalidMenubar)).toContain('Selection list components belong');
    expect(issueMessages(invalidMenubar)).toContain('Every menu item inside mdc-menubar needs label');
    expect(issueMessages(invalidMenubar)).toContain('No sibling mdc-menupopover triggerid matches');
    expect(issueMessages(invalidMenubar)).toContain('Only one mdc-menuitemradio per name should be checked');
    expect(validMenubar.valid).toBe(true);
  });

  it('validates dialog and announcementdialog overlay rules', () => {
    const dialog = requireComponentForTest('dialog');
    const invalidDialog = validateComponentUsage(dialog, {
      size: 'giant',
      variant: 'promo',
      role: 'alert',
      visible: true,
      'focus-trap': false,
      'hide-backdrop': true,
    });
    const validDialog = validateComponentUsage(
      dialog,
      {
        size: 'medium',
        variant: 'promotional',
        role: 'alertdialog',
        visible: true,
        triggerID: 'open-dialog',
        'header-text': 'Delete item?',
        'description-text': 'This action cannot be undone.',
        'close-button-aria-label': 'Close delete confirmation',
      },
      '<p slot="dialog-body">The item will be permanently removed.</p>',
    );
    const announcementDialog = requireComponentForTest('announcementdialog');
    const invalidAnnouncementDialog = validateComponentUsage(announcementDialog, {
      size: 'small',
      visible: true,
    });
    const validAnnouncementDialog = validateComponentUsage(announcementDialog, {
      size: 'medium',
      visible: true,
      triggerId: 'announcement-trigger',
      'aria-label': 'New workspace features',
      'close-button-aria-label': 'Close announcement',
    });

    expect(invalidDialog.valid).toBe(false);
    expect(issueMessages(invalidDialog)).toContain('Valid values: small, medium, large, xlarge, fullscreen');
    expect(issueMessages(invalidDialog)).toContain('Valid values: default, promotional');
    expect(issueMessages(invalidDialog)).toContain('Valid values: dialog, alertdialog');
    expect(issueMessages(invalidDialog)).toContain('requires header-text, aria-label, or aria-labelledby');
    expect(issueMessages(invalidDialog)).toContain('requires close-button-aria-label');
    expect(issueMessages(invalidDialog)).toContain('focus returns to the opener');
    expect(issueMessages(invalidDialog)).toContain('focus-trap enabled');
    expect(issueMessages(invalidDialog)).toContain('hide-backdrop');
    expect(validDialog.valid).toBe(true);
    expect(validDialog.issues).toHaveLength(0);
    expect(invalidAnnouncementDialog.valid).toBe(false);
    expect(issueMessages(invalidAnnouncementDialog)).toContain('Valid values: medium, large, xlarge, fullscreen');
    expect(issueMessages(invalidAnnouncementDialog)).toContain('requires aria-label or aria-labelledby');
    expect(issueMessages(invalidAnnouncementDialog)).toContain('requires close-button-aria-label');
    expect(validAnnouncementDialog.valid).toBe(true);
  });

  it('validates popover, tooltip, and toggletip overlay rules', () => {
    const popover = requireComponentForTest('popover');
    const invalidPopover = validateComponentUsage(popover, {
      placement: 'center',
      color: 'brand',
      strategy: 'sticky',
      'boundary-root': 'screen',
      trigger: 'click hover',
      'close-button': true,
      'focus-trap': true,
      'propagate-event-on-escape': true,
      delay: 'soon',
      'element-index-to-receive-focus': -1,
    });
    const validPopover = validateComponentUsage(
      popover,
      {
        triggerid: 'settings-trigger',
        placement: 'bottom-start',
        color: 'tonal',
        strategy: 'fixed',
        'boundary-root': 'viewport',
        interactive: true,
        'focus-trap': true,
        'hide-on-escape': true,
        'focus-back-to-trigger': true,
        'close-button': true,
        'close-button-aria-label': 'Close settings',
        'aria-label': 'Settings',
        trigger: 'click focusin',
        delay: '100,200',
        'element-index-to-receive-focus': 0,
      },
      '<mdc-button>Save</mdc-button>',
    );
    const tooltip = requireComponentForTest('tooltip');
    const invalidTooltip = validateComponentUsage(
      tooltip,
      {
        placement: 'middle',
        'tooltip-type': 'name',
      },
      '<button>Focusable child</button>',
    );
    const validTooltip = validateComponentUsage(
      tooltip,
      {
        triggerid: 'save-btn',
        'tooltip-type': 'description',
        placement: 'top',
      },
      'Save document',
    );
    const toggletip = requireComponentForTest('toggletip');
    const invalidToggletip = validateComponentUsage(toggletip, { placement: 'middle' });
    const validToggletip = validateComponentUsage(
      toggletip,
      {
        triggerid: 'info-trigger',
        placement: 'bottom',
        'close-button-aria-label': 'Close help',
      },
      'Use this setting to allow notifications.',
    );

    expect(invalidPopover.valid).toBe(false);
    expect(issueMessages(invalidPopover)).toContain('Valid values: left-start, left, left-end');
    expect(issueMessages(invalidPopover)).toContain('Valid values: tonal, contrast');
    expect(issueMessages(invalidPopover)).toContain('Valid values: absolute, fixed');
    expect(issueMessages(invalidPopover)).toContain('Valid values: viewport, document');
    expect(issueMessages(invalidPopover)).toContain('requires triggerid');
    expect(issueMessages(invalidPopover)).toContain('Invalid values: hover');
    expect(issueMessages(invalidPopover)).toContain('requires close-button-aria-label');
    expect(issueMessages(invalidPopover)).toContain('requires interactive');
    expect(issueMessages(invalidPopover)).toContain('only applies when hide-on-escape is true');
    expect(issueMessages(invalidPopover)).toContain('delay must use');
    expect(issueMessages(invalidPopover)).toContain('element-index-to-receive-focus must be 0 or greater');
    expect(validPopover.valid).toBe(true);
    expect(invalidTooltip.valid).toBe(false);
    expect(issueMessages(invalidTooltip)).toContain('Valid values: left-start, left, left-end');
    expect(issueMessages(invalidTooltip)).toContain('Valid values: description, label, none');
    expect(issueMessages(invalidTooltip)).toContain('requires triggerid');
    expect(issueMessages(invalidTooltip)).toContain('Do not place focusable');
    expect(validTooltip.valid).toBe(true);
    expect(invalidToggletip.valid).toBe(false);
    expect(issueMessages(invalidToggletip)).toContain('Valid values: left-start, left, left-end');
    expect(issueMessages(invalidToggletip)).toContain('requires triggerid');
    expect(issueMessages(invalidToggletip)).toContain('requires close-button-aria-label');
    expect(issueMessages(invalidToggletip)).toContain('requires descriptive text content');
    expect(validToggletip.valid).toBe(true);
  });

  it('validates toast, banner, and statusmessage feedback rules', () => {
    const toast = requireComponentForTest('toast');
    const invalidToast = validateComponentUsage(
      toast,
      {
        variant: 'info',
        'show-more-text': 'Show more',
      },
      '<mdc-text slot="toast-body-detailed" tagname="span">Details</mdc-text>',
    );
    const validToast = validateComponentUsage(
      toast,
      {
        variant: 'success',
        'header-text': 'Uploaded',
        'close-button-aria-label': 'Close notification',
        role: 'status',
        'show-more-text': 'Show more',
        'show-less-text': 'Show less',
      },
      [
        '<mdc-text slot="toast-body-normal" tagname="span">Your file is ready.</mdc-text>',
        '<mdc-text slot="toast-body-detailed" tagname="span">Anyone with access can download it.</mdc-text>',
      ].join(''),
    );
    const banner = requireComponentForTest('banner');
    const invalidBanner = validateComponentUsage(banner, {
      variant: 'critical',
      'secondary-label': 'Retrying in background',
    });
    const validBanner = validateComponentUsage(banner, {
      variant: 'warning',
      label: 'Connection unstable',
      'secondary-label': 'Retrying in background',
      role: 'status',
    });
    const statusMessage = requireComponentForTest('statusmessage');
    const invalidStatusMessage = validateComponentUsage(statusMessage, {
      severity: 'danger',
    });
    const validStatusMessage = validateComponentUsage(statusMessage, {
      severity: 'error',
      message: 'Choose a stronger password',
      role: 'alert',
    });

    expect(invalidToast.valid).toBe(false);
    expect(issueMessages(invalidToast)).toContain('Valid values: custom, success, warning, error');
    expect(issueMessages(invalidToast)).toContain('requires header-text or aria-label');
    expect(issueMessages(invalidToast)).toContain('requires close-button-aria-label');
    expect(issueMessages(invalidToast)).toContain('show-more-text and show-less-text must be provided together');
    expect(issueMessages(invalidToast)).toContain('detailed body content requires both');
    expect(validToast.valid).toBe(true);
    expect(invalidBanner.valid).toBe(false);
    expect(issueMessages(invalidBanner)).toContain('Valid values: custom, informational, warning, error, success');
    expect(issueMessages(invalidBanner)).toContain('requires label text');
    expect(issueMessages(invalidBanner)).toContain('secondary-label is ignored');
    expect(validBanner.valid).toBe(true);
    expect(invalidStatusMessage.valid).toBe(false);
    expect(issueMessages(invalidStatusMessage)).toContain('Valid values: default, error, warning, success, priority');
    expect(issueMessages(invalidStatusMessage)).toContain('requires message or meaningful text content');
    expect(validStatusMessage.valid).toBe(true);
  });

  it('validates card, divider, and list layout rules', () => {
    const card = requireComponentForTest('card');
    const invalidCard = validateComponentUsage(
      card,
      {
        variant: 'outline',
        orientation: 'diagonal',
        'image-src': '/images/team.png',
      },
      [
        '<mdc-button slot="icon-button" prefix-icon="more-bold"></mdc-button>',
        '<mdc-button slot="icon-button" prefix-icon="settings-bold" aria-label="Settings"></mdc-button>',
        '<mdc-button slot="icon-button" prefix-icon="share-bold" aria-label="Share"></mdc-button>',
        '<mdc-button slot="icon-button" prefix-icon="edit-bold" aria-label="Edit"></mdc-button>',
        '<mdc-button slot="footer">Custom footer</mdc-button>',
        '<mdc-button slot="footer-button-primary">Open</mdc-button>',
      ].join(''),
    );
    const validCard = validateComponentUsage(
      card,
      {
        variant: 'border',
        orientation: 'vertical',
        'card-title': 'Weekly sync',
        'image-src': '/images/team.png',
        'image-alt': 'Photo of the project team',
      },
      [
        '<mdc-button slot="icon-button" prefix-icon="more-bold" aria-label="More options"></mdc-button>',
        '<mdc-text slot="body">Quick alignment on roadmap and blockers.</mdc-text>',
        '<mdc-link slot="footer-link" href="/events/weekly-sync">Open event</mdc-link>',
      ].join(''),
    );
    const divider = requireComponentForTest('divider');
    const invalidDivider = validateComponentUsage(
      divider,
      {
        orientation: 'vertical',
        variant: 'dashed',
        'arrow-direction': 'up',
        'button-position': 'center',
      },
      '<mdc-text>OR</mdc-text><span>Extra</span><mdc-button prefix-icon="arrow-down-regular"></mdc-button>',
    );
    const validDivider = validateComponentUsage(
      divider,
      {
        orientation: 'horizontal',
        variant: 'gradient',
        'arrow-direction': 'negative',
        'button-position': 'positive',
      },
      '<mdc-button aria-label="Collapse details"></mdc-button>',
    );
    const list = requireComponentForTest('list');
    const invalidList = validateComponentUsage(
      list,
      {
        orientation: 'diagonal',
        loop: 'maybe',
        'initial-focus': -1,
      },
      '<mdc-listheader header-text="Recent"></mdc-listheader><mdc-option value="x" label="Wrong"></mdc-option>',
    );
    const validList = validateComponentUsage(
      list,
      {
        orientation: 'vertical',
        loop: 'false',
        'initial-focus': 1,
      },
      [
        '<mdc-listheader slot="list-header" header-text="Recent files"></mdc-listheader>',
        '<mdc-listitem label="Project plan"></mdc-listitem>',
        '<mdc-listitem label="Release notes"></mdc-listitem>',
      ].join(''),
    );

    expect(invalidCard.valid).toBe(false);
    expect(issueMessages(invalidCard)).toContain('Valid values: border, ghost, promotional');
    expect(issueMessages(invalidCard)).toContain('Valid values: horizontal, vertical');
    expect(issueMessages(invalidCard)).toContain('requires image-alt');
    expect(issueMessages(invalidCard)).toContain('at most three icon-button');
    expect(issueMessages(invalidCard)).toContain('Icon-only mdc-button');
    expect(issueMessages(invalidCard)).toContain('Avoid mixing the generic mdc-card footer slot');
    expect(validCard.valid).toBe(true);
    expect(invalidDivider.valid).toBe(false);
    expect(issueMessages(invalidDivider)).toContain('Valid values: solid, gradient');
    expect(issueMessages(invalidDivider)).toContain('Valid values: positive, negative');
    expect(issueMessages(invalidDivider)).toContain('exactly one slotted child');
    expect(issueMessages(invalidDivider)).toContain('Vertical mdc-divider does not support');
    expect(issueMessages(invalidDivider)).toContain('requires aria-label');
    expect(validDivider.valid).toBe(true);
    expect(invalidList.valid).toBe(false);
    expect(issueMessages(invalidList)).toContain('Valid values: vertical, horizontal');
    expect(issueMessages(invalidList)).toContain('Valid values: true, false, true, false');
    expect(issueMessages(invalidList)).toContain('initial-focus must be 0 or greater');
    expect(issueMessages(invalidList)).toContain('Use mdc-listitem inside mdc-list');
    expect(issueMessages(invalidList)).toContain('slot="list-header"');
    expect(validList.valid).toBe(true);
  });

  it('validates listitem, listheader, and sidenavigation rules', () => {
    const listitem = requireComponentForTest('listitem');
    const invalidListitem = validateComponentUsage(listitem, {
      variant: 'pill',
      active: true,
      'data-index': -1,
      'secondary-label': 'Updated yesterday',
      disabled: true,
      'soft-disabled': true,
    });
    const validListitem = validateComponentUsage(listitem, {
      variant: 'inset-pill',
      label: 'Release notes',
      active: true,
      'aria-current': 'page',
      'data-index': 0,
    });
    const listheader = requireComponentForTest('listheader');
    const invalidListheader = validateComponentUsage(
      listheader,
      { disabled: true },
      '<mdc-button prefix-icon="plus-bold"></mdc-button>',
    );
    const validListheader = validateComponentUsage(
      listheader,
      { 'header-text': 'Recent files' },
      '<mdc-button aria-label="Create file" prefix-icon="plus-bold"></mdc-button>',
    );
    const sideNavigation = requireComponentForTest('sidenavigation');
    const invalidSideNavigation = validateComponentUsage(
      sideNavigation,
      {
        variant: 'flexible',
        'submenu-type': 'nested',
      },
      [
        '<mdc-menubar slot="scrollable-menubar">',
        '<mdc-navmenuitem nav-id="home" icon-name="home-bold"></mdc-navmenuitem>',
        '</mdc-menubar>',
        '<mdc-icon slot="brand-logo" name="logo-bold"></mdc-icon>',
      ].join(''),
    );
    const validSideNavigation = validateComponentUsage(
      sideNavigation,
      {
        variant: 'flexible',
        'submenu-type': 'flyout',
        'grabber-btn-aria-label': 'Toggle navigation',
        'aria-label': 'Primary',
        'footer-text': 'Momentum',
      },
      [
        '<mdc-menubar slot="scrollable-menubar" aria-label="Main">',
        '<mdc-navmenuitem nav-id="home" aria-label="Home" icon-name="home-bold"></mdc-navmenuitem>',
        '</mdc-menubar>',
        '<mdc-icon slot="brand-logo" name="logo-bold"></mdc-icon>',
      ].join(''),
    );

    expect(invalidListitem.valid).toBe(false);
    expect(issueMessages(invalidListitem)).toContain('Valid values: full-width, inset-pill, inset-rectangle');
    expect(issueMessages(invalidListitem)).toContain('data-index must be 0 or greater');
    expect(issueMessages(invalidListitem)).toContain('requires label, aria-label');
    expect(issueMessages(invalidListitem)).toContain('active is visual-only');
    expect(issueMessages(invalidListitem)).toContain('either disabled or soft-disabled');
    expect(validListitem.valid).toBe(true);
    expect(invalidListheader.valid).toBe(false);
    expect(issueMessages(invalidListheader)).toContain('should use header-text');
    expect(issueMessages(invalidListheader)).toContain('does not disable slotted actions');
    expect(issueMessages(invalidListheader)).toContain('Icon-only actions');
    expect(validListheader.valid).toBe(true);
    expect(invalidSideNavigation.valid).toBe(false);
    expect(issueMessages(invalidSideNavigation)).toContain('Valid values: flyout, dropdown');
    expect(issueMessages(invalidSideNavigation)).toContain('flexible variants require grabber-btn-aria-label');
    expect(issueMessages(invalidSideNavigation)).toContain('Every mdc-menubar');
    expect(issueMessages(invalidSideNavigation)).toContain('Every mdc-navmenuitem');
    expect(issueMessages(invalidSideNavigation)).toContain('brand-logo slot is not rendered');
    expect(validSideNavigation.valid).toBe(true);
  });

  it('validates tab, tablist, and verticaltablist navigation rules', () => {
    const tab = requireComponentForTest('tab');
    const invalidTab = validateComponentUsage(
      tab,
      {
        variant: 'underline',
        size: 40,
        'aria-haspopup': 'dialog',
      },
      '<mdc-badge slot="postfix" type="dot"></mdc-badge><mdc-chip slot="postfix" label="New"></mdc-chip>',
    );
    const validTab = validateComponentUsage(tab, {
      'tab-id': 'overview',
      text: 'Overview',
      variant: 'line',
      size: 28,
      'aria-controls': 'overview-panel',
      'aria-haspopup': 'menu',
    });
    const tablist = requireComponentForTest('tablist');
    const invalidTablist = validateComponentUsage(
      tablist,
      {
        tabvariant: 'underline',
        tabsize: 40,
        'active-tab-id': 'billing',
      },
      [
        '<mdc-tab tab-id="overview" text="Overview" active></mdc-tab>',
        '<mdc-tab tab-id="overview" active></mdc-tab>',
        '<mdc-listitem label="Wrong child"></mdc-listitem>',
      ].join(''),
    );
    const validTablist = validateComponentUsage(
      tablist,
      {
        'data-aria-label': 'Account sections',
        tabvariant: 'pill',
        tabsize: 32,
        'active-tab-id': 'overview',
      },
      [
        '<mdc-tab tab-id="overview" text="Overview" aria-controls="overview-panel" active></mdc-tab>',
        '<mdc-tab tab-id="activity" text="Activity" aria-controls="activity-panel"></mdc-tab>',
      ].join(''),
    );
    const verticalTablist = requireComponentForTest('verticaltablist');
    const invalidVerticalTablist = validateComponentUsage(
      verticalTablist,
      {
        'initial-focus': -1,
      },
      [
        '<mdc-tab tab-id="account" variant="pill" active></mdc-tab>',
        '<mdc-tab tab-id="billing" active></mdc-tab>',
      ].join(''),
    );
    const validVerticalTablist = validateComponentUsage(
      verticalTablist,
      {
        'data-aria-label': 'Settings sections',
        loop: 'false',
        'initial-focus': 0,
      },
      [
        '<mdc-tab tab-id="account" text="Account" aria-controls="panel-account" active></mdc-tab>',
        '<mdc-tab tab-id="billing" text="Billing" aria-controls="panel-billing"></mdc-tab>',
      ].join(''),
    );

    expect(invalidTab.valid).toBe(false);
    expect(issueMessages(invalidTab)).toContain('Valid values: glass, line, pill');
    expect(issueMessages(invalidTab)).toContain('Valid values: 28, 32');
    expect(issueMessages(invalidTab)).toContain('Valid values: menu, true, true');
    expect(issueMessages(invalidTab)).toContain('requires tab-id');
    expect(issueMessages(invalidTab)).toContain('requires text or aria-label');
    expect(issueMessages(invalidTab)).toContain('aria-controls');
    expect(issueMessages(invalidTab)).toContain('both a badge and a chip');
    expect(validTab.valid).toBe(true);
    expect(invalidTablist.valid).toBe(false);
    expect(issueMessages(invalidTablist)).toContain('Valid values: glass, line, pill');
    expect(issueMessages(invalidTablist)).toContain('Valid values: 28, 32');
    expect(issueMessages(invalidTablist)).toContain('duplicate mdc-tab tab-id values');
    expect(issueMessages(invalidTablist)).toContain('requires text or aria-label');
    expect(issueMessages(invalidTablist)).toContain('more than one active');
    expect(issueMessages(invalidTablist)).toContain('active-tab-id must match');
    expect(issueMessages(invalidTablist)).toContain('not list, option, or menu item');
    expect(validTablist.valid).toBe(true);
    expect(invalidVerticalTablist.valid).toBe(false);
    expect(issueMessages(invalidVerticalTablist)).toContain('initial-focus must be 0 or greater');
    expect(issueMessages(invalidVerticalTablist)).toContain('should provide data-aria-label');
    expect(issueMessages(invalidVerticalTablist)).toContain('Every mdc-tab inside mdc-verticaltablist requires text');
    expect(issueMessages(invalidVerticalTablist)).toContain('more than one active');
    expect(issueMessages(invalidVerticalTablist)).toContain('overrides child mdc-tab variant to line');
    expect(validVerticalTablist.valid).toBe(true);
  });

  it('validates avatar, avatarbutton, badge, and presence identity rules', () => {
    const avatar = requireComponentForTest('avatar');
    const invalidAvatar = validateComponentUsage(avatar, {
      size: 40,
      type: 'shape',
      counter: -1,
      presence: 'sleeping',
      'aria-hidden': false,
      'icon-name': 'person-bold',
      initials: 'AB',
      'is-typing': true,
    });
    const validAvatar = validateComponentUsage(avatar, {
      initials: 'AB',
      size: 32,
      presence: 'active',
      'aria-hidden': true,
    });
    const avatarButton = requireComponentForTest('avatarbutton');
    const invalidAvatarButton = validateComponentUsage(avatarButton, {
      initials: 'AB',
      size: 48,
    });
    const validAvatarButton = validateComponentUsage(avatarButton, {
      initials: 'AB',
      size: 48,
      presence: 'busy',
      'aria-label': 'Jenet John',
    });
    const badge = requireComponentForTest('badge');
    const invalidBadge = validateComponentUsage(badge, {
      type: 'counter',
      counter: -1,
      variant: 'tertiary',
      'max-counter': 100,
    });
    const validBadge = validateComponentUsage(badge, {
      type: 'counter',
      counter: 5,
      variant: 'primary',
      'max-counter': 99,
      'aria-label': '5 unread messages',
    });
    const presence = requireComponentForTest('presence');
    const invalidPresence = validateComponentUsage(presence, {
      type: 'offline',
      size: 40,
    });
    const validPresence = validateComponentUsage(presence, {
      type: 'active',
      size: 32,
      'aria-hidden': true,
    });

    expect(invalidAvatar.valid).toBe(false);
    expect(issueMessages(invalidAvatar)).toContain('Valid values: 24, 32, 48, 64, 72, 88, 124');
    expect(issueMessages(invalidAvatar)).toContain('Valid values: counter, icon, photo, text');
    expect(issueMessages(invalidAvatar)).toContain('Valid values: none, active, away');
    expect(issueMessages(invalidAvatar)).toContain('counter must be 0 or greater');
    expect(issueMessages(invalidAvatar)).toContain('aria-hidden="false" requires aria-label');
    expect(issueMessages(invalidAvatar)).toContain('hides presence when counter or is-typing');
    expect(validAvatar.valid).toBe(true);
    expect(invalidAvatarButton.valid).toBe(false);
    expect(issueMessages(invalidAvatarButton)).toContain('requires aria-label');
    expect(validAvatarButton.valid).toBe(true);
    expect(invalidBadge.valid).toBe(false);
    expect(issueMessages(invalidBadge)).toContain('Valid values: primary, secondary');
    expect(issueMessages(invalidBadge)).toContain('Valid values: 9, 99, 999');
    expect(issueMessages(invalidBadge)).toContain('counter must be 0 or greater');
    expect(issueMessages(invalidBadge)).toContain('requires aria-label or aria-labelledby');
    expect(validBadge.valid).toBe(true);
    expect(invalidPresence.valid).toBe(false);
    expect(issueMessages(invalidPresence)).toContain('Valid values: active, away');
    expect(issueMessages(invalidPresence)).toContain('Valid values: 24, 32, 48, 64, 72, 88, 124');
    expect(validPresence.valid).toBe(true);
  });

  it('validates chip, filterchip, alertchip, and staticchip rules', () => {
    const chip = requireComponentForTest('chip');
    const invalidChip = validateComponentUsage(chip, {
      color: 'red',
      active: true,
      'soft-disabled': true,
    });
    const validChip = validateComponentUsage(chip, {
      label: 'Design',
      color: 'cobalt',
    });
    const filterChip = requireComponentForTest('filterchip');
    const invalidFilterChip = validateComponentUsage(filterChip, {
      selected: true,
      color: 'cobalt',
    });
    const validFilterChip = validateComponentUsage(filterChip, {
      label: 'In stock',
      selected: true,
    });
    const alertChip = requireComponentForTest('alertchip');
    const invalidAlertChip = validateComponentUsage(alertChip, {
      variant: 'critical',
    });
    const validAlertChip = validateComponentUsage(alertChip, {
      label: 'Unstable',
      variant: 'warning',
    });
    const staticChip = requireComponentForTest('staticchip');
    const invalidStaticChip = validateComponentUsage(staticChip, {
      color: 'red',
    });
    const validStaticChip = validateComponentUsage(staticChip, {
      label: 'Ready',
      color: 'mint',
    });

    expect(invalidChip.valid).toBe(false);
    expect(issueMessages(invalidChip)).toContain('Valid values: default, cobalt, gold');
    expect(issueMessages(invalidChip)).toContain('requires label text');
    expect(issueMessages(invalidChip)).toContain('resets active state');
    expect(issueMessages(invalidChip)).toContain('resets soft-disabled state');
    expect(validChip.valid).toBe(true);
    expect(invalidFilterChip.valid).toBe(false);
    expect(issueMessages(invalidFilterChip)).toContain('requires label text');
    expect(issueMessages(invalidFilterChip)).toContain('non-default color values have no effect');
    expect(validFilterChip.valid).toBe(true);
    expect(invalidAlertChip.valid).toBe(false);
    expect(issueMessages(invalidAlertChip)).toContain('Valid values: neutral, error, success, warning, informational');
    expect(issueMessages(invalidAlertChip)).toContain('requires label text or an accessible aria label');
    expect(validAlertChip.valid).toBe(true);
    expect(invalidStaticChip.valid).toBe(false);
    expect(issueMessages(invalidStaticChip)).toContain('Valid values: default, cobalt, gold');
    expect(issueMessages(invalidStaticChip)).toContain('requires label text');
    expect(validStaticChip.valid).toBe(true);
  });

  it('validates icon, illustration, brandvisual, and animation asset rules', () => {
    const icon = requireComponentForTest('icon');
    const invalidIcon = validateComponentUsage(icon, {
      size: 0,
      tabindex: 0,
    });
    const validIcon = validateComponentUsage(icon, {
      name: 'check-bold',
      size: 1.5,
      'aria-hidden': true,
    });
    const illustration = requireComponentForTest('illustration');
    const invalidIllustration = validateComponentUsage(illustration, {
      'aria-hidden': true,
      'aria-label': 'Empty state',
    });
    const validIllustration = validateComponentUsage(illustration, {
      name: 'empty-state',
      'aria-label': 'Empty inbox',
    });
    const brandVisual = requireComponentForTest('brandvisual');
    const invalidBrandVisual = validateComponentUsage(brandVisual, {});
    const validBrandVisual = validateComponentUsage(brandVisual, {
      name: 'momentum-logo',
      'alt-text': 'Momentum',
    });
    const animation = requireComponentForTest('animation');
    const invalidAnimation = validateComponentUsage(animation, {
      loop: 'forever',
      'aria-hidden': true,
      'aria-label': 'Success animation',
    });
    const validAnimation = validateComponentUsage(animation, {
      name: 'success',
      loop: false,
      'aria-hidden': true,
    });

    expect(invalidIcon.valid).toBe(false);
    expect(issueMessages(invalidIcon)).toContain('requires name');
    expect(issueMessages(invalidIcon)).toContain('size must be greater than 0');
    expect(issueMessages(invalidIcon)).toContain('Focusable mdc-icon usage requires');
    expect(validIcon.valid).toBe(true);
    expect(invalidIllustration.valid).toBe(false);
    expect(issueMessages(invalidIllustration)).toContain('requires name');
    expect(issueMessages(invalidIllustration)).toContain('should not combine aria-hidden="true"');
    expect(validIllustration.valid).toBe(true);
    expect(invalidBrandVisual.valid).toBe(false);
    expect(issueMessages(invalidBrandVisual)).toContain('requires name');
    expect(issueMessages(invalidBrandVisual)).toContain('should provide alt-text');
    expect(validBrandVisual.valid).toBe(true);
    expect(invalidAnimation.valid).toBe(false);
    expect(issueMessages(invalidAnimation)).toContain('requires name or src');
    expect(issueMessages(invalidAnimation)).toContain('loop must be true, false');
    expect(issueMessages(invalidAnimation)).toContain('should not combine aria-hidden="true"');
    expect(validAnimation.valid).toBe(true);
  });

  it('validates accordion, primitive button, button group, and link rules', () => {
    const accordion = requireComponentForTest('accordion');
    const invalidAccordion = validateComponentUsage(accordion, {
      'data-aria-level': 7,
    });
    const validAccordion = validateComponentUsage(accordion, {
      'heading-text': 'Security',
      'open-button-aria-label': 'Expand security settings',
      'close-button-aria-label': 'Collapse security settings',
      'data-aria-level': 2,
    });
    const accordionButton = requireComponentForTest('accordionbutton');
    const invalidAccordionButton = validateComponentUsage(accordionButton, {
      size: 'medium',
      variant: 'contained',
      'toggle-position': 'start',
      'data-aria-level': 0,
    });
    const validAccordionButton = validateComponentUsage(accordionButton, {
      'header-text': 'Billing',
      size: 'small',
      variant: 'default',
      'toggle-position': 'trailing',
      'data-aria-level': 3,
    });
    const accordionGroup = requireComponentForTest('accordiongroup');
    const invalidAccordionGroup = validateComponentUsage(
      accordionGroup,
      { size: 'medium', variant: 'outlined' },
      '<mdc-button>Wrong child</mdc-button>',
    );
    const validAccordionGroup = validateComponentUsage(
      accordionGroup,
      { size: 'large', variant: 'contained' },
      '<mdc-accordionbutton header-text="Billing"></mdc-accordionbutton>',
    );
    const buttonSimple = requireComponentForTest('buttonsimple');
    const invalidButtonSimple = validateComponentUsage(
      buttonSimple,
      {
        size: 999,
        type: 'menu',
        'aria-state-key': 'pressed',
      },
      '<mdc-button prefix-icon="settings-bold"></mdc-button>',
    );
    const validButtonSimple = validateComponentUsage(buttonSimple, { type: 'submit' }, 'Save');
    const buttonGroup = requireComponentForTest('buttongroup');
    const invalidButtonGroup = validateComponentUsage(
      buttonGroup,
      { size: 20, orientation: 'diagonal', variant: 'tertiary' },
      '<mdc-button prefix-icon="bold-bold"></mdc-button><mdc-link href="/x">Wrong</mdc-link>',
    );
    const validButtonGroup = validateComponentUsage(
      buttonGroup,
      { size: 32, orientation: 'horizontal', variant: 'secondary' },
      '<mdc-button prefix-icon="bold-bold" aria-label="Bold"></mdc-button><mdc-button>Save</mdc-button>',
    );
    const link = requireComponentForTest('link');
    const invalidLink = validateComponentUsage(link, { target: '_blank', rel: 'noreferrer' });
    const validLink = validateComponentUsage(
      link,
      {
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer',
        size: 'midsize',
        'data-aria-label': 'Open example in a new tab',
      },
      'Example',
    );
    const linkSimple = requireComponentForTest('linksimple');
    const invalidLinkSimple = validateComponentUsage(
      linkSimple,
      { href: '/profile' },
      '<mdc-icon name="user-bold"></mdc-icon>',
    );
    const validLinkSimple = validateComponentUsage(
      linkSimple,
      { href: '/profile', 'data-aria-label': 'Open profile' },
      '<mdc-icon name="user-bold"></mdc-icon>',
    );

    expect(invalidAccordion.valid).toBe(false);
    expect(issueMessages(invalidAccordion)).toContain('requires heading-text');
    expect(issueMessages(invalidAccordion)).toContain('requires open-button-aria-label');
    expect(issueMessages(invalidAccordion)).toContain('requires close-button-aria-label');
    expect(issueMessages(invalidAccordion)).toContain('data-aria-level must be an integer from 1 to 6');
    expect(validAccordion.valid).toBe(true);
    expect(invalidAccordionButton.valid).toBe(false);
    expect(issueMessages(invalidAccordionButton)).toContain('Valid values: small, large');
    expect(issueMessages(invalidAccordionButton)).toContain('Valid values: default, borderless');
    expect(issueMessages(invalidAccordionButton)).toContain('Valid values: leading, trailing');
    expect(issueMessages(invalidAccordionButton)).toContain('requires header-text');
    expect(validAccordionButton.valid).toBe(true);
    expect(invalidAccordionGroup.valid).toBe(false);
    expect(issueMessages(invalidAccordionGroup)).toContain('Valid values: small, large');
    expect(issueMessages(invalidAccordionGroup)).toContain('Valid values: borderless, contained, stacked');
    expect(issueMessages(invalidAccordionGroup)).toContain('Unsupported mdc-* children');
    expect(validAccordionGroup.valid).toBe(true);
    expect(invalidButtonSimple.valid).toBe(false);
    expect(issueMessages(invalidButtonSimple)).toContain('Valid values: 12, 14, 16');
    expect(issueMessages(invalidButtonSimple)).toContain('Valid values: button, submit, reset');
    expect(issueMessages(invalidButtonSimple)).toContain('requires aria-label');
    expect(issueMessages(invalidButtonSimple)).toContain('Do not place focusable descendants');
    expect(validButtonSimple.valid).toBe(true);
    expect(invalidButtonGroup.valid).toBe(false);
    expect(issueMessages(invalidButtonGroup)).toContain('Valid values: 24, 28, 32, 40');
    expect(issueMessages(invalidButtonGroup)).toContain('Icon-only mdc-button children');
    expect(validButtonGroup.valid).toBe(true);
    expect(invalidLink.valid).toBe(false);
    expect(issueMessages(invalidLink)).toContain('target="_blank" must include rel="noopener"');
    expect(issueMessages(invalidLink)).toContain('requires link text or data-aria-label');
    expect(validLink.valid).toBe(true);
    expect(invalidLinkSimple.valid).toBe(false);
    expect(issueMessages(invalidLinkSimple)).toContain('requires link text or data-aria-label');
    expect(validLinkSimple.valid).toBe(true);
  });

  it('validates calendar, datepicker, timepicker, select, password, and search rules', () => {
    const calendar = requireComponentForTest('calendar');
    const invalidCalendar = validateComponentUsage(calendar, {
      'selection-mode': 'month',
      value: '2026-99-99',
      min: '2026-12-31',
      max: '2026-01-01',
    });
    const validCalendar = validateComponentUsage(calendar, {
      'selection-mode': 'range',
      value: '2026-06-10',
      'end-value': '2026-06-14',
      min: '2026-01-01',
      max: '2026-12-31',
      'locale-today-label': 'Today',
      'locale-prev-month-label': 'Previous month',
      'locale-next-month-label': 'Next month',
    });
    const datePicker = requireComponentForTest('datepicker');
    const invalidDatePicker = validateComponentUsage(datePicker, {
      variant: 'calendar',
      value: '06/10/2026',
      min: '2026-12-31',
      max: '2026-01-01',
    });
    const validDatePicker = validateComponentUsage(datePicker, {
      label: 'Date of birth',
      variant: 'input',
      value: '2026-06-10',
      locale: 'en-US',
      'locale-calendar-label': 'Open calendar',
      'locale-today-label': 'Today',
      'locale-prev-month-label': 'Previous month',
      'locale-next-month-label': 'Next month',
      'locale-month-label': 'Month',
      'locale-day-label': 'Day',
      'locale-year-label': 'Year',
      'locale-spinbutton-description': 'Use arrow keys to adjust',
    });
    const timePicker = requireComponentForTest('timepicker');
    const invalidTimePicker = validateComponentUsage(timePicker, {
      'time-format': '13h',
      value: '25:99',
      interval: 0,
    });
    const validTimePicker = validateComponentUsage(timePicker, {
      label: 'Start time',
      'time-format': '24h',
      value: '14:30',
      min: '09:00',
      max: '18:00',
      interval: 15,
      'locale-hours-label': 'Hours',
      'locale-minutes-label': 'Minutes',
      'locale-hours-placeholder': 'HH',
      'locale-minutes-placeholder': 'MM',
      'locale-show-time-picker-label': 'Show time picker',
      'locale-time-options-label': 'Time options',
      'locale-spinbutton-description': 'Use arrow keys to adjust',
    });
    const select = requireComponentForTest('select');
    const invalidSelect = validateComponentUsage(
      select,
      {
        placement: 'left',
        required: true,
        'toggletip-text': 'Choose a country',
      },
      '<mdc-option label="Germany"></mdc-option>',
    );
    const validSelect = validateComponentUsage(
      select,
      {
        label: 'Country',
        placement: 'bottom-start',
        strategy: 'fixed',
        required: true,
        'validation-message': 'Choose a country',
      },
      [
        '<mdc-selectlistbox>',
        '<mdc-option value="de" label="Germany"></mdc-option>',
        '<mdc-option value="fr" label="France"></mdc-option>',
        '</mdc-selectlistbox>',
      ].join(''),
    );
    const password = requireComponentForTest('password');
    const invalidPassword = validateComponentUsage(password, {
      minlength: 12,
      maxlength: 4,
      required: true,
    });
    const validPassword = validateComponentUsage(password, {
      label: 'Password',
      name: 'password',
      minlength: 8,
      maxlength: 64,
      'show-button-aria-label': 'Show password',
      'hide-button-aria-label': 'Hide password',
    });
    const searchField = requireComponentForTest('searchfield');
    const invalidSearchField = validateComponentUsage(
      searchField,
      {
        'control-type': 'manual',
        'toggletip-text': 'Search help',
      },
      '<mdc-listbox></mdc-listbox><mdc-button slot="filters">Wrong</mdc-button>',
    );
    const validSearchField = validateComponentUsage(
      searchField,
      {
        label: 'Search messages',
        'clear-aria-label': 'Clear search',
        'control-type': 'uncontrolled',
      },
      '<mdc-inputchip slot="filters" label="From: Ada"></mdc-inputchip>',
    );
    const searchPopover = requireComponentForTest('searchpopover');
    const invalidSearchPopover = validateComponentUsage(searchPopover, {
      placement: 'left',
      'display-popover': true,
    });
    const validSearchPopover = validateComponentUsage(
      searchPopover,
      {
        label: 'Search',
        'clear-aria-label': 'Clear search',
        'popover-aria-label': 'Search results',
        placement: 'bottom-start',
        'display-popover': true,
      },
      '<mdc-list><mdc-listitem label="Result 1"></mdc-listitem></mdc-list>',
    );

    expect(invalidCalendar.valid).toBe(false);
    expect(issueMessages(invalidCalendar)).toContain('Valid values: single, week, range');
    expect(issueMessages(invalidCalendar)).toContain('value must use ISO date format');
    expect(issueMessages(invalidCalendar)).toContain('min cannot be later than max');
    expect(issueMessages(invalidCalendar)).toContain('requires locale-today-label');
    expect(validCalendar.valid).toBe(true);
    expect(invalidDatePicker.valid).toBe(false);
    expect(issueMessages(invalidDatePicker)).toContain('Valid values: default, input');
    expect(issueMessages(invalidDatePicker)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidDatePicker)).toContain('locale-calendar-label');
    expect(validDatePicker.valid).toBe(true);
    expect(invalidTimePicker.valid).toBe(false);
    expect(issueMessages(invalidTimePicker)).toContain('Valid values: 12h, 24h');
    expect(issueMessages(invalidTimePicker)).toContain('value must use 24-hour HH:MM format');
    expect(issueMessages(invalidTimePicker)).toContain('interval must be a number from 1 to 60');
    expect(validTimePicker.valid).toBe(true);
    expect(invalidSelect.valid).toBe(false);
    expect(issueMessages(invalidSelect)).toContain('Valid values: bottom-start, top-start');
    expect(issueMessages(invalidSelect)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidSelect)).toContain('wrapped in an mdc-selectlistbox');
    expect(issueMessages(invalidSelect)).toContain('without value attributes');
    expect(issueMessages(invalidSelect)).toContain('info-icon-aria-label');
    expect(validSelect.valid).toBe(true);
    expect(invalidPassword.valid).toBe(false);
    expect(issueMessages(invalidPassword)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidPassword)).toContain('show-button-aria-label');
    expect(issueMessages(invalidPassword)).toContain('hide-button-aria-label');
    expect(issueMessages(invalidPassword)).toContain('minlength cannot be greater than maxlength');
    expect(validPassword.valid).toBe(true);
    expect(invalidSearchField.valid).toBe(false);
    expect(issueMessages(invalidSearchField)).toContain('Valid values: controlled, uncontrolled');
    expect(issueMessages(invalidSearchField)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidSearchField)).toContain('requires clear-aria-label');
    expect(issueMessages(invalidSearchField)).toContain('popover or listbox children');
    expect(issueMessages(invalidSearchField)).toContain('filters slot only supports');
    expect(validSearchField.valid).toBe(true);
    expect(invalidSearchPopover.valid).toBe(false);
    expect(issueMessages(invalidSearchPopover)).toContain('Valid values: bottom-start, top-start');
    expect(issueMessages(invalidSearchPopover)).toContain('requires popover-aria-label');
    expect(validSearchPopover.valid).toBe(true);
  });

  it('validates card control, menu, nav, and stepper rules', () => {
    const cardButton = requireComponentForTest('cardbutton');
    const invalidCardButton = validateComponentUsage(
      cardButton,
      {
        variant: 'outline',
        'image-src': '/project.png',
        active: true,
      },
      '<mdc-button>Nested action</mdc-button>',
    );
    const validCardButton = validateComponentUsage(
      cardButton,
      {
        'card-title': 'Create project',
        variant: 'border',
        'image-src': '/project.png',
        'image-alt': 'Blank project illustration',
        type: 'button',
      },
      '<mdc-text slot="body">Start from a blank template.</mdc-text>',
    );
    const cardCheckbox = requireComponentForTest('cardcheckbox');
    const invalidCardCheckbox = validateComponentUsage(
      cardCheckbox,
      {
        'selection-type': 'toggle',
        'image-src': '/email.png',
      },
      '<a href="/settings">Nested link</a>',
    );
    const validCardCheckbox = validateComponentUsage(cardCheckbox, {
      'card-title': 'Email',
      'selection-type': 'checkbox',
      variant: 'ghost',
    });
    const cardRadio = requireComponentForTest('cardradio');
    const invalidCardRadio = validateComponentUsage(
      cardRadio,
      {
        variant: 'outline',
      },
      '<mdc-link href="/help">Nested link</mdc-link>',
    );
    const validCardRadio = validateComponentUsage(cardRadio, {
      name: 'delivery',
      'card-title': 'Express',
      variant: 'border',
    });
    const menuPopover = requireComponentForTest('menupopover');
    const invalidMenuPopover = validateComponentUsage(
      menuPopover,
      { trigger: 'click hover', placement: 'middle' },
      '<mdc-option value="light" label="Light"></mdc-option><mdc-menuitem></mdc-menuitem>',
    );
    const validMenuPopover = validateComponentUsage(
      menuPopover,
      { triggerid: 'actions-trigger', placement: 'bottom-start' },
      '<mdc-menuitem label="Rename"></mdc-menuitem>',
    );
    const menuSection = requireComponentForTest('menusection');
    const invalidMenuSection = validateComponentUsage(
      menuSection,
      { 'divider-variant': 'dashed', 'hide-header-text': true },
      '<mdc-option value="light" label="Light"></mdc-option>',
    );
    const validMenuSection = validateComponentUsage(
      menuSection,
      { 'header-text': 'Appearance', 'divider-variant': 'solid' },
      '<mdc-menuitemradio label="Light" name="theme" value="light"></mdc-menuitemradio>',
    );
    const navMenuItem = requireComponentForTest('navmenuitem');
    const invalidNavMenuItem = validateComponentUsage(navMenuItem, {
      'badge-type': 'status',
      counter: -1,
      'max-counter': 100,
      'tooltip-type': 'name',
      'tooltip-appearance': 'collapsed',
    });
    const validNavMenuItem = validateComponentUsage(navMenuItem, {
      'nav-id': 'inbox',
      label: 'Inbox',
      'badge-type': 'counter',
      counter: 3,
      'max-counter': 99,
      'show-label': false,
      'tooltip-text': 'Inbox',
      'tooltip-type': 'description',
      'tooltip-appearance': 'when-collapsed',
    });
    const stepper = requireComponentForTest('stepper');
    const invalidStepper = validateComponentUsage(
      stepper,
      { orientation: 'diagonal', variant: 'compact' },
      [
        '<mdc-stepperitem status="current" aria-current="step"></mdc-stepperitem>',
        '<mdc-stepperconnector></mdc-stepperconnector>',
        '<mdc-stepperitem status="error-current" aria-current="step"></mdc-stepperitem>',
        '<mdc-button>Wrong</mdc-button>',
      ].join(''),
    );
    const validStepper = validateComponentUsage(
      stepper,
      { orientation: 'horizontal', variant: 'inline', 'aria-label': 'Checkout steps' },
      [
        '<mdc-stepperitem status="completed" step-number="1" aria-label="Step 1, Account, completed">',
        '</mdc-stepperitem>',
        '<mdc-stepperconnector status="complete"></mdc-stepperconnector>',
        '<mdc-stepperitem status="current" step-number="2" aria-current="step" ',
        'aria-label="Step 2, Profile, current"></mdc-stepperitem>',
      ].join(''),
    );
    const stepperItem = requireComponentForTest('stepperitem');
    const invalidStepperItem = validateComponentUsage(stepperItem, {
      status: 'done',
      'aria-current': 'step',
      'step-number': 0,
    });
    const validStepperItem = validateComponentUsage(stepperItem, {
      status: 'current',
      'aria-current': 'step',
      'step-number': 2,
      label: 'Profile',
      'aria-label': 'Step 2 of 3, Profile, current',
    });
    const stepperConnector = requireComponentForTest('stepperconnector');
    const invalidStepperConnector = validateComponentUsage(stepperConnector, {
      status: 'completed',
      orientation: 'diagonal',
      'aria-label': 'Connector',
    });
    const validStepperConnector = validateComponentUsage(stepperConnector, {
      status: 'complete',
      orientation: 'horizontal',
    });

    expect(invalidCardButton.valid).toBe(false);
    expect(issueMessages(invalidCardButton)).toContain('Valid values: border, ghost, promotional');
    expect(issueMessages(invalidCardButton)).toContain('requires card-title');
    expect(issueMessages(invalidCardButton)).toContain('requires image-alt');
    expect(issueMessages(invalidCardButton)).toContain('Do not place focusable descendants');
    expect(validCardButton.valid).toBe(true);
    expect(invalidCardCheckbox.valid).toBe(false);
    expect(issueMessages(invalidCardCheckbox)).toContain('Valid values: check, checkbox');
    expect(issueMessages(invalidCardCheckbox)).toContain('requires card-title');
    expect(validCardCheckbox.valid).toBe(true);
    expect(invalidCardRadio.valid).toBe(false);
    expect(issueMessages(invalidCardRadio)).toContain('requires card-title');
    expect(issueMessages(invalidCardRadio)).toContain('requires name');
    expect(validCardRadio.valid).toBe(true);
    expect(invalidMenuPopover.valid).toBe(false);
    expect(issueMessages(invalidMenuPopover)).toContain('Valid values: left-start, left, left-end');
    expect(issueMessages(invalidMenuPopover)).toContain('requires triggerid');
    expect(issueMessages(invalidMenuPopover)).toContain('Invalid values: hover');
    expect(issueMessages(invalidMenuPopover)).toContain('Selection list components belong');
    expect(validMenuPopover.valid).toBe(true);
    expect(invalidMenuSection.valid).toBe(false);
    expect(issueMessages(invalidMenuSection)).toContain('Valid values: solid, gradient');
    expect(issueMessages(invalidMenuSection)).toContain('requires header-text or aria-label');
    expect(issueMessages(invalidMenuSection)).toContain('selection-list children');
    expect(validMenuSection.valid).toBe(true);
    expect(invalidNavMenuItem.valid).toBe(false);
    expect(issueMessages(invalidNavMenuItem)).toContain('Valid values: dot, counter');
    expect(issueMessages(invalidNavMenuItem)).toContain('Valid values: 9, 99, 999');
    expect(issueMessages(invalidNavMenuItem)).toContain('requires label or aria-label');
    expect(issueMessages(invalidNavMenuItem)).toContain('requires a unique nav-id');
    expect(validNavMenuItem.valid).toBe(true);
    expect(invalidStepper.valid).toBe(false);
    expect(issueMessages(invalidStepper)).toContain('Valid values: horizontal, vertical');
    expect(issueMessages(invalidStepper)).toContain('Valid values: inline, stacked');
    expect(issueMessages(invalidStepper)).toContain('only one current');
    expect(issueMessages(invalidStepper)).toContain('Every mdc-stepperitem');
    expect(validStepper.valid).toBe(true);
    expect(invalidStepperItem.valid).toBe(false);
    expect(issueMessages(invalidStepperItem)).toContain('Valid values: completed, current');
    expect(issueMessages(invalidStepperItem)).toContain('requires aria-label');
    expect(issueMessages(invalidStepperItem)).toContain('step-number must be greater than 0');
    expect(validStepperItem.valid).toBe(true);
    expect(invalidStepperConnector.valid).toBe(false);
    expect(issueMessages(invalidStepperConnector)).toContain('Valid values: complete, incomplete');
    expect(issueMessages(invalidStepperConnector)).toContain('Valid values: horizontal, vertical');
    expect(issueMessages(invalidStepperConnector)).toContain('decorative');
    expect(validStepperConnector.valid).toBe(true);
  });

  it('validates progress, utility, provider, text, and wrapper rules', () => {
    const progressBar = requireComponentForTest('progressbar');
    const invalidProgressBar = validateComponentUsage(progressBar, {
      variant: 'compact',
      value: 101,
    });
    const validProgressBar = validateComponentUsage(progressBar, {
      variant: 'inline',
      value: 80,
      label: 'Sync',
      'data-aria-label': 'Sync progress',
    });
    const progressSpinner = requireComponentForTest('progressspinner');
    const invalidProgressSpinner = validateComponentUsage(progressSpinner, {
      value: 'loading',
    });
    const validProgressSpinner = validateComponentUsage(progressSpinner, {
      value: 60,
      'data-aria-label': 'Loading progress',
    });
    const spinner = requireComponentForTest('spinner');
    const invalidSpinner = validateComponentUsage(spinner, {
      size: 'tiny',
      variant: 'loader',
      'aria-hidden': true,
      'aria-label': 'Loading',
    });
    const validSpinner = validateComponentUsage(spinner, {
      size: 'small',
      variant: 'button',
    });
    const skeleton = requireComponentForTest('skeleton');
    const invalidSkeleton = validateComponentUsage(skeleton, {
      variant: 'square',
      'aria-label': 'Loading card',
    });
    const validSkeleton = validateComponentUsage(skeleton, { variant: 'rounded' });
    const bullet = requireComponentForTest('bullet');
    const invalidBullet = validateComponentUsage(bullet, {
      size: 'huge',
      role: 'status',
    });
    const validBullet = validateComponentUsage(bullet, { size: 'medium' });
    const marker = requireComponentForTest('marker');
    const invalidMarker = validateComponentUsage(marker, { variant: 'dashed' });
    const validMarker = validateComponentUsage(marker, { variant: 'solid' });
    const staticCheckbox = requireComponentForTest('staticcheckbox');
    const staticCheckboxWarning = validateComponentUsage(staticCheckbox, {
      checked: true,
      indeterminate: true,
    });
    const staticRadio = requireComponentForTest('staticradio');
    const staticRadioWarning = validateComponentUsage(staticRadio, {});
    const staticToggle = requireComponentForTest('statictoggle');
    const invalidStaticToggle = validateComponentUsage(staticToggle, { size: 'large' });
    const validStaticToggle = validateComponentUsage(staticToggle, { size: 'compact' }, 'On');
    const appHeader = requireComponentForTest('appheader');
    const invalidAppHeader = validateComponentUsage(
      appHeader,
      {},
      '<mdc-avatarbutton initials="AB"></mdc-avatarbutton><mdc-searchfield></mdc-searchfield>',
    );
    const validAppHeader = validateComponentUsage(
      appHeader,
      {},
      [
        '<mdc-avatarbutton initials="AB" aria-label="Jenet John"></mdc-avatarbutton>',
        '<mdc-searchfield label="Search" clear-aria-label="Clear search"></mdc-searchfield>',
      ].join(''),
    );
    const focusTrap = requireComponentForTest('focustrap');
    const invalidFocusTrap = validateComponentUsage(focusTrap, {}, '<p>No focus target</p>');
    const validFocusTrap = validateComponentUsage(focusTrap, { 'auto-focus': true }, '<button>Close</button>');
    const formFieldGroup = requireComponentForTest('formfieldgroup');
    const invalidFormFieldGroup = validateComponentUsage(
      formFieldGroup,
      {
        required: true,
        'toggletip-text': 'Choose one',
      },
      '<mdc-radio label="Email"></mdc-radio>',
    );
    const validFormFieldGroup = validateComponentUsage(
      formFieldGroup,
      {
        label: 'Notification preferences',
        'help-text': 'Choose at least one channel',
      },
      '<mdc-checkbox label="Email"></mdc-checkbox><mdc-toggle label="Push"></mdc-toggle>',
    );
    const iconProvider = requireComponentForTest('iconprovider');
    const invalidIconProvider = validateComponentUsage(iconProvider, {
      'file-extension': 'png',
      'length-unit': 'vh',
      'icon-set': 'custom-icons',
      size: 0,
    });
    const validIconProvider = validateComponentUsage(iconProvider, {
      'file-extension': 'svg',
      'length-unit': 'rem',
      'icon-set': 'momentum-icons',
      size: 1,
    });
    const illustrationProvider = requireComponentForTest('illustrationprovider');
    const invalidIllustrationProvider = validateComponentUsage(illustrationProvider, {
      'file-extension': 'png',
      'illustration-set': 'external',
    });
    const responsiveProvider = requireComponentForTest('responsivesettingsprovider');
    const invalidResponsiveProvider = validateComponentUsage(responsiveProvider, {
      media: 'watch',
      'popover-positioning': 'docked',
    });
    const screenreaderAnnouncer = requireComponentForTest('screenreaderannouncer');
    const invalidScreenreaderAnnouncer = validateComponentUsage(screenreaderAnnouncer, {
      'data-aria-live': 'loud',
      delay: -1,
      timeout: 0,
    });
    const controlTypeProvider = requireComponentForTest('controltypeprovider');
    const invalidControlTypeProvider = validateComponentUsage(controlTypeProvider, {
      'control-type': 'manual',
    });
    const spatialProvider = requireComponentForTest('spatialnavigationprovider');
    const validSpatialProvider = validateComponentUsage(spatialProvider, {}, '<mdc-button>Open</mdc-button>');
    const virtualizedList = requireComponentForTest('virtualizedlist');
    const invalidVirtualizedList = validateComponentUsage(virtualizedList, {
      count: -1,
      loop: 'maybe',
      'is-at-bottom-threshold': -1,
    });
    const text = requireComponentForTest('text');
    const invalidText = validateComponentUsage(text, {
      type: 'display-bold',
      tagname: 'article',
    });
    const validText = validateComponentUsage(text, {
      type: 'heading-midsize-bold',
      tagname: 'h2',
    }, 'Section title');
    const typewriter = requireComponentForTest('typewriter');
    const invalidTypewriter = validateComponentUsage(typewriter, {
      speed: 1,
      'max-queue-size': -1,
      tagname: 'article',
    });
    const validTypewriter = validateComponentUsage(typewriter, {
      speed: 'normal',
      tagname: 'p',
      type: 'body-large-regular',
    }, 'Hello');
    const coachmark = requireComponentForTest('coachmark');
    const invalidCoachmark = validateComponentUsage(coachmark, {
      trigger: 'click hover',
    });
    const validCoachmark = validateComponentUsage(coachmark, {
      triggerid: 'coachmark-trigger',
      trigger: 'manual',
      'aria-label': 'Feature tour',
      'close-button-aria-label': 'Close feature tour',
    });

    expect(invalidProgressBar.valid).toBe(false);
    expect(issueMessages(invalidProgressBar)).toContain('Valid values: default, inline');
    expect(issueMessages(invalidProgressBar)).toContain('requires data-aria-label');
    expect(issueMessages(invalidProgressBar)).toContain('value must be a number from 0 to 100');
    expect(validProgressBar.valid).toBe(true);
    expect(invalidProgressSpinner.valid).toBe(false);
    expect(issueMessages(invalidProgressSpinner)).toContain('requires data-aria-label');
    expect(issueMessages(invalidProgressSpinner)).toContain('value must be a number from 0 to 100');
    expect(validProgressSpinner.valid).toBe(true);
    expect(invalidSpinner.valid).toBe(false);
    expect(issueMessages(invalidSpinner)).toContain('Valid values: large, midsize, small');
    expect(issueMessages(invalidSpinner)).toContain('Valid values: standalone, button');
    expect(issueMessages(invalidSpinner)).toContain('should not combine aria-hidden="true"');
    expect(validSpinner.valid).toBe(true);
    expect(invalidSkeleton.valid).toBe(false);
    expect(issueMessages(invalidSkeleton)).toContain('Valid values: button, circular, rectangular, rounded');
    expect(issueMessages(invalidSkeleton)).toContain('decorative');
    expect(validSkeleton.valid).toBe(true);
    expect(invalidBullet.valid).toBe(false);
    expect(issueMessages(invalidBullet)).toContain('Valid values: small, medium, large');
    expect(issueMessages(invalidBullet)).toContain('decorative');
    expect(validBullet.valid).toBe(true);
    expect(invalidMarker.valid).toBe(false);
    expect(issueMessages(invalidMarker)).toContain('Valid values: solid, striped');
    expect(validMarker.valid).toBe(true);
    expect(staticCheckboxWarning.valid).toBe(true);
    expect(issueMessages(staticCheckboxWarning)).toContain('indeterminate before checked');
    expect(staticRadioWarning.valid).toBe(true);
    expect(issueMessages(staticRadioWarning)).toContain('include text that explains');
    expect(invalidStaticToggle.valid).toBe(false);
    expect(issueMessages(invalidStaticToggle)).toContain('Valid values: default, compact');
    expect(validStaticToggle.valid).toBe(true);
    expect(invalidAppHeader.valid).toBe(false);
    expect(issueMessages(invalidAppHeader)).toContain('mdc-avatarbutton controls');
    expect(issueMessages(invalidAppHeader)).toContain('mdc-searchfield controls');
    expect(validAppHeader.valid).toBe(true);
    expect(invalidFocusTrap.valid).toBe(false);
    expect(issueMessages(invalidFocusTrap)).toContain('requires at least one focusable descendant');
    expect(validFocusTrap.valid).toBe(true);
    expect(invalidFormFieldGroup.valid).toBe(false);
    expect(issueMessages(invalidFormFieldGroup)).toContain('requires label or data-aria-label');
    expect(issueMessages(invalidFormFieldGroup)).toContain('Use mdc-radiogroup');
    expect(issueMessages(invalidFormFieldGroup)).toContain('info-icon-aria-label');
    expect(validFormFieldGroup.valid).toBe(true);
    expect(invalidIconProvider.valid).toBe(false);
    expect(issueMessages(invalidIconProvider)).toContain('Valid values: svg');
    expect(issueMessages(invalidIconProvider)).toContain('Valid values: em, rem, px, %');
    expect(issueMessages(invalidIconProvider)).toContain('size must be greater than 0');
    expect(validIconProvider.valid).toBe(true);
    expect(invalidIllustrationProvider.valid).toBe(false);
    expect(issueMessages(invalidIllustrationProvider)).toContain('Valid values: svg');
    expect(issueMessages(invalidIllustrationProvider)).toContain('momentum-illustrations');
    expect(invalidResponsiveProvider.valid).toBe(false);
    expect(issueMessages(invalidResponsiveProvider)).toContain('Valid values: unknown, mobile, desktop, tablet');
    expect(issueMessages(invalidResponsiveProvider)).toContain('Valid values: float, dialog');
    expect(invalidScreenreaderAnnouncer.valid).toBe(false);
    expect(issueMessages(invalidScreenreaderAnnouncer)).toContain('Valid values: assertive, polite, off');
    expect(issueMessages(invalidScreenreaderAnnouncer)).toContain('delay must be 0 or greater');
    expect(issueMessages(invalidScreenreaderAnnouncer)).toContain('timeout must be greater than 0');
    expect(invalidControlTypeProvider.valid).toBe(false);
    expect(issueMessages(invalidControlTypeProvider)).toContain('Valid values: controlled, uncontrolled');
    expect(validSpatialProvider.valid).toBe(true);
    expect(invalidVirtualizedList.valid).toBe(false);
    expect(issueMessages(invalidVirtualizedList)).toContain('Valid values: true, false, true, false');
    expect(issueMessages(invalidVirtualizedList)).toContain('count must be 0 or greater');
    expect(issueMessages(invalidVirtualizedList)).toContain('is-at-bottom-threshold must be 0 or greater');
    expect(invalidText.valid).toBe(false);
    expect(issueMessages(invalidText)).toContain('Valid values: body-small-regular');
    expect(issueMessages(invalidText)).toContain('Valid values: h1, h2, h3');
    expect(validText.valid).toBe(true);
    expect(invalidTypewriter.valid).toBe(false);
    expect(issueMessages(invalidTypewriter)).toContain('speed must be a preset');
    expect(issueMessages(invalidTypewriter)).toContain('max-queue-size must be 0 or greater');
    expect(issueMessages(invalidTypewriter)).toContain('Valid values: h1, h2, h3');
    expect(validTypewriter.valid).toBe(true);
    expect(invalidCoachmark.valid).toBe(false);
    expect(issueMessages(invalidCoachmark)).toContain('requires triggerid');
    expect(issueMessages(invalidCoachmark)).toContain('Invalid values: hover');
    expect(issueMessages(invalidCoachmark)).toContain('requires close-button-aria-label');
    expect(issueMessages(invalidCoachmark)).toContain('requires aria-label');
    expect(validCoachmark.valid).toBe(true);
  });

  it('registers the planned component MCP tools', () => {
    expect(tools.map(tool => tool.definition.name)).toEqual([
      'list_components',
      'search_components',
      'get_component_docs',
      'get_component_api',
      'get_component_examples',
      'generate_component_code',
      'validate_component_usage',
      'list_assets',
      'search_assets',
      'get_asset_info',
      'list_color_tokens',
      'search_color_tokens',
      'get_color_token',
      'migrate_icon_name',
      'convert_momentum_ui_usage',
    ]);
  });

  it('executes every registered MCP tool handler', async () => {
    await expect(getToolText('list_components')).resolves.toContain('mdc-button');
    await expect(getToolText('search_components', { query: 'modal' })).resolves.toContain('Dialog');
    await expect(getToolText('get_component_docs', { componentName: 'button' })).resolves.toContain('When to use');
    await expect(getToolText('get_component_api', { componentName: 'button' })).resolves.toContain('variant');
    await expect(getToolText('get_component_examples', { componentName: 'button' })).resolves.toContain('React');
    await expect(getToolText('generate_component_code', {
      componentName: 'button',
      framework: 'web-component',
      props: { variant: 'primary' },
      children: 'Save',
    })).resolves.toContain('<mdc-button');
    await expect(getToolText('validate_component_usage', {
      code: '<mdc-button variant="tertiary" color="positive">Save</mdc-button>',
    })).resolves.toContain('Result: invalid');
    await expect(getToolText('list_assets', { kind: 'icon', limit: 1 })).resolves.toContain('Momentum Design assets');
    await expect(getToolText('search_assets', { query: 'success', kind: 'animation' })).resolves.toContain('success');
    await expect(getToolText('get_asset_info', {
      assetName: 'check-bold',
      kind: 'icon',
    })).resolves.toContain('<mdc-icon name="check-bold"');
    await expect(getToolText('list_color_tokens', { category: 'core', limit: 1 })).resolves.toContain('--mds-color');
    await expect(getToolText('search_color_tokens', {
      query: 'text primary',
      theme: 'stable-light',
    })).resolves.toContain('--mds-color-theme-text-primary-normal');
    await expect(getToolText('get_color_token', {
      tokenName: 'color.theme.text.primary.normal',
      theme: 'stable-light',
    })).resolves.toContain('#000000f2');
    await expect(getToolText('migrate_icon_name', {
      iconName: 'check_16.svg',
      preferredStyle: 'bold',
    })).resolves.toContain('check-bold');
    await expect(getToolText('convert_momentum_ui_usage', {
      code: '<md-button>Save</md-button>',
    })).resolves.toContain('<mdc-button>Save</mdc-button>');
  });
});
// End AI-Assisted
