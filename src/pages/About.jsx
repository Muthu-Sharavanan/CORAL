import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Heart, ShieldCheck, Users, Star, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '8,000+', label: 'Smiles Crafted' },
  { value: '99%', label: 'Patient Satisfaction' },
  { value: '6', label: 'Specialist Doctors' },
];

const team = [
  { name: 'Dr. Karthik Rajan', role: 'Chief Orthodontist', exp: '14 yrs', icon: '🦷' },
  { name: 'Dr. Priya Nair', role: 'Cosmetic Specialist', exp: '10 yrs', icon: '✨' },
  { name: 'Dr. Suresh Babu', role: 'Implantologist', exp: '12 yrs', icon: '🔬' },
  { name: 'Dr. Meera Iyer', role: 'Endodontist', exp: '9 yrs', icon: '⚕️' },
];

const values = [
  { icon: <ShieldCheck size={36} color="#0D9488" />, title: 'Sterile Precision', desc: 'Hospital-grade sterilization protocols for every procedure.' },
  { icon: <Heart size={36} color="#0D9488" />, title: 'Patient First', desc: 'Every treatment plan is designed around your comfort and goals.' },
  { icon: <Award size={36} color="#0D9488" />, title: 'Award Winning', desc: 'Recognized as Thoothukudi\'s top dental clinic for 5 consecutive years.' },
  { icon: <Users size={36} color="#0D9488" />, title: 'Expert Team', desc: 'Board-certified specialists with international training credentials.' },
];

const About = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    // Parallax hero bg
    gsap.to(bgRef.current, {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Animate stat numbers
    gsap.fromTo('.stat-item', { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.stats-row', start: 'top 80%' },
    });

    // Animate team cards
    gsap.fromTo('.team-card', { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.team-grid', start: 'top 80%' },
    });

    // Animate value cards
    gsap.fromTo('.value-card', { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.values-grid', start: 'top 80%' },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="about-page">
      {/* Parallax Hero */}
      <div ref={heroRef} className="about-hero">
        <div ref={bgRef} className="about-hero-bg" />
        <div className="about-hero-overlay">
          <span className="eyebrow" style={{ color: '#0D9488' }}>Our Story</span>
          <h1 className="heading-xl" style={{ color: '#fff', fontSize: 'clamp(3rem, 9vw, 6rem)', margin: '1rem 0' }}>
            BORN FROM<br />PASSION.<br />BUILT FOR SMILES.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', maxWidth: '550px', lineHeight: 1.6 }}>
            Since 2012, Coral Dentistry has redefined what a dental visit means — blending clinical excellence with a luxury patient experience.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="section-white" style={{ padding: '100px 5%' }}>
        <div className="stats-row">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <h2 className="heading-xl" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#0D9488' }}>{s.value}</h2>
              <p style={{ color: '#666', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Parallax Band */}
      <div className="mission-band">
        <div className="mission-band-inner">
          <span className="eyebrow">Our Mission</span>
          <h2 className="heading-xl" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '1rem 0 2rem' }}>
            TO MAKE EVERY<br />SMILE A MASTERPIECE
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
            We believe that a great smile can transform a life. That's why we've built a clinic where cutting-edge science and genuine care meet — every single day.
          </p>
        </div>
      </div>

      {/* Values */}
      <section className="section-white" style={{ padding: '100px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="eyebrow">What We Stand For</span>
            <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#0b0b0b' }}>OUR CORE VALUES</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                {v.icon}
                <h3 style={{ fontSize: '1.5rem', margin: '1rem 0 0.75rem', letterSpacing: '-1px' }}>{v.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-dark" style={{ padding: '100px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="eyebrow">The Experts</span>
            <h2 className="heading-xl" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>MEET OUR DOCTORS</h2>
          </div>
          <div className="team-grid">
            {team.map((d, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{d.icon}</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: '1.5rem 0 0.5rem', letterSpacing: '-0.5px' }}>{d.name}</h3>
                <p style={{ color: '#0D9488', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{d.role}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  <Clock size={14} color="#888" />
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>{d.exp} experience</span>
                </div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '0.75rem' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} color="#D4AF37" fill="#D4AF37" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white" style={{ padding: '100px 5%', textAlign: 'center' }}>
        <span className="eyebrow">Ready?</span>
        <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#0b0b0b', margin: '1rem 0 2rem' }}>
          START YOUR<br />SMILE JOURNEY
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/book" className="pill-button" style={{ textDecoration: 'none', background: '#0D9488' }}>Book Appointment</Link>
          <Link to="/technology" className="pill-button" style={{ textDecoration: 'none', background: '#0b0b0b' }}>Our Technology</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
