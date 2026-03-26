"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF6B35] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="FitFam Hero"
            fill
            className="object-cover opacity-60 scale-105 transform hover:scale-100 transition-transform duration-[10s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <div className="w-full px-[2px] relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FF6B35] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] mb-6 animate-fade-in">
              The Best Gym in Egattur
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 leading-tight">
              Transform <br /> Your <span className="text-white/40">Body</span>
            </h1>
            <p className="text-[#FF6B35] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-tight">
              At Egattur's <br /> Trusted Hub
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/membership"
                className="bg-[#FF6B35] text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Join Now
              </Link>
              <Link
                href="/book-trail"
                className="border border-white/20 px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 border-b border-white/5">
        <div className="w-full px-[2px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group">
              <div className="w-12 h-1 mb-10 bg-[#FF6B35] transform origin-left group-hover:scale-x-150 transition-transform" />
              <div className="mb-6">
                <svg className="w-8 h-8 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M6 18H18M18 18V6M18 18L6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF6B35] transition-colors">Modern Equipment</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">Hammer Strength, Rogue fitness, and Life fitness tools etc are here to provide a perfect psychological base for human participation.</p>
            </div>

            <div className="group">
              <div className="w-12 h-1 mb-10 bg-[#FF6B35] transform origin-left group-hover:scale-x-150 transition-transform" />
              <div className="mb-6">
                 <svg className="w-8 h-8 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm10-3a3 3 0 11-6 0 3 3 0 016 0zm-1 14v-2a3 3 0 00-3-3l-2 .5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF6B35] transition-colors">Expert Trainers</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">Certified biomechanics experts and dieticians will be your partners in reaching your final days with the same enthusiasm.</p>
            </div>

            <div className="group">
              <div className="w-12 h-1 mb-10 bg-[#FF6B35] transform origin-left group-hover:scale-x-150 transition-transform" />
              <div className="mb-6">
                <svg className="w-8 h-8 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <circle cx="12" cy="12" r="10" />
                   <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF6B35] transition-colors">Flexible Timings</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">From early 5 AM birds to late night owl groups at midnight, your schedule should not be an excuse to miss a challenge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="w-full px-[2px]">
          <div className="grid md:grid-cols-2 bg-gradient-to-r from-black to-black/30 mb-20">
             <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                  Engineered <br /> <span className="text-[#FF6B35]">Disciplines</span>
                </h2>
             </div>
             <div className="flex items-end justify-end">
                <p className="text-xs text-[#525252] max-w-xs uppercase leading-relaxed text-right">
                  A comprehensive range of workout styles designed to target every fiber of your performance potential.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: "01", title: "Crossfit", img: "/crossfit.png", desc: "High-intensity functional movement tailored for all fitness levels to challenge power." },
              { id: "02", title: "Strength", img: "/strength.png", desc: "Powerlifting equipment and management to unlock your maximum volume and mass." },
              { id: "03", title: "Zumba", img: "/zumba.png", desc: "Combine cardio with dance for the best coordination, endurance, and flexibility." },
              { id: "04", title: "Personal", img: "/personal.png", desc: "One-on-one expert tracking for nutrition and pinpoint precision in your fitness profile." }
            ].map((item) => (
              <div key={item.id} className="relative group overflow-hidden bg-[#121212] aspect-[4/5] flex flex-col justify-end border border-white/5 hover:border-[#FF6B35]/30 transition-all">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 grayscale hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute top-8 left-8 text-xs font-black text-[#FF6B35] z-10">{item.id}</div>
                <div className="relative z-10 p-8">
                  <h4 className="text-3xl font-black uppercase mb-4">{item.title}</h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    {item.desc}
                  </p>
                  <Link href="/membership" className="inline-block mt-4 text-[10px] font-black uppercase tracking-widest text-[#FF6B35] border-b border-[#FF6B35]/30 pb-1">Explore Memberships &gt;</Link>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-32 bg-[#0E0E0E]">
        <div className="w-full px-[2px]">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <div className="flex gap-1 mb-4 text-orange-500">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs font-bold text-white tracking-widest">4.9 Rating</span>
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                Member <br /> Transformations
              </h2>
              <p className="text-[#525252] text-sm uppercase leading-relaxed max-w-xs">
                Performance is an attitude at this community. No shortcuts, just consistent performance.
              </p>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {[
                { name: "John D.", img: "/john-d.png", content: "The atmosphere at FitFam is electric. I've been to many gyms in OMR, but the community and the trainers here are truly on another level of professional." },
                { name: "Sarah M.", img: "/sarah-m.png", content: "Lost 15kg in 6 months thanks to the Personal Training program. They don't just instruct, they educate you on why you're doing what you're doing." }
              ].map((t, idx) => (
                <div key={idx} className="bg-black border border-white/5 group overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                     <Image
                        src={t.img}
                        alt={t.name}
                        fill
                        className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="p-10 border-l-4 border-[#FF6B35]">
                    <svg className="w-8 h-8 mb-6 text-[#FF6B35]/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H14.017V21ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C11.1216 16 12.017 16.8954 12.017 18V21C12.017 22.1046 11.1216 23 10.017 23H5.01697V21ZM14.017 13.9999V8.99994C14.017 7.89537 14.9124 6.99994 16.017 6.99994H19.017V1.99994L14.017 1.99994C11.2556 1.99994 9.01699 4.23851 9.01699 6.99994V13.9999H14.017ZM5.01697 13.9999V8.99994C5.01697 7.89537 5.9124 6.99994 7.01697 6.99994H10.017V1.99994L5.01697 1.99994C2.25555 1.99994 0.0169678 4.23851 0.0169678 6.99994V13.9999H5.01697Z" />
                    </svg>
                    <p className="text-sm text-[#A1A1AA] italic leading-relaxed mb-6">"{t.content}"</p>
                    <div className="font-black uppercase tracking-widest text-[#FF6B35] text-xs">{t.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="relative h-[600px] flex items-center bg-[#010101] overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
           <Image
            src="/map.png"
            alt="Map Illustration"
            fill
            className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="w-full px-[2px] relative z-10">
          <div className="max-w-xl">
             <div className="w-12 h-1 bg-[#FF6B35] mb-8" />
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
               The OMR <br /> <span className="text-[#FF6B35]">Advantage</span>
             </h2>

             <p className="text-sm text-[#A1A1AA] leading-relaxed mb-10 max-w-sm">
               Located in the heart of Egattur, FitFam is perfectly situated for the OMR professional lifestyle. Easy access, ample parking, and an environment that fuels focus.
             </p>

             <ul className="space-y-6">
               {[
                 { icon: "📍", text: "2 Mins from Navalur Junction" },
                 { icon: "🏎️", text: "Dedicated Covered Parking" },
                 { icon: "💼", text: "Ideal for IT Park Professionals" }
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-4 group cursor-default">
                    <span className="text-[#FF6B35] transform group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">{item.text}</span>
                 </li>
               ))}
             </ul>

             <div className="mt-12 bg-[#121212] p-8 border border-white/5 inline-block">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6B35] mb-2">Visit Anytime</div>
                <div className="text-xs font-bold uppercase tracking-widest">Floor 3, Olympia Tech Park, Egattur, Chennai - 600103</div>
             </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 bg-[#FF6B35] relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none">
           <div className="text-[20vw] font-black uppercase tracking-tighter transform rotate-12 group-hover:rotate-0 transition-transform duration-1000">PERFORMANCE</div>
        </div>

        <div className="w-full px-[2px] relative z-10">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight text-white mb-0">
                Ready to Join <br /> The Elite?
              </h2>

              <div className="flex flex-wrap gap-4">
                 <Link href="/membership" className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                   Get Started Now
                 </Link>
                 <Link href="/programs" className="border-2 border-black text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                   View Pricing
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-24 border-t border-white/5">
        <div className="w-full px-[2px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <Link href="/" className="text-3xl font-black uppercase tracking-tighter mb-8 block">
                FITFAM <span className="text-[#FF6B35]">FITNESS</span>
              </Link>
              <p className="max-w-md text-sm text-[#525252] leading-relaxed uppercase">
                The finest boutique fitness experience in Egattur. We blend machine with motivation. Join the evolution of high performance living.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-8">Navigation</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-[#525252]">
                <li><Link href="/membership" className="hover:text-[#FF6B35] transition-colors">Membership</Link></li>
                <li><Link href="/about" className="hover:text-[#FF6B35] transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FF6B35] transition-colors">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-8">Connect</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-[#525252]">
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Facebook</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">Youtube</Link></li>
                <li><Link href="#" className="hover:text-[#FF6B35] transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#525252]">
              © 2026 FitFam Fitness. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
              <span>Terms</span>
              <span>Policy</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
