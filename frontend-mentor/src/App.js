import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";
import InteractiveRatingComponent from "./components/newbieSection/interactiveRatingComponent/InteractiveRatingComponent";
import NewbieSection from "./components/newbieSection/NewbieSection";
import ProductPreviewCard from "./components/newbieSection/productPreviewCard/ProductPreviewCard";
import QRCodeComponent from "./components/newbieSection/QRcodeComponent/QRCodeComponent";

function App() {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setScreenWidth(window.screen.width);
        });

        return window.removeEventListener('resize', this);
    }, [window.screen.width]);


    return (
        <BrowserRouter>
            <Header screenWidth={screenWidth}/>
            <Routes>
                <Route path="/" element={<NewbieSection screenWidth={screenWidth}/>}/>
                <Route path='/newbie' element={<NewbieSection screenWidth={screenWidth}/>}/>
                <Route path='/newbie/project-one' element={<ProductPreviewCard screenWidth={screenWidth}/>}/>
                <Route path='/newbie/qr-code-component' element={<QRCodeComponent/>}/>
                <Route path='/newbie/interactiove-rating-component' element={<InteractiveRatingComponent/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
