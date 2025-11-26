'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <h3>Spice Haven</h3>
          <p>Authentic Indian cuisine crafted with passion and tradition.</p>
        </div>
        
        {/* Menu Column */}
        <div className="footer-column">
          <h4>Menu</h4>
          <ul className="footer-links">
            <li>
              <a href="#appetizers" onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}>
                Appetizers
              </a>
            </li>
            <li>
              <a href="#main-courses" onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}>
                Main Courses
              </a>
            </li>
            <li>
              <a href="#breads" onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}>
                Breads
              </a>
            </li>
            <li>
              <a href="#desserts" onClick={(e) => { e.preventDefault(); scrollToSection('featured'); }}>
                Desserts
              </a>
            </li>
          </ul>
        </div>
        
        {/* Company Column */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        
        {/* Follow Us Column */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {currentYear} Spice Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}