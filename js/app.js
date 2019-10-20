'use strict';
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var locations = [];
var salmonTable = document.getElementById('salmonTable');
var salesInput = document.getElementById('salesInput');
function ShopOfCookies(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
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
    var hourCustmor = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.averageCustomersPerHour.push(hourCustmor);
  }
};
ShopOfCookies.prototype.cookiesPerCustomer = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avg);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};
///////////////////////// 
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
  if (!event.target.name.value || !event.target.min.value || !event.target.max.value || !event.target.a+vg.value) {
    return alert('Fields cannot be empty!');
  }
  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);
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
    
    locations[index].min = parseInt(min);
    locations[index].max = parseInt(max);
    locations[index].avg = parseFloat(avg);
    locations[index].averageCustomersPerHour = [];
    locations[index].averageCookiesPerHour = [];
    locations[index].totalCookiesPerDay = 0;
    locations[index].numOfCustomersPerHour();
    locations[index].cookiesPerCustomer();
  }
  if (storeExist === false) {
    var newStore = new ShopOfCookies(name, min, max, avg);
  }
  headRow();
  renderAllStores();
  makeFooterRow();
}
headRow();
renderAllStores();
makeFooterRow();
salesInput.addEventListener('submit', dataInput);

