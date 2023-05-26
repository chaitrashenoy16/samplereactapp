import { useState } from "react";
function ListGroupActive() {
  let stateLists = ["Goa", "Karnataka", "MP", "AP", "Kerala", "Punjab"];
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <>
      <ul className="list-group">
        {stateLists.map((x, index) => (
          <li
            key={x}
            className={
              index === activeIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setActiveIndex(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupActive;
