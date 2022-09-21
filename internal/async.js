function doSOmething(){
    console.log('third');
}

console.log('first');
console.log('second');
const timeoutID = setTimeout(()=>
{
    console.log('third');
    
}, 1000);

// setTimeout(()=>{console.log('third')}, 5000)
// setTimeout(doSOmething)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

console.log('fourth');
console.log('fifth');