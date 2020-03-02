"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_connect_1 = require("../../models/pg-connect");
exports.getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield pg_connect_1.db.query(pg_connect_1.sql `SELECT * FROM products`);
        return products;
    }
    catch (error) { }
});
exports.createProduct = (req, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = user;
    const { title, category, category_type, description, price, location, image_id, stock, seller_id } = req.body;
});
//# sourceMappingURL=product_controller.js.map