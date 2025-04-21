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
exports.ServicesRecordService = void 0;
const PrismaClient_1 = require("../../shared/PrismaClient");
const AppError_1 = require("../../utils/AppError");
const createServiceRecord = (service) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.serviceRecord.create({
        data: service,
    });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.serviceRecord.findMany();
    return result;
});
const getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const updateService = (id, service) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExist = yield PrismaClient_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    if (!isServiceExist) {
        throw new AppError_1.AppError(404, 'Service Record does not exist');
    }
    service.completionDate = service.completionDate || new Date();
    const result = yield PrismaClient_1.prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: service,
    });
    return result;
});
const servicesStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.serviceRecord.findMany({
        where: {
            AND: [{
                    OR: [
                        { status: 'pending' },
                        { status: 'in_progress' },
                    ],
                    serviceDate: {
                        lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            ]
        }
    });
    return result;
});
exports.ServicesRecordService = {
    createServiceRecord, getServiceById, getAllServices, updateService, servicesStatus
};
