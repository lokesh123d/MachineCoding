import React from "react";

const CheckBox = ({ item, checkedData, setCheckedData }) => {
  function handleChecked(e) {
    if (checkedData[e.target.id]) {
      setCheckedData({
        ...checkedData,
        [e.target.id]: !e.target.id,
      });
    } else {
      setCheckedData({
        ...checkedData,
        [e.target.id]: true,
      });
    }
    console.log(checkedData);
  }

  return (
    <div>
        <label htmlFor={item.id}>
      <input
        type="checkbox"
        id={item.id}
        checked={checkedData[item.id] ? true : false}
        onChange={(e) => handleChecked(e)}
      />
      {item.label}
      </label>
    </div>
  );
};

export default CheckBox;
