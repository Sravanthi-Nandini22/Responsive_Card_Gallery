import { useParams, useNavigate } from 'react-router-dom';
import { galleryData } from '../data/items';

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const item = galleryData.find((card) => card.id === parseInt(id));

  if (!item) {
    return <div className="error-message"><h3>Item not found!</h3></div>;
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate('/gallery')}>
        ← Back to Gallery
      </button>
      <div className="details-content">
        <div className="details-img-wrapper">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="details-info">
          <span className="card-badge">{item.category}</span>
          <h2>{item.title}</h2>
          <p className="full-desc">{item.fullDesc}</p>
          <div className="additional-info">
            <p><strong>Status:</strong> Available Online</p>
            <p><strong>Resolution:</strong> 600 x 400 pixels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;