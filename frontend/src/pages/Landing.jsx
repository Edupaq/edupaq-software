import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import PopularCourses from '../components/PopularCourses';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <Hero />
      <Features />
      <Stats />
      <PopularCourses />
      <Testimonials />
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>Join thousands of students and start building the skills you need for the future.</p>
            <Link to="/register" className="btn btn-large cta-btn">
              Get Started Free
              <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
