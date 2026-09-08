const BASE_URL = 'https://saalthotels.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Saalt Group of Hotels',
  url: BASE_URL,
  logo: `${BASE_URL}/saalt-patna.png`,
  description:
    'Saalt Group of Hotels offers premium hospitality across Bihar and Jharkhand with 4 properties including business hotels, pilgrimage stays, and luxury wedding resorts since 2019.',
  foundingDate: '2019',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9709633313',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-7909046993',
      contactType: 'reservations',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/saalthotels',
    'https://www.instagram.com/saalthotels',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Patliputra Police Station Lane, near Durga Mandir, Patliputra Colony',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800013',
    addressCountry: 'IN',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Saalt Hotels',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/properties?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const patliputraHotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Saalt Patliputra Hotel',
  description:
    'Premier business hotel in Patliputra Colony, Patna with 45 rooms, conference halls, banquet facilities, rooftop lawn, and multi-cuisine restaurant. Ideal for corporate stays and weddings.',
  url: `${BASE_URL}/properties/patliputra-saalt`,
  telephone: '+91-9709633313',
  email: 'info@saalthotels.com',
  image: `${BASE_URL}/saalt-patliputra-properties.jpg`,
  priceRange: '₹₹',
  numberOfRooms: 45,
  checkinTime: '12:00',
  checkoutTime: '11:00',
  starRating: { '@type': 'Rating', ratingValue: '4' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Patliputra Police Station Lane, near Durga Mandir, Patliputra Colony',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800013',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.6093,
    longitude: 85.1376,
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Gym', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Conference Hall', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Banquet Facilities', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
  ],
};

export const buddhaSaaltHotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Buddha Saalt Hotel',
  description:
    'Comfortable pilgrimage hotel near Mahabodhi Temple UNESCO World Heritage Site in Bodh Gaya. Ideal stay for Buddhist pilgrims visiting Bodhi Tree, Gaya, and nearby monasteries.',
  url: `${BASE_URL}/properties/buddha-saalt`,
  telephone: '+91-7909046993',
  email: 'info@saalthotels.com',
  image: `${BASE_URL}/buddha-saalt-properties.webp`,
  priceRange: '₹',
  numberOfRooms: 35,
  checkinTime: '12:00',
  checkoutTime: '11:00',
  starRating: { '@type': 'Rating', ratingValue: '3' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '85',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Domuhan-Bodhgaya Road, Baiju Bigha',
    addressLocality: 'Bodh Gaya',
    addressRegion: 'Bihar',
    postalCode: '824231',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.6958,
    longitude: 84.9870,
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Meditation Area', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Travel Desk', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Luggage Storage', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
  ],
};

export const deogharHotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Saalt Deoghar Hotel',
  description:
    'Pilgrimage hotel adjacent to Jasidih Railway Station, Deoghar. Close to Baba Baidyanath Jyotirlinga Temple. Ideal for devotees visiting during Shravan month and Bol Bam yatra in Jharkhand.',
  url: `${BASE_URL}/properties/deoghar-saalt`,
  telephone: '+91-7909046993',
  email: 'info@saalthotels.com',
  image: `${BASE_URL}/saalt-deoghar.png`,
  priceRange: '₹',
  numberOfRooms: 45,
  checkinTime: '12:00',
  checkoutTime: '11:00',
  starRating: { '@type': 'Rating', ratingValue: '3' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '95',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No-8, Opposite S.B.I ATM, Near Jasidih Railway Station, Jasidih Station Road',
    addressLocality: 'Deoghar',
    addressRegion: 'Jharkhand',
    postalCode: '814142',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.4853,
    longitude: 86.6919,
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Banquet Hall', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Marriage Lawn', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
  ],
};

export const narayanaGreensSchema = {
  '@context': 'https://schema.org',
  '@type': 'Resort',
  name: 'Narayana Greens Resort',
  description:
    'Luxury 4-5 star wedding resort in Bodh Gaya, Bihar. 40,000 sq.ft gardens for 3,500 guests, swimming pool, spa, fine dining, 3 banquet halls, 59 premium rooms on NH-32 near Mahabodhi Temple.',
  url: `${BASE_URL}/properties/narayana-greens`,
  telephone: '+91-7909046993',
  email: 'info@saalthotels.com',
  image: `${BASE_URL}/narayana-greens-proeperties.avif`,
  priceRange: '₹₹₹',
  numberOfRooms: 59,
  checkinTime: '11:00',
  checkoutTime: '12:00',
  starRating: { '@type': 'Rating', ratingValue: '5' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '110',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gaya-Dobhi Road (NH-32), Kolhaura',
    addressLocality: 'Bodh Gaya',
    addressRegion: 'Bihar',
    postalCode: '823001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.7206,
    longitude: 85.0055,
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Fine Dining Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Fitness Center', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Banquet Hall', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Conference Facilities', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wedding Venue', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Garden', value: true },
  ],
};

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function getFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export const localBusinessSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Saalt Patliputra Hotel',
    image: `${BASE_URL}/saalt-patliputra-properties.jpg`,
    url: `${BASE_URL}/properties/patliputra-saalt`,
    telephone: '+91-9709633313',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Patliputra Police Station Lane, Patliputra Colony',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      postalCode: '800013',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 25.6093, longitude: 85.1376 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '₹₹',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '120', bestRating: '5' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Buddha Saalt Hotel Bodh Gaya',
    image: `${BASE_URL}/buddha-saalt-properties.webp`,
    url: `${BASE_URL}/properties/buddha-saalt`,
    telephone: '+91-7909046993',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Domuhan-Bodhgaya Road, Baiju Bigha',
      addressLocality: 'Bodh Gaya',
      addressRegion: 'Bihar',
      postalCode: '824231',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 24.6958, longitude: 84.9870 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '₹',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '85', bestRating: '5' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Saalt Deoghar Hotel Jasidih',
    image: `${BASE_URL}/saalt-deoghar.png`,
    url: `${BASE_URL}/properties/deoghar-saalt`,
    telephone: '+91-7909046993',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No-8, Near Jasidih Railway Station',
      addressLocality: 'Deoghar',
      addressRegion: 'Jharkhand',
      postalCode: '814142',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 24.4853, longitude: 86.6919 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '₹',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '95', bestRating: '5' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Resort',
    name: 'Narayana Greens Resort Bodh Gaya',
    image: `${BASE_URL}/narayana-greens-proeperties.avif`,
    url: `${BASE_URL}/properties/narayana-greens`,
    telephone: '+91-7909046993',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gaya-Dobhi Road (NH-32), Kolhaura',
      addressLocality: 'Bodh Gaya',
      addressRegion: 'Bihar',
      postalCode: '823001',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 24.7206, longitude: 85.0055 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '₹₹₹',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '110', bestRating: '5' },
  },
];
