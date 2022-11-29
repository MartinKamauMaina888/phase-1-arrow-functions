// normal function

function Maina(){
    var sum= (20+20)
    return sum
}
console.log("Normal Function is:",Maina());

// arrow function

const MainaArrow = () =>{
    var sum= (20+20)
    return sum
}

console.log("Arrow Function is:",MainaArrow());

const add = (parameter1, parameter2) => {return parameter1 + parameter2};
add(2,3); //=> 5
console.log(add(2,3));

const single = x => {
    return x;
}


const nums = [1,2,3,4,5];

const myLoop = nums.map((num)=>{
    return num*2;
})

console.log("nums",nums);
console.log("myLoop",myLoop);
