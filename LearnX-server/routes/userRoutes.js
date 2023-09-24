import express from 'express';
import {
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from '../controllers/userController.js';
import { authorizedAdmin, isAuthenticated } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

// Register a new user
router.route('/register').post(singleUpload, register);

// Login
router.route('/login').post(login);

// Logout
router.route('/logout').get(logout);

// Get My Profile
router.route('/me').get(isAuthenticated, getMyProfile);

// Delete My Profile
router.route('/me').delete(isAuthenticated, deleteMyProfile);

// Change My Password
router.route('/changepassword').put(isAuthenticated, changePassword);

// Update Profile
router.route('/updateprofile').put(isAuthenticated, updateProfile);

// Update Profile Picture
router.route('/updateprofilepicture').put(isAuthenticated, singleUpload, updateProfilePicture);

// Forget Password
router.route('/forgetpassword').post(forgetPassword);

// Reset Password
router.route('/resetpassword/:token').put(resetPassword);

// ADMIN ROUTES - Get all users, Update user's role, Delete user
router.route('/admin/users').get(isAuthenticated, authorizedAdmin, getAllUsers);
router.route('/admin/user/:id').put(isAuthenticated, authorizedAdmin, updateUserRole).delete(isAuthenticated, authorizedAdmin, deleteUser);

export default router;
