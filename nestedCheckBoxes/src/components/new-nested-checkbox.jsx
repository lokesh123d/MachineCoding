import React, { useEffect, useState } from "react";
import treeData from "../data/newData.json";
const NewNestedCheckBox = () => {
  const [data, setData] = useState(treeData);
  const [checkedItem, setCheckedItem] = useState(
    JSON.parse(localStorage.getItem("checkedData")) || {},
  );

  useEffect(() => {
    localStorage.setItem("checkedData", JSON.stringify(checkedItem));
  }, [checkedItem]);

  const List = ({ data, checkedItem, setCheckedItem }) => {
    function handleChange(node, isChecked) {
      setCheckedItem((prev) => {
        const newState = {
          ...prev,
          [node.id]: isChecked,
        };
        function updatedItem(node) {
          node.children?.forEach((item) => {
            newState[item.id] = isChecked;
          });
        }
        updatedItem(node);

        function verifyNode(node) {
          if (!node.children) return newState[node.id] || false;

          let isallChecked = node.children?.every((item) => verifyNode(item));
          newState[node.id] = isallChecked;
          return isallChecked;
          //   setCheckedItem({ ...prev, [parentNode.id]: isallChecked });
        }

        data.forEach((node) => verifyNode(node));

        return newState;
      });
    }

    return (
      <div className="list-container">
        {data.map((item) => {
          return (
            <div className="list" key={item.id}>
              <label htmlFor={item.id} style={{ cursor: "pointer" }}>
                <input
                  type="checkbox"
                  id={item.id}
                  checked={checkedItem[item.id]}
                  onChange={(e) => handleChange(item, e.target.checked)}
                  style={{ cursor: "pointer" }}
                />
                {item.name}
              </label>

              {item.children.length > 0 && (
                <List
                  data={item.children}
                  checkedItem={checkedItem}
                  setCheckedItem={setCheckedItem}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <List
        data={data}
        checkedItem={checkedItem}
        setCheckedItem={setCheckedItem}
      />
    </div>
  );
};

export default NewNestedCheckBox;
