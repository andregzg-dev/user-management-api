import jwt from "jsonwebtoken";
import users from "../data/users.js";

const JWT_SECRET = "supersecretkey";

export function login(req, res) {
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
}
