'use client';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Left side - Restaurant Image */}
        <div className="about-image">
          <img 
            src="/assets/restaurant-interior.jpg" 
            alt="Restaurant Interior"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
            onError={(e) => {
              // Fallback for missing image
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<span style="color: #6b7280;">Restaurant Interior</span>';
            }}
          />
        </div>
        
        {/* Right side - Content */}
        <div className="about-text">
          <p className="section-tag">OUR STORY</p>
          
          <h2>Tradition Meets Innovation</h2>
          
          <p>
            For over 20 years, Spice Haven has been bringing authentic Indian cuisine to your table. Our journey began in a small kitchen and has grown into a beloved destination for food enthusiasts seeking genuine flavors and warm hospitality.
          </p>
          
          <p>
            Every dish is prepared with love using traditional cooking methods and the finest ingredients sourced from trusted suppliers. Our chefs, trained in the heart of India, pour their passion into every meal.
          </p>
          
          {/* Statistics */}
          <div className="stats">
            <div className="stat-item">
              <h3>20+</h3>
              <p>Years of Excellence</p>
            </div>
            
            <div className="stat-item">
              <h3>50k+</h3>
              <p>Happy Customers</p>
            </div>
            
            <div className="stat-item">
              <h3>100%</h3>
              <p>Fresh Ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}