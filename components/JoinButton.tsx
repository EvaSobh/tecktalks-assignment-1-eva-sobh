"use client";

import { useState } from "react";

export default function JoinButton() {
  const [joined, setJoined] = useState(false);

  return (
    <button
      onClick={() => setJoined(!joined)}
      style={{
        padding: "10px 20px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {joined ? "Joined ✅" : "Join"}
    </button>
  );
}