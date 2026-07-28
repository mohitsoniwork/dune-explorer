import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Stories.css';

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="stories-page">
      <header className="stories-hero">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="India Journey"
          className="stories-hero-img"
        />
        <div className="stories-hero-overlay"></div>
        <motion.div
          className="stories-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="stories-label">Stories</span>
          <h1>The Story Behind DuneXplore</h1>
          <p className="stories-tagline">Beyond Travel, Into Experience</p>
        </motion.div>
      </header>

      <section className="stories-content">
        <div className="container">
          <motion.div
            className="stories-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              There are journeys that take you to new places, and then there are journeys that change the way you see the world. DuneXplore was born from the second kind.
            </p>
            <p>
              Growing up in Rajasthan, I was surrounded by magnificent forts, timeless palaces, vibrant markets, colourful festivals, and stories that had been passed down through generations. To me, these weren't just tourist attractions—they were part of everyday life. As I travelled across different parts of India, I realized that every destination had its own soul, its own people, and its own story waiting to be discovered.
            </p>
            <p>
              What inspired me most wasn't simply travelling—it was witnessing the joy on people's faces when they experienced a place in a way they never expected. A quiet sunrise over the Aravalli Hills. A conversation with a local artisan whose family had practised the same craft for generations. The silence of the Thar Desert beneath a sky full of stars. A family sharing traditional Rajasthani cuisine with guests from halfway across the world. Those moments cannot be found in guidebooks; they become memories that stay with you forever.
            </p>

            <blockquote className="stories-quote">
              That's why I created DuneXplore.
              <br />
              Not to sell holidays, but to create journeys that people remember for the rest of their lives.
            </blockquote>

            <p>
              Every itinerary we design is personal. Every recommendation is carefully chosen. Every hotel, every local experience, every heritage walk, every wildlife safari, and every hidden gem is selected with one purpose—to help our guests experience India as more than just visitors.
            </p>
            <p>
              We believe luxury is not only about staying in beautiful hotels or travelling in comfort. True luxury is having the freedom to experience a destination without worrying about the details. It's watching the sunrise at the Taj Mahal before the crowds arrive. It's sharing stories with local communities, dining in centuries-old palaces, spotting a leopard in the wild, or discovering a quiet street that isn't found on most travel maps.
            </p>
            <p className="stories-emphasis">
              These are the experiences that become lifelong memories.
            </p>
            <p>
              But DuneXplore is about more than our story—it is about yours.
            </p>
            <p>
              Every traveller who joins us brings a different dream, a different perspective, and a different reason for exploring India. Whether you're celebrating a honeymoon, travelling with family, seeking adventure, or simply fulfilling a lifelong dream, your journey becomes part of the DuneXplore story.
            </p>
            <p>
              This space is where we'll share those moments—our experiences, your experiences, travel inspiration, hidden discoveries, and the unforgettable memories created along the way. We hope these stories inspire others to explore with curiosity, travel with purpose, and appreciate the beauty of meaningful experiences.
            </p>

            <blockquote className="stories-quote stories-quote-final">
              Because at the end of every journey, we don't remember the number of kilometres we travelled or the hotels we stayed in.
              <br /><br />
              We remember the people we met, the stories we heard, the places that touched our hearts, and the memories that changed us forever.
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className="stories-closing">
        <div className="container">
          <motion.div
            className="stories-closing-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>Welcome to the DuneXplore family.</p>
            <p className="stories-closing-cta">
              Let's build a community of travellers who believe that the best journeys aren't measured by destinations, but by the experiences they create.
            </p>
            <div className="stories-closing-brand">
              <strong>DuneXplore</strong>
              <span>Beyond Travel, Into Experience.</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
