import React from "react";
import { useCallback } from "react";
import { useRef } from "react";

const useThrottle = (func, delay) => {
  let lastCall = useRef(0);

  const throttleFunc = useCallback(() => {
    let now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      func();
    }
  }, [func, delay]);
  return throttleFunc;
};

export default useThrottle;
