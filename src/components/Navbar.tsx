import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo logoUrl="/logo file.png" />
        <NavItems 
          items={navItems.map(item => ({
            name: item.name,
            link: item.link
          }))} 
        />
        <div className="flex items-center gap-3">
          <Link to="/quote" className="hidden md:block">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-2"
            >
              <Button className="bg-transparent hover:bg-transparent text-white border-0 font-medium px-0 py-0 h-auto">
                Request Quote
              </Button>
            </HoverBorderGradient>
            </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo logoUrl="/logo file.png" />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
                <Link
              key={`mobile-link-${idx}`}
              to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
              className={`relative text-neutral-600 dark:text-neutral-300 block py-2 ${
                location.pathname === item.link
                  ? "text-accent font-semibold"
                  : "hover:text-accent"
                  }`}
                >
              <span className="block">{item.name}</span>
                </Link>
              ))}
          <div className="flex w-full flex-col gap-4 pt-4">
              <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="div"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2"
              >
                <Button className="bg-transparent hover:bg-transparent text-white border-0 w-full px-0 py-0 h-auto">
                  Request Quote
                </Button>
              </HoverBorderGradient>
              </Link>
            </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};
