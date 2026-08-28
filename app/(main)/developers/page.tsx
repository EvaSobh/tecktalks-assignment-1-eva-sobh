import { developers } from "@/data/developers";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Developers</h1>
      <p>Browse all developers.</p>

      {developers.map((developer) => (
        <div key={developer.id}>
          <h2>{developer.username}</h2>
          <p>{developer.role}</p>
          <p>{developer.bio}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Page;