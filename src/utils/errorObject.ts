import { Request } from "express";
import { THttpError } from "../types/types";
import responseMessage from "../constant/responseMessage";
import config from "../config/config";
import { EApplicationEnvironment } from "../constant/application";
import logger from "./logger";

export default function (error: Error | unknown, req: Request,errorStatusCode: number = 500): THttpError {
    const errorObj: THttpError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: error instanceof Error ? error.message : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: error instanceof Error ? { error: error.stack } : null
    }

    logger.info(`CONTROLLER_ERROR`, {
        meta: errorObj
    })

    if(config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return errorObj;
}