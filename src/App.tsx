import "./App.css";
import ListGroup from "./Component/ListGroup";
import Navbar from "./Component/Navbar";
import Customheader from "./Component/Customheader/Customheader";
import Customfooter from "./Component/Customefooter/Customfooter";
import Customcontent from "./Component/Customcontent";
import ListGroups from "./Component/ListGroups";
import FavColor from "./Component/FavColor";
import ListGroupActive from "./Component/ListGroupActive";
import Message from "./Component/Message";
import Listgroupwithprops from "./Component/Listgroupswithprops";

function App() {
  return (
    <>
      <Listgroupwithprops
        heading="welcome to frontend learning"
        items={["React", ",", "Angular", ",", "Vue"]}
      />
      {/* <Message text="hi react" subtext="welcome"></Message> */}
      {/* <ListGroupActive></ListGroupActive> */}
      {/* <FavColor /> */}

      {/* <ListGroups /> */}

      {/* <Customheader />
      <div className="row">
        <div className="col-2">
          <Navbar />
        </div>
        <div className="col-6">
          <Customcontent />
        </div>
        <div className="col-4"></div>
      </div>
      <Customfooter /> */}

      {/* 
      <ListGroup/> */}
    </>
  );
}

export default App;
