import {
  getRepository,
  BaseFirestoreRepository,
  runTransaction,
} from 'fireorm';

import { injectable } from 'inversify';
import StoreSchema from '../schemas/store';
import {
  IStoreSchema,
  createStoreReq,
  createStoreRes,
} from '../interfaces/store.interface';
import { Firestore, FieldValue, Timestamp } from 'firebase-admin/firestore';

export interface IStoreRepository {
  create({ ...payload }: createStoreReq): Promise<createStoreRes>;
  findByUuid(name: string): Promise<IStoreSchema>;

}
@injectable()
export class StoreRepository implements IStoreRepository {
  private storeCollection: BaseFirestoreRepository<StoreSchema>;
  constructor() {
    this.storeCollection = getRepository(StoreSchema);
  }

  public async create({ ...payload }: createStoreReq): Promise<createStoreRes> {
    const {
      company,
      slug,
      serviceTime,
      isActive,
      isMainStore,
      lineOa,
      info,
      notifySetting,
      questionsAnswers,
      bookingSetting,
      operator,
    } = payload;

    let store = new StoreSchema();
    return await runTransaction(async (tran) => {
      const companyTranRepository = tran.getRepository(StoreSchema);
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

  public async findByUuid(id: string): Promise<IStoreSchema> {
    const company = await this.storeCollection.findById(id);
    return company;
  }


}
