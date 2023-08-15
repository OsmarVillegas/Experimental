import { Router } from "express";
import * as modoImpresionCtrl from "../controllers/modoImpresion.controllers";

const router = Router();

router.post('/', modoImpresionCtrl.createModoImpresionCtrl);

router.get('/', modoImpresionCtrl.findAllModoImpresionCtrl);

router.get('/:id', modoImpresionCtrl.findOneModoImpresionCtrl);

router.delete('/:id', modoImpresionCtrl.deleteModoImpresionCtrl);

router.put('/:id', modoImpresionCtrl.updateModoImpresionCtrl);

export default router;