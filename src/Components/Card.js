import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import photos from './Images/card_img.svg';
import './Card.css'
function Card(props)
{   
    //console.log(props,"props");
    return(
            <div className="cwrapper">
                <div className="card">
                    <div className="card_img">
                    <Tooltip title="42 songs" arrow>
                        <img src={props.image} className="card_frame" alt="musicfileimage" />
                    </Tooltip>
                    </div>
                    <div className="card_text">
                        <span className="card_pill">{props.follows + " Follows"}</span>
                    </div>
                    <p className="card-label">{props.songsTitle}</p>
                </div>
            </div>
        )
}

export default Card;