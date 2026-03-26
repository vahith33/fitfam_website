"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BookTrailPage() {
  const [selectedSlot, setSelectedSlot] = useState("09:00 - 12:00");

  const slots = ["06:00 - 09:00", "09:00 - 12:00", "12:00 - 15:00", "15:00 - 21:00"];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF6B35] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 w-full px-[2px]">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
           <div className="max-w-4xl">
              <span className="text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Phase 01: Activation</span>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-0 font-black">
                Initiate Your <br /> <span className="text-white">Protocol</span>
              </h1>
           </div>
           <p className="text-[#525252] text-sm font-bold uppercase leading-relaxed max-w-sm tracking-widest text-right">
              The kinetic monolith approach to human performance. No shortcuts. No comfort zones. Just engineered progression.
           </p>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-[#FF6B35] py-6 w-full px-[2px] overflow-hidden">
         <div className="flex whitespace-nowrap gap-24 items-center animate-scroll">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex gap-24 items-center shrink-0">
                 <span className="text-black text-2xl font-black uppercase tracking-tighter">Free Trial Available ⚡</span>
                 <span className="text-black text-2xl font-black uppercase tracking-tighter">Limited Slots Available ⚡</span>
              </div>
            ))}
         </div>
      </section>

      {/* Form Section */}
      <section className="py-32 w-full px-[2px]">
        <div className="grid lg:grid-cols-12 gap-24">
           {/* Left Info */}
           <div className="lg:col-span-5 space-y-20">
              <div className="space-y-12">
                 <div className="group">
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF6B35] transition-colors">Elite Environment</h3>
                    <p className="text-[#525252] text-xs font-bold uppercase leading-relaxed tracking-widest max-w-md">
                       Access to world-class equipment and industrial-grade training facilities designed for maximum intensity.
                    </p>
                 </div>
                 <div className="group">
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF6B35] transition-colors">Data-Driven Labs</h3>
                    <p className="text-[#525252] text-xs font-bold uppercase leading-relaxed tracking-widest max-w-md">
                       Every session is tracked. Every metric matters. We use physiological data to optimize your output.
                    </p>
                 </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/5 group">
                 <Image
                   src="/monolith-lab.png"
                   alt="The Monolith Lab"
                   fill
                   className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-[5s]"
                 />
                 <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-6 py-2 border-l-2 border-[#FF6B35]">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">The Monolith | Lab</span>
                 </div>
              </div>
           </div>

           {/* Right Form */}
           <div className="lg:col-span-7 bg-[#121212] p-16 border border-white/5 relative">
              <div className="absolute top-10 right-10 text-white opacity-[0.02] text-7xl font-black select-none pointer-events-none">BOOKING</div>
              
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Secure Your Slot</h2>
              <p className="text-[#525252] text-[10px] font-black uppercase tracking-[0.5em] mb-12">Submit Protocol Credentials Below</p>

              <form className="space-y-10">
                 <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-3">
                       <label className="text-[10px] font-black uppercase tracking-widest text-[#525252]">Operator Full Name</label>
                       <input type="text" placeholder="e.g. Alex Striker" className="bg-black/50 border border-white/10 p-5 text-white uppercase font-black focus:border-[#FF6B35] transition-all outline-none" />
                    </div>
                    <div className="flex flex-col gap-3">
                       <label className="text-[10px] font-black uppercase tracking-widest text-[#525252]">Contact Identity</label>
                       <input type="text" placeholder="+91 (000) 000-0000" className="bg-black/50 border border-white/10 p-5 text-white uppercase font-black focus:border-[#FF6B35] transition-all outline-none" />
                    </div>
                 </div>

                 <div className="flex flex-col gap-6">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#525252]">Deployment Timeframe</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {slots.map(slot => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-4 text-[11px] font-black border transition-all ${selectedSlot === slot ? 'bg-[#FF6B35] border-[#FF6B35] text-white' : 'border-white/10 text-[#525252] hover:border-white/30'}`}
                          >
                            {slot}
                          </button>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#525252]">Current Objective (Optional)</label>
                    <textarea placeholder="Describe your physical targets..." className="bg-black/50 border border-white/10 p-5 text-white h-40 uppercase font-black focus:border-[#FF6B35] transition-all outline-none resize-none"></textarea>
                 </div>

                 <button className="w-full bg-[#FF6B35] text-white py-6 font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group">
                    Initiate Booking
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                 </button>

                 <p className="text-[8px] text-[#333] font-bold uppercase tracking-widest text-center mt-8">
                    By initiating, you agree to the protocol terms of service and kinetic data privacy policy.
                 </p>
              </form>
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 border-y border-white/5 w-full px-[2px]">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { val: "2.4k+", label: "Active Operators" },
              { val: "150+", label: "Daily Sessions" },
              { val: "98.4%", label: "Efficiency Rate" },
              { val: "24/7", label: "Facility Access" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                 <div className="text-5xl font-black uppercase tracking-tighter mb-3 text-white">{stat.val}</div>
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252]">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-32 w-full px-[2px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          <div className="md:col-span-2">
            <Link href="/" className="text-4xl font-black uppercase tracking-tighter mb-12 block">
              FITFAM <span className="text-[#FF6B35]">FITNESS</span>
            </Link>
            <p className="max-w-md text-sm text-[#525252] leading-relaxed uppercase font-black tracking-widest">
              The final destination for high-velocity physical transformation. Join the monolith today and redefine your limits.
            </p>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#525252] mb-10">Navigation</h4>
             <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                <li><Link href="/" className="hover:text-[#FF6B35]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B35]">About</Link></li>
                <li><Link href="/membership" className="hover:text-[#FF6B35]">Membership</Link></li>
                <li><Link href="/book-trail" className="text-[#FF6B35]">Book Trial</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#525252] mb-10">Legal</h4>
             <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
                <li><Link href="#" className="hover:text-[#FF6B35]">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35]">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35]">Cookie Settings</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35]">Accessibility</Link></li>
             </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-16 border-t border-white/5 opacity-40">
           <p className="text-[8px] font-black uppercase tracking-widest text-[#525252]">© 2026 FitFam Fitness | Kinetic Monolith Editorial.</p>
           <div className="flex gap-8">
              <svg className="w-4 h-4 text-[#525252]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              <svg className="w-4 h-4 text-[#525252]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6z"/></svg>
           </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
