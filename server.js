//-----------------------------------------Server Setup-------------------------------------//
const express = require("express");
var cors = require("cors");
const app = express();
app.set("view engine", "ejs");
const https = require("https");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const pokemonFile = require("./first_30_pokemon.json");

app.listen(process.env.PORT || 5001, function (err) {
  if (err) console.log(err);
});

app.use(cors());

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.get("/:id", function (req, res) {
  console.log("looking for pokemon");
  console.log(req.params.id);
  console.log(typeof req.params.id);
  current_poke = req.params.id
  current_poke = parseInt(current_poke)
  console.log(typeof current_poke);



  for (i in pokemonFile) {

    if (req.params.id == pokemonFile[i]["id"] || req.params.id == pokemonFile[i]["name"]){
      console.log("pokemon found")
      poke_data = pokemonFile[i]
      console.log(poke_data)
      res.send(poke_data);
    }

  }
});
