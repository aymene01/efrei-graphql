import { Logger, logger, waitForSignal } from '@efreiql/toolbox'

const main = async (logger: Logger) => {
  logger.info('Starting API server')
  await waitForSignal(['SIGINT', 'SIGTERM'])
}

main(logger('efreiql')).catch(err => {
  console.log(err)
  process.exit(1)
})
