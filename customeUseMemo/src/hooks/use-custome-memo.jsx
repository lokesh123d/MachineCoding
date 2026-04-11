import React, { useEffect, useRef } from "react";
function checkDeps(prevdeps, nowdeps) {
  if (prevdeps == null) return false;
  if (prevdeps.length !== nowdeps.length) return false;
  for (let i = 0; i < nowdeps.length; i++) {
    if (prevdeps[i] !== nowdeps[i]) return false;
  }
  return true;
}
const useCustomeMemo = (cb, deps) => {
  const memoizeRef = useRef(null);
  if (!memoizeRef.current || !checkDeps(memoizeRef.current.deps, deps)) {
    memoizeRef.current = {
      value: cb(),
      deps,
    };
  }
  useEffect(() => {
    return () => {
      memoizeRef.current = null;
    };
  }, []);

  return memoizeRef.current.value;
};
export default useCustomeMemo;
