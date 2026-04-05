import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [clockTime, setclockTime] = useState("");

  useEffect(() => {
    let timer = setInterval(() => {
      let time = Date();
      setclockTime(time.split("GMT")[0]);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [clockTime]);

  return (
    <div>
      <div>{clockTime}</div>
    </div>
  );
};

export default Clock;
