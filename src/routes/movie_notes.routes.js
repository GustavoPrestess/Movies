const { Router } = require("express");

const MoviesNotesController = require("../controllers/MoviesNotesController");

const moviesNotesRoutes = Router();

function myMiddleware(request, response, next){

}



const moviesNotesController = new MoviesNotesController();

moviesNotesRoutes.get("/", moviesNotesController.index);
moviesNotesRoutes.post("/:user_id", moviesNotesController.create);
moviesNotesRoutes.get("/:id", moviesNotesController.show);
moviesNotesRoutes.delete("/:id", moviesNotesController.delete);



module.exports = moviesNotesRoutes;