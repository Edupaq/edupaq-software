import { HiStar } from 'react-icons/hi';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Jessica Williams',
    role: 'Frontend Developer',
    text: 'EduPaq completely transformed my career. The web development bootcamp gave me the skills and confidence to land my dream job. The instructors are incredibly knowledgeable and supportive.',
    rating: 5,
  },
  {
    name: 'David Okonkwo',
    role: 'Data Analyst',
    text: 'The Data Science course was exactly what I needed. The hands-on projects and real-world examples made complex concepts easy to understand. I highly recommend EduPaq to anyone looking to upskill.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'UX Designer',
    text: 'The design courses on EduPaq are top-notch. I went from knowing nothing about UI/UX to creating professional designs. The community support is amazing and the content is always up to date.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Hear from our community of learners who have transformed their careers
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="testimonial-star" />
                ))}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
