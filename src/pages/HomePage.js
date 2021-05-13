import React from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import About from "../components/About/About";
import Summary from "../components/Summary/Summary";
import Services from "../components/Services/Services";
import Intro from "../components/Intro/Intro";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
import OurTeam from "../components/OurTeam/OurTeam";

const HomePage = () => {
    return (
        <>
            <TopNavigation/>
            <HomeBanner/>
            <About/>
            <Services/>
            <Summary/>
            <OurTeam/>
            <Intro/>
            <Testimonial/>
            <Footer/>
        </>
    );
};

export default HomePage;