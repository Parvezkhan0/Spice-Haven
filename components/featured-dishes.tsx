"use client"

const dishes = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a creamy tomato sauce infused with aromatic spices",
    image: "url(/placeholder.svg?height=300&width=300&query=Butter%20Chicken%20Indian%20dish)",
    price: "$14.99",
  },
  {
    id: 2,
    name: "Biryani Deluxe",
    description: "Fragrant rice layered with marinated meat and traditional Indian spices",
    image: "url(/placeholder.svg?height=300&width=300&query=Biryani%20Indian%20rice%20dish)",
    price: "$16.99",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Cottage cheese marinated in yogurt and spices, grilled to perfection",
    image: "url(/placeholder.svg?height=300&width=300&query=Paneer%20Tikka%20Indian%20appetizer)",
    price: "$12.99",
  },
  {
    id: 4,
    name: "Dal Makhani",
    description: "Creamy lentils slow-cooked with butter and aromatic spices",
    image: "url(/placeholder.svg?height=300&width=300&query=Dal%20Makhani%20Indian%20lentil%20dish)",
    price: "$11.99",
  },
]

export function FeaturedDishes() {
  return (
    <section id="menu" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-lg mb-2 font-semibold">OUR SPECIALTIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Featured Dishes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chef's handpicked selection of our most beloved Indian delicacies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition border border-border"
            >
              {/* Image Placeholder */}
              <div
                className="h-48 bg-gradient-to-b from-accent/20 to-primary/20"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(120, 53, 15, 0.2))`,
                }}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-bold text-lg">{dish.price}</span>
                  <button className="px-4 py-2 bg-accent/10 text-accent rounded hover:bg-accent hover:text-background transition font-semibold text-sm">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
