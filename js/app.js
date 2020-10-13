'use strict';
var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationsArr = [];
var branches = [];
var hour = [];
function CookieShop(locationName, minCust, maxCust, avrCookie) {
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avrCookie = avrCookie;
    this.custPerHourArr = [];
    this.cookiesPerHourArr = [];
    this.totalCookies = 0;
    locationsArr.push(this);
}
CookieShop.prototype.calcCustPerHour = function () {
    for (var i = 0; i < hour.length; i++) {
        var customer = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
        this.custPerHourArr.push(customer);
    }
}
CookieShop.prototype.calcCookiesPerHour = function () {
    for (var i = 0; i < hour.length; i++) {
        var cookiePerHour = Math.floor(this.custPerHourArr[i] * this.avrCookie);
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
function createHeader() {
    var thE1 = document.createElement('th');
    var tdE1 = document.createElement('td');
    thE1.appendChild(tdE1);
    tdE1.textContent = '';
    for (var i = 0; i < hour.length; i++) {
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
CookieShop.prototype.render = function () {
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
    // var tableHeaders = ['Location', '6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    // var tableRows = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Totals'];  
}
seattle.render();


function createHeader() {
    var trrE1 = document.createElement('tr');
    var thhE1 = document.createElement('th');
    trrE1.appendChild(thhE1); thhE1.textContent = 'Location';
    for (var i = 0; i < hour.length; i++) {
        var thE2 = document.createElement('th');
        thE2.textContent = hour[i]; trrE1.appendChild(thE2);
    }
    var thE3 = document.createElement('th');
    thE3.textContent = "Daily Location Total";
    trrE1.appendChild(thE3); table.appendChild(trrE1);
}
var seattle = new CookieShop('Seattle', 23, 65, 6.3);
seattle.calcCustPerHour();
seattle.calcCookiesPerHour();
console.log(seattle);
var tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
tokyo.calcCustPerHour(); 
tokyo.calcCookiesPerHour();
console.log(tokyo);
 var dubai = new CookieShop('Dubai', 11, 38, 3.7);
dubai.calcCustPerHour(); 
dubai.calcCookiesPerHour();
 console.log(dubai);
var paris = new CookieShop('Paris', 20, 38, 2.3);
paris.calcCustPerHour();
paris.calcCookiesPerHour();
console.log(paris);
 var lima = new CookieShop('Lima', 2, 16, 4.6);
lima.calcCustPerHour(); 
lima.calcCookiesPerHour(); 
console.log(lima);

function buildTable(CookieShopArry){
    var section1 = document.getElementById('tableSection');
    var table1 = document.createElementNS('table');
    section1.appendChild('table');
    var thead1 = document.creatElement('thead1');
    var tr1 = document.creatElement('tr1');
    table1.appendChild(thead1);
    thead1.appendChild(tr1);
    var th1 = document.creatElement('th');
    tr1.appendChild(th1);
    for (var i = 0; i < hours.length; i++){
        var tableHeder = document.creatElement('th');
        tableHeder.textContent = hours[i];
        tr1.appendChild(tableHeader);
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
    var tr3 = document.creatElement('tr');
    var tr3d1 = document.creatElement('td');
    tr3d1.textContent = 'Total Cookies Per Hour';
    tr3.appendChild(tr3td1);
    var tfoot1 = document.creatElement('tfoot');
    table1.appendChild(tfoot1);
    var dailyTotal = 0;
    for (i = 0; i < hours.length; i++){
        var totalCookiesByHours = 0;
        for (j = 0; j < branchesArray.length; j++){
            totalCookiesByHours = totalCookiesByHours + branchesArray[j].cookiesPerSale[i];
        }
        var tr3td2 = document.creatElement('td');
        tr3td2.textContent = totalCookiesByHours;
        tr3.appendChild(tr3td2);
        dailyTotal = dailyTotal =totalCookiesByHours;
    }
    var tr3td3 = document.creatElement('td');
    tr3td3.textContent = dailyTotal;
    tr3.appendChild(tr3td3);
    tfoot1.appendChild(ttr3);
    }
    buildTable(CookieShop);
}