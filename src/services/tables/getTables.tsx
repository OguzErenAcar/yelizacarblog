import LogoTable from "@/components/tables/LogoTable";
import LinksTable from "@/components/tables/LinksTable";
import InfoTimeLineTable from "@/components/tables/InfoTimeLineTable";
import InfoTable from "@/components/tables/InfoTable";
import ProjectImagesTable from "@/components/tables/ProjectImagesTable";
import ProjectTable from "@/components/tables/ProjectTable";
import UsersTable from "@/components/tables/UsersTable";

export default function getTables(){
  return {
    LogoTable: <LogoTable  key={0} />,
    LinksTable: <LinksTable key={1} />,
    InfoTimeLineTable: <InfoTimeLineTable key={2} />,
    InfoTable: <InfoTable key={3} />,
    ProjectImagesTable: <ProjectImagesTable key={4} />,
    ProjectTable: <ProjectTable key={5} />,
    UsersTable: <UsersTable key={6} />,
  };
}