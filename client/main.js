import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import './main.html';


Template.body.helpers({

  // notes: [
  //   {text: "hellow 1"},
  //   {text: "hellow 2"},
  //   {text: "hellow 3"}
  // ]

notes()
{
  console.log(notes);
  return Notes.find();
  
}

});
