import { Login, Logout, Register, getUsers } from "../controllers/Users.js";

import express from "express";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// router.get('/users', getUsers);
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;