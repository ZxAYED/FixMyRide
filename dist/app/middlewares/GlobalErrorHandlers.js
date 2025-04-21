"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || err.name || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        status: 'error',
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};
exports.default = GlobalErrorHandler;
