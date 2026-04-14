import React, { useCallback, useMemo } from "react";

const Child2 = ({ value, data }) => {
  let lastCall = Date.now();

  function heavyFunctionCreation() {
    for (let i = 0; i < 5000000; i++) {}
    return value;
  }
  useMemo(heavyFunctionCreation, [value]);

  console.log(`Child2 One Render Time ${Date.now() - lastCall}s`);

  return <div>Child2</div>;
};

export default React.memo(Child2);
