// Shared site constants and structured data used across server components.
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synergisticinteraction.com.au';

// Site-wide organisation entity for JSON-LD.
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Synergistic Interaction Pty Ltd',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  image: `${BASE_URL}/opengraph-image`,
  description:
    'Practical AI adoption for established Australian businesses and practices. The right tools, staff trained, and a human always in the loop.',
  founder: { '@type': 'Person', name: 'Joshua Thompson' },
  areaServed: 'Australia',
  email: 'jt@synergisticinteraction.com.au',
  telephone: '+61417673828',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'jt@synergisticinteraction.com.au',
      telephone: '+61417673828',
    },
  ],
  identifier: {
    '@type': 'PropertyValue',
    name: 'ABN',
    value: '33 686 618 397',
  },
};
