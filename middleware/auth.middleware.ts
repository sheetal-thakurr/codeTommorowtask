import  {  NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export const jwtAuth = (req: any, res: any, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(403).json({ message: 'Invalid token.' });
    }
  };