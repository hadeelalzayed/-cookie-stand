'use strict';
var hour = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationsArr = [];
function CookieShop(locationName, minCust, maxCust, avrCookie){
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avrCookie = avrCookie;
    this.custPerHourArr = [];
    this.cookiesPerHourArr = [];
    this.totalCookies = 0;
    locationsArr.push(this);
}
CookieShop.prototype.calcCustPerHour= function(){
    for (var i=0; i<hour.length; i++){
        var customer = Math.floor(Math.random() * (this.maxCust - this.minCust) ) + this.minCust;
        this.custPerHourArr.push(customer);
    }
}
CookieShop.prototype.calcCookiesPerHour = function(){
    for (var i=0; i<hour.length;i++){
        var cookiePerHour = Math.floor(this.custPerHourArr[i]*this.avrCookie);
        this.cookiesPerHourArr.push(cookiePerHour);
        this.totalCookies += cookiePerHour;
    }
    console.log(this.totalCookies);
}
var seattle = new CookieShop('Seattle', 23, 65, 6.3)
seattle.calcCustPerHour();
seattle.calcCookiesPerHour();
console.log(seattle);

var table = document.createElement('table');
CookieShop.appendChild(table);
var trE1 = document.createElement('tr');
table.appendChild(trE1);
var locationsArr =['Seattle','Tokyo','Dubai','Paris','lima','Total'];
for(var i=0; i<locationsArr.length; i++){
    var thE = document.createElement('th');
    trE1.appendChild(thE);
    thE.textContent = locationsArr[i];
}
function createHeader () {
    var thE1 = document.createElement('th');
    var tdE1 = document.createElement('td');
    thE1.appendChild(tdE1);
    tdE1.textContent = '';
    for (var i=0; i<hour.length; i++){
        var thE2 = document.createElement('th');
        thE1.appendChild(thE2);
        thE2.textContent = hour[i];
    }
    var thE3 = document.createElement('th');
    thE1.appendChild(thE3);
    thE3.textContent = "Total";
    table.appendChild(thE1);
}
console.log(createHeader());
CookieShop.prototype.render =
 function(){

 

    var container = document.getElementById("cookiesTable");
    var title = document.createElement("h1");
    container.appendChild(title);
    title.textContent = "Salmon Cookies Sales Page";
    // var table = document.createElement("table");
    container.appendChild(table);
    var trE1 = document.createElement('tr');
    table.appendChild(trE1);
    var tdE2 = document.createElement('td');
    trE1.appendChild(tdE2);
    tdE2.textContent = this.locationName;
 }
    // var tableHeaders = ['Location', '6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    // var tableRows = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Totals'];  
}
seattle.render();