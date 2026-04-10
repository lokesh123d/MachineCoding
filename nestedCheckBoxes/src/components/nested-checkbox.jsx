import React, { useState } from "react";
import fetchData from "../data/data.json";

const NestedCheckBoxes = () => {
  const [data, setData] = useState(fetchData || []);

  const List = ({ data }) => {



    
    function handleChecked(id) {
      function updateTree(tree, targetId = id, parentChecked = null) {
        return tree.map((node) => {
          // 1. If clicked node → toggle it + apply to children
          if (node.id === targetId) {
            const newChecked = !node.checked;

            return {
              ...node,
              checked: newChecked,
              children: updateTree(node.children, null, newChecked)
            };
          }

          // 2. If parent is controlling children (top-down)
          if (parentChecked !== null) {
            return {
              ...node,
              checked: parentChecked,
              children: updateTree(node.children, null, parentChecked)
            };
          }

          // 3. Normal recursion first
          const updatedChildren = updateTree(node.children, targetId, null);

          // 4. Bottom-up: parent state based on children
          const isAllChecked =
            updatedChildren.length > 0 &&
            updatedChildren.every((child) => child.checked);

          const isSomeChecked =
            updatedChildren.some((child) => child.checked);

          return {
            ...node,
            children: updatedChildren,
            checked: updatedChildren.length
              ? isAllChecked
              : node.checked
          };
        });
      }

      setData((prev) => updateTree(prev));
    }

    return (
      <div className="list-container">
        {data.map((item) => (
          <div className="list" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChecked(item.id)}
            />
            <span>{item.name}</span>

            {item.children?.length > 0 && (
              <List data={item.children} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return <List data={data} />;
};

export default NestedCheckBoxes;