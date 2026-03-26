"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF6B35] selection:text-white">
      {/* Navbar - Fixed top, dark blur */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-[2px] h-20 flex items-center justify-between font-black uppercase tracking-tighter">
          <Link href="/" className="text-2xl">
            FITFAM <span className="text-[#FF6B35]">FITNESS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-[#FF6B35]">About</Link>
            <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
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

      {/* Hero Section: The FitFam Mission */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.png"
            alt="About Background"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0A0A]" />
        </div>

        <div className="w-full px-[2px] relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.5em] mb-8 font-black">
              Get Trace
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 leading-tight">
              The FitFam <br /> <span className="text-[#FF6B35]">Mission</span>
            </h1>
            <p className="text-[#FF6B35] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-tight">
              A Kinetic Monolith <br /> For Performance
            </p>
            <p className="text-[#A1A1AA] text-sm md:text-base font-bold uppercase leading-relaxed max-w-xl tracking-tight font-black opacity-80">
              We aren't just a gym. We are a space where grit meets engineering. Our goal is to forge elite human performance through unapologetic intensity and data-driven expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Elite Specialists / Coaches Section */}
      <section className="py-40 bg-[#0A0A0A] relative overflow-hidden">
        <div className="w-full px-[2px] relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 relative">
            <div className="z-10 bg-[#0A0A0A] pr-12">
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                 Elite Specialists
               </h2>
               <p className="text-[#525252] text-xs font-black uppercase tracking-[0.3em] max-w-sm">
                 A phalanx of biomechanics experts dedicated to breaking your limits.
               </p>
            </div>
            <div className="hidden lg:block absolute -right-20 bottom-0 text-[20rem] font-black text-white/[0.03] select-none leading-none -translate-y-4">COACHES</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: "01", name: "Karthik Raja", role: "Strength Specialist", img: "/coach-karthik.png", bio: "Certified CSCS with 15 years in Olympic powerlifting." },
              { id: "02", name: "Priya Sharma", role: "Nutritionist & PT", img: "/coach-priya.png", bio: "Leading biomechanics expert and performance dietician." },
              { id: "03", name: "Arun Kumar", role: "Crossfit Lead", img: "/coach-arun.png", bio: "National level functional fitness athlete and head coach." }
            ].map((coach, idx) => (
              <div key={idx} className="group bg-[#121212] border border-white/5 p-4 pb-16 transition-all hover:border-[#FF6B35]/30">
                <div className="relative aspect-[4/5] overflow-hidden mb-12">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6 text-[#FF6B35] font-black text-xs opacity-40">{coach.id}</div>
                </div>
                <div className="px-6">
                   <div className="text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                     {coach.role}
                   </div>
                   <h4 className="text-4xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF6B35] transition-colors">
                     {coach.name}
                   </h4>
                   <p className="text-[#525252] text-xs font-bold uppercase leading-relaxed mb-10 tracking-widest line-clamp-2">
                     {coach.bio}
                   </p>
                   <div className="flex gap-8">
                     <Link href="#" className="text-[10px] font-black uppercase border-b border-white/10 pb-1 hover:border-[#FF6B35] hover:text-white transition-all">Folow Us</Link>
                     <Link href="#" className="text-[10px] font-black uppercase border-b border-white/10 pb-1 hover:border-[#FF6B35] hover:text-white transition-all">Bio &gt;</Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sanctum Section */}
      <section className="py-40 bg-[#060606]">
        <div className="w-full px-[2px]">
           <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
              <div>
                 <span className="text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block font-black">Performance Base</span>
                 <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                   The Egattur <br /> <span className="text-[#FF6B35]">Sanctum</span>
                 </h2>
              </div>
              <p className="text-[#525252] text-xs font-black uppercase tracking-[0.4em] leading-relaxed text-right md:max-w-xs ml-auto">
                 25,000 Sq. Ft. of raw industrial power meets extreme precision and elite member management.
              </p>
           </div>

           <div className="relative aspect-[21/9] overflow-hidden group">
              <Image
                 src="/gym-facility.png"
                 alt="Sanctum Facility"
                 fill
                 className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[4s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
              <div className="absolute bottom-12 right-12 bg-black/60 backdrop-blur-xl p-12 max-w-lg border-l-4 border-[#FF6B35] transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">State Of The Art</h4>
                 <p className="text-[#A1A1AA] text-xs font-bold uppercase leading-relaxed tracking-widest opacity-80">
                   Equipped with Rogue Fitness, Hammer Strength, and customized biometric sensors. This isn't just a floor; it's a lab for human potential and performance metrics.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Headquarters & Operations Section */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="w-full px-[2px]">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7">
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-20 leading-none">
                 Headquart <br /> <span className="underline decoration-[#FF6B35] decoration-8 underline-offset-[20px]">ers</span>
               </h2>

               <div className="grid md:grid-cols-2 gap-16">
                  <div>
                     <h5 className="text-[#525252] text-[10px] font-black uppercase tracking-[0.6em] mb-6 font-black">Main Sanctuary</h5>
                     <p className="text-3xl font-black uppercase tracking-tight leading-[0.9]">
                        Plot 12, OMR Road, Egattur, <br /> Chennai, Tamil Nadu 600130
                     </p>
                  </div>
                  <div className="space-y-10">
                     <div>
                    <h5 className="text-[#525252] text-[10px] font-black uppercase tracking-[0.6em] mb-4 font-black">General Inquiry</h5>
                    <a href="tel:+919345672910" className="text-xl font-black uppercase hover:text-[#FF6B35] transition-colors">+91 93 4567 2910</a>
                 </div>
                 <div>
                    <h5 className="text-[#525252] text-[10px] font-black uppercase tracking-[0.6em] mb-4 font-black">Email</h5>
                    <a href="mailto:apply@fitfamfitness.com" className="text-xl font-black uppercase hover:text-[#FF6B35] transition-colors">apply@fitfamfitness.com</a>
                 </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-5">
               <div className="bg-[#0A0A0A] border border-white/5 p-16 relative group">
                  <div className="flex justify-between items-center mb-16">
                     <h4 className="text-xs font-black uppercase tracking-[0.6em] text-white">Operating Hours</h4>
                     <div className="w-12 h-12 bg-[#121212] flex items-center justify-center rounded-full">
                        <svg className="w-6 h-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                     </div>
                  </div>

                  <div className="space-y-8">
                     {[
                       { day: "Weekday", hours: "05:00 — 23:00" },
                       { day: "Saturday", hours: "06:00 — 21:00" },
                       { day: "Sunday", hours: "08:00 — 18:00" }
                     ].map((t, idx) => (
                       <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                          <span className="text-[#525252] text-[11px] font-black uppercase tracking-[0.4em] font-black">{t.day}</span>
                          <span className="text-xl font-black tracking-widest">{t.hours}</span>
                       </div>
                     ))}
                  </div>

                  <Link
                    href="https://google.com/maps"
                    className="mt-16 w-full bg-[#1A1A1A] text-white py-6 text-xs font-black uppercase tracking-[0.4em] flex items-center justify-center gap-6 hover:bg-[#FF6B35] transition-all duration-300 transform group-active:scale-95"
                  >
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                     </svg>
                     Get Directions
                  </Link>

                  {/* Desktop Mini Map Decoration */}
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                     <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="2" />
                     </svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-32 border-t border-white/5">
        <div className="w-full px-[2px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="md:col-span-2">
              <Link href="/" className="text-4xl font-black uppercase tracking-tighter mb-12 block">
                FITFAM <span className="text-[#FF6B35]">FITNESS</span>
              </Link>
              <p className="max-w-md text-sm text-[#525252] leading-relaxed uppercase font-black tracking-widest">
                The finest boutique fitness experience in Egattur. We blend machine with motivation. Join the evolution of high performance living.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10 underline decoration-[#FF6B35] underline-offset-8 decoration-2">Navigation</h4>
              <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#525252]">
                <li><Link href="/membership" className="hover:text-[#FF6B35] transition-colors">Membership</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B35] transition-colors">About Us</Link></li>
                <li><Link href="/book-trail" className="hover:text-[#FF6B35] transition-colors">Book Free Trial</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-10 underline decoration-[#FF6B35] underline-offset-8 decoration-2">Legal</h4>
              <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#525252]">
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Liability Waiver</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Cancellation</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/5 gap-12">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252]">
              © 2026 FitFam Fitness. All Rights Reserved.
            </p>
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-[#A1A1AA]">
               <Link href="#" className="hover:text-[#FF6B35]">Instagram</Link>
               <Link href="#" className="hover:text-[#FF6B35]">Facebook</Link>
               <Link href="#" className="hover:text-[#FF6B35]">Twitter</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
