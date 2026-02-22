import { Link } from 'react-router-dom';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <HiOutlineAcademicCap className="footer-logo-icon" />
              <span>EduPaq</span>
            </Link>
            <p className="footer-description">
              Empowering learners worldwide with high-quality courses taught by industry experts. Start your learning journey today.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link"><FaFacebookF /></a>
              <a href="#" className="footer-social-link"><FaTwitter /></a>
              <a href="#" className="footer-social-link"><FaLinkedinIn /></a>
              <a href="#" className="footer-social-link"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Platform</h4>
            <Link to="/courses" className="footer-link">Browse Courses</Link>
            <Link to="/courses" className="footer-link">Categories</Link>
            <Link to="/register" className="footer-link">Become a Student</Link>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Contact</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <a href="#" className="footer-link">Help Center</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">FAQ</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EduPaq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
