import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import WelcomeSection from "./components/WelcomeSection";
import OurServicesSection from "./components/OurServicesSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ClientLogosSection from "./components/ClientLogosSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Slider />
			<WelcomeSection />
			<OurServicesSection />
			<StatsSection />
			<TestimonialsSection />
			<ClientLogosSection />
			<NewsSection />
			<Footer />
		</>
	);
}

export default App;
