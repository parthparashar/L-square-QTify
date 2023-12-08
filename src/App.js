import React, { useEffect, useState } from "react";
import Navbars from "./Components/Navbars";
import Body from "./Components/Hero/Body";
import Card from "./Components/Card";
import Section from "./Components/Section";
import FilterSection from  "./Components/FilterSection";
import axios from "axios";
import BasicAccordion from "./Components/BasicAccordin";

function App() {
    const[albumTop,setAlbumTop] = useState([]);
    const [albumNew,setAlbumNew] = useState([]);
    const[songs,setSongs] = useState([]);
    const [filteredSongs,setFilteredSongs] = useState([]);
    const[genres,setGenres] = useState([]);
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
    const loadSongs = async () => {
        try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/songs");
            return response.data;
        }
        catch(error){
            console.log("Error fetching  data",error);
        }
    }

    const loadgenres = async () => {
        try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
            return [{"key":"all","label":"All"},...response.data.data];
        }
        catch(error){
            console.log("Error fetching  data",error);
        }
    }

    useEffect(()=>{
        async function loadData(){
            let res1 = await loadTopAlbumData();
            setAlbumTop(res1);
            let res2 = await loadNewAlbumData();
            setAlbumNew(res2);
            let res3 = await loadSongs();
            setSongs(res3);
            setFilteredSongs(res3);
            let res4 = await loadgenres();
            setGenres(res4);
        }
      loadData()  
    },[]);
 return(
    <>
        <Navbars songs={songs}/>
        <Body />
        <Section navId='ta' title="Top Albums" data={albumTop}/>
        <Section navId= 'na' title= "New Albums" data={albumNew}/>
        <FilterSection title='Songs' data={filteredSongs} filters={genres}
            executeFilter={(genre) =>{
                if(genre === 'all'){
                    setFilteredSongs(songs)
                }
                else{
                    setFilteredSongs(songs.filter(song => song.genre.key === genre))
                }
            }}
        />
        <BasicAccordion />
        {/* <Card /> */}
    </>
 )
}
export default App;