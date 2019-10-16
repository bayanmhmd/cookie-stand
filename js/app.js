'use strict'
var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
var Seattle = {
    min: 23,
    max: 65,
    Avg: 6.3,
    hourlySales: [],
    dailySales: 0,
    salesInfo: [],
    avgCust: function () {
        var range = this.max - this.min;
        var randOm = Math.random() * range + this.min;
        return Math.ceil(randOm);
    },
    gHourlySale: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSold = Math.ceil(this.avgCust() * this.Avg);
            this.hourlySales.push(cookiesSold);
            this.dailySales += cookiesSold;
        }
        console.log(this.hourlySales)
    },
    //////render/////
    greatCookies: function () {
        var body=document.getElementById('content-area');
        var h2 = document.createElement('h2');
        console.log(body);
                   body.appendChild(h2);
                h2.textContent = 'seattle';
        var ul = document.createElement('ul');
        body.appendChild(ul);
        for (var i = 0; i < this.hourlySales.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Seattle.hourlySales[i]; +'cookies';
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.dailySales + ' cookies';
        li.appendChild(total);
    }
};
Seattle.gHourlySale();
Seattle.greatCookies();
////////////////// tokyo.//////////////////////
var Tokyo = {
    min: 3,
    max: 24,
    Avg: 1.2,
    hourlySales: [],
    dailySales: 0,
    salesInfo: [],
    avgCust: function () {
        var range = this.max - this.min;
        var randOm = Math.random() * range + this.min;
        return Math.ceil(randOm);
    },
    gHourlySale: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSold = Math.ceil(this.avgCust() * this.Avg);
            this.hourlySales.push(cookiesSold);
            this.dailySales += cookiesSold;
        }
        console.log(this.hourlySales)
    },
    //////render/////
    greatCookies: function () {
        var body=document.getElementById('content-area');
        var h2 = document.createElement('h2');
        console.log(body);
                   body.appendChild(h2);
                h2.textContent = 'tokyo';
        var ul = document.createElement('ul');
        body.appendChild(ul);
        for (var i = 0; i < this.hourlySales.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Tokyo.hourlySales[i]; +'cookies';
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.dailySales + ' cookies';
        li.appendChild(total);
    }
};
Tokyo.gHourlySale();
Tokyo.greatCookies();
///////////////////////// dubai////////////////
var Dubai = {
    min: 11,
    max:38,
    Avg: 3.7,
    hourlySales: [],
    dailySales: 0,
    salesInfo: [],
    avgCust: function () {
        var range = this.max - this.min;
        var randOm = Math.random() * range + this.min;
        return Math.ceil(randOm);
    },
    gHourlySale: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSold = Math.ceil(this.avgCust() * this.Avg);
            this.hourlySales.push(cookiesSold);
            this.dailySales += cookiesSold;
        }
        console.log(this.hourlySales)
    },
    //////render/////
    greatCookies: function () {
        var body=document.getElementById('content-area');
        var h2 = document.createElement('h2');
        console.log(body);
                   body.appendChild(h2);
                h2.textContent = 'dubai';
        var ul = document.createElement('ul');
        body.appendChild(ul);
        for (var i = 0; i < this.hourlySales.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Dubai.hourlySales[i]; +'cookies';
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.dailySales + ' cookies';
        li.appendChild(total);
    }
};
Dubai.gHourlySale();
Dubai.greatCookies();
///////////////////////// paris ///////////////
var Paris = {
    min: 20,
    max: 38,
    Avg: 2.3,
    hourlySales: [],
    dailySales: 0,
    salesInfo: [],
    avgCust: function () {
        var range = this.max - this.min;
        var randOm = Math.random() * range + this.min;
        return Math.ceil(randOm);
    },
    gHourlySale: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSold = Math.ceil(this.avgCust() * this.Avg);
            this.hourlySales.push(cookiesSold);
            this.dailySales += cookiesSold;
        }
        console.log(this.hourlySales)
    },
    //////render/////
    greatCookies: function () {
        var body=document.getElementById('content-area');
        var h2 = document.createElement('h2');
        console.log(body);
                   body.appendChild(h2);
                h2.textContent = 'paris';
        var ul = document.createElement('ul');
        body.appendChild(ul);
        for (var i = 0; i < this.hourlySales.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Paris.hourlySales[i]; +'cookies';
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.dailySales + ' cookies';
        li.appendChild(total);
    }
};
Paris.gHourlySale();
Paris.greatCookies();

////////////////// lima/////////////////
var Lima = {
    min: 2,
    max: 16,
    Avg: 4.6,
    hourlySales: [],
    dailySales: 0,
    salesInfo: [],
    avgCust: function () {
        var range = this.max - this.min;
        var randOm = Math.random() * range + this.min;
        return Math.ceil(randOm);
    },
    gHourlySale: function () {
        for (var i = 0; i < hours.length; i++) {
            var cookiesSold = Math.ceil(this.avgCust() * this.Avg);
            this.hourlySales.push(cookiesSold);
            this.dailySales += cookiesSold;
        }
        console.log(this.hourlySales)
    },
    //////render/////
    greatCookies: function () {
        var body=document.getElementById('content-area');
        var h2 = document.createElement('h2');
        console.log(body);
                   body.appendChild(h2);
                h2.textContent = 'lima';
        var ul = document.createElement('ul');
        body.appendChild(ul);
        for (var i = 0; i < this.hourlySales.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
            // li.textContent='6am:16 cookies';
            li.textContent = hours[i] + ':' + Lima.hourlySales[i]; +'cookies';
        }
        var total = document.createElement('li');
        total.textContent = 'Total: ' + this.dailySales + ' cookies';
        li.appendChild(total);
    }
};
Lima.gHourlySale();
Lima.greatCookies();


// 'use strict';
// var hours = [ ' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// function CookiesShop(max,min,avg,name) {
//     this.max =max;
//     this.min =min;
//     this.avg =avg;
//     this.name =name;

// }
// var seattle =new CookiesShop (65,23,6.3,'seattle');
// console.log('seattle', seattle);

// //var paris..............

// CookiesShop.prototype.randomRange =function (){
//     var range=this.max-this.min;
//     var rand = Math.random() * range + this.min;

// }    
//     return Math.ceil(rand);

 


// function HeaderRow() { //eslint-disable-line
//  var tableRow = document.createElement('tr');
//  for (var i = 0; i <= hours.length; i++) {
//    var thElement = document.createElement('th');
//    thElement.textContent = hours[i-1];
//    tableRow.appendChild(thElement);

//  }
//  thElement = document.createElement('th');
//  thElement.textContent = '          Total';
//  tableRow.appendChild(thElement);
// //  console.log(salesTable);
//  salesTable.appendChild(tableRow);
// };


// function Store(name, minCust, maximumCust, avarageCookies) {

//   this.name = name;
//  this.minCust = minCust;
//  this.maxCust = maximumCust;
//  this.avgCookie = avarageCookies;
 
//  this.avgCustArray = [];
//  this.cookiesEachHourArray = [];
//  this.totalCookies = 0;
//  storeLocations.push(this);
// }
// Store.prototype.numCustHourly = function() {
//  for (var i = 0; i <= hours.length; i++) {
//    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//    this.avgCustArray.push(singleHourCust);
//  }
// };
// Store.prototype.cookiesPerCustomer = function() {
//  this.numCustHourly();
//  for (var i = 0; i < hours.length; i++) {
//    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
//    this.cookiesEachHourArray.push(singleHourCookies);
//    this.totalCookies += singleHourCookies;
//  }
// };
// Store.prototype.render = function() {
//  this.cookiesPerCustomer();
//  var trRowName = document.createElement('tr');
//  var tdStore = document.createElement('td');
//  tdStore.textContent = this.name;
//  trRowName.appendChild(tdStore);
//  for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
//    var tdCell = document.createElement('td');
//    tdCell.textContent = this.cookiesEachHourArray[i];
//    trRowName.appendChild(tdCell);
//  };
//  var tdTotal = document.createElement('td');
//  tdTotal.textContent = this.totalCookies;
//  trRowName.appendChild(tdTotal);
//  salesTable.appendChild(trRowName);
// };


// var Seattle = new Store('Seattle', 2, 16, 4.6);
// var Tokyo = new Store('Tokyo', 3, 24, 1.2); 
// var Dubai = new Store('Dubai' , 11, 38, 3.7);
// var Paris = new Store('Paris', 20, 38, 2.3); 
// var Lima = new Store('Lima', 23, 65, 6.3); 


// function renderAllStores() {
//  for (var i = 0; i < storeLocations.length; i++) {
//    storeLocations[i].render();
//  }
// };

 

// function makeFooterRow() { //eslint-disable-line
//  var tableRow = document.createElement('tr');
//  tableRow.textContent = 'Totals';
//  salesTable.appendChild(tableRow);
//  var bigStupidTotal = 0;
//  for (var i = 0; i < hours.length; i++) {
//    var hourlyTotal = 0;
//    for (var j = 0; j < storeLocations.length; j++) {
//      hourlyTotal = hourlyTotal + storeLocations[j].cookiesEachHourArray[i];
//      bigStupidTotal += storeLocations[j].cookiesEachHourArray[i];
//      console.log(bigStupidTotal);
//    }
//    var tdElement = document.createElement('td');
//    tdElement.textContent = hourlyTotal;
//    tableRow.appendChild(tdElement);
//  }
//  tdElement = document.createElement('td');
//  tdElement.textContent = bigStupidTotal;
//  tableRow.appendChild(tdElement);
// };
// HeaderRow();
// renderAllStores();
// makeFooterRow();




// // var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
// //     '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// // var seattle = {
// //     Min: 23,
// //     Max: 65,
// //     Avarge: 6.3,
// //     cookiesArray: [],
// //     Ramdom: function () {
// //         var range = this.Max - this.Min;
// //         var rand = Math.floor(Math.random() * range) + this.Min;
// //         return rand;
// //     },
// //     amountOfCookiesPerHourFunction: function () {
// //         for (i = 0; i < 15; i++) {
// //             this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Ramdom());
// //             this.cookiesArray.push(this.amountOfCookiesCeil);
// //         }
// //         return this.cookiesArray;
// //     },

// // }

// // seattle.amountOfCookiesPerHourFunction();

// // var Tokyo = {
// //     Min: 3,
// //     Max: 24,
// //     Avarge: 1.2,
// //     cookiesArray: [],
// //     Random: function () {
// //         var range = this.Max - this.Min;
// //         var rand = Math.floor(Math.random() * range) + this.Min;
// //         return rand;
// //     },
// //     amountOfCookiesPerHourFunction: function () {
// //         for (i = 0; i < 15; i++) {
// //             this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
// //             this.cookiesArray.push(this.amountOfCookiesCeil);
// //         }
// //         return this.cookiesArray;
// //     },
// // }
// // Tokyo.amountOfCookiesPerHourFunction();


// // var Dubai = {
// //     Min: 11,
// //     Max: 38,
// //     Avarge: 3.7,
// //     cookiesArray: [],
// //     Random: function () {
// //         var range = this.Max - this.Min;
// //         var rand = Math.floor(Math.random() * range) + this.Min;
// //         return rand;
// //     },
// //     amountOfCookiesPerHourFunction: function () {
// //         for (i = 0; i < 15; i++) {
// //             this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
// //             this.cookiesArray.push(this.amountOfCookiesCeil);
// //         }
// //         return this.cookiesArray;
// //     },
// // }
// // Dubai.amountOfCookiesPerHourFunction();

// // var Paris = {
// //     Min: 20,
// //     Max: 38,
// //     Avarge: 2.3,
// //     cookiesArray: [],
// //     Random: function () {
// //         var range = this.Max - this.Min;
// //         var rand = Math.floor(Math.random() * range) + this.Min;
// //         return rand;
// //     },
// //     amountOfCookiesPerHourFunction: function () {
// //         for (i = 0; i < 15; i++) {
// //             this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
// //             this.cookiesArray.push(this.amountOfCookiesCeil);
// //         }
// //         return this.cookiesArray;
// //     },
// // }
// // Paris.amountOfCookiesPerHourFunction();

// // var Lima = {
// //     Min: 2,
// //     Max: 16,
// //     Avarge: 4.6,
// //     cookiesArray: [],
// //     Random: function () {
// //         var range = this.Max - this.Min;
// //         var rand = Math.floor(Math.random() * range) + this.Min;
// //         return rand;
// //     },
// //     amountOfCookiesPerHourFunction: function () {
// //         for (i = 0; i < 15; i++) {
// //             this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
// //             this.cookiesArray.push(this.amountOfCookiesCeil);
// //         }
// //         return this.cookiesArray;
// //     },
// // }
// // Lima.amountOfCookiesPerHourFunction();


// // arrayall = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
// // arrayall1 = [seattle, Tokyo, Dubai, Paris, Lima];
// // for (let j = 0; j < arrayall.length; j++) {
// //     var count = 0;
// //     document.write("<h2>", "* ", arrayall[j], "</h2>");
// //     document.write("<ul>");
// //     for (i = 0; i < 15; i++) {
// //         count += arrayall1[j].cookiesArray[i];
// //         document.write("<li>");
// //         document.write(Hours[i], ": ", arrayall1[j].cookiesArray[i], " Cookies.");
// //         document.write("<br>");
// //         document.write("</li>");
// //     }
// //     document.write("<li>", "Total : ", count, " Cookies.");
// //     document.write("</ul>");
// // }


