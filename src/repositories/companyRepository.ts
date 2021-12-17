
import {
  getRepository,
  BaseFirestoreRepository,
  runTransaction,
} from 'fireorm';
import { injectable } from 'inversify';
import CompanySchema from '../schemas/company';
import {
  createCompanyRes,
} from '../interfaces/company.interface';

export interface ICompanyRepository {
  create(name: string): Promise<createCompanyRes>;
  findOne(name: string): Promise<createCompanyRes>;
}
@injectable()
export class CompanyRepository implements ICompanyRepository {
  private companyCollection: BaseFirestoreRepository<CompanySchema>;

  constructor() {
    this.companyCollection = getRepository(CompanySchema);
  }

  // * integrate sequelize and fireOrm method
  public async create(name: string): Promise<createCompanyRes> {
    let company = new CompanySchema();
    return await runTransaction(async (tran) => {
      const companyTranRepository = tran.getRepository(CompanySchema);
      company.name = name;
      return await companyTranRepository.create(company);
    });
  }
  public async findOne(id: string): Promise<createCompanyRes> {
    const company = await this.companyCollection.findById(id);
    return company;
  }
}
