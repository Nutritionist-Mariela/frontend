import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <AboutMe></AboutMe>
            <WhatsappButton phoneNumber="+59899076258" message="Hola! Me gustaría..." />
            <Footer></Footer>
        </>
    );
}

export default App;
