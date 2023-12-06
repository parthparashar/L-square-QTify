import React, { useEffect, useState } from "react";
import './Section.css';
import Card from "./Card";
import axios from "axios";

import Carousel from './Carousel'

function Section(props){
    const [isCollpased, setIsCollapsed] = useState(false);
    const[albumTop,setAlbumTop] = useState([]);
    const [albumNew,setAlbumNew] = useState([]);
    const loadNewAlbumData = async () => {
        try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
            return response.data;
        }
        catch(error){
            console.log("Error fetching data",error);
        }
    };
    const loadTopAlbumData = async () => {
        try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
            return response.data;
        }
        catch(error){
            console.log("Error fetching data",error);
        }
    };

    const handlechange = () => {
        setIsCollapsed(!isCollpased);
    }

    useEffect(()=>{
        async function loadData(){
            let res1 = await loadTopAlbumData()
            setAlbumTop(res1);
            let res2 = await loadNewAlbumData();
            setAlbumNew(res2);
        }
      loadData()  
    },[]);
    return(
        <div className="section">
            <div className="section-header">
                <h1 className="title">{props.title}</h1>
                <h1 className="section_toggle" onClick={handlechange}>{isCollpased? 'Show all' :'Collapse'}</h1>
            </div>
            {isCollpased ?
            <Carousel 
                title= {props.title} 
                albumTop = {albumTop}
                albumNew = {albumNew}
            />
            :
            <div className="card_container">
                {props.title === "Top Albums" ?
                    (albumTop.map((pic) => (
                        <Card 
                            key={pic.id} 
                            follows={pic.follows}
                            songsTitle={pic.title}
                            image={pic.image}
                        />
                    ))) : (
                        albumNew.map((pic) => (
                            <Card 
                                key={pic.id} 
                                follows={pic.follows}
                                songsTitle={pic.title}
                                image={pic.image}
                            />
                        ))
                    )
                }
            </div>}
            <hr></hr>
        </div>
    );
}
export default Section;