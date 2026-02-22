import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
  },
  instructor: {
    type: String,
    required: [true, 'Instructor name is required'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Thumbnail URL is required'],
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
  },
  lessons: {
    type: Number,
    required: [true, 'Number of lessons is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Web Development', 'Data Science', 'Mobile Development', 'Design', 'Business', 'Marketing'],
  },
  level: {
    type: String,
    required: [true, 'Level is required'],
    enum: ['Beginner', 'Intermediate', 'Advanced'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  students: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
