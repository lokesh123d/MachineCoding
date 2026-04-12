import React, { useEffect, useState } from 'react'

const UseLocalStorage = ({keyName,value}) => {

const [storeData, setstoreData] = useState(null)

useEffect(()=>{

localStorage.setItem(keyName,JSON.stringify(value));

let data = localStorage.getItem(keyName);

setstoreData(data);

},[keyName,value])


return storeData;

}

export default UseLocalStorage