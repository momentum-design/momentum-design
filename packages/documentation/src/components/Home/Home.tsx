/** @jsxImportSource preact */
import './Home.css';
import '@momentum-design/components/dist/components/text/index.js';
import '@momentum-design/components/dist/components/buttonlink/index.js';
import '@momentum-design/components/dist/components/card/index.js';
import '@momentum-design/components/dist/components/illustration/index.js';
import { featureCards, helpLinks } from './Home.constants';

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
          <span className="headerTextStroke">ship</span>&nbsp;faster.<br/>
          delight&nbsp;<span className="headerTextStroke">users.</span>
        </h1>
      </div>
      <div className="textWrapper">
        <mdc-text type="heading-midsize-regular" tagname="span">
          Momentum arms your team with ready-to-use components and guidance
          to build consistent products that feel seamless, without slowing down.
        </mdc-text>
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
      <mdc-text type="heading-xlarge-medium" tagname="span" className="heading">Your ultimate product ally.</mdc-text>
      <mdc-text type="body-large-regular" tagname="span">
        Momentum gives teams the tools to move faster, stay consistent, and work together without friction.
        Ready-to-use components, patterns, and tokens mean less time reinventing the wheel and more time creating
        experiences users love. Designers, developers, and product managers can finally focus on building,
        not guessing.
      </mdc-text>
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
      <mdc-text type="heading-xlarge-medium" tagname="span" className="heading">Design spotlight</mdc-text>
      <mdc-text type="body-large-regular" tagname="span">
        Check out these real-world examples of Momentum in action across Cisco.
        These screenshots highlight how our components, patterns, and guidelines come together
        to create consistent, polished experiences. See how Momentum helps teams build faster,
        maintain cohesion, and deliver better user experiences.
      </mdc-text>
      <div className="callToAction">
        <mdc-buttonlink
          size="40"
          variant="secondary"
          href="webex.com"
          target="_blank"
          rel="noopener noreferrer"
          data-btn-type="pill"
        >
        Start designing today
        </mdc-buttonlink>
      </div>
      <div className="screenshotsGrid">
        <img src="/examples/first-image.webp" />
        <img src="/examples/second-image.webp" />
        <img src="/examples/third-image.webp" />
        <img src="/examples/fourth-image.webp" />
      </div>
    </div>
    <div className="fourthPageContent">
      <mdc-text type="heading-xlarge-medium" tagname="span" className="heading">Loved by designers and developers</mdc-text>
      <div className="descriptionContainer">
        <mdc-text type="body-large-regular" tagname="span">
          <b>Momentum just works. </b>
          Designers get ready-to-use components and crystal-clear guidelines.
          Developers get scalable, production-ready code that plugs straight in.
          Together, teams move faster, reduce errors, and ship products users actually enjoy.
        </mdc-text>
      </div>
      <h1>55+</h1>
      <mdc-illustration name="classroom-threetwozero-onboarding-secondary"></mdc-illustration>
      <mdc-text type="heading-xlarge-regular" tagname="span">Available components</mdc-text>
      <mdc-text type="body-large-regular" tagname="span" className="small-text">(And more coming soon)</mdc-text>
    </div>
    <div className="fifthPageContent">
      <mdc-text type="heading-xlarge-medium" tagname="span" className="heading">We have your back</mdc-text>
      <mdc-text type="body-large-regular" tagname="span">
        Momentum supports teams by providing expert guidance, troubleshooting, and best practices to ensure smooth
        implementation. Whether you’re a designer, developer, or product manager, our support resources help you
        overcome challenges quickly. Access detailed documentation, FAQs, and contact options to keep your
        projects on track.
      </mdc-text>
      <div className="callToAction">
        {helpLinks.map((button, index) => (<mdc-buttonlink
          key={index}
          size="40"
          variant="secondary"
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          data-btn-type="pill"
        >
          {button.label}
        </mdc-buttonlink>))}
      </div>
    </div>
  </div>
);
