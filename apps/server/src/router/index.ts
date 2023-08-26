import { Router } from "express";
import movie from "./movie";

const router = Router();

router.use("/movie", movie);

export default router;
