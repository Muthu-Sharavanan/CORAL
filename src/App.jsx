import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  Smile, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Phone, 
  Star,
  Clock,
  ShieldCheck,
  Award,
  ArrowUp
} from 'lucide-react';
import heroTooth from './assets/hero_tooth.png';
import clinicBanner from './assets/clinic_banner.png';
import BookingForm from './components/BookingForm';
import ServiceDetail from './pages/ServiceDetail';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed-nav">
    <Link to="/" className="nav-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Smile color="#0D9488" size={32} />
      <span>CORAL</span>
    </Link>
    <div className="nav-links">
      <Link to="/#services">SERVICES</Link>
      <Link to="/#about">ABOUT</Link>
      <Link to="/#contact">CONTACT</Link>
      <Link to="/book" className="pill-button" style={{ textDecoration: 'none' }}>BOOK NOW</Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="nav-logo">
          <Smile color="#0D9488" size={32} />
          <span>CORAL</span>
        </div>
        <p style={{ marginTop: '1.5rem', color: '#888' }}>
          Setting the benchmark for premium dental care in South India.
        </p>
      </div>
      <div className="footer-col">
        <h5>SERVICES</h5>
        <p>Orthodontics</p>
        <p>Whitening</p>
        <p>Implants</p>
        <p>Pediatric</p>
      </div>
      <div className="footer-col">
        <h5>CLINIC</h5>
        <p>Our Story</p>
        <p>Doctors</p>
        <p>Gallery</p>
        <p>Reviews</p>
      </div>
      <div className="footer-col">
        <h5>SUPPORT</h5>
        <p>Appointments</p>
        <p>Insurance</p>
        <p>FAQ</p>
        <p>Emergency</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 Coral Dentistry Inc. Zero-Seam Excellence.</p>
    </div>
  </footer>
);

// --- PAGES ---

const Home = () => {
  const canvasRef = useRef(null);
  const ambientCanvasRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if hash exists with Lenis compatibility
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    const canvas = canvasRef.current;
    const ambientCanvas = ambientCanvasRef.current;
    
    if (!canvas || !ambientCanvas) return;

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ambientCanvas.width = window.innerWidth * window.devicePixelRatio;
    ambientCanvas.height = window.innerHeight * window.devicePixelRatio;

    const ctx = canvas.getContext('2d');
    const ambientCtx = ambientCanvas.getContext('2d');
    const img = new Image();
    const frame = { val: 0 };

    const render = () => {
      const { width, height } = canvas;
      const { width: aWidth, height: aHeight } = ambientCanvas;
      ctx.clearRect(0, 0, width, height);
      ambientCtx.clearRect(0, 0, aWidth, aHeight);
      ambientCtx.globalAlpha = 0.6;
      ambientCtx.drawImage(img, -aWidth * 0.1, -aHeight * 0.1, aWidth * 1.2, aHeight * 1.2);
      
      const scale = 1 + frame.val * 0.25;
      const rotation = frame.val * 0.15;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);
      ctx.drawImage(img, -width / 4, -height / 4, width / 2, height / 2);
      ctx.restore();
    };

    img.onload = () => {
      render();
      gsap.to(frame, {
        val: 1,
        scrollTrigger: {
          trigger: '#hero-scroller',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
          onUpdate: render
        }
      });
      gsap.to('.hero-title', {
        opacity: 0,
        y: -150,
        filter: 'blur(20px)',
        scrollTrigger: {
          trigger: '#hero-scroller',
          start: 'top top',
          end: '+=800',
          scrub: true
        }
      });
    };
    img.src = heroTooth;

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [location]);

  return (
    <>
      <div id="hero-scroller" style={{ height: '500vh' }}>
        <div id="hero-canvas-container">
          <canvas ref={ambientCanvasRef} id="ambient-canvas" />
          <canvas ref={canvasRef} id="hero-canvas" />
          <div className="hero-overlay">
            <div className="hero-badge">EXPERIENCE MODERN DENTISTRY</div>
            <h1 className="heading-xl hero-title">
              YOUR SMILE<br />OUR MASTERPIECE
            </h1>
            <p className="hero-sub">
              Advanced dental care meets cinematic luxury. We don't just treat teeth;
              we design smiles that last a lifetime.
            </p>
            <Link to="/book" className="pill-button" style={{ marginTop: '2rem', pointerEvents: 'auto', textDecoration: 'none' }}>
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <section id="services" className="section-white">
        <div className="intro-container">
          <span className="eyebrow">The Standard of Care</span>
          <h2 className="heading-xl" style={{ color: '#0b0b0b' }}>A NEW ERA OF<br />ORAL EXCELLENCE</h2>
          <p style={{ maxWidth: '650px', margin: '2.5rem auto', fontSize: '1.25rem', color: '#444', lineHeight: 1.6 }}>
            At Coral Dentistry, we don't just fix teeth—we engineer confidence. 
            Our clinic combines sterile precision with a luxury patient experience.
          </p>
          <div className="feature-row">
            <div className="feature-item">
              <ShieldCheck size={40} color="#0D9488" />
              <h4>Sterile Excellence</h4>
            </div>
            <div className="feature-item">
              <Award size={40} color="#0D9488" />
              <h4>Award Winning</h4>
            </div>
            <div className="feature-item">
              <Clock size={40} color="#0D9488" />
              <h4>Emergency Care</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <h3 className="heading-xl" style={{ fontSize: '3.5rem' }}>ELITE SERVICES</h3>
          <div className="nav-btns">
            <button className="icon-btn" onClick={() => {
              const container = document.querySelector('.carousel-container');
              container.scrollBy({ left: -400, behavior: 'smooth' });
            }}><ChevronLeft /></button>
            <button className="icon-btn" onClick={() => {
              const container = document.querySelector('.carousel-container');
              container.scrollBy({ left: 400, behavior: 'smooth' });
            }}><ChevronRight /></button>
          </div>
        </div>
        <div className="carousel-container">
          {[
            { id: "orthodontics", title: "Digital Orthodontics", category: "Alignment", desc: "Next-gen clear aligners for a perfect bite." },
            { id: "whitening", title: "Laser Teeth Whitening", category: "Cosmetic", desc: "Instant brilliance with zero sensitivity." },
            { id: "implants", title: "Precision Implants", category: "Restorative", desc: "Seamless integration, lifelong durability." },
            { id: "rootcanal", title: "Advanced Root Canal", category: "Endodontics", desc: "Pain-free procedures with rotary technology." }
          ].map((s, i) => (
            <div className="card" key={i}>
              <div className="card-img-container">
                <Smile size={80} color="#0D9488" className="card-icon" />
              </div>
              <div className="card-body">
                <span className="card-cat">{s.category}</span>
                <h4 className="card-title">{s.title}</h4>
                <p className="card-desc">{s.desc}</p>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <Link to={`/service/${s.id}`} className="pill-button small" style={{ textDecoration: 'none' }}>View Details</Link>
                  <Link to="/book" className="card-link" style={{ textDecoration: 'none', color: '#ff7f50', fontSize: '0.8rem' }}>Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: 0 }}>
        <div className="cinematic-banner">
          <img src={clinicBanner} alt="Modern Clinic Interior" className="banner-img" />
          <div className="banner-overlay">
            <div className="banner-content">
              <h2 className="heading-xl" style={{ color: '#fff' }}>STEP INTO<br />A HIGHER STATE<br />OF CARE</h2>
              <button className="pill-button white" style={{ marginTop: '2rem' }}>Clinic Gallery</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-dark">
        <div className="grid-container" style={{ gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 className="heading-xl" style={{ color: '#fff' }}>VISIT US</h2>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin color="#0D9488" />
                <p>Nandagopalapuram West, 33C, East Coast Rd,<br />TMC Colony, Ezhil Nagar, Thoothukudi, TN</p>
              </div>
              <div className="contact-item">
                <Phone color="#0D9488" />
                <p>+91 98765 43210</p>
              </div>
              <div className="contact-item">
                <Star color="#0D9488" />
                <p>5.0 Google Rated Clinic</p>
              </div>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Clinic Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.435728345!2d78.1368!3d8.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDgnNDUuMCJOIDc4wrAwOCcxMi41IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%" height="400" style={{ border: 0 }} loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const BookingPage = () => {
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="booking-page-container">
      <BookingForm />
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    
    window.lenis = lenis;
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 500) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`scroll-top ${visible ? 'visible' : ''}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default App;
