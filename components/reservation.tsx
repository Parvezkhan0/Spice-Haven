'use client';

import { useState } from 'react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Add your form submission logic here
    alert('Reservation request submitted! We will contact you shortly.');
  };

  return (
    <>
      {/* Reservation Form Section */}
      <section id="reservation" className="reservation-section">
        <div className="reservation-content">
          <p className="section-tag">RESERVE YOUR TABLE</p>
          
          <h2>Book a Dining Experience</h2>
          
          <p>Join us for an unforgettable culinary journey</p>
          
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="guests">Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="8+">8+ Guests</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="mm/dd/yyyy"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  placeholder="--:-- --"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn-submit">
              Reserve Now
            </button>
          </form>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="contact-content">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <h3>Address</h3>
            <p>123 Spice Street, Food City</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🕐</div>
            <h3>Hours</h3>
            <p>Tue-Sun: 5 PM - 11 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}