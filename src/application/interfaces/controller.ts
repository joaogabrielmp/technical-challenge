import { HttpResponse } from '@/application/interfaces'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
