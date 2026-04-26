  import React, { useEffect, useState } from "react";

  const useUndoRedo = (initialState) => {
    const [value, setValue] = useState(initialState);
    const [undoHistory, setUndoHistory] = useState([]);
    const [historyRedo, setHistoryRedo] = useState([]);
    // console.log(value);
    // const [isTrue,setIsTrue] = useState(true);

    // const [history ,setHistory]
    function undo() {

      if (undoHistory.length == 0) return;
      //  setIsTrue(false);
      setHistoryRedo((prev) => {
        return [...prev, value];
      });
      // console.log(undoHistory);
      // console.log(undoHistory.length - 1);
      setValue(undoHistory[undoHistory.length - 1]);
    
      setUndoHistory((prev) => {
        const copy = [...prev];
        copy.pop();
        return copy;
      });
    }

    function redo() {
      if (historyRedo.length == 0) return;
      setUndoHistory((prev) => {
        return [...prev, value];
      });
      setValue(historyRedo[historyRedo.length - 1]);
      setHistoryRedo((prev) => {
        const copy = [...prev];
        copy.pop();
        return copy;
      });
    }

    function reset() {
      setHistoryRedo([]);
      setUndoHistory([]);
      setValue(initialState);
    }

    function canUndo() {
      if (undoHistory.length > 0) {
        console.log("ya You can ");
        return true;
      }
      console.log("Nope");
      return false;
    }

    function canRedo() {
      if (historyRedo.length > 0) {
        console.log("ya You can ");
        return true;
      }
      console.log("Nope");
      return false;
    }

    useEffect(() => {
      // if(isTrue) {
        setUndoHistory((prev) => {
          return [...prev, value];
        });
        // setIsTrue(!isTrue)
      // }
    }, [value]);

    return { undo, redo, value, setValue, reset, canRedo, canUndo };
  };

  export default useUndoRedo;
