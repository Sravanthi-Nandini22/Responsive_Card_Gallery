const About = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '2rem 1rem' }}>
      <h2>About This Project</h2>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        This application is built as part of the Frontend React Grand Test
        framework to evaluate responsiveness, routing architecture, and
        semantic UI composition elements.
      </p>
      <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px', background: '#fff', marginTop: '1.5rem', textAlign: 'left' }}>
        <h3 style={{ marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Student Details</h3>
        <p><strong>Name:</strong> Sravanthi Nandini Gompa</p>
        <p><strong>Batch:</strong> Full Stack Web Development</p>
      </div>
    </div>
  );
};

export default About;