const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let average = 0;
let count = 0;

function updateAveragePrice(person) {
  count = count + 1;
  average = (average + person.price) / count;
  const priceElement = document.getElementById("average");
  priceElement.innerHTML = average.toFixed(2);
}

function addPersonToTheList(person) {
  const tableBody = document.getElementById("table-body");
  const newRow = document.createElement("tr");
  const nameCell = document.createElement("th");
  nameCell.innerHTML = person.name;
  const occupationCell = document.createElement("td");
  occupationCell.innerHTML = person.occupation;
  const startingPriceCell = document.createElement("td");
  startingPriceCell.innerHTML = "$" + person.price;
  newRow.appendChild(nameCell);
  newRow.appendChild(occupationCell);
  newRow.appendChild(startingPriceCell);
  tableBody.appendChild(newRow);
}

function initPersonGenerator() {
  setInterval(function () {
    var randomPersonIndex = Math.floor(Math.random() * freelancers.length);
    var person = freelancers.splice(randomPersonIndex, 1);
    updateAveragePrice(person[0]);
    addPersonToTheList(person[0]);
  }, 5000);
}

function start() {
  //Adds Alice
  addPersonToTheList(freelancers[0]);
  updateAveragePrice(freelancers[0]);
  //Adds Bob
  addPersonToTheList(freelancers[1]);
  updateAveragePrice(freelancers[1]);
  //Remove Alice & Bob from the array
  freelancers.splice(0, 2);
  initPersonGenerator();
}

start();
