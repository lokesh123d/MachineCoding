import React, { useEffect, useRef, useState } from "react";

const Otp = ({ otpLeng }) => {
  const [otpData, setotpData] = useState(
    Array.from({ length: otpLeng }, (_, i) => ({ id: i + 1, value: 0 })),
  );
  const inputRef = useRef([]);

  const [userInput, setuserInput] = useState(new Array(otpLeng).fill(""));

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleBackspace = (event, index) => {
    if (event.key !== "Backspace") return;

    const newArr = [...userInput];

    if (newArr[index] === "") {
      inputRef.current[index - 1]?.focus();
      newArr[index - 1] = "";
      setuserInput(newArr);
      return;
    }

    newArr[index] = "";
    setuserInput(newArr);
  };



  function handlechange(value, index) {

    if (isNaN(value)) return;
    let text = [...userInput];
    text[index] = value.slice(-1);
    inputRef.current[index + 1]?.focus();
    setuserInput(text);
  }

  return (
    <div>
      <h2>Otp Login</h2>
      {otpData.map((item, index) => {
        return (
          <input
          onKeyDown={(e) => handleBackspace(e, index)}
            type="text"
            value={userInput[index]}
            onChange={(e) => {                
              handlechange(e.target.value, index);
            }}
            key={item.id}
            ref={(input) => (inputRef.current[index] = input)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
