import  express, { Application }  from "express";
import path from "path";

import apiRoutes from "./routers/index";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import wrongRouteHandler from "./middlewares/wrongRouteHandler";
import helmet from "helmet";

const app: Application = express();

//middleware
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));


app.use('/api', apiRoutes)

// 404 handler
app.use("", wrongRouteHandler)


//Global Error handler
// This is always the last middleware , because it handles the error and run after those controller, which want to send error response to client
app.use(globalErrorHandler)


export default app;