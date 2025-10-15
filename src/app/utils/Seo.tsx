import Head from 'next/head';
import JsonLd from './JsonLd';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Architect Mimar Yeliz Acar Blog';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yelizacar.com.tr';
const defaultDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Mimar Yeliz Acar blog ve içerikleri.';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

export default function Seo({ title, description, path = '' }: SeoProps) {
 
  const url = `${siteUrl}${path}`;

  return (
    <>
      <Head>
        <link rel="icon" href="https://static.vecteezy.com/system/resources/previews/043/854/560/non_2x/blogging-line-icon-free-vector.jpg" />
        <title>{`${title} | ${siteName}`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} | ${siteName}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteName} />
        <link rel="canonical" href={url} />
      </Head>

      {/* JSON-LD structured data */}
     
    </>
  );
}
