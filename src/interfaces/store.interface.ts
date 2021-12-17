
const { ColorSchema } = require('../schemas/store');

export interface StoreInfoSchema {
  name: string;
  phone: string;
  address: string;
  manager: string;
  servicePhone: string;
  announcement: string;
  color: ColorSchema;
}

export interface ColorSchema {
  mainColor: string;
  subColor: string;
}

export interface ServiceTimeSchema {
  monday: ServiceTimesMetaSchema;
  tuesday: ServiceTimesMetaSchema;
  wednesday: ServiceTimesMetaSchema;
  thursday: ServiceTimesMetaSchema;
  friday: ServiceTimesMetaSchema;
  saturday: ServiceTimesMetaSchema;
  sunday: ServiceTimesMetaSchema;
}

export interface ServiceTimesMetaSchema {
  open: boolean;
  times: Array<timeSchema>;
}

export interface timeSchema {
  startTime: string;
  endTime: string;
}

export interface lineSchema {
  liffId: string;
  channelSecret: string;
  channelToken: string;
}

export interface DayOffSchema {
  id: number;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: Date;
}

export interface QaSchema {
  question: string;
  answer: string;
}
export interface NotifySettingSchema {
  update: NotifySettingMetaSchema;
  cancel: NotifySettingMetaSchema;
  process: NotifySettingMetaSchema;
}

export interface NotifySettingMetaSchema {
  sms: boolean;
  email: boolean;
  line: boolean;
  note: string;
}

export interface bookingSettingSchema {
  daysBookable: number;
  maxBookingCount: number;
  isBookingRepeatable: boolean;
  isBookingCancelable: boolean;
  isBookingEditable: boolean;
  isBookingNoPreference: boolean;
}

export interface operatorSchema {
  name: string;
  email: string;
}
export interface IStoreSchema {
  id: string;
  uuid: string;
  company: string;
  companyId: number;
  isActive: boolean;
  slug: string;
  info: StoreInfoSchema;
  lineOa: lineSchema;
  serviceTime: ServiceTimeSchema;
  notifySetting: NotifySettingSchema;
  dayOffs: DayOffSchema[];
  questionsAnswers: Array<QaSchema>;
  bookingSetting: bookingSettingSchema;
  operator: operatorSchema;
  isMainStore: boolean;
}

export interface IDayOffInDuration {
  id: number;
  fDate: string;
  description: string;
}

export interface createStoreReq
  extends Omit<
    IStoreSchema,
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'paranoid'
    | 'companyId'
    | 'id'
    | 'uuid'
  > {

}

export interface createStoreRes
  extends Omit<
    IStoreSchema,
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'paranoid'
  > {
  companyId: number;
  storeId: number;
}

export interface StoreAttributes {
  id: number;

  uuid: string;
  CompanyId: number;
}