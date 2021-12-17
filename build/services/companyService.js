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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const companyRepository_1 = require("../repositories/companyRepository");
const inversify_1 = require("inversify");
let CompanyService = class CompanyService {
    companyRepository;
    //private companyRepository: CompanyRepository;
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
        this.companyRepository = new companyRepository_1.CompanyRepository();
    }
    async firnOrCreateCompany(companyUuid, companyName) {
        try {
            let company;
            let isMainStore = false;
            /* find or create company by uuid */
            if (companyUuid) {
                company = await this.companyRepository.findOne(companyName);
            }
            else {
                company = await this.companyRepository.create(companyName);
                isMainStore = true;
            }
            return { company, isMainStore };
        }
        catch (error) {
            throw error;
        }
    }
};
CompanyService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('CompanyRepository')),
    __metadata("design:paramtypes", [companyRepository_1.CompanyRepository])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=companyService.js.map