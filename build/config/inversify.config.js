"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const companyService_1 = require("../services/companyService");
const storeService_1 = require("../services/storeService");
const companyRepository_1 = require("../repositories/companyRepository");
const storeRepository_1 = require("../repositories/storeRepository");
const container = new inversify_1.Container();
// Services
container.bind('CompanyService').to(companyService_1.CompanyService);
container.bind('StoreService').to(storeService_1.StoreService);
// Repositories
container.bind('CompanyRepository').to(companyRepository_1.CompanyRepository);
container.bind('StoreRepository').to(storeRepository_1.StoreRepository);
exports.default = container;
//# sourceMappingURL=inversify.config.js.map