function doSOmething(){
    console.log();
}

console.log(11111);
console.log(22222);

// setTimeout(()=>{console.log('third')}, 5000)
// setTimeout(doSOmething)

// setTimeout(() =>{
    // })

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      
console.log(33333);
console.log(44444);
console.log(55555);