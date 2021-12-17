export interface ICompanySchema {
  id: string;
  uuid: string;
  name: string;
  companyId: number;

  stores: Array<string>;
}

export interface createCompanyReq
  extends Omit<
    ICompanySchema,
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'paranoid'
    | 'companyId'
    | 'id'
    | 'uuid'
  > {
  isMainStore: boolean;
}

export interface createCompanyRes
  extends Omit<
    ICompanySchema,
    'createdAt' | 'updatedAt' | 'deletedAt' | 'paranoid'
  > {

  companyId: number
}