import { useState, useRef, useEffect } from "react";
import Signal from "./signal";

const TIME_DURATION = [
  { color: "green", duration: 30 },
  { color: "yellow", duration: 20 },
  { color: "red", duration: 10 },
];

const TrafficLight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightTime, setLightTime] = useState(
    TIME_DURATION[0].duration
  );

  const currentTime = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentTime.current += 1;

      if (currentTime.current < TIME_DURATION[activeIndex].duration) {
        setLightTime((prev) => prev - 1);
      } else {
        currentTime.current = 0;

        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % TIME_DURATION.length;
          setLightTime(TIME_DURATION[nextIndex].duration);
          return nextIndex;
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [activeIndex]); 
  return (
    <div>
      <h2>Remaining Time: {lightTime}</h2>

      <div className="traffic-light-container">
        {TIME_DURATION.map((item, index) => (
          <Signal
            key={index}
            color={index === activeIndex ? item.color : "gray"}
          />
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;