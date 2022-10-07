import './Product.css';

const Product = ({item}) => {

  return (
    <div className="product">
      <div className="product__info">
        <p>{item.title}</p>
        <p className="product__price">${item.price}</p>
        <div className="product__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
                <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={item.image} alt={item.description} className="product__image" />
      <button className="product__button">Add to Basket</button>
    </div>
  )
};

export default Product;