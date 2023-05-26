import { MouseEvent } from "react";
function ListGroups() {
  const stateList = ["Goa", "Karnataka", "MP", "AP", "Kerala", "Punjab"];
  let stateLists = ["Goa", "Karnataka", "MP", "AP", "Kerala", "Punjab"];
  // stateLists = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    // <>
    //   <h2>My list groups</h2>
    //   <ul className="list-group">
    //     {stateList.map((state) => (
    //       <li className="list-group-item" key={state}>
    //         {state}
    //       </li>
    //     ))}
    //   </ul>
    // </>
    <>
      <h2>My list groups</h2>
      {stateLists.length === 0 && <p>no items found for states</p>}
      {/* <ul className="list-group">
        {stateLists.map((state, index) => (
          <li
            className="list-group-item"
            key={state}
            onClick={() =>
              console.log("clicked state:", state + " with index " + index)
            }
          >
            {state}
          </li>
        ))}
      </ul> */}
      <ul className="list-group">
        {stateLists.map((x, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroups;
