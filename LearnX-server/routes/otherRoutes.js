import express from 'express';
import {
  contact,
  courseRequest,
} from '../controllers/otherController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// CONTACT FORM
router.route('/contact').post(contact);

// COURSE REQUEST FORM
router.route('/courserequest').post(courseRequest);

export default router;
