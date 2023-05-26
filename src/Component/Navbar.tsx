import { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>
    </Fragment>
  );
}

export default Navbar;
