import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Scan, Cpu, RadioTower, Eye, Microscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    icon: <Scan size={48} color="#0D9488" />,
    name: '3D Oral Scanning',
    category: 'Diagnostics',
    desc: 'Our iTero intraoral scanners capture a precise 3D map of your entire mouth in under 5 minutes — no messy impressions, no discomfort.',
    features: ['Sub-millimeter precision', 'Real-time 3D preview', 'Digital aligner planning', 'Stored in cloud permanently'],
    tag: 'CORE TECH',
  },
  {
    icon: <Zap size={48} color="#0D9488" />,
    name: 'Laser Dentistry',
    category: 'Treatment',
    desc: 'Our Waterlase iPlus system uses laser energy and water to perform procedures with near-zero pain, bleeding, and healing time.',
    features: ['Gum reshaping', 'Cavity removal', 'Teeth whitening', 'Minimal anaesthesia needed'],
    tag: 'FLAGSHIP',
  },
  {
    icon: <Cpu size={48} color="#0D9488" />,
    name: 'CAD/CAM Crowns',
    category: 'Restoration',
    desc: 'In-clinic CEREC technology mills porcelain crowns in under 2 hours — scan to fit, same-day delivery, no temporary crowns.',
    features: ['Same-day crowns', 'Perfect colour match', 'Milled from solid ceramic', 'No lab wait time'],
    tag: 'SAME-DAY',
  },
  {
    icon: <RadioTower size={48} color="#0D9488" />,
    name: 'Cone Beam CT',
    category: 'Imaging',
    desc: 'Our CBCT system produces full 3D X-ray maps of teeth, roots, and jaw — critical for implant planning with 0.1mm precision.',
    features: ['360° jaw imaging', 'Nerve mapping', 'Implant simulation', 'Lower radiation than medical CT'],
    tag: '3D IMAGING',
  },
  {
    icon: <Eye size={48} color="#0D9488" />,
    name: 'Digital Smile Design',
    category: 'Cosmetic',
    desc: 'See your final smile before any work begins. We use DSD software to simulate veneers, whitening, and alignment on your own face.',
    features: ['Photo-realistic preview', 'Patient co-design', 'Veneer simulation', 'Video walkthrough'],
    tag: 'PREVIEW TECH',
  },
  {
    icon: <Microscope size={48} color="#0D9488" />,
    name: 'Surgical Microscope',
    category: 'Endodontics',
    desc: '25x magnification microscopes allow our endodontists to locate and treat root canals invisible to the naked eye.',
    features: ['25x magnification', 'Enhanced root canal success', 'Illuminated field', 'Ultra-precise surgery'],
    tag: 'PRECISION',
  },
];

const Technology = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    // Parallax hero
    gsap.to(bgRef.current, {
      yPercent: 35,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Stagger tech cards
    gsap.fromTo('.tech-card', { opacity: 0, y: 80 }, {
      opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power4.out',
      scrollTrigger: { trigger: '.tech-grid', start: 'top 80%' },
    });

    // Horizontal marquee feel for tag badges
    gsap.fromTo('.tech-tag', { scale: 0.8, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '.tech-grid', start: 'top 75%' },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="tech-page">
      {/* Parallax Hero */}
      <div ref={heroRef} className="tech-hero">
        <div ref={bgRef} className="tech-hero-bg" />
        <div className="tech-hero-overlay">
          <span className="eyebrow" style={{ color: '#0D9488' }}>Innovation Suite</span>
          <h1 className="heading-xl" style={{ color: '#fff', fontSize: 'clamp(3rem, 9vw, 6rem)', margin: '1rem 0' }}>
            WHERE SCIENCE<br />MEETS THE<br />PERFECT SMILE.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', maxWidth: '550px', lineHeight: 1.6 }}>
            Coral Dentistry is equipped with the same clinical technology used in leading dental institutes across Europe and the USA.
          </p>
        </div>
      </div>

      {/* Intro Band */}
      <div className="tech-intro-band">
        <p className="tech-intro-text">
          6 Advanced Systems &nbsp;·&nbsp; ISO Certified &nbsp;·&nbsp; Updated 2025 &nbsp;·&nbsp; Zero Compromise
        </p>
      </div>

      {/* Technology Grid */}
      <section className="section-white" style={{ padding: '100px 5%' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="eyebrow">The Arsenal</span>
            <h2 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#0b0b0b' }}>
              OUR TECHNOLOGY
            </h2>
          </div>
          <div className="tech-grid">
            {technologies.map((t, i) => (
              <div className="tech-card" key={i}>
                <div className="tech-card-top">
                  <div className="tech-icon-wrap">{t.icon}</div>
                  <span className="tech-tag">{t.tag}</span>
                </div>
                <span style={{ color: '#0D9488', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>{t.category}</span>
                <h3 style={{ fontSize: '1.8rem', letterSpacing: '-1px', margin: '0.75rem 0 1rem', fontFamily: 'Antonio, sans-serif', textTransform: 'uppercase' }}>{t.name}</h3>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{t.desc}</p>
                <div className="tech-features">
                  {t.features.map((f, j) => (
                    <div className="tech-feature-item" key={j}>
                      <span className="tech-dot" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark" style={{ padding: '100px 5%', textAlign: 'center' }}>
        <span className="eyebrow">Experience It Yourself</span>
        <h2 className="heading-xl" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 7vw, 5rem)', margin: '1rem 0 2rem' }}>
          BOOK A TECH<br />CONSULTATION
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
          Get a free 3D oral scan and digital smile preview on your first visit.
        </p>
        <Link to="/book" className="pill-button" style={{ textDecoration: 'none', background: '#0D9488', fontSize: '1rem', padding: '18px 50px' }}>
          Book Free Scan →
        </Link>
      </section>
    </div>
  );
};

export default Technology;
