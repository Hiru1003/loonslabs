const express = require("express");
const router = express.Router();

const { login, register, dashboard, getAllUsers } = require("../controllers/user");
const authMiddleware = require('../middleware/auth')

router.post("/login", login); // Route for user login
router.post("/register", register); // Route for user registration
router.get("/dashboard", authMiddleware, dashboard); // Route to access the dashboard (requires authentication)
router.get("/users", getAllUsers); // Route to get all users


module.exports = router;