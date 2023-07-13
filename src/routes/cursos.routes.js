import { Router } from "express";
import * as cursosCtrl from "../controllers/cursos.controllers";

const router = Router();

router.post('/', cursosCtrl.createCursos);

router.get('/', cursosCtrl.findAllCursos);

router.get('/:id', cursosCtrl.findOneCursos);

router.delete('/:id', cursosCtrl.deleteCursos);

router.put('/:id', cursosCtrl.updateCursos);

export default router;