import { Router } from "express";
import * as trendingController from "../controllers/trending";

const trending = Router();

trending.get("/all", trendingController.getAllTrending);

export default trending;
