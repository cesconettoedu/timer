
// receive array of string [ '10', '3', '5', '15', '9' ]
const hora = process.argv.slice(2);

// convert to a array of numbers [ 10, 3, 5, 15, 9 ]
const hora1 = hora.map(str => {
  
  return Number(str);
});
// console.log(typeof hora1)console.log(hora1)

for (let x of hora1) {
  if (typeof x !== 'number' || x < 0 || isNaN(x)) {
    return console.log('error, wrong input');
  }
}

// put the number in order
hora1.sort(function(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

const timer1 = function(time) {

  for (let i = 0; i < time.length; i++) {
      
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time[i] * 1000);
  }

  return;
};

timer1(hora1);

//node timer1.ja 3 4 edu 19