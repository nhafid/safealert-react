import "./hero.css";
import Logo from "/logo.png";

const Hero = () => {
  return (
    <div>
        <div className="hero_logo">
        <img src={Logo} alt="SafeAlert logo" />
        <h1>The Recall Tracking System</h1>
        </div>
        <h2>Mission Statement</h2>
        <p>The mission of our company, Safe Alert, is to provide a completely FREE service through our website to quickly notify users about recalled items, helping them make safe choices before purchasing or using them. Our service ensures users receive fast, accurate, and accessible information, because in food safety, time is of the essence.</p>
    </div>
  );
};

export default Hero;