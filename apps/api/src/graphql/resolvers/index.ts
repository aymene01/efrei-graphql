import { Resolvers } from '@efreiql/graphql'
import * as queries from './queries'
import * as mutations from './mutations'

export const resolvers: Resolvers = {
  Query: {
    sayHello: queries.sayHello,
  },

  Mutation: {
    register: mutations.register,
  },
}
