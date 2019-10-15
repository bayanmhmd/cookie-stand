"use strict"
var hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var seattleCookies = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales: [],
    dailySales: 0,

    randomCust: function () {
        var range = seattleCookies.max - seattleCookies.min;
        var randomCount = Math.random() * range + seattleCookies.min;
        return Math.ceil(randomCount);
    },

    hourlyDailySales: function () {
        for (var i = 0; i < hours.length; i++) {
            var numOfCookies = Math.ceil(seattleCookies.randomCust() * seattleCookies.avgCookieSale);
            seattleCookies.hourlySales.push(numOfCookies);
            seattleCookies.dailySales += numOfCookies;
        }
    },

    render: function () {
        var container = document.getElementById('content-area');
        var h2 = document.createElement('h2');
         container .appendChild(h2);
        h2.textContent = 'Seattle';
        container.appendChild(h2);
        var list = document.createElement('ul');
        container.appendChild(list);
        for (var i = 0; i < hours.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + seattleCookies.hourlySales[i] + ' cookies';
            list.appendChild(listItem);
        }
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + seattleCookies.dailySales + ' cookies';
        list.appendChild(listItem);


    },
}


seattleCookies.hourlyDailySales();
seattleCookies.render();






