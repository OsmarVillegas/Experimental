import { Router } from "express";
import * as preparacionAcademicaCtrl from "../controllers/preparacionAcademica.controllers";

const router = Router();
import { authJwt } from "../middlewares";

router.post('/', preparacionAcademicaCtrl.createPreparacionAcademicaCtrl);

router.get('/', preparacionAcademicaCtrl.findAllPreparacionAcademicaCtrl);

router.get('/:id', preparacionAcademicaCtrl.findOnePreparacionAcademicaCtrl);

router.delete('/:id', preparacionAcademicaCtrl.deletePreparacionAcademicaCtrl);

router.put('/:id', preparacionAcademicaCtrl.updatePreparacionAcademicaCtrl);


// router.post('/', datosGeneralesCtrl.createDatosGenerales);

// router.get('/', datosGeneralesCtrl.findAllDatosGenerales);

// router.get('/:id', datosGeneralesCtrl.findOneDatosGenerales);

// router.delete('/:id', authJwt.verifyToken, datosGeneralesCtrl.deleteDatosGenerales);

// router.put('/:id', authJwt.verifyToken, datosGeneralesCtrl.updateDatosGenerales);



export default router;