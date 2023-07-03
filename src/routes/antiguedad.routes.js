import { Router } from "express";
import * as antiguedadCtrl from "../controllers/antiguedad.controllers";

const router= Router();
import { authJwt } from "../middlewares";

router.post('/', antiguedadCtrl.createAntiguedad);

router.get('/', antiguedadCtrl.findAllAntiguedad);

router.put('/:id', antiguedadCtrl.updateAntiguedad);

// router.post('/', authJwt.verifyToken,eventosCtrl.createEventos);

// router.get('/', eventosCtrl.findAllEventos);

// router.get('/:id',eventosCtrl.findOneEvento);

// router.delete('/:id', authJwt.verifyToken,eventosCtrl.deleteEvento);

// router.put('/:id', authJwt.verifyToken,eventosCtrl.updateEvento);


export default router;