import React, { useEffect, useState } from "react";
import photos from './Images/card_img.svg';
import './Card.css'
function Card(props)
{   
    //console.log(props,"props");
    return(
            <div className="cwrapper">
                <div className="card">
                    <div className="card_img">
                        <img src={props.image} className="card_frame" alt="musicfileimage" />
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