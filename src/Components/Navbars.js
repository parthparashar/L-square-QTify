import Button from "./Button";
import SearchBox from "./SearchBox";
import  './Navbar.css';
import  Groupos from "./Images/Groupos.svg";

function Navbars(songs) {
  return (
    <div className="nabvar">
      <img src={Groupos} alt="h" width={67} height={48} />
        <SearchBox songs={songs}/>
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbars;