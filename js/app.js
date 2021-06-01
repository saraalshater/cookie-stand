"use strict";




// getting the parent tag
let parent = document.getElementById('container');



// from w3schooles
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let hours = [`6am`, `7am`, `8am`, '9am', `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];

// __________________________________________________lab07______________________________________________________________

// create a global array that will hold all of the locations
let shops=[];

// Pascal

function Location(location, minCustomers, maxCustomers, avgCookies) {
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.locationName = location;
    this.customersEachHour = [];
    this.avgCookiesPerHour = [];
    this.total = 0;
    console.log(this);
    shops.push(this);
}

// creating megaTotal globally and adding in the getcookiesNumHourly method
let megaTotal=0;

Location.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(getRandomNum(this.minCustomers, this.maxCustomers));

    }
}


Location.prototype.getCookiesNumHourly = function () {
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));

        this.total+=this.avgCookiesPerHour[i];
        megaTotal+=this.avgCookiesPerHour[i];

    }
    
}


// ___________________________________________rendering________________________________________________________________

// creating the table
let tableElement = document.createElement('table');

// append to the div
parent.appendChild(tableElement);


// ------------------------------------------HEADER ROW------------------------------------------------------

function headHoursRow() {

    // table row for the header
    let trFirstRow = document.createElement('tr');

    // append for the table
    tableElement.appendChild(trFirstRow);

    // making the first th for the name
    let thName = document.createElement('th');

    // appending to the row
    trFirstRow.appendChild(thName);

    // giving text content
    thName.textContent = 'Name';

    for (let i = 0; i < hours.length; i++) {
        // craeting the th
        let thHourRow = document.createElement('th');

        // append to the row
        trFirstRow.appendChild(thHourRow);

        // give text content
        thHourRow.textContent = hours[i];
    }
 

    // the last th

    // make the th
    let thDailyLocationTotal = document.createElement('th');
    // appending
    trFirstRow.appendChild(thDailyLocationTotal);
    // text
    thDailyLocationTotal.textContent = 'DailyLocationTotal';
}



// ----------------------------LOCATIONs RESULTS PROTOTYPE RENDER -----------------------------------------------------
Location.prototype.render=function(){

    // you should worry about making it work for one shop

    // making row for the shop
    let dataRow=document.createElement('tr');

    // append to the table
    tableElement.appendChild(dataRow);

    // making the name td
    let nameTd=document.createElement('td');

    // append
    dataRow.appendChild(nameTd);

    // text content
    nameTd.textContent=this.locationName;


    for (let i = 0; i < hours.length; i++) {
        // create the td for the cookies
        let cookiesTd=document.createElement('td');

        // append
        dataRow.appendChild(cookiesTd);

        // text content
        cookiesTd.textContent=this.avgCookiesPerHour[i];

        // if on the llast loop do this
        
    }

    // make the total td

    let totalTd=document.createElement('td');

    // append
    dataRow.appendChild(totalTd);

    // text content
    totalTd.textContent=this.total;

}








// Location.prototype.displyingResultsFunc = function () {
//     //creating the middle table rows
// let trMiddleRows = document.createElement('tr');
// tableElement.appendChild(trMiddleRows);
// //creating the first cell in midlle rows which it location names
// let tdLocationNames = document.createElement('td');
// trMiddleRows.appendChild(tdLocationNames);
// tdLocationNames.textContent = this.locationName ; 

// // result cookies for each location and their totals
// for (let i = 0; i < this.avgCookiesPerHour.length; i++) {
//     let tdavgCookiesPerHour = document.createElement('td');
//     trMiddleRows.appendChild(tdavgCookiesPerHour);
//     tdavgCookiesPerHour.textContent= this.avgCookiesPerHour[i];   

// }
//     let tdTotalCookies = document.createElement('td');
//     trMiddleRows.appendChild(tdTotalCookies);
//     tdTotalCookies.textContent = this.total ; 
// // console.log(tdavgCookiesPerHour);
// // console.log(tdTotalCookies);

// }





// ================== making the footer row

function makingFooterRow() {
    // mkaing the footer row
    let footerRow=document.createElement('tr');

    // append
    tableElement.appendChild(footerRow);


    // making the first footer th
    let firstTh=document.createElement('th');

    // append it
    footerRow.appendChild(firstTh);

    // text content
    firstTh.textContent='Totals';

    // making the mega
    // let megaTotal=0;


    for (let i = 0; i < hours.length; i++) {
        // every time i go to the next 
       let totalForEachHour=0;
        //do calculations
        for (let j = 0; j < shops.length; j++) {
            // console.log(shops[j].avgCookiesPerHour[i]);

            totalForEachHour+=shops[j].avgCookiesPerHour[i];
            // megaTotal+=shops[j].avgCookiesPerHour[i];
            
        }
        console.log(totalForEachHour);
        // make the footer th
        let dataTh=document.createElement('th');

        // append
        footerRow.appendChild(dataTh);

        // text content
        dataTh.textContent=totalForEachHour;
        
    }



    console.log(megaTotal);
    // make the final th
    let finalTh=document.createElement('th');

    // append to footer row
    footerRow.appendChild(finalTh);

    // text content
    finalTh.textContent= megaTotal;


  
}








let seattle = new Location('Seattle',23, 65, 6.3);
let tokyo=new Location('Tokyo',3,24,1.2);
let dubai = new Location('Dubai',11,38,3.7);
let paris=new Location('Paris',20,38,2.3);
let lima=new Location('Lima',2,16,4.6);

// seattle.calcCustomersEachHour();
// seattle.getCookiesNumHourly();
// seattle.render();
// tokyo.calcCustomersEachHour();
// tokyo.getCookiesNumHourly();
// tokyo.render();

console.log(shops);


headHoursRow();

for (let i = 0; i < shops.length; i++) {
    shops[i].calcCustomersEachHour();
    shops[i].getCookiesNumHourly();
    shops[i].render();
}

makingFooterRow();