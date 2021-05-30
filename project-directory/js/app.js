"use strict";



// ---------------------------------------Seattle-------------------------------------------------------
// showing results on my sales html page

// creating 
let parent = document.getElementById('seattle');

// create a child element

let articleElement = document.createElement('article');

parent.appendChild(articleElement);


let h1Element = document.createElement('h1');

articleElement.appendChild(h1Element);

h1Element.textContent = "Seattle";

let ulList = document.createElement('ul');

articleElement.appendChild(ulList);

// let liList = document.createElement('li');

// ulList.appendChild(liList);




let hours = [`6am`, `7am`, `8am`, '9am', `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`, `8pm`,'total:'];


let seattle = {
    minHourlyCstmrs: 23,
    maxHourlyCstmrs: 65,
    avgCookiesACstmr: 6.3,

    randomHourlyCstmrsNum:[],

    expectedCookiesNum:[],



    
    
    getCstmrsNum: function () {
        let resultCstmrsHourly = getRandomNum(23, 65);
        for (let i = 0; i < hours.length; i++) {
            
            return resultCstmrsHourly = randomHourlyCstmrsNum.push(resultCstmrsHourly);
        }
        
    },
    
    
    getCookiesNumHourly: function () {
        let resultCookiesNum = getRandomNum(hours[i], resultCstmrsHourly*this.avgCookiesACstmr);
        
        for (let i = 0; i < hours.length; i++) {
            
            return resultCookiesNum = expectedCookiesNum.push(resultCookiesNum);
            
        }

        
        for (let j = 0; j < hours.length; j++) {
            
            let liList = document.createElement('li');
            
            ulList.appendChild(liList);
            return liList.textContent = (`${hours[i]} : ${resultCookiesNum} cookies `);
            
        }
    },
    
    
}



 function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
console.log(seattle);