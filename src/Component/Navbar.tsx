import { MouseEvent } from "react";
function Navbar() {
  let menuLists = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"];
  // menuLists = [];
  const handleClick = (event: MouseEvent) =>
    console.log(event.target.textContent);
  return (
    <>
      <h3>My menu</h3>
      {menuLists.length === 0 && <p>no menu found</p>}
      <ul className="list-group">
        {menuLists.map((menu) => (
          <li className="list-group-item" key={menu} onClick={handleClick}>
            {menu}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
