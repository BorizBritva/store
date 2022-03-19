import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

function Store({products}) {
  const [icon, setIcons] = useState("view_list")

  const handleSwitch = () => {
    setIcons(prevIcon => {
      return prevIcon==="view_list" ? "view_module" : "view_list"
    })
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={handleSwitch}/>
      {icon==="view_module" ? <ListView products={products} /> : <CardsView products={products}/>}
    </>
  )
}

Store.propTypes = {
  products: PropTypes.array.isRequired
}

export default Store;
