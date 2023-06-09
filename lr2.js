let expectedTimeSum = 0;
let realTimeSum = 0;
let tables = document.getElementsByTagName("table");
let rows = tables[0].rows;
for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].cells;
    expectedTimeSum += (+(cells[2].innerText));
    cells[4].innerText = expectedTimeSum;
    realTimeSum += (+(cells[3].innerText));
    cells[5].innerText = realTimeSum;
}