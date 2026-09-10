import jwt from "jsonwebtoken";

export const verifyAdmin = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) return false;

  try {
    jwt.verify(authHeader.split(" ")[1], process.env.JWT_SECRET);
    return true;
  } catch {
    return false;
  }
};