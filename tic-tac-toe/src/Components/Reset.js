import React from "react";

const Reset = ({ reset }) => {
  return (
    <div className="reset">
      <button onClick={() => reset}>Reset</button>
    </div>
  );
};

export default Reset;
