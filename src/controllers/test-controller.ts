import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from "express";
import httpResponse from "../utils/httpResponse";
import responseMessage from '../constant/responseMessage';
import httpError from '../utils/httpError';

export function test(req: Request, res: Response, next: NextFunction) {
    try {
        //get data from req.body or req.params
        // throw new Error("This is important Error")
        //call the appropiate service for business logic and get the response
        httpResponse(req, res, StatusCodes.OK, responseMessage.SUCCESS, { id: 101} )
    } catch (error) {
        httpError(next, error, req, StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



