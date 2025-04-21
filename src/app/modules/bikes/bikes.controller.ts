import CatchAsync from "../../utils/CatchAsync";
import { BikeService } from "./bikes.service";

const createBike =CatchAsync(async (req, res) => {
    
    const result = await BikeService.createBike(req.body);
    res.status(200).json({
        status: "success",
        message: "Bike created successfully",
        data: result,
    });
});
const getAllBikes = CatchAsync(async (req, res) => {
    const result = await BikeService.getAllBikes();
    res.status(200).json({
        status: "success",
        message: "Bikes are fetched successfully",
        data: result,
    });
}   );
const getBikeById = CatchAsync(async (req, res) => {
    const result = await BikeService.getBikeById(req.params.id);
    res.status(200).json({
        status: "success",
        message: "Bike is fetched successfully",
        data: result,
    });
});
export const BikeController = {
    createBike,
    getAllBikes,
    getBikeById,
}