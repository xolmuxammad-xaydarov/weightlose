"use strict";

const shops = [
  {rice: 500},
  {milk: 200},
  {bread: 80}
];

const bujet = [1200,3000,1000];

const map = new Map();

shops.forEach((item,i) => {
  map.set(item,bujet[i]);
})

for(let [key,value] of map.entries()){
  console.log(typeof(value),value,key);
}