import { prisma } from "../../shared/PrismaClient";
import { AppError } from "../../utils/AppError";
import { IBike } from "./bikes.interface";

const createBike = async (bike: IBike) => {

    const isCustomerExist = await prisma.customer.findUniqueOrThrow({
        where: {
            customerId: bike.customerId,
        },
    });
    if (!isCustomerExist) {
        throw new AppError(404,'Customer does not exist')
    }
    const result = await prisma.bike.create({
        data: bike,
    });
    return result;

}
const getAllBikes = async () => {
    const result = await prisma.bike.findMany();
    return result;
};

const getBikeById = async (id: string) => {
    const result = await prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    return result;
}
export const BikeService = {
    createBike,
    getAllBikes,
    getBikeById,
}
