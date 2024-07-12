const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('done with reading first file');
  const first = result;
  readFile('./content/second.txt','utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('done with reading second file');
    const second = result;
    writeFile('./content/result-async.txt',
      `Here is the result : ${first}, ${second}`, (err, result) => {
        if (err) {
          console.log(err)
          return
        }   
        console.log('done with writing and hence this task');
        console.log(result)
      }
    ) 
  })
});

console.log('start next task');

//const first = readFileSync('./content/first.txt','utf8');
// const second = readFileSync('./content/second.txt','utf8');

//console.log(first, second);




