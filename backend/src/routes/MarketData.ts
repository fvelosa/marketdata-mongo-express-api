import {Router} from "express";
import {yieldsMiddleware, swaptionvolmtxsMiddleware} from "src/middlewares";

const router = Router();

router.get("/yields", yieldsMiddleware.getAll);

router.get("/yields/:id", yieldsMiddleware.get);

router.delete("/yields/:id", yieldsMiddleware.remove);

router.get("/swaptionvolmtxs", swaptionvolmtxsMiddleware.getAll);

router.get("/swaptionvolmtxs/:id", swaptionvolmtxsMiddleware.get);

router.delete("/swaptionvolmtxs/:id", swaptionvolmtxsMiddleware.remove);

export default router;
