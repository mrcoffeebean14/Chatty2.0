import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js'
import chatRoutes from './routes/chat.js'
import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
    connectDB();
})