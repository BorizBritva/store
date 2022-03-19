import PropTypes from 'prop-types';
import Button from "./Button";

function IconSwitch({icon, onSwitch}) {

  return (
      <div className="switch-icon">
        <Button icon={icon} onSwitch={onSwitch}/>
      </div>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func
}

export default IconSwitch;
