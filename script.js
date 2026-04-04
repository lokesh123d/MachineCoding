// let err = new Error;
// throw err

// throw new Error("The message");

// console.log(new Date.now)

// let obj = {
//     2:'lokesh'
// }
// console.log(obj[2]);

// function secondHeight(arr) {
//   let largest = -Infinity;
//   let second_largest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//       second_largest = largest;
//       largest = arr[i];
//     } else if (second_largest < arr[i]) {
//       second_largest = arr[i];
//     }
//   }
//   console.log(largest, second_largest);
// }

// secondHeight([1, 2, 3, 4, 5, 5,6]);

// function reverseString(str){
// let charItems = str.split('');
// let reversedString ='';
// for(let i = charItems.length-1;i>=0;i--){
// reversedString+=charItems[i]
// }
// console.log(reversedString);
// }
// reverseString('lokesh')

// const arr = [1,2,3,4,5,7,7];

// const max = arr.reduce((acc,ele)=>{
//  if(acc<ele){
//     return ele;
//  }
//  return acc;
// },-Infinity);
// console.log(max)

// let human = [{name:'lokeshdangwal',age:18},{name:'secondperson',age:34},{name:"i dont knwo",age:18}];

// let ob = human.reduce((acc,person)=>{
// if(acc[person.age]){
//   acc[person.age]+=1;
// }else{
//     acc[person.age]= 1;}
//     return acc
// },{})
// console.log(ob);

// let obj = {
//     name:'lokesh',
//     address:{
//         lat:20,
//         lang:48
//     }
// }

// let {address:{lat}} =obj
// console.log(lat)

function removeDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
      for (let j = i + 1; j < arr.length; j++) {
        // if(arr[i]==arr[j]){
        //     isDuplicate= true;
        // }
    if(arr[i]==arr[j]){
        arr.splice(j);
    }  
    }
    //  if(!isDuplicate){
    //      result.push(arr[i]);
    //  }
  
}
  console.log(arr);
}
removeDuplicate([1, 2, 3,7,4,1, 4, 2]);
