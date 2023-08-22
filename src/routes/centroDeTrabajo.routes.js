import { Router } from "express";
import * as centroDeTrabajoCtrl from "../controllers/centroDeTrabajo.controllers";

const router = Router();

router.post('/', centroDeTrabajoCtrl.createCentroDeTrabajo);

router.get('/', centroDeTrabajoCtrl.findAllCentroDeTrabajo);

router.put('/:id', centroDeTrabajoCtrl.updateCentroDeTrabajo);

router.delete('/:id', centroDeTrabajoCtrl.deleteCentroDeTrabajo);

export default router;