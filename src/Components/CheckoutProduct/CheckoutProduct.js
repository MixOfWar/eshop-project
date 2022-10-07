import './CheckoutProduct.css';

const CheckoutProduct = () => {

  return (
    <div className="checkout_product">
      <img src="" alt="" className="checkout_product__image" />

      <div className="checkout_product__info">
        <p className="checkout_product__title">title</p>
        <p className="checkout_product__price">
          <small>$</small>
          <strong>price</strong>
        </p>
        <div className="checkout_product__rating">
          {Array(3)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
};

export default CheckoutProduct;