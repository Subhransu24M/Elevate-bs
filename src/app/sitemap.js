import { client } from "../../sanity/lib/client"

export const revalidate = 0 // revalidate at most every hour

export default async function sitemap() {

    const query =`*[_type=='post'] | order(_createdAt asc)
    {
      "slug":slug.current,
       _updatedAt
  }`;

  const data = await client.fetch (query);
  console.log(data);
  const baseUrl ="https://www.elevatebs.com";
  const post = data.map((item) => ({

        url: `${baseUrl}/blog/${item.slug}`,
        lastModified: `${item._updatedAt}`,
        changeFrequency: 'weekly',
        priority: 0.5,

  }))

  
    return [
      {
        url: 'https://www.elevatebs.com/',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://www.elevatebs.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/website-development',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/ecommerce-solutions',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/app-development',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/digital-marketing',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/contact-us',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/digital-marketing/seo-service-in-london-uk',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/digital-marketing/google-ads-service-london-uk',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/digital-marketing/social-media-marketing-service-london-uk',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/cfo-services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/trademark-registration-service-dubai-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/restaurant-accounting-bookkeeping-service-dubai-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/best-corporate-tax-consultants-dubai-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/bank-account-opening-in-dubai',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/middle-east-desk-service-london-uk',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/uae-bank-loan-agreement-service',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/local-partner-arrangement-service-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/compliance-services-in-dubai-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/bookkeeping-service-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/company-formation-dubai-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/company-liquidation-services-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/vat-registration-service-dubai-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/vat-deregistration-service-dubai-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/visa-assistance',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/audit-assurance-services-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/accounting-software-implementation-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/iso-certification-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/adgm-company-service-provider',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/corporate-services/restaurant-accounting-services-in-abu-dhabi',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/adgm',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/accounting-services-in-adgm',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/adgm-company-service-provider',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/adgm-company-setup',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/business-formation',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/ajman-free-zone-company-formation-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/ajman-free-zone-company-formation-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/jafza-offshore-company-formation-dubai',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/rakez-company-setup',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/saif-zone-company-formation-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/saif-zone-company-formation-uae',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.elevatebs.com/blog',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      ...post
    ]
  }