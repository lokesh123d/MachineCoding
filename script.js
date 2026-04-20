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

function rightShift(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newIndex = (i + k) % arr.length;
    result[newIndex] = arr[i];
  }
  return result;
}
// console.log(rightShift([5,6,10,100,120],2))

// function leftShift(arr,k){
// let result =[];
// for(let i = 0;i<arr.length;i++){
// let newIndex =k%arr.length;
// result[newIndex] = arr[i];
// }
// return result

// }
// console.log(leftShift([5,6,10,100,120],1))

// let obj = {
//   name: "lokesh",
//   getName(...rest) {
//     console.log(rest    );
//   },
// };

// obj.getName.apply(obj,['web developer','kldfjlk']);

function debounce(func, delay) {
  let timer;
  return function () {
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

// // const debounceFunc =

// function doSomething(){
//   console.log('do something');
// }

// const debounceFunc = debounce(() => console.log("Hello"), 1000);

// for (let i = 0; i < 5; i++) {
//   debounceFunc(); // "Hello" logs once, 1 second after last call
// }

// let obj = {
//   name:'lokesh',
//   location:{
//     lat:345,
//     lna:34
//   }
// }

// let obj2 = JSON.parse(JSON.stringify(obj))

// obj2.location.lat = 'lokesh';

// console.log(obj);

function checkPanagram(str) {
  str = str.toLowerCase();
  let asciVal = new Set();
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z" && str[i].trim() !== "") {
      asciVal.add(str[i].charCodeAt());
    }
  }
  if (asciVal.size == 26) {
    return true;
  }
  return false;
}

// console.log(checkPanagram("qwertyuEOIRiopasjkh`dfghjklzxcvbnmKDJSFLEUROKNV"));

function time12to24(time) {
  const [fullTime, timeZone] = time.split(" ");
  let [hour, minute] = fullTime.split(":");
  if (timeZone == "AM" && hour == "12") return `00:${minute}`;
  if (timeZone == "AM") return fullTime;
  if (+hour != 12) hour = +hour + 12;
  return `${hour}:${minute}`;
}
// console.log(time12to24("1:20 PM"));

// let obj = { count: 0 };

// function update(data) {

//   data.count++;
// }

// update(obj);
// update(obj);

// console.log(obj.count);

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];

function groupKey(obj, key) {
  let result = {};

  for (let char of obj) {
    if (result[char[key]]) {
      result[char[key]].push(char);
    } else [(result[char[key]] = [char])];
  }

  return result;
}

// console.log(groupKey(users, "age"));

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     if (Date.now() - lastCall >= delay) {
//       lastCall = Date.now();
//       setInterval(() => {
//         func(...args);
//       }, delay);
//     }
//   };
// }

// function debounce(func, delay) {
//   return function (...args) {
//     clearTimeout(timer);
//     let timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// lru system

// function LruSystem(name){
// let listInfoList = [];
// return {
//   addUser :function(name){
// listInfoList.unshift(name);
// console.log(listInfoList);

// }
// }
// }
// let userData = LruSystem();

// userData.addUser('lokesh2')

function LruSystem() {
  let listInfoList = ["lokesh"];
  return function () {
    return {
      getList: function () {
        console.log(listInfoList);
      },
      addUser: function (userName) {
        listInfoList.unshift(userName);
      },
      removeUser: function () {
        listInfoList.pop();
      },
    };
  };
}

// const val = LruSystem();
// const userContainer = val();

// userContainer.addUser("dangwal");
// userContainer.getList();
// userContainer.removeUser();

function debouce(func, delay) {
  let timerid;
  return function (...args) {
    clearTimeout(timerid);
    timerid = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= delay) {
      func();
      lastCall = now;
    }
  };
}

function flattenObject(obj) {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] == "object") {
      result[key] = flattenObject(obj[key]);
    }
    console.log(key);
  }

  return result;
}

// console.log(
//   flattenObject({
//     a: 1,
//     b: { c: 2, d: { e: 3 } },
//   }),
// );

// let obj4 = {
//   a:{
//     c:10
//   },

//   b:3
// }
// let result = {};
// for(let key in obj4){
// if(typeof obj4[key] == 'object'){
//   result[key[key]]
// }
//   result[key] = obj4[key]
// }
// console.log(result);

function compareTwoOjects(obj, obj2) {
  for (let char in obj) {
    if (typeof obj[char] == "object" && typeof obj2[char] == "object") {
      compareTwoOjects(obj[char], obj2[char]);
    }
    if (obj[char] != obj2[char]) {
      return false;
    }
  }
  return true;
}

// console.log(
//   compareTwoOjects(
//     { a: 10, b: 20, c: { d: 30 } },
//     { a: 10, b: 20, c: { d: 30 } },
//   ),
// );

// let pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("First Promise Resolved");
//   }, 1000);
// });
// let pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("second Promise Resolved");
//   }, 2000);
// });
// let pr3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Third Promise Resolved");
//   }, 3000);
// });

function customePromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 1;
    promises.forEach((pr, index) => {
      Promise.resolve(pr).then((res) => {
        result[index] = res;
        completed++;

        if (promises.length == completed) {
          resolve(result);
        }
      }).catch = (err) => {
        reject(err);
      };
    });
  });
}

// customePromiseAll([pr1, pr2, pr3]).then((res)=>console.log(res))

// const obj = {
//   name:'lokesh',
//   location:{
//     lat:23,
//     lang:34
//   }

// }

// let obj2 = {...obj,location:{...obj.location,village:'sunkiya'}};

// // console.log(obj);

// const user = {
//   name: "Lokesh",
//   greet() {
//     return () => console.log(this.name);
//   }
// };

// user.greet()();

function reversedWord(str) {
  let newStr = str.split(" ").map((item) => {
    let transformstr = "";
    for (let i = item.length - 1; i >= 0; i--) {
      transformstr += item[i];
    }
    return transformstr;
  });

  return newStr.join(" ");
}

// console.log(reversedWord('hello world'))

function removeDuplicate2(arr) {
  // let result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (!result.includes(arr[i])) {
  //     result.push(arr[i]);
  //   }
  // }

  // return result;

  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// console.log(removeDuplicate2([1, 2, 3, 4, 5, 6, 2, 4, 2]));

function groupAnagram(arr) {
  let result = [];

  let asn = arr.map((item) => {
    return result?.map((val) => {
      if (val[0].sort().includes(item.sort())) {
        val.push(item);
      } else {
        result.push(val);
      }
    });
  });

  console.log(asn);
}

// console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))
function binarySearch(arr, last, first, target) {
  while (last >= first) {
    let mid = Math.floor((last + first) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 34, 57, 743];
// console.log(binarySearch(arr, arr.length - 1, 0, 34));

// console.log(Boolean([]));
// console.log(null == undefined);
// console.log([] + []);
// console.log({} + []);
// console.log(!!"false");
// console.log([1,2] == "1,2");
// console.log(typeof undefined);
// console.log(parseInt("10px"));
// console.log(parseInt("px10"));




// function PromiseRetry(pr, retryCount = 3) {
//   if (retryCount > 0) {
//     fetchAgain();
//   } else {
//     throw new Error("While Fetching the api it got rejected");
//   }

//   async function fetchAgain() {
//     console.log('char raha hai')
//     try {
//       const result = await pr;
//       return result;
//     } catch (err) {
//       retryCount--;

//       PromiseRetry(pr, retryCount);
//     }
//   }
// }

// let pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() * 10 + 1 > 5) {
//       resolve("haha resolve ho gya hai");
//     }
//     reject("he reject kya ho gya hai");
//   }, 3000);
// });



// console.log(PromiseRetry(pr, 3));




// const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 2;
// console.log(obj.a);


// console.log(typeof NaN === "number");



// const privateFunc =((lifeLine)=>{

// console.log(`Initial LifeLine ${lifeLine}`)
// return ()=>{
// lifeLine--;
// if(lifeLine<=0){
//   console.log('Life Line is Not Engough')
// }
// else{
//   console.log(`Remain life line ${lifeLine}`)
// }
// }
// })(3);

// privateFunc()
// privateFunc()
// privateFunc()




const closureFunc = (()=>{
const arr = [1,2,3,4,5];

return { 
  addData:(val)=>{
    arr.push(val);
    console.log(arr);
  },
  removeData:()=>{
  arr.pop();
  console.log(arr)  
  }
}


})()


closureFunc.addData(10);
closureFunc.removeData();