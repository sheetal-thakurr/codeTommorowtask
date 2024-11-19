import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { router } from './routes';
import  dotenv  from "dotenv";
dotenv.config();
declare global {
  var prisma: PrismaClient | undefined;
}

global.prisma = global.prisma || new PrismaClient();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

