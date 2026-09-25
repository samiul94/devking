const Footer = () => {
return (
<footer className="site-footer">
<div className="footer-container">
<div className="footer-grid">
<div className="footer-brand">
<a href="#home" className="footer-logo">
<span className="footer-logo-mark">DS</span>
<span>Dev <strong>Stack</strong></span>
</a>
<p>Curated tools, technologies, and resources for developers building modern software.</p>
<div className="footer-socials">
<a href="#" aria-label="GitHub">GitHub</a>
<a href="#" aria-label="Twitter">Twitter</a>
<a href="#" aria-label="LinkedIn">LinkedIn</a>
</div>
</div>
<div>
<h3>Product</h3>
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#technologies">Technologies</a></li>
<li><a href="#projects">Projects</a></li>
</ul>
</div>
<div>
<h3>Company</h3>
<ul>
<li><a href="#about">About</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#">Careers</a></li>
</ul>
</div>
<div>
<h3>Legal</h3>
<ul>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p>© 2026 Dev Stack. All rights reserved.</p>
<div>
<a href="#">Privacy</a>
<a href="#">Terms</a>
</div>
</div>
</div>
</footer>
);
};
export default Footer;
