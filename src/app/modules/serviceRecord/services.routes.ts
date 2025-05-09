import { Router } from "express";
import { ServicesRecordController } from "./services.controller";

const router = Router()


router.post('/', ServicesRecordController.createServices)
router.get('/status', ServicesRecordController.serviceStatus)
router.get('/:id', ServicesRecordController.getServiceById)
router.get('/',ServicesRecordController.getAllServices)
router.put('/:id/complete', ServicesRecordController.updateService)
// sad

export const ServicesRecordRoutes = router