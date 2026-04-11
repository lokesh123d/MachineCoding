import React, { useState } from "react";
import Modal from "./component/modal";

const App = () => {
  const [isOpne, setisOpne] = useState(false);
  return (
    <div>
      <button className="" onClick={() => setisOpne(!isOpne)}>
        {" "}
        {isOpne ? "Close Modal" : "Open Modal"}
      </button>

      {isOpne && (
        
        <Modal>
          <h2>hello</h2>
        </Modal>
        
      )}
    </div>
  );
};

export default App;
