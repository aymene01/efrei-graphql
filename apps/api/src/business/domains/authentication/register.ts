import { Options } from '@/business/types'
import { AuthResult, MutationRegisterArgs } from '@efreiql/graphql'

type RegisterRequest = MutationRegisterArgs
type RegisterResponse = AuthResult

export const register = async (opts: Options, req: RegisterRequest['input']): Promise<RegisterResponse> => {
  if (req.password !== req.passwordConfirmation) {
    return {
      __typename: 'ValidationError',
      message: 'Passwords do not match',
      field: 'passwordConfirmation',
    }
  }

  if (req.password.length < 8) {
    return {
      __typename: 'ValidationError',
      message: 'Password must be at least 8 characters',
      field: 'password',
    }
  }

  const isUserExists = await opts.database.prisma.user.findUnique({
    where: {
      email: req.email,
    },
  })

  if (isUserExists) {
    return {
      __typename: 'ValidationError',
      message: 'User with this email already exists',
      field: 'email',
    }
  }

  const user = await opts.database.prisma.user.create({
    data: {
      email: req.email,
      name: req.name,
      password: req.password,
    },
  })

  if (!user) {
    throw new Error('Failed to create user')
  }

  return {
    __typename: 'AuthPayload',
    token: 'token',
    user,
  }
}
