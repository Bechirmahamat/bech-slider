import Slider from "./Slider";
import Title from "./Title";
import { shortList, longList, list } from "./data";

function App() {
    return (
        <>
            <Title />
            <Slider data={longList} />
        </>
    );
}

export default App;
