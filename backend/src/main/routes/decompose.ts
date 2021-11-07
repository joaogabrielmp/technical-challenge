import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeDecomposeNumberController } from '@/main/factories/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/decompose', adapt(makeDecomposeNumberController()))
}
