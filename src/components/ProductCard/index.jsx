import './styles.css';

export const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <div>
        <h3>{product.title}</h3>
        <p>{product.body}</p>
      </div>
      <div>
        <p>{product.price}</p>
      </div>
    </div>
  );
};
