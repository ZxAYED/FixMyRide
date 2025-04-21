import { Router } from "express";
import { CustomerController } from "./customers.controller";

const router = Router()

router.post('/',CustomerController.createCustomer)
router.get('/',CustomerController.getAllCustomers)
router.get('/:id',CustomerController.getCustomerById)
router.put('/:id',CustomerController.updateCustomer)
router.delete('/:id',CustomerController.deleteCustomer)


export const customerRoutes = router