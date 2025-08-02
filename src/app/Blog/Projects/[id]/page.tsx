
'use client'
import DetailsProject from "./detailsProject";
import { useParams } from 'next/navigation';

export default  function Page() {
  const params = useParams();
  const id = params?.id as string;
  return <DetailsProject id={id}/>;
}
