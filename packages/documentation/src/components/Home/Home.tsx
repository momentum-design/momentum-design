/** @jsxImportSource preact */
import './Home.css';
import '@momentum-design/components/dist/components/text/index.js';
import '@momentum-design/components/dist/components/buttonlink/index.js';
import '@momentum-design/components/dist/components/card/index.js';
import { featureCards } from './Home.constants';

const Card = ({ title, description, linkTitle, linkUrl, newTab }: any) => (
  <mdc-card
    variant="border"
    orientation="vertical"
    card-title={title}
    title-tag-name="span"
    subtitle-tag-name="span"
  >
    <mdc-text slot="body" tagname="span" type="body-large-regular">
      {description}
    </mdc-text>
    <mdc-buttonlink
      slot="footer"
      size="40"
      href={linkUrl}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
      data-btn-type="pill"
      variant="secondary"
    >
      {linkTitle}
    </mdc-buttonlink>
  </mdc-card>
);

export const Home = () => (
  <div className="wrapper">
    <div className="firstPageContent">
      <div className="headerWrapper">
        <h1>
          <span className="headerTextStroke">Build</span> faster.<br/>
          Design <span className="headerTextStroke">better.</span>
        </h1>
      </div>
      <div className="textWrapper">
        <p>The Momentum Design System gives you the tools to build cohesive <br/>
        products and experiences that connect people across today's evolving <br/>
        digital and physical workplace.
        </p>
      </div>
      <div className="buttonWrapper">
        <mdc-buttonlink
          postfix-icon="next-bold"
          size="40"
          href="https://www.webex.com"
          target="_blank"
          rel="noopener noreferrer"
          data-btn-type="pill"
        >
          Get started
        </mdc-buttonlink>
        <mdc-buttonlink
          size="40"
          variant="secondary"
          href="https://github.com/momentum-design/momentum-design/releases"
          target="_blank"
          rel="noopener noreferrer"
          data-btn-type="pill"
        >
          Latest updates
        </mdc-buttonlink>
      </div>
    </div>
    <div className="secondPageContent">
      <h2>Your ultimate product ally.</h2>
      <p>Momentum gives teams the tools to move faster, stay consistent, and work together without friction.
        Ready-to-use components, patterns, and tokens mean less time reinventing the wheel and more time creating
        experiences users love. Designers, developers, and product managers can finally focus on building,
        not guessing.
      </p>
      <div className="cardGrid">
        {featureCards.map((card) => (
          <Card
            title={card.title}
            description={card.description}
            linkTitle={card.linkText}
            linkUrl={card.linkUrl}
            newTab={card.newTab || false}
          />
        ))}
      </div>
    </div>
    <div className="thirdPageContent">
      <h2>Design spotlight</h2>
      <p>Check out these real-world examples of Momentum in action across Cisco.
        These screenshots highlight how our components, patterns, and guidelines come together
        to create consistent, polished experiences. See how Momentum helps teams build faster,
        maintain cohesion, and deliver better user experiences.
      </p>
      {/* TODO: get proper screenshots and in webp format for better performance */}
      <div className="screenshotGridFirstRow">
        <img src="/examples/screenshot1.png" />
        <img src="/examples/screenshot2.png" />
      </div>
      <div className="screenshotGridSecondRow">
        <img src="/examples/screenshot3.png" />
        <img src="/examples/screenshot4.png" />
        <img src="/examples/screenshot5.png" />
      </div>
    </div>
    <div className="fourthPageContent">
      <h2>Loved by designers and developers</h2>
      <p><b>Momentum just works.</b> Designers get ready-to-use components and crystal-clear guidelines.
        Developers get scalable, production-ready code that plugs straight in.
        Together, teams move faster, reduce errors, and ship products users actually enjoy.
      </p>
    </div>
  </div>
);
