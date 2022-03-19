import PropTypes from 'prop-types';

function ShopCard(props) {
  const {name, price, color, img} = props.items;

  return (
    <li className="product-card">
      <a href="#" className="product-card-item">
        <div className="product-card-desc">
          <h3 className="product-card-name">{name}</h3>
          <span className="product-card-color">{color}</span>
        </div>
        <img src={img} alt={name} />
        <div className="product-card-more">
          <span className="product-card-price">{`${price}$`}</span>
          <button className="to-cart">ADD TO CART</button>
        </div>
      </a>
    </li>
  )
}

ShopCard.propTypes = {
  items: PropTypes.object.isRequired
}

export default ShopCard;
