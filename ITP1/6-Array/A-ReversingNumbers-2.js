const stdin = require('fs').readFileSync(0, 'utf-8');
const [n, a] = stdin.trim('\n').split('\n');
const array = a.split(' ');
const reversed = [];

for (let i = 1; i <= n; i++) {
  reversed.push(array[n - i]);
}

console.log(reversed.join(' '));
