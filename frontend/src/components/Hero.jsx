import { Link } from 'react-router-dom';
import { HiOutlinePlay, HiOutlineArrowRight } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <HiOutlinePlay />
            <span>Start learning today</span>
          </div>
          <h1 className="hero-title">
            Learn Without<br />
            <span className="hero-highlight">Limits</span>
          </h1>
          <p className="hero-subtitle">
            Access world-class courses taught by industry experts. Build real skills, advance your career, and learn at your own pace.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-large hero-btn-primary">
              Get Started Free
              <HiOutlineArrowRight />
            </Link>
            <Link to="/courses" className="btn btn-large hero-btn-secondary">
              Browse Courses
            </Link>
          </div>
          <div className="hero-trust">
            <div className="hero-avatars">
              <div className="hero-avatar" style={{ backgroundColor: '#4285f4' }}>J</div>
              <div className="hero-avatar" style={{ backgroundColor: '#ea4335' }}>S</div>
              <div className="hero-avatar" style={{ backgroundColor: '#34a853' }}>M</div>
              <div className="hero-avatar" style={{ backgroundColor: '#fbbc04' }}>A</div>
            </div>
            <p>Join <strong>10,000+</strong> students already learning</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card hero-card-main">
            <div className="hero-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3>200+ Courses</h3>
            <p>Expert-led programs</p>
          </div>
          <div className="hero-card hero-card-float-1">
            <div className="hero-mini-progress">
              <div className="hero-mini-bar" style={{ width: '75%' }}></div>
            </div>
            <span>75% Complete</span>
          </div>
          <div className="hero-card hero-card-float-2">
            <div className="hero-rating-stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="hero-star">&#9733;</span>
              ))}
            </div>
            <span>4.9 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
