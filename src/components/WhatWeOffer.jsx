

export default function WhatWeOffer() {
 
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div 
        className="relative w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
          backgroundAttachment: "fixed"
        }}
      >
        {/* Gradient Overlay with 3D effect */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70"></div>
        
        {/* Animated background shapes for 3D effect */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#0FA4AF]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 right-10 w-40 h-40 bg-[#5c264c]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Main Text Content with 3D effect */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          {/* Text with shadow layers for 3D depth */}
          <div className="text-center space-y-2">
            {/* Shadow text for depth */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white transform transition-transform duration-300 hover:scale-105"
              style={{
                textShadow: `
                  3px 3px 0px rgba(15, 164, 175, 0.8),
                  6px 6px 0px rgba(92, 38, 76, 0.6),
                  9px 9px 15px rgba(0, 0, 0, 0.5)
                `,
                letterSpacing: "0.05em"
              }}
            >
              What We
            </h1>
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0FA4AF] transform transition-transform duration-300 hover:scale-105"
              style={{
                textShadow: `
                  3px 3px 0px rgba(92, 38, 76, 0.8),
                  6px 6px 0px rgba(255, 255, 255, 0.3),
                  9px 9px 15px rgba(0, 0, 0, 0.5)
                `,
                letterSpacing: "0.05em"
              }}
            >
              Offer
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 pt-3">
              <div className="h-1 w-12 bg-[#0FA4AF] rounded-full"></div>
              <div className="h-1 w-12 bg-[#5c264c] rounded-full"></div>
              <div className="h-1 w-12 bg-[#0FA4AF] rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-white/90 pt-2 max-w-xl mx-auto font-medium">
              Exceptional dining experience with passion and excellence
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      
    </div>
  );
}
