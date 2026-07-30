"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  { 
    question: "Why is GDVR only for Quest 3?", 
    answer: "The VR integration requires specific GPU features and performance optimizations that are currently only stable and performant enough on the Quest 3's chipset." 
  },
  { 
    question: "Will it work with other mods?", 
    answer: "Yes! Since GDVR runs through the Geode SDK, most standard Geode mods are compatible, though some may need specific updates to support the VR camera view." 
  },
  { 
    question: "Is this official Geometry Dash software?", 
    answer: "No, GDVR is a community project utilizing the Geode SDK and is not affiliated with RobTop Games." 
  },
  { 
    question: "How do I update the game?", 
    answer: "Simply download the newest APK from our website and reinstall it via SideQuest. Your save data should be preserved." 
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex-1 max-w-3xl mx-auto p-12 text-white">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-zinc-800 rounded-lg overflow-hidden">
            <button 
              className="w-full text-left font-semibold p-4 bg-zinc-900 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <p className="p-4 bg-black text-zinc-400 border-t border-zinc-800">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
