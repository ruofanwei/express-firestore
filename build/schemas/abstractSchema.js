"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSchema = void 0;
const firestore_1 = require("firebase-admin/firestore");
class AbstractSchema {
    createdAt;
    updatedAt;
    deletedAt;
    constructor() {
        this.createdAt = firestore_1.Timestamp.now();
        this.updatedAt = firestore_1.Timestamp.now();
        this.deletedAt = null;
    }
    async paranoid() {
        this.deletedAt = firestore_1.Timestamp.now();
    }
}
exports.AbstractSchema = AbstractSchema;
//# sourceMappingURL=abstractSchema.js.map