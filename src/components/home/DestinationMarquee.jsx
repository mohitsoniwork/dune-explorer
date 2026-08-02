import { destinationsList } from '../../data/destinations';
import './DestinationMarquee.css';

const DestinationMarquee = () => {
  const items = [...destinationsList, ...destinationsList];

  return (
    <section className="dest-marquee-section" aria-label="Destinations we explore">
      <div className="dest-marquee">
        <div className="dest-marquee-track">
          {items.map((dest, i) => (
            <span className="dest-marquee-item" key={`${dest.id}-${i}`}>
              <span className="dest-marquee-name">{dest.name}</span>
              <span className="dest-marquee-dot" aria-hidden="true"></span>
              <span className="dest-marquee-sub">{dest.subtitle}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationMarquee;
