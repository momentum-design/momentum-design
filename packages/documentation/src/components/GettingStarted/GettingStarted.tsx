/** @jsxImportSource preact */
import '@momentum-design/components/dist/components/buttonlink/index.js';
import '@momentum-design/components/dist/components/card/index.js';
import '@momentum-design/components/dist/components/text/index.js';
import {
  coreLibraryCards,
  CXSolutionCards,
  designerCards,
  officeHoursCards,
  platformUXCards,
  requestFormCards,
  trainingCards,
  webexAppCards,
  webexSpacesCards,
} from './GettingStarted.constants';
import './GettingStarted.css';

const Card = ({ title, style, description, link, linkTitle }: any) => (<mdc-card
  variant="border"
  orientation="vertical"
  card-title={title}
  title-tag-name="span"
  subtitle-tag-name="span"
>
  <mdc-text tagname="span" type="body-large-regular" className={'cardBody secondaryText'} slot="body" style={style}>
    {description}
  </mdc-text>
  <mdc-buttonlink
    slot="footer"
    size="40"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    data-btn-type="pill"
    variant="secondary"
    postfix-icon="pop-out-bold"
  >
    {linkTitle || title}
  </mdc-buttonlink>
</mdc-card>);

const officeHoursCard = ({ title, subTitle, meetingLink, timeZones }: any) => (
  <mdc-card variant="border" orientation="horizontal">
    <div slot="body" className="officeHoursCardBody">
      <div className="timezoneInformation">
        <mdc-text type="heading-midsize-bold" tagname="span">{title}</mdc-text>
        <mdc-text type="heading-small-regular" tagname="span" className="italic">{subTitle}</mdc-text>
        <mdc-buttonlink
          size="40"
          href={meetingLink}
          target="_blank"
          rel="noopener noreferrer"
          data-btn-type="pill"
          variant="secondary"
          postfix-icon="pop-out-bold"
        >
          Webex Meeting
        </mdc-buttonlink>
      </div>
      <div className="timezoneContainer">
        {timeZones.map(({ bold, time, region }: any) => (
          <div className="timezoneRow">
            <mdc-text
              type={bold ? 'heading-small-bold' : 'heading-small-regular'}
              className={!bold && 'secondaryText'}
              tagname="span"
            >
              {region}
            </mdc-text>
            <mdc-text
              type={bold ? 'heading-small-bold' : 'heading-small-regular'}
              className={!bold && 'secondaryText'}
              tagname="span"
            >
              {time}
            </mdc-text>
          </div>
        ))}
      </div>
    </div>
  </mdc-card>
);

export const GettingStarted = () => (
  <div className="wrapper">
    <div className="firstPageContent">
      <div className="headerWrapper">
        <h1>
          <span className="headerTextStroke">HEY</span>&nbsp;CONSUMERS!
        </h1>
      </div>
      <div className="textWrapper">
        <mdc-text type="heading-midsize-regular">
          As the Momentum Design System Team, it’s our goal to provide shared tooling to designers and engineers
          to create a consistent experience across the Collaboration Business’ product ecosystem.
          We want to make the implementation of Momentum as easy as possible for our product teams.
        </mdc-text>
        <mdc-text type="heading-midsize-bold" className="italic">
          We do that by aligning (as much as is possible) what’s in design spec with what’s in code.
        </mdc-text>
        <mdc-text type="heading-midsize-regular">
          If you’re looking for information on how to use the Momentum Design System, you’re in the right place.
          In this document, you’ll find everything you need to know to get started using Momentum and
          incorporating it into your product work.
        </mdc-text>
        <mdc-text type="heading-midsize-regular">
          If you’re looking for what resources we have available for consumption,{' '}
          <a
            href="https://github.com/momentum-design/momentum-design?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: underline;"
          >
            check out our github
          </a>
          .
        </mdc-text>
      </div>
    </div>
    <div className="section">
      <div className="textWrapper">
        <mdc-text type="heading-large-bold">For designers</mdc-text>
        <mdc-text type="heading-midsize-regular">
          For general design guidelines, component usage, or resources we make available to the design organization,
          check out our{' '}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: underline;"
          >
            Momentum Figma Team
          </a>
          .
        </mdc-text>
      </div>
      <div className="cardGrid">
        {designerCards.map(Card)}
      </div>
    </div>
    <div className="section">
      <div className="textWrapper">
        <mdc-text type="heading-large-bold">Training</mdc-text>
        <mdc-text type="heading-midsize-regular">
          We’ve created an entire course to help designers understand how to use Momentum,
          who to talk to, and where everything is. We’ve also created a course to help engineers
          understand how to use Figma.
        </mdc-text>
      </div>
      <div className="cardGrid">
        {trainingCards.map(Card)}
      </div>
    </div>
    <div className="section">
      <div className="textWrapper">
        <mdc-text type="heading-large-bold">Product Figma libraries</mdc-text>
        <mdc-text type="heading-midsize-regular">
          We support a variety of products at different stages of Momentum Adoption.
          Libraries often use a combination of core components from our Momentum Web Library
          as well as product specific, custom components.
        </mdc-text>
      </div>
      <mdc-text type="heading-midsize-bold">Core Library</mdc-text>
      <div className="cardGrid">
        {coreLibraryCards.map(Card)}
      </div>
      <mdc-text type="heading-midsize-bold">CX Solutions</mdc-text>
      <div className="cardGrid">
        {CXSolutionCards.map(Card)}
      </div>
      <mdc-text type="heading-midsize-bold">Platform UX</mdc-text>
      <div className="cardGrid">
        {platformUXCards.map(Card)}
      </div>
      <mdc-text type="heading-midsize-bold">Webex App</mdc-text>
      <div className="cardGrid">
        {webexAppCards.map(Card)}
      </div>
    </div>
    <div className="section">
      <div className="textWrapper">
        <mdc-text type="heading-large-bold" id="support">Support</mdc-text>
        <mdc-text type="heading-midsize-bold" style="margin-bottom: -1rem;">Webex Spaces</mdc-text>
        <mdc-text type="heading-midsize-regular">
          We support both design and engineering teams. Check out our support spaces in Webex.
        </mdc-text>
      </div>
      <div className="cardGrid">
        {webexSpacesCards.map(Card)}
      </div>
    </div>
    <div className="section">
      <div className="textWrapper">
        <mdc-text type="heading-large-bold">Office Hours</mdc-text>
        <mdc-text type="heading-midsize-regular">We hold office hours:</mdc-text>
        <ul><li><mdc-text type="heading-midsize-regular">3x a week, every week, across 3 timezones</mdc-text></li></ul>
      </div>
      <div className="officeHoursCardsContainer">
        {officeHoursCards.map(officeHoursCard)}
      </div>
    </div>
    <div className="section">
      <div className="textWrapper">
        <mdc-text type="heading-large-bold">Component Enhancements, Visual Design Reviews, and Icon Requests</mdc-text>
        <mdc-text type="heading-midsize-regular">
          If you need a new component, an enhanced component, a visual design review, a new icon,
          or just need help exploring the application of our design system to a feature you’re building,
          please submit a request.
        </mdc-text>
        <mdc-text type="heading-midsize-regular">
          We track all our work in Asana, and will get back to you within a week.
          If you need to escalate the request, post in the Momentum Design Support space
          or reach out to Trip Carroll directly.
        </mdc-text>
      </div>
      <div className="cardGrid">
        {requestFormCards.map(Card)}
      </div>
    </div>
  </div>
);
