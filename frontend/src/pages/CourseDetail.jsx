import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';
import {
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlineUser,
  HiStar,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlinePlay,
  HiOutlineCheckCircle,
} from 'react-icons/hi';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated, updateUser } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await api.get(`/courses/${id}`);
        setCourse(data);
      } catch (err) {
        console.error('Failed to fetch course:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  useEffect(() => {
    if (user?.enrolledCourses && id) {
      setEnrolled(user.enrolledCourses.includes(id));
    }
  }, [user, id]);

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate('/register');
      return;
    }

    setEnrolling(true);
    try {
      const { data } = await api.post(`/courses/${id}/enroll`);
      setEnrolled(true);
      updateUser({ enrolledCourses: data.enrolledCourses });
    } catch (err) {
      console.error('Enrollment failed:', err);
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="course-detail-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="course-detail-notfound">
        <h2>Course not found</h2>
        <p>The course you're looking for doesn't exist.</p>
      </div>
    );
  }

  const learningPoints = [
    'Understand core concepts and fundamentals',
    'Build real-world projects from scratch',
    'Apply best practices and design patterns',
    'Debug and troubleshoot common issues',
    'Deploy projects to production',
    'Write clean, maintainable code',
  ];

  const curriculum = [
    { title: 'Getting Started & Setup', lessons: Math.ceil(course.lessons * 0.1) },
    { title: 'Core Fundamentals', lessons: Math.ceil(course.lessons * 0.2) },
    { title: 'Intermediate Concepts', lessons: Math.ceil(course.lessons * 0.2) },
    { title: 'Advanced Topics', lessons: Math.ceil(course.lessons * 0.2) },
    { title: 'Real-World Projects', lessons: Math.ceil(course.lessons * 0.2) },
    { title: 'Final Review & Next Steps', lessons: Math.ceil(course.lessons * 0.1) },
  ];

  return (
    <div className="course-detail">
      <div className="course-detail-banner">
        <div className="container">
          <div className="course-detail-banner-content">
            <span className="course-detail-category">{course.category}</span>
            <h1>{course.title}</h1>
            <p className="course-detail-desc-short">{course.description.slice(0, 150)}...</p>
            <div className="course-detail-meta-row">
              <div className="course-detail-meta-item">
                <HiOutlineUser />
                <span>{course.instructor}</span>
              </div>
              <div className="course-detail-meta-item">
                <HiStar className="star-icon" />
                <span>{course.rating} rating</span>
              </div>
              <div className="course-detail-meta-item">
                <HiOutlineUsers />
                <span>{course.students.toLocaleString()} students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-detail-body container">
        <div className="course-detail-main">
          <section className="course-detail-section">
            <h2>About This Course</h2>
            <p>{course.description}</p>
          </section>

          <section className="course-detail-section">
            <h2>What You'll Learn</h2>
            <div className="course-detail-learn-grid">
              {learningPoints.map((point, i) => (
                <div key={i} className="course-detail-learn-item">
                  <HiOutlineCheckCircle className="learn-check" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="course-detail-section">
            <h2>Course Curriculum</h2>
            <div className="course-detail-curriculum">
              {curriculum.map((section, i) => (
                <div key={i} className="curriculum-item">
                  <div className="curriculum-item-left">
                    <HiOutlinePlay className="curriculum-icon" />
                    <div>
                      <h4>Section {i + 1}: {section.title}</h4>
                      <span>{section.lessons} lessons</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="course-detail-sidebar">
          <div className="course-detail-sidebar-card">
            <div className="sidebar-image">
              <img src={course.thumbnail} alt={course.title} />
            </div>
            <div className="sidebar-content">
              <div className="sidebar-price">
                {course.price === 0 ? 'Free' : `$${course.price}`}
              </div>
              <button
                className={`btn ${enrolled ? 'btn-enrolled' : 'btn-primary'} sidebar-enroll`}
                onClick={handleEnroll}
                disabled={enrolled || enrolling}
              >
                {enrolled ? 'Enrolled!' : enrolling ? 'Enrolling...' : isAuthenticated ? 'Enroll Now' : 'Sign Up to Enroll'}
              </button>
              <div className="sidebar-meta">
                <div className="sidebar-meta-item">
                  <HiOutlineClock />
                  <span>{course.duration}</span>
                </div>
                <div className="sidebar-meta-item">
                  <HiOutlineBookOpen />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="sidebar-meta-item">
                  <HiOutlineChartBar />
                  <span>{course.level}</span>
                </div>
                <div className="sidebar-meta-item">
                  <HiOutlineUsers />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
