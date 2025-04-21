import { Router } from "express";
import { BikeController } from "./bikes.controller";


const router = Router()

router.post('/',BikeController.createBike)
router.get('/',BikeController.getAllBikes)
router.get('/:id',BikeController.getBikeById)


export const BikeRoutes = router