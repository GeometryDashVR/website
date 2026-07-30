import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-zinc-800 p-4 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="GDVR Logo" width={32} height={32} />
          <span className="text-xl font-bold">GDVR</span>
        </Link>
        <div className="flex gap-6 font-medium text-zinc-400">
          <Link href="/install" className="hover:text-white transition-colors">Install</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>
      </div>
    </nav>
  );
}
