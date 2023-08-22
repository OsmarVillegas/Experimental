import { Router } from "express";
import * as empleadosCtrl from "../controllers/empleados.controllers";

const router = Router();

router.post('/', empleadosCtrl.createEmpleados);

router.get('/', empleadosCtrl.findAllEmpleados);

router.put('/:id', empleadosCtrl.updateEmpleados);

router.delete('/:id', empleadosCtrl.deleteEmpleados);

export default router;