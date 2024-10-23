import SubComponentFocusRing from './focusring.component';

SubComponentFocusRing.register('mdc-subcomponent-focusring');

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-subcomponent-focusring']: SubComponentFocusRing;
    }
}

export default SubComponentFocusRing;
