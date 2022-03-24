import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
const shortid = require('shortid');

function ListView({products}) {
  const getData = (data) => {
    if (data.length) {
      return (
        <ul className="product-list-grid">
          {
            data.map((d) => {
              return <ShopItem key={shortid.generate()} items={d}/>
            })
          }
        </ul>
      )
    }
    return null;
  }

  return (
    <div className="product-list-wrap">
      {getData(products)}
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.array.isRequired
}

export default ListView;
