import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to the Responsive Cards Gallery</h1>
        <p>Explore a beautiful collection of curated visual moments from around the world. Designed with love and built using React.</p>
        <Link to="/gallery" className="hero-btn">Explore Gallery →</Link>
      </header>
    </div>
  );
};

export default Home;