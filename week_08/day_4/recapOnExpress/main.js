const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const dotenv = require("dotenv");

// env config
dotenv.config();

const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = process.env.URL;
const apikey = process.env.KEY;

// express config
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// supabase config
const supabase = createClient(supabaseUrl, apikey);

// routes
app.get("/", async (req, res) => {
  const { data: pokemons, error } = await supabase.from("pokemon").select("*");
  if (error) return res.status(401).json({ error });
  else return res.json(pokemons);
});

// add a pokemon
app.post("/", async (req, res) => {
  const { title } = req.body;
  //hash makes it more secure use it for !passwords!
  //   const hashTitle = await bcrypt.hash(title, 10);
  const { error } = await supabase.from("pokemon").insert([{ title }]);
  if (error) return res.status(401).json({ error });
  else return res.send({ message: "Pokemon added successfully" });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
