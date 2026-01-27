const jwt = require("jsonwebtoken");
const users = require("../data/users");

const JWT_SECRET = "supersecretkey";

// REGISTER
function register(req, res) {
  const { email, password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters."
    });
  }

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(409).json({
      message: "User already exists."
    });
  }

  users.push({ email, password });
  return res.status(201).json({
    message: "User registered successfully!"
  });
}

// LOGIN
function login(req, res) {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Access denied."
    });
  }

  const token = jwt.sign(
    { email: user.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.json({
    message: "Welcome back!",
    token
  });
}

// PROFILE
function profile(req, res) {
  return res.json({
    message: "Protected data",
    user: req.user
  });
}

module.exports = {
  register,
  login,
  profile
};
