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
exports.StoreRepository = void 0;
const fireorm_1 = require("fireorm");
const inversify_1 = require("inversify");
const store_1 = __importDefault(require("../schemas/store"));
let StoreRepository = class StoreRepository {
    storeCollection;
    constructor() {
        this.storeCollection = (0, fireorm_1.getRepository)(store_1.default);
    }
    async create({ ...payload }) {
        const { company, slug, serviceTime, isActive, isMainStore, lineOa, info, notifySetting, questionsAnswers, bookingSetting, operator, } = payload;
        let store = new store_1.default();
        return await (0, fireorm_1.runTransaction)(async (tran) => {
            const companyTranRepository = tran.getRepository(store_1.default);
            store.slug = slug;
            store.serviceTime = serviceTime;
            store.isActive = isActive;
            store.isMainStore = isMainStore;
            store.lineOa = lineOa;
            store.info = info;
            store.notifySetting = notifySetting;
            store.questionsAnswers = questionsAnswers;
            store.bookingSetting = bookingSetting;
            store.operator = operator;
            store.company = company;
            return await companyTranRepository.create(store);
        });
    }
    async findByUuid(id) {
        const company = await this.storeCollection.findById(id);
        return company;
    }
};
StoreRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], StoreRepository);
exports.StoreRepository = StoreRepository;
//# sourceMappingURL=storeRepository.js.map