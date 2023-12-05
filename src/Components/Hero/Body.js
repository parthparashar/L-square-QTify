import React from "react";
import Icons from "../Images/vibrating-headphone 1.svg";
import './Body.css'
function Body(){
    return(
        <div className = "container">
            <div className="para">
                <div className="text">
                    <h1 style={{textAlign:'center'}}>100 Thousand songs,ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>
                <div className="imgsrc">
                    <img className ="img_data" src={Icons} alt="a" style={{
                        width:'100%',
                        height:'100%'
                    }}/>
                </div>
                
            </div>
        </div>
    )
}
export default Body;