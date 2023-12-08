import {ReactComponent as SearchIcon} from './Images/Search_icon.svg';
import React,{useEffect, useState} from 'react';
import Menu from './Menu'; 
function  SearchBox()  {
    const[searchValue, setSearchValue] = useState('');
    const [filteredSongs, setFilteredSongs] = useState(null);

    const songs = [
        {
            "id": "a3f1fa62-f24a-4fa6-876d-5e82ab687ac5",
            "title": "Look Away",
            "artists": [
                "Sylvester Pacocha III",
                "Rodolfo Considine III"
            ],
            "genre": {
                "key": "jazz",
                "label": "Jazz"
            },
            "likes": 13908,
            "image": "https://images.pexels.com/photos/391831/pexels-photo-391831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 27450
        },
        {
            "id": "aace0424-d3d1-4e82-aa8d-1c76c7c2010e",
            "title": "Red Red Wine",
            "artists": [
                "Kellie Bartell",
                "Max Simonis",
                "Andrea Brown"
            ],
            "genre": {
                "key": "blues",
                "label": "Blues"
            },
            "likes": 11622,
            "image": "https://images.pexels.com/photos/4344260/pexels-photo-4344260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 45213
        },
        {
            "id": "2736ed34-e8fd-4850-96f8-4f119be362e5",
            "title": "Down Hearted Blues",
            "artists": [
                "Tasha Emard"
            ],
            "genre": {
                "key": "pop",
                "label": "Pop"
            },
            "likes": 14428,
            "image": "https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 53402
        },
        {
            "id": "6de59ca8-37bc-4354-b01d-10238cd93b59",
            "title": "Just Dance",
            "artists": [
                "Crystal Koss"
            ],
            "genre": {
                "key": "blues",
                "label": "Blues"
            },
            "likes": 87827,
            "image": "https://images.pexels.com/photos/2440299/pexels-photo-2440299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 36016
        },
        {
            "id": "7fc9d0a4-5ea4-42a9-a21f-b2716332bda2",
            "title": "Stars & Stripes Forever",
            "artists": [
                "Otis Hyatt"
            ],
            "genre": {
                "key": "blues",
                "label": "Blues"
            },
            "likes": 54019,
            "image": "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 50554
        },
        {
            "id": "66f481bb-af31-472d-aef4-5a55e1bff6b7",
            "title": "The Song From Moulin Rouge (Where Is Your Heart)",
            "artists": [
                "Krista Powlowski",
                "Laurence Huel"
            ],
            "genre": {
                "key": "blues",
                "label": "Blues"
            },
            "likes": 42938,
            "image": "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 56590
        },
        {
            "id": "1afe2bae-880f-47d4-93d3-aaa1a2775a36",
            "title": "Spirit in the Sky",
            "artists": [
                "Frank Bosco III",
                "Marco Schimmel",
                "Amanda Conn"
            ],
            "genre": {
                "key": "blues",
                "label": "Blues"
            },
            "likes": 16983,
            "image": "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 42633
        },
        {
            "id": "75eebde6-09b4-4fa3-a527-7f0f6d607b7a",
            "title": "Since U Been Gone",
            "artists": [
                "Marty Wilderman"
            ],
            "genre": {
                "key": "pop",
                "label": "Pop"
            },
            "likes": 17171,
            "image": "https://images.pexels.com/photos/1587699/pexels-photo-1587699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 32391
        },
        {
            "id": "09e131a1-6a4c-444b-8a02-8f9c092209ed",
            "title": "Don't Stop 'Til You Get Enough",
            "artists": [
                "Dr. Lynn Dare III"
            ],
            "genre": {
                "key": "jazz",
                "label": "Jazz"
            },
            "likes": 42746,
            "image": "https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 51136
        },
        {
            "id": "20e07b5d-6294-4ec9-ad31-f165cf6e7a55",
            "title": "Temperature",
            "artists": [
                "Erick Sipes",
                "Marian Beahan"
            ],
            "genre": {
                "key": "blues",
                "label": "Blues"
            },
            "likes": 30077,
            "image": "https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 46754
        },
        {
            "id": "c581fd3d-3532-4649-b104-22c1004c809d",
            "title": "Gold Digger",
            "artists": [
                "Lorenzo Schneider",
                "Malcolm Mayert",
                "Dr. Donnie Cremin"
            ],
            "genre": {
                "key": "blues",
                "label": "Blues"
            },
            "likes": 77664,
            "image": "https://images.pexels.com/photos/425160/pexels-photo-425160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 43117
        },
        {
            "id": "e7d5d018-0b79-47fd-ba69-cb24e44fd96c",
            "title": "Third Man Theme",
            "artists": [
                "Paul Altenwerth",
                "Julio Witting",
                "Geneva Daniel II"
            ],
            "genre": {
                "key": "pop",
                "label": "Pop"
            },
            "likes": 93821,
            "image": "https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "durationInMs": 30321
        }]
    
    // const handleChange = (event) =>{
    //     setSearchValue(event.target.value);
    //     console.log(searchValue);
    // }; 

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);

        const filtered = songs.filter(song =>
            song.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSongs(filtered.length > 0 ? filtered : null);
    };
    const displaySongs = searchValue.length > 0 && filteredSongs !== null ? filteredSongs : songs;
    return (
        <div style={{
            position: 'relative',
        }}>
            <form style={{
                display:'flex',
                minWidth: '40vw'
            }}>
                <input 
                    placeholder='search an album of your choice'
                    onChange={handleChange}
                    style={{
                        flex:1,
                        borderRadius: '8px 0px 0px 8px',
                        padding: '8px'
                    }}
                />
                <button style = {{
                    display: 'flex',
                    width: '66px',
                    height: '48px',
                    justifyContent : 'center',
                    alignItems : 'center',
                    borderRadius :'0px 8px 8px 0px ',
                    padding: '8px'
                }}>
                    <SearchIcon  />
                </button>
            </form>
            <Menu data={displaySongs} />
        </div>
    );
}
export default SearchBox;