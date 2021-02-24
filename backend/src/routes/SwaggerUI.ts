import {Router} from "express";
import * as swaggerUi from "swagger-ui-express";
import * as YAML from "yamljs";

const swaggerDocument = YAML.load("swagger.yml");

const router = Router();

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
