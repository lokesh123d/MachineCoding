import React, { useCallback, useEffect, useRef, useState } from "react";

const useDebounce = (func, delay) => {
  let timerId = useRef(null);
  const debounceResult = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      func();
    }, delay);
  }, [func, delay]);

  return debounceResult;
};

export default useDebounce;
