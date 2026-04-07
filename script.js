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

// let str = "ahabbccdde";
// let stringarr = str.split("");
// let arr = stringarr.reduce((acc, curr) => {
//   acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1);
//   return acc;
// }, {});

// for (let i = 0; i < stringarr.length; i++) {
//   if (arr[stringarr[i]] == 1) {
//     console.log(stringarr[i]);
//     break;
//   }
// }

// let str = "ahabbccdde";
// let stringarr = str.split("");
// for(let i =0;i<stringarr.length;i++){
//   for(let j =i+1;j<stringarr.length;j++){
//     if(stringarr[i]==stringarr[j]){
//       stringarr.splice(j,1);
//     }
//   }
// }
// console.log(stringarr.join(''));

// let str = 'i love js';
// let arr = str.split(' ');
// for(let i =0;i<arr.length;i++){
// arr [i] = arr[i][0].toLocaleUpperCase()+arr[i].slice(1);
// }
// let result = arr.join(' ');
// console.log(result)

//  let arr = [1,2,3,5,6,6,4,32,1];

//  for(let  i = 0;i<arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
// arr.splice(j,1);
//         }
//     }
//  }
//  console.log(arr);

// let x = 1;
// function foo(){
//     console.log(x);
//     var x = 2;
// }
// foo();

// setTimeout(()=>console.log(1),0);
// Promise.resolve().then(()=>console.log(2));
// queueMicrotask(()=>console.log(3));
// console.log(4);

// console.log ([...'lokesh']);

// let obj = {
//     name:"lokesh",
//     age:18
// }

// console.log(obj.__proto__)
// console.log(Object.getPrototypeOf(obj))

function flattenArray(arr) {
  let response = [];
  for (let i of arr) {
    if (typeof i == "object") {
      let result = flattenArray(i);
      response.push(...result);
    } else {
      response.push(i);
    }
  }
  return response;
}
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

function arrayChunking(arr, size) {
  let outside = [];
  for (let i = 0; i < arr.length; i += size) {
    let newarr = arr.slice(i, size + i);
    outside.push(newarr);
  }
  return outside;
}

// console.log(arrayChunking([1, 2, 3, 4, 5], 2));

function captilizeWordInString(str) {
  return str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// console.log(captilizeWordInString("hello world from natwest"))

function findMissingNumber(arr, size) {
  // let ExpectSum = (size * (size + 1)) / 2;
  // let acctualSum = arr.reduce((acc,item)=>{
  // return acc+=item;
  // },0)
  // return ExpectSum-acctualSum;
  let result = [];
  let count = 1;
  for (let i = 1; i <= size; i++) {
    if (!arr.includes(count)) {
      result.push(count);
    }
    count++;
  }
  return result;
}

// console.log(findMissingNumber([1, 2], 5));

function deepCloneObject(obj) {
  if (typeof obj != "object" && obj) {
    return obj;
  }
  let newObj = {};
  for (let val in obj) {
    newObj[val] = deepCloneObject(obj[val]);
  }
  return newObj;
}
// let real = { a: 1, b: { c: 2 } };
// let copy = deepCloneObject(real);
// copy.a = "changed";
// copy.b.c = "changed";
// console.log(real);

function findAllPairWithSum(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
// console.log(findAllPairWithSum([1,2,3,4,5],6))

function longestSubstring(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    let currentLongest = "";
    for (let j = i; j < str.length; j++) {
      if (!currentLongest.includes(str[j])) {
        currentLongest += str[j];
      } else {
        if (currentLongest.length >= longest) {
          longest = currentLongest;
        }
      }
    }
  }
  return longest;
}
// console.log(longestSubstring("lokeshdangwal"));

function longestsumodd(arr) {
  let longest = [];
  for (let i = 0; i < arr.length; i++) {
    let currentLongest = [];
    let isprevEven = arr[i] % 2 == 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (isprevEven && arr[j] % 2 != 0) {
        currentLongest.push(arr[j]);
        if (longest.length < currentLongest.length) {
          longest = currentLongest;
        }
        isprevEven = false;
      } else if (!isprevEven && arr[j] % 2 == 0) {
        currentLongest.push(arr[j]);
        if (longest.length < currentLongest.length) {
          longest = currentLongest;
        }
        isprevEven = true;
      }
    }
  }
  // console.log(longest);
}
// console.log(longestsumodd([1, 2, 3, 4, 2, 5, 6, 7, 8, 7, 9]));

function lognest(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentLongest = [];
    let prevEven = arr[i] % 2 == 0 ? true : false;
    currentLongest.push(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      let currentOneEven = arr[j] % 2 == 0 ? true : false;
      if (currentOneEven != prevEven) {
        currentLongest.push(arr[j]);
        prevEven = currentOneEven;
      } else if (currentOneEven == prevEven) {
        break;
      }
    }
    if (currentLongest.length > result.length) {
      result = currentLongest;
    }
  }
  return result;
}

// console.log(lognest([1, 2, 3, 4, 2, 5, 6, 7, 8, 7, 9]));

function longestAlternativePositiveNegative(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isPrevPositive = arr[i] >= 0;
    let currentLongest = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      let isCurrPositive = arr[j] >= 0;
      if (isPrevPositive != isCurrPositive) {
        currentLongest.push(arr[j]);
        isPrevPositive = isCurrPositive;
      } else {
        break;
      }
    }
    if (currentLongest.length > result.length) {
      result = currentLongest;
    }
  }

  return result;
}

// console.log(longestAlternativePositiveNegative([1, -2, 3, -4, -5, 6, -7]));

function longestIncreasingArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentLongest = [arr[i]];
    let prevNumber = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let currentNumber = arr[j];
      if (currentNumber > prevNumber) {
        currentLongest.push(currentNumber);
        prevNumber = currentNumber;
      } else {
        break;
      }
    }
    if (currentLongest.length > result.length) {
      result = currentLongest;
    }
  }
  return result;
}
// console.log(longestIncreasingArray([1, 2, 2, 3, 4, 1, 2]));



