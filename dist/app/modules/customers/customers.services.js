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
exports.CustomerService = void 0;
const PrismaClient_1 = require("./../../shared/PrismaClient");
const createCustomer = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.customer.create({
        data: customer
    });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.customer.findMany();
    return result;
});
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield PrismaClient_1.prisma.customer.findUniqueOrThrow({
        where: { customerId: id },
    });
    return result;
});
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.prisma.customer.findUniqueOrThrow({
        where: { customerId: id },
    });
    const result = yield PrismaClient_1.prisma.customer.update({
        where: { customerId: id },
        data: data
    });
    return result;
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield PrismaClient_1.prisma.customer.findUniqueOrThrow({
        where: { customerId: id },
    });
    const result = yield PrismaClient_1.prisma.customer.delete({
        where: { customerId: id },
    });
    return result;
});
exports.CustomerService = {
    createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer
};
