import { Options } from './types'
import { sayHello } from './domains/sayHello'
import * as auth from './domains/authentication'
import { partial } from 'lodash'

const createBusiness = (opts: Options) => {
  return {
    register: partial(auth.register, opts),
    sayHello: partial(sayHello, opts),
  }
}

type Business = ReturnType<typeof createBusiness>

export { createBusiness, Business }
