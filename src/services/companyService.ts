import { CompanyRepository } from '../repositories/companyRepository';
import { injectable, inject } from 'inversify';

import {
  ICompanySchema,
  createCompanyReq,
  createCompanyRes,
} from '../interfaces/company.interface';
export interface ICompanyService {

}

@injectable()
export class CompanyService implements ICompanyService {
  //private companyRepository: CompanyRepository;
  constructor(
    @inject('CompanyRepository') private companyRepository: CompanyRepository
  ) {
    this.companyRepository = new CompanyRepository();
  }
  async firnOrCreateCompany(
    companyUuid: string,
    companyName: string
  ) {
    try {
      let company;
      let isMainStore: boolean = false;
      /* find or create company by uuid */
      if (companyUuid) {
        company = await this.companyRepository.findOne(companyName);
      } else {
        company = await this.companyRepository.create(companyName);
        isMainStore = true;
      }

      return { company, isMainStore };
    } catch (error) {
      throw error;
    }
  }
}
