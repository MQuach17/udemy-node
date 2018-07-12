//var obj = {
//    name: 'mike'
//};
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name":"mike","age":26}';
//var personObj = JSON.parse(personString);
//console.log(typeof personObj);
//console.log(personObj);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some Body'
};
originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString,(err)=>{
    if(err)
        console.log(err);
});

var noteString = fs.readFileSync('notes.json',(err)=>{
    if(err)
        console.log(err);
});
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);