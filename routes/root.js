import { Router } from "express";
import { rootControllers } from "../controllers";
import { asyncWrapper } from "../utils";
const rootRouter = Router();
// Get V1
rootRouter.get("/", asyncWrapper(rootControllers.getRoot));
// Get Post
rootRouter.post("/", asyncWrapper(rootControllers.postRoot))
// Get Put
rootRouter.put("/", asyncWrapper(rootControllers.putRoot));
// Get Delete
rootRouter.delete("/", asyncWrapper(rootControllers.deleteRoot));
export { rootRouter };