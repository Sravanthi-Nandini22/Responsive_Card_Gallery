import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-body">
        <span className="card-badge">{item.category}</span>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.shortDesc}</p>
        <Link to={`/gallery/${item.id}`} className="card-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;