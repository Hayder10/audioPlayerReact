import { element } from "prop-types";
import React, { useState, useEffect , useRef } from "react";
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
  const [songUrl, setSongUrl] = useState('');
  const [currentSong,setCurrentSong] = useState('');


  const url = "http://assets.breatheco.de/apis/sound/songs";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSongList(data))
      .catch((error) => console.log(error));
  }, []);

  var urlArray =[]
  function contentSong() {
    return songList.map((element,index) => (
    (songUrl === "https://assets.breatheco.de/apis/sound/"+element.url) ? (urlArray.push([index,element.name,element.url]),<li
    type="button"
    onClick={() => {handleClick(index)}}
    className="list-group-item list-group-item-action bg-secondary text-white"
    key={index}
  >
    {element.name}
  </li>) : (urlArray.push([index,element.name,element.url]),<li
    type="button"
    onClick={() => {handleClick(index)}}
    className="list-group-item list-group-item-action bg-dark text-white"
    key={index}
  >
    {element.name}
  </li>)
  ))};

  function handleClick(index){
    /* setCurrentSong(e.currentTarget.innerHTML); */
    var songLink = ""
    var name = ""
    for (var i of urlArray){
      if (i[0] === index){
        songLink = i[2];
        name = i[1];
      }
    }
    setCurrentSong(name)
    setSongUrl("https://assets.breatheco.de/apis/sound/"+songLink)
  };
  
  console.log(currentSong)
  console.log(songUrl)

  /* Audio Management */
  const audio = new Audio(songUrl)

  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-12-md p-0">
          <ul className="list-group list-group-flush p-2">{contentSong()}</ul>
        </div>
      </div>
      <div className="fixed-bottom">
        <div className="row bg-secondary p-3 justify-content-center">
          <div id="backward" className="col-4 text-end">
            <FaFastBackward size="50" />
          </div>
          <div onClick ={() => audio.play()} className="col-2 text-center">
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
