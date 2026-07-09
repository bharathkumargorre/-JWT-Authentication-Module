const { body, validationResult } = require("express-validator");

// Validation rules
const registerValidation = [
  // Name validation
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required."),

  // Email validation
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address."),

  // Password validation
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),

  // Mobile validation (optional)
  body("mobile")
    .optional()
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number must be exactly 10 digits.")
    .isNumeric()
    .withMessage("Mobile number must contain only numbers."),
];

// Check validation result
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = {
  registerValidation,
  validate,
};