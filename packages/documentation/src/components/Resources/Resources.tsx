/** @jsxImportSource preact */
import '@momentum-design/components/dist/components/buttonlink/index.js';
import '@momentum-design/components/dist/components/text/index.js';
import './Resources.css';
import { assetLinks, tokenLinks } from './Resources.constants';

export const Resources = () => (
  <div className="wrapper">
    <div className="firstPageContent">
      <div className="headerWrapper">
        <h1>RESOURCES</h1>
      </div>
      <div className="textWrapper">
        <mdc-text type="heading-midsize-regular">
          The Tokens and Assets in the Momentum Design System are essential components that help maintain
          design consistency and efficiency across products. Tokens represent design decisions such as colors,
          typography, and spacing, allowing teams to apply these elements uniformly. Assets, on the other
          hand, include icons, images, and other visual elements that enhance the user interface.
        </mdc-text>
        <mdc-text type="heading-midsize-bold">
          Tokens
        </mdc-text>
        <div className="buttonWrapper">
          {tokenLinks.map(({ title, href }) => (
            <mdc-buttonlink
              size="40"
              href={href}
              data-btn-type="pill"
              variant="secondary"
              target="_self"
            >
              {title}
            </mdc-buttonlink>
          ))}
        </div>
        <mdc-text type="heading-midsize-bold">
          Assets
        </mdc-text>
        <div className="buttonWrapper">
          {assetLinks.map(({ title, href }) => (
            <mdc-buttonlink
              size="40"
              href={href}
              data-btn-type="pill"
              variant="secondary"
              target="_self"
            >
              {title}
            </mdc-buttonlink>
          ))}
        </div>
      </div>
    </div>
  </div>
);
