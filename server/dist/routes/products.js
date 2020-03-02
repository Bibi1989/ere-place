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
const express_1 = require("express");
const router = express_1.Router();
const product_controller_1 = require("../controllers/products/product_controller");
const authentication_1 = require("../controllers/users/authentication");
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_controller_1.getAllProducts();
    return res.json({ products });
}));
router.post("/products", authentication_1.Auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [user] = req.user['user'];
    const products = yield product_controller_1.createProduct(req, user);
    return res.json({ products });
}));
exports.default = router;
//# sourceMappingURL=products.js.map