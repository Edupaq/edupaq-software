import express from 'express';
import Course from '../models/Course.js';
import User from '../models/User.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// GET /api/courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/courses/:id
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/courses/:id/enroll
router.post('/:id/enroll', protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const user = await User.findById(req.user);
    if (user.enrolledCourses.includes(req.params.id)) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    user.enrolledCourses.push(req.params.id);
    await user.save();

    res.json({ message: 'Enrolled successfully', enrolledCourses: user.enrolledCourses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/courses/enrollments/me
router.get('/enrollments/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user).populate('enrolledCourses');
    res.json(user.enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
