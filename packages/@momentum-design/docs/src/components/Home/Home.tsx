/** @jsxImportSource preact */
import './Home.css';

export const Home = () => (
  <div>
    <img src="/hero-gradient.svg" className="heroGradient" />
    <img src="/hero-bg.png" className="heroBg" />
    <div className="banner">
      <h1>Momentum Design System</h1>
      <h4>
        Momentum is how Webex designs the future of work. This design system exists to create a shared design language
        and set of building blocks for all Webex products.
      </h4>
      <img src="/header-illustration.svg" className="heroIllustration" />
      <p>
        Our design system gives everyone the tools they'll need to create coherent products and experiences that connect
        people across the evolving digital and physical workplace.
      </p>
      <p>🚧 This website is work in progress.</p>
    </div>
  </div>
);
