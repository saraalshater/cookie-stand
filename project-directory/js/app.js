"use strict";



// ---------------------------------------Seattle-------------------------------------------------------
// showing results on my sales html page

// creating
let parent = document.getElementById('seattle');

// create a child element

let articleElement = document.createElement('article');

parent.appendChild(articleElement);


// let pElement = document.createElement('p');

// articleElement.appendChild(pElement);



// let ulList = document.createElement('ul');

// articleElement.appendChild(ulList);

// let liList = document.createElement('li');

// ulList.appendChild(liList);



function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let hours = [`6am`, `7am`, `8am`, '9am', `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];


// let seattle = {
//     minHourlyCstmrs: 23,
//     maxHourlyCstmrs: 65,
//     avgCookiesACstmr: 6.3,

//     randomHourlyCstmrsNum:[],

//     expectedCookiesNum:[],





//     getCstmrsNum: function () {

//         for (let i = 0; i < hours.length; i++) {

//              this.randomHourlyCstmrsNum.push(getRandomNum(this.minHourlyCstmrs, this.maxHourlyCstmrs));
//         }
//         console.log(this.randomHourlyCstmrsNum);
//     },


//     getCookiesNumHourly: function () {


//         for (let i = 0; i < hours.length; i++) {

//           this.expectedCookiesNum.push(Math.floor(this.randomHourlyCstmrsNum[i]*this.avgCookiesACstmr));

//         }

//         console.log(this.expectedCookiesNum);
//         // for (let j = 0; j < hours.length; j++) {

//         //     let liList = document.createElement('li');

//         //     ulList.appendChild(liList);
//         //      liList.textContent = (`${hours[i]} : ${resultCookiesNum} cookies `);

//         // }
//     },


// }

// seattle.getCstmrsNum();
// seattle.getCookiesNumHourly();

// __________________________________________________lab07______________________________________________________________

function Locations(minHourlyCstmrs, maxHourlyCstmrs, avgCookiesACstmr, location) {
    this.minHourlyCstmrs = minHourlyCstmrs;
    this.maxHourlyCstmrs = maxHourlyCstmrs;
    this.avgCookiesACstmr = avgCookiesACstmr;
    this.location = location;
    this.randomHourlyCstmrsNum = [];
    this.expectedCookiesNum = [];
    this.total = 0;



}



Locations.prototype.getCstmrsNum = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomHourlyCstmrsNum.push(getRandomNum(this.minHourlyCstmrs, this.maxHourlyCstmrs));

    }
    console.log(this.getCstmrsNum);
}


Locations.prototype.getCookiesNumHourly = function () {
    for (let i = 0; i < hours.length; i++) {
        this.expectedCookiesNum.push(Math.floor(this.randomHourlyCstmrsNum[i] * this.avgCookiesACstmr));

    }
    console.log(this.getCookiesNumHourly);
}


// Locations.prototype.render = function () {
//     let locationH1 = document.createElement('h1');
//     pElement.appendChild(locationH1);
//     locationH1.textContent = `${this.location}`;


//     let ulList = document.createElement('ul');
//     pElement.appendChild(ulList);

//     articleElement.appendChild(ulList);

//     for (let i = 0; i < hours.length; i++) {
//         // creating a list
//         let liList = document.createElement('li');


//         ulList.appendChild(liList);


//         liList.textContent = `${hours[i]}: ${this.expectedCookiesNum[i]} cookies`;
//     }

//     for (let i = 0; i < this.expectedCookiesNum.length; i++) {
//         this.total += this.expectedCookiesNum[i];
//         console.log(this.total);


//     }

//     let lastLiList = document.createElement('li');
//     ulList.appendChild(lastLiList);
//     lastLiList.textContent = `total : ${this.total}`;


// }

//___________________________________________rendering________________________________________________________________

let tableElement = document.createElement('table');
articleElement.appendChild(tableElement);


// ------------------------------------------HEADER ROW------------------------------------------------------

function headHoursRow() {

    let trFirstRow = document.createElement('tr');
    tableElement.appendChild(trFirstRow);
    let thName = document.createElement('th');
    trFirstRow.appendChild(thName);

    thName.textContent = 'Name';

    for (let i = 0; i < hours.length; i++) {


        let thHourRow = document.createElement('th');
        trFirstRow.appendChild(thHourRow);

        thHourRow.textContent = hours[i];
    }

    let thDailyLocationTotal = document.createElement('th');
    trFirstRow.appendChild(thDailyLocationTotal);
    thDailyLocationTotal.textContent = 'DailyLocationTotal';
}

headHoursRow();


// ----------------------------LOCATIONs RESULTS PROTOTYPE RENDER -----------------------------------------------------


Locations.prototype.displyingResultsFunc = function () {
    //creating the middle table rows
let trMiddleRows = document.createElement('tr');
tableElement.appendChild(trMiddleRows);
//creating the first cell in midlle rows which it location names
let tdLocationNames = document.createElement('td');
trMiddleRows.appendChild(tdLocationNames);
tdLocationNames.textContent = this.location ; 

// result cookies for each location and their totals
for (let i = 0; i < this.expectedCookiesNum.length; i++) {
    let tdExpectedCookiesNum = document.createElement('td');
    trMiddleRows.appendChild(tdExpectedCookiesNum);
    tdExpectedCookiesNum.textContent= this.getCookiesNumHourly[i];   

    let tdTotalCookies = document.createElement('td');
    trMiddleRows.appendChild(tdTotalCookies);
    tdTotalCookies.textContent = this.total += this.expectedCookiesNum[i] ; 
}
console.log(tdExpectedCookiesNum);
console.log(tdTotalCookies);

}











let seattle = new Locations(23, 65, 6.3, 'seattle');

seattle.displyingResultsFunc();

// console.log(seattle);
// seattle.getCstmrsNum();
// seattle.getCookiesNumHourly();
// seattle.render();
