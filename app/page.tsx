import Link from "next/link";
import Image from "next/image";
import { Download, HelpCircle, VrHand, Cpu } from "lucide-react";

const FeatureCard = ({ title, description, reverse = false }: { title: string; description: string; reverse?: boolean }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 py-16 ${reverse ? "md:flex-row-reverse" : ""}`}>
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
    </div>
    <div className="flex-1 w-full aspect-video bg-zinc-800 rounded-xl border border-zinc-700 flex items-center justify-center">
      <span className="text-zinc-500 italic">[Feature Image Placeholder]</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex-1 bg-black text-white font-sans">
      <main className="max-w-5xl mx-auto p-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 py-20 text-center">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="GDVR Logo" width={96} height={96} />
            <h1 className="text-7xl font-bold tracking-tighter">GDVR</h1>
          </div>
          <p className="text-2xl text-zinc-400 max-w-2xl">
            Bringing the intensity of Geometry Dash to Meta Quest 3 via Geode.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/install" className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200">
              <Download size={20} /> Install
            </Link>
            <Link href="/faq" className="flex items-center gap-2 border border-zinc-700 px-8 py-4 rounded-full font-semibold hover:bg-zinc-800">
              <HelpCircle size={20} /> FAQ
            </Link>
          </div>
        </div>

        {/* Video Embed */}
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 mb-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="GDVR Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Feature Sections */}
        <FeatureCard 
          title="Immersive VR Gameplay" 
          description="Experience Geometry Dash like never before. With our VR integration, you're not just playing; you're inside the level, dodging obstacles in true 3D space."
        />
        <FeatureCard 
          title="Powered by Geode" 
          description="Utilizing the robust Geode SDK, GDVR ensures high compatibility and performance, allowing you to use your favorite mods on the Quest 3 platform seamlessly."
          reverse
        />
      </main>
    </div>
  );
}
