import express from 'express';
import * as user from '../controllers/user.js'

const router = express.Router();

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/logout', user.logout)

export default router;