// const useDebouce = (func, delay) => {
//   let timer;
//   const debouceFunc = function (...args) {
// if(timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };

//   return debouceFunc;
// };

// function searchFilter(){
//     console.log('search filter')
// }

// const debouceFunc = useDebouce(searchFilter,4000);

// debouceFunc('ya search karna hai esko search kar')








// const useLocalStorage = (key, value) => {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     if (storedValue) return storedValue;
//     localStorage.setItem(key, JSON.stringfy(value));
//     return value;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringfy(value));
//   }, [value, key]);

//   return [value, setValue];
// };



// const [value,setValue] = useLocalStorage('userData',[{id:'sdfewr',name:'lokesh'}]);

// setValue({id:'newid',name:'newusername'})


// const useCache=(query)=>{
//     const [cache,setCache] = useLocalStorage('cache',{});

// if(query in cache){
//     return cache[key];
// }

// useEffect(()=>{
// setCache(prev=>{
//     return {...prev,}
// })
// },[query])


// }


const useFetch=(data,query)=>{

    data.fiter((item))


}