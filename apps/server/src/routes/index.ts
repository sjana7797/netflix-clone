import { Router } from "express";
import movie from "./movie";
import trending from "./trending";

const router = Router();

router.use("/movie", movie);
router.use("/trending", trending);

export default router;
