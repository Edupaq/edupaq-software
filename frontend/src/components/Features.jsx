import { HiOutlineAcademicCap, HiOutlineGlobeAlt, HiOutlineBadgeCheck, HiOutlineUserGroup } from 'react-icons/hi';
import './Features.css';

const features = [
  {
    icon: <HiOutlineAcademicCap />,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of real-world experience in their fields.',
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: 'Flexible Learning',
    description: 'Study at your own pace, anytime and anywhere. Access courses on any device.',
  },
  {
    icon: <HiOutlineBadgeCheck />,
    title: 'Certified Courses',
    description: 'Earn certificates upon completion to showcase your skills to employers.',
  },
  {
    icon: <HiOutlineUserGroup />,
    title: 'Community Support',
    description: 'Join a thriving community of learners and get help whenever you need it.',
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose EduPaq?</h2>
          <p className="section-subtitle">
            We provide the tools and resources you need to succeed in your learning journey
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
