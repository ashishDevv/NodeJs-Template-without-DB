import { NextFunction, Request, Response } from "express";
import { THttpError } from "../types/types";

export default function (error: THttpError, _: Request, res: Response, __: NextFunction):void {   

    res.status(error.statusCode).json(error)
}

// _ & __ means no use of these variable but has to pass in this middleware because it is not ordinary middleware, it is designed by express to handle send errors
    