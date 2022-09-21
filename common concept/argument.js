function sum(a,b,c){
    // console.log(arguments)
    // console.log(arguments[4])
    const args =[...arguments];
    // console.log(args)
    const result = a+b+c;
    return result;
}

const total = sum(23, 45, 55, 56, 76, 65, 68);
// console.log(total);
// function e koyta parameter ache dekhar jonne
console.log(sum.length);