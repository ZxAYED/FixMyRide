import { BikeRoutes } from '../modules/bikes/bikes.routes';
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
        path:'/customers',
        route: customerRoutes
    },
]

allRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export const AllRoutes = router