import { Router } from "express";
import * as movieController from "../controllers/movie";

const movie = Router();

movie.get("/popular", movieController.getPopularMovies);

export default movie;
