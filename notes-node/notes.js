console.log('Starting notes.js');

//console.log(module);
module.exports.age = 26;

//module.exports.addNote = 

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length == 0){
        notes.push(note);    
        saveNotes(notes);

        return note;
        
    }
    else{
        return false;
    }
//    saveNotes(notes);
    
//    return 'New Notes';
};
var getAll = () =>{
  console.log('getting all nots');
    return fetchNotes();
};
var removeNote = (title) => {
//    console.log('removing note with title: ',title);
    var notes = fetchNotes();
    var deletedNotes = notes.filter((note)=>note.title!=title);
    console.log(deletedNotes);
    saveNotes(deletedNotes);
    return notes.length != deletedNotes.length;
};
var getNote = (title) =>{
//    console.log('reading note with title:',title);
    var notes = fetchNotes();
    var returnNote = notes.filter((note)=>note.title == title)
    return returnNote[0];
}
var logNote = (note) => {
//    debugger;
        console.log(`Note title:${note.title}`);
        console.log(`Note body:${note.body}`);    
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote    
}

