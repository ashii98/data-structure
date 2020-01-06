function merge(leftArr, rightArr) {
  var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1);
    } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1);
    }
  }
  while (leftArr.length) sortedArr.push(leftArr.shift());
  while (rightArr.length) sortedArr.push(rightArr.shift());
  return sortedArr;
}

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr = arr.slice(0, midpoint);
    var rightArr = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}

$(document).on("click", "#sortButton", function() {
  const data = getList();
  if (data.length) {
    let start = window.performance.now();
    let sortedArray = mergesort(data);
    let end = window.performance.now();
    let time = end - start;
    createResultSort(time, sortedArray);
    clean();
  }
});

function createResultSort(time, data) {
  $(".card")
    .first()
    .hide();
  let xdata = "";
  for (let i = 0; i < data.length; i++) {
    xdata += data[i] + ",";
  }
  $(".header-body").append(
    `<div class="card col-md-12 r-card">
            <div class="card-body">
                <h5 class="card-title">binary search result</h5>
                <label>Time: ${time}</label>
                <br/>
                <label>${xdata.slice(0, -1)}</label>
                <div class="col-md-12 text-right">
                    <button id="goBack" type="button" class="btn btn-info">Back</button>
                </div>
            </div>
        </div>`
  );
}
