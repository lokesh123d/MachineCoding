import React, { useEffect, useState } from "react";
import { fileExplorerData } from "../data/data";
const FileExplorer = () => {
  const [data, setData] = useState(fileExplorerData || []);

  const List = ({ node }) => {
    const [isExpand, setisExpand] = useState((JSON.parse(localStorage.getItem('isExpand'))||{}));


    useEffect(()=>{
            localStorage.setItem('isExpand',JSON.stringify(isExpand));

    },[isExpand,data])



    function handleExpand(id) {
      if (isExpand[id] == undefined) {
        setisExpand({ ...isExpand, [id]: false });
      }
      setisExpand({ ...isExpand, [id]: !isExpand[id] });
    }

    function handleDelete(id) {
      function deleteNodeById(node, id) {
        return node
          .filter((item) => item.id !== id)
          .map((item) => {
            if (item.children) {
              return {
                ...item,
                children: deleteNodeById(item.children, id),
              };
            }
            return item;
          });
      }
      setData((prev) => deleteNodeById(prev, id));
    }



function handleAddFile(id){
let fileName = prompt('Enter a File Name ...')



function updatedFileAdded(parentNode){
return parentNode.map((node)=>{
if(node.id==id){
    return {...node,children:[...node.children,{id:Date.now(),isFolder:false,name:fileName}]}
}
if(node.children){
    return {...node,children:updatedFileAdded(node.children)}
}
return node;
})
}

setData(prev=>updatedFileAdded(prev));


}







    return (
      <div className="file-container">
        {node.map((item) => {
          return (
            <div className="single-list" key={item.id}>
              <div className="single-line-inside">
                <span onClick={() => handleExpand(item.id)} className="icon">
                  {item.isFolder &&
                    (isExpand[item.id] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        fill="#000000"
                      >
                        <path d="M480-363.77 271.38-572.38l21.47-20.85L480-406.08l187.15-187.15 21.47 20.85L480-363.77Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        fill="#000000"
                      >
                        <path d="M550.92-480 363.77-667.15l20.85-21.47L593.23-480 384.62-271.38l-20.85-21.47L550.92-480Z" />
                      </svg>
                    ))}
                </span>
                <span>{item.name}</span>
                <span className="extra-feature">
                  {item.isFolder && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#000000"
                      onClick={()=>handleAddFile(item.id)}
                    >
                      <path d="M465.85-311.08h28.92v-154.77h154.15v-28.92H494.77v-154.15h-28.92v154.15H311.08v28.92h154.77v154.77ZM242.89-189.54q-22.45 0-37.9-15.45t-15.45-37.9v-474.22q0-22.45 15.45-37.9t37.9-15.45h474.22q22.45 0 37.9 15.45t15.45 37.9v474.22q0 22.45-15.45 37.9t-37.9 15.45H242.89Zm.19-28.92h473.84q9.23 0 16.93-7.69 7.69-7.7 7.69-16.93v-473.84q0-9.23-7.69-16.93-7.7-7.69-16.93-7.69H243.08q-9.23 0-16.93 7.69-7.69 7.7-7.69 16.93v473.84q0 9.23 7.69 16.93 7.7 7.69 16.93 7.69Zm-24.62-523.08V-218.46-741.54Z" />
                    </svg>
                  )}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#000000"
                    onClick={() => handleDelete(item.id)}
                  >
                    <path d="M292.85-271.38 272-292.85 458.54-480 272-667.15l20.85-21.47L480-501.46l187.15-187.16L688-667.15 501.46-480 688-292.85l-20.85 21.47L480-458.54 292.85-271.38Z" />
                  </svg>
                </span>
              </div>
              <div style={{ display: `${isExpand[item.id] ? "" : "none"}` }}>
                {item.isFolder && <List node={item.children} />}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <List node={data} />
    </div>
  );
};

export default FileExplorer;
