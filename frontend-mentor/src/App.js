import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";
import NewbieSection from "./components/newbieSection/NewbieSection";
import ProductPreviewCard from "./components/newbieSection/productPreviewCard/ProductPreviewCard";

function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    window.addEventListener('resize', (e) => {
        setScreenWidth(window.innerWidth);
    });

    return (
        <BrowserRouter>
            <Header screenWidth={screenWidth}/>
            <Routes>
                <Route path="/"/>
                <Route path='/newbie' element={<NewbieSection screenWidth={screenWidth}/>}/>
                <Route path='/newbie/project-one' element={<ProductPreviewCard screenWidth={screenWidth}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
