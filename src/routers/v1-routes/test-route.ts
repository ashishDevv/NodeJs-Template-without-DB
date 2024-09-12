import { Router } from "express";

import { TestControllers } from "../../controllers/index";

const router = Router();

router.get('/test', TestControllers.test)

export default router;