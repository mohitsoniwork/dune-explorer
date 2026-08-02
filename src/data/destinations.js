import { imageManifest } from './imageManifest';

export const rajasthanOverview = {
  title: "Rajasthan",
  description: "Rajasthan is a blend of eternal beauty and legendary history. It is famous for the majestic forts, grand palaces, beautifully carved temples and frescoed havelis, which were built by kings, rulers, and rich merchants of the state. It is also known for its traditional and colorful art. In the fabric industry, the block prints, tie and dye prints, Bagaru prints, Sanganer prints, and Zari embroidery are major export products from Rajasthan. One of the world's oldest mountain ranges, the Aravalli Range, cradles the only hill station of Rajasthan, Mount Abu, also the rocky range of Amber, hilly range of Mewar, river basin of Bharatpur and fertile Aravali range gives the topography of the state a unique look. It is perhaps the most tribally diverse, artistically decorative, architecturally magnificent and regal in India."
};

export const destinationsList = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    subtitle: 'The Pink City',
    images: imageManifest['jaipur'],
    description: 'The vibrant capital city known for its signature pink architecture, bustling bazaars, and the magnificent Amer Fort. Experience the royal legacy of the Rajputs in this cornerstone of the Golden Triangle, offering world-class luxury stays in authentic heritage palaces.',
    highlights: ['Amer Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar']
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    subtitle: 'The City of Lakes',
    images: imageManifest['udaipur'],
    description: 'Often called the Venice of the East, Udaipur is set around a series of pristine lakes and framed by the lush Aravalli hills. Home to the majestic City Palace and the iconic floating Taj Lake Palace, it is the pinnacle of romantic luxury travel in India.',
    highlights: ['Lake Pichola', 'City Palace', 'Jag Mandir', 'Sajjangarh Palace']
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    subtitle: 'The Blue City',
    images: imageManifest['jodhpur'],
    description: 'Guarded by the imposing Mehrangarh Fort, Jodhpur presents a stunning sea of blue houses stretching out to the horizon. It offers a rugged, authentic luxury experience featuring boutique heritage hotels and spectacular desert vistas.',
    highlights: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Clock Tower']
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    subtitle: 'The Golden City',
    images: imageManifest['jaisalmer'],
    description: 'Rising from the heart of the Thar Desert like a golden mirage, Jaisalmer features a living fort, ornate sandstone havelis, and expansive sand dunes. Immerse yourself in premium desert safaris and secluded luxury camps under the stars.',
    highlights: ['Jaisalmer Fort', 'Sam Sand Dunes', 'Patwon Ki Haveli', 'Gadisar Lake']
  },
  {
    id: 'ranthambore',
    name: 'Ranthambore',
    subtitle: 'The Wild Frontier',
    images: imageManifest['ranthambore'],
    description: 'Once the private hunting ground of the Maharajas, Ranthambore National Park is now one of the best places in the world to spot majestic Bengal tigers in the wild. Experience the thrill of the jungle while staying in high-end luxury tented camps.',
    highlights: ['Tiger Safari', 'Ranthambore Fort', 'Padam Talao', 'Trinetra Ganesh Temple']
  },
  {
    id: 'pushkar',
    name: 'Pushkar',
    subtitle: 'The Spiritual Oasis',
    images: imageManifest['pushkar'],
    description: 'A holy town wrapping around a sacred lake, Pushkar is famous for its hundreds of temples and the annual Camel Fair. Enjoy a serene, spiritually rich atmosphere infused with vibrant culture and luxury boutique stays.',
    highlights: ['Pushkar Lake', 'Brahma Temple', 'Pushkar Camel Fair', 'Savitri Temple']
  }
];
