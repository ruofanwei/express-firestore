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
Object.defineProperty(exports, "__esModule", { value: true });
exports.operatorSchema = exports.bookingSettingSchema = exports.NotifySettingMetaSchema = exports.NotifySettingSchema = exports.QaSchema = exports.DayOffSchema = exports.lineSchema = exports.timeSchema = exports.ServiceTimesMetaSchema = exports.ServiceTimeSchema = exports.ColorSchema = exports.StoreInfoSchema = void 0;
const fireorm_1 = require("fireorm");
const abstractSchema_1 = require("./abstractSchema");
const class_validator_1 = require("class-validator");
class StoreInfoSchema {
    name;
    phone;
    address;
    manager;
    servicePhone;
    announcement;
    color;
}
exports.StoreInfoSchema = StoreInfoSchema;
class ColorSchema {
    mainColor;
    subColor;
}
exports.ColorSchema = ColorSchema;
class ServiceTimeSchema {
    monday;
    tuesday;
    wednesday;
    thursday;
    friday;
    saturday;
    sunday;
}
exports.ServiceTimeSchema = ServiceTimeSchema;
class ServiceTimesMetaSchema {
    open;
    times;
}
exports.ServiceTimesMetaSchema = ServiceTimesMetaSchema;
class timeSchema {
    startTime;
    endTime;
}
exports.timeSchema = timeSchema;
class lineSchema {
    liffId;
    channelSecret;
    channelToken;
}
exports.lineSchema = lineSchema;
class DayOffSchema {
    id;
    startDate;
    endDate;
    description;
    createdAt;
}
exports.DayOffSchema = DayOffSchema;
class QaSchema {
    question;
    answer;
}
exports.QaSchema = QaSchema;
class NotifySettingSchema {
    update;
    cancel;
    process;
}
exports.NotifySettingSchema = NotifySettingSchema;
class NotifySettingMetaSchema {
    sms;
    email;
    line;
    note;
}
exports.NotifySettingMetaSchema = NotifySettingMetaSchema;
class bookingSettingSchema {
    daysBookable;
    maxBookingCount;
    isBookingRepeatable;
    isBookingCancelable;
    isBookingEditable;
    isBookingNoPreference;
}
exports.bookingSettingSchema = bookingSettingSchema;
class operatorSchema {
    name;
    // 信箱
    email;
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], operatorSchema.prototype, "email", void 0);
exports.operatorSchema = operatorSchema;
let StoreSchema = class StoreSchema extends abstractSchema_1.AbstractSchema {
    id;
    uuid;
    storeId;
    companyId;
    slug;
    isMainStore;
    // 是否啟用
    isActive;
    // 基本資訊Å
    info;
    // 營業時間資訊
    serviceTime;
    // LINE OA 資訊
    lineOa;
    // 店休資訊
    dayOffs;
    // 問與答
    questionsAnswers;
    // 營運人員資訊
    operator;
    // 通知設定
    notifySetting;
    // 預約設定
    bookingSetting;
    // 所屬品牌 ref company uuid
    company;
    // 發出的通知 ref smsPointOrder id
    notifications;
    // 簡訊點數儲值交易 ref notification id
    smsPointOrders;
    // 簡訊剩餘點數 ref smsPoint id
    smsPoint;
    // 店家員工們的角色 ref storeUserRole id
    storeUserRoles;
    // 店家擁有多個員工 ref user uuid
    users;
};
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StoreSchema.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", NotifySettingSchema)
], StoreSchema.prototype, "notifySetting", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", bookingSettingSchema)
], StoreSchema.prototype, "bookingSetting", void 0);
StoreSchema = __decorate([
    (0, fireorm_1.Collection)('stores')
], StoreSchema);
exports.default = StoreSchema;
//# sourceMappingURL=store.js.map