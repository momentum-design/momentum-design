/** @jsxImportSource preact */
import './Home.css';

export const Home = () => (
  <div className="wrapper">
    <div className="banner">
      <div className="illustrationWrapper">
        <img src="/momentum-design/header-illustration.svg" className="heroIllustration" />
        <img src="/momentum-design/hero-gradient.svg" className="heroGradient" />
      </div>
      <div className="textWrapper">
        <h1>Momentum Design System</h1>
        <p>
          Momentum is how Webex designs the future of work. This design system exists to create a shared design language
          and set of building blocks for all Webex products.
        </p>
        <br />
        <p>
          Our design system gives everyone the tools they'll need to create coherent products and experiences that connect
          people across the evolving digital and physical workplace.
        </p>
      </div>
    </div>
  </div>
);
