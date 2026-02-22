import { Link } from 'react-router-dom';
import { HiOutlineClock, HiOutlineBookOpen, HiOutlineUser, HiStar } from 'react-icons/hi';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const levelClass = course.level.toLowerCase();

  return (
    <Link to={`/courses/${course._id}`} className="course-card">
      <div className="course-card-image">
        <img src={course.thumbnail} alt={course.title} />
        <span className="course-card-category">{course.category}</span>
      </div>
      <div className="course-card-content">
        <div className="course-card-level-row">
          <span className={`course-card-level ${levelClass}`}>{course.level}</span>
          <div className="course-card-rating">
            <HiStar className="course-card-star" />
            <span>{course.rating}</span>
          </div>
        </div>
        <h3 className="course-card-title">{course.title}</h3>
        <div className="course-card-instructor">
          <HiOutlineUser />
          <span>{course.instructor}</span>
        </div>
        <div className="course-card-meta">
          <div className="course-card-meta-item">
            <HiOutlineClock />
            <span>{course.duration}</span>
          </div>
          <div className="course-card-meta-item">
            <HiOutlineBookOpen />
            <span>{course.lessons} lessons</span>
          </div>
        </div>
        <div className="course-card-footer">
          <span className="course-card-students">{course.students.toLocaleString()} students</span>
          <span className="course-card-price">
            {course.price === 0 ? 'Free' : `$${course.price}`}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
