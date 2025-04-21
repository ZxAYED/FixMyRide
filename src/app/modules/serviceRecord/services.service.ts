import { prisma } from "../../shared/PrismaClient";
import { AppError } from "../../utils/AppError";
import { IService } from "./services.interface";

const createServiceRecord = async (service: IService) => {

    const result = await prisma.serviceRecord.create({
        data: service,
    })
    return result;
}

const getAllServices = async () => {
    const result = await prisma.serviceRecord.findMany();
    return result;
};
const getServiceById = async (id: string) => {
    const result = await prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
}

const updateService = async (id: string, service: IService) => {
 
    const isServiceExist = await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    if (!isServiceExist) { 
         throw new AppError(404,'Service Record does not exist')
    }

    service.completionDate = service.completionDate || new Date();
    const result = await prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: service,
    });
    return result;
}

const servicesStatus =async () => { 
    
    const result  = await prisma.serviceRecord.findMany({
        where :{
              AND:[{
                   
                    OR:[
                        {status:'pending'},
                        {status:'in_progress'},
                    ],
                    serviceDate: {
                        lt:new Date( Date.now() -7* 24 * 60 * 60 * 1000)
                    }
                   }
                
                ]
            }
        
     })
return result
}

export const ServicesRecordService = {
    createServiceRecord, getServiceById, getAllServices, updateService,servicesStatus
}