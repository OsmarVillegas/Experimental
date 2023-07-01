import { Router } from "express";
import * as cursosCtrl from "../controllers/cursos.controllers";

const router = Router();
import { authJwt } from "../middlewares";

router.post('/', cursosCtrl.createCursos);

router.get('/', cursosCtrl.findAllCursos);

router.get('/:id', cursosCtrl.findOneCursos);

router.delete('/:id', cursosCtrl.deleteCursos);

router.put('/:id', cursosCtrl.updateCursos);


// router.post('/', datosGeneralesCtrl.createDatosGenerales);

// router.get('/', datosGeneralesCtrl.findAllDatosGenerales);

// router.get('/:id', datosGeneralesCtrl.findOneDatosGenerales);

// router.delete('/:id', authJwt.verifyToken, datosGeneralesCtrl.deleteDatosGenerales);

// router.put('/:id', authJwt.verifyToken, datosGeneralesCtrl.updateDatosGenerales);



export default router;