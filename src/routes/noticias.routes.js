import { Router } from "express";
import * as noticiasCtrl from "../controllers/noticias.controllers";

const router= Router();
import { authJwt } from "../middlewares";


router.post('/', noticiasCtrl.createNoticias);

router.get('/', noticiasCtrl.findAllNoticias);

router.get('/:id',noticiasCtrl.findOneNoticia);

router.delete('/:id', noticiasCtrl.deleteNoticia);

router.put('/:id', noticiasCtrl.updateNoticia);


// router.post('/', authJwt.verifyToken, noticiasCtrl.createNoticias);

// router.get('/', noticiasCtrl.findAllNoticias);

// router.get('/:id',noticiasCtrl.findOneNoticia);

// router.delete('/:id', authJwt.verifyToken, noticiasCtrl.deleteNoticia);

// router.put('/:id', authJwt.verifyToken, noticiasCtrl.updateNoticia);


export default router;