"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepository = void 0;
const fireorm_1 = require("fireorm");
const inversify_1 = require("inversify");
const company_1 = __importDefault(require("../schemas/company"));
let CompanyRepository = class CompanyRepository {
    companyCollection;
    constructor() {
        this.companyCollection = (0, fireorm_1.getRepository)(company_1.default);
    }
    // * integrate sequelize and fireOrm method
    async create(name) {
        let company = new company_1.default();
        return await (0, fireorm_1.runTransaction)(async (tran) => {
            const companyTranRepository = tran.getRepository(company_1.default);
            company.name = name;
            return await companyTranRepository.create(company);
        });
    }
    async findOne(id) {
        const company = await this.companyCollection.findById(id);
        return company;
    }
};
CompanyRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], CompanyRepository);
exports.CompanyRepository = CompanyRepository;
//# sourceMappingURL=companyRepository.js.map