// console.log(null ?? (false || true));
// let x=5;
// console.log(x++ + ++x);

// let x=1;
// let y= (x++, x+1);
// console.log(y);


// let x = 10;
// console.log(x > 5 ? x < 20 ? "A" : "B" : "C");\      
//       const obj = {};
// console.log(obj.toString);



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1 resolved');
//     }, 2000);
// });

// async function fetchData(){

//     console.log('Fetching data...');
//     const result = await promise1;
//     console.log(result);

//     console.log('Data fetched successfully');





// }


// console.log('Program started');
// promise1.then((result) => {
//     console.log(result);
//     console.log('Promise 1 resolved, now doing something else...');
// }).catch((error) => {
//     console.error('Error:', error);
// });

// console.log('This will log before the promise resolves');


// console.log('this program is running');



// async function test() {
   
//   return 5;
// }

// test().then(console.log);



// const response = (a)=> console.log;
// const lokeshPrintKar = response();
// lokeshPrintKar(87);
// lokeshPrintKar(87);

// console.log(+[1,2]);
// console.log(+[3+2]);


// console.log([].toString());


// function User() {}
// User.prototype.name = "A";

// const u = new User();
// User.prototype = { name: "B" };
// const u2 = new User();


// console.log(u.name);
// console.log(u2.name);


// const arr = Array.from({length:5},(_,idxr)=>Array.from({length:5},(_,i)=>{return {id:i+'-'+idxr}}));
// // const arr = new Array(5).fill(Array.from({length:5},(_,i)=>{id:i}))
// console.log(arr)



// const arr = [1,2,3];
// delete arr[1];

// console.log(arr);


const li = document.querySelector('li')
console.log(li.dataset.id)