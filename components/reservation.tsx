"use client"

import type React from "react"

import { useState } from "react"

export function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
    alert("Thank you for your reservation! We will confirm shortly.")
    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "2" })
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent text-lg mb-2 font-semibold">RESERVE YOUR TABLE</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">Book a Dining Experience</h2>
          <p className="text-muted-foreground">Join us for an unforgettable culinary journey</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-secondary/5 p-8 rounded-lg border border-border">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-foreground font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-accent text-background rounded-lg font-bold hover:opacity-90 transition text-lg"
          >
            Reserve Now
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-accent mb-2">📍</p>
            <p className="font-semibold text-foreground">Address</p>
            <p className="text-muted-foreground">123 Spice Street, Food City</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent mb-2">📞</p>
            <p className="font-semibold text-foreground">Phone</p>
            <p className="text-muted-foreground">(555) 123-4567</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent mb-2">🕐</p>
            <p className="font-semibold text-foreground">Hours</p>
            <p className="text-muted-foreground">Tue-Sun: 5 PM - 11 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
