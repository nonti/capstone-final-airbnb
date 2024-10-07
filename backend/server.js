import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import {errorHandler, notFound} from './middlewares/error.middleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes.js';

connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(cookieParser());
app.use(bodyParser.json());

app.post('/signup', userRouter);
app.post('/signin', userRouter);
app.get('/profile', userRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));