import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      {submitted ? (
        <div className="success-banner">Thank you! Your submission has been captured.</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" required placeholder="Type your message here..."></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;