import { prisma } from './../../shared/PrismaClient';
import { ICustomer } from "./customers.interface";
import { AppError } from "../../utils/AppError";
const createCustomer = async (customer: ICustomer ) => {
    const result = await prisma.customer.create({
        data:customer
    })
    return result
}
const getAllCustomers = async () => { 
    const result = await prisma.customer.findMany()
    return result
}
const getCustomerById = async (id: string) => {  
    const result = await prisma.customer.findUnique({
        where: { customerId: id },
    })
    if(!result){
        throw new AppError(404,'Customer not found')
    }
    return result
}
const updateCustomer = async (id: string, data: ICustomer) => {
    await prisma.customer.findUniqueOrThrow({
        where: { customerId: id },
    })    
    const result = await prisma.customer.update({
        where: { customerId: id },
        data: data
    })
    return result
}
const deleteCustomer = async (id: string) => {
    await prisma.customer.findUniqueOrThrow({
        where: { customerId: id },
    })
    const result = await prisma.customer.delete({
        where: { customerId: id },
    })
    return result
}


export const CustomerService = {
    createCustomer,getAllCustomers,getCustomerById,updateCustomer,deleteCustomer
}