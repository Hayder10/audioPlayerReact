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
  const [active,setActive] = useState(false);

  const url = "http://assets.breatheco.de/apis/sound/songs";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSongList(data))
      .catch((error) => console.log(error));
  }, []);

  var contentSong = songList.map((element) => (
    <li
      type="button"
      onClick={(e) => {handleClick(e)}}
      className="list-group-item list-group-item-action bg-dark text-white"
      key={element.id}
    >
      {element.name}
    </li>
  ));

  var songName = ''  
  function handleClick(e){
    songName = e.currentTarget.innerHTML;
    console.log(songName);
    console.log(getSongUrl(songName));
    toggleControl();
  };

  function getSongUrl(name){
    var aux = name;
    var halfUrl = "https://assets.breatheco.de/apis/sound/"
    var newArray = songList.filter((song) => {if (song.name === aux){
      return song;
    }})
    return halfUrl+newArray[0].url
    }
  
  function toggleControl(){
    setActive(!active);
  }

  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-12-md p-0">
          <ul className="list-group list-group-flush p-2">{contentSong}</ul>
        </div>
      </div>
      <div className="fixed-bottom">
        <div className="row bg-secondary p-3 justify-content-center">
          <div id="backward" className="col-4 text-end">
            <FaFastBackward size="50" />
          </div>
          <div className="col-2 text-center">
            <FaPlayCircle size="50" />
          </div>
          <div className="col-4 text-start">
            <FaFastForward size="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
