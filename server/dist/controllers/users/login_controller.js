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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_connect_1 = require("../../models/pg-connect");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const validations_1 = require("../../utils/validations");
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const error = validations_1.loginValidation(email, password);
    if (error.email)
        return res.status(404).json({ error: error.email });
    if (error.password)
        return res.status(404).json({ error: error.password });
    let [user] = yield pg_connect_1.db.query(pg_connect_1.sql `SELECT email, password FROM users`);
    console.log(user);
    if (!user)
        return res.status(404).json({ error: "User have not register" });
    const validPassword = yield bcryptjs_1.default.compare(password, user.password);
});
//# sourceMappingURL=login_controller.js.map