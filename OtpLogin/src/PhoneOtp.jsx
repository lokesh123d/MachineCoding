import React, { useEffect, useRef, useState } from "react";

const PhoneOtp = ({ otpLength }) => {
  const [otp, setotp] = useState(new Array(otpLength).fill(""));

  const inputRef = useRef([]);



  function handleChange(index, e) {
    let value = e.target.value;
    if(isNaN(value)) return;
    let newotp = [...otp];
    newotp[index] = value.slice(-1);
    setotp(newotp);
    if (value) {
      inputRef.current[index+1]?.focus();
    }
  }


function handleKeydown(index,e){
    if(e.key === 'Backspace'){
        const newotp = [...otp];

        if (newotp[index]) {
          newotp[index] = "";
          setotp(newotp);
          return;
        }

        if (index > 0) {
          newotp[index - 1] = "";
          setotp(newotp);
          inputRef.current[index - 1]?.focus();
        }
    }
}


useEffect(()=>{
inputRef.current[0].focus();
},[])

  return (
    <div>
      {otp.map((val, index) => {
        return (
          <input
          key={index}
            className="otpInput"
            type="text"
            ref={(input)=>inputRef.current[index] = input}
            value={otp[index]}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeydown(index, e)}
          />
        );
      })}
    </div>
  );
};

export default PhoneOtp;
