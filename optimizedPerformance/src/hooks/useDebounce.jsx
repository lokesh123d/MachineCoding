import React from "react";
import { useRef } from "react";
import { useCallback } from "react";

const useDebounce = (func, delay) => {
  const timerId = useRef(null);
  const debounceFunc = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      func();
    }, delay);
  }, [func, delay]);
  return debounceFunc;
};

export default useDebounce;
