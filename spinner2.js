const print = function(number) {
  const sentence = '|/-\\';
  let timer = 300;
  for (let i of sentence) {
    setTimeout(()=> process.stdout.write('\r' + i + '   '), timer);
    timer += 300;
  }
  if (number < 1) {
    setTimeout(()=> print(number + 1), timer - 300);
  } else {
    setTimeout(()=> console.log(''), timer);
  }
};
print(0);

