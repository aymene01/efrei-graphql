import { graphql } from '@/lib/graphql'

export const SAY_HELLO = graphql(`
  query SayHello {
    sayHello {
      message
    }
  }
`)
