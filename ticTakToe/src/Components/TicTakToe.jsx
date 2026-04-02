import React, { useEffect, useState } from "react";

const winProbablity = [
  "0 1 2",
  "3 4 5",
  "6 7 8",
  "0 3 6",
  "1 4 7",
  "2 5 8",
  "0 4 8",
  "2 4 6",
];

const TicTakToe = ({ ticlength }) => {
  const [blocksCount, setBlocksCount] = useState(
    Array.from({ length: ticlength * ticlength }, () => ({ value: "" })),
  );

  const [winner, setwinner] = useState(null);

  const [userMoves, setUserMoves] = useState({
    XMoves: [],
    OMoves: [],
  });

  const [isNowX, setisNowX] = useState(true);

  function handleCalculation(index) {
    let copyarr = [...blocksCount];
    copyarr[index].value = isNowX ? "X" : "O";
    isNowX
      ? setUserMoves({ ...userMoves, XMoves: [...userMoves.XMoves, index] })
      : setUserMoves({ ...userMoves, OMoves: [...userMoves.OMoves, index] });
    setisNowX(!isNowX);
    setBlocksCount(copyarr);

  }

useEffect(()=>{
 if(userMoves.XMoves.length>2||userMoves.OMoves.length>2){
     let winning = isWin();
   if (winning.XWin) {
    setwinner('X Win')

} else if (winning.OWin) {
setwinner('O Win')
 
}
 }
},[userMoves.XMoves,userMoves.OMoves])


function isWin() {
  let XWin = winProbablity.some((singleProb) => {
    return singleProb
      .split(" ")
      .every((num) => userMoves.XMoves.includes(Number(num)));
  });

  let OWin = winProbablity.some((singleProb) => {
    return singleProb
      .split(" ")
      .every((num) => userMoves.OMoves.includes(Number(num)));
  });

  return {
    XWin,
    OWin,
  };
}


function checkkeys(e,index){
if(e.code == 'Enter'||e.code=='Space'){
  handleCalculation(index);
}

}


function resetGame(){
  setBlocksCount( Array.from({ length: ticlength * ticlength }, () => ({ value: "" })));
  setwinner(null);
  setUserMoves({
    XMoves: [],
    OMoves: [],
  })
  setisNowX(true);
}


  return (
    <div className="ticContainer">
      <header>
        <h2>Result : {winner&& winner||'?'}</h2>
        <button onClick={resetGame}>Reset</button>
      </header>
      <div className="blockContainer" style={{ width: ticlength * 80 + "px" }}>
        {blocksCount.map((block, index) => {
          return (
            <div
              className="block"
              style={{ width: "70px", color:blocksCount[index].value=='X'?'#3852B4':'#346739' }}
              key={index}
              onClick={() => handleCalculation(index)}
              tabIndex={0}
              onKeyDown={(e)=>checkkeys(e,index)}
            >
              {block.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTakToe;
