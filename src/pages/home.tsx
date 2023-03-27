import React from "react";
import Header from "../components/header";
import Footer from '../components/footer';
import AboutMe from "../components/aboutme";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Projects from "../components/projects";


const Home: React.FC = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <Skills />
            <Projects/>
            <Contact />
            <Footer />
        </>
    );
};

export default Home;