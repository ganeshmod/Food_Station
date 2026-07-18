import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const Thali = [
  {
    id: 1,
    name: "Normal Meal",
    price: 100,
    rating: 4.5,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1539156340048-e86bca4fa3f7?w=600&h=600&fit=crop",
    description: "Traditional home-style meal with rice and vegetables"
  },
  {
    id: 2,
    name: "Silver Meal",
    price: 120,
    rating: 4.6,
    reviews: 118,
    image: "https://plus.unsplash.com/premium_photo-1775742080805-9c1218892c0e?w=600&h=600&fit=crop",
    description: "Premium selection with choice of protein and sides"
  },
  {
    id: 3,
    name: "Gold Meal",
    price: 150,
    rating: 4.8,
    reviews: 176,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop",
    description: "Exclusive combination meal with premium ingredients"
  },
  {
    id: 4,
    name: "Platinum Meal",
    price: 200,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=600&fit=crop",
    description: "Ultimate luxury meal with specialty dishes"
  }
];

export default function Plate() {
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
            Our Delicious Meals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Savor our signature meals prepared with fresh ingredients and culinary expertise
          </p>
        </div>

        {/* Plates Grid - Responsive: 2 on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Thali.map((plate) => (
            <div
              key={plate.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-200 h-56 sm:h-64">
                <img
                  src={plate.image}
                  alt={plate.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <button className="bg-white text-[#5c264c] p-3 rounded-full hover:bg-[#0FA4AF] hover:text-white transition-all transform hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                  <button 
                    onClick={() => toggleFavorite(plate.id)}
                    className="bg-white text-red-500 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all transform hover:scale-110"
                  >
                    <Heart size={20} fill={favorites[plate.id] ? "currentColor" : "none"} />
                  </button>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 bg-[#0FA4AF] text-white px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ {plate.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-[#5c264c] mb-1 line-clamp-2">
                  {plate.name}
                </h3>
                
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {plate.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(plate.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span>({plate.reviews})</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold text-[#0FA4AF]">
                    ₹{plate.price}
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
