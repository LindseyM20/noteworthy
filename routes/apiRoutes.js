const fs = require("fs");

let json = require("../db/db.json");

module.exports = app => {
  // Displays all notes
  app.get("/api/notes", (req, res) => {
    return res.json(notes);
  });
}

