import type {
  ComponentProps,
  ComponentProperty,
  ComponentRegistryEntry,
  RegistryValue,
  ValidationIssue,
  ValidationResult,
} from '../common';

import { toCamelCase, toKebabCase } from './naming';

type TagBlock = {
  tagName: string;
  props: ComponentProps;
  contents: string;
};

const GLOBAL_ATTRIBUTE_PREFIXES = ['aria-', 'data-'];

const GLOBAL_ATTRIBUTES = [
  'class',
  'id',
  'part',
  'role',
  'slot',
  'style',
  'tabindex',
  'title',
];

const ACCORDION_BUTTON_VARIANT_VALUES = ['default', 'borderless'];
const ACCORDION_GROUP_SIZE_VALUES = ['small', 'large'];
const ACCORDION_GROUP_VARIANT_VALUES = ['borderless', 'contained', 'stacked'];
const ACCORDION_TOGGLE_POSITION_VALUES = ['leading', 'trailing'];
const ANNOUNCEMENT_DIALOG_SIZE_VALUES = ['medium', 'large', 'xlarge', 'fullscreen'];
const ALERT_CHIP_VARIANT_VALUES = ['neutral', 'error', 'success', 'warning', 'informational'];
const ARIA_LIVE_VALUES = ['assertive', 'polite', 'off'];
const AVATAR_SIZE_VALUES = [24, 32, 48, 64, 72, 88, 124];
const AVATAR_TYPE_VALUES = ['counter', 'icon', 'photo', 'text'];
const BADGE_MAX_COUNTER_VALUES = [9, 99, 999];
const BADGE_TYPE_VALUES = ['dot', 'icon', 'counter', 'success', 'warning', 'error'];
const BADGE_VARIANT_VALUES = ['primary', 'secondary'];
const BANNER_VARIANT_VALUES = ['custom', 'informational', 'warning', 'error', 'success'];
const BULLET_SIZE_VALUES = ['small', 'medium', 'large'];
const BUTTON_GROUP_ORIENTATION_VALUES = ['horizontal', 'vertical'];
const BUTTON_GROUP_SIZE_VALUES = [24, 28, 32, 40];
const BUTTON_GROUP_VARIANT_VALUES = ['primary', 'secondary'];
const BUTTON_SIMPLE_SIZE_VALUES = [12, 14, 16, 20, 24, 28, 32, 40, 48, 52, 64, 72, 88, 124];
const BUTTON_TYPE_VALUES = ['button', 'submit', 'reset'];
const CALENDAR_SELECTION_MODE_VALUES = ['single', 'week', 'range'];
const CARD_CHECKBOX_SELECTION_TYPE_VALUES = ['check', 'checkbox'];
const CARD_ORIENTATION_VALUES = ['horizontal', 'vertical'];
const CARD_VARIANT_VALUES = ['border', 'ghost', 'promotional'];
const CHIP_COLOR_VALUES = ['default', 'cobalt', 'gold', 'lime', 'mint', 'orange', 'pink', 'purple', 'slate', 'violet'];
const CONTROL_TYPE_VALUES = ['controlled', 'uncontrolled'];
const DATEPICKER_VARIANT_VALUES = ['default', 'input'];
const DIVIDER_DIRECTION_VALUES = ['positive', 'negative'];
const DIVIDER_ORIENTATION_VALUES = ['horizontal', 'vertical'];
const DIVIDER_VARIANT_VALUES = ['solid', 'gradient'];
const DIALOG_ROLE_VALUES = ['dialog', 'alertdialog'];
const DIALOG_SIZE_VALUES = ['small', 'medium', 'large', 'xlarge', 'fullscreen'];
const DIALOG_VARIANT_VALUES = ['default', 'promotional'];
const FEEDBACK_HEADER_TAG_VALUES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small', 'span', 'div'];
const FILE_EXTENSION_VALUES = ['svg'];
const HELP_TEXT_TYPE_VALUES = ['default', 'error', 'warning', 'success', 'priority'];
const ICON_PROVIDER_LENGTH_UNIT_VALUES = ['em', 'rem', 'px', '%'];
const ICON_SET_VALUES = ['momentum-icons', 'custom-icons'];
const ILLUSTRATION_SET_VALUES = ['momentum-illustrations', 'custom-illustrations'];
const LINK_SIZE_VALUES = ['large', 'midsize', 'small'];
const LIST_ITEM_VARIANT_VALUES = ['full-width', 'inset-pill', 'inset-rectangle'];
const LIST_LOOP_VALUES = ['true', 'false', true, false];
const LIST_ORIENTATION_VALUES = ['vertical', 'horizontal'];
const MARKER_VARIANT_VALUES = ['solid', 'striped'];
const MENU_ARROW_DIRECTION_VALUES = ['positive', 'negative'];
const MENU_ARROW_POSITION_VALUES = ['leading', 'trailing'];
const MENU_ITEM_TAGS = ['mdc-menuitem', 'mdc-menuitemcheckbox', 'mdc-menuitemradio'];
const NAV_MENU_ITEM_BADGE_TYPE_VALUES = ['dot', 'counter'];
const NAV_MENU_ITEM_TOOLTIP_APPEARANCE_VALUES = ['when-collapsed', 'always'];
const OPTION_CONTAINER_TAGS = ['mdc-select', 'mdc-selectlistbox', 'mdc-listbox', 'mdc-combobox'];
const POPOVER_BOUNDARY_ROOT_VALUES = ['viewport', 'document'];
const POPOVER_COLOR_VALUES = ['tonal', 'contrast'];
const POPOVER_PLACEMENT_VALUES = [
  'left-start',
  'left',
  'left-end',
  'right-start',
  'right',
  'right-end',
  'top-start',
  'top',
  'top-end',
  'bottom-start',
  'bottom',
  'bottom-end',
];
const POPOVER_STRATEGY_VALUES = ['absolute', 'fixed'];
const POPOVER_TRIGGER_VALUES = ['click', 'mouseenter', 'focusin', 'manual'];
const PRESENCE_SIZE_VALUES = AVATAR_SIZE_VALUES;
const PRESENCE_TYPE_VALUES = [
  'active',
  'away',
  'away-calling',
  'busy',
  'dnd',
  'meeting',
  'on-call',
  'on-device',
  'on-mobile',
  'pause',
  'pto',
  'presenting',
  'quiet',
  'scheduled',
];
const PROGRESS_VARIANT_VALUES = ['default', 'inline'];
const PROVIDER_CACHE_STRATEGY_VALUES = ['in-memory-cache', 'web-cache-api'];
const RESPONSIVE_MEDIA_VALUES = ['unknown', 'mobile', 'desktop', 'tablet'];
const RESPONSIVE_POPOVER_POSITIONING_VALUES = ['float', 'dialog'];
const SIDE_NAVIGATION_SUBMENU_TYPE_VALUES = ['flyout', 'dropdown'];
const SIDE_NAVIGATION_VARIANT_VALUES = [
  'fixed-expanded',
  'fixed-collapsed',
  'flexible',
  'flexible-on-hover',
  'hidden',
];
const SKELETON_VARIANT_VALUES = ['button', 'circular', 'rectangular', 'rounded'];
const SPINNER_SIZE_VALUES = ['large', 'midsize', 'small'];
const SPINNER_VARIANT_VALUES = ['standalone', 'button'];
const STATUSMESSAGE_SEVERITY_VALUES = ['default', 'error', 'warning', 'success', 'priority'];
const STATIC_TOGGLE_SIZE_VALUES = ['default', 'compact'];
const STEPPER_CONNECTOR_STATUS_VALUES = ['complete', 'incomplete'];
const STEPPER_ITEM_STATUS_VALUES = ['completed', 'current', 'error-current', 'error-incomplete', 'not-started'];
const STEPPER_ORIENTATION_VALUES = ['horizontal', 'vertical'];
const STEPPER_VARIANT_VALUES = ['inline', 'stacked'];
const TAB_SIZE_VALUES = [28, 32];
const TAB_VARIANT_VALUES = ['glass', 'line', 'pill'];
const TEXT_TAG_VALUES = FEEDBACK_HEADER_TAG_VALUES;
const TEXT_TYPE_VALUES = [
  'body-small-regular',
  'body-small-medium',
  'body-small-bold',
  'body-midsize-regular',
  'body-midsize-medium',
  'body-midsize-bold',
  'body-large-regular',
  'body-large-medium',
  'body-large-bold',
  'body-small-regular-underline',
  'body-small-medium-underline',
  'body-midsize-regular-underline',
  'body-midsize-medium-underline',
  'body-large-regular-underline',
  'body-large-medium-underline',
  'heading-small-regular',
  'heading-small-medium',
  'heading-small-bold',
  'heading-midsize-regular',
  'heading-midsize-medium',
  'heading-midsize-bold',
  'heading-large-regular',
  'heading-large-medium',
  'heading-large-bold',
  'heading-xlarge-regular',
  'heading-xlarge-medium',
  'heading-xlarge-bold',
  'headline-small-light',
  'headline-small-regular',
];
const TIME_FORMAT_VALUES = ['12h', '24h'];
const TOAST_VARIANT_VALUES = ['custom', 'success', 'warning', 'error'];
const TOOLTIP_TYPE_VALUES = ['description', 'label', 'none'];
const TYPEWRITER_SPEED_VALUES = ['very-slow', 'slow', 'normal', 'fast', 'very-fast'];

const FORM_FIELD_VALUE_OVERRIDES: Record<string, RegistryValue[] | undefined> = {
  'clear-aria-label': undefined,
  clearAriaLabel: undefined,
  'data-aria-label': undefined,
  dataAriaLabel: undefined,
  'help-text-type': HELP_TEXT_TYPE_VALUES,
  helpTextType: HELP_TEXT_TYPE_VALUES,
  'info-icon-aria-label': undefined,
  infoIconAriaLabel: undefined,
  label: undefined,
  name: undefined,
  'toggletip-placement': POPOVER_PLACEMENT_VALUES,
  toggletipPlacement: POPOVER_PLACEMENT_VALUES,
  'toggletip-strategy': POPOVER_STRATEGY_VALUES,
  toggletipStrategy: POPOVER_STRATEGY_VALUES,
  'toggletip-text': undefined,
  toggletipText: undefined,
  'validation-message': undefined,
  validationMessage: undefined,
  value: undefined,
};

const DATE_VALUE_OVERRIDES: Record<string, RegistryValue[] | undefined> = {
  'end-value': undefined,
  endValue: undefined,
  locale: undefined,
  'locale-calendar-label': undefined,
  localeCalendarLabel: undefined,
  'locale-next-month-label': undefined,
  localeNextMonthLabel: undefined,
  'locale-prev-month-label': undefined,
  localePrevMonthLabel: undefined,
  'locale-today-label': undefined,
  localeTodayLabel: undefined,
  max: undefined,
  min: undefined,
  'selection-mode': CALENDAR_SELECTION_MODE_VALUES,
  selectionMode: CALENDAR_SELECTION_MODE_VALUES,
  value: undefined,
};

const LINK_VALUE_OVERRIDES: Record<string, RegistryValue[] | undefined> = {
  download: undefined,
  href: undefined,
  hreflang: undefined,
  ping: undefined,
  referrerpolicy: undefined,
  rel: undefined,
  target: ['_self', '_blank', '_parent', '_top', '_unfencedTop'],
  type: undefined,
};

const POPOVER_VALUE_OVERRIDES: Record<string, RegistryValue[] | undefined> = {
  boundary: undefined,
  'boundary-root': POPOVER_BOUNDARY_ROOT_VALUES,
  boundaryRoot: POPOVER_BOUNDARY_ROOT_VALUES,
  placement: POPOVER_PLACEMENT_VALUES,
  strategy: POPOVER_STRATEGY_VALUES,
  trigger: undefined,
  triggerID: undefined,
  triggerId: undefined,
  triggerid: undefined,
  'trigger-id': undefined,
};

const VALUE_OVERRIDES: Record<string, Record<string, RegistryValue[] | undefined>> = {
  accordion: {
    'close-button-aria-label': undefined,
    closeButtonAriaLabel: undefined,
    'data-aria-level': undefined,
    dataAriaLevel: undefined,
    'heading-text': undefined,
    headingText: undefined,
    'open-button-aria-label': undefined,
    openButtonAriaLabel: undefined,
  },
  accordionbutton: {
    'data-aria-level': undefined,
    dataAriaLevel: undefined,
    'header-text': undefined,
    headerText: undefined,
    'icon-name': undefined,
    iconName: undefined,
    size: ACCORDION_GROUP_SIZE_VALUES,
    'toggle-position': ACCORDION_TOGGLE_POSITION_VALUES,
    togglePosition: ACCORDION_TOGGLE_POSITION_VALUES,
    variant: ACCORDION_BUTTON_VARIANT_VALUES,
  },
  accordiongroup: {
    size: ACCORDION_GROUP_SIZE_VALUES,
    variant: ACCORDION_GROUP_VARIANT_VALUES,
  },
  announcementdialog: {
    'close-button-aria-label': undefined,
    closeButtonAriaLabel: undefined,
    role: DIALOG_ROLE_VALUES,
    size: ANNOUNCEMENT_DIALOG_SIZE_VALUES,
    triggerID: undefined,
    triggerId: undefined,
    triggerid: undefined,
    'trigger-id': undefined,
  },
  alertchip: {
    variant: ALERT_CHIP_VARIANT_VALUES,
  },
  animation: {
    loop: undefined,
    name: undefined,
    src: undefined,
  },
  avatar: {
    counter: undefined,
    'icon-name': undefined,
    iconName: undefined,
    initials: undefined,
    'is-typing': undefined,
    isTyping: undefined,
    presence: ['none', ...PRESENCE_TYPE_VALUES],
    size: AVATAR_SIZE_VALUES,
    src: undefined,
    type: AVATAR_TYPE_VALUES,
  },
  avatarbutton: {
    counter: undefined,
    'icon-name': undefined,
    iconName: undefined,
    initials: undefined,
    'is-typing': undefined,
    isTyping: undefined,
    presence: ['none', ...PRESENCE_TYPE_VALUES],
    size: AVATAR_SIZE_VALUES,
    src: undefined,
    type: AVATAR_TYPE_VALUES,
  },
  badge: {
    counter: undefined,
    'icon-name': undefined,
    iconName: undefined,
    'max-counter': BADGE_MAX_COUNTER_VALUES,
    maxCounter: BADGE_MAX_COUNTER_VALUES,
    type: BADGE_TYPE_VALUES,
    variant: BADGE_VARIANT_VALUES,
  },
  banner: {
    variant: BANNER_VARIANT_VALUES,
  },
  brandvisual: {
    'alt-text': undefined,
    altText: undefined,
    name: undefined,
  },
  bullet: {
    size: BULLET_SIZE_VALUES,
  },
  buttongroup: {
    orientation: BUTTON_GROUP_ORIENTATION_VALUES,
    size: BUTTON_GROUP_SIZE_VALUES,
    variant: BUTTON_GROUP_VARIANT_VALUES,
  },
  buttonsimple: {
    active: undefined,
    'aria-state-key': undefined,
    ariaStateKey: undefined,
    name: undefined,
    role: undefined,
    size: BUTTON_SIMPLE_SIZE_VALUES,
    type: BUTTON_TYPE_VALUES,
    value: undefined,
  },
  buttonlink: {
    color: ['default', 'positive', 'negative', 'accent', 'promotional'],
    size: [20, 24, 28, 32, 40, 52, 64],
    target: ['_self', '_blank', '_parent', '_top', '_unfencedTop'],
    variant: ['primary', 'secondary', 'tertiary'],
  },
  card: {
    orientation: CARD_ORIENTATION_VALUES,
    'subtitle-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    subtitleTagName: FEEDBACK_HEADER_TAG_VALUES,
    'title-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    titleTagName: FEEDBACK_HEADER_TAG_VALUES,
    variant: CARD_VARIANT_VALUES,
  },
  calendar: {
    ...DATE_VALUE_OVERRIDES,
  },
  cardbutton: {
    orientation: CARD_ORIENTATION_VALUES,
    'subtitle-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    subtitleTagName: FEEDBACK_HEADER_TAG_VALUES,
    'title-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    titleTagName: FEEDBACK_HEADER_TAG_VALUES,
    type: BUTTON_TYPE_VALUES,
    variant: CARD_VARIANT_VALUES,
  },
  cardcheckbox: {
    orientation: CARD_ORIENTATION_VALUES,
    'selection-type': CARD_CHECKBOX_SELECTION_TYPE_VALUES,
    selectionType: CARD_CHECKBOX_SELECTION_TYPE_VALUES,
    'subtitle-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    subtitleTagName: FEEDBACK_HEADER_TAG_VALUES,
    'title-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    titleTagName: FEEDBACK_HEADER_TAG_VALUES,
    variant: CARD_VARIANT_VALUES,
  },
  cardradio: {
    orientation: CARD_ORIENTATION_VALUES,
    'subtitle-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    subtitleTagName: FEEDBACK_HEADER_TAG_VALUES,
    'title-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    titleTagName: FEEDBACK_HEADER_TAG_VALUES,
    variant: CARD_VARIANT_VALUES,
  },
  chip: {
    active: undefined,
    color: CHIP_COLOR_VALUES,
    'soft-disabled': undefined,
    softDisabled: undefined,
  },
  coachmark: {
    ...POPOVER_VALUE_OVERRIDES,
    color: POPOVER_COLOR_VALUES,
    role: DIALOG_ROLE_VALUES,
  },
  combobox: {
    'control-type': CONTROL_TYPE_VALUES,
    controlType: CONTROL_TYPE_VALUES,
    filter: ['match-starts-with', 'none'],
    'help-text-type': HELP_TEXT_TYPE_VALUES,
    helpTextType: HELP_TEXT_TYPE_VALUES,
    placement: ['bottom-start', 'top-start'],
    strategy: POPOVER_STRATEGY_VALUES,
    'toggletip-placement': POPOVER_PLACEMENT_VALUES,
    toggletipPlacement: POPOVER_PLACEMENT_VALUES,
    'toggletip-strategy': POPOVER_STRATEGY_VALUES,
    toggletipStrategy: POPOVER_STRATEGY_VALUES,
  },
  controltypeprovider: {
    'control-type': CONTROL_TYPE_VALUES,
    controlType: CONTROL_TYPE_VALUES,
  },
  datepicker: {
    ...FORM_FIELD_VALUE_OVERRIDES,
    ...DATE_VALUE_OVERRIDES,
    'append-to': undefined,
    appendTo: undefined,
    'backdrop-append-to': undefined,
    backdropAppendTo: undefined,
    placement: ['bottom-start', 'top-start'],
    strategy: POPOVER_STRATEGY_VALUES,
    variant: DATEPICKER_VARIANT_VALUES,
    'locale-day-label': undefined,
    localeDayLabel: undefined,
    'locale-month-label': undefined,
    localeMonthLabel: undefined,
    'locale-spinbutton-description': undefined,
    localeSpinbuttonDescription: undefined,
    'locale-year-label': undefined,
    localeYearLabel: undefined,
  },
  dialog: {
    'description-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    descriptionTagName: FEEDBACK_HEADER_TAG_VALUES,
    'header-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    headerTagName: FEEDBACK_HEADER_TAG_VALUES,
    role: DIALOG_ROLE_VALUES,
    size: DIALOG_SIZE_VALUES,
    triggerID: undefined,
    triggerId: undefined,
    triggerid: undefined,
    'trigger-id': undefined,
    variant: DIALOG_VARIANT_VALUES,
  },
  divider: {
    'arrow-direction': DIVIDER_DIRECTION_VALUES,
    arrowDirection: DIVIDER_DIRECTION_VALUES,
    'button-position': DIVIDER_DIRECTION_VALUES,
    buttonPosition: DIVIDER_DIRECTION_VALUES,
    orientation: DIVIDER_ORIENTATION_VALUES,
    variant: DIVIDER_VARIANT_VALUES,
  },
  filterchip: {
    color: undefined,
  },
  formfieldgroup: {
    ...FORM_FIELD_VALUE_OVERRIDES,
  },
  formfieldwrapper: {
    ...FORM_FIELD_VALUE_OVERRIDES,
    validation: STATUSMESSAGE_SEVERITY_VALUES,
  },
  icon: {
    'length-unit': undefined,
    lengthUnit: undefined,
    name: undefined,
    size: undefined,
  },
  iconprovider: {
    'cache-strategy': PROVIDER_CACHE_STRATEGY_VALUES,
    cacheStrategy: PROVIDER_CACHE_STRATEGY_VALUES,
    'file-extension': FILE_EXTENSION_VALUES,
    fileExtension: FILE_EXTENSION_VALUES,
    'icon-set': ICON_SET_VALUES,
    iconSet: ICON_SET_VALUES,
    'length-unit': ICON_PROVIDER_LENGTH_UNIT_VALUES,
    lengthUnit: ICON_PROVIDER_LENGTH_UNIT_VALUES,
    size: undefined,
  },
  illustration: {
    name: undefined,
  },
  illustrationprovider: {
    'cache-strategy': PROVIDER_CACHE_STRATEGY_VALUES,
    cacheStrategy: PROVIDER_CACHE_STRATEGY_VALUES,
    'file-extension': FILE_EXTENSION_VALUES,
    fileExtension: FILE_EXTENSION_VALUES,
    'illustration-set': ILLUSTRATION_SET_VALUES,
    illustrationSet: ILLUSTRATION_SET_VALUES,
  },
  input: {
    autocomplete: undefined,
  },
  inputchip: {
    'close-button-aria-label': undefined,
    closeButtonAriaLabel: undefined,
    label: undefined,
    value: undefined,
  },
  link: {
    ...LINK_VALUE_OVERRIDES,
    'data-aria-label': undefined,
    dataAriaLabel: undefined,
    'icon-name': undefined,
    iconName: undefined,
    size: LINK_SIZE_VALUES,
  },
  list: {
    'initial-focus': undefined,
    initialFocus: undefined,
    loop: LIST_LOOP_VALUES,
    orientation: LIST_ORIENTATION_VALUES,
  },
  listitem: {
    active: undefined,
    'data-index': undefined,
    dataIndex: undefined,
    role: undefined,
    variant: LIST_ITEM_VARIANT_VALUES,
  },
  linkbutton: {
    size: [12, 14, 16],
  },
  linksimple: {
    ...LINK_VALUE_OVERRIDES,
    'data-aria-label': undefined,
    dataAriaLabel: undefined,
  },
  marker: {
    variant: MARKER_VARIANT_VALUES,
  },
  menupopover: {
    ...POPOVER_VALUE_OVERRIDES,
    orientation: LIST_ORIENTATION_VALUES,
    role: undefined,
  },
  menusection: {
    'divider-variant': DIVIDER_VARIANT_VALUES,
    dividerVariant: DIVIDER_VARIANT_VALUES,
    'header-text': undefined,
    headerText: undefined,
  },
  navmenuitem: {
    active: undefined,
    'arrow-direction': MENU_ARROW_DIRECTION_VALUES,
    arrowDirection: MENU_ARROW_DIRECTION_VALUES,
    'arrow-position': MENU_ARROW_POSITION_VALUES,
    arrowPosition: MENU_ARROW_POSITION_VALUES,
    'badge-type': NAV_MENU_ITEM_BADGE_TYPE_VALUES,
    badgeType: NAV_MENU_ITEM_BADGE_TYPE_VALUES,
    'cannot-activate': undefined,
    cannotActivate: undefined,
    counter: undefined,
    'disable-aria-current': undefined,
    disableAriaCurrent: undefined,
    'icon-name': undefined,
    iconName: undefined,
    'is-active-parent-tooltip-text': undefined,
    isActiveParentTooltipText: undefined,
    label: undefined,
    'max-counter': BADGE_MAX_COUNTER_VALUES,
    maxCounter: BADGE_MAX_COUNTER_VALUES,
    'nav-id': undefined,
    navId: undefined,
    'show-label': undefined,
    showLabel: undefined,
    'tooltip-appearance': NAV_MENU_ITEM_TOOLTIP_APPEARANCE_VALUES,
    tooltipAppearance: NAV_MENU_ITEM_TOOLTIP_APPEARANCE_VALUES,
    'tooltip-placement': POPOVER_PLACEMENT_VALUES,
    tooltipPlacement: POPOVER_PLACEMENT_VALUES,
    'tooltip-text': undefined,
    tooltipText: undefined,
    'tooltip-type': TOOLTIP_TYPE_VALUES,
    tooltipType: TOOLTIP_TYPE_VALUES,
  },
  sidenavigation: {
    'grabber-btn-aria-label': undefined,
    grabberBtnAriaLabel: undefined,
    'submenu-type': SIDE_NAVIGATION_SUBMENU_TYPE_VALUES,
    submenuType: SIDE_NAVIGATION_SUBMENU_TYPE_VALUES,
    variant: SIDE_NAVIGATION_VARIANT_VALUES,
  },
  tab: {
    'aria-haspopup': ['menu', 'true', true],
    size: TAB_SIZE_VALUES,
    'tab-id': undefined,
    tabId: undefined,
    variant: TAB_VARIANT_VALUES,
  },
  tablist: {
    'active-tab-id': undefined,
    activeTabId: undefined,
    'data-aria-label': undefined,
    dataAriaLabel: undefined,
    tabsize: TAB_SIZE_VALUES,
    tabvariant: TAB_VARIANT_VALUES,
  },
  menuitem: {
    'arrow-direction': MENU_ARROW_DIRECTION_VALUES,
    arrowDirection: MENU_ARROW_DIRECTION_VALUES,
    'arrow-position': MENU_ARROW_POSITION_VALUES,
    arrowPosition: MENU_ARROW_POSITION_VALUES,
  },
  menuitemcheckbox: {
    'arrow-direction': MENU_ARROW_DIRECTION_VALUES,
    arrowDirection: MENU_ARROW_DIRECTION_VALUES,
    'arrow-position': MENU_ARROW_POSITION_VALUES,
    arrowPosition: MENU_ARROW_POSITION_VALUES,
    'control-type': CONTROL_TYPE_VALUES,
    controlType: CONTROL_TYPE_VALUES,
    indicator: ['none', 'checkbox', 'checkmark', 'toggle'],
  },
  menuitemradio: {
    'arrow-direction': MENU_ARROW_DIRECTION_VALUES,
    arrowDirection: MENU_ARROW_DIRECTION_VALUES,
    'arrow-position': MENU_ARROW_POSITION_VALUES,
    arrowPosition: MENU_ARROW_POSITION_VALUES,
    'control-type': CONTROL_TYPE_VALUES,
    controlType: CONTROL_TYPE_VALUES,
    indicator: ['none', 'radio', 'checkmark'],
  },
  option: {
    active: undefined,
    name: undefined,
    'side-header-text': undefined,
    sideHeaderText: undefined,
    'subline-text': undefined,
    sublineText: undefined,
    'tertiary-label': undefined,
    tertiaryLabel: undefined,
  },
  password: {
    ...FORM_FIELD_VALUE_OVERRIDES,
    autocomplete: undefined,
    'hide-button-aria-label': undefined,
    hideButtonAriaLabel: undefined,
    'show-button-aria-label': undefined,
    showButtonAriaLabel: undefined,
  },
  presence: {
    size: PRESENCE_SIZE_VALUES,
    type: PRESENCE_TYPE_VALUES,
  },
  popover: {
    boundary: undefined,
    'boundary-root': POPOVER_BOUNDARY_ROOT_VALUES,
    boundaryRoot: POPOVER_BOUNDARY_ROOT_VALUES,
    color: POPOVER_COLOR_VALUES,
    placement: POPOVER_PLACEMENT_VALUES,
    role: undefined,
    strategy: POPOVER_STRATEGY_VALUES,
    trigger: undefined,
    triggerID: undefined,
    triggerId: undefined,
    triggerid: undefined,
    'trigger-id': undefined,
  },
  progressbar: {
    'data-aria-label': undefined,
    dataAriaLabel: undefined,
    'help-text-type': HELP_TEXT_TYPE_VALUES,
    helpTextType: HELP_TEXT_TYPE_VALUES,
    label: undefined,
    validation: STATUSMESSAGE_SEVERITY_VALUES,
    value: undefined,
    variant: PROGRESS_VARIANT_VALUES,
  },
  progressspinner: {
    'data-aria-label': undefined,
    dataAriaLabel: undefined,
    value: undefined,
  },
  responsivesettingsprovider: {
    media: RESPONSIVE_MEDIA_VALUES,
    'popover-positioning': RESPONSIVE_POPOVER_POSITIONING_VALUES,
    popoverPositioning: RESPONSIVE_POPOVER_POSITIONING_VALUES,
  },
  screenreaderannouncer: {
    'aria-live': ARIA_LIVE_VALUES,
    ariaLive: ARIA_LIVE_VALUES,
    'data-aria-live': ARIA_LIVE_VALUES,
    dataAriaLive: ARIA_LIVE_VALUES,
    delay: undefined,
    timeout: undefined,
  },
  searchfield: {
    ...FORM_FIELD_VALUE_OVERRIDES,
    autocomplete: undefined,
    'control-type': CONTROL_TYPE_VALUES,
    controlType: CONTROL_TYPE_VALUES,
  },
  searchpopover: {
    ...FORM_FIELD_VALUE_OVERRIDES,
    'control-type': CONTROL_TYPE_VALUES,
    controlType: CONTROL_TYPE_VALUES,
    'display-popover': undefined,
    displayPopover: undefined,
    placement: ['bottom-start', 'top-start'],
    'popover-aria-label': undefined,
    popoverAriaLabel: undefined,
  },
  select: {
    ...FORM_FIELD_VALUE_OVERRIDES,
    'backdrop-append-to': undefined,
    backdropAppendTo: undefined,
    boundary: undefined,
    placement: ['bottom-start', 'top-start'],
    strategy: POPOVER_STRATEGY_VALUES,
  },
  statusmessage: {
    severity: STATUSMESSAGE_SEVERITY_VALUES,
  },
  skeleton: {
    variant: SKELETON_VARIANT_VALUES,
  },
  slider: {
    'data-aria-label': undefined,
    dataAriaLabel: undefined,
    'data-aria-valuetext': undefined,
    dataAriaValuetext: undefined,
    'end-aria-label': undefined,
    endAriaLabel: undefined,
    'end-aria-valuetext': undefined,
    endAriaValuetext: undefined,
    max: undefined,
    min: undefined,
    name: undefined,
    'name-end': undefined,
    nameEnd: undefined,
    'name-start': undefined,
    nameStart: undefined,
    step: undefined,
    'start-aria-label': undefined,
    startAriaLabel: undefined,
    'start-aria-valuetext': undefined,
    startAriaValuetext: undefined,
    value: undefined,
    'value-end': undefined,
    valueEnd: undefined,
    'value-start': undefined,
    valueStart: undefined,
  },
  spinner: {
    size: SPINNER_SIZE_VALUES,
    variant: SPINNER_VARIANT_VALUES,
  },
  staticcheckbox: {
    label: undefined,
  },
  staticradio: {
    label: undefined,
  },
  statictoggle: {
    label: undefined,
    size: STATIC_TOGGLE_SIZE_VALUES,
  },
  stepper: {
    orientation: STEPPER_ORIENTATION_VALUES,
    variant: STEPPER_VARIANT_VALUES,
  },
  stepperconnector: {
    orientation: STEPPER_ORIENTATION_VALUES,
    status: STEPPER_CONNECTOR_STATUS_VALUES,
  },
  stepperitem: {
    'aria-current': ['step'],
    ariaCurrent: ['step'],
    'help-text': undefined,
    helpText: undefined,
    label: undefined,
    status: STEPPER_ITEM_STATUS_VALUES,
    'step-number': undefined,
    stepNumber: undefined,
    variant: STEPPER_VARIANT_VALUES,
  },
  staticchip: {
    color: CHIP_COLOR_VALUES,
  },
  textarea: {
    autocomplete: ['off', 'on'],
    wrap: ['soft', 'hard'],
  },
  text: {
    tagname: TEXT_TAG_VALUES,
    type: TEXT_TYPE_VALUES,
  },
  timepicker: {
    ...FORM_FIELD_VALUE_OVERRIDES,
    'append-to': undefined,
    appendTo: undefined,
    'backdrop-append-to': undefined,
    backdropAppendTo: undefined,
    interval: undefined,
    'locale-am-label': undefined,
    localeAmLabel: undefined,
    'locale-hours-label': undefined,
    localeHoursLabel: undefined,
    'locale-hours-placeholder': undefined,
    localeHoursPlaceholder: undefined,
    'locale-minutes-label': undefined,
    localeMinutesLabel: undefined,
    'locale-minutes-placeholder': undefined,
    localeMinutesPlaceholder: undefined,
    'locale-period-label': undefined,
    localePeriodLabel: undefined,
    'locale-period-placeholder': undefined,
    localePeriodPlaceholder: undefined,
    'locale-pm-label': undefined,
    localePmLabel: undefined,
    'locale-show-time-picker-label': undefined,
    localeShowTimePickerLabel: undefined,
    'locale-spinbutton-description': undefined,
    localeSpinbuttonDescription: undefined,
    'locale-time-options-label': undefined,
    localeTimeOptionsLabel: undefined,
    max: undefined,
    min: undefined,
    placement: ['bottom-start', 'top-start'],
    strategy: POPOVER_STRATEGY_VALUES,
    'time-format': TIME_FORMAT_VALUES,
    timeFormat: TIME_FORMAT_VALUES,
  },
  toast: {
    'header-tag-name': FEEDBACK_HEADER_TAG_VALUES,
    headerTagName: FEEDBACK_HEADER_TAG_VALUES,
    variant: TOAST_VARIANT_VALUES,
  },
  toggle: {
    'control-type': ['controlled', 'uncontrolled'],
    controlType: ['controlled', 'uncontrolled'],
    size: ['default', 'compact'],
  },
  toggletip: {
    placement: POPOVER_PLACEMENT_VALUES,
    triggerID: undefined,
    triggerId: undefined,
    triggerid: undefined,
    'trigger-id': undefined,
  },
  tooltip: {
    'boundary-root': POPOVER_BOUNDARY_ROOT_VALUES,
    boundaryRoot: POPOVER_BOUNDARY_ROOT_VALUES,
    placement: POPOVER_PLACEMENT_VALUES,
    strategy: POPOVER_STRATEGY_VALUES,
    'tooltip-type': TOOLTIP_TYPE_VALUES,
    tooltipType: TOOLTIP_TYPE_VALUES,
    triggerID: undefined,
    triggerId: undefined,
    triggerid: undefined,
    'trigger-id': undefined,
  },
  typewriter: {
    'max-queue-size': undefined,
    maxQueueSize: undefined,
    speed: undefined,
    tagname: TEXT_TAG_VALUES,
    type: TEXT_TYPE_VALUES,
  },
  verticaltablist: {
    'data-aria-label': undefined,
    dataAriaLabel: undefined,
    'initial-focus': undefined,
    initialFocus: undefined,
    loop: LIST_LOOP_VALUES,
  },
  virtualizedlist: {
    count: undefined,
    'is-at-bottom-threshold': undefined,
    isAtBottomThreshold: undefined,
    loop: LIST_LOOP_VALUES,
  },
};

function normalizePropName(value: string): string {
  return toCamelCase(value);
}

function isGlobalAttribute(propertyName: string): boolean {
  const normalizedName = propertyName.toLowerCase();

  return GLOBAL_ATTRIBUTES.includes(normalizedName)
    || GLOBAL_ATTRIBUTE_PREFIXES.some(prefix => normalizedName.startsWith(prefix));
}

function findProperty(component: ComponentRegistryEntry, propertyName: string): ComponentProperty | undefined {
  const normalizedName = normalizePropName(propertyName);

  return component.api.properties.find(property => (
    property.name === normalizedName
    || property.attribute === propertyName
    || property.attribute === toKebabCase(normalizedName)
  ));
}

function findValueOverride(
  component: ComponentRegistryEntry,
  names: string[],
): { found: boolean; values?: RegistryValue[] } {
  const overrides = VALUE_OVERRIDES[component.name];

  if (!overrides) {
    return { found: false };
  }

  const overrideKeys = names.flatMap(name => [name, toCamelCase(name), toKebabCase(name)]);
  const overrideKey = overrideKeys.find(key => Object.prototype.hasOwnProperty.call(overrides, key));

  return overrideKey === undefined ? { found: false } : { found: true, values: overrides[overrideKey] };
}

function getValueOverride(
  component: ComponentRegistryEntry,
  property: ComponentProperty,
  propertyName: string,
): RegistryValue[] | undefined {
  const override = findValueOverride(component, [propertyName, property.attribute ?? '', property.name]);

  return override.found ? override.values : property.values;
}

function hasValue(values: RegistryValue[] | undefined, value: RegistryValue | undefined): boolean {
  if (!values || values.length === 0 || value === undefined) {
    return true;
  }

  return values.map(String).includes(String(value));
}

function validateKnownProperties(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  return Object.entries(props).flatMap<ValidationIssue>(([propertyName, value]) => {
    const property = findProperty(component, propertyName);

    if (!property) {
      const override = findValueOverride(component, [propertyName]);

      if (override.found) {
        if (!hasValue(override.values, value)) {
          const validValues = override.values?.map(String).join(', ');

          return [{
            level: 'error' as const,
            property: propertyName,
            message: `Invalid value "${String(value)}" for "${propertyName}". Valid values: ${validValues}.`,
          }];
        }

        return [];
      }

      if (isGlobalAttribute(propertyName)) {
        return [];
      }

      return [{
        level: 'warning' as const,
        property: propertyName,
        message: `Property "${propertyName}" is not documented for ${component.tagName}.`,
      }];
    }

    const values = getValueOverride(component, property, propertyName);

    if (!hasValue(values, value)) {
      const validValues = values?.map(String).join(', ');

      return [{
        level: 'error' as const,
        property: propertyName,
        message: `Invalid value "${String(value)}" for "${propertyName}". Valid values: ${validValues}.`,
      }];
    }

    return [];
  });
}

function getProp(props: ComponentProps, ...names: string[]): RegistryValue | undefined {
  const candidateNames = names.flatMap(name => [name, toCamelCase(name), toKebabCase(name)]);

  return candidateNames.map(name => props[name]).find(value => value !== undefined);
}

function hasProp(props: ComponentProps, ...names: string[]): boolean {
  return getProp(props, ...names) !== undefined;
}

function hasTextValue(value: RegistryValue | undefined): boolean {
  return typeof value === 'string'
    ? value.trim().length > 0
    : value !== undefined && value !== false && value !== null;
}

function hasAnyTextProp(props: ComponentProps, ...names: string[]): boolean {
  return names.some(name => hasTextValue(getProp(props, name)));
}

function isTrue(value: RegistryValue | undefined): boolean {
  return value === true || value === 'true';
}

function isFalse(value: RegistryValue | undefined): boolean {
  return value === false || value === 'false';
}

function isAriaHidden(props: ComponentProps): boolean {
  return isTrue(getProp(props, 'aria-hidden'));
}

function hasAriaReference(props: ComponentProps): boolean {
  return hasAnyTextProp(props, 'aria-label', 'aria-labelledby');
}

function isNonNegativeLoopValue(value: RegistryValue | undefined): boolean {
  if (value === true || value === false || value === 'true' || value === 'false') {
    return true;
  }

  if (typeof value === 'number') {
    return Number.isInteger(value) && value >= 0;
  }

  return typeof value === 'string' && /^\d+$/.test(value);
}

function validateLabelRequirement(
  tagName: string,
  props: ComponentProps,
  ...labelProperties: string[]
): ValidationIssue[] {
  if (hasAnyTextProp(props, ...labelProperties)) {
    return [];
  }

  return [{
    level: 'error',
    property: labelProperties[0],
    message: `${tagName} requires ${labelProperties.join(' or ')} for an accessible name.`,
  }];
}

function validateLengthPair(tagName: string, props: ComponentProps): ValidationIssue[] {
  const minlength = getProp(props, 'minlength');
  const maxlength = getProp(props, 'maxlength');

  if (minlength === undefined || maxlength === undefined || Number(minlength) <= Number(maxlength)) {
    return [];
  }

  return [{
    level: 'error',
    property: 'minlength',
    message: `${tagName} minlength cannot be greater than maxlength.`,
  }];
}

function validatePositiveNumber(
  tagName: string,
  props: ComponentProps,
  propertyName: string,
): ValidationIssue[] {
  const value = getProp(props, propertyName);

  if (value === undefined || Number(value) > 0) {
    return [];
  }

  return [{
    level: 'error',
    property: propertyName,
    message: `${tagName} ${propertyName} must be greater than 0.`,
  }];
}

function validateNonNegativeNumber(
  tagName: string,
  props: ComponentProps,
  propertyName: string,
): ValidationIssue[] {
  const value = getProp(props, propertyName);

  if (value === undefined || Number(value) >= 0) {
    return [];
  }

  return [{
    level: 'error',
    property: propertyName,
    message: `${tagName} ${propertyName} must be 0 or greater.`,
  }];
}

function validateAriaHiddenLabelConflict(tagName: string, props: ComponentProps): ValidationIssue[] {
  if (!isAriaHidden(props) || !hasAriaReference(props)) {
    return [];
  }

  return [{
    level: 'error',
    property: 'aria-hidden',
    message: `${tagName} should not combine aria-hidden="true" with aria-label or aria-labelledby.`,
  }];
}

function validateNameRequirement(
  tagName: string,
  props: ComponentProps,
  ...propertyNames: string[]
): ValidationIssue[] {
  if (hasAnyTextProp(props, ...propertyNames)) {
    return [];
  }

  return [{
    level: 'error',
    property: propertyNames[0],
    message: `${tagName} requires ${propertyNames.join(' or ')} so the asset can be loaded.`,
  }];
}

function validateShortLabel(
  tagName: string,
  props: ComponentProps,
  propertyName = 'label',
  maxLength = 20,
): ValidationIssue[] {
  const label = getProp(props, propertyName);

  if (typeof label !== 'string' || label.length <= maxLength) {
    return [];
  }

  return [{
    level: 'warning',
    property: propertyName,
    message: `${tagName} ${propertyName} should be ${maxLength} characters or fewer.`,
  }];
}

function isValidIsoDate(value: RegistryValue | undefined): boolean {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

function isValidTimeValue(value: RegistryValue | undefined): boolean {
  return typeof value === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
}

function validateIsoDateProps(tagName: string, props: ComponentProps, ...propertyNames: string[]): ValidationIssue[] {
  return propertyNames.flatMap<ValidationIssue>(propertyName => {
    const value = getProp(props, propertyName);

    if (value === undefined || isValidIsoDate(value)) {
      return [];
    }

    return [{
      level: 'error',
      property: propertyName,
      message: `${tagName} ${propertyName} must use ISO date format YYYY-MM-DD.`,
    }];
  });
}

function validateTimeProps(tagName: string, props: ComponentProps, ...propertyNames: string[]): ValidationIssue[] {
  return propertyNames.flatMap<ValidationIssue>(propertyName => {
    const value = getProp(props, propertyName);

    if (value === undefined || isValidTimeValue(value)) {
      return [];
    }

    return [{
      level: 'error',
      property: propertyName,
      message: `${tagName} ${propertyName} must use 24-hour HH:MM format.`,
    }];
  });
}

function validateOrderedValues(
  tagName: string,
  props: ComponentProps,
  startProperty: string,
  endProperty: string,
  options: { format: 'date' | 'number' | 'time'; message: string },
): ValidationIssue[] {
  const start = getProp(props, startProperty);
  const end = getProp(props, endProperty);

  if (start === undefined || end === undefined) {
    return [];
  }

  const startValue = options.format === 'number' ? Number(start) : String(start);
  const endValue = options.format === 'number' ? Number(end) : String(end);

  if (startValue <= endValue) {
    return [];
  }

  return [{
    level: 'error',
    property: startProperty,
    message: `${tagName} ${options.message}`,
  }];
}

function validateRangeValue(
  tagName: string,
  props: ComponentProps,
  propertyName: string,
  min = 0,
  max = 100,
): ValidationIssue[] {
  const value = getProp(props, propertyName);
  const numericValue = Number(value);

  if (value === undefined || (Number.isFinite(numericValue) && numericValue >= min && numericValue <= max)) {
    return [];
  }

  return [{
    level: 'error',
    property: propertyName,
    message: `${tagName} ${propertyName} must be a number from ${min} to ${max}.`,
  }];
}

function validateDataAriaLabel(tagName: string, props: ComponentProps): ValidationIssue[] {
  if (hasAnyTextProp(props, 'data-aria-label')) {
    return [];
  }

  return [{
    level: 'error',
    property: 'data-aria-label',
    message: `${tagName} requires data-aria-label for an accessible name.`,
  }];
}

function validateTargetBlankLink(
  tagName: string,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const target = getProp(props, 'target');
  const rel = String(getProp(props, 'rel') ?? '');
  const label = String(getProp(props, 'data-aria-label') ?? children ?? '');

  if (target === '_blank' && !rel.split(/\s+/).includes('noopener')) {
    issues.push({
      level: 'error',
      property: 'rel',
      message: `${tagName} with target="_blank" must include rel="noopener".`,
    });
  }

  if (target === '_blank' && !label.toLowerCase().includes('new tab')) {
    issues.push({
      level: 'warning',
      property: 'data-aria-label',
      message: `${tagName} target="_blank" usage should mention that the link opens in a new tab.`,
    });
  }

  return issues;
}

function parseMarkupAttributeValue(value: string | undefined): RegistryValue {
  if (value === undefined) {
    return true;
  }
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (/^-?\d+(?:\.\d+)?$/.test(value)) {
    return Number(value);
  }

  return value;
}

function parseMarkupAttributes(rawAttributes: string): ComponentProps {
  const attributePattern = /\s([a-zA-Z][\w-]*)(?:=(?:"([^"]*)"|'([^']*)'|\{([^}]+)\}))?/g;

  return [...rawAttributes.matchAll(attributePattern)].reduce<ComponentProps>(
    (props, [, name, doubleQuoted, singleQuoted, expression]) => ({
      ...props,
      [name]: parseMarkupAttributeValue(doubleQuoted ?? singleQuoted ?? expression),
    }),
    {},
  );
}

function getTagProps(markup: string | undefined, tagName: string): ComponentProps[] {
  if (!markup) {
    return [];
  }

  const tagPattern = new RegExp(`<${tagName}\\b([^>]*)>`, 'gi');

  return [...markup.matchAll(tagPattern)].map(([, rawAttributes]) => parseMarkupAttributes(rawAttributes));
}

function getTagContents(markup: string | undefined, tagName: string): string[] {
  if (!markup) {
    return [];
  }

  const blockPattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'gi');

  return [...markup.matchAll(blockPattern)].map(([, contents]) => contents);
}

function getTagBlocks(markup: string | undefined, tagName: string): TagBlock[] {
  if (!markup) {
    return [];
  }

  const blockPattern = new RegExp(`<${tagName}\\b([^>]*)>([\\s\\S]*?)<\\/${tagName}>`, 'gi');

  return [...markup.matchAll(blockPattern)].map(([, rawAttributes, contents]) => ({
    tagName,
    props: parseMarkupAttributes(rawAttributes),
    contents,
  }));
}

function getOpeningTags(markup: string | undefined): Array<Omit<TagBlock, 'contents'>> {
  if (!markup) {
    return [];
  }

  const tagPattern = /<([a-zA-Z][\w-]*)\b([^>]*)>/g;

  return [...markup.matchAll(tagPattern)].map(([, tagName, rawAttributes]) => ({
    tagName: tagName.toLowerCase(),
    props: parseMarkupAttributes(rawAttributes),
  }));
}

function hasTag(markup: string | undefined, tagName: string): boolean {
  return getTagProps(markup, tagName).length > 0;
}

function hasAnyTag(markup: string | undefined, tagNames: string[]): boolean {
  return tagNames.some(tagName => hasTag(markup, tagName));
}

function hasSlot(markup: string | undefined, slotName: string): boolean {
  return new RegExp(`\\sslot=["']${slotName}["']`, 'i').test(markup ?? '');
}

function getSlottedTags(
  markup: string | undefined,
  slotName: string,
  tagNames?: string[],
): Array<Omit<TagBlock, 'contents'>> {
  const allowedTagNames = tagNames?.map(tagName => tagName.toLowerCase());

  return getOpeningTags(markup).filter(({ tagName, props }) => (
    getProp(props, 'slot') === slotName
    && (!allowedTagNames || allowedTagNames.includes(tagName))
  ));
}

function getSlottedTagBlocks(markup: string | undefined, slotName: string, tagName: string): TagBlock[] {
  return getTagBlocks(markup, tagName).filter(({ props }) => getProp(props, 'slot') === slotName);
}

function hasTextContent(markup: string | undefined): boolean {
  return Boolean(markup?.replace(/<[^>]+>/g, '').trim());
}

function hasTriggerId(props: ComponentProps): boolean {
  return hasAnyTextProp(props, 'triggerid', 'triggerID', 'triggerId', 'trigger-id');
}

function hasAccessibleName(
  props: ComponentProps,
  children: string | undefined,
  ...names: string[]
): boolean {
  return hasAnyTextProp(props, ...names) || hasTextContent(children);
}

function hasLiveRegionSemantics(props: ComponentProps): boolean {
  const role = String(getProp(props, 'role') ?? '').toLowerCase();

  return role === 'alert'
    || role === 'status'
    || role === 'log'
    || hasAnyTextProp(props, 'aria-live', 'aria-describedby');
}

function uniqueStrings(values: string[]): string[] {
  return [...new Set(values)];
}

function hasFocusableDescendant(markup: string | undefined): boolean {
  const focusableTagPattern = [
    '<(?:a|button|input|select|textarea)\\b',
    [
      '<mdc-(?:button|buttonlink|buttons?imple|cardbutton|cardcheckbox|cardradio|checkbox|input|link',
      '|linksimple|linkbutton|password|radio|searchfield|select|slider|textarea|toggle)\\b',
    ].join(''),
  ].join('|');

  return new RegExp(focusableTagPattern, 'i').test(markup ?? '');
}

function hasButtonAccessibleName(props: ComponentProps, contents?: string): boolean {
  return hasAnyTextProp(props, 'aria-label', 'data-aria-label') || hasTextContent(contents);
}

function isIconOnlyButton(props: ComponentProps, contents?: string): boolean {
  return !hasTextContent(contents) && hasProp(props, 'prefix-icon', 'postfix-icon', 'icon-name');
}

function validateDisabledState(tagName: string, props: ComponentProps): ValidationIssue[] {
  if (!isTrue(getProp(props, 'disabled')) || !isTrue(getProp(props, 'soft-disabled'))) {
    return [];
  }

  return [{
    level: 'warning',
    property: 'soft-disabled',
    message: `${tagName} should use either disabled or soft-disabled, not both.`,
  }];
}

function validateRequiredTriggerId(tagName: string, props: ComponentProps): ValidationIssue[] {
  if (hasTriggerId(props)) {
    return [];
  }

  return [{
    level: 'error',
    property: 'triggerid',
    message: `${tagName} requires triggerid matching the id of its trigger element.`,
  }];
}

function validateCloseButtonAriaLabel(tagName: string, props: ComponentProps): ValidationIssue[] {
  if (hasAnyTextProp(props, 'close-button-aria-label')) {
    return [];
  }

  return [{
    level: 'error',
    property: 'close-button-aria-label',
    message: `${tagName} requires close-button-aria-label for the built-in close button.`,
  }];
}

function validateDelayFormat(tagName: string, props: ComponentProps): ValidationIssue[] {
  const delay = getProp(props, 'delay');

  if (delay === undefined || /^\d+\s*,\s*\d+$/.test(String(delay).trim())) {
    return [];
  }

  return [{
    level: 'error',
    property: 'delay',
    message: `${tagName} delay must use the "openMs,closeMs" format, for example "200,300".`,
  }];
}

function validatePopoverTriggerTokens(tagName: string, props: ComponentProps): ValidationIssue[] {
  const trigger = getProp(props, 'trigger');

  if (trigger === undefined) {
    return [];
  }

  const tokens = String(trigger).split(/\s+/).filter(Boolean);
  const invalidTokens = tokens.filter(token => !POPOVER_TRIGGER_VALUES.includes(token));

  if (tokens.length > 0 && invalidTokens.length === 0) {
    return [];
  }

  return [{
    level: 'error',
    property: 'trigger',
    message: [
      `${tagName} trigger must be a space-separated list using`,
      `${POPOVER_TRIGGER_VALUES.join(', ')}. Invalid values: ${invalidTokens.join(', ') || String(trigger)}.`,
    ].join(' '),
  }];
}

function validateOptionChildrenValues(tagName: string, children?: string): ValidationIssue[] {
  const optionProps = getTagProps(children, 'mdc-option');
  const missingValueCount = optionProps.filter(props => !hasTextValue(getProp(props, 'value'))).length;
  const values = optionProps.map(props => getProp(props, 'value')).filter(hasTextValue).map(String);
  const duplicateValues = uniqueStrings(values.filter((value, index) => values.indexOf(value) !== index));
  const issues: ValidationIssue[] = [];

  if (missingValueCount > 0) {
    issues.push({
      level: 'error',
      property: 'value',
      message: `${tagName} contains mdc-option children without value attributes.`,
    });
  }

  if (duplicateValues.length > 0) {
    issues.push({
      level: 'error',
      property: 'value',
      message: `${tagName} contains duplicate mdc-option values: ${duplicateValues.join(', ')}.`,
    });
  }

  return issues;
}

function validateOptionChildrenLabels(tagName: string, children?: string): ValidationIssue[] {
  const optionProps = getTagProps(children, 'mdc-option');
  const missingLabelCount = optionProps.filter(props => (
    !hasAnyTextProp(props, 'label', 'aria-label')
  )).length;

  if (missingLabelCount === 0) {
    return [];
  }

  return [{
    level: 'error',
    property: 'label',
    message: `${tagName} contains mdc-option children without label or aria-label.`,
  }];
}

function validateSingleSelection(children?: string): ValidationIssue[] {
  const selectedOptions = getTagProps(children, 'mdc-option').filter(props => isTrue(getProp(props, 'selected')));

  if (selectedOptions.length <= 1) {
    return [];
  }

  return [{
    level: 'error',
    property: 'selected',
    message: 'Single-select listbox usage cannot contain more than one selected mdc-option.',
  }];
}

function validateMenuItemSubmenus(children?: string): ValidationIssue[] {
  const popoverTriggerIds = getTagProps(children, 'mdc-menupopover')
    .map(props => getProp(props, 'triggerid'))
    .filter(hasTextValue)
    .map(String);
  const submenuItems = MENU_ITEM_TAGS.flatMap(tagName => getTagProps(children, tagName))
    .filter(props => getProp(props, 'arrow-position') === 'trailing');

  return submenuItems.flatMap<ValidationIssue>(props => {
    const itemId = getProp(props, 'id');

    if (!hasTextValue(itemId)) {
      return [{
        level: 'error',
        property: 'id',
        message: 'Menu items that open submenus need an id matching a sibling mdc-menupopover triggerid.',
      }];
    }

    if (!popoverTriggerIds.includes(String(itemId))) {
      return [{
        level: 'error',
        property: 'triggerid',
        message: `No sibling mdc-menupopover triggerid matches submenu menu item id "${String(itemId)}".`,
      }];
    }

    return [];
  });
}

function validateButtonRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'button') {
    return [];
  }

  const variant = String(getProp(props, 'variant') ?? 'primary');
  const color = String(getProp(props, 'color') ?? 'default');
  const size = getProp(props, 'size') === undefined ? 32 : Number(getProp(props, 'size'));
  const hasIcon = Boolean(getProp(props, 'prefix-icon', 'postfix-icon'));
  const hasText = Boolean(children?.trim());
  const isIconOnly = hasIcon && !hasText;
  const invalidInvertedUsage = isTrue(getProp(props, 'inverted'))
    && (variant !== 'primary' || color !== 'default' || isTrue(getProp(props, 'active')));
  const issues: ValidationIssue[] = [];

  if (variant === 'tertiary' && !['default', 'accent', 'negative'].includes(color)) {
    issues.push({
      level: 'error',
      property: 'color',
      message: [
        'For mdc-button, variant="tertiary" only supports color="default",',
        'color="accent", or color="negative".',
      ].join(' '),
    });
  }

  if (!isIconOnly && ![40, 32, 28, 24].includes(size)) {
    issues.push({
      level: 'error',
      property: 'size',
      message: 'Pill and pill-with-icon buttons only support size values 40, 32, 28, and 24.',
    });
  }

  if (isIconOnly && ![64, 52, 40, 32, 28, 24, 20].includes(size)) {
    issues.push({
      level: 'error',
      property: 'size',
      message: [
        'Icon-only buttons support size values 64, 52, 40, 32, 28, 24,',
        'and tertiary-only size 20.',
      ].join(' '),
    });
  }

  if (size === 20 && (!isIconOnly || variant !== 'tertiary')) {
    issues.push({
      level: 'error',
      property: 'size',
      message: 'Button size 20 is only valid for tertiary icon-only buttons.',
    });
  }

  if (isIconOnly && !hasProp(props, 'aria-label')) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: [
        'Icon-only mdc-button usage must include aria-label',
        'so assistive technology has an accessible name.',
      ].join(' '),
    });
  }

  if (invalidInvertedUsage) {
    issues.push({
      level: 'error',
      property: 'inverted',
      message: [
        'The inverted button flag is only valid with variant="primary",',
        'color="default", and an inactive button.',
      ].join(' '),
    });
  }

  return issues;
}

function validateButtonLinkRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'buttonlink') {
    return [];
  }

  const variant = String(getProp(props, 'variant') ?? 'primary');
  const color = String(getProp(props, 'color') ?? 'default');
  const size = getProp(props, 'size') === undefined ? 32 : Number(getProp(props, 'size'));
  const hasIcon = Boolean(getProp(props, 'prefix-icon', 'postfix-icon'));
  const hasText = Boolean(children?.trim());
  const isIconOnly = hasIcon && !hasText;
  const target = getProp(props, 'target');
  const rel = String(getProp(props, 'rel') ?? '');
  const label = String(getProp(props, 'data-aria-label') ?? children ?? '');
  const issues: ValidationIssue[] = [];

  if (!hasTextValue(getProp(props, 'href')) && !isTrue(getProp(props, 'disabled'))) {
    issues.push({
      level: 'error',
      property: 'href',
      message: 'mdc-buttonlink requires href to be activatable.',
    });
  }

  if (variant === 'tertiary' && !['default', 'accent', 'negative'].includes(color)) {
    issues.push({
      level: 'error',
      property: 'color',
      message: [
        'For mdc-buttonlink, variant="tertiary" only supports color="default",',
        'color="accent", or color="negative".',
      ].join(' '),
    });
  }

  if (!isIconOnly && ![40, 32, 28, 24].includes(size)) {
    issues.push({
      level: 'error',
      property: 'size',
      message: 'Pill and pill-with-icon buttonlinks only support size values 40, 32, 28, and 24.',
    });
  }

  if (size === 20 && (!isIconOnly || variant !== 'tertiary')) {
    issues.push({
      level: 'error',
      property: 'size',
      message: 'Buttonlink size 20 is only valid for tertiary icon-only buttonlinks.',
    });
  }

  if (isIconOnly && !hasProp(props, 'data-aria-label')) {
    issues.push({
      level: 'error',
      property: 'data-aria-label',
      message: 'Icon-only mdc-buttonlink usage must include data-aria-label.',
    });
  }

  if (target === '_blank' && !rel.split(/\s+/).includes('noopener')) {
    issues.push({
      level: 'error',
      property: 'rel',
      message: 'mdc-buttonlink with target="_blank" must include rel="noopener".',
    });
  }

  if (target === '_blank' && !label.toLowerCase().includes('new tab')) {
    issues.push({
      level: 'warning',
      property: 'data-aria-label',
      message: 'When target="_blank", include an "opens in a new tab" hint in the label or data-aria-label.',
    });
  }

  if (hasProp(props, 'active')) {
    issues.push({
      level: 'warning',
      property: 'active',
      message: 'mdc-buttonlink does not expose active or aria-pressed semantics; use mdc-button for toggled state.',
    });
  }

  return issues;
}

function validateLinkButtonRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'linkbutton') {
    return [];
  }

  if (!children?.trim() && !hasAnyTextProp(props, 'aria-label', 'data-aria-label')) {
    return [{
      level: 'error',
      property: 'aria-label',
      message: 'mdc-linkbutton needs descriptive label text or aria-label for an accessible name.',
    }];
  }

  return [];
}

function validateComboboxRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'combobox') {
    return [];
  }

  const issues = validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label');
  const hasSelectListBox = hasTag(children, 'mdc-selectlistbox');
  const hasOptions = hasTag(children, 'mdc-option') || hasTag(children, 'mdc-optgroup');
  const selectListBoxContents = getTagContents(children, 'mdc-selectlistbox');

  if (children && hasOptions && !hasSelectListBox) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'mdc-combobox options must be wrapped in an mdc-selectlistbox child.',
    });
  }

  if (selectListBoxContents.some(contents => hasTag(contents, 'mdc-tooltip'))) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Place per-option mdc-tooltip siblings outside mdc-selectlistbox and link them with triggerid.',
    });
  }

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: 'mdc-combobox with toggletip-text requires info-icon-aria-label.',
    });
  }

  if (isTrue(getProp(props, 'required')) && !hasAnyTextProp(props, 'validation-message')) {
    issues.push({
      level: 'warning',
      property: 'validation-message',
      message: 'mdc-combobox required state can use validation-message to explain the empty required state.',
    });
  }

  if (getProp(props, 'filter') === 'none') {
    issues.push({
      level: 'warning',
      property: 'filter',
      message: 'When filter="none", update slotted options externally as data changes.',
    });
  }

  if (getProp(props, 'control-type') === 'controlled') {
    issues.push({
      level: 'warning',
      property: 'control-type',
      message: 'Controlled mdc-combobox usage must listen to input/change and drive value from the parent.',
    });
  }

  if (hasProp(props, 'no-result-text') !== hasProp(props, 'invalid-custom-value-text')) {
    issues.push({
      level: 'warning',
      property: 'invalid-custom-value-text',
      message: 'Pair no-result-text and invalid-custom-value-text so filtering and invalid-value recovery are clear.',
    });
  }

  return [
    ...issues,
    ...validateOptionChildrenValues(component.tagName, children),
    ...validateOptionChildrenLabels(component.tagName, children),
  ];
}

function validateListboxRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'listbox') {
    return [];
  }

  const optionValues = getTagProps(children, 'mdc-option')
    .map(optionProps => getProp(optionProps, 'value'))
    .filter(hasTextValue)
    .map(String);
  const issues: ValidationIssue[] = [];
  const value = getProp(props, 'value');

  if (children && !hasAnyTag(children, ['mdc-option', 'mdc-optgroup'])) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-listbox expects mdc-option children, optionally wrapped in mdc-optgroup.',
    });
  }

  if (isTrue(getProp(props, 'multiple')) && !hasAnyTextProp(props, 'aria-label', 'aria-labelledby', 'title')) {
    issues.push({
      level: 'warning',
      property: 'multiple',
      message: 'When multiple is true, communicate the multi-select affordance in surrounding UI or labelling.',
    });
  }

  if (hasTextValue(value) && optionValues.length > 0 && !optionValues.includes(String(value))) {
    issues.push({
      level: 'error',
      property: 'value',
      message: `mdc-listbox value "${String(value)}" does not match any child mdc-option value.`,
    });
  }

  return [
    ...issues,
    ...validateOptionChildrenValues(component.tagName, children),
    ...validateOptionChildrenLabels(component.tagName, children),
    ...(isTrue(getProp(props, 'multiple')) ? [] : validateSingleSelection(children)),
  ];
}

function validateSelectListBoxRules(
  component: ComponentRegistryEntry,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'selectlistbox') {
    return [];
  }

  const issues: ValidationIssue[] = [];

  if (children && !hasAnyTag(children, ['mdc-option', 'mdc-optgroup'])) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-selectlistbox should wrap mdc-option or mdc-optgroup children.',
    });
  }

  if (hasAnyTag(children, MENU_ITEM_TAGS)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Use mdc-option inside mdc-selectlistbox; menu items belong in mdc-menubar or mdc-menupopover.',
    });
  }

  if (hasTag(children, 'mdc-tooltip')) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Do not place mdc-tooltip inside mdc-selectlistbox; make it a sibling linked with triggerid.',
    });
  }

  return [
    ...issues,
    ...validateOptionChildrenValues(component.tagName, children),
    ...validateOptionChildrenLabels(component.tagName, children),
  ];
}

function validateOptionRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'option') {
    return [];
  }

  const issues = [
    ...validateLabelRequirement(component.tagName, props, 'label', 'aria-label'),
    ...validateDisabledState(component.tagName, props),
  ];
  const unusedProps = ['name', 'tertiary-label', 'side-header-text', 'subline-text']
    .filter(propertyName => hasProp(props, propertyName));

  if (!hasTextValue(getProp(props, 'value'))) {
    issues.push({
      level: 'error',
      property: 'value',
      message: 'mdc-option requires value so the surrounding select/listbox can submit and sync selection.',
    });
  }

  if (hasTextContent(children)) {
    issues.splice(0, issues.length, ...issues.filter(issue => issue.property !== 'label'));
  }

  unusedProps.forEach(propertyName => {
    issues.push({
      level: 'warning',
      property: propertyName,
      message: `${propertyName} is intentionally not rendered by mdc-option.`,
    });
  });

  return issues;
}

function validateOptGroupRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'optgroup') {
    return [];
  }

  const issues = validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label');

  if (hasTag(children, 'mdc-optgroup')) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Do not nest mdc-optgroup inside another mdc-optgroup.',
    });
  }

  if (hasAnyTag(children, MENU_ITEM_TAGS)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'mdc-optgroup should contain mdc-option children; use mdc-menusection for menu items.',
    });
  }

  return [
    ...issues,
    ...validateOptionChildrenValues(component.tagName, children),
    ...validateOptionChildrenLabels(component.tagName, children),
  ];
}

function validateInputRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'input') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const prefixText = getProp(props, 'prefix-text');

  if (!hasAnyTextProp(props, 'label', 'data-aria-label')) {
    issues.push({
      level: 'error',
      property: 'label',
      message: 'mdc-input requires either label or data-aria-label for an accessible name.',
    });
  }

  if (hasTextValue(prefixText) && !hasAnyTextProp(props, 'data-aria-label')) {
    issues.push({
      level: 'error',
      property: 'data-aria-label',
      message: 'mdc-input with prefix-text must include data-aria-label explaining the prefix meaning.',
    });
  }

  if (typeof prefixText === 'string' && prefixText.length > 10) {
    issues.push({
      level: 'error',
      property: 'prefix-text',
      message: 'mdc-input prefix-text must be 10 characters or fewer.',
    });
  }

  if (isTrue(getProp(props, 'trailing-button')) && !hasAnyTextProp(props, 'clear-aria-label')) {
    issues.push({
      level: 'error',
      property: 'clear-aria-label',
      message: 'mdc-input with trailing-button requires clear-aria-label.',
    });
  }

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: 'mdc-input with toggletip-text requires info-icon-aria-label.',
    });
  }

  return [
    ...issues,
    ...validateLengthPair('mdc-input', props),
  ];
}

function validateTextareaRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'textarea') {
    return [];
  }

  const issues: ValidationIssue[] = [];

  if (!hasAnyTextProp(props, 'label', 'data-aria-label')) {
    issues.push({
      level: 'error',
      property: 'label',
      message: 'mdc-textarea requires label or data-aria-label for an accessible name.',
    });
  }

  if (isTrue(getProp(props, 'resizable')) && !hasAnyTextProp(props, 'resize-button-aria-label')) {
    issues.push({
      level: 'error',
      property: 'resize-button-aria-label',
      message: 'mdc-textarea with resizable enabled requires resize-button-aria-label.',
    });
  }

  if (
    isTrue(getProp(props, 'resizable'))
    && hasAnyTextProp(props, 'resize-button-aria-label')
    && !String(getProp(props, 'resize-button-aria-label')).toLowerCase().includes('arrow')
  ) {
    issues.push({
      level: 'warning',
      property: 'resize-button-aria-label',
      message: 'Textarea resize-button-aria-label should mention Arrow Up/Down keyboard shortcuts.',
    });
  }

  if (hasProp(props, 'max-character-limit') && !hasAnyTextProp(props, 'help-text')) {
    issues.push({
      level: 'warning',
      property: 'help-text',
      message: 'When max-character-limit is set, provide or update help-text so the counter has context.',
    });
  }

  return [
    ...issues,
    ...validateLengthPair('mdc-textarea', props),
    ...validatePositiveNumber('mdc-textarea', props, 'rows'),
    ...validatePositiveNumber('mdc-textarea', props, 'cols'),
  ];
}

function validateCheckboxRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'checkbox') {
    return [];
  }

  const issues = validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label');

  if (isTrue(getProp(props, 'checked')) && isTrue(getProp(props, 'indeterminate'))) {
    issues.push({
      level: 'warning',
      property: 'indeterminate',
      message: 'mdc-checkbox clears indeterminate when checked changes; choose one deterministic state.',
    });
  }

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: 'mdc-checkbox with toggletip-text requires info-icon-aria-label.',
    });
  }

  return issues;
}

function validateRadioRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'radio') {
    return [];
  }

  const issues = validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label');

  if (!hasAnyTextProp(props, 'name')) {
    issues.push({
      level: 'warning',
      property: 'name',
      message: 'mdc-radio should use a shared name, or be wrapped in mdc-radiogroup, for group behavior.',
    });
  }

  return issues;
}

function validateRadioGroupRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'radiogroup') {
    return [];
  }

  const issues = validateLabelRequirement(component.tagName, props, 'label', 'aria-label');

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: 'mdc-radiogroup with toggletip-text requires info-icon-aria-label.',
    });
  }

  return issues;
}

function validateToggleRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'toggle') {
    return [];
  }

  const issues = validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label');

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: 'mdc-toggle with toggletip-text requires info-icon-aria-label.',
    });
  }

  if (isTrue(getProp(props, 'required')) && !hasAnyTextProp(props, 'validation-message')) {
    issues.push({
      level: 'warning',
      property: 'validation-message',
      message: 'mdc-toggle required state can use validation-message to explain why it is invalid.',
    });
  }

  return issues;
}

function validateMenuItemBaseRules(
  tagName: string,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  const issues = [
    ...validateLabelRequirement(tagName, props, 'label', 'aria-label'),
    ...validateDisabledState(tagName, props),
    ...validateNonNegativeNumber(tagName, props, 'data-index'),
  ];

  if (hasTextContent(children)) {
    return issues.filter(issue => issue.property !== 'label');
  }

  return issues;
}

function validateMenuItemRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'menuitem') {
    return [];
  }

  const issues = validateMenuItemBaseRules(component.tagName, props, children);

  if (getProp(props, 'arrow-position') === 'trailing' && !hasAnyTextProp(props, 'id')) {
    issues.push({
      level: 'error',
      property: 'id',
      message: 'mdc-menuitem with arrow-position="trailing" needs an id for the matching submenu triggerid.',
    });
  }

  return issues;
}

function validateMenuItemCheckboxRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'menuitemcheckbox') {
    return [];
  }

  const issues = validateMenuItemBaseRules(component.tagName, props, children);

  if (getProp(props, 'indicator') === 'none' && !hasAnyTextProp(props, 'aria-label')) {
    issues.push({
      level: 'warning',
      property: 'indicator',
      message: 'When indicator="none", update aria-label or another accessible cue to reflect checked state.',
    });
  }

  if (hasProp(props, 'name') !== hasProp(props, 'value')) {
    issues.push({
      level: 'warning',
      property: 'value',
      message: 'Use name and value together when mdc-menuitemcheckbox participates in group selection.',
    });
  }

  if (hasFocusableDescendant(children)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Do not place focusable descendants inside mdc-menuitemcheckbox.',
    });
  }

  return issues;
}

function validateMenuItemRadioRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'menuitemradio') {
    return [];
  }

  const issues = validateMenuItemBaseRules(component.tagName, props, children);

  if (!hasAnyTextProp(props, 'name')) {
    issues.push({
      level: 'error',
      property: 'name',
      message: 'mdc-menuitemradio requires name so related radio menu items form one selection group.',
    });
  }

  if (!hasAnyTextProp(props, 'value')) {
    issues.push({
      level: 'warning',
      property: 'value',
      message: 'mdc-menuitemradio should provide value for the selected menu entry.',
    });
  }

  if (getProp(props, 'indicator') === 'none' && !hasAnyTextProp(props, 'aria-label')) {
    issues.push({
      level: 'warning',
      property: 'indicator',
      message: 'When indicator="none", update aria-label or another accessible cue to reflect checked state.',
    });
  }

  if (hasFocusableDescendant(children)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Do not place focusable descendants inside mdc-menuitemradio.',
    });
  }

  return issues;
}

function validateMenuChildrenLabels(children?: string): ValidationIssue[] {
  const missingLabelCount = MENU_ITEM_TAGS
    .flatMap(tagName => getTagProps(children, tagName))
    .filter(props => !hasAnyTextProp(props, 'label', 'aria-label')).length;

  if (missingLabelCount === 0) {
    return [];
  }

  return [{
    level: 'error',
    property: 'children',
    message: 'Every menu item inside mdc-menubar needs label, slotted text, or aria-label.',
  }];
}

function validateMenuRadioGroups(children?: string): ValidationIssue[] {
  const checkedRadioNames = getTagProps(children, 'mdc-menuitemradio')
    .filter(props => isTrue(getProp(props, 'checked')))
    .map(props => getProp(props, 'name'))
    .filter(hasTextValue)
    .map(String);
  const duplicateCheckedNames = uniqueStrings(
    checkedRadioNames.filter((name, index) => checkedRadioNames.indexOf(name) !== index),
  );

  if (duplicateCheckedNames.length === 0) {
    return [];
  }

  return [{
    level: 'error',
    property: 'checked',
    message: `Only one mdc-menuitemradio per name should be checked. Duplicates: ${duplicateCheckedNames.join(', ')}.`,
  }];
}

function validateMenubarRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'menubar') {
    return [];
  }

  const issues: ValidationIssue[] = [];

  if (!hasAnyTextProp(props, 'aria-label', 'aria-labelledby', 'title')) {
    issues.push({
      level: 'warning',
      property: 'aria-label',
      message: 'mdc-menubar does not render visible text; provide aria-label when surrounding context is unclear.',
    });
  }

  if (children && !hasAnyTag(children, [...MENU_ITEM_TAGS, 'mdc-menusection'])) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-menubar should contain menu items or mdc-menusection children.',
    });
  }

  if (hasAnyTag(children, OPTION_CONTAINER_TAGS) || hasTag(children, 'mdc-option')) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Selection list components belong in mdc-listbox/select, not inside mdc-menubar.',
    });
  }

  return [
    ...issues,
    ...validateMenuChildrenLabels(children),
    ...validateMenuItemSubmenus(children),
    ...validateMenuRadioGroups(children),
  ];
}

function validateDialogRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'dialog') {
    return [];
  }

  const issues: ValidationIssue[] = [];

  if (!hasAnyTextProp(props, 'header-text', 'aria-label', 'aria-labelledby')) {
    issues.push({
      level: 'error',
      property: 'header-text',
      message: 'mdc-dialog requires header-text, aria-label, or aria-labelledby for an accessible name.',
    });
  }

  if (isTrue(getProp(props, 'visible')) && !hasTriggerId(props)) {
    issues.push({
      level: 'warning',
      property: 'triggerID',
      message: 'Visible mdc-dialog usage should provide triggerID so focus returns to the opener.',
    });
  }

  if (getProp(props, 'focus-trap') === false || getProp(props, 'focus-trap') === 'false') {
    issues.push({
      level: 'warning',
      property: 'focus-trap',
      message: 'Modal mdc-dialog usage should normally keep focus-trap enabled.',
    });
  }

  if (isTrue(getProp(props, 'hide-backdrop'))) {
    issues.push({
      level: 'warning',
      property: 'hide-backdrop',
      message: 'Use hide-backdrop only when the surrounding modal treatment still prevents background interaction.',
    });
  }

  return [
    ...issues,
    ...validateCloseButtonAriaLabel(component.tagName, props),
  ];
}

function validateAnnouncementDialogRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
): ValidationIssue[] {
  if (component.name !== 'announcementdialog') {
    return [];
  }

  const issues: ValidationIssue[] = [];

  if (!hasAnyTextProp(props, 'aria-label', 'aria-labelledby')) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'mdc-announcementdialog requires aria-label or aria-labelledby for an accessible name.',
    });
  }

  if (isTrue(getProp(props, 'visible')) && !hasTriggerId(props)) {
    issues.push({
      level: 'warning',
      property: 'triggerID',
      message: 'Visible mdc-announcementdialog usage should provide triggerID so focus returns to the opener.',
    });
  }

  return [
    ...issues,
    ...validateCloseButtonAriaLabel(component.tagName, props),
  ];
}

function validatePopoverRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
): ValidationIssue[] {
  if (component.name !== 'popover') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateRequiredTriggerId(component.tagName, props),
    ...validatePopoverTriggerTokens(component.tagName, props),
    ...validateDelayFormat(component.tagName, props),
    ...validateNonNegativeNumber(component.tagName, props, 'element-index-to-receive-focus'),
  ];

  if (isTrue(getProp(props, 'close-button')) && !hasAnyTextProp(props, 'close-button-aria-label')) {
    issues.push({
      level: 'error',
      property: 'close-button-aria-label',
      message: 'mdc-popover with close-button requires close-button-aria-label.',
    });
  }

  if (isTrue(getProp(props, 'focus-trap')) && !isTrue(getProp(props, 'interactive'))) {
    issues.push({
      level: 'error',
      property: 'interactive',
      message: 'mdc-popover requires interactive when focus-trap is enabled.',
    });
  }

  if (isTrue(getProp(props, 'interactive')) && !hasAnyTextProp(props, 'aria-label', 'aria-labelledby')) {
    issues.push({
      level: 'warning',
      property: 'aria-label',
      message: 'Interactive mdc-popover usage should provide aria-label or aria-labelledby.',
    });
  }

  if (isTrue(getProp(props, 'propagate-event-on-escape')) && !isTrue(getProp(props, 'hide-on-escape'))) {
    issues.push({
      level: 'error',
      property: 'hide-on-escape',
      message: 'mdc-popover propagate-event-on-escape only applies when hide-on-escape is true.',
    });
  }

  return issues;
}

function validateTooltipRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'tooltip') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateRequiredTriggerId(component.tagName, props),
    ...validateDelayFormat(component.tagName, props),
  ];
  const text = children?.replace(/<[^>]+>/g, '').trim() ?? '';

  if (!text) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'mdc-tooltip requires short descriptive text content.',
    });
  }

  if (text.length > 140) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'Keep mdc-tooltip content short; use mdc-toggletip or mdc-popover for longer guidance.',
    });
  }

  if (hasFocusableDescendant(children)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Do not place focusable or interactive content inside mdc-tooltip; use mdc-toggletip or mdc-popover.',
    });
  }

  return issues;
}

function validateToggletipRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'toggletip') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateRequiredTriggerId(component.tagName, props),
    ...validateCloseButtonAriaLabel(component.tagName, props),
  ];

  if (!hasTextContent(children)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'mdc-toggletip requires descriptive text content.',
    });
  }

  return issues;
}

function validateToastRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'toast') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateCloseButtonAriaLabel(component.tagName, props),
  ];
  const hasDetailedBody = hasSlot(children, 'toast-body-detailed') || hasAnyTextProp(props, 'detailed-body');
  const hasShowMore = hasAnyTextProp(props, 'show-more-text');
  const hasShowLess = hasAnyTextProp(props, 'show-less-text');

  if (!hasAnyTextProp(props, 'header-text', 'aria-label')) {
    issues.push({
      level: 'error',
      property: 'header-text',
      message: 'mdc-toast requires header-text or aria-label for an accessible name.',
    });
  }

  if (hasShowMore !== hasShowLess) {
    issues.push({
      level: 'error',
      property: 'show-less-text',
      message: 'mdc-toast show-more-text and show-less-text must be provided together.',
    });
  }

  if (hasDetailedBody && (!hasShowMore || !hasShowLess)) {
    issues.push({
      level: 'error',
      property: 'show-more-text',
      message: 'mdc-toast detailed body content requires both show-more-text and show-less-text.',
    });
  }

  if (!hasLiveRegionSemantics(props)) {
    issues.push({
      level: 'warning',
      property: 'role',
      message: 'mdc-toast should be rendered with role="status", role="alert", or aria-live semantics when announced.',
    });
  }

  return issues;
}

function validateBannerRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'banner') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const variant = String(getProp(props, 'variant') ?? 'custom');

  if (!hasAccessibleName(props, children, 'label', 'aria-label')) {
    issues.push({
      level: 'error',
      property: 'label',
      message: 'mdc-banner requires label text, aria-label, or clear text in a content slot.',
    });
  }

  if (hasAnyTextProp(props, 'secondary-label') && !hasAnyTextProp(props, 'label')) {
    issues.push({
      level: 'warning',
      property: 'secondary-label',
      message: 'mdc-banner secondary-label is ignored unless label is also provided.',
    });
  }

  if (['warning', 'error'].includes(variant) && !hasLiveRegionSemantics(props)) {
    issues.push({
      level: 'warning',
      property: 'role',
      message: 'Warning and error mdc-banner usage should add role="status", role="alert", or aria-live.',
    });
  }

  return issues;
}

function validateStatusMessageRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'statusmessage') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const severity = String(getProp(props, 'severity') ?? 'default');

  if (!hasAccessibleName(props, children, 'message')) {
    issues.push({
      level: 'error',
      property: 'message',
      message: 'mdc-statusmessage requires message or meaningful text content.',
    });
  }

  if (severity !== 'default' && !hasLiveRegionSemantics(props)) {
    issues.push({
      level: 'warning',
      property: 'role',
      message: [
        'Non-default mdc-statusmessage severity should be associated or announced',
        'with role, aria-live, or aria-describedby.',
      ].join(' '),
    });
  }

  return issues;
}

function validateAvatarLikeRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  options: { interactive?: boolean } = {},
): ValidationIssue[] {
  if (!['avatar', 'avatarbutton'].includes(component.name)) {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateNonNegativeNumber(component.tagName, props, 'counter'),
  ];
  const counter = getProp(props, 'counter');
  const counterValue = Number(counter);
  const hasCounter = hasProp(props, 'counter');
  const hasImage = hasAnyTextProp(props, 'src');
  const hasIcon = hasAnyTextProp(props, 'icon-name');
  const hasInitials = hasAnyTextProp(props, 'initials');
  const hasPresence = hasTextValue(getProp(props, 'presence')) && getProp(props, 'presence') !== 'none';

  if (options.interactive && !hasAnyTextProp(props, 'aria-label')) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'mdc-avatarbutton requires aria-label because the avatar is interactive.',
    });
  }

  if (!options.interactive && isFalse(getProp(props, 'aria-hidden')) && !hasAriaReference(props)) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'mdc-avatar with aria-hidden="false" requires aria-label or aria-labelledby.',
    });
  }

  if (hasCounter && Number.isFinite(counterValue) && counterValue > 99) {
    issues.push({
      level: 'warning',
      property: 'counter',
      message: `${component.tagName} counter values above 99 are rendered as 99+.`,
    });
  }

  if (hasImage && (hasIcon || hasInitials || hasCounter)) {
    issues.push({
      level: 'warning',
      property: 'src',
      message: `${component.tagName} renders src before icon-name, initials, or counter fallback content.`,
    });
  } else if (hasIcon && (hasInitials || hasCounter)) {
    issues.push({
      level: 'warning',
      property: 'icon-name',
      message: `${component.tagName} renders icon-name before initials or counter fallback content.`,
    });
  } else if (hasInitials && hasCounter) {
    issues.push({
      level: 'warning',
      property: 'initials',
      message: `${component.tagName} renders initials before counter fallback content.`,
    });
  }

  if (hasPresence && (hasCounter || isTrue(getProp(props, 'is-typing')))) {
    issues.push({
      level: 'warning',
      property: 'presence',
      message: `${component.tagName} hides presence when counter or is-typing is rendered.`,
    });
  }

  return issues;
}

function validateBadgeRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'badge') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateNonNegativeNumber(component.tagName, props, 'counter'),
  ];
  const type = String(getProp(props, 'type') ?? 'dot');
  const counter = getProp(props, 'counter');
  const counterValue = Number(counter);
  const maxCounter = Number(getProp(props, 'max-counter') ?? 99);

  if (type === 'icon' && !hasAnyTextProp(props, 'icon-name')) {
    issues.push({
      level: 'error',
      property: 'icon-name',
      message: 'mdc-badge type="icon" requires icon-name.',
    });
  }

  if (type === 'counter' && !hasProp(props, 'counter')) {
    issues.push({
      level: 'error',
      property: 'counter',
      message: 'mdc-badge type="counter" requires counter.',
    });
  }

  if (type === 'counter' && !hasAriaReference(props)) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'mdc-badge type="counter" requires aria-label or aria-labelledby that explains the count.',
    });
  }

  if (['success', 'warning', 'error'].includes(type) && !hasAriaReference(props)) {
    issues.push({
      level: 'warning',
      property: 'aria-label',
      message: `mdc-badge type="${type}" should expose the status through aria-label, aria-labelledby, or nearby text.`,
    });
  }

  if (type !== 'counter' && hasProp(props, 'counter')) {
    issues.push({
      level: 'warning',
      property: 'counter',
      message: 'mdc-badge counter only affects type="counter" usage.',
    });
  }

  if (
    hasProp(props, 'counter')
    && Number.isFinite(counterValue)
    && Number.isFinite(maxCounter)
    && counterValue > maxCounter
  ) {
    issues.push({
      level: 'warning',
      property: 'counter',
      message: `mdc-badge counter values above max-counter render as ${maxCounter}+.`,
    });
  }

  return issues;
}

function validateChipLabelRequirement(
  tagName: string,
  props: ComponentProps,
  children: string | undefined,
  options: { allowAriaName?: boolean } = {},
): ValidationIssue[] {
  if (
    hasAnyTextProp(props, 'label')
    || hasTextContent(children)
    || (options.allowAriaName && hasAriaReference(props))
  ) {
    return [];
  }

  return [{
    level: 'error',
    property: 'label',
    message: `${tagName} requires label text${options.allowAriaName ? ' or an accessible aria label' : ''}.`,
  }];
}

function validateChipRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'chip') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateChipLabelRequirement(component.tagName, props, children),
    ...validateShortLabel(component.tagName, props),
  ];

  if (hasProp(props, 'active')) {
    issues.push({
      level: 'warning',
      property: 'active',
      message: 'mdc-chip resets active state; use mdc-filterchip for selectable chip usage.',
    });
  }

  if (hasProp(props, 'soft-disabled')) {
    issues.push({
      level: 'warning',
      property: 'soft-disabled',
      message: 'mdc-chip resets soft-disabled state; use disabled when the chip should be unavailable.',
    });
  }

  return issues;
}

function validateFilterChipRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'filterchip') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateChipLabelRequirement(component.tagName, props, children),
    ...validateShortLabel(component.tagName, props),
  ];
  const color = getProp(props, 'color');
  const label = String(getProp(props, 'label') ?? '');

  if (hasTextValue(color) && color !== 'default') {
    issues.push({
      level: 'warning',
      property: 'color',
      message: 'mdc-filterchip only supports the default color; non-default color values have no effect.',
    });
  }

  if (isTrue(getProp(props, 'selected')) && /selected|checked|✓/i.test(label)) {
    issues.push({
      level: 'warning',
      property: 'label',
      message: 'mdc-filterchip exposes selected state with aria-pressed; avoid repeating selected state in label.',
    });
  }

  return issues;
}

function validateAlertChipRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'alertchip') {
    return [];
  }

  return [
    ...validateChipLabelRequirement(component.tagName, props, children, { allowAriaName: true }),
    ...validateShortLabel(component.tagName, props),
  ];
}

function validateStaticChipRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'staticchip') {
    return [];
  }

  return [
    ...validateChipLabelRequirement(component.tagName, props, children),
    ...validateShortLabel(component.tagName, props),
  ];
}

function validatePresenceRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'presence') {
    return [];
  }

  if (isAriaHidden(props) || hasAriaReference(props)) {
    return [];
  }

  return [{
    level: 'warning',
    property: 'aria-label',
    message: 'mdc-presence is visual-only by itself; expose status through a surrounding avatar label or hide it.',
  }];
}

function validateIconRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'icon') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateNameRequirement(component.tagName, props, 'name'),
    ...validatePositiveNumber(component.tagName, props, 'size'),
    ...validateAriaHiddenLabelConflict(component.tagName, props),
  ];

  if (hasProp(props, 'tabindex') && !hasAriaReference(props) && !hasAnyTextProp(props, 'title')) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'Focusable mdc-icon usage requires aria-label, aria-labelledby, or title.',
    });
  }

  if (hasAriaReference(props) && !isAriaHidden(props) && !hasProp(props, 'tabindex')) {
    issues.push({
      level: 'warning',
      property: 'tabindex',
      message: 'Standalone informative mdc-icon usage should set tabindex="0" for keyboard tooltip access.',
    });
  }

  if (hasAriaReference(props) && !isAriaHidden(props) && !hasAnyTextProp(props, 'id')) {
    issues.push({
      level: 'warning',
      property: 'id',
      message: 'Standalone informative mdc-icon usage should provide id so an mdc-tooltip can target it.',
    });
  }

  return issues;
}

function validateIllustrationRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'illustration') {
    return [];
  }

  return [
    ...validateNameRequirement(component.tagName, props, 'name'),
    ...validateAriaHiddenLabelConflict(component.tagName, props),
  ];
}

function validateBrandVisualRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'brandvisual') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateNameRequirement(component.tagName, props, 'name'),
    ...validateAriaHiddenLabelConflict(component.tagName, props),
  ];

  if (!hasAnyTextProp(props, 'alt-text', 'aria-label', 'aria-labelledby') && !isAriaHidden(props)) {
    issues.push({
      level: 'warning',
      property: 'alt-text',
      message: 'mdc-brandvisual should provide alt-text or aria-label unless the brand visual is decorative.',
    });
  }

  return issues;
}

function validateAnimationRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'animation') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateAriaHiddenLabelConflict(component.tagName, props),
  ];
  const loop = getProp(props, 'loop');

  if (!hasAnyTextProp(props, 'name', 'src')) {
    issues.push({
      level: 'error',
      property: 'name',
      message: 'mdc-animation requires name or src so the animation can be loaded.',
    });
  }

  if (loop !== undefined && !isNonNegativeLoopValue(loop)) {
    issues.push({
      level: 'error',
      property: 'loop',
      message: 'mdc-animation loop must be true, false, or a non-negative repeat count.',
    });
  }

  if (hasAriaReference(props) && !isAriaHidden(props) && getProp(props, 'role') !== 'img') {
    issues.push({
      level: 'warning',
      property: 'role',
      message: 'Informative mdc-animation usage should set role="img" with its accessible label.',
    });
  }

  return issues;
}

function validateAriaLevel(tagName: string, props: ComponentProps): ValidationIssue[] {
  const level = getProp(props, 'data-aria-level');
  const numericLevel = Number(level);

  if (level === undefined || (Number.isInteger(numericLevel) && numericLevel >= 1 && numericLevel <= 6)) {
    return [];
  }

  return [{
    level: 'error',
    property: 'data-aria-level',
    message: `${tagName} data-aria-level must be an integer from 1 to 6.`,
  }];
}

function validateAccordionRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
): ValidationIssue[] {
  if (component.name !== 'accordion') {
    return [];
  }

  return [
    ...validateLabelRequirement(component.tagName, props, 'heading-text'),
    ...validateLabelRequirement(component.tagName, props, 'open-button-aria-label'),
    ...validateLabelRequirement(component.tagName, props, 'close-button-aria-label'),
    ...validateAriaLevel(component.tagName, props),
  ];
}

function validateAccordionButtonRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
): ValidationIssue[] {
  if (component.name !== 'accordionbutton') {
    return [];
  }

  return [
    ...validateLabelRequirement(component.tagName, props, 'header-text'),
    ...validateAriaLevel(component.tagName, props),
  ];
}

function validateAccordionGroupRules(
  component: ComponentRegistryEntry,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'accordiongroup') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const childTags = getOpeningTags(children).map(({ tagName }) => tagName);
  const allowedTags = ['mdc-accordion', 'mdc-accordionbutton'];

  if (children && !childTags.some(tagName => allowedTags.includes(tagName))) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-accordiongroup manages only mdc-accordion and mdc-accordionbutton children.',
    });
  }

  if (childTags.some(tagName => tagName.startsWith('mdc-') && !allowedTags.includes(tagName))) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'Unsupported mdc-* children inside mdc-accordiongroup are ignored.',
    });
  }

  return issues;
}

function validateButtonSimpleRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'buttonsimple') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'aria-label'),
    ...validateDisabledState(component.tagName, props),
  ];
  const ariaStateKey = getProp(props, 'aria-state-key');

  if (hasTextContent(children)) {
    issues.splice(0, issues.length, ...issues.filter(issue => issue.property !== 'aria-label'));
  }

  if (hasFocusableDescendant(children)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Do not place focusable descendants inside mdc-buttonsimple.',
    });
  }

  if (
    typeof ariaStateKey === 'string'
    && ariaStateKey.split(',').map(token => token.trim()).some(token => !token.startsWith('aria-'))
  ) {
    issues.push({
      level: 'error',
      property: 'aria-state-key',
      message: 'mdc-buttonsimple aria-state-key values must be comma-separated aria-* attribute names.',
    });
  }

  if (hasProp(props, 'active') && getProp(props, 'role') !== undefined && getProp(props, 'role') !== 'button') {
    issues.push({
      level: 'warning',
      property: 'role',
      message: 'mdc-buttonsimple active state is tuned for role="button"; audit custom roles carefully.',
    });
  }

  return issues;
}

function validateButtonGroupRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'buttongroup') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const buttonBlocks = getTagBlocks(children, 'mdc-button');
  const childTags = getOpeningTags(children).map(({ tagName }) => tagName);

  if (children && buttonBlocks.length === 0) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-buttongroup should contain mdc-button children.',
    });
  }

  if (childTags.some(tagName => tagName.startsWith('mdc-') && tagName !== 'mdc-button')) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-buttongroup applies grouped styling only to mdc-button children.',
    });
  }

  buttonBlocks
    .filter(({ props: buttonProps, contents }) => (
      isIconOnlyButton(buttonProps, contents) && !hasButtonAccessibleName(buttonProps, contents)
    ))
    .forEach(() => {
      issues.push({
        level: 'error',
        property: 'aria-label',
        message: 'Icon-only mdc-button children inside mdc-buttongroup need aria-label.',
      });
    });

  if (
    isTrue(getProp(props, 'compact'))
    && getProp(props, 'size') !== undefined
    && Number(getProp(props, 'size')) !== 24
  ) {
    issues.push({
      level: 'warning',
      property: 'size',
      message: 'mdc-buttongroup compact mode forces child buttons to size 24.',
    });
  }

  return issues;
}

function validateLinkRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (!['link', 'linksimple'].includes(component.name)) {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateTargetBlankLink(component.tagName, props, children),
  ];

  if (!hasTextValue(getProp(props, 'href')) && !isTrue(getProp(props, 'disabled'))) {
    issues.push({
      level: 'warning',
      property: 'href',
      message: `${component.tagName} without href renders as a placeholder, not a navigable link.`,
    });
  }

  if (!hasAccessibleName(props, children, 'data-aria-label')) {
    issues.push({
      level: 'error',
      property: 'data-aria-label',
      message: `${component.tagName} requires link text or data-aria-label for an accessible name.`,
    });
  }

  return issues;
}

function validateCalendarRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'calendar') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateIsoDateProps(component.tagName, props, 'value', 'end-value', 'min', 'max'),
    ...validateOrderedValues(component.tagName, props, 'min', 'max', {
      format: 'date',
      message: 'min cannot be later than max.',
    }),
    ...validateOrderedValues(component.tagName, props, 'value', 'end-value', {
      format: 'date',
      message: 'value cannot be later than end-value.',
    }),
  ];

  ['locale-today-label', 'locale-prev-month-label', 'locale-next-month-label'].forEach(propertyName => {
    if (!hasAnyTextProp(props, propertyName)) {
      issues.push({
        level: 'error',
        property: propertyName,
        message: `mdc-calendar requires ${propertyName} for localized button labels.`,
      });
    }
  });

  if (['range', 'week'].includes(String(getProp(props, 'selection-mode'))) && !hasAnyTextProp(props, 'end-value')) {
    issues.push({
      level: 'warning',
      property: 'end-value',
      message: 'mdc-calendar range and week selections should provide end-value when a range is already selected.',
    });
  }

  return issues;
}

function validateDatePickerRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'datepicker') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label'),
    ...validateIsoDateProps(component.tagName, props, 'value', 'end-value', 'min', 'max'),
    ...validateOrderedValues(component.tagName, props, 'min', 'max', {
      format: 'date',
      message: 'min cannot be later than max.',
    }),
    ...validateOrderedValues(component.tagName, props, 'value', 'end-value', {
      format: 'date',
      message: 'value cannot be later than end-value.',
    }),
  ];
  const requiredLabels = [
    'locale-calendar-label',
    'locale-today-label',
    'locale-prev-month-label',
    'locale-next-month-label',
  ];
  const inputVariantLabels = [
    'locale-month-label',
    'locale-day-label',
    'locale-year-label',
    'locale-spinbutton-description',
  ];

  [...requiredLabels, ...(String(getProp(props, 'variant') ?? 'input') === 'input' ? inputVariantLabels : [])]
    .forEach(propertyName => {
      if (!hasAnyTextProp(props, propertyName)) {
        issues.push({
          level: 'error',
          property: propertyName,
          message: `mdc-datepicker requires ${propertyName} for accessible localized controls.`,
        });
      }
    });

  if (isTrue(getProp(props, 'required')) && !hasAnyTextProp(props, 'validation-message')) {
    issues.push({
      level: 'warning',
      property: 'validation-message',
      message: 'mdc-datepicker required usage should include validation-message.',
    });
  }

  return issues;
}

function validateTimePickerRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'timepicker') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label'),
    ...validateTimeProps(component.tagName, props, 'value', 'min', 'max'),
    ...validateOrderedValues(component.tagName, props, 'min', 'max', {
      format: 'time',
      message: 'min cannot be later than max.',
    }),
    ...validateRangeValue(component.tagName, props, 'interval', 1, 60),
  ];
  const commonLabels = [
    'locale-hours-label',
    'locale-minutes-label',
    'locale-hours-placeholder',
    'locale-minutes-placeholder',
    'locale-show-time-picker-label',
    'locale-time-options-label',
    'locale-spinbutton-description',
  ];
  const periodLabels = [
    'locale-period-label',
    'locale-period-placeholder',
    'locale-am-label',
    'locale-pm-label',
  ];

  [...commonLabels, ...(getProp(props, 'time-format') === '24h' ? [] : periodLabels)].forEach(propertyName => {
    if (!hasAnyTextProp(props, propertyName)) {
      issues.push({
        level: 'error',
        property: propertyName,
        message: `mdc-timepicker requires ${propertyName} for accessible localized controls.`,
      });
    }
  });

  if (isTrue(getProp(props, 'required')) && !hasAnyTextProp(props, 'validation-message')) {
    issues.push({
      level: 'warning',
      property: 'validation-message',
      message: 'mdc-timepicker required usage should include validation-message.',
    });
  }

  return issues;
}

function validateSelectRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'select') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label'),
  ];
  const hasSelectListBox = hasTag(children, 'mdc-selectlistbox');
  const hasOptions = hasTag(children, 'mdc-option') || hasTag(children, 'mdc-optgroup');

  if (children && hasOptions && !hasSelectListBox) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'mdc-select options must be wrapped in an mdc-selectlistbox child.',
    });
  }

  if (children && !hasOptions) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-select should contain mdc-option children inside mdc-selectlistbox.',
    });
  }

  if (hasTag(children, 'mdc-tooltip')) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Place per-option mdc-tooltip siblings outside mdc-select and link them with triggerid.',
    });
  }

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: 'mdc-select with toggletip-text requires info-icon-aria-label.',
    });
  }

  if (isTrue(getProp(props, 'required')) && !hasAnyTextProp(props, 'validation-message')) {
    issues.push({
      level: 'warning',
      property: 'validation-message',
      message: 'mdc-select required usage should include validation-message.',
    });
  }

  return [
    ...issues,
    ...validateOptionChildrenValues(component.tagName, children),
    ...validateOptionChildrenLabels(component.tagName, children),
    ...validateSingleSelection(children),
  ];
}

function validatePasswordRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'password') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label'),
    ...validateLabelRequirement(component.tagName, props, 'show-button-aria-label'),
    ...validateLabelRequirement(component.tagName, props, 'hide-button-aria-label'),
    ...validateLengthPair(component.tagName, props),
  ];

  if (isTrue(getProp(props, 'required')) && !hasAnyTextProp(props, 'name')) {
    issues.push({
      level: 'warning',
      property: 'name',
      message: 'mdc-password required fields should provide name for form submission.',
    });
  }

  if (
    hasAnyTextProp(props, 'show-button-aria-label', 'hide-button-aria-label')
    && getProp(props, 'show-button-aria-label') === getProp(props, 'hide-button-aria-label')
  ) {
    issues.push({
      level: 'warning',
      property: 'hide-button-aria-label',
      message: 'mdc-password show and hide button labels should describe the two different states.',
    });
  }

  return issues;
}

function validateSearchFieldBaseRules(
  tagName: string,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(tagName, props, 'label', 'data-aria-label'),
    ...validateLabelRequirement(tagName, props, 'clear-aria-label'),
  ];
  const filterTags = getSlottedTags(children, 'filters');
  const invalidFilterTags = filterTags
    .map(({ tagName: childTagName }) => childTagName)
    .filter(childTagName => !['mdc-chip', 'mdc-inputchip', 'mdc-alertchip'].includes(childTagName));

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: `${tagName} with toggletip-text requires info-icon-aria-label.`,
    });
  }

  if (hasAnyTag(children, ['mdc-popover', 'mdc-listbox', 'mdc-selectlistbox'])) {
    issues.push({
      level: 'error',
      property: 'children',
      message: `${tagName} should not be combined with popover or listbox children; use mdc-searchpopover instead.`,
    });
  }

  if (invalidFilterTags.length > 0) {
    issues.push({
      level: 'error',
      property: 'children',
      message: `${tagName} filters slot only supports mdc-chip, mdc-inputchip, and mdc-alertchip.`,
    });
  }

  if (getProp(props, 'control-type') === 'controlled') {
    issues.push({
      level: 'warning',
      property: 'control-type',
      message: `${tagName} controlled usage must remove filter chips in response to chipRemove events.`,
    });
  }

  return issues;
}

function validateSearchFieldRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'searchfield') {
    return [];
  }

  return validateSearchFieldBaseRules(component.tagName, props, children);
}

function validateSearchPopoverRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'searchpopover') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateSearchFieldBaseRules(component.tagName, props, children),
    ...validateLabelRequirement(component.tagName, props, 'popover-aria-label'),
  ];

  if (isTrue(getProp(props, 'display-popover')) && !hasTextContent(children) && getOpeningTags(children).length === 0) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-searchpopover with display-popover should render result content in the default slot.',
    });
  }

  return issues;
}

function validateSliderRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'slider') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validatePositiveNumber(component.tagName, props, 'step'),
    ...validateOrderedValues(component.tagName, props, 'min', 'max', {
      format: 'number',
      message: 'min cannot be greater than max.',
    }),
  ];
  const min = Number(getProp(props, 'min') ?? 0);
  const max = Number(getProp(props, 'max') ?? 100);

  if (isTrue(getProp(props, 'range'))) {
    if (!hasAnyTextProp(props, 'start-aria-label') || !hasAnyTextProp(props, 'end-aria-label')) {
      issues.push({
        level: 'error',
        property: 'start-aria-label',
        message: 'mdc-slider range usage requires start-aria-label and end-aria-label.',
      });
    }

    issues.push(
      ...validateOrderedValues(component.tagName, props, 'value-start', 'value-end', {
        format: 'number',
        message: 'value-start cannot be greater than value-end.',
      }),
      ...validateRangeValue(component.tagName, props, 'value-start', min, max),
      ...validateRangeValue(component.tagName, props, 'value-end', min, max),
    );
  } else {
    if (!hasAnyTextProp(props, 'label', 'data-aria-label')) {
      issues.push({
        level: 'error',
        property: 'label',
        message: 'mdc-slider requires label or data-aria-label for the thumb accessible name.',
      });
    }

    issues.push(...validateRangeValue(component.tagName, props, 'value', min, max));
  }

  return issues;
}

function validateProgressRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (!['progressbar', 'progressspinner'].includes(component.name)) {
    return [];
  }

  return [
    ...validateDataAriaLabel(component.tagName, props),
    ...validateRangeValue(component.tagName, props, 'value', 0, 100),
  ];
}

function validateSpinnerRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'spinner') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateAriaHiddenLabelConflict(component.tagName, props),
  ];

  if (getProp(props, 'variant') === 'button' && getProp(props, 'size') !== 'small') {
    issues.push({
      level: 'warning',
      property: 'size',
      message: 'mdc-spinner variant="button" is intended to use size="small" inside mdc-button.',
    });
  }

  return issues;
}

function validateDecorativeIndicatorRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (!['bullet', 'marker', 'skeleton'].includes(component.name)) {
    return [];
  }

  if (!hasAriaReference(props) && !hasAnyTextProp(props, 'role')) {
    return [];
  }

  return [{
    level: 'warning',
    property: 'aria-label',
    message: `${component.tagName} is decorative; convey meaning with surrounding text or a semantic component.`,
  }];
}

function validateCardControlRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (!['cardbutton', 'cardcheckbox', 'cardradio'].includes(component.name)) {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateDisabledState(component.tagName, props),
  ];

  if (!hasAnyTextProp(props, 'card-title') && !hasSlot(children, 'title')) {
    issues.push({
      level: 'error',
      property: 'card-title',
      message: `${component.tagName} requires card-title or a title slot for an accessible name.`,
    });
  }

  if (hasTextValue(getProp(props, 'image-src')) && !hasProp(props, 'image-alt')) {
    issues.push({
      level: 'error',
      property: 'image-alt',
      message: `${component.tagName} with image-src requires image-alt.`,
    });
  }

  if (hasFocusableDescendant(children)) {
    issues.push({
      level: 'error',
      property: 'children',
      message: `Do not place focusable descendants inside ${component.tagName}.`,
    });
  }

  if (component.name === 'cardradio' && !hasAnyTextProp(props, 'name')) {
    issues.push({
      level: 'error',
      property: 'name',
      message: 'mdc-cardradio requires name so related card radios form one selection group.',
    });
  }

  if (component.name === 'cardbutton' && hasProp(props, 'active')) {
    issues.push({
      level: 'warning',
      property: 'active',
      message: 'mdc-cardbutton resets active state; it represents an action, not a toggle.',
    });
  }

  return issues;
}

function validateStaticControlRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (!['staticcheckbox', 'staticradio', 'statictoggle'].includes(component.name)) {
    return [];
  }

  const issues: ValidationIssue[] = [];

  if (!hasAccessibleName(props, children, 'label', 'aria-label')) {
    issues.push({
      level: 'warning',
      property: 'label',
      message: `${component.tagName} is static; include text that explains the visual state when it matters.`,
    });
  }

  if (
    component.name === 'staticcheckbox'
    && isTrue(getProp(props, 'checked'))
    && isTrue(getProp(props, 'indeterminate'))
  ) {
    issues.push({
      level: 'warning',
      property: 'indeterminate',
      message: 'mdc-staticcheckbox renders indeterminate before checked when both states are set.',
    });
  }

  return issues;
}

function validateStepperRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'stepper') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const childTags = getOpeningTags(children).map(({ tagName }) => tagName);
  const stepItems = getTagProps(children, 'mdc-stepperitem');
  const currentStatuses = stepItems.filter(stepProps => (
    ['current', 'error-current'].includes(String(getProp(stepProps, 'status') ?? 'not-started'))
  ));
  const ariaCurrentItems = stepItems.filter(stepProps => getProp(stepProps, 'aria-current') === 'step');

  if (!hasAriaReference(props)) {
    issues.push({
      level: 'warning',
      property: 'aria-label',
      message: 'mdc-stepper should provide aria-label or aria-labelledby for the step list.',
    });
  }

  if (children && stepItems.length === 0) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'mdc-stepper requires mdc-stepperitem children.',
    });
  }

  if (
    childTags.some(tagName => (
      tagName.startsWith('mdc-')
      && !['mdc-stepperitem', 'mdc-stepperconnector'].includes(tagName)
    ))
  ) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-stepper should contain only mdc-stepperitem and mdc-stepperconnector children.',
    });
  }

  if (currentStatuses.length > 1 || ariaCurrentItems.length > 1) {
    issues.push({
      level: 'error',
      property: 'aria-current',
      message: 'mdc-stepper should have only one current mdc-stepperitem.',
    });
  }

  if (stepItems.some(stepProps => !hasAnyTextProp(stepProps, 'aria-label'))) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'Every mdc-stepperitem inside mdc-stepper requires aria-label with position, label, and status.',
    });
  }

  return issues;
}

function validateStepperItemRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'stepperitem') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'aria-label'),
    ...validatePositiveNumber(component.tagName, props, 'step-number'),
  ];
  const status = String(getProp(props, 'status') ?? 'not-started');
  const isCurrent = ['current', 'error-current'].includes(status);

  if (getProp(props, 'aria-current') === 'step' && !isCurrent) {
    issues.push({
      level: 'error',
      property: 'aria-current',
      message: 'mdc-stepperitem aria-current="step" is only valid for current or error-current status.',
    });
  }

  if (isCurrent && getProp(props, 'aria-current') !== 'step') {
    issues.push({
      level: 'warning',
      property: 'aria-current',
      message: 'Current mdc-stepperitem usage should set aria-current="step".',
    });
  }

  if (['not-started', 'error-incomplete'].includes(status) && !hasAnyTextProp(props, 'step-number')) {
    issues.push({
      level: 'warning',
      property: 'step-number',
      message: 'mdc-stepperitem not-started and error-incomplete states should provide step-number.',
    });
  }

  return issues;
}

function validateStepperConnectorRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'stepperconnector') {
    return [];
  }

  if (!hasAriaReference(props) && !hasAnyTextProp(props, 'role')) {
    return [];
  }

  return [{
    level: 'warning',
    property: 'aria-label',
    message: 'mdc-stepperconnector is decorative; convey progress through surrounding stepper items.',
  }];
}

function validateMenuPopoverRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'menupopover') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateRequiredTriggerId(component.tagName, props),
    ...validatePopoverTriggerTokens(component.tagName, props),
  ];

  if (children && !hasAnyTag(children, [...MENU_ITEM_TAGS, 'mdc-menusection'])) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-menupopover should contain menu items or mdc-menusection children.',
    });
  }

  if (hasAnyTag(children, OPTION_CONTAINER_TAGS) || hasTag(children, 'mdc-option')) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Selection list components belong in mdc-listbox/select, not inside mdc-menupopover.',
    });
  }

  return [
    ...issues,
    ...validateMenuChildrenLabels(children),
    ...validateMenuItemSubmenus(children),
    ...validateMenuRadioGroups(children),
  ];
}

function validateMenuSectionRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'menusection') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'header-text', 'aria-label'),
  ];

  if (children && !hasAnyTag(children, MENU_ITEM_TAGS)) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-menusection should contain mdc-menuitem, mdc-menuitemcheckbox, or mdc-menuitemradio children.',
    });
  }

  if (hasAnyTag(children, OPTION_CONTAINER_TAGS) || hasTag(children, 'mdc-option')) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'mdc-menusection should contain menu items, not selection-list children.',
    });
  }

  if (hasProp(props, 'hide-header-text') && !hasAnyTextProp(props, 'header-text', 'aria-label')) {
    issues.push({
      level: 'warning',
      property: 'hide-header-text',
      message: 'hide-header-text should only be used when the section still has header-text or aria-label.',
    });
  }

  return issues;
}

function validateNavMenuItemRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'navmenuitem') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateLabelRequirement(component.tagName, props, 'label', 'aria-label'),
    ...validateNonNegativeNumber(component.tagName, props, 'counter'),
    ...validateDisabledState(component.tagName, props),
  ];
  const badgeType = getProp(props, 'badge-type');
  const counter = Number(getProp(props, 'counter'));
  const maxCounter = Number(getProp(props, 'max-counter') ?? 99);

  if (!hasAnyTextProp(props, 'nav-id')) {
    issues.push({
      level: 'error',
      property: 'nav-id',
      message: 'mdc-navmenuitem requires a unique nav-id for sidenavigation active-state coordination.',
    });
  }

  if (badgeType === 'counter' && !hasProp(props, 'counter')) {
    issues.push({
      level: 'error',
      property: 'counter',
      message: 'mdc-navmenuitem badge-type="counter" requires counter.',
    });
  }

  if (
    hasProp(props, 'counter')
    && Number.isFinite(counter)
    && Number.isFinite(maxCounter)
    && counter > maxCounter
  ) {
    issues.push({
      level: 'warning',
      property: 'counter',
      message: `mdc-navmenuitem counter values above max-counter render as ${maxCounter}+.`,
    });
  }

  if (isTrue(getProp(props, 'active')) && isTrue(getProp(props, 'cannot-activate'))) {
    issues.push({
      level: 'warning',
      property: 'cannot-activate',
      message: 'mdc-navmenuitem cannot-activate suppresses automatic active-state updates.',
    });
  }

  if (
    isFalse(getProp(props, 'show-label'))
    && !hasAnyTextProp(props, 'aria-label', 'tooltip-text')
  ) {
    issues.push({
      level: 'warning',
      property: 'tooltip-text',
      message: 'Collapsed mdc-navmenuitem usage should provide aria-label or tooltip-text.',
    });
  }

  return issues;
}

function validateFormFieldGroupRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'formfieldgroup') {
    return [];
  }

  const issues: ValidationIssue[] = validateLabelRequirement(component.tagName, props, 'label', 'data-aria-label');

  if (children && !hasAnyTag(children, ['mdc-checkbox', 'mdc-toggle'])) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-formfieldgroup is intended for checkbox or toggle children.',
    });
  }

  if (hasTag(children, 'mdc-radio')) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'Use mdc-radiogroup for radio options instead of mdc-formfieldgroup.',
    });
  }

  if (hasTextValue(getProp(props, 'toggletip-text')) && !hasAnyTextProp(props, 'info-icon-aria-label')) {
    issues.push({
      level: 'error',
      property: 'info-icon-aria-label',
      message: 'mdc-formfieldgroup with toggletip-text requires info-icon-aria-label.',
    });
  }

  if (isTrue(getProp(props, 'required')) && !hasAnyTextProp(props, 'help-text', 'validation-message')) {
    issues.push({
      level: 'warning',
      property: 'help-text',
      message: 'mdc-formfieldgroup required usage should explain the group-level requirement.',
    });
  }

  return issues;
}

function validateFocusTrapRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'focustrap') {
    return [];
  }

  if (isTrue(getProp(props, 'trap-disabled')) || hasFocusableDescendant(children)) {
    return [];
  }

  return [{
    level: 'error',
    property: 'children',
    message: 'mdc-focustrap requires at least one focusable descendant when trapping is enabled.',
  }];
}

function validateAppHeaderRules(
  component: ComponentRegistryEntry,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'appheader') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const avatarButtons = getTagProps(children, 'mdc-avatarbutton');
  const searchFields = getTagProps(children, 'mdc-searchfield');

  if (avatarButtons.some(avatarProps => !hasAnyTextProp(avatarProps, 'aria-label'))) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'mdc-avatarbutton controls slotted in mdc-appheader require aria-label.',
    });
  }

  if (searchFields.some(searchProps => !hasAnyTextProp(searchProps, 'label', 'data-aria-label'))) {
    issues.push({
      level: 'error',
      property: 'label',
      message: 'mdc-searchfield controls slotted in mdc-appheader require label or data-aria-label.',
    });
  }

  return issues;
}

function validateCoachmarkRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'coachmark') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateRequiredTriggerId(component.tagName, props),
    ...validatePopoverTriggerTokens(component.tagName, props),
    ...validateCloseButtonAriaLabel(component.tagName, props),
  ];

  if (!hasAriaReference(props) && !hasAnyTextProp(props, 'header-text')) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'mdc-coachmark requires aria-label, aria-labelledby, or header-text for its dialog name.',
    });
  }

  return issues;
}

function validateProviderRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (component.name === 'iconprovider') {
    issues.push(...validatePositiveNumber(component.tagName, props, 'size'));

    if (getProp(props, 'icon-set') === 'custom-icons' && !hasAnyTextProp(props, 'url', 'base-url', 'resolver')) {
      issues.push({
        level: 'warning',
        property: 'icon-set',
        message: 'custom-icons provider usage should configure a public icon URL or resolver.',
      });
    }
  }

  if (
    component.name === 'illustrationprovider'
    && getProp(props, 'illustration-set') === 'custom-illustrations'
    && !hasAnyTextProp(props, 'url', 'base-url', 'resolver')
  ) {
    issues.push({
      level: 'warning',
      property: 'illustration-set',
      message: 'custom-illustrations provider usage should configure a public illustration URL or resolver.',
    });
  }

  if (component.name === 'screenreaderannouncer') {
    issues.push(
      ...validateNonNegativeNumber(component.tagName, props, 'delay'),
      ...validatePositiveNumber(component.tagName, props, 'timeout'),
    );

    if (!hasTextContent(children) && !hasAnyTextProp(props, 'message')) {
      issues.push({
        level: 'warning',
        property: 'children',
        message: 'mdc-screenreaderannouncer should receive message text to announce.',
      });
    }
  }

  if (component.name === 'spatialnavigationprovider' && children && !hasFocusableDescendant(children)) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-spatialnavigationprovider is useful only around focusable spatial-navigation targets.',
    });
  }

  if (component.name === 'virtualizedlist') {
    issues.push(
      ...validateNonNegativeNumber(component.tagName, props, 'count'),
      ...validateNonNegativeNumber(component.tagName, props, 'is-at-bottom-threshold'),
    );
  }

  return issues;
}

function validateTextRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'text') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const tagName = String(getProp(props, 'tagname') ?? 'p');
  const type = String(getProp(props, 'type') ?? 'body-midsize-medium');

  if (!hasTextContent(children)) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-text should contain text content.',
    });
  }

  if (tagName.startsWith('h') && !type.startsWith('heading') && !type.startsWith('headline')) {
    issues.push({
      level: 'warning',
      property: 'type',
      message: 'Heading tagname usage should usually pair with a heading or headline text type.',
    });
  }

  if ((type.startsWith('heading') || type.startsWith('headline')) && ['span', 'div'].includes(tagName)) {
    issues.push({
      level: 'warning',
      property: 'tagname',
      message: 'Heading-style mdc-text should use a semantic heading tag when it introduces a section.',
    });
  }

  return issues;
}

function validateTypewriterRules(component: ComponentRegistryEntry, props: ComponentProps): ValidationIssue[] {
  if (component.name !== 'typewriter') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateNonNegativeNumber(component.tagName, props, 'max-queue-size'),
  ];
  const speed = getProp(props, 'speed');
  const numericSpeed = Number(speed);

  if (
    speed !== undefined
    && !TYPEWRITER_SPEED_VALUES.includes(String(speed))
    && (!Number.isFinite(numericSpeed) || numericSpeed < 10)
  ) {
    issues.push({
      level: 'error',
      property: 'speed',
      message: 'mdc-typewriter speed must be a preset or a numeric value of at least 10ms.',
    });
  }

  return issues;
}

function validateCardRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'card') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const iconButtons = getSlottedTagBlocks(children, 'icon-button', 'mdc-button');
  const namedFooterSlots = [
    'footer-link',
    'footer-button-primary',
    'footer-button-secondary',
  ];

  if (!hasAnyTextProp(props, 'card-title') && !hasSlot(children, 'title')) {
    issues.push({
      level: 'warning',
      property: 'card-title',
      message: 'mdc-card should provide card-title or a title slot so the card is easy to scan.',
    });
  }

  if (hasTextValue(getProp(props, 'image-src')) && !hasProp(props, 'image-alt')) {
    issues.push({
      level: 'error',
      property: 'image-alt',
      message: 'mdc-card with image-src requires image-alt; use image-alt="" only for decorative images.',
    });
  }

  if (iconButtons.length > 3) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-card supports at most three icon-button slot actions before the header becomes crowded.',
    });
  }

  iconButtons
    .filter(({ props: buttonProps, contents }) => (
      isIconOnlyButton(buttonProps, contents) && !hasButtonAccessibleName(buttonProps, contents)
    ))
    .forEach(() => {
      issues.push({
        level: 'error',
        property: 'aria-label',
        message: 'Icon-only mdc-button elements in the mdc-card icon-button slot need aria-label.',
      });
    });

  if (hasSlot(children, 'footer') && namedFooterSlots.some(slotName => hasSlot(children, slotName))) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'Avoid mixing the generic mdc-card footer slot with footer-link or footer-button slots.',
    });
  }

  return issues;
}

function validateDividerRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'divider') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const childTags = getOpeningTags(children).map(({ tagName }) => tagName);
  const childTagCount = childTags.length;
  const hasTextDivider = childTags.includes('mdc-text');
  const buttonBlocks = getTagBlocks(children, 'mdc-button');

  if (childTagCount > 1) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-divider infers text/grabber mode from exactly one slotted child; extra children are ignored.',
    });
  }

  if (childTagCount === 1 && !['mdc-text', 'mdc-button'].includes(childTags[0])) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-divider only recognizes one slotted mdc-text or mdc-button child.',
    });
  }

  if (getProp(props, 'orientation') === 'vertical' && hasTextDivider) {
    issues.push({
      level: 'error',
      property: 'orientation',
      message: 'Vertical mdc-divider does not support a text divider child; use horizontal orientation.',
    });
  }

  buttonBlocks
    .filter(({ props: buttonProps, contents }) => !hasButtonAccessibleName(buttonProps, contents))
    .forEach(() => {
      issues.push({
        level: 'error',
        property: 'aria-label',
        message: 'Grabber-button mdc-divider usage requires aria-label on the slotted mdc-button.',
      });
    });

  return issues;
}

function validateListRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'list') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateNonNegativeNumber(component.tagName, props, 'initial-focus'),
  ];
  const listItems = getTagProps(children, 'mdc-listitem');
  const listHeaders = getTagProps(children, 'mdc-listheader');
  const initialFocus = getProp(props, 'initial-focus');

  if (children && listItems.length === 0) {
    issues.push({
      level: 'warning',
      property: 'children',
      message: 'mdc-list should contain mdc-listitem children in the default slot.',
    });
  }

  if (hasAnyTag(children, ['mdc-option', 'mdc-listbox', ...MENU_ITEM_TAGS])) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Use mdc-listitem inside mdc-list; options and menu items belong in listbox/menu components.',
    });
  }

  if (listHeaders.some(headerProps => getProp(headerProps, 'slot') !== 'list-header')) {
    issues.push({
      level: 'error',
      property: 'slot',
      message: 'mdc-listheader must use slot="list-header" when placed inside mdc-list.',
    });
  }

  if (
    listItems.length > 0
    && initialFocus !== undefined
    && Number(initialFocus) >= listItems.length
  ) {
    issues.push({
      level: 'warning',
      property: 'initial-focus',
      message: 'mdc-list initial-focus is out of range for the provided mdc-listitem children.',
    });
  }

  return issues;
}

function validateListItemRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'listitem') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateDisabledState(component.tagName, props),
    ...validateNonNegativeNumber(component.tagName, props, 'data-index'),
  ];

  if (
    !hasAnyTextProp(props, 'label', 'aria-label')
    && !hasSlot(children, 'leading-text-primary-label')
    && !hasTextContent(children)
  ) {
    issues.push({
      level: 'error',
      property: 'label',
      message: 'mdc-listitem requires label, aria-label, or leading-text-primary-label slot content.',
    });
  }

  if (isTrue(getProp(props, 'active')) && !hasAnyTextProp(props, 'aria-current', 'aria-selected')) {
    issues.push({
      level: 'warning',
      property: 'active',
      message: 'mdc-listitem active is visual-only; add aria-current/aria-selected in the surrounding pattern.',
    });
  }

  if (hasAnyTextProp(props, 'secondary-label', 'tertiary-label') && !hasAnyTextProp(props, 'label')) {
    issues.push({
      level: 'warning',
      property: 'label',
      message: 'mdc-listitem secondary/tertiary labels should be paired with a primary label.',
    });
  }

  return issues;
}

function validateListHeaderRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'listheader') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const buttonBlocks = getTagBlocks(children, 'mdc-button');

  if (!hasAnyTextProp(props, 'header-text')) {
    issues.push({
      level: hasTextContent(children) ? 'warning' : 'error',
      property: 'header-text',
      message: 'mdc-listheader should use header-text instead of plain slotted text.',
    });
  }

  if (isTrue(getProp(props, 'disabled')) && hasFocusableDescendant(children)) {
    issues.push({
      level: 'warning',
      property: 'disabled',
      message: 'mdc-listheader disabled does not disable slotted actions; disable those controls explicitly.',
    });
  }

  buttonBlocks
    .filter(({ props: buttonProps, contents }) => (
      isIconOnlyButton(buttonProps, contents) && !hasButtonAccessibleName(buttonProps, contents)
    ))
    .forEach(() => {
      issues.push({
        level: 'error',
        property: 'aria-label',
        message: 'Icon-only actions slotted in mdc-listheader need aria-label.',
      });
    });

  return issues;
}

function validateSideNavigationRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'sidenavigation') {
    return [];
  }

  const issues: ValidationIssue[] = [];
  const variant = String(getProp(props, 'variant') ?? 'flexible');
  const menubarMissingLabels = getTagProps(children, 'mdc-menubar')
    .filter(menubarProps => !hasAnyTextProp(menubarProps, 'aria-label', 'data-aria-label')).length;
  const navItemsMissingLabels = getTagProps(children, 'mdc-navmenuitem')
    .filter(navItemProps => !hasAnyTextProp(navItemProps, 'aria-label', 'label')).length;

  if (['flexible', 'flexible-on-hover'].includes(variant) && !hasAnyTextProp(props, 'grabber-btn-aria-label')) {
    issues.push({
      level: 'error',
      property: 'grabber-btn-aria-label',
      message: 'mdc-sidenavigation flexible variants require grabber-btn-aria-label.',
    });
  }

  if (variant !== 'hidden' && !hasAnyTextProp(props, 'aria-label')) {
    issues.push({
      level: 'warning',
      property: 'aria-label',
      message: 'Add aria-label to mdc-sidenavigation when the page has more than one navigation landmark.',
    });
  }

  if (menubarMissingLabels > 0) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'Every mdc-menubar inside mdc-sidenavigation needs aria-label or data-aria-label.',
    });
  }

  if (navItemsMissingLabels > 0) {
    issues.push({
      level: 'error',
      property: 'aria-label',
      message: 'Every mdc-navmenuitem inside mdc-sidenavigation needs aria-label or label.',
    });
  }

  if (hasSlot(children, 'brand-logo') && !hasAnyTextProp(props, 'footer-text')) {
    issues.push({
      level: 'warning',
      property: 'footer-text',
      message: 'mdc-sidenavigation brand-logo slot is not rendered unless footer-text is provided.',
    });
  }

  return issues;
}

function validateTabRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'tab') {
    return [];
  }

  const issues: ValidationIssue[] = [
    ...validateDisabledState(component.tagName, props),
  ];
  const postfixBadges = getSlottedTags(children, 'postfix', ['mdc-badge']);
  const postfixChips = getSlottedTags(children, 'postfix', ['mdc-chip', 'mdc-staticchip', 'mdc-alertchip']);

  if (!hasAnyTextProp(props, 'tab-id')) {
    issues.push({
      level: 'error',
      property: 'tab-id',
      message: 'mdc-tab requires tab-id so the parent tablist can track selection.',
    });
  }

  if (!hasAccessibleName(props, children, 'text', 'aria-label')) {
    issues.push({
      level: 'error',
      property: 'text',
      message: 'mdc-tab requires text or aria-label for an accessible name.',
    });
  }

  if (!hasAnyTextProp(props, 'aria-controls')) {
    issues.push({
      level: 'warning',
      property: 'aria-controls',
      message: 'mdc-tab should set aria-controls to the id of its associated tabpanel.',
    });
  }

  if (postfixBadges.length > 0 && postfixChips.length > 0) {
    issues.push({
      level: 'error',
      property: 'children',
      message: 'Do not use both a badge and a chip in the mdc-tab postfix slot.',
    });
  }

  return issues;
}

function validateTabCollectionRules(
  tagName: string,
  props: ComponentProps,
  children: string | undefined,
  options: { vertical?: boolean; labelLevel: ValidationIssue['level'] },
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const tabProps = getTagProps(children, 'mdc-tab');
  const tabBlocks = getTagBlocks(children, 'mdc-tab');
  const tabIds = tabProps
    .map(tabProp => getProp(tabProp, 'tab-id'))
    .filter(hasTextValue)
    .map(String);
  const duplicateTabIds = uniqueStrings(tabIds.filter((tabId, index) => tabIds.indexOf(tabId) !== index));
  const activeTabs = tabProps.filter(tabProp => isTrue(getProp(tabProp, 'active')));
  const activeTabId = getProp(props, 'active-tab-id');
  const initialFocus = getProp(props, 'initial-focus');

  if (!hasAnyTextProp(props, 'data-aria-label', 'aria-label')) {
    issues.push({
      level: options.labelLevel,
      property: 'data-aria-label',
      message: `${tagName} should provide data-aria-label so the tab group has an accessible name.`,
    });
  }

  if (children && tabProps.length === 0) {
    issues.push({
      level: 'error',
      property: 'children',
      message: `${tagName} requires mdc-tab children.`,
    });
  }

  if (hasAnyTag(children, ['mdc-listitem', 'mdc-option', ...MENU_ITEM_TAGS])) {
    issues.push({
      level: 'error',
      property: 'children',
      message: `${tagName} should contain mdc-tab children, not list, option, or menu item children.`,
    });
  }

  if (tabProps.some(tabProp => !hasAnyTextProp(tabProp, 'tab-id'))) {
    issues.push({
      level: 'error',
      property: 'tab-id',
      message: `Every mdc-tab inside ${tagName} requires a unique tab-id.`,
    });
  }

  if (duplicateTabIds.length > 0) {
    issues.push({
      level: 'error',
      property: 'tab-id',
      message: `${tagName} contains duplicate mdc-tab tab-id values: ${duplicateTabIds.join(', ')}.`,
    });
  }

  if (tabProps.some(tabProp => !hasAnyTextProp(tabProp, 'aria-controls'))) {
    issues.push({
      level: 'warning',
      property: 'aria-controls',
      message: `Every mdc-tab inside ${tagName} should point to its tabpanel with aria-controls.`,
    });
  }

  if (tabProps.some((tabProp, index) => (
    !hasAnyTextProp(tabProp, 'text', 'aria-label') && !hasTextContent(tabBlocks[index]?.contents)
  ))) {
    issues.push({
      level: 'error',
      property: 'text',
      message: `Every mdc-tab inside ${tagName} requires text or aria-label.`,
    });
  }

  if (activeTabs.length > 1) {
    issues.push({
      level: 'error',
      property: 'active',
      message: `${tagName} should not render more than one active mdc-tab.`,
    });
  }

  if (hasTextValue(activeTabId) && tabIds.length > 0 && !tabIds.includes(String(activeTabId))) {
    issues.push({
      level: 'error',
      property: 'active-tab-id',
      message: `${tagName} active-tab-id must match one of its child mdc-tab tab-id values.`,
    });
  }

  if (
    initialFocus !== undefined
    && tabProps.length > 0
    && Number(initialFocus) >= tabProps.length
  ) {
    issues.push({
      level: 'warning',
      property: 'initial-focus',
      message: `${tagName} initial-focus is out of range for the provided mdc-tab children.`,
    });
  }

  if (options.vertical && tabProps.some(tabProp => getProp(tabProp, 'variant') !== undefined)) {
    issues.push({
      level: 'warning',
      property: 'variant',
      message: 'mdc-verticaltablist overrides child mdc-tab variant to line; omit child variant values.',
    });
  }

  return issues;
}

function validateTabListRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'tablist') {
    return [];
  }

  return validateTabCollectionRules(component.tagName, props, children, { labelLevel: 'warning' });
}

function validateVerticalTabListRules(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationIssue[] {
  if (component.name !== 'verticaltablist') {
    return [];
  }

  return [
    ...validateNonNegativeNumber(component.tagName, props, 'initial-focus'),
    ...validateTabCollectionRules(component.tagName, props, children, {
      labelLevel: 'error',
      vertical: true,
    }),
  ];
}

function validateComponentUsage(
  component: ComponentRegistryEntry,
  props: ComponentProps,
  children?: string,
): ValidationResult {
  const issues = [
    ...validateKnownProperties(component, props),
    ...validateButtonRules(component, props, children),
    ...validateButtonLinkRules(component, props, children),
    ...validateLinkButtonRules(component, props, children),
    ...validateComboboxRules(component, props, children),
    ...validateListboxRules(component, props, children),
    ...validateSelectListBoxRules(component, children),
    ...validateOptionRules(component, props, children),
    ...validateOptGroupRules(component, props, children),
    ...validateInputRules(component, props),
    ...validateTextareaRules(component, props),
    ...validateCheckboxRules(component, props),
    ...validateRadioRules(component, props),
    ...validateRadioGroupRules(component, props),
    ...validateToggleRules(component, props),
    ...validateMenuItemRules(component, props, children),
    ...validateMenuItemCheckboxRules(component, props, children),
    ...validateMenuItemRadioRules(component, props, children),
    ...validateMenubarRules(component, props, children),
    ...validateDialogRules(component, props),
    ...validateAnnouncementDialogRules(component, props),
    ...validatePopoverRules(component, props),
    ...validateTooltipRules(component, props, children),
    ...validateToggletipRules(component, props, children),
    ...validateToastRules(component, props, children),
    ...validateBannerRules(component, props, children),
    ...validateStatusMessageRules(component, props, children),
    ...validateAvatarLikeRules(component, props, { interactive: component.name === 'avatarbutton' }),
    ...validateBadgeRules(component, props),
    ...validateChipRules(component, props, children),
    ...validateFilterChipRules(component, props, children),
    ...validateAlertChipRules(component, props, children),
    ...validateStaticChipRules(component, props, children),
    ...validatePresenceRules(component, props),
    ...validateIconRules(component, props),
    ...validateIllustrationRules(component, props),
    ...validateBrandVisualRules(component, props),
    ...validateAnimationRules(component, props),
    ...validateAccordionRules(component, props),
    ...validateAccordionButtonRules(component, props),
    ...validateAccordionGroupRules(component, children),
    ...validateButtonSimpleRules(component, props, children),
    ...validateButtonGroupRules(component, props, children),
    ...validateLinkRules(component, props, children),
    ...validateCalendarRules(component, props),
    ...validateDatePickerRules(component, props),
    ...validateTimePickerRules(component, props),
    ...validateSelectRules(component, props, children),
    ...validatePasswordRules(component, props),
    ...validateSearchFieldRules(component, props, children),
    ...validateSearchPopoverRules(component, props, children),
    ...validateSliderRules(component, props),
    ...validateProgressRules(component, props),
    ...validateSpinnerRules(component, props),
    ...validateDecorativeIndicatorRules(component, props),
    ...validateCardControlRules(component, props, children),
    ...validateStaticControlRules(component, props, children),
    ...validateStepperRules(component, props, children),
    ...validateStepperItemRules(component, props),
    ...validateStepperConnectorRules(component, props),
    ...validateMenuPopoverRules(component, props, children),
    ...validateMenuSectionRules(component, props, children),
    ...validateNavMenuItemRules(component, props),
    ...validateFormFieldGroupRules(component, props, children),
    ...validateFocusTrapRules(component, props, children),
    ...validateAppHeaderRules(component, children),
    ...validateCoachmarkRules(component, props),
    ...validateProviderRules(component, props, children),
    ...validateTextRules(component, props, children),
    ...validateTypewriterRules(component, props),
    ...validateCardRules(component, props, children),
    ...validateDividerRules(component, props, children),
    ...validateListRules(component, props, children),
    ...validateListItemRules(component, props, children),
    ...validateListHeaderRules(component, props, children),
    ...validateSideNavigationRules(component, props, children),
    ...validateTabRules(component, props, children),
    ...validateTabListRules(component, props, children),
    ...validateVerticalTabListRules(component, props, children),
  ];

  return {
    valid: issues.every(issue => issue.level !== 'error'),
    issues,
  };
}

export { findProperty, validateComponentUsage };
