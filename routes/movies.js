const express = require("express");
const router = express.Router();
const {addAllMovies, updateMovie, getAllMovies, getMovieById,deleteMovieById,updateCast, updateRatings, updateVotings} = require("../controller/movies")

//GET ROUTES
router.get("/getAllMovies",getAllMovies)
router.get("/getMovie/:movieId",getMovieById)


//POST ROUTE
router.post("/addMovies",addAllMovies)

//DELETE ROUTE
router.delete("/deleteMovie/:movieId",deleteMovieById)

//PUT ROUTES
router.put("/updateMovie/:movieId",updateMovie)
router.put("/updateCast/:movieId",updateCast)
router.put("/updateRatings/:movieId",updateRatings)
router.put("/updateVotings/:movieId",updateVotings)

module.exports = router;