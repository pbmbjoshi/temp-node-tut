const os = require ('os') // import os from 'os';
console.log(os.userInfo());
console.log(`systems uptime is ${os.uptime()} seconds`);

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOS);