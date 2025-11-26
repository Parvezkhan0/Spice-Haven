'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">AUTHENTIC FLAVORS</p>
        
        <h1>
          Experience the<br />
          Rich Taste of India
        </h1>
        
        <p className="hero-description">
          Authentic Indian cuisine crafted with traditional recipes passed down through generations, using the finest spices and fresh ingredients
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('featured')}
          >
            View Menu
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('reservation')}
          >
            Book Table
          </button>
        </div>
      </div>
    </section>
  );
}