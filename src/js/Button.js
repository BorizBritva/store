import Icon from "./Icon";

function Button({icon, onSwitch}) {

  return (
        <button className="btn switch-icon-btn" onClick={onSwitch}>
          <Icon icon={icon}/>
        </button>
  )
}

export default Button;
