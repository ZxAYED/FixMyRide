import { NextFunction, Request, Response } from "express";

const GlobalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => { 
    const statusCode = err.statusCode || 500;
    const message = err.message ||err.name ||'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        status: 'error',
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}
export default GlobalErrorHandler;