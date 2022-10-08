import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from 'react'
import Menu from "./components/Menu";
import Login from "./pages/login";
import Produtos from "./pages/produtos";


import { AuthContext } from './contexts/auth';



function Rotas() {

    const {logged} = useContext(AuthContext)

    return ( 
        <BrowserRouter>

       { logged && <Menu/>}

            <Routes>
                <Route  path="/" element={<Login/>}/>
                <Route  path="/products" element={<Produtos/>}/>

            </Routes>
        
        </BrowserRouter>
     );
}

export default Rotas;


