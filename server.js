// Sets up the Express package
const express = require("express");

// Sets up the Express app and our port
const app = express();
const PORT = process.env.PORT || 3001;

// Prepares Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tells Express to look in the "public" directory
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});
