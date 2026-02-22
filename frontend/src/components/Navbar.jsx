import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HiOutlineAcademicCap, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <HiOutlineAcademicCap className="navbar-logo-icon" />
          <span>EduPaq</span>
        </Link>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <NavLink to="/" className="navbar-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/courses" className="navbar-link" onClick={closeMenu}>Courses</NavLink>
          </div>

          <div className="navbar-auth">
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className="navbar-link" onClick={closeMenu}>Dashboard</NavLink>
                <span className="navbar-user">Hi, {user?.name?.split(' ')[0]}</span>
                <button className="btn btn-primary navbar-btn" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="navbar-link" onClick={closeMenu}>Login</Link>
                <Link to="/register" className="btn btn-primary navbar-btn" onClick={closeMenu}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
