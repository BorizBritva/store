import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

function CardsView({products}) {

  return (
    <div className="product-card-wrap">
      <ul className="product-card-grid">
        {
          products.map((item, index) => {
            return <ShopCard key={index} items={item}/>
          })
        }
      </ul>
    </div>
  )
}

CardsView.propTypes = {
  products: PropTypes.array.isRequired
}

export default CardsView;
