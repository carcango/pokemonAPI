//-----------------------------------------Server Setup-------------------------------------//
const express = require("express");
const app = express();
app.set("view engine", "ejs");
const https = require("https");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

app.listen(process.env.PORT || 5001, function (err) {
  if (err) console.log(err);
});

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
//----------------------------------Database initialization ----------------------------------//
mongoose.connect(
  "mongodb+srv://carcango:2537@cluster0.tcuqv.mongodb.net/WebDev-2537?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const pokemonSchema = new mongoose.Schema({
  abilities: Array,
  base_experience: Number,
  forms: Array,
  game_indices: Array,
  height: Number,
  held_items: Array,
  id: Number,
  is_default: Boolean,
  location_area_encounters: String,
  moves: Array,
  name: String,
  order: Number,
  species: {},
  sprites: {},
  stats: Array,
  types: Array,
  weight: Number,
});
const pokemonModel = mongoose.model("pokemon", pokemonSchema);

//------------------------------------Request handling ------------------------------------//
