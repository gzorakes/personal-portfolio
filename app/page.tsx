import MainCard from "@/components/web/main-card";
import CredentialsCard from "@/components/web/credentials-card";
import ProjectsCard from "@/components/web/projects-card";
import CVCard from "@/components/web/cv-card";
import ServicesCard from "@/components/web/services-card";
import ProfilesCard from "@/components/web/profiles-card";
import StatsCard from "@/components/web/stats-card";
import WorkTogetherCard from "@/components/web/worktogether-card";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <MainCard />
      <CredentialsCard />
      <ProjectsCard />
      <CVCard />
      <ServicesCard />
      <ProfilesCard />
      <StatsCard />
      <WorkTogetherCard />
    </main>
  );
}
