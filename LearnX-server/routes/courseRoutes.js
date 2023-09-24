import express from 'express';
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from '../controllers/courseController.js';
import { isAuthenticated, authorizedAdmin } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

// Get all courses without lectures
router.route('/courses').get(getAllCourses);

// Create a new course - Only admin
router.route('/createcourse').post(isAuthenticated, authorizedAdmin, singleUpload, createCourse);

// Get course details and lectures, Delete course
router
  .route('/course/:id')
  .get(isAuthenticated, getCourseLectures)
  .post(isAuthenticated, authorizedAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizedAdmin, deleteCourse);

// Delete lecture
router.route('/lecture').delete(isAuthenticated, authorizedAdmin, deleteLecture);

export default router;
