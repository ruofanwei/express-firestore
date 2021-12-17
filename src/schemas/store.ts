import { Collection, Type } from 'fireorm';
import { Timestamp, FieldValue } from 'firebase-admin/firestore';
import { AbstractSchema } from './abstractSchema';
import { IStoreSchema } from '../interfaces/store.interface';

import {
  IsEmail,
  IsNotEmpty,
  ValidateNested,
  IsDate,
  IsString,
} from 'class-validator';

export class StoreInfoSchema {
  name: string;
  phone: string;
  address: string;
  manager: string;
  servicePhone: string;
  announcement: string;
  color: ColorSchema;
}

export class ColorSchema {
  mainColor: string;
  subColor: string;
}

export class ServiceTimeSchema {
  monday: ServiceTimesMetaSchema;
  tuesday: ServiceTimesMetaSchema;
  wednesday: ServiceTimesMetaSchema;
  thursday: ServiceTimesMetaSchema;
  friday: ServiceTimesMetaSchema;
  saturday: ServiceTimesMetaSchema;
  sunday: ServiceTimesMetaSchema;
}

export class ServiceTimesMetaSchema {
  open: boolean;
  times: timeSchema[];
}

export class timeSchema {
  startTime: string;
  endTime: string;
}

export class lineSchema {
  liffId: string;
  channelSecret: string;
  channelToken: string;
}

export class DayOffSchema {
  id: number;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: Date;
}

export class QaSchema {
  question: string;
  answer: string;
}
export class NotifySettingSchema {
  update: NotifySettingMetaSchema;
  cancel: NotifySettingMetaSchema;
  process: NotifySettingMetaSchema;
}

export class NotifySettingMetaSchema {
  sms: boolean;
  email: boolean;
  line: boolean;
  note: string;
}

export class bookingSettingSchema {
  daysBookable: number;
  maxBookingCount: number;
  isBookingRepeatable: boolean;
  isBookingCancelable: boolean;
  isBookingEditable: boolean;
  isBookingNoPreference: boolean;
}

export class operatorSchema {
  name: string;
  // 信箱
  @IsEmail()
  email: string;
}


@Collection('stores')
export default class StoreSchema
  extends AbstractSchema
  implements IStoreSchema
{
  id: string;
  uuid: string;
  storeId: number;
  companyId: number

  @IsNotEmpty()
  slug: string;
  isMainStore: boolean;
  // 是否啟用
  isActive: boolean;
  // 基本資訊Å
  info: StoreInfoSchema;
  // 營業時間資訊
  serviceTime: ServiceTimeSchema;
  // LINE OA 資訊
  lineOa: lineSchema;
  // 店休資訊
  dayOffs: DayOffSchema[];
  // 問與答
  questionsAnswers: QaSchema[];
  // 營運人員資訊
  operator: operatorSchema;

  // 通知設定
  @ValidateNested()
  notifySetting: NotifySettingSchema;

  // 預約設定
  @ValidateNested()
  bookingSetting: bookingSettingSchema;

  // 所屬品牌 ref company uuid
  company: string;
  // 發出的通知 ref smsPointOrder id
  notifications: Array<string>;
  // 簡訊點數儲值交易 ref notification id
  smsPointOrders: Array<string>;
  // 簡訊剩餘點數 ref smsPoint id
  smsPoint: string;
  // 店家員工們的角色 ref storeUserRole id
  storeUserRoles: Array<string>;
  // 店家擁有多個員工 ref user uuid
  users: Array<string>;
}
