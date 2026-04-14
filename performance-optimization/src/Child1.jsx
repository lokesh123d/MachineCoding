import React, { useMemo } from "react";

const Child1 = ({ value, data }) => {
  let lastCall = Date.now();

useMemo( heavyFunctionCreation,[data])

  function heavyFunctionCreation() {
    for (let i = 0; i < 3000000; i++) {}
    return data;
  }
  console.log(`Child1 One Render Time ${Date.now() - lastCall}s`);

  return <div>Child1</div>;
};

export default  React.memo(Child1);
