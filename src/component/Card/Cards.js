import React, { useState } from "react";
import "./Card.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Tooltip from "@mui/material/Tooltip";
import DoneIcon from '@mui/icons-material/Done';

import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/listSlice";
import { Skeleton } from "@mui/material";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Cards({ data, isLargeRow,isLiked = false }) {
    // console.log(data);
    const [isHovered, setIsHovered] = useState(false);
    const [isTapped, setIsTapped] = useState(false); // Track tapping state

    const handleCardTap = () => {
      setIsTapped(!isTapped);
    };
    
    const movieIdsInList = useSelector((store)=>store.list.movieIdsInList)
  const dispatch = useDispatch();
const addMovie = (data) => {
  dispatch(addItem(data));

};
const removeMovie=(id)=>{
  dispatch(removeItem(id));
}

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className={`card__poster ${isTapped ? "tapped" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardTap}
    >
      {data.backdrop_path !== null && (
        
        <img
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${baseImgUrl}${
            isLargeRow ? data.poster_path : data.backdrop_path
          }`}
          alt={data.name}
        />
      )
      }

      {isHovered && (
        <div className="card__hover">
          <div className="card__videoContainer">
            <video src={trailer} autoPlay={true} loop muted />
          </div>
          <div className="card__infoContainer">
            <h3>{data?.title || data?.name || data?.original_name}</h3>
            <div className="card__icons">
              <div className="card__controls">
                <Link to={"/player"}>
                  <Tooltip title="Play">
                    <PlayCircleOutlineIcon className="icon" />
                  </Tooltip>
                </Link>
                <Tooltip title="Dislike">
                  <ThumbDownOffAltIcon />
                </Tooltip>
                <Tooltip title="Like">
                  <ThumbUpOffAltIcon />
                </Tooltip>

                {isLiked || movieIdsInList.includes(data.id) ? (
                  <DoneIcon onClick={() => removeMovie(data.id)} />
                ) : (
                  <Tooltip title="Add">
                    <AddIcon onClick={() => addMovie(data)} />
                  </Tooltip>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
