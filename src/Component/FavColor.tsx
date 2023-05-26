import { useState } from "react";

function FavColor() {
  const [color, setColor] = useState("blue");
  return (
    <h3>
      Favourite color is {color}
      <button onClick={() => setColor("Green")}>Change color</button>
    </h3>
  );
}

export default FavColor;
