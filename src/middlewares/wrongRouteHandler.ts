import { NextFunction, Request, Response } from "express";
import responseMessage from "../constant/responseMessage";
import httpError from "../utils/httpError";
import { StatusCodes } from "http-status-codes";



export default function(req: Request, _: Response, next: NextFunction) {
    try {
        throw new Error(responseMessage.NOT_FOUND("Route"))
    } catch (error) {
        httpError(next, error, req, StatusCodes.NOT_FOUND)
    }
}