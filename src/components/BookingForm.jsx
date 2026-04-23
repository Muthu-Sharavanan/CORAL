import React, { useState } from 'react';
import { Smile, CheckCircle2 } from 'lucide-react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="booking-card">
      {!submitted ? (
        <>
          <div className="booking-header">
            <h2 className="heading-xl" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Book Appointment</h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Fill in your details and we'll confirm shortly.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="booking-grid">
            <div className="field-group">
              <label>First Name</label>
              <input type="text" placeholder="Arjun" required />
            </div>
            <div className="field-group">
              <label>Last Name</label>
              <input type="text" placeholder="Kumar" required />
            </div>
            
            <div className="field-group">
              <label>Phone</label>
              <input type="tel" placeholder="+91 98765 43210" required />
            </div>
            <div className="field-group">
              <label>Email</label>
              <input type="email" placeholder="you@email.com" required />
            </div>
            
            <div className="field-group">
              <label>Preferred Date</label>
              <input type="date" required />
            </div>
            <div className="field-group">
              <label>Service</label>
              <select required>
                <option value="">Select Service</option>
                <option>General Check-up</option>
                <option>Teeth Cleaning</option>
                <option>Laser Whitening</option>
                <option>Orthodontics</option>
                <option>Root Canal</option>
                <option>Dental Implants</option>
              </select>
            </div>
            
            <div className="field-group full">
              <label>Message (Optional)</label>
              <textarea placeholder="Any specific concerns..." rows="4"></textarea>
            </div>
            
            <button type="submit" className="pill-button" style={{ background: '#ff7f50', width: '100%', padding: '20px' }}>
              Confirm Appointment ✓
            </button>
          </form>
        </>
      ) : (
        <div className="success-message">
          <CheckCircle2 size={80} color="#0D9488" />
          <h2 className="heading-xl" style={{ fontSize: '2rem', margin: '1.5rem 0' }}>Request Sent!</h2>
          <p>Thank you for choosing Coral Dentistry. Our team will contact you shortly to confirm your visit.</p>
          <button onClick={() => setSubmitted(false)} className="pill-button white" style={{ marginTop: '2rem' }}>
            Book Another
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
