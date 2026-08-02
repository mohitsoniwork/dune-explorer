import HeroSection from '../components/home/HeroSection';
import DestinationMarquee from '../components/home/DestinationMarquee';
import TravelStyles from '../components/home/TravelStyles';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedExperiences from '../components/home/FeaturedExperiences';
import ItineraryTimeline from '../components/home/ItineraryTimeline';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import { usePageMeta } from '../hooks/usePageMeta';

const Home = () => {
  usePageMeta({
    title: 'Dune Explorer | Luxury Rajasthan Tours & Experiences',
    description:
      'Experience Rajasthan beyond tourism with Dune Explorer. Luxury tours, cultural experiences, and desert adventures in Rajasthan, India.',
  });

  return (
    <div className="home-page">
      <HeroSection />
      <DestinationMarquee />
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
