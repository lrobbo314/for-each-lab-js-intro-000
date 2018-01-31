function iterativeLog(array) {
  array.forEach(callback);
}

function callback(array, index, element) {
  console.log(`${index}: ${element}`);
}
