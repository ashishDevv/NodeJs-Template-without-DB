import config from './config/config';
import app from './app';



const server = app.listen(config.PORT)

;(() => {
    try {
        console.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (error) {
        console.error(`APPLICATION_ERROR`,{ meta: error })

        server.close((error) => {
            if(error) {
                console.error(`ERROR_IN_CLOSING_SERVER`, { meta: error })
            }

            process.exit(1);
        })
    }
})()