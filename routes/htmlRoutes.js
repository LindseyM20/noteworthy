const router = require("express");
// .Router();
const path = require("path");

module.exports = function (app) {
  // Routes to our html pages
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}


// module.exports = router;
