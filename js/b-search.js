function binarySearch(list, value) {
  // initial values for start, middle and end
  let start = 0;
  let stop = list.length - 1;
  let middle = Math.floor((start + stop) / 2);

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2);
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return list[middle] !== value ? -1 : middle;
}

$(document).on("click", "#searchButton", function() {
  const list = getList();
  const key = $("#searchKey").val();

  if (list.length && key != "") {
    var start = window.performance.now();
    var b = binarySearch(list.sort(), key);
    var end = window.performance.now();
    var time = end - start;
    createResult(time, b);
    clean();
  }
});
