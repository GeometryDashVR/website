export default function InstallPage() {
  return (
    <div className="flex-1 max-w-3xl mx-auto p-12 text-zinc-300">
      <h1 className="text-4xl font-bold mb-8 text-white">Setup Guide</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Requirements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Meta Quest 3 Headset</li>
          <li>Developer Mode enabled on your Quest</li>
          <li>SideQuest installed on your PC</li>
          <li>USB-C cable for connection</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Installation Steps</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Download APK:</strong> Click <a href="#" className="text-white underline font-bold">here to download</a> the latest GDVR APK.</li>
          <li><strong>Connect Quest:</strong> Connect your Quest 3 to your PC via USB and ensure SideQuest detects it.</li>
          <li><strong>Sideload:</strong> Use SideQuest to install the downloaded APK file.</li>
          <li><strong>Launch:</strong> Open "Unknown Sources" on your Quest to find and launch GDVR.</li>
        </ol>
      </section>
    </div>
  );
}
