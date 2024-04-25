import { Options } from './types'

const createBusiness = (opts: Options) => {
  return {}
}

type Business = ReturnType<typeof createBusiness>

export { createBusiness, Business }
