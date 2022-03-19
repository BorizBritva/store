import PropTypes from 'prop-types';

function ShopItem(props) {
  const {name, price, color, img} = props.items;

  return (
    <li className="product-list">
      <a href="#" className="product-list-item">
        <img src={img} alt={name} />
        <div className="product-list-desc">
          <h3 className="product-list-name">{name}</h3>
          <span className="product-list-color">{color}</span>
        </div>
        <div className="product-list-more">
          <span className="product-list-price">{`${price}$`}</span>
          <button className="to-cart">ADD TO CART</button>
        </div>
      </a>
    </li>
  )
}

ShopItem.propTypes = {
  items: PropTypes.object.isRequired
}

export default ShopItem;
