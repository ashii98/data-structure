function bubble_Sort(a) {
  let swapp;
  let n = a.length - 1;
  let x = a;
  do {
    swapp = false;
    for (let i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        let temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

$(document).on("click", "#sortButton", function() {
  const data = getList();
  if (data.length) {
    let start = window.performance.now();
    let sortedArray = bubble_Sort(data);
    let end = window.performance.now();
    let time = end - start;
    createResultSort(time, sortedArray.reverse());
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
