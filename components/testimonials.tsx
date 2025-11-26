'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: '"An absolute gem! The flavors are authentic and the ambiance is perfectly warm. Every dish is a masterpiece."',
      author: 'Priya Sharma',
      role: 'Food Critic',
      rating: 5
    },
    {
      id: 2,
      text: '"I have been coming here for years and never been disappointed. The service and food quality are consistently exceptional."',
      author: 'Rajesh Kumar',
      role: 'Regular Guest',
      rating: 5
    },
    {
      id: 3,
      text: '"This restaurant captures the true essence of Indian cuisine. A must-visit for anyone craving authentic Indian food."',
      author: 'Amelia Davis',
      role: 'Food Blogger',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="stars">
        {[...Array(rating)].map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-content">
        <p className="section-tag">WHAT CUSTOMERS SAY</p>
        
        <h2 className="section-title">Our Guests Love Us</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {renderStars(testimonial.rating)}
              
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-author-info">
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}