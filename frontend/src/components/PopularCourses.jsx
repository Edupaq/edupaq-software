import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import CourseCard from './CourseCard';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './PopularCourses.css';

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get('/courses');
        setCourses(data.slice(0, 4));
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section className="popular-courses">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Courses</h2>
          <p className="section-subtitle">
            Explore our most popular courses and start building new skills today
          </p>
        </div>
        <div className="popular-courses-grid">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
        <div className="popular-courses-action">
          <Link to="/courses" className="btn btn-secondary btn-large">
            View All Courses
            <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
