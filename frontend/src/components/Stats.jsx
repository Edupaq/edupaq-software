import { HiOutlineUsers, HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineThumbUp } from 'react-icons/hi';
import './Stats.css';

const stats = [
  { icon: <HiOutlineUsers />, number: '10,000+', label: 'Active Students' },
  { icon: <HiOutlineBookOpen />, number: '200+', label: 'Courses Available' },
  { icon: <HiOutlineAcademicCap />, number: '50+', label: 'Expert Instructors' },
  { icon: <HiOutlineThumbUp />, number: '95%', label: 'Satisfaction Rate' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
