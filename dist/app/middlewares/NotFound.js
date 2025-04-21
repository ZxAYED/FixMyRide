"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        error: {
            path: req.originalUrl,
            method: req.method,
            message: 'Path not found',
            stack: process.env.NODE_ENV === 'development' ? 'Route not found' : undefined,
        }
    });
};
exports.default = NotFound;
