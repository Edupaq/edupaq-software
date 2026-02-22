import { useState, useEffect } from 'react';
import api from '../api/axios';
import CourseCard from '../components/CourseCard';
import { HiOutlineSearch } from 'react-icons/hi';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  const categories = ['All', 'Web Development', 'Data Science', 'Mobile Development', 'Design', 'Business', 'Marketing'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get('/courses');
        setCourses(data);
        setFiltered(data);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    let result = courses;

    if (category !== 'All') {
      result = result.filter((c) => c.category === category);
    }

    if (level !== 'All') {
      result = result.filter((c) => c.level === level);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      );
    }

    setFiltered(result);
  }, [courses, category, level, search]);

  if (loading) {
    return (
      <div className="courses-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <div className="courses-header-section">
        <div className="container">
          <h1>Explore Our Courses</h1>
          <p>Discover courses that match your goals and start learning today</p>
        </div>
      </div>

      <div className="courses-container container">
        <div className="courses-filters">
          <div className="courses-search">
            <HiOutlineSearch className="courses-search-icon" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="courses-filter-group">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="courses-results-info">
          <span>{filtered.length} course{filtered.length !== 1 ? 's' : ''} found</span>
        </div>

        {filtered.length > 0 ? (
          <div className="courses-grid">
            {filtered.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="courses-empty">
            <h3>No courses found</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
