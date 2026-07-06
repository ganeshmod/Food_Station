import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, LogIn, QrCode, Home, Info, Phone } from "lucide-react";

export default function Header() {
  const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navLinks = [
    { name: "Home", icon: Home },
    { name: "About", icon: Info },
    { name: "QR", icon: QrCode },
    { name: "Contact us", icon: Phone },
  ];

  return (
    <header className="bg-[#0FA4AF] w-full shadow-md relative  z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Column 1: Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">😋</span>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Food Station
          </h1>
        </div>

        {/* Column 2: Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className="text-white/90 hover:text-white font-medium text-sm transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-white transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Column 3: Theme + Login - desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="flex items-center gap-2 bg-white text-[#0FA4AF] font-semibold px-4 py-2 rounded-full text-sm hover:bg-white/90 transition-colors"
           onClick={() => navigate('/login')}
          >
            <LogIn size={16} />
            Login
          </button>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0FA4AF] border-t border-white/20 px-4 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href="#"
                className="flex items-center gap-3 text-white font-medium py-2 px-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={()=> setMenuOpen(false)}
              >
                <Icon size={18} />
                {link.name}
              </a>
            );
          })}

          <div className="flex items-center gap-3 pt-2 border-t border-white/20 mt-1">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white text-[#0FA4AF] font-semibold px-4 py-2 rounded-full text-sm hover:bg-white/90 transition-colors">
              <LogIn size={16} />
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}