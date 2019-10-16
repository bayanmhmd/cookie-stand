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


