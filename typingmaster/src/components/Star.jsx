import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Star.css"; // we'll create this
import { useState } from "react";

const Star = () => {
  const [fillPercentage, setfillPercentage] = useState(50);
  const [totalReviewCount, settotalReviewCount] = useState(
    Array.from({ length: 5 }, () => null),
  );
  //   console.log(totalReviewCount);

  return (
    <div>
      {totalReviewCount.map((_, index) => {
        return (
          <div className="star-wrapper">
            <FontAwesomeIcon icon={faStar} className="star-base" />
            <div
              className="star-fill"
              style={{
                width:
                  index + 1 < Math.round(fillPercentage / 20)
                    ? `100%`
                    : index + 1 > Math.round(fillPercentage / 20)
                      ? ""
                      : `${fillPercentage}%`,
              }}
            >
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        );
      })}

      <div className="inptuContainer">
        <input
          type="number"
          value={Math.ceil(fillPercentage / 20)}
          onChange={(e) => setfillPercentage(e.target.value * 20)}
          min={1}
          max={5}
          placeholder="how many review"
        />
      </div>
    </div>
  );
};

export default Star;
