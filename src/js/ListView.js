import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView({products}) {

  return (
    <div className="product-list-wrap">
      <ul className="product-list-grid">
        {
          products.map((item, index) => {
            return <ShopItem key={index} items={item}/>
          })
        }
      </ul>
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.array.isRequired
}

export default ListView;
