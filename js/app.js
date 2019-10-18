'use strict';
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var locations = [];
var salmonTable = document.getElementById('salmonTable');
var salesInput = document.getElementById('salesInput');
function ShopOfCookies(name, Min, Max, Avg) {
  this.name = name;
  this.Min = Min;
  this.Max = Max;
  this.Avg = Avg;
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  locations.push(this);
}
ShopOfCookies.prototype.render = function() {
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (var i = 0; i < this.averageCookiesPerHour.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trRowName.appendChild(tdCell);
  };
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trRowName.appendChild(tdTotal);
  salmonTable.appendChild(trRowName);
};
ShopOfCookies.prototype.numOfCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};
ShopOfCookies.prototype.cookiesPerCustomer = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.Avg);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};
//Table creation functions
function headRow() { 
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = null;
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
    
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(salmonTable);
  salmonTable.appendChild(tableRow);
};
function renderAllStores() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].render();
  }
};
function makeFooterRow() { 
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salmonTable.appendChild(tableRow);
  var bigTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < locations.length; j++) {
      hourlyTotal = hourlyTotal + locations[j].averageCookiesPerHour[i];
      bigTotal += locations[j].averageCookiesPerHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = bigTotal;
  tableRow.appendChild(tdElement);
}
new ShopOfCookies('Settle', 23, 65, 6.3);
new ShopOfCookies('Tokyo', 11, 38, 3.7); 
new ShopOfCookies('Dubai', 3, 24, 1.2); 
new ShopOfCookies('Paris', 20, 38, 2.3); 
new ShopOfCookies('Lima', 2, 16, 4.6); 
function dataInput(event) {
  event.preventDefault();
  console.log('Submit button was clicked');
  if (!event.target.name.value || !event.target.Min.value || !event.target.Max.value || !event.target.Avg.value) {
    return alert('Fields cannot be empty!');
  }
  var name = event.target.name.value;
  var Min = parseInt(event.target.Min.value);
  var Max = parseInt(event.target.Max.value);
  var Avg = parseFloat(event.target.Avg.value);
    salmonTable.textContent = null;
  var storeExist = doesStoreExist(locations, name);
  var index;
  function doesStoreExist(x,y) {
    for (var i = 0; i < x.length; i++) {
      if (x[i].name === y) {
        index = i;
        return true;
      }
    }
    return false;
  }
  doesStoreExist(locations, name);
  console.log(doesStoreExist(locations, name));
  if (storeExist === true) {
    console.log('did find name');
    locations[index].Min = parseInt(Min);
    locations[index].Max = parseInt(Max);
    locations[index].Avg = parseFloat(Avg);
    locations[index].averageCustomersPerHour = [];
    locations[index].averageCookiesPerHour = [];
    locations[index].totalCookiesPerDay = 0;
    locations[index].numOfCustomersPerHour();
    locations[index].cookiesPerCustomer();
  }
  if (storeExist === false) {
    var newStore = new ShopOfCookies(name, Min, Max, Avg);
  }
  headRow();
  renderAllStores();
  makeFooterRow();
}
headRow();
renderAllStores();
makeFooterRow();
salesInput.addEventListener('submit', dataInput);

