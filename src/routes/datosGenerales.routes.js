import { Router } from "express";
import * as datosGeneralesCtrl from "../controllers/datosGenerales.controllers";

const router= Router();

router.post('/', datosGeneralesCtrl.createDatosGenerales);

router.get('/', datosGeneralesCtrl.findAllDatosGenerales);

router.get('/:id', datosGeneralesCtrl.findOneDatosGenerales);

router.delete('/:id', datosGeneralesCtrl.deleteDatosGenerales);

router.put('/:id', datosGeneralesCtrl.updateDatosGenerales);


export default router;