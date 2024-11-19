
import jwt from 'jsonwebtoken';
const admin_email = process.env.ADMIN_EMAIL;
const admin_password = process.env.ADMIN_PASSWORD;
const jwt_expiry = process.env.EXPIRES_IN;

export const login = async (req: any, res:any) => {
  
  const { email, password } = req.body;
  if (email === admin_email  && password === admin_password) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET || 'default-secret', { expiresIn: jwt_expiry });
    return res.status(200).json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials.' });
};
