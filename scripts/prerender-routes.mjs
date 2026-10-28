import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '',
    title: 'Luxury Rajasthan Tours & Tailored Holidays | Dune Explorer',
    description: 'Bespoke luxury Rajasthan tours for discerning international travellers. Private palace stays, royal desert camps, and chauffeured itineraries. Plan your journey today.',
  },
  {
    path: 'luxury-rajasthan-tour-packages-usa',
    title: 'Luxury Rajasthan Tour Packages for US Travelers: Tailored Itineraries | Dune Explorer',
    description: 'Bespoke luxury Rajasthan tour packages for American travelers. Private palace stays, chauffeured SUVs, non-stop flight advice, and transparent USD pricing.',
  },
  {
    path: 'luxury-rajasthan-tour-packages-uk',
    title: 'Luxury Rajasthan Tour Packages From the UK and Europe: What Is Included | Dune Explorer',
    description: 'Compare luxury Rajasthan tour packages from Europe, with palace stays and private guides included. See what to expect and enquire today.',
  },
  {
    path: 'luxury-rajasthan-tour-packages-australia',
    title: 'Luxury Rajasthan Tour Packages for Australian Travelers: Bespoke Itineraries | Dune Explorer',
    description: 'Curated luxury Rajasthan tour packages for Australian travelers. Palace hotel stays, private chauffeured SUVs, direct Sydney/Melbourne flight advice, and transparent pricing.',
  },
  {
    path: 'luxury-rajasthan-tour-packages-japan',
    title: 'Luxury Rajasthan Tour Packages for Japanese Travelers: Royal Itineraries | Dune Explorer',
    description: 'Curated luxury Rajasthan tour packages for travelers from Japan. Direct flights from Tokyo Haneda, 5-star palace hotels, private chauffeured SUVs, and bespoke care.',
  },
  {
    path: '10-day-luxury-rajasthan-itinerary',
    title: '10-Day Luxury Rajasthan Itinerary: The Definitive Royal Circuit | Dune Explorer',
    description: 'The ultimate 10-day luxury Rajasthan itinerary. Delhi, Agra Taj Mahal, Jaipur, Jodhpur, and Udaipur with premier palace stays and private chauffeur.',
  },
  {
    path: 'rajasthan-palace-hotel-itinerary',
    title: 'Rajasthan Palace Hotels & Heritage Stays Itinerary | Dune Explorer',
    description: 'Experience living royalty at Taj Lake Palace, Rambagh Palace, and Umaid Bhawan. Complete palace hotel route guide by Dune Explorer.',
  },
  {
    path: 'luxury-rajasthan-tour-cost',
    title: 'Luxury Rajasthan Tour Cost Guide (2025–2026): What to Expect | Dune Explorer',
    description: 'Transparent breakdown of luxury Rajasthan tour costs. Palace hotel pricing, private chauffeur costs, and seasonal budget planning by Dune Explorer.',
  },
  {
    path: 'best-time-to-visit-rajasthan',
    title: 'Best Time to Visit Rajasthan: Season-by-Season Guide | Dune Explorer',
    description: 'Plan your royal journey with expert season-by-season climate guidance. Winter palace touring, wildlife safari seasons, and festival calendars.',
  },
  {
    path: 'luxury-jaisalmer-desert-camps',
    title: 'Luxury Jaisalmer Desert Camps & Glamping Guide | Dune Explorer',
    description: 'Compare the finest Thar Desert luxury camps, private dune glamping, and royal desert safaris in Jaisalmer by Dune Explorer.',
  },
  {
    path: 'luxury-ranthambore-tiger-safari',
    title: 'Luxury Ranthambore Tiger Safari & Lodge Guide | Dune Explorer',
    description: 'Private 4x4 Gypsy game drives, expert naturalists, and luxury wilderness tented lodges at Aman-i-Khás and Oberoi Vanyavilas in Ranthambore.',
  },
  {
    path: 'rajasthan-luxury-honeymoon',
    title: 'Rajasthan Luxury Honeymoon Itinerary: Royal Romantic Getaway | Dune Explorer',
    description: 'Candlelit Lake Pichola boat dining, desert sunset champagne in Jaisalmer, and palace suites. Tailored luxury honeymoons by Dune Explorer.',
  },
  {
    path: 'palace-on-wheels-vs-royal-rajasthan',
    title: 'Palace on Wheels vs Royal Rajasthan Luxury Trains Guide | Dune Explorer',
    description: 'Compare India premier luxury heritage trains: routes, presidential suites, onboard dining, and included excursions by Dune Explorer.',
  },
  {
    path: 'private-rajasthan-tour-driver-guide',
    title: 'Private Rajasthan Chauffeur & Driver Guide: Fleet & Standards | Dune Explorer',
    description: 'Everything you need to know about hiring a private chauffeur in Rajasthan. Luxury Toyota Crysta fleet, vetted drivers, and road etiquette.',
  },
  {
    path: 'guides',
    title: 'Luxury Rajasthan Travel Guides | Expert Insights & Itineraries | Dune Explorer',
    description: 'Explore expert Rajasthan luxury travel guides by Dune Explorer. Unpack palace hotel itineraries, tour costs, best times to visit, desert glamping, and private chauffeur tips.',
  },
  {
    path: 'destinations',
    title: 'Luxury Destinations in Rajasthan: Royal Cities & Wilderness | Dune Explorer',
    description: 'Explore the royal cities of Jaipur, Udaipur, Jodhpur, Jaisalmer, and Ranthambore with bespoke private journeys by Dune Explorer.',
  },
  {
    path: 'experiences',
    title: 'Handcrafted Luxury Experiences in Rajasthan | Dune Explorer',
    description: 'Discover curated royal experiences: Lake Pichola private cruises, Thar Desert glamping, hot air balloon flights, and heritage palace dining.',
  },
  {
    path: 'about',
    title: 'About Dune Explorer | Luxury Rajasthan Travel Specialists',
    description: 'Meet Dune Explorer: dedicated destination specialists curating bespoke palace journeys, private chauffeur routes, and royal Indian holidays.',
  },
  {
    path: 'contact',
    title: 'Contact Dune Explorer | Plan Your Royal Journey',
    description: 'Connect with our luxury travel concierge in Jaipur to curate your bespoke Rajasthan itinerary, palace stays, and private chauffeur travel.',
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions | Luxury Rajasthan Tours | Dune Explorer',
    description: 'Answers to essential questions about luxury travel in Rajasthan: visas, best times to visit, palace hotel bookings, and chauffeur standards.',
  },
  {
    path: 'stories',
    title: 'Rajasthan Travel Stories & Cultural Journals | Dune Explorer',
    description: 'Immersive stories, traveler journals, and destination insights from the royal palaces and desert landscapes of Rajasthan.',
  },
  {
    path: 'plan-journey',
    title: 'Plan Your Bespoke Royal Journey | Dune Explorer',
    description: 'Request a customized luxury Rajasthan itinerary and itemized proposal from our destination specialists within 24 hours.',
  },
  {
    path: 'terms-and-conditions',
    title: 'Terms & Conditions | Dune Explorer',
    description: 'Review our terms of service, booking policies, and luxury travel agreements for Dune Explorer journeys.',
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | Dune Explorer',
    description: 'Understand how Dune Explorer protects and respects your personal information and travel booking details.',
  },
  {
    path: 'payment-policy',
    title: 'Payment Policy | Dune Explorer',
    description: 'Transparent payment terms, deposit schedules, international wire transfer details, and cancellation policies.',
  },
  {
    path: 'styles/luxury',
    title: 'Ultra-Luxury Rajasthan Palace Journeys | Dune Explorer',
    description: 'Experience the pinnacle of royal Indian hospitality with iconic palace hotels, private aviation, and white-glove chauffeur care.',
  },
  {
    path: 'styles/desert',
    title: 'Thar Desert Luxury Safaris & Glamping | Dune Explorer',
    description: 'Private desert camps, starlit dune dinners, and camel expeditions in the royal sands of Jaisalmer.',
  },
  {
    path: 'styles/heritage',
    title: 'Heritage & Architectural Tours of Rajasthan | Dune Explorer',
    description: 'Explore UNESCO World Heritage forts, intricate havelis, and historic stepwells with licensed regional historians.',
  },
  {
    path: 'styles/village',
    title: 'Rural Rajasthan & Royal Village Stays | Dune Explorer',
    description: 'Authentic village encounters, pastoral landscapes, and restored rural fort retreats across Rajasthan.',
  },
  {
    path: 'styles/local',
    title: 'Authentic Cultural Immersion & Artisans | Dune Explorer',
    description: 'Meet master gem cutters, block printers, and royal culinary artisans on private behind-the-scenes walks.',
  },
  {
    path: 'styles/wildlife',
    title: 'Luxury Wildlife Safaris: Tigers & Leopards | Dune Explorer',
    description: 'Private 4x4 game drives in Ranthambore and Jawai leopard country with senior wildlife naturalists.',
  },
  {
    path: 'experience/1',
    title: 'Royal Jaipur: Forts, Palaces & Bazaars | Dune Explorer',
    description: 'Discover the Pink City with private Amber Fort exploration, City Palace, and historic Johari Bazaar walks.',
  },
  {
    path: 'experience/2',
    title: 'Romantic Udaipur: The City of Lakes | Dune Explorer',
    description: 'Experience Lake Pichola solar-boat cruises, Taj Lake Palace dining, and historic Jagdish Temple in Udaipur.',
  },
  {
    path: 'experience/3',
    title: 'Mystical Jaisalmer: The Golden Desert Citadel | Dune Explorer',
    description: 'Explore the living Golden Fort of Jaisalmer and luxury glamping among the rolling dunes of the Thar Desert.',
  },
];

const baseTemplate = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const r of routes) {
  const url = r.path ? `https://duneexplorer.com/${r.path}` : 'https://duneexplorer.com/';
  
  let html = baseTemplate;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${r.title}</title>`);
  
  // Replace meta descriptions & og
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${r.description}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${r.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${r.description}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${r.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${r.description}" />`);

  // Inject exact self-canonical and og:url tag before </head>
  const metaTags = `\n    <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`;
  html = html.replace('</head>', metaTags);

  // Generate crawlable internal links mesh for Googlebot
  const internalLinks = routes
    .filter((route) => route.path !== r.path)
    .map((route) => {
      const linkUrl = route.path ? `https://duneexplorer.com/${route.path}` : 'https://duneexplorer.com/';
      const cleanTitle = route.title.split('|')[0].trim();
      return `<li><a href="${linkUrl}">${cleanTitle}</a></li>`;
    })
    .join('\n          ');

  const shellContent = `
    <header style="padding: 1.5rem; background: #171410; color: #FFFDF0;">
      <a href="https://duneexplorer.com/" style="color: #D9A441; font-size: 1.5rem; text-decoration: none; font-weight: bold;">Dune Explorer</a>
      <nav style="margin-top: 0.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="https://duneexplorer.com/" style="color: #FFFDF0; text-decoration: none;">Home</a>
        <a href="https://duneexplorer.com/destinations" style="color: #FFFDF0; text-decoration: none;">Destinations</a>
        <a href="https://duneexplorer.com/experiences" style="color: #FFFDF0; text-decoration: none;">Experiences</a>
        <a href="https://duneexplorer.com/guides" style="color: #FFFDF0; text-decoration: none;">Travel Guides</a>
        <a href="https://duneexplorer.com/about" style="color: #FFFDF0; text-decoration: none;">About Us</a>
        <a href="https://duneexplorer.com/contact" style="color: #FFFDF0; text-decoration: none;">Contact</a>
        <a href="https://duneexplorer.com/plan-journey" style="color: #D9A441; text-decoration: none; font-weight: bold;">Plan Journey</a>
      </nav>
    </header>
    <main style="max-width: 960px; margin: 2rem auto; padding: 0 1.5rem; font-family: sans-serif; color: #3C3A33;">
      <h1 style="color: #1A1A1A;">${r.title}</h1>
      <p style="font-size: 1.1rem; line-height: 1.6;">${r.description}</p>
      <section style="margin-top: 2.5rem; border-top: 1px solid #e2dbd0; padding-top: 1.5rem;">
        <h2 style="color: #1A1A1A; font-size: 1.3rem;">Explore All Rajasthan Luxury Travel Guides &amp; Itineraries</h2>
        <ul style="line-height: 2; margin-top: 1rem;">
          ${internalLinks}
        </ul>
      </section>
    </main>
    <footer style="padding: 2rem 1.5rem; background: #171410; color: #D9A441; text-align: center; margin-top: 3rem;">
      <p>&copy; 2026 Dune Explorer. Luxury Rajasthan Tours &amp; Tailored Holidays.</p>
    </footer>`;

  // Inject semantic crawlable shell inside #root for search engine bots
  html = html.replace('<div id="root"></div>', `<div id="root">${shellContent}</div>`);

  if (!r.path) {
    // Write root index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
    console.log(`[prerender] Updated root index.html with crawlable shell and canonical: ${url}`);
  } else {
    // Write subpage index.html
    const targetDir = path.join(distDir, r.path);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
    console.log(`[prerender] Generated static HTML shell with crawlable internal links: ${r.path}/index.html`);
  }
}

console.log(`\n[prerender] Successfully generated static crawlable HTML shells for all ${routes.length} routes.`);
