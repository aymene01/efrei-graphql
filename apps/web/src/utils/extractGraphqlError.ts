import { CombinedError } from 'urql'

export const extractGraphqlError = (error: CombinedError) => error.graphQLErrors[0].message
