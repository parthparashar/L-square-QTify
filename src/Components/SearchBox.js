import {ReactComponent as SearchIcon} from './Images/Search_icon.svg';
 function SearchBox()  {
    return (
        <div>
            <form style={{
                display:'flex',
                minWidth: '568px'
            }}>
                <input 
                placeholder='search an album of your choice'
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
                    <SearchIcon width={20} height={20} />
                </button>
            </form>
        </div>
    );
}
export default SearchBox;