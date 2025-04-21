"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRoutes = void 0;
const bikes_routes_1 = require("../modules/bikes/bikes.routes");
const services_routes_1 = require("../modules/serviceRecord/services.routes");
const customers_routes_1 = require("./../modules/customers/customers.routes");
const express_1 = require("express");
const router = (0, express_1.Router)();
const allRoutes = [
    {
        path: '/customers',
        route: customers_routes_1.customerRoutes
    },
    {
        path: '/bikes',
        route: bikes_routes_1.BikeRoutes
    },
    {
        path: '/services',
        route: services_routes_1.ServicesRecordRoutes
    },
];
allRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.AllRoutes = router;
