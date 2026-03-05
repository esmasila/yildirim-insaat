import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useReviews } from "./hooks/useReviews";

// Componentler
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurMachine from "./components/OurMachine";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import DemirKalip from "./components/DemirKalip";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
    const { reviews, setReviews, satisfaction } = useReviews();

    // AOS animasyonlarını başlat
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero satisfaction={satisfaction} />
                <About satisfaction={satisfaction} />
                <OurMachine />
                <DemirKalip />
                <Services />
                <WhyUs />
                <Reviews reviews={reviews} setReviews={setReviews} />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}

export default App;
