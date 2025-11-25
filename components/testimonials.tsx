const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Critic",
    content:
      "An absolute gem! The flavors are authentic and the ambiance is perfectly warm. Every dish is a masterpiece.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Regular Guest",
    content:
      "I have been coming here for years and never been disappointed. The service and food quality are consistently exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amelia Davis",
    role: "Food Blogger",
    content:
      "This restaurant captures the true essence of Indian cuisine. A must-visit for anyone craving authentic Indian food.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-lg mb-2 font-semibold">WHAT CUSTOMERS SAY</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Guests Love Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
