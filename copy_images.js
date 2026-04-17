const fs = require('fs');
const path = require('path');
const src = 'C:\\Users\\정의석\\.gemini\\antigravity\\brain\\fecc3a66-12df-4549-b602-ee8adcb1bba8';
const dest = 'public/images';

['mint_choco_latte', 'toffee_nut_latte', 'lemon_ade', 'blue_lemon_ade', 'earl_grey_tea', 'peppermint_tea'].forEach(name => {
  const files = fs.readdirSync(src).filter(f => f.startsWith(name + '_') && f.endsWith('.png'));
  if (files.length > 0) {
    fs.copyFileSync(path.join(src, files[0]), path.join(dest, name + '.png'));
    console.log('Copied ' + name);
  } else {
    console.log('Not found ' + name);
  }
});
console.log('Done');
