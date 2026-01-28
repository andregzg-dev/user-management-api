import express from "express";
import jwt from "jsonwebtoken";
import users from "../data/users.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();
const JWT_SECRET = "supersecretkey";

/* REGISTER */
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ email, password });
  res.status(201).json({ message: "User registered successfully" });
});

/* LOGIN */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email: user.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

/* PROFILE (PROTECTED) */
router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Protected data",
    user: req.user
  });
});

export default router;
