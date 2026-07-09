const express = require("express");
const router = express.Router();

// Controllers
const {
  register,
  login,
  updateProfile,
  changePassword,
  deleteAccount,
} = require("../controllers/authController");

// JWT Middleware
const verifyToken = require("../middleware/authMiddleware");

// Validation
const {
  registerValidation,
  validate,
} = require("../validation/registerValidation");

/* =====================================================
   PUBLIC ROUTES
===================================================== */
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     responses:
 *       201:
 *         description: User registered successfully
 */
// Register User
router.post(
  "/register",
  registerValidation,
  validate,
  register
);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Login successful
 */
// Login User
router.post("/login", login);

/* =====================================================
   PROTECTED ROUTES
===================================================== */
/**
 * @swagger
 * /api/auth/profile:
 *   get:
 *     summary: Get Logged-in User
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
// Get Logged-in User Profile
router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome! You have accessed a protected route.",
    user: req.user,
  });
});
/**
 * @swagger
 * /api/auth/profile:
 *   put:
 *     summary: Update logged-in user's profile
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile updated successfully
 */
// Update Logged-in User Profile
router.put("/profile", verifyToken, updateProfile);
/**
 * @swagger
 * /api/auth/change-password:
 *   put:
 *     summary: Change user password
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Password changed successfully
 */
// Change Password
router.put("/change-password", verifyToken, changePassword);
/**
 * @swagger
 * /api/auth/delete-account:
 *   delete:
 *     summary: Delete logged-in user's account
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Account deleted successfully
 */
router.delete(
  "/delete-account",
  verifyToken,
  deleteAccount
);

module.exports = router;