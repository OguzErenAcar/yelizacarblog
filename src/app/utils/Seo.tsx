 
import Head from 'next/head';
import JsonLd from './JsonLd';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Architect Yeliz Acar Blog';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
const defaultDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '';

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
}

export default function Seo({ title, description, path = '' }: SeoProps) {
  const desc = description || defaultDescription;
  const url = siteUrl + path;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: desc,
    url,
  };

  return (
    <>
      <Head>
        <title>{`${title} | ${siteName}`}</title>
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} | ${siteName}`} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteName} />
      <JsonLd data={jsonLd} />

      
      </Head>
    </>
  );
}
