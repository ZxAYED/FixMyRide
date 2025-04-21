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
exports.ServicesRecordController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const services_service_1 = require("./services.service");
const createServices = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesRecordService.createServiceRecord(req.body);
    res.status(200).json({
        status: "success",
        message: "Service record created successfully",
        data: result
    });
}));
const getAllServices = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesRecordService.getAllServices();
    res.status(200).json({
        status: "success",
        message: "Service records fetched successfully",
        data: result
    });
}));
const getServiceById = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesRecordService.getServiceById(req.params.id);
    res.status(200).json({
        status: "success",
        message: "Service record fetched successfully",
        data: result
    });
}));
const updateService = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesRecordService.updateService(req.params.id, req.body);
    res.status(200).json({
        status: "success",
        message: "Service record updated successfully",
        data: result
    });
}));
const serviceStatus = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.ServicesRecordService.servicesStatus();
    res.status(200).json({
        status: "success",
        message: "Overdue or pending services fetched successfully",
        data: result
    });
}));
exports.ServicesRecordController = {
    createServices,
    getAllServices,
    getServiceById,
    updateService, serviceStatus
};
