import { Fragment } from "react";

function ListGroup() {
  return (
    <Fragment>
      <h2>My list groups</h2>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          An active item
        </li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;
