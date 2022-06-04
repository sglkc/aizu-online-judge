const stdin = require('fs').readFileSync(0, 'utf-8');
const n = parseInt(stdin);
var output = '';

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 || i.toString().includes('3')) output = output + ' ' + i;
}

console.log(output);
