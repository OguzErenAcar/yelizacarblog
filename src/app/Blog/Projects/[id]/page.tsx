
"use client";
import DetailsProject from "./detailsProject";
import { useParams } from 'next/navigation';
import Seo from "./../../../utils/Seo";

export default function Page() {
  const params = useParams();
  const id = params?.id as string;
  return (
    <>
      <Seo title={`Project ${id}`} path={`/Blog/Projects/${id}`} />
      <DetailsProject id={id} />
    </>
  );
}
