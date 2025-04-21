"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./app/routes");
const GlobalErrorHandlers_1 = __importDefault(require("./app/middlewares/GlobalErrorHandlers"));
const NotFound_1 = __importDefault(require("./app/middlewares/NotFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.send('Kela Mela shara bela!');
});
app.use('/api', routes_1.AllRoutes);
app.use(GlobalErrorHandlers_1.default);
app.use(NotFound_1.default);
exports.default = app;
