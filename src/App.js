import { useEffect, useState } from "react";
import FrontPage from "./pages/frontPage";
import SignInSide from "./pages/signIn"
import { Route, Routes} from "react-router-dom";

function App() {
    return (
        // <SignInSide />
        <div>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/sign" element={<SignInSide />} />
            </Routes>
        </div>
    );
}


export default App;