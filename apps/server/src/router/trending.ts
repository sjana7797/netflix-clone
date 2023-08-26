import { Router } from "express";
import * as trendingController from "src/controller/trending";

const movie = Router();

movie.get("/trending/all", trendingController.getAllTrending);

export default movie;
