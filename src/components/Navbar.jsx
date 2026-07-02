import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🎨 GalleryApp</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? "active-link" : ""}>Gallery</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;