import { Timestamp } from 'firebase-admin/firestore';

export abstract class AbstractSchema {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;

  constructor() {
    this.createdAt = Timestamp.now();
    this.updatedAt = Timestamp.now();
    this.deletedAt = null;
  }

  public async paranoid(): Promise<void> {
    this.deletedAt = Timestamp.now();
  }
}
