import ShopCard from './ShopCard';
import PropTypes from 'prop-types';
const shortid = require('shortid');

function CardsView({products}) {
  const getData = (data) => {
    if (data.length) {
      return (
        <ul className="projects-list">
          {
            data.map((d) => {
              return <ShopCard key={shortid.generate()} items={d}/>
            })
          }
        </ul>
      )
    }
    return null;
  }

  return (
    <div className="product-card-wrap">
      {getData(products)}
    </div>
  )
}

CardsView.propTypes = {
  products: PropTypes.array.isRequired
}

export default CardsView;
