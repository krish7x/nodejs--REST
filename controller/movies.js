const Movies = require("../models/movies");

const addAllMovies = (req,res) => {
    Movies.insertMany({
        upvotes : 256,
        name : "Raiders of the Lost Ark",
        rating : 8.4,
        year : 1981,
        genre : "Sci-Fi",
        trailer: "https://www.youtube.com/watch?v=XkkzKHCx154",
        cast : [
            {
                "name": "Harrison Ford",
                "age": 78,
                "nationality": "USA"
            },
            {
                "name": "Karen Allen",
                "age": "69",
                "nationality": "USA"
            }
        ]
    }).then((data) => res.json(data))
    .catch(err => console.log(err))
}


const getAllMovies = (req,res) => {
   Movies.find().then(data => res.send(data))
}

const getMovieById = (req,res) => {
    const id = req.params.movieId;
    Movies.findById(id).then(data => res.send(data))
}

const deleteMovieById = (req,res) => {
    const id = req.params.movieId;
    Movies.deleteOne(id)
    .then(() => console.log("Movie deleted seccessfully!"))
    .catch(err => console.log(err))
}

const updateMovie = (req,res) => {
    const id = req.params.movieId;
    const movieData = req.body.name
    
    Movies.updateOne({
        _id: id
    }, {name : movieData}).then(() => res.send("Documents Updated"))
    .catch((err) => console.log(err))
}


const updateCast = (req,res) => {
    const id = req.params.movieId
    const castData = req.body;
    Movies.updateMany({
        "_id": id
    }, {
        $push : castData
    })
    .then(data => res.send(data))
    .catch(err => console.log(err))
}

const updateRatings = (req,res) => {
    const id = req.params.movieId;
    const movieData = req.body.rating
    
    Movies.updateOne({
        _id: id
    }, {rating : movieData}).then(() => res.send("Ratings Updated"))
    .catch((err) => console.log(err))
}

const updateVotings = (req, res) => {
    const id = req.params.movieId;
    const movieData = req.body.upvotes;

    Movies.updateOne({
        _id: id
    }, {upvotes : movieData}).then(() => res.send("Ratings Updated"))
    .catch((err) => console.log(err))
}


module.exports = 
{
addAllMovies, 
updateMovie,
getAllMovies,
getMovieById,
deleteMovieById,
updateCast,
updateRatings,
updateVotings
}