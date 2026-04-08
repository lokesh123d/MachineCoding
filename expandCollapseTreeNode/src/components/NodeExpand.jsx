import React, { useState } from "react";
import EditIcon from "../icons/Edit";
import DeleteIcon from "../icons/DeleteBtn";
import ExpandClose from "../icons/ExpandClose";
import ExpandDonw from "../icons/ExpandOpen";
import CheckIcon from "../icons/CheckIcon";
import FileIcon from "../icons/File";

const NodeExpand = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "src",
      isExpand: false,
      type: "folder",
      children: [
        {
          id: 2,
          type: "file",
          name: "index.js",
        },
        {
          id: 3,
          name: "components",
          isExpand: false,
          type: "folder",
          children: [
            {
              id: 4,
              type: "file",
              name: "App.js",
            },
            {
              id: 5,
              type: "file",
              name: "Header.js",
            },
            {
              id: 6,
              name: "common",
              isExpand: false,
              type: "folder",
              children: [
                { id: 7, type: "file", name: "Button.js" },
                { id: 8, type: "file", name: "Input.js" },
              ],
            },
          ],
        },
        {
          id: 9,
          name: "pages",
          isExpand: false,
          type: "folder",
          children: [
            {
              id: 10,
              type: "file",
              name: "Home.js",
            },
            {
              id: 11,
              type: "file",
              name: "About.js",
            },
            {
              id: 12,
              name: "auth",
              isExpand: false,
              type: "folder",
              children: [
                { id: 13, type: "file", name: "Login.js" },
                { id: 14, type: "file", name: "Register.js" },
              ],
            },
          ],
        },
        {
          id: 15,
          name: "utils",
          isExpand: false,
          type: "folder",
          children: [
            { id: 16, type: "file", name: "helpers.js" },
            { id: 17, type: "file", name: "constants.js" },
          ],
        },
        {
          id: 18,
          name: "styles",
          isExpand: false,
          type: "folder",
          children: [
            { id: 19, type: "file", name: "main.css" },
            { id: 20, type: "file", name: "theme.css" },
          ],
        },
      ],
    },
    {
      id: 21,
      name: "public",
      isExpand: false,
      type: "folder",
      children: [
        { id: 22, type: "file", name: "index.html" },
        { id: 23, type: "file", name: "favicon.ico" },
      ],
    },
    {
      id: 24,
      type: "file",
      name: "package.json",
    },
  ]);

  const [expandedNodes, setExpandedNodes] = useState({});
  const [currentEdit, setcurrentEdit] = useState(null);
  const [currentEditText, setcurrentEditText] = useState(null);

  function handleToggle(id) {
    setExpandedNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleDelete(id) {
    setData((prev) => deleteNodeById(prev, id));
  }

  function deleteNodeById(parent, id) {
    return parent
      .filter((node) => node.id != id)
      .map((node) => {
        if (node.children) {
          return {
            ...node,
            children: deleteNodeById(node.children, id),
          };
        }
        return node;
      });
  }

  function updateName(id, newName) {
    if (newName == null) {
      alert("Change Something....");
      return;
    }

    setData((prev) => updateNameById(prev, id, newName));
    setcurrentEdit(null);
    setcurrentEditText(null);
  }

  function updateNameById(parent, id, newName) {
    return parent.map((node) => {
      if (node.id == id) {
        return { ...node, name: newName };
      }
      if (node.children) {
        return {
          ...node,
          children: updateNameById(node.children, id, newName),
        };
      }
      return node;
    });
  }

  function RenderData(data) {
    return data.map((item) => (
      <div key={item.id}>
        <div className={`${item.type}`}>
          <div className="fileName">
            <div
              className="expand-icon icons"
              onClick={() => handleToggle(item.id)}
            >
              {item.type == "folder"
                ? expandedNodes[item.id]
                  ? <ExpandDonw/>
                  : <ExpandClose/>
                : <FileIcon/>}
            </div>
            <div>
              {currentEdit == item.id ? (
                <input
                  value={currentEditText == null ? item.name : currentEditText}
                  onChange={(e) => setcurrentEditText(e.target.value)}
                />
              ) : (
                item.name
              )}{" "}
            </div>
          </div>
          <div className="iconsSild ">
            <div
              className="icons"
              onClick={(e) =>
                currentEdit != item.id
                  ? setcurrentEdit(item.id)
                  : updateName(item.id, currentEditText)
              }
            >
              {currentEdit != item.id ? <EditIcon/> : <CheckIcon/>}
            </div>
            <div className="icons" onClick={() => handleDelete(item.id)}>
              {" "}
              <DeleteIcon/>
            </div>
          </div>
        </div>
        {item.children?.length > 0 && (
          <div style={{ display: `${expandedNodes[item.id] ? "" : "none"} `, marginLeft:'10px' }}>
            {RenderData(item.children)}
          </div>
        )}
      </div>
    ));
  }

  return <div className="fileContainer">{RenderData(data)}</div>;
};

export default NodeExpand;
