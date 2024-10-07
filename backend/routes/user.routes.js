import express from 'express';
import { signup, signin, profile, signout} from '../controllers/user.controller.js';

const router = express.Router();


router.post('/signup',signup);
router.post('/signin',signin);
router.get('/profile', profile);
router.post('/signout', signout);

export default router;