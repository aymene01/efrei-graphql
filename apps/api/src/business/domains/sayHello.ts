import { Options } from '@/business/types'
import { SayHelloResponse } from '@efreiql/graphql'

export const sayHello = (_opts: Options): SayHelloResponse => ({
  message: 'Hello World!',
})
