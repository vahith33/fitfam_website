"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF6B35] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 px-0">
        <div className="w-full px-[2px] h-20 flex items-center justify-between font-black uppercase tracking-tighter">
          <Link href="/" className="text-2xl">
            FITFAM <span className="text-[#FF6B35]">FITNESS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
            <Link href="/book-trail" className="hover:text-white transition-colors">Book Trial</Link>
            <Link href="/contact" className="text-[#FF6B35]">Contact</Link>
          </div>

          <button
            className="bg-[#FF6B35] text-white px-8 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 w-full px-[2px]">
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 font-black">
          Get In The <span className="text-[#FF6B35]">Zone.</span>
        </h1>
        <p className="text-[#525252] text-xs font-black uppercase tracking-[0.5em] mb-20 block">Connect With The Elite Training Collective.</p>

        {/* Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-white/5 py-20">
           <div className="space-y-6 group">
              <div className="text-[#FF6B35]">
                 <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                 </svg>
              </div>
              <h4 className="text-xl font-black uppercase tracking-widest group-hover:text-[#FF6B35] transition-colors">Call Now</h4>
              <a href="tel:+919876543210" className="text-[#A1A1AA] text-sm font-bold uppercase tracking-widest leading-none block hover:text-[#FF6B35] transition-colors">+91 98765 43210</a>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Toll Free: 1800-FIT-FAM</span>
           </div>
           <div className="space-y-6 group">
              <div className="text-[#FF6B35]">
                 <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                 </svg>
              </div>
              <h4 className="text-xl font-black uppercase tracking-widest group-hover:text-[#FF6B35] transition-colors">WhatsApp</h4>
              <a href="https://wa.me/919876543210" className="text-[#A1A1AA] text-sm font-bold uppercase tracking-widest leading-none block hover:text-[#FF6B35] transition-colors">Text "FITNESS" to start</a>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Instant Support Available</span>
           </div>
           <div className="space-y-6 group">
              <div className="text-[#FF6B35]">
                 <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                 </svg>
              </div>
              <h4 className="text-xl font-black uppercase tracking-widest group-hover:text-[#FF6B35] transition-colors">Email</h4>
              <a href="mailto:hq@fitfam.fitness" className="text-[#A1A1AA] text-sm font-bold uppercase tracking-widest leading-none block hover:text-[#FF6B35] transition-colors">hq@fitfam.fitness</a>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Response within 12 Hours</span>
           </div>
        </div>
      </section>

      {/* Egattur HQ / Map Section */}
      <section className="relative h-[600px] w-full group overflow-hidden border-b border-white/5">
         <div className="absolute inset-0 z-0">
           <Image
             src="/contact-map.png"
             alt="Egattur HQ Map"
             fill
             className="object-cover object-right opacity-40 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
           />
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
         
         <div className="absolute inset-0 flex items-center w-full px-[2px] z-20">
            <div className="max-w-xl relative">
               <h2 className="text-7xl font-black uppercase tracking-tighter mb-10">Egattur <span className="text-[#FF6B35]">HQ</span></h2>
               <p className="text-[#A1A1AA] text-xl font-bold uppercase tracking-widest leading-relaxed mb-12 opacity-80">
                  Onyx Tower, 4th Floor, <br /> Egattur Main Road, OMR, <br /> Chennai, TN 603103
               </p>
               <Link href="https://maps.google.com" className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 font-black uppercase tracking-[0.4em] hover:bg-[#FF6B35] hover:text-white transition-all flex items-center justify-center gap-4 group w-fit">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  Get Directions
               </Link>
            </div>
         </div>

         {/* Glowing Tag for HQ */}
         <div className="absolute top-[38%] left-[68%] z-30 group">
            <div className="w-5 h-5 bg-[#FF6B35] rounded-full animate-pulse shadow-[0_0_30px_rgba(255,107,53,0.8)]" />
            <div className="absolute top-1/2 left-10 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-white/5 px-6 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
               <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">FitFam Headquarters</span>
            </div>
         </div>
      </section>

      {/* Form / Operational Status Section */}
      <section className="py-32 w-full px-[2px]">
         <div className="grid lg:grid-cols-12 gap-32">
            {/* Transmission Portal */}
            <div className="lg:col-span-12 xl:col-span-8 flex flex-col justify-start">
               <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Transmission <span className="text-[#FF6B35]">Portal</span></h2>
               <div className="w-20 h-1 bg-[#FF6B35] mb-20" />

               <form className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                     <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252]">Full Name</label>
                        <input type="text" placeholder="e.g. Alex Kane" className="bg-[#121212] border border-white/5 p-6 text-white uppercase font-black focus:border-[#FF6B35] outline-none transition-all placeholder:text-[#333]" />
                     </div>
                     <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252]">Service Interest</label>
                        <select className="bg-[#121212] border border-white/5 p-6 text-white uppercase font-black focus:border-[#FF6B35] outline-none transition-all cursor-pointer">
                           <option>Pro Athlete Program</option>
                           <option>Weight Management</option>
                           <option>Strength & Conditioning</option>
                           <option>Boutique Yoga</option>
                        </select>
                     </div>
                  </div>
                  <div className="flex flex-col gap-4">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252]">Detailed Inquiry</label>
                     <textarea placeholder="Tell us about your goals..." className="bg-[#121212] border border-white/5 p-6 text-white h-56 uppercase font-black focus:border-[#FF6B35] outline-none transition-all placeholder:text-[#333] resize-none"></textarea>
                  </div>

                  <button className="bg-[#FF6B35] text-white px-20 py-6 font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-6 group">
                     Deploy Message
                     <svg className="w-5 h-5 group-hover:translate-x-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                  </button>
               </form>
            </div>

            {/* Operational Status Box */}
            <div className="lg:col-span-12 xl:col-span-4 flex">
               <div className="bg-[#121212] p-16 border border-white/5 w-full flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 font-black text-white opacity-[0.02] text-9xl pointer-events-none group-hover:opacity-10 transition-opacity">LIVE</div>
                  
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-16">Operational <span className="text-[#FF6B35]">Status</span></h3>
                    
                    <div className="space-y-12">
                       <div className="flex justify-between items-center border-white/5">
                          <div className="text-lg font-black uppercase">Mon — Fri</div>
                          <div className="text-2xl font-black tracking-widest">05:00 — 23:00</div>
                       </div>
                       <div className="flex justify-between items-center border-white/5">
                          <div className="text-lg font-black uppercase">Saturday</div>
                          <div className="text-2xl font-black tracking-widest">06:00 — 21:00</div>
                       </div>
                       <div className="flex justify-between items-center">
                          <div className="text-lg font-black uppercase text-white/40">Sunday</div>
                          <div className="text-2xl font-black tracking-widest text-white/40">Closed</div>
                       </div>
                    </div>
                  </div>

                  <div className="mt-20 bg-[#1A1A1A] p-8 border border-white/5">
                     <h5 className="text-[10px] font-black uppercase tracking-widest mb-4">Holiday Notice:</h5>
                     <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] leading-relaxed">
                        Elite members have 24/7 access via biometric scans during public holidays.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Panoramic Visual */}
      <section className="relative h-[400px] w-full border-y border-white/5 group overflow-hidden">
         <Image
            src="/gym-panoramic.png"
            alt="Gym Panoramic"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[6s]"
         />
         <div className="absolute inset-x-0 bottom-0 p-12 flex justify-between items-end opacity-20 pointer-events-none">
            <div className="text-9xl font-black uppercase tracking-tighter text-white select-none">EGATTUR SANCTUM</div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-32 w-full px-[2px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="md:col-span-2">
               <Link href="/" className="text-4xl font-black uppercase tracking-tighter mb-12 block">
                 FITFAM <span className="text-[#FF6B35]">FITNESS</span>
               </Link>
               <p className="max-w-md text-[10px] text-[#A1A1AA] leading-relaxed uppercase font-black tracking-[0.2em] mb-12">
                  Pushing the boundaries of human potential through science-led training and a relentless community. The kinetic monolith of elite performance.
               </p>
               <div className="flex items-center gap-4">
                  <div className="text-5xl font-black tracking-tighter opacity-100 uppercase">RETWEET</div>
                  <div className="w-10 h-10 bg-[#FF6B35] flex items-center justify-center p-2">
                     <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 2l2 4h-4l2-4zm8 11.5l3.5 2-3.5 2V12z" />
                     </svg>
                  </div>
               </div>
            </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252] mb-10">Navigation</h4>
             <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.4em]">
                <li><Link href="/" className="hover:text-[#FF6B35]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B35]">About Us</Link></li>
                <li><Link href="/membership" className="hover:text-[#FF6B35]">Membership</Link></li>
                <li><Link href="/contact" className="text-[#FF6B35]">Success Stories</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252] mb-10">Legal</h4>
             <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.4em]">
                <li><Link href="#" className="hover:text-[#FF6B35]">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35]">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35]">Cookie Settings</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35]">Accessibility</Link></li>
             </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-16 border-t border-white/5 text-[9px] font-black uppercase tracking-widest text-[#525252]">
           <p>© 2026 FitFam Fitness | Kinetic Monolith Editorial.</p>
           <p className="hover:text-[#FF6B35] cursor-pointer text-white">NO COMPROMISE.</p>
        </div>
      </footer>
    </main>
  );
}
