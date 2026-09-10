import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) return res.status(400).json({ error: "Password required" });

    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const secret = process.env.JWT_SECRET || "default_spidey_fallback_secret_key_123";
    const token = jwt.sign({ role: "admin" }, secret, { expiresIn: "6h" });

    return res.status(200).json({ token });
  } catch (error) {
    console.error("Admin Login Serverless Error:", error);
    return res.status(500).json({ error: "JWT Generation / Server error" });
  }
};