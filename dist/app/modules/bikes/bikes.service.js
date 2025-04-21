"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeService = void 0;
const PrismaClient_1 = require("../../shared/PrismaClient");
const AppError_1 = require("../../utils/AppError");
const createBike = (bike) => __awaiter(void 0, void 0, void 0, function* () {
    const isCustomerExist = yield PrismaClient_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId: bike.customerId,
        },
    });
    if (!isCustomerExist) {
        throw new AppError_1.AppError(404, 'Customer does not exist');
    }
    const result = yield PrismaClient_1.prisma.bike.create({
        data: bike,
    });
    return result;
});
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.bike.findMany();
    return result;
});
const getBikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    return result;
});
exports.BikeService = {
    createBike,
    getAllBikes,
    getBikeById,
};
