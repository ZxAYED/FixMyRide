import { status } from "../../../../generated/prisma";

export interface IService {
    bikeId:string,
    serviceDate:Date,
    description:string,
    status:status,
    completionDate:Date,
}