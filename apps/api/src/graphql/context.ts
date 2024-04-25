import { Options } from './types'

export const createContext = async (opts: Options) => {
  return {
    business: opts.business,
  }
}
