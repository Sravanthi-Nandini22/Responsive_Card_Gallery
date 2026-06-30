import { galleryData } from '../data/items';
import Card from '../components/Card.jsx';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2 className="page-title">Curated Gallery Collection</h2>
      <p className="page-subtitle">A minimum of 6 responsive cards featuring beautiful experiences.</p>
      <div className="grid-container">
        {galleryData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;