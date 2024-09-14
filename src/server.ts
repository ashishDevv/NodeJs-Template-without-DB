import config from './config/config';
import app from './app';
import logger from './utils/logger';



const server = app.listen(config.PORT)

;(() => {
    try {
        logger.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (error) {
        logger.error(`APPLICATION_ERROR`,{ meta: error })

        server.close((error) => {
            if(error) {
                logger.error(`ERROR_IN_CLOSING_SERVER`, { meta: error })
            }

            process.exit(1);
        })
    }
})()