export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className="h-96 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(217, 119, 6, 0.15), rgba(120, 53, 15, 0.15))",
            }}
          >
            <div className="text-center text-muted-foreground">Restaurant Interior</div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-lg mb-2 font-semibold">OUR STORY</p>
            <h2 className="text-4xl font-bold text-foreground mb-6">Tradition Meets Innovation</h2>

            <p className="text-muted-foreground text-lg mb-4">
              For over 20 years, Spice Haven has been bringing authentic Indian cuisine to your table. Our journey began
              in a small kitchen and has grown into a beloved destination for food enthusiasts seeking genuine flavors
              and warm hospitality.
            </p>

            <p className="text-muted-foreground text-lg mb-8">
              Every dish is prepared with love using traditional cooking methods and the finest ingredients sourced from
              trusted suppliers. Our chefs, trained in the heart of India, pour their passion into every meal.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-accent mb-2">20+</p>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">50k+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">100%</p>
                <p className="text-muted-foreground">Fresh Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
