import React from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaFastForward,
  FaFastBackward,
} from "react-icons/fa";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-12-md p-0">
          <ul className="list-group list-group-flush p-2">
            <li className="list-group-item bg-dark text-white">An item</li>
            <li className="list-group-item bg-dark text-white">
              A second item
            </li>
            <li className="list-group-item bg-dark text-white">A third item</li>
            <li className="list-group-item bg-dark text-white">
              A fourth item
            </li>
            <li className="list-group-item bg-dark text-white">
              And a fifth one
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed-bottom">
        <div className="row bg-secondary p-3 justify-content-center">
          <div id="backward" className="col-4 text-end">
            <FaFastBackward size='50'/>
          </div>
          <div className="col-2 text-center">
            <FaPlayCircle size='50'/>
          </div>
          <div className="col-4 text-start">
            <FaFastForward size='50'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
