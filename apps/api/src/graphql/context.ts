import { Context, Options } from './types'
import { Request, Response } from 'express'

export const createContext = async (opts: Options, req: Request, res: Response): Promise<Context> => {
  return {
    business: opts.business,
  }
}
