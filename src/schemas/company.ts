import { Collection, Type } from 'fireorm';
import { Timestamp, Firestore, FieldValue } from 'firebase-admin/firestore';

import { AbstractSchema } from './abstractSchema';
import { ICompanySchema } from '../interfaces/company.interface';



@Collection('companys')
export default class CompanySchema
  extends AbstractSchema
  implements ICompanySchema
{
  id: string;
  uuid: string;
  name: string;
  companyId: number;

  stores: Array<string>;
}
