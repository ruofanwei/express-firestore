import { StoreRepository } from '../repositories/storeRepository';

import { injectable, inject } from 'inversify';
import {
  IStoreSchema,
  createStoreReq,
} from '../interfaces/store.interface';


export interface IStoreService {
  createStore({ ...payload }: createStoreReq): Promise<IStoreSchema>;
}

@injectable()
export class StoreService implements IStoreService {
  constructor(
    @inject('StoreRepository') private storeRepository: StoreRepository
  ) {
    this.storeRepository = new StoreRepository();
  }
  async createStore({
    ...payload
  }: createStoreReq): Promise<IStoreSchema> {
    try {
      const store = await this.storeRepository.create({
        ...payload,
      });

      return store;
    } catch (error) {
      throw error;
    }
  }
}
