import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const beverages = [
  {
    id: 1,
    name: "Iced Tea",
    price: 100,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    description: "Refreshing chilled tea with natural flavors"
  },
  {
    id: 2,
    name: "Espresso Coffee",
    price: 120,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    description: "Rich, bold espresso with creamy foam"
  },
  {
    id: 3,
    name: "Fresh Juice",
    price: 150,
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd1f3033?w=600&h=600&fit=crop",
    description: "100% natural freshly squeezed juice"
  },
  {
    id: 4,
    name: "Cold Lemonade",
    price: 80,
    rating: 4.5,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1444881213116-d06ca7aaa63b?w=600&h=600&fit=crop",
    description: "Zesty lemonade perfect for hot days"
  }
];

export default function Beverage() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5c264c] mb-2">
            Our Refreshing Beverages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quench your thirst with our selection of premium drinks
          </p>
        </div>

        {/* Beverage Grid - Responsive: 2 on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {beverages.map((beverage) => (
            <div
              key={beverage.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-200 h-56 sm:h-64">
                <img
                  src={beverage.image}
                  alt={beverage.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <button className="bg-white text-[#5c264c] p-3 rounded-full hover:bg-[#0FA4AF] hover:text-white transition-all transform hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                  <button 
                    onClick={() => toggleFavorite(beverage.id)}
                    className="bg-white text-red-500 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all transform hover:scale-110"
                  >
                    <Heart size={20} fill={favorites[beverage.id] ? "currentColor" : "none"} />
                  </button>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 bg-[#0FA4AF] text-white px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ {beverage.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-[#5c264c] mb-1 line-clamp-2">
                  {beverage.name}
                </h3>
                
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {beverage.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(beverage.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span>({beverage.reviews})</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold text-[#0FA4AF]">
                    ₹{beverage.price}
                  </span>
                  <button className="bg-linear-to-r from-[#5c264c] to-[#0FA4AF] text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
