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
import Alert from "./Component/alert";
import ButtonAssignment1 from "./Component/AssignmentDay2/ButtonAssignment1";
import ButtonAssignment2 from "./Component/AssignmentDay2/ButtonAssignment2";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <i>Button is clicked!</i>
        </Alert>
      )} */}
      {alertVisible && (
        <div
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          Login button is clicked
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertVisibility(false)}
          ></button>
        </div>
      )}
      <ButtonAssignment2
        color="primary"
        onBtnClick={() => setAlertVisibility(true)}
      >
        Login
      </ButtonAssignment2>

      {/* <ButtonAssignment1 buttonLabel="Login"></ButtonAssignment1> */}
      {/* <Alert>hi hello welcome</Alert> */}
      {/* <Listgroupwithprops
        heading="welcome to frontend learning"
        items={["React", ",", "Angular", ",", "Vue"]}
      /> */}
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
