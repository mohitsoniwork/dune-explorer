import { motion } from 'framer-motion';
import AutoImageSlider from '../ui/AutoImageSlider';
import { imageManifest } from '../../data/imageManifest';
import './Gallery.css';

const galleryItems = [
  { 
    id: 'jaipur',
    images: imageManifest['jaipur'], 
    alt: 'Pink City architecture of Jaipur', 
    label: 'Jaipur' 
  },
  { 
    id: 'jaisalmer',
    images: imageManifest['jaisalmer'], 
    alt: 'Golden sand dunes of Jaisalmer', 
    label: 'Jaisalmer' 
  },
  { 
    id: 'udaipur',
    images: imageManifest['udaipur'], 
    alt: 'Palace beside Lake Pichola in Udaipur', 
    label: 'Udaipur' 
  },
  { 
    id: 'jodhpur',
    images: imageManifest['jodhpur'], 
    alt: 'Mehrangarh Fort rising over Jodhpur', 
    label: 'Jodhpur' 
  },
  { 
    id: 'ranthambore',
    images: imageManifest['ranthambore'], 
    alt: 'Bengal tiger in Ranthambore National Park', 
    label: 'Ranthambore' 
  },
  { 
    id: 'heritage',
    images: ['/images/luxury-hotel.webp'], 
    alt: 'Luxury heritage hotel stay', 
    label: 'Heritage Stays' 
  },
];

const Gallery = () => {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">The Gallery</span>
          <h2>Moments That Feel Like Gold</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.id}
              className={`gallery-item gallery-item-${i + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <AutoImageSlider images={item.images} alt={item.alt} />
              <figcaption>
                <span>{item.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
