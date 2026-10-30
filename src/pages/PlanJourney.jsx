import MultiStepForm from '../components/form/MultiStepForm';
import { usePageMeta } from '../hooks/usePageMeta';

const PlanJourney = () => {
  usePageMeta({
    title: 'Custom Rajasthan Itinerary & Private Driver | Plan Your Journey',
    description:
      'Design your bespoke luxury Rajasthan itinerary. Tell us your preferences and our experts will craft the perfect private tour with a dedicated driver and guide.',
  });

  return (
    <div className="section container" style={{ paddingTop: 'var(--header-height)', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', color: 'var(--color-ivory)', fontFamily: 'var(--font-heading)', textWrap: 'balance' }}>
          Design Your Custom Rajasthan Tour
        </h1>
        <p style={{ color: 'var(--color-camel)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginTop: '0.75rem', fontWeight: 500 }}>
          Tell us your preferences and we'll craft the perfect Rajasthan experience
        </p>
      </div>
      <MultiStepForm />
    </div>
  );
};

export default PlanJourney;
