import { ArrowUpRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>✦</span> StartTech
      </div>

      <div className="nav-links">
        <a href="#solutions">Solutions</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#support">Support</a>
      </div>

      <a href="#support" className="nav-button">
        Get Started <ArrowUpRight size={16} />
      </a>
    </nav>
  );
}

export default Navbar;