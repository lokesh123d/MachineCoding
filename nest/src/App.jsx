import React from "react";
import { useState } from "react";

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

const CheckBoxes = ({ data, checked, setChecked }) => {
  function handleChange(isChecked, node) {
    setChecked((prev) => {
      const copy = { ...prev, [node.id]: isChecked };

      const updatedChildren = (node) => {
        node.children?.forEach((child) => {
          copy[child.id] = isChecked;
          child.children && updatedChildren(child);
        });
      };
      updatedChildren(node);

      const verifyChecked = (node) => {
        if (!node.children) return copy[node.id] || false;
        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child),
        );

        copy[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      data.forEach((node) => verifyChecked(node));

      return copy;
    });
  }

  return (
    <div>
      {data.map((node) => (
        <div style={{ paddingLeft: 1 + "rem" }} key={node.id}>
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.label}</span>
          {node.children && (
            <CheckBoxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <CheckBoxes data={data} checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default App;
