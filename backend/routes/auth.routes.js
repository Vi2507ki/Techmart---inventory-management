// ============================================================
// routes/auth.routes.js
// ============================================================

const router = require("express").Router();
const { register, login, getMe } = require("../controllers/auth.controller");
const { protect } = require("../middleware/auth.middleware");

router.post("/register", register);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
