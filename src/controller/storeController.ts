import { NextFunction, Request, Response, Express } from 'express';
import container from '../config/inversify.config';
import { CompanyService } from '../services/companyService';

export class StoreController {

  public static async buildStore(
    req: Request & Express.CustomRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const companyName: string = req.body.companyName; // option
      /* clarify the type for companyUuid while assign value */
      let companyUuid: string = req.headers.companyuuid!; // option

      const companyService = await container.get<CompanyService>(
        'CompanyService'
      );

      /* find or create company */
      const {company, isMainStore} = await companyService.firnOrCreateCompany(
        companyUuid,
        companyName
      );

      return res.status(200).json({
        code: 200,
        message: '執行成功',
      });
    } catch (e) {
      console.log(e);

      next(e);
    }
  }
}
export default StoreController;
