import { Controller } from '@/application/interfaces'

import { Request, Response, NextFunction } from 'express'

export const adaptExpressRoute = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.body === null ? {} : req.body),
      ...(req.params === null ? {} : req.body),
      ...(req.query === null ? {} : req.body)
    }
    const httpResponse = await controller.handle(request)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
