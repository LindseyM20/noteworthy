const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
let jsonNotes = require("../db/db.json");

const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {
  // Displays the notes that are currently in db.json
  app.get("/api/notes", (req, res) => {
    res.json(jsonNotes);
  });

  // Takes the user input & adds an id, combines with existing db.json notes, and sends all to db.json
  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let id = uuidv4();
    newNote.id = id;
    jsonNotes.push(newNote);
    writeFileAsync("./db/db.json", JSON.stringify(jsonNotes))
    .then( () => {
      res.json(newNote);
    }).catch(err => console.log(err));
  });

  // Deletes a note based off the id
  app.delete("/api/notes/:id", (req, res) => {
    let fewerNotes = jsonNotes.filter(newNote => newNote.id !== req.params.id);
    jsonNotes = fewerNotes;
    writeFileAsync("./db/db.json", JSON.stringify(jsonNotes))
    .then( () => {
      res.json(jsonNotes);
    }).catch(err => console.log(err));
  });
}
