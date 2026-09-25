import bannerStack from "../../assets/banner-stack.png";
const Hero = () => {
return (
<section className="hero">
<div className="hero-container">
<div className="hero-content-wrapper">
<div className="hero-content">
<h1 className="hero-title">
Build Your Ideal
<br />
<span className="hero-gradient-text">Development Stack</span>
</h1>
<p className="hero-description">
Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
</p>
<div className="hero-actions">
<a href="#technologies" className="hero-primary-button">Explore Technologies</a>
<a href="#about" className="hero-secondary-button">Learn More</a>
</div>
</div>
<div className="hero-image-wrapper">
<img src={bannerStack} alt="Development technology stack" className="hero-image" />
</div>
</div>
</div>
</section>
);
};
export default Hero;
