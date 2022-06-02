const stdin = require('fs').readFileSync(0, 'utf-8');
const frames = stdin.trim('\n').split('\n');

frames.forEach((frame) => {
  const [H, W] = frame.split(' ').map(Number);

  if (H === 0 || W === 0) return;

  for (let h = 0; h < H; h++) {
    var line = '';

    if (h === 0 || h === H - 1) {
      for (let w = 0; w < W; w++) {
        line = line + '#';
      }
    } else {
      for (let w = 0; w < W; w++) {
        if (w === 0 || w === W - 1) {
          line = line + '#';
        } else {
          line = line + '.';
        }
      }
    }

    console.log(line);
  }

  console.log();
});
