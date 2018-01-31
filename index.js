function iterativeLog(array) {
  array.forEach(callback);
}

function callback(element, index) {
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  let v = ['Alpha', 'Bravo', 'Charlie'];

  v.foreach(callback);
  return v;
}
