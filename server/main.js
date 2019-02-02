import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// same as writing:
// Meteor.startup(function (){
//
// });
import moment from 'moment';

import { Activities } from './../imports/api/activities'; // this is here so it appears underneath startup

//Activities.remove({}); // wipe all from collection

// let now = moment().format("ddd, MMM Do, h:mmA");
// Activities.insert({
//   name: 'Chaz',     // this inserts a record into the db. It auto-gens an ID
//   score: 12,
//   pay: 30,
//   when: now });


  //when: (new Date()).toString()
  //reatedAt: new Date() // can't seem to output this although the insert works...
//});

//console.log(Activities.find().fetch()); // find returns a cursor which is a row
//pointer and fetch returns actual data so this line brings back any players
//already in the db
