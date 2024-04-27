import { Resolvers } from '@efreiql/graphql'
import * as queries from './queries'

export const resolvers: Resolvers = {
  Query: {
    sayHello: queries.sayHello,
  },
}
