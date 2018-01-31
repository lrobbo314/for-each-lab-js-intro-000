function iterativeLog(array, callback) {
  array.forEach(callback);
}

function callback(array, index, element) {
  return `${index}: ${element}`;
}