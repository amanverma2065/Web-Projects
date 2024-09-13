import React from "react";
import Hero from "../components/hero";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Card3 from "../components/card3";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
            <Hero />
            <div className="container-fluid strip" style={{height: '8px', backgroundColor:'rgba(95, 95, 95, 0.68)'}}></div>
            <Card1 />
            <div className="container-fluid strip" style={{height: '8px', backgroundColor:'rgba(95, 95, 95, 0.68)'}}></div>
            <Card2 />
            <div className="container-fluid strip" style={{height: '8px', backgroundColor:'rgba(95, 95, 95, 0.68)'}}></div>
            <Card3 />
            <div className="container-fluid strip" style={{height: '8px', backgroundColor:'rgba(95, 95, 95, 0.68)'}}></div>
            <Faq />
            <div className="container-fluid strip" style={{height: '8px', backgroundColor:'rgba(95, 95, 95, 0.68)'}}></div>
            <Footer />
        </>
    );
};

export default Home;