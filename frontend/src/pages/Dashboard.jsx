import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';
import CourseCard from '../components/CourseCard';
import { HiOutlineMail, HiOutlineCalendar, HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineTrendingUp } from 'react-icons/hi';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const { data } = await api.get('/courses/enrollments/me');
        setEnrolledCourses(data);
      } catch (err) {
        console.error('Failed to fetch enrollments:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEnrollments();
  }, []);

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : 'Recently';

  return (
    <div className="dashboard">
      <div className="dashboard-container container">
        <div className="dashboard-welcome">
          <h1>Welcome back, {user?.name?.split(' ')[0]}!</h1>
          <p>Continue your learning journey where you left off</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card profile-card">
            <div className="profile-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h3>{user?.name}</h3>
            <div className="profile-info">
              <div className="profile-info-item">
                <HiOutlineMail />
                <span>{user?.email}</span>
              </div>
              <div className="profile-info-item">
                <HiOutlineCalendar />
                <span>Member since {memberSince}</span>
              </div>
            </div>
          </div>

          <div className="dashboard-stats-grid">
            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon">
                <HiOutlineBookOpen />
              </div>
              <div className="dashboard-stat-info">
                <span className="dashboard-stat-number">{enrolledCourses.length}</span>
                <span className="dashboard-stat-label">Enrolled Courses</span>
              </div>
            </div>
            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon">
                <HiOutlineAcademicCap />
              </div>
              <div className="dashboard-stat-info">
                <span className="dashboard-stat-number">0</span>
                <span className="dashboard-stat-label">Completed</span>
              </div>
            </div>
            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon">
                <HiOutlineTrendingUp />
              </div>
              <div className="dashboard-stat-info">
                <span className="dashboard-stat-number">0h</span>
                <span className="dashboard-stat-label">Learning Time</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-courses-section">
          <h2>My Courses</h2>
          {loading ? (
            <div className="dashboard-loading">
              <div className="spinner"></div>
            </div>
          ) : enrolledCourses.length > 0 ? (
            <div className="dashboard-courses-grid">
              {enrolledCourses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          ) : (
            <div className="dashboard-empty">
              <HiOutlineBookOpen className="dashboard-empty-icon" />
              <h3>No courses yet</h3>
              <p>You haven't enrolled in any courses yet. Browse our catalog to find something you'd love to learn.</p>
              <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
