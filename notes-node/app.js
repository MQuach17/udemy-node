console.log('Starting app.js');

//require fileserver module
const fs = require('fs');
//custom module
const notes = require('./notes.js');
//lodash
const _ = require('lodash');

//yargs
const yargs = require('yargs');

const argv = yargs.command('add','Add a new note',{
    title:{
        describe: "title of note",
        demand: true,
        alias: 't'
    },
    body:{
        describe: "body of note",
        demand: true,
        alias: 'b'
    }
}).help().argv;
var command = argv._[0];
console.log('Process',process.argv);
console.log('Command',command);
console.log('Yargs',argv);


if(command == 'add'){
//    console.log('adding note');
    var added = notes.addNote(argv.title, argv.body);
    if(added == false){
        console.log('Duplicate entry');
    }
    else{
        console.log("Note added");
        console.log('--');
        console.log(`Title: ${added.title}`);
    }
}
else if(command =='list'){
//    console.log('listing note');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note)=>notes.logNote(note));
}
else if(command == 'read'){
//    console.log('reading note');
    var note = notes.getNote(argv.title);

    if(note){
        console.log("---Note Found---");
        notes.logNote(note);
    }
    else{
        console.log("No note found with that title");

    }    
    
}
else if(command == 'remove'){
//    console.log('removing note');
    var noteRemoved = notes .removeNote(argv.title);
    var message = noteRemoved ? "Note Removed" : "No Note Found";
    console.log(message);
}
else{
//    console.log('command not found');
}


