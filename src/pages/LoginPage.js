import React, {useEffect} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";

const LoginPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <TopNavigation/>
            <Login/>
            <Footer/>
        </>
    );
};

export default LoginPage;