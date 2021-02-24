import {Router} from "express";
import SwaggerRouter from "./SwaggerUI";
import MarketDataRouter from "./MarketData";

const router = Router();
router.use("/api-docs", SwaggerRouter);
router.use("/market-data", MarketDataRouter);

export default router;
