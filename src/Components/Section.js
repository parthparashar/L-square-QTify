import React, { useEffect, useState } from "react";
import './Section.css';
import Card from "./Card";
import axios from "axios";
import Carousel from './Carousel'

function Section({navId,title,data}){
     const [isCollpased, setIsCollapsed] = useState(false);
    return(
        <div className="section">
            <div className="section-header">
                <h1 className="title">{title}</h1>
                <h1 className="section_toggle" 
                onClick={() => {setIsCollapsed(!isCollpased)}}>{isCollpased? 'Show all' :'Collapse'}</h1>
            </div>
            {isCollpased ?
            <Carousel 
            navId={navId}
                data = {data}
            />
            :
            <div className="card_container">
                {data.map(pic => <Card 
                        key={pic.id} 
                        follows={pic.follows}
                        songsTitle={pic.title}
                        image={pic.image}
                    />
                )} 
            </div>}
            <hr></hr>
        </div>
    );
}
export default Section;