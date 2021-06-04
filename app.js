const chalk = require('chalk');
const yargs = require('yargs');

const get = require('./notes.js');

// Add Command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //Demand means require
            type: 'string'
        },
        body: {
          describe: "Note Body",
          demandOption: true,
          type: "string"
        }
    },
    handler: function(argv){
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function(){
        console.log('Removing note')
    }
});

yargs.command({
    command: 'list',
    describe: 'lists note',
    handler: function(){
        console.log('Listing notes')
    }
});

yargs.command({
    command: 'read',
    describe: 'reads notes',
    handler: function(){
        console.log('Reading notes')
    }  
});


yargs.parse()