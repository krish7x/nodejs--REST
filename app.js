const bodyParser = require("body-parser");
const express = require("express");
const app = express()
var http = require("http").createServer(app);
const mongoose = require("mongoose");
const movies = require("./routes/movies")
const cors = require("cors")

app.use(express.json())

app.get("/", (req,res) => {
	res.send("hello");
	console.log("HOMEE -->", req.body)
} )

mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/movies', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		console.log('DB CONNECTED');
	})

app.use("/api",movies)

const PORT = 8001;
http.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})