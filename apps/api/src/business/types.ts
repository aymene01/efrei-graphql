import { Database } from '@/database'
import { Logger } from '@efreiql/toolbox'
import { IamService } from '@/iam/createIamService'

export type Options = {
  logger: Logger
  database: Database
  iamService: IamService
}
