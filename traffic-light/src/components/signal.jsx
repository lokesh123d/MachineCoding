const  Signal = ({ color = "green" }) => {
  return (
    <div className="traffic-light" style={{ backgroundColor:color }}></div>
  );
};


export default Signal;