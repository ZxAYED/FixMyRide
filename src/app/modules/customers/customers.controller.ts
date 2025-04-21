import { Request, Response } from "express";
import CatchAsync from "../../utils/CatchAsync";
import { CustomerService } from "./customers.services";

const createCustomer =CatchAsync(async (req:Request, res:Response) => {

    const result  = await CustomerService.createCustomer(req.body)
    
    res.status(200).json({
        status: 'success',
        message:'Customer created successfully',
        data: result
    })
})
const getAllCustomers =CatchAsync(async (req:Request, res:Response) => {
    const result  = await CustomerService.getAllCustomers()

    res.status(200).json({
        status: 'success',
        message:'Customers are fetched successfully',
        data: result
    })
})
const getCustomerById =CatchAsync(async (req:Request, res:Response) => {
    const result  = await CustomerService.getCustomerById(req.params.id)

    res.status(200).json({
        status: 'success', 
        message:'Customer fetched successfully',       
        data: result
    })    
})

const updateCustomer =CatchAsync(async (req:Request, res:Response) => {
    const result  = await CustomerService.updateCustomer(req.params.id,req.body)

    res.status(200).json({
        status: 'success',
        message:'Customer updated successfully',
        data: result
    })
    })

const deleteCustomer =CatchAsync(async (req:Request, res:Response) => {
    const result  = await CustomerService.deleteCustomer(req.params.id) 

    res.status(200).json({
        status: 'success',
        message:'Customer deleted successfully',
        data: result
    })
    })
export const CustomerController = {
    createCustomer,getAllCustomers,getCustomerById,updateCustomer,deleteCustomer
}