const fs = require("fs");
const jsonNotes = require("../db/db.json");
const util = require("util");
const { v4: uuidv4 } = require("uuid");

const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {
  // Displays all notes
  app.get("/api/notes", (req, res) => {
    res.json(jsonNotes);
  });

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

  // app.delete()
}
