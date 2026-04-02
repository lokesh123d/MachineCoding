import React, { useState } from "react";
import CheckBox from "./component/CheckBox";

const data = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Tomato" },
      { id: 9, label: "Cucumber" },
    ],
  },
];

const App = () => {

const [checkedData, setCheckedData] = useState({})


  const renderCheckBox = (data) => {
    return data.map((item) => {
      return (
        <div key={item.id}>
          <CheckBox item={item} checkedData={checkedData} setCheckedData={setCheckedData}/>

          {item.children && (
            <div style={{ paddingLeft: 20 + "px" }}>
              {renderCheckBox(item.children)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      {renderCheckBox(data)}
      {/* <CheckBox/> */}
    </div>
  );
};

export default App;
