import React, {useEffect} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import NoMatch from "../components/NoMatch/NoMatch";
import Footer from "../components/Footer/Footer";

const NoMatchPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <TopNavigation/>
            <NoMatch/>
            <Footer/>
        </>
    );
};

export default NoMatchPage;