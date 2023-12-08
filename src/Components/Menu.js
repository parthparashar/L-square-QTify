// function MenuIten(){
//     return(
        
//     )
// }

function Menu ({data}){
    return(
        <div style={{
            position : 'absolute',
            minWidth: '40vw',
            maxHeight: '500px',
            border: '1px solid #34C94B',
            overflowY: 'auto',
            top:'60px',
            backgroundColor: '#121212'
        }}>
            {data.map(n =>
            <div
                style={{
                    display:'flex',
                    height: '100px',
                    width : '100%',
                    //border: '2px solid blue'
                    padding: '15px'
                }}
            >
                <div style={{
                    width: '66px',
                    height: '70px',
                    border: '5px solid #1D1D1D',
                    borderRadius: '10px',
                    overflow: 'hidden' // Add overflow to handle image overflow
                }}>
                    <img src={n.image} alt="abc" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{
                    flex: 1,
                    //border: '2px solid orange',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: '#fff',
                    paddingLeft: '15px'
                }}>
                    <p>{n.title}</p>
                    <p style={{fontSize: '8px'}}>{n.artists.join(', ')}</p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: '100%',
                    //border: '2px solid yellow',
                    color: '#fff'
                }}>
                    {n.likes}
                </div>         
            </div> )}
        </div>
    );
}
export default Menu;