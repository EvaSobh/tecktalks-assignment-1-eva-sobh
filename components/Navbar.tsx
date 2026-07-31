import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        backgroundColor: "#333",
      }}
    >
      <Link href="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link href="/about" style={{ color: "white", marginRight: "20px" }}>
        About
      </Link>

      <Link href="/communities" style={{ color: "white", marginRight: "20px" }}>
        Communities
      </Link>

      <Link href="/topics" style={{ color: "white", marginRight: "20px" }}>
        Topics
      </Link>

      <Link href="/developers" style={{ color: "white" }}>
        Developers
      </Link>
    </nav>
  );
}