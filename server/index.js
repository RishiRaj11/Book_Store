
const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book_routes");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose.connect("mongodb://book_store:12345@ac-wpoa757-shard-00-00.rxrqfmf.mongodb.net:27017,ac-wpoa757-shard-00-01.rxrqfmf.mongodb.net:27017,ac-wpoa757-shard-00-02.rxrqfmf.mongodb.net:27017/?ssl=true&replicaSet=atlas-meikiu-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to DB");
    }).then(() => {
        app.listen(5000);
    }).catch((error) => {
        console.log(error);
    });

