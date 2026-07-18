
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

function Dessert() {
  const [favorites, setFavorites] = useState({});

  const desserts = [
    {
      id: 1,
      name: "Chocolate Lava Cake",
      price: 299,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
      description: "Rich, gooey chocolate center with vanilla ice cream",
      reviews: 128
    },
    {
      id: 2,
      name: "Strawberry Cheesecake",
      price: 349,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1533134242443-742b28dc8e5a?w=600&h=600&fit=crop",
      description: "Creamy NY-style cheesecake with fresh berries",
      reviews: 95
    },
    {
      id: 3,
      name: "Tiramisu Delight",
      price: 279,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=600&fit=crop",
      description: "Classic Italian dessert with coffee and mascarpone",
      reviews: 152
    },
    {
      id: 4,
      name: "Mango Panna Cotta",
      price: 319,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1470079694066-81342bda1e55?w=600&h=600&fit=crop",
      description: "Silky smooth mango custard with fresh mango pulp",
      reviews: 87
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      {/* <div 
        className="relative w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{
              textShadow: `
                3px 3px 0px rgba(15, 164, 175, 0.8),
                6px 6px 0px rgba(92, 38, 76, 0.6),
                9px 9px 15px rgba(0, 0, 0, 0.5)
              `,
              letterSpacing: "0.05em"
            }}
          >
            Decadent Desserts
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-medium">
            Indulge in our exquisite collection of handcrafted treats
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#5c264c] mb-2">
              Our Delicious Desserts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Crafted with premium ingredients and passion for perfection
            </p>
          </div>

          {/* Dessert Grid - Responsive: 2 on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {desserts.map((dessert) => (
              <div
                key={dessert.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-200 h-56 sm:h-64">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <button className="bg-white text-[#5c264c] p-3 rounded-full hover:bg-[#0FA4AF] hover:text-white transition-all transform hover:scale-110">
                      <ShoppingCart size={20} />
                    </button>
                    <button 
                      onClick={() => toggleFavorite(dessert.id)}
                      className="bg-white text-red-500 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all transform hover:scale-110"
                    >
                      <Heart size={20} fill={favorites[dessert.id] ? "currentColor" : "none"} />
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-[#0FA4AF] text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ {dessert.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-bold text-[#5c264c] mb-1 line-clamp-2">
                    {dessert.name}
                  </h3>
                  
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {dessert.description}
                  </p>

                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < Math.floor(dessert.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span>({dessert.reviews})</span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-[#0FA4AF]">
                      ₹{dessert.price}
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

      {/* CTA Section */}
      <div className="bg-linear-to-r from-[#5c264c] via-[#0FA4AF] to-[#5c264c] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-hidden\">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Special Occasion? 🎉
          </h2>
          <p className="text-white/90 mb-8 text-sm sm:text-base">
            We customize desserts for birthdays, weddings, and celebrations. Contact us for special orders!
          </p>
          <button className="bg-white text-[#5c264c] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Order Custom Dessert
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dessert;
