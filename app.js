console.log('faysal al mamaun');

let point = {
    x : 0,
    y : 100,
    z : 45,
}

// delete point.z;

// console.log(JSON.stringify(point));

for(var i in point){
console.log(i);
}
let point2 = Object.assign({},point)
console.log(point)
point2.x=200;
console.log(point2)