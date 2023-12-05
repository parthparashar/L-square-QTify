import Navbars from "./Components/Navbars";
import Body from "./Components/Hero/Body";
import Card from "./Components/Card";
import Section from "./Components/Section";
function App() {
 return(
    <>
        <Navbars />
        <Body />
        <Section title="Top Albums"/>
        <Section title="New Albums"/>
        {/* <Card /> */}
    </>
 )
}
export default App;