import CatchAsync from "../../utils/CatchAsync";
import { ServicesRecordService } from "./services.service";

const createServices= CatchAsync(async (req, res) => { 
    const result = await ServicesRecordService.createServiceRecord(req.body);
    res.status(201).json({
        status: "success",
        message: "Service record created successfully",
        data: result
    })
})

const getAllServices = CatchAsync(async (req, res) => {
    const result = await ServicesRecordService.getAllServices();
    res.status(200).json({
        status: "success",
        message: "Service records fetched successfully",
        data: result
    })
})
const getServiceById = CatchAsync(async (req, res) => {
    const result = await ServicesRecordService.getServiceById(req.params.id);
    res.status(200).json({
        status: "success",
        message: "Service record fetched successfully",
        data: result
    })
})

const updateService = CatchAsync(async (req, res) => {
    const result = await ServicesRecordService.updateService(req.params.id, req.body);
    res.status(200).json({
        status: "success",
        message: "Service record updated successfully",
        data: result
    })
})
const serviceStatus = CatchAsync(async (req, res) => {
    const result = await ServicesRecordService.servicesStatus();
    res.status(200).json({
        status: "success",
        message: "Overdue or pending services fetched successfully",
        data: result
    })
})

export const ServicesRecordController = {
    createServices,
    getAllServices,
    getServiceById,
    updateService,serviceStatus
}