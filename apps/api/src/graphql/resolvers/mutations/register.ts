import { Context } from '@/graphql/types'
import { MutationResolvers } from '@efreiql/graphql'

export const register: MutationResolvers<Context>['register'] = async (_root, args, ctx) => {
  return ctx.business.register(args.input)
}
