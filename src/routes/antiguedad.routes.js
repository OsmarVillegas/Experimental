import { Router } from "express";
import * as antiguedadCtrl from "../controllers/antiguedad.controllers";

const router= Router();

router.post('/', antiguedadCtrl.createAntiguedad);

router.get('/', antiguedadCtrl.findAllAntiguedad);

router.put('/:id', antiguedadCtrl.updateAntiguedad);

router.delete('/:id', antiguedadCtrl.deleteAntiguedad);

export default router;