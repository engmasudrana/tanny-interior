import React, {useEffect} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <TopNavigation/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default ContactPage;