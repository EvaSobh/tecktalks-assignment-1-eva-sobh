import JoinButton from "@/components/JoinButton";

const CommunitiesPage = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {

  const { slug } = await params;

  return (
    <main>
      <div>
        <h1>Community Name</h1>
        <h2>{slug}</h2>

        <JoinButton />
      </div>
    </main>
  );
};

export default CommunitiesPage;