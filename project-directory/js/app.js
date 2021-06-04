"use strict";



// ---------------------------------------Seattle-------------------------------------------------------
// showing results on my sales html page

// getting element by id 
let parent = document.getElementById('locations');

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




let hours = [`6am`, `7am`, `8am`, '9am', `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];


let seattle = {
    minHourlyCstmrs: 23,
    maxHourlyCstmrs: 65,
    avgCookiesACstmr: 6.3,

    randomHourlyCstmrsNum:[],

    expectedCookiesNum:[],
total:0,


    
    
    getCstmrsNum: function () {
       
        for (let i = 0; i < hours.length; i++) {
            
            this.randomHourlyCstmrsNum.push(getRandomNum(this.minHourlyCstmrs,this.maxHourlyCstmrs));
        }
    // console.log(this.randomHourlyCstmrsNum);
    },

    
    
    
    getCookiesNumHourly: function () {
       
        
        for (let i = 0; i < hours.length; i++) {
            
             this.expectedCookiesNum.push(this.randomHourlyCstmrsNum[i]*Math.floor(this.avgCookiesACstmr));
             this.total+=this.expectedCookiesNum[i] ;
            
        }
        
        // console.log(this.expectedCookiesNum);
        // console.log(this.total);

       for (let j = 0; j < hours.length; j ++) {
           let liList = document.createElement('li');
           ulList.appendChild(liList);

           liList.textContent= `${hours[j]} : ${this.expectedCookiesNum[j]} cookies`;
       }

       let totalLi = document.createElement('li');
        ulList.appendChild(totalLi);
        totalLi.textContent= `total : ${this.total}`;
    },
    
    

    //   getTotal : function () {
    // //     for  (let i = 0; i < this.expectedCookiesNum.length; i++);{

    // //         this.total+=this.expectedCookiesNum[i] ;
    // //     }
    //     // let totalLi = document.createElement('li');
    //     // ulList.appendChild(totalLi);
    //     // totalLi.textContent= `total : ${this.total}`;

    // //     console.log(this.total);

    //   }
    
    
       
}
// seattle.getTotal();
seattle.getCstmrsNum();
seattle.getCookiesNumHourly();



 function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(seattle);


// --------------------------------------Tokyo----------------------------------------------------




let h1ElementTokyo = document.createElement('h1');

articleElement.appendChild(h1ElementTokyo);

h1ElementTokyo.textContent = "Tokyo";

let ulListTokyo = document.createElement('ul');

articleElement.appendChild(ulListTokyo);








let tokyo = {
    minHourlyCstmrs: 3,
    maxHourlyCstmrs: 24,
    avgCookiesACstmr: 1.2,

    randomHourlyCstmrsNum:[],

    expectedCookiesNum:[],
total:0,


    
    
    getCstmrsNum: function () {
       
        for (let i = 0; i < hours.length; i++) {
            
            this.randomHourlyCstmrsNum.push(getRandomNum(this.minHourlyCstmrs,this.maxHourlyCstmrs));
        }
    // console.log(this.randomHourlyCstmrsNum);
    },

    
    
    
    getCookiesNumHourly: function () {
       
        
        for (let i = 0; i < hours.length; i++) {
            
             this.expectedCookiesNum.push(this.randomHourlyCstmrsNum[i]*Math.floor(this.avgCookiesACstmr));
             this.total+=this.expectedCookiesNum[i] ;
            
        }
        
        // console.log(this.expectedCookiesNum);
        // console.log(this.total);

       for (let j = 0; j < hours.length; j ++) {
           let liListTokyo = document.createElement('li');
           ulListTokyo.appendChild(liListTokyo);

           liListTokyo.textContent= `${hours[j]} : ${this.expectedCookiesNum[j]} cookies`;
       }

       let totalLiTokyo = document.createElement('li');
       ulListTokyo.appendChild(totalLiTokyo);
        totalLiTokyo.textContent= `total : ${this.total}`;
    },
    
    

    
    
       
}
// seattle.getTotal();
tokyo.getCstmrsNum();
tokyo.getCookiesNumHourly();




// console.log(tokyo);

// --------------------------------------Dubai----------------------------------------------------




let h1ElementDubai = document.createElement('h1');

articleElement.appendChild(h1ElementDubai);

h1ElementDubai.textContent = "Dubai";

let ulListDubai = document.createElement('ul');

articleElement.appendChild(ulListDubai);








let Dubai = {
    minHourlyCstmrs: 11,
    maxHourlyCstmrs: 38,
    avgCookiesACstmr: 3.7,

    randomHourlyCstmrsNum:[],

    expectedCookiesNum:[],
total:0,


    
    
    getCstmrsNum: function () {
       
        for (let i = 0; i < hours.length; i++) {
            
            this.randomHourlyCstmrsNum.push(getRandomNum(this.minHourlyCstmrs,this.maxHourlyCstmrs));
        }
    // console.log(this.randomHourlyCstmrsNum);
    },

    
    
    
    getCookiesNumHourly: function () {
       
        
        for (let i = 0; i < hours.length; i++) {
            
             this.expectedCookiesNum.push(this.randomHourlyCstmrsNum[i]*Math.floor(this.avgCookiesACstmr));
             this.total+=this.expectedCookiesNum[i] ;
            
        }
        
        // console.log(this.expectedCookiesNum);
        // console.log(this.total);

       for (let j = 0; j < hours.length; j ++) {
           let liListDubai = document.createElement('li');
           ulListDubai.appendChild(liListDubai);

           liListDubai.textContent= `${hours[j]} : ${this.expectedCookiesNum[j]} cookies`;
       }

       let totalLiDubai = document.createElement('li');
       ulListDubai.appendChild(totalLiDubai);
        totalLiDubai.textContent= `total : ${this.total}`;
    },
    
    

    
    
       
}

Dubai.getCstmrsNum();
Dubai.getCookiesNumHourly();




// console.log(Dubai);



// --------------------------------------Paris----------------------------------------------------




let h1ElementParis = document.createElement('h1');

articleElement.appendChild(h1ElementParis);

h1ElementParis.textContent = "Paris";

let ulListParis = document.createElement('ul');

articleElement.appendChild(ulListParis);








let Paris = {
    minHourlyCstmrs: 20,
    maxHourlyCstmrs: 38,
    avgCookiesACstmr: 2.3,

    randomHourlyCstmrsNum:[],

    expectedCookiesNum:[],
total:0,


    
    
    getCstmrsNum: function () {
       
        for (let i = 0; i < hours.length; i++) {
            
            this.randomHourlyCstmrsNum.push(getRandomNum(this.minHourlyCstmrs,this.maxHourlyCstmrs));
        }
    // console.log(this.randomHourlyCstmrsNum);
    },

    
    
    
    getCookiesNumHourly: function () {
       
        
        for (let i = 0; i < hours.length; i++) {
            
             this.expectedCookiesNum.push(this.randomHourlyCstmrsNum[i]*Math.floor(this.avgCookiesACstmr));
             this.total+=this.expectedCookiesNum[i] ;
            
        }
        
        // console.log(this.expectedCookiesNum);
        // console.log(this.total);

       for (let j = 0; j < hours.length; j ++) {
           let liListParis = document.createElement('li');
           ulListParis.appendChild(liListParis);

           liListParis.textContent= `${hours[j]} : ${this.expectedCookiesNum[j]} cookies`;
       }

       let totalLiParis = document.createElement('li');
       ulListParis.appendChild(totalLiParis);
        totalLiParis.textContent= `total : ${this.total}`;
    },
    
    

    
    
       
}

Paris.getCstmrsNum();
Paris.getCookiesNumHourly();




// console.log(Paris);

// --------------------------------------Lima----------------------------------------------------




let h1ElementLima = document.createElement('h1');

articleElement.appendChild(h1ElementLima);

h1ElementLima.textContent = "Lima";

let ulListLima = document.createElement('ul');

articleElement.appendChild(ulListLima);








let Lima = {
    minHourlyCstmrs: 2,
    maxHourlyCstmrs: 16,
    avgCookiesACstmr: 4.6,

    randomHourlyCstmrsNum:[],

    expectedCookiesNum:[],
total:0,


    
    
    getCstmrsNum: function () {
       
        for (let i = 0; i < hours.length; i++) {
            
            this.randomHourlyCstmrsNum.push(getRandomNum(this.minHourlyCstmrs,this.maxHourlyCstmrs));
        }
    // console.log(this.randomHourlyCstmrsNum);
    },

    
    
    
    getCookiesNumHourly: function () {
       
        
        for (let i = 0; i < hours.length; i++) {
            
             this.expectedCookiesNum.push(this.randomHourlyCstmrsNum[i]*Math.floor(this.avgCookiesACstmr));
             this.total+=this.expectedCookiesNum[i] ;
            
        }
        
        // console.log(this.expectedCookiesNum);
        // console.log(this.total);

       for (let j = 0; j < hours.length; j ++) {
           let liListLima = document.createElement('li');
           ulListLima.appendChild(liListLima);

           liListLima.textContent= `${hours[j]} : ${this.expectedCookiesNum[j]} cookies`;
       }

       let totalLiLima = document.createElement('li');
       ulListLima.appendChild(totalLiLima);
        totalLiLima.textContent= `total : ${this.total}`;
    },
    
    

    
    
       
}

Lima.getCstmrsNum();
Lima.getCookiesNumHourly();




// console.log(Paris);