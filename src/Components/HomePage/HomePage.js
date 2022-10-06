import { Product } from '../index.js';
import products from '../../products.js';
import "./HomePage.css";

const HomePage = () => {

  return (
      <div className="home_page">
        <div className="home_page__container">
          <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg" alt="Two computer monitors sitting left and right facing each other with a singular hand reaching out of each monitor towards the other monitor. In the hand coming out of the left hand monitor is a credit card, and in the hand coming out of the right monitor is a shopping bag. " className="home_page__image" />
        </div>

        <div className="home_page__row">
        {products && products.map((item) => 
          <Product key={item.id} item={item} />
          )}
        </div>
      </div>
  );
}

export default HomePage;