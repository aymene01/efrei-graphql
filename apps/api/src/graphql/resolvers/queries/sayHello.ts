import { Context } from '@/graphql/types'
import { QueryResolvers } from '@efreiql/graphql'

export const sayHello: QueryResolvers<Context>['sayHello'] = (_root, _args, ctx) => ctx.business.sayHello()
