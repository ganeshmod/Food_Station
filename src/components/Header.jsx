import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, LogIn, QrCode, Home, Info, Phone, Cake, ChevronDown } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navLinks = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: Info, path: "#" },
    { name: "Offers", icon: QrCode, path: "/offers" },
    { name: "Desserts", icon: Cake, path: "/desserts" },
    { name: "Contact", icon: Phone, path: "#" },
  ];

  return (
    <header className="bg-linear-to-r from-[#5c264c] via-[#5c264c] to-[#0FA4AF] w-full shadow-xl relative z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Column 1: Logo with brand styling */}
        <div 
          onClick={() => navigate("/")}
          className="flex items-center gap-3 shrink-0 cursor-pointer group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-[#0FA4AF] to-[#5c264c] rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white px-3 py-2 rounded-lg font-bold text-lg">
              <span className="text-2xl">😋</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-tight">
              Food Station
            </h1>
            <p className="text-xs text-white/80 font-medium">Premium Dining</p>
          </div>
        </div>

        {/* Column 2: Nav links - desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className="flex items-center gap-2 text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group cursor-pointer bg-transparent border-0 hover:bg-white/10"
              >
                <Icon size={16} />
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-linear-to-r from-[#0FA4AF] to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            );
          })}
        </nav>

        {/* Column 3: Theme + Login - desktop */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all duration-300 hover:scale-110"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 bg-white text-[#5c264c] font-bold px-5 py-2 rounded-full text-sm hover:bg-[#0FA4AF] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <LogIn size={16} />
            Login
          </button>
        </div>

        {/* Mobile: hamburger with animation */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu with animation */}
      <div
        className={`lg:hidden bg-linear-to-b from-[#5c264c] to-[#0FA4AF] border-t border-white/20 px-4 pb-6 pt-4 flex flex-col gap-2 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <button
              key={link.name}
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false);
              }}
              className="flex items-center gap-3 text-white font-medium py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 w-full text-left bg-transparent border-0 cursor-pointer group"
            >
              <Icon size={20} className="group-hover:scale-125 transition-transform duration-300" />
              <span>{link.name}</span>
              <ChevronDown size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}

        <div className="flex items-center gap-2 pt-4 border-t border-white/20 mt-2">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all duration-300 hover:scale-110"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => {
              navigate('/login');
              setMenuOpen(false);
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-[#5c264c] font-bold px-4 py-2 rounded-full text-sm hover:bg-[#0FA4AF] hover:text-white transition-all duration-300 shadow-lg"
          >
            <LogIn size={16} />
            Login
          </button>
        </div>
      </div>
    </header>
  );
}