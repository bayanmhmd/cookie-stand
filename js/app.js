'string'
var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];

let Seattle = {
    min: 23,
    max: 65,
    average: 6.3,
    arrSeattle: [],
    EachHour: function (min, max ) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var final = Math.ceil(rand);
        return (final);
    },
    
    cookies: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookies = this.EachHour(Seattle.min, Seattle.max) / Seattle.average;
            hours[i][1] = Math.ceil(cookies);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        
        return hours;
    }
}

var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];
let Tokyo = {
    min: 3,
    max: 24,
    average: 1.2,
    arrTokyo: [],
   EachHour: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookies: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookies = this.EachHour(Seattle.min, Seattle.max) / Seattle.average;
            hours[i][1] = Math.ceil(cookies);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

let Dubai = {
    min: 11,
    max: 38,
    average: 3.7,
    EachHour: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookies: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookies = this.EachHour(Seattle.min, Seattle.max) / Seattle.average
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

let Paris = {
    min: 20,
    max: 38,
    average: 2.3,
   EachHour: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookies: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookies = this.EachHour(Seattle.min, Seattle.max) / Seattle.average;
            hours[i][1] = Math.ceil(cookies);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

let Lima = {
    min: 2,
    max: 16,
    average: 4.6,
   EachHour: function (min, max) {
        var range = max - min;
        var rand = (Math.random() * range) + min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookies: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookies = this.EachHour(Seattle.min, Seattle.max) / Seattle.average;
            hours[i][1] = Math.ceil(cookies);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

