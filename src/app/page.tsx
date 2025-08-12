import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Architect Yeliz Acar Blog';

export const metadata: Metadata = {
  title: siteName,
};

export default function Page() {
  redirect('/Blog');
}
