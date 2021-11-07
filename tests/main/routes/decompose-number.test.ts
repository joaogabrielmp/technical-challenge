import { app } from '@/main/config/app'

import request from 'supertest'

describe('DecomposeRoutes', () => {
  describe('POST /decompose', () => {
    test('Should return 200 on decompose number', async () => {
      await request(app)
        .get('/api/decompose')
        .send({ number: 45 })
        .expect(200)
    })
  })
})
