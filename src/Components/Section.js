import React, { useEffect, useState } from "react";
import './Section.css';
import Card from "./Card";
import axios from "axios";


function Section(props){
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
            <h1 className="title">{props.title}</h1>
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
            </div>
            <hr></hr>
        </div>
    );
}
export default Section;