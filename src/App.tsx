import "./App.css";
import ListGroup from "./Component/ListGroup";
import Navbar from "./Component/Navbar";
import Customheader from "./Component/Customheader/Customheader";
import Customfooter from "./Component/Customefooter/Customfooter";
import Customcontent from "./Component/Customcontent";

function App() {
  return (
    <>
      <Customheader />
      <div className="row">
        <div className="col-2">
          <Navbar />
        </div>
        <div className="col-6">
          <Customcontent />
        </div>
        <div className="col-4">
        </div>
      </div>
      <Customfooter />
    </>
  );
}

export default App;
