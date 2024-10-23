import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
    hostFitContentStyles,
    css`
        :host {
            font-family: sans-serif;
            border: 3px solid orange;
        }

        div.mds-div {
            background-color: #555;
            border: 3px solid red;
        }
    `,
    hostFocusRingStyles
];

export default styles;