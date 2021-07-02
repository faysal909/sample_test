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

function test(a,b,c){
    let sum = 0;
    // console.log(arguments);
    for(let i = 0; i<arguments.length;i++){   
       sum+= arguments[i];       
    }
    let makeString = sum.toString();
    console.log(makeString);
}
test(10,15);

