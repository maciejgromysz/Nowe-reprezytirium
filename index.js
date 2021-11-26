const express = require('express');
const routes = require("./Routes/route.js")
const app = express()

app.use(express.static('Public'))

app.get('/', function (req, res){
    res.sendFile(__dirname + "\\index.html")
 
  })
  app.listen(3000, function() {
    console.log("Serwer śmiga szefie :)");
  })
app.use("/podstrony/",routes)
