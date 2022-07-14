import React, { useState, useEffect } from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaFastForward,
  FaFastBackward,
} from "react-icons/fa";
//include images into your bundle

//create your first component
const Home = () => {
  const [songList, setSongList] = useState([]);

  const url = 'http://assets.breatheco.de/apis/sound/songs';
  
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setSongList(data))
    .catch(error => console.log(error))
  }, []) 
  var contentSong = songList.map((element) => 
  <li className="list-group-item bg-dark text-white" onmouseover="" key={ element.id }>
{ element.name }
  </li>
  )



  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-12-md p-0">
          <ul className="list-group list-group-flush p-2">
            { contentSong }
          </ul>
        </div>
      </div>
      <div className="fixed-bottom">
        <div className="row bg-secondary p-3 justify-content-center">
          <div id="backward" className="col-4 text-end">
            <FaFastBackward size='50' />
          </div>
          <div className="col-2 text-center">
            <FaPlayCircle size='50' />
          </div>
          <div className="col-4 text-start">
            <FaFastForward size='50' />
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Home;
