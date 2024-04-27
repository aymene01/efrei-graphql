import { Options } from './types'
import { sayHello } from './domains/sayHello'
import { partial } from 'lodash'

const createBusiness = (opts: Options) => {
  return {
    sayHello: partial(sayHello, opts),
  }
}

type Business = ReturnType<typeof createBusiness>

export { createBusiness, Business }
