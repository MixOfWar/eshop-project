import './Subtotal.css';
import numberFormat from '../../utils/numberFormat.js';

const Subtotal = () => {

  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items):<strong>{numberFormat(0)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> 
        This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  )
};

export default Subtotal;