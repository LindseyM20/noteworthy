// const fs = require("fs");
// const util = require("util");
// const uuid = require("uuid");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Notes {
//   read() {
//     return readFileAsync("./db.json", "utf8");
//   }
//   write(notes) {
//     return writeFileAsync("./db.json", JSON.stringify(notes));
//   }
//   getNotes() {
//     return this.read().then(res => {
//       let parseNotes; 
//       try {parseNotes = [].concat(JSON.parse(res))}
//       catch(err) {console.log(err); parseNotes = [];}
//       return parseNotes;
//     })
//   }
//   addNote(note) {
//     // call this.getNotes, spread operator to spread parsed notes and then add the new note made before calling this.getNotes
//   }
//   deleteNote(id) {
//     return this.getNotes().then(res => {
//       res.filter // everything except the id that matches
//     })
//   }
// }

// module.exports = new Notes();
