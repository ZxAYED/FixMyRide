import { BikeRoutes } from '../modules/bikes/bikes.routes';
import { ServicesRecordRoutes } from '../modules/serviceRecord/services.routes';
import { customerRoutes } from './../modules/customers/customers.routes';
import { Router } from "express";

const router = Router()

const allRoutes =[
    {
        path:'/customers',
        route: customerRoutes
    },
    {
        path:'/bikes',
        route: BikeRoutes
    },
    {
        path:'/services',
        route: ServicesRecordRoutes
    },
]

allRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export const AllRoutes = router