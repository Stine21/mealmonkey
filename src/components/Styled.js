import {ThemeProvider} from "styled-components";
import LargeHeading from "../elements/LargeHeading";
import Menu from "../elements/Menu";
import EmotionComponent from "./EmotionComponent";
import Desserts from "./Desserts";
const theme = {
    primary: "lightskyblue",
    secondary: "teal",
    warning: "red",
    alert: "orange",
    success: "green"
}


const Styled = () => {
    return ( 
        <ThemeProvider theme={theme}>
        <LargeHeading>
            
            <Menu color="secondary" as="h3">Stor Overskrift!!!</Menu>
            <input type="text" name="bla" id="bla"/>
            <button>Create</button>
        </LargeHeading>
        <EmotionComponent large/>
    <Menu color="orange">
        <h2>Food</h2>
        <p>120 items</p>
    </Menu>
    <Menu color="orange" square>
        <h2>Beverages</h2>
        <p>220 items</p>
    </Menu>
    <Desserts />
        </ThemeProvider>
     );
}
 
export default Styled;