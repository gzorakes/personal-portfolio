interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Project detail works ✅</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
