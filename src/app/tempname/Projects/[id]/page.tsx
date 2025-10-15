
"use client";
import DetailsProject from "./detailsProject";
import { useParams } from 'next/navigation';
import Seo from "../../../utils/Seo";

export default function Page() {
  const params = useParams();
  const id = params?.id as string;
  return (
    <>
      <Seo title={`Project ${id}`} description="mimar yeliz acar hakkında bilgiler , tanıtım , projelerine göz atın , mimarlık , mezun" path={`/Blog/Projects/${id}`} />
      <DetailsProject id={id} />
    </>
  );
}
