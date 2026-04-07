import React, { useMemo, useState } from "react";

const MovieSeat = ({ rows, columns }) => {
  const seatData = useMemo(
    () =>
      Array.from({ length: rows * columns }, (_, i) => ({
        name: `${i + 1}`,
        id: i,
        status: "idle",
        price: 200,
      })),
    [rows, columns],
  );

  const [filteredData, setfilteredData] = useState(seatData || []);
  const [selectedSeat, setselectedSeat] = useState([]);
  const [selectedPrice, setselectedPrice] = useState(0);

  function totalPrice() {
    let total = filteredData.reduce((acc, curr) => {
      if (curr.status == "selected") {
        return (acc += curr.price);
      }
      return acc;
    }, 200);
    setselectedPrice(total);
    // console.log(total);
  }

  function seatDetailsNow() {
    let val = filteredData.filter((seat) => {
      if (seat.status == "selected") {
        return seat.name;
      }
    });
    return val.map((item) => item.name).join(" , ");
  }

  function handleBook() {
    let newCopy = filteredData.map((seat) => {
      if (seat.status == "selected") {
        return { ...seat, status: "booked" };
      }
      return seat;
    });

    setfilteredData(newCopy);
    alert(`ticked booked pay  ${selectedPrice} now for proceed
        Seat Details:
        Seat No:  ${seatDetailsNow()}
        
        `);
  }

  function handleClick(id) {
    let newData = filteredData.map((seat) => {
      if (seat.id == id) {
        return { ...seat, status: seat.status == "idle" ? "selected" : "idle" };
      }
      return seat;
    });
    setfilteredData(newData);
    totalPrice();
  }

  return (
    <div className="seatWrapper">
      <div
        className="seatContainer"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(40px, 1fr))` }}
      >
        {filteredData.map((seat) => (
          <button
            onClick={() => handleClick(seat.id)}
            key={seat.id}
            className="seat"
            style={{
              backgroundColor: `${seat.status == "selected" ? "lightseagreen" : seat.status == "booked" ? "red" : ""}`,
            }}
            type="button"
            disabled={seat.status == "booked" ? true : false}
          >
            {seat.name}
          </button>
        ))}
      </div>
      <button onClick={handleBook} className="bookBtn">Booked This</button>


      <div className="containerofDirection">
        <div className="iconandheading">
            
       <div className="showBtn"></div> <h3>Available</h3> 
        </div>
        <div className="iconandheading">
       <div className="showBtn" style={{backgroundColor:'lightseagreen'}}></div> <h3>Selected</h3> 

        </div>
        <div className="iconandheading">
       <div className="showBtn" style={{backgroundColor:'red'}}></div> <h3>Booked</h3> 

        </div>
      </div>
    </div>
  );
};

export default MovieSeat;
