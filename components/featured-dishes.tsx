'use client';

export default function FeaturedDishes() {
  const dishes = [
    {
      id: 1,
      name: 'Butter Chicken',
      description: 'Tender chicken in a creamy tomato sauce infused with aromatic spices',
      price: '$14.99',
      image: '/assets/butter-chicken.jpg' // Placeholder path
    },
    {
      id: 2,
      name: 'Biryani Deluxe',
      description: 'Fragrant rice layered with marinated meat and traditional Indian spices',
      price: '$16.99',
      image: '/assets/biryani.jpg' // Placeholder path
    },
    {
      id: 3,
      name: 'Paneer Tikka',
      description: 'Cottage cheese marinated in yogurt and spices, grilled to perfection',
      price: '$12.99',
      image: '/assets/paneer-tikka.jpg' // Placeholder path
    },
    {
      id: 4,
      name: 'Dal Makhani',
      description: 'Creamy lentils slow-cooked with butter and aromatic spices',
      price: '$11.99',
      image: '/assets/dal-makhani.jpg' // Placeholder path
    }
  ];

  const handleAddToOrder = (dishName: string) => {
    // Add your order functionality here
    console.log(`Added ${dishName} to order`);
  };

  return (
    <section id="featured" className="featured-section">
      <div className="section-content">
        <p className="section-tag">OUR SPECIALTIES</p>
        
        <h2 className="section-title">Featured Dishes</h2>
        
        <p className="section-description">
          Chef's handpicked selection of our most beloved Indian delicacies
        </p>
        
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div className="dish-image">
                {/* Replace with actual images */}
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    // Fallback for missing images
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = '#e8dcc7';
                  }}
                />
              </div>
              
              <div className="dish-content">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
                
                <div className="dish-footer">
                  <span className="dish-price">{dish.price}</span>
                  <button 
                    className="btn-add"
                    onClick={() => handleAddToOrder(dish.name)}
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}