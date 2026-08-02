import MultiStepForm from '../components/form/MultiStepForm';
import { usePageMeta } from '../hooks/usePageMeta';

const PlanJourney = () => {
  usePageMeta({
    title: 'Plan Your Journey | Dune Explorer',
    description:
      'Design your bespoke Rajasthan journey. Tell us your preferences and our experts will craft the perfect luxury travel experience.',
  });

  return (
    <div className="section container" style={{ paddingTop: 'var(--header-height)', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-dark)' }}>Design Your Journey</h1>
        <p style={{ color: 'var(--color-camel)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Tell us your preferences and we'll craft the perfect Rajasthan experience
        </p>
      </div>
      <MultiStepForm />
    </div>
  );
};

export default PlanJourney;
