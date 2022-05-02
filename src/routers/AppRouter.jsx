import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Navbar  from '../components/navBar/navBar';
import Login from '../components/login/login'
import NewUser from '../components/login/NewUser'
import ListUserComponent from '../components/login/userListServiceComponent';
import CreateUserService from '../components/login/userCreateComponent';
const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/NewUser" element={<NewUser/>} />
                <Route path="/ListUser" element={<ListUserComponent/>} />
                <Route path="/CreateUser" element={<CreateUserService/>} />
                
            </Routes>
        </BrowserRouter>
        );
}
 
export default AppRouter;