import './Button.css';
function Button(props) {
    //console.log(props,"props");
    return (
    <button className="button">
        {props.children}
    </button>
    );
}
export default Button;