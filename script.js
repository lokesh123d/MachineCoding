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

// function removeDuplicate(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//       for (let j = i + 1; j < arr.length; j++) {
//         // if(arr[i]==arr[j]){
//         //     isDuplicate= true;
//         // }
//     if(arr[i]==arr[j]){
//         arr.splice(j);
//     }  
//     }
//     //  if(!isDuplicate){
//     //      result.push(arr[i]);
//     //  }
  
// }
//   console.log(arr);
// }
// removeDuplicate([1, 2, 3,7,4,1, 4, 2]);




// function smallestNumber(arr){
//   let smallest = arr[0];
//   for(let i = 0;i<arr.length;i++){
//     if(smallest>arr[i]){
//       smallest = arr[i];
//     }
//   }
//   console.log(smallest);
// }
// smallestNumber([1,2,3,5,6,7]);






// var x = 10;
// {
//   var x = 20;
// }
// console.log(x);


// let x = 10;
// let obj = {
//   name:'lokehs',
//   x:20,
//   getX:()=>{
//     console.log(this)
//     console.log(this.x);
//   }
// }

// obj.getX();


// console.log([]+[]);
// console.log({}+[]);
// console.log({}+{});

// console.log(0&&'hello');
// console.log('hello'&&0)


// console.log(0||'hello');
// console.log('hello'||0)



// let arr = [0,,0,2,1,2,0,4];
// let newarr = arr.filter((val)=>val!=0)
// for(let i = 0;i<=arr.length-newarr.length;i++){
//   newarr.push(0);
// }
// console.log(newarr);




// let str = 'aabbcchddd';
// let result = {};
// for(let i = 0;i<str.length;i++){
//   if(result[str[i]]){
//     result[str[i]]+=1;
//   }else{
//     result[str[i]] = 1;
//   }
// }
// console.log(result);



// chunk with the size in array 

// let arr = [1,2,3,4,5];
// let size = 3;
// let ans = [];
// for(let i = 0;i<arr.length;i++){
//   let count = 0;
//   let inside = [];
//   for(let j = i;j<arr.length;j++){
//     if(size == count){

//       i+=size-1
// break;
//     }else{
//       inside.push(arr[j]);
//       count++;
      
//     }
//   }
//   ans.push(inside);
// // }

// // console.log(ans);
// // var name = 'kuch beh'
// const obj = {
//   name: "Lokesh",
//   greet:()=> {
//     // console.log(this)
//     return this.name;
//   },
// };

// const fn = obj.greet();
// console.log(fn);



// console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;


// console.log(null == undefined);



// const arr = [1, 2, 3];

// const mappedResult = arr.map(num =>num>2 )
// console.log(mappedResult);

// let name = 'lokehs';
// const obj = {
//   name: "JS",
//   show: () => {
//     console.log(this)
//     console.log(this.name);
//   },
// };

// obj.show();



// let str = 'lokesh';

// for(let i = 0;i<str.length;i++){
//   let count = 0;
// for(let j = i;j<str.length;j++){
//   if(str[i]==str[j]){
// count++;
//   }
// }
// if(count ==1){
//   console.log(str[i])
//   return
// }
// }



// let str = 'aaksdjiwkeior';
// let newString = '';
// for(let i = 0;i<str.length;i++){
//   let count = 0;
//   for(let j = i+1;j<str.length;j++){
//     if(str[i]!=str[j]){
//      if(count==0){

//        newString+=str[i];
//      count++;
//       }
//     }
//   }
// }
// console.log(newString);



let sr