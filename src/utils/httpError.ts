import { NextFunction, Request } from "express";
import errorObject from "./errorObject";

export default function (next: NextFunction, error: Error | unknown, req: Request, errorStatusCode: number = 500): void {
    
    const errorObj = errorObject(error, req, errorStatusCode)
    
    return next(errorObj)

}