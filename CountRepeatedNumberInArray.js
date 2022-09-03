const arr = [22,44,55,44,22,22];

const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0 ) + 1;
  console.log(count[element])
});

//{22: 3, 44: 2, 55: 1}
console.log(count);