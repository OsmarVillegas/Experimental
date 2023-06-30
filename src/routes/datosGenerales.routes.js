import { Router } from "express";
import * as datosGeneralesCtrl from "../controllers/datosGenerales.controllers";

const router= Router();
import { authJwt } from "../middlewares";

router.post('/', datosGeneralesCtrl.createDatosGenerales);

router.get('/', datosGeneralesCtrl.findAllDatosGenerales);

router.get('/:id', datosGeneralesCtrl.findOneDatosGenerales);

router.delete('/:id', datosGeneralesCtrl.deleteDatosGenerales);

router.put('/:id', datosGeneralesCtrl.updateDatosGenerales);


// router.post('/', datosGeneralesCtrl.createDatosGenerales);

// router.get('/', datosGeneralesCtrl.findAllDatosGenerales);

// router.get('/:id', datosGeneralesCtrl.findOneDatosGenerales);

// router.delete('/:id', authJwt.verifyToken, datosGeneralesCtrl.deleteDatosGenerales);

// router.put('/:id', authJwt.verifyToken, datosGeneralesCtrl.updateDatosGenerales);



export default router;