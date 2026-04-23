import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Smile, 
  ChevronLeft, 
  ShieldCheck, 
  Clock, 
  Star,
  CheckCircle2
} from 'lucide-react';

const servicesData = {
  orthodontics: {
    title: "Digital Orthodontics",
    category: "Alignment",
    tagline: "Precision Alignment with Invisible Comfort.",
    desc: "Our next-gen clear aligners are engineered using 3D oral scans to provide a perfect bite without the discomfort of traditional braces.",
    benefits: [
      "Virtually invisible treatment",
      "Removable for easy cleaning",
      "Custom 3D-printed aligners",
      "Faster results than traditional methods"
    ],
    duration: "6–18 Months",
    clinicalNote: "Sterile, custom-molded aligners ensure zero sensitivity and maximum comfort."
  },
  whitening: {
    title: "Laser Teeth Whitening",
    category: "Cosmetic",
    tagline: "Instant Brilliance. Zero Sensitivity.",
    desc: "Experience professional-grade whitening that delivers up to 8 shades of brightness in a single session using advanced cold-light technology.",
    benefits: [
      "Results in under 60 minutes",
      "Enamel-safe cold light tech",
      "Long-lasting brightness",
      "Zero post-treatment sensitivity"
    ],
    duration: "45–60 Minutes",
    clinicalNote: "Professional-grade bleaching agents monitored by clinical experts for safe, even results."
  },
  implants: {
    title: "Precision Implants",
    category: "Restorative",
    tagline: "The Gold Standard for Tooth Replacement.",
    desc: "Our titanium-core implants provide a permanent, natural-looking solution that restores 100% of your biting force and facial structure.",
    benefits: [
      "Lifetime durability guarantee",
      "Natural look and feel",
      "Prevents bone loss",
      "High success rate procedures"
    ],
    duration: "2–4 Sessions",
    clinicalNote: "Biocompatible materials ensure seamless integration with your natural jawbone."
  },
  rootcanal: {
    title: "Advanced Root Canal",
    category: "Endodontics",
    tagline: "Pain-Free Precision. Lasting Relief.",
    desc: "Modern rotary endodontics allows us to save your natural tooth with zero pain and extreme precision, typically in a single visit.",
    benefits: [
      "Pain-free modern techniques",
      "Preserves natural tooth structure",
      "Single-visit efficiency",
      "Digital imaging for precision"
    ],
    duration: "1–2 Sessions",
    clinicalNote: "Digital apex locators and rotary files ensure complete cleaning and sterile sealing."
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id] || servicesData.orthodontics;

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [id]);

  return (
    <div className="service-detail-page">
      <div className="detail-hero">
        <div className="detail-container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Back to Overview
          </Link>
          <span className="eyebrow" style={{ marginTop: '2rem' }}>{service.category}</span>
          <h1 className="heading-xl" style={{ margin: '1rem 0', fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
            {service.title}
          </h1>
          <p className="detail-tagline">{service.tagline}</p>
        </div>
      </div>

      <section className="section-white">
        <div className="detail-grid">
          <div className="detail-content">
            <h3 className="heading-xl" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Procedure</h3>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.7, marginBottom: '2rem' }}>
              {service.desc}
            </p>
            
            <div className="clinical-card">
              <ShieldCheck color="#0D9488" size={32} />
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Clinical Note</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{service.clinicalNote}</p>
              </div>
            </div>
          </div>

          <div className="detail-specs">
            <div className="spec-item">
              <Clock size={24} color="#0D9488" />
              <div>
                <strong>Duration</strong>
                <span>{service.duration}</span>
              </div>
            </div>
            <div className="spec-item">
              <Star size={24} color="#0D9488" />
              <div>
                <strong>Rating</strong>
                <span>5.0 Clinical Score</span>
              </div>
            </div>

            <div className="benefits-list">
              <h4 className="heading-xl" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Key Benefits</h4>
              {service.benefits.map((b, i) => (
                <div key={i} className="benefit-item">
                  <CheckCircle2 size={18} color="#0D9488" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <Link to="/book" className="pill-button" style={{ width: '100%', textAlign: 'center', marginTop: '2rem', textDecoration: 'none' }}>
              Book {service.title}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
