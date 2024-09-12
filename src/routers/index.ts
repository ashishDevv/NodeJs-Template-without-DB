import { Router } from "express";

import v1Routes from "./v1-routes/test-route"

const router = Router();

router.use('/v1', v1Routes)

export default router;