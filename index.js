function iterativeLog(array) {
  array.forEach(callback);
}

function callback(element, index) {
  console.log(`${index}: ${element}`);
}
