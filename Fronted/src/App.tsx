import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Container/Home.tsx";
import Header from "./Container/Header/Header.tsx";

const App = () => (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <Routes>
                <Route path="/header" element={<Header/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<h1 className="mt-5 text-center">There isn't such route</h1>}/>
            </Routes>
        </main>
    </>
);

export default App
