import { Router } from "express";
import * as preparacionAcademicaCtrl from "../controllers/preparacionAcademica.controllers";

const router = Router();

router.post('/', preparacionAcademicaCtrl.createPreparacionAcademicaCtrl);

router.get('/', preparacionAcademicaCtrl.findAllPreparacionAcademicaCtrl);

router.get('/:id', preparacionAcademicaCtrl.findOnePreparacionAcademicaCtrl);

router.delete('/:id', preparacionAcademicaCtrl.deletePreparacionAcademicaCtrl);

router.put('/:id', preparacionAcademicaCtrl.updatePreparacionAcademicaCtrl);

export default router;