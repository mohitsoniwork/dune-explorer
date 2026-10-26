import HeroSection from '../components/home/HeroSection';
import TravelStyles from '../components/home/TravelStyles';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedExperiences from '../components/home/FeaturedExperiences';
import ItineraryTimeline from '../components/home/ItineraryTimeline';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import { usePageMeta } from '../hooks/usePageMeta';

const Home = () => {
  usePageMeta({
    title: 'Luxury Rajasthan Tours & Tailored Holidays | Dune Explorer',
    description:
      'Bespoke luxury Rajasthan tours for discerning UK & European travellers. Private palace stays, royal desert camps, and chauffeured itineraries. Plan your journey today.',
  });

  return (
    <div className="home-page">
      <HeroSection />
      <TravelStyles />
      <WhyChooseUs />
      <FeaturedExperiences />
      <ItineraryTimeline />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Home;
