export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1600&query=Indian%20restaurant%20interior%20with%20traditional%20decor%20warm%20lighting)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-accent text-lg mb-4 font-semibold">AUTHENTIC FLAVORS</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Experience the Rich Taste of India
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Authentic Indian cuisine crafted with traditional recipes passed down through generations, using the finest
          spices and fresh ingredients
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-accent text-background rounded-full font-semibold hover:opacity-90 transition text-lg">
            View Menu
          </button>
          <button className="px-8 py-4 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-background transition text-lg">
            Book Table
          </button>
        </div>
      </div>
    </section>
  )
}
