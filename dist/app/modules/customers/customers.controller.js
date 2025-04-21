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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const customers_services_1 = require("./customers.services");
const createCustomer = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customers_services_1.CustomerService.createCustomer(req.body);
    res.status(200).json({
        status: 'success',
        message: 'Customer created successfully',
        data: result
    });
}));
const getAllCustomers = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customers_services_1.CustomerService.getAllCustomers();
    res.status(200).json({
        status: 'success',
        message: 'Customers are fetched successfully',
        data: result
    });
}));
const getCustomerById = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customers_services_1.CustomerService.getCustomerById(req.params.id);
    res.status(200).json({
        status: 'success',
        message: 'Customer fetched successfully',
        data: result
    });
}));
const updateCustomer = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customers_services_1.CustomerService.updateCustomer(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        message: 'Customer updated successfully',
        data: result
    });
}));
const deleteCustomer = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customers_services_1.CustomerService.deleteCustomer(req.params.id);
    res.status(200).json({
        status: 'success',
        message: 'Customer deleted successfully',
        data: result
    });
}));
exports.CustomerController = {
    createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer
};
