import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Container/Home.tsx";
import Header from "./Container/Header/Header.tsx";
import CreateUserForm from "./Components/Users/CreateUserForm.tsx";
import CheckUserForm from "./Components/Users/CheckUserForm.tsx";

const App = () => (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <Routes>
                <Route path="/header" element={<Header/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/create-user-form" element={<CreateUserForm/>}/>
                <Route path="/check-user-form" element={<CheckUserForm/>}/>
                <Route path="*" element={<h1 className="mt-5 text-center">There isn't such route</h1>}/>
            </Routes>
        </main>
    </>
);

export default App
