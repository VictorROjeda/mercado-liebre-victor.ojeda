const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo"));


//app.get("/", function(req, res){
//    res.send("Hola Gente!")
//});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./views/home.html"))
});




