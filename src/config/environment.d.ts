import { IncomingHttpHeaders } from 'http';
import { Request } from 'express';

import { customRequest } from '../fireStoreController/storeController';
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      HOST_ENV: string;
      API_REGION: string;
      PWD: string;
      DOMAIN: string;
      GCLOUD_STORAGE_BUCKET: string;
      GCLOUD_STORAGE_FILE_DOMAIN: string;
      PORT: string;
      GOOGLE_APPLICATION_CREDENTIALS: string;
      API_PROJECT: string;
    }
  }
  namespace Express {
    export interface CustomRequest extends Request {
      headers: IncomingHttpHeaders & {
        /* type for undefine is needed */
        companyuuid?: string;
      };
    }
  }
}
