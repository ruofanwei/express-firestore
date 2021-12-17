"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
const inversify_config_1 = __importDefault(require("../config/inversify.config"));
class StoreController {
    static async buildStore(req, res, next) {
        try {
            const companyName = req.body.companyName; // option
            /* clarify the type for companyUuid while assign value */
            let companyUuid = req.headers.companyuuid; // option
            const companyService = await inversify_config_1.default.get('CompanyService');
            /* find or create company */
            const { company, isMainStore } = await companyService.firnOrCreateCompany(companyUuid, companyName);
            return res.status(200).json({
                code: 200,
                message: '執行成功',
            });
        }
        catch (e) {
            console.log(e);
            next(e);
        }
    }
}
exports.StoreController = StoreController;
exports.default = StoreController;
//# sourceMappingURL=storeController.js.map