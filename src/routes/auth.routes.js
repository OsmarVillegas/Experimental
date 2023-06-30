import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controller'
import { authJwt } from "../middlewares";

router.post('/signup', [authJwt.verifyToken, authJwt.isAdmin], authCtrl.signup);
router.post('/signin', authCtrl.signin);

export default router;