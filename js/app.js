'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function ShopOfCookies(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;

    this.total = 0;
    this.randomNumber = 0;
    this.cookiesperhour = [];

};
var cookiesperhour = [];

var seattle = new ShopOfCookies('seattle', 23, 65, 6.3);
var tokyo = new ShopOfCookies('tokyo', 3, 24, 1.2);
var dubai = new ShopOfCookies('dubai', 11, 38, 3.7);
var paris = new ShopOfCookies('paris', 20, 38, 2.3);
var lima = new ShopOfCookies('lima', 2, 16, 4.6);
var locationsnames = [seattle, tokyo, dubai, paris, lima];

ShopOfCookies.prototype.randomInRange = function () {
    var range = this.max - this.min;
    var rand = (Math.random() * range) + this.min;
    var randomNumber = Math.ceil(rand);
    return randomNumber;
};


ShopOfCookies.prototype.numberofcookies = function () {
    for (var i = 0; i < hours.length; i++) {
        var result = this.randomInRange(this.min, this.max);
        var cookiespur = Math.ceil(this.avg * result);
        this.cookiesperhour.push(cookiespur);
        this.total += cookiespur;
    }
}



for (var i = 0; i < locationsnames.length; i++) {
    console.log('totaldata', locationsnames[i]);
    locationsnames[i].numberofcookies();
}



console.log('Seattle', cookiesperhour);


var contentArea = document.getElementById('content-area');
var cookietable = document.createElement('table');
contentArea.appendChild(cookietable);
///////////*****////////////


function HeadRow(table) {

    var HeadRow = document.createElement('tr');
    table.appendChild(HeadRow);
    var Header = document.createElement('th');
    HeadRow.appendChild(Header);
    Header.textContent = '     ';

    for (var i = 0; i < hours.length; i++) {
        var hourS = document.createElement('th');
        HeadRow.appendChild(hourS);
        hourS.textContent = hours[i];
    }
    var totallocation = document.createElement('th');
    HeadRow.appendChild(totallocation);
    totallocation.textContent = 'Daily Location Total';
}
HeadRow(cookietable);
//////////////////////............///////////////////
// ShopOfCookies.prototype.data = function () {
//     var dataRow = document.createElement('tr');
//     cookietable.appendChild(dataRow);

//     var shoplocationNames = document.createElement('th');
//     dataRow.appendChild(shoplocationNames);
//     shoplocationNames.textContent = this.shoplocation;

//     for (var i = 0; i < this.cookiesperhour.length; i++) {

//         var cookiesperhour = document.createElement('td');
//         dataRow.appendChild(cookiesperhour);
//         cookiesperhour.textContent = this.cookiesperhour[i];
//     }
//     var totalcookies = document.createElement('td');
//     dataRow.appendChild(totalcookies);
//     totalcookies.textContent = this.total;
// };
// for (var i = 0; i < locationsnames.length; i++) {

//     this.locationsnames[i].data();

// }
ShopOfCookies.prototype.renderDataRows = function () {
    var dataRow = document.createElement('tr');
    cookietable.appendChild(dataRow);

    var locationNames = document.createElement('th');
    dataRow.appendChild(locationNames);
    locationNames.textContent = this.locationNames;

    for (var i = 0; i < this.cookiesperhour.length; i++) {

        var cookiesperhour = document.createElement('td');
        dataRow.appendChild(cookiesperhour);
        cookiesperhour.textContent = this.cookiesperhour[i];
    }
    var totalcookies = document.createElement('td');
    dataRow.appendChild(totalcookies);
    totalcookies.textContent = this.total;
};
for (var i = 0; i < locationsnames.length; i++) {

    this.locationsnames[i].renderDataRows();

}

function footerRows(table) {
    var HeadRow = document.createElement('tr');
    table.appendChild(HeadRow);
    var tHour = document.createElement('td');
    HeadRow.appendChild(tHour);
    tHour.textContent = 'Totals';
    for (var i = 0; i < hours.length; i++) {
        var tHour = document.createElement('td');
        HeadRow.appendChild(tHour);
        tHour.textContent = seattle.cookiesperhour[i] + tokyo.cookiesperhour[i] + dubai.cookiesperhour[i] + paris.cookiesperhour[i] + lima.cookiesperhour[i];


    }
    var totaloftotal = document.createElement('td');
    HeadRow.appendChild(totaloftotal);
    totaloftotal.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;


}
footerRows(cookietable);


