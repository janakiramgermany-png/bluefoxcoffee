import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main style={{ width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
    </main>
  );
}