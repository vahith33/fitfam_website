"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF6B35] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-[2px] h-20 flex items-center justify-between font-black uppercase tracking-tighter">
          <Link href="/" className="text-2xl">
            FITFAM <span className="text-[#FF6B35]">FITNESS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/membership" className="text-[#FF6B35]">Membership</Link>
            <Link href="/book-trail" className="hover:text-white transition-colors">Book Trial</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <Link
            href="/membership"
            className="bg-[#FF6B35] text-white px-8 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Join Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center pt-20 overflow-hidden text-left">
        <div className="absolute inset-0 z-0">
          <Image
             src="/membership-hero.png"
             alt="Membership Hero"
             fill
             className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0A0A0A]" />
        </div>

        <div className="w-full px-[2px] relative z-10 w-full">
           <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-4 text-white">
             The <br /> Kinetic
           </h1>
           <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-0 text-[#FF6B35]">
             Monoli <br /> th
           </h1>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="w-full px-[2px]">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ENTRY Card */}
              <div className="bg-[#121212] border border-white/5 p-12 flex flex-col group hover:border-[#FF6B35]/30 transition-all">
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252] mb-12">Level 01</div>
                 <h3 className="text-4xl font-black uppercase mb-4 tracking-tight">Entry</h3>
                 <div className="flex items-baseline mb-16">
                    <span className="text-4xl font-black text-[#FF6B35]">$</span>
                    <span className="text-7xl font-black tracking-tighter ml-2">99</span>
                    <span className="text-[#525252] text-xs font-bold ml-4 uppercase tracking-widest">/Mo</span>
                 </div>
                 
                 <ul className="space-y-6 mb-20 flex-grow">
                    {[
                      "Access to Egattur Sanctuary",
                      "Standard Gym Floor",
                      "Limited Group Sessions"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-xs font-bold uppercase tracking-widest text-[#A1A1AA]">
                         <span className="text-[#FF6B35]">✓</span> {feature}
                      </li>
                    ))}
                 </ul>
                 
                 <button className="w-full border border-white/10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Choose Plan</button>
              </div>

              {/* PRO Card - Recommended */}
              <div className="bg-[#181818] border-2 border-[#FF6B35] p-12 flex flex-col relative transform scale-105 z-10 shadow-[0_0_50px_rgba(255,107,53,0.1)]">
                 <div className="absolute top-10 right-10 bg-[#FF6B35] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">Recommended</div>
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6B35] mb-12">Level 02</div>
                 <h3 className="text-4xl font-black uppercase mb-4 tracking-tight">Pro</h3>
                 <div className="flex items-baseline mb-16">
                    <span className="text-4xl font-black text-[#FF6B35]">$</span>
                    <span className="text-7xl font-black tracking-tighter ml-2">189</span>
                    <span className="text-[#525252] text-xs font-bold ml-4 uppercase tracking-widest">/Mo</span>
                 </div>
                 
                 <ul className="space-y-6 mb-20 flex-grow">
                    {[
                      "24/7 Unlimited Access",
                      "All Premium Classes",
                      "Kinetic Performance Portal",
                      "Priority Booking"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-xs font-black uppercase tracking-widest">
                         <span className="text-[#FF6B35]">✓</span> {feature}
                      </li>
                    ))}
                 </ul>
                 
                 <button className="w-full bg-[#FF6B35] py-5 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all">Choose Plan</button>
              </div>

              {/* ELITE Card */}
              <div className="bg-[#121212] border border-white/5 p-12 flex flex-col group hover:border-[#FF6B35]/30 transition-all">
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252] mb-12">Level 03</div>
                 <h3 className="text-4xl font-black uppercase mb-4 tracking-tight">Elite</h3>
                 <div className="flex items-baseline mb-16">
                    <span className="text-4xl font-black text-[#FF6B35]">$</span>
                    <span className="text-7xl font-black tracking-tighter ml-2">349</span>
                    <span className="text-[#525252] text-xs font-bold ml-4 uppercase tracking-widest">/Mo</span>
                 </div>
                 
                 <ul className="space-y-6 mb-20 flex-grow">
                    {[
                      "All Pro Benefits",
                      "Personalized Nutrition Lab",
                      "Biometric Tracking Dashboard",
                      "Exclusive Lounge Access"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-xs font-bold uppercase tracking-widest text-[#A1A1AA]">
                         <span className="text-[#FF6B35]">✓</span> {feature}
                      </li>
                    ))}
                 </ul>
                 
                 <button className="w-full border border-white/10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Choose Plan</button>
              </div>
           </div>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      
      {/* Strength Lab */}
      <section className="bg-black border-y border-white/5 w-full">
         <div className="grid lg:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto h-full min-h-[500px] overflow-hidden">
               <Image
                 src="/strength-lab.png"
                 alt="Strength Lab"
                 fill
                 className="object-cover opacity-80"
               />
               <div className="absolute inset-x-0 bottom-0 p-20 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="text-6xl font-black uppercase tracking-tighter mb-4 opacity-10">SAFE WORK</div>
               </div>
            </div>
            <div className="p-20 flex flex-col justify-center max-w-2xl mx-auto text-left">
               <span className="text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block font-black">Performance Lab</span>
               <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-none">Strength <br /> Lab.</h2>
               <p className="text-[#A1A1AA] text-lg font-bold uppercase leading-relaxed tracking-tight mb-12 opacity-80">
                  The core engine. Our floor is the highest concentration of biomecanically calibrated strength tools, and it is built precisely for performance.
               </p>
               <Link href="#" className="inline-block text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#FF6B35] pb-2 text-[#FF6B35] hover:text-white transition-colors">Explore Assets &gt;</Link>
            </div>
         </div>
      </section>

      {/* Protocol Synergy */}
      <section className="bg-black border-b border-white/5 w-full">
         <div className="grid lg:grid-cols-2">
            <div className="p-20 order-2 lg:order-1 flex flex-col justify-center max-w-2xl mx-auto text-left">
               <span className="text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block font-black">Group Protocol</span>
               <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-none">Protocol: <br /> Synergy.</h2>
               <p className="text-[#A1A1AA] text-lg font-bold uppercase leading-relaxed tracking-tight mb-12 opacity-80">
                  High velocity group architecture. Where raw collective drive meets peak intensity for unrivaled results and human acceleration.
               </p>
               <Link href="#" className="inline-block text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#FF6B35] pb-2 text-[#FF6B35] hover:text-white transition-colors">View Schedule &gt;</Link>
            </div>
            <div className="relative aspect-square md:aspect-auto h-full min-h-[500px] overflow-hidden order-1 lg:order-2">
               <Image
                 src="/protocol-synergy.png"
                 alt="Protocol Synergy"
                 fill
                 className="object-cover opacity-60"
               />
               <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
            </div>
         </div>
      </section>

      {/* Regen Zone */}
      <section className="bg-black border-b border-white/5 w-full">
         <div className="grid lg:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto h-full min-h-[500px] overflow-hidden">
               <Image
                 src="/regen-zone.png"
                 alt="Regen Zone"
                 fill
                 className="object-cover opacity-60"
               />
                <div className="absolute inset-x-0 bottom-0 p-20 bg-gradient-to-t from-black via-transparent to-transparent text-center">
                  <div className="text-6xl font-black uppercase tracking-tighter mb-4 opacity-10">REGEN ZONE</div>
               </div>
            </div>
            <div className="p-20 flex flex-col justify-center max-w-2xl mx-auto text-left">
               <span className="text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block font-black">Recovery Hub</span>
               <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-none">Regen <br /> Zone.</h2>
               <p className="text-[#A1A1AA] text-lg font-bold uppercase leading-relaxed tracking-tight mb-12 opacity-80">
                  The sanctuary after the storm. Advanced biometric recovery tools, hydro-regeneration, and infrared labs for the perfect performance loop.
               </p>
               <Link href="#" className="inline-block text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#FF6B35] pb-2 text-[#FF6B35] hover:text-white transition-colors">Recovery Labs &gt;</Link>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-black text-center relative overflow-hidden">
         <div className="w-full px-[2px] relative z-10">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 relative z-10">
               Commit To <br /> <span className="text-[#FF6B35]">Greatness.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
               <Link href="/membership" className="bg-[#FF6B35] text-white px-16 py-6 font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all transform hover:scale-105">
                 Start Your Journey
               </Link>
               <Link href="/book-trail" className="border-2 border-white text-white px-16 py-6 font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                 View Schedule
               </Link>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.03] select-none z-0">FF</div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-32 border-t border-white/5">
        <div className="w-full px-[2px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="md:col-span-2 text-left">
              <Link href="/" className="text-4xl font-black uppercase tracking-tighter mb-12 block">
                FITFAM <span className="text-[#FF6B35]">FITNESS</span>
              </Link>
              <p className="max-w-md text-sm text-[#525252] leading-relaxed uppercase font-black tracking-widest">
                The finest boutique fitness experience in Egattur. We blend machine with motivation. Join the evolution of high performance living.
              </p>
            </div>

            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10 underline decoration-[#FF6B35] underline-offset-8 decoration-2">Selection</h4>
              <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#525252]">
                <li><Link href="/membership" className="hover:text-[#FF6B35] transition-colors">Performance Lab</Link></li>
                <li><Link href="/membership" className="hover:text-[#FF6B35] transition-colors">Protocol Synergy</Link></li>
                <li><Link href="/membership" className="hover:text-[#FF6B35] transition-colors">Regen Zone</Link></li>
                <li><Link href="/membership" className="hover:text-[#FF6B35] transition-colors">Elite Lounge</Link></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10 underline decoration-[#FF6B35] underline-offset-8 decoration-2">Company</h4>
              <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#525252]">
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Cookie Settings</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Accessibility</Link></li>
              </ul>
            </div>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252] text-center pt-16 border-t border-white/5">
             © 2026 FitFam Fitness. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
