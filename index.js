import Story from './formats/plaintxt.js';
import text from './formats/web.js';
import * as fs from 'fs';

let story = Story.Text();
console.log(`${story} \n\n\n Your story is ${story.split(" ").length} words so far.\n\n` );

fs.writeFile('chapter2.txt', Story.Text(), (err) => {
  if (err) return console.log(err);
  console.log('chapter two > chapter2.txt');
});

fs.writeFile('index.html', text.HTML(), (err) => {
  if (err) return console.log(err);
  console.log('chapter two > chapter2.txt');
});