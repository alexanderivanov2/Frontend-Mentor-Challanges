import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";
import NewbieSection from "./components/newbieSection/NewbieSection";
import ProductPreviewCard from "./components/newbieSection/productPreviewCard/ProductPreviewCard";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"/>
                <Route path='/newbie' element={<NewbieSection/>}/>
                <Route path='/newbie/project-one' element={<ProductPreviewCard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
