import React from "react";

function Button({ handleClick }) {
  console.log("Button component rendered");

  return (
    <button onClick={handleClick}>
      Child Button
    </button>
  );
}

export default React.memo(Button);