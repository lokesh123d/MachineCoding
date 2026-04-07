import React, { useCallback, useRef } from "react";

const useThrottle = (func, delay) => {
  const lastCall = useRef(0);

  const throttleFunc = useCallback(() => {
        let now = Date.now();
      if (now - lastCall.current > delay) {
        lastCall.current = now;
        func();
      }
  }, []);

  return throttleFunc;
};

export default useThrottle;     
