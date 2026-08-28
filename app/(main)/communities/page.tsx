import JoinButton from "@/components/JoinButton";
import { communities } from "@/data/communities";
import Link from "next/link";

export default function CommunitiesPage() {
  return (
    <main>
      <h1>Communities</h1>

      <p>Browse all developer communities.</p>

      {communities.map((community) => (
        <div key={community.id}>
          <h2>{community.name}</h2>
          <p>{community.description}</p>
          <hr />
           <Link href={`/communities/${community.slug}`} style={{ color: "red", marginRight: "20px" }}>
        Click me!!
      </Link>
      <JoinButton />
        </div>
      
      ))}
    </main>
    
  );
}